const { Model, User, Reviews } = require("../db");

//* Task 54
const addReview = async (req, res) => {
  try {
    const { idModel } = req.params;
    const { idUser, text, score } = req.body;

    const user = await User.findByPk(idUser, {
      include: [
        {
          model: Model
        }
      ]
    });
    console.log(user);
    const model = await Model.findByPk(idModel);

    if(user.models[0] === undefined) {
      model.addUser(user, { through: { text, score }});
      res.status(201).json({ message: "Review creada" });
    } else {
      for(let modelUser of user.models) {
        if(modelUser.reviews.userId === parseInt(idUser) && modelUser.reviews.modelId === parseInt(idModel)) {
          return res.status(409).json({ message: "Ya realizo una review en este producto" })
        }
      }

      model.addUser(user, { through: { text, score }});
      return res.status(201).json({ message: "Review creada" })
    }
  } catch (error) {
    console.log(error);
    res.status(500).json([{Error: "something was wrong"}]);
  }
}

//* Task 55
const updateReview = async (req, res) => {
  try {
    const { idModel, idReview } = req.params;
    const { text, score } = req.body;

    const review = await Reviews.findByPk(idReview)
    if(review) {
      if(review.modelId === parseInt(idModel)) {
        await Reviews.update({ text, score },{
          where: { id: idReview }
        })
        return res.status(200).json([{ message: 'Review actualizada'}])
      }
      return res.status(404).json([{ message: 'La review no corresponde con el producto'}])
    } else {
      res.status(404).json({ message: 'Review no existe'})
    }
  } catch (error) {
    console.log(error);
    res.status(500).json([{Error: "something was wrong"}]);
  }
}

//* Task 56
const deleteReview = async(req, res) => {
  try {
    const { idModel, idReview } = req.params;
    const review = await Reviews.findByPk(idReview)
    if(review) {
      if(review.modelId === parseInt(idModel)) {
        await Reviews.destroy({
          where: { id: idReview }
        })
        return res.status(200).json({ message: "Review eliminada"})
      }

      return res.status(404).json({ message: "La review no coincide con el producto"})

    } else {
      res.status(404).json({ message: "Review no encontrada" })
    }

    res.json(review)
  } catch (error) {
    console.log(error);
    res.status(500).json([{ Error: "something was wrong" }]);
  }

}

//* Task 57
const getReview = async (req, res) => {
  try {
    const { idModel } = req.params;
    const reviews = await Reviews.findAll({
      where: {
        modelId: idModel,
      }
    })
    if(reviews[0] !== undefined) {
      return res.status(200).json(reviews)
    } else {
      return res.status(404).json({ message: "No hay reviews en este producto" })
    }
  } catch (error) {
    console.log(error);
    res.status(500).json([{ Error: "something was wrong" }])
  }
}

module.exports = {
  addReview,
  updateReview,
  getReview,
  deleteReview
}

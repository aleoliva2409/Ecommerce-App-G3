const { Prueba } = require("../db");

const prueba = (req, res) => {
  res.send("Pruebas");
};

const postPrueba = async(req, res) => {
  const data = await Prueba.create({
    name: "Alejandro"
  })

  res.json(data)
};


module.exports = {
  prueba,
  postPrueba
};

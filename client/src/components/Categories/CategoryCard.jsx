import React, { useState } from "react";
import { Typography, Button, Snackbar } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { delCategory } from "../../redux/actions/categoriesActions";
import MuiAlert from "@material-ui/lab/Alert";

const CategoryCard = ({ name, id, image, description }) => {
  const state = useSelector((state) => state.categories.message);

  const dispatch = useDispatch();

  const deleteCategory = () => {
    dispatch(delCategory(id));
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const [del, setDel] = useState(false);

  const handleClick = () => {
    setDel(true);
  };

  const handleDelClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setDel(false);
  };

  const combineClick = () => {
    handleClick()
    deleteCategory()
  }

  return (
    <div>
      <>
        <Typography>{name}</Typography>
        <Typography>{description}</Typography>
        <Typography>{image}</Typography>
        <Button onClick={combineClick}>X</Button>
        {state.success ? (
          <Snackbar open={del} onClose={handleDelClose}>
            <Alert onClose={handleDelClose} severity="success">
              {state.success}
            </Alert>
          </Snackbar>
        ) : (
          <Snackbar open={del} onClose={handleDelClose}>
            <Alert onClose={handleDelClose} severity="error">
              {state.error}
            </Alert>
          </Snackbar>
        )}
      </>
    </div>
  );
};

export default CategoryCard;

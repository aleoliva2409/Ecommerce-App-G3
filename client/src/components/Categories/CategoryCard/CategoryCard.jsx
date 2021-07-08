import React, { useState } from "react";
import { Typography, Button, Snackbar, Modal } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { delCategory } from "../../../redux/actions/categoriesActions";
import MuiAlert from "@material-ui/lab/Alert";
import useStyles from "./CategoryCardStyles";  // styles file already import

  function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

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
    handleClose()
    handleClick()
    deleteCategory()
  }

  
// modal para confirmacion:

const [modalStyle] = useState(getModalStyle);

const classes = useStyles();

const [open, setOpen] = useState(false);

const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2>DELETING {name}</h2>
      <h2>ARE YOU SURE?</h2>
      <Button onClick={combineClick}>YES</Button>
      <Button onClick={handleClose}>NO</Button>
    </div>
  );

  return (
    <div>
      <>
        <Typography>{name}</Typography>
        <Typography>{description}</Typography>
        <Typography>{image}</Typography>
        <Button onClick={handleOpen}>X</Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
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
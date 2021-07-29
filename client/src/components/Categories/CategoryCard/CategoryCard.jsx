import React, { useState } from "react";
import { Typography, Button, IconButton, Snackbar, Modal, makeStyles, Box } from "@material-ui/core";
import { Close } from '@material-ui/icons';
import { useDispatch, useSelector } from "react-redux";
import { delCategory } from "../../../redux/actions/categoriesActions";
import MuiAlert from "@material-ui/lab/Alert";
import { categoryCardStyle } from "./CategoryCardStyles";

const useStyles = makeStyles(categoryCardStyle);

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
const styles = useStyles();
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

const [open, setOpen] = useState(false);

const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <Box component="div" style={modalStyle} className={styles.paper}>
      <Typography variant="h5">Está por borrar "{name}". Desea continuar?</Typography>
      <Box component="div" className={styles.buttons}>
        <Button variant="contained" color="primary" onClick={handleClose}>NO</Button>
        <Button variant="contained" color="primary" onClick={combineClick}>YES</Button>
      </Box>
    </Box>
  );

  return (
    <div className={styles.cardContainer}>
      <Typography variant={"h4"} className={styles.title}>{name}</Typography>
      {/* <Typography variant={"subtitle2"} className={styles.description}>{description}</Typography> */}
      {/* <Typography>{image}</Typography> */}
      <IconButton onClick={handleOpen} className={styles.close}><Close /></IconButton>
      <Modal open={open} onClose={handleClose} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description" >
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
    </div>
  );
};

export default CategoryCard;

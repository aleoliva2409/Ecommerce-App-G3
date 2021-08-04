import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Container, Snackbar, Typography, makeStyles, Button, Box } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { createCategory } from "../../../redux/actions/categoriesActions.js";
import { categoryStyles } from "./AddCategoriesStyles.js";

const useStyles = makeStyles(categoryStyles)

export default function AddCategory() {
  const styles = useStyles();

  const dispatch = useDispatch();

  const state = useSelector((state) => state.categories.message);

  const [data, setData] = useState({
    name: "",
    description: "",
  });

  const handleInputChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const enviarDatos = (event) => {
    event.preventDefault();
    dispatch(createCategory(data));
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Container className={styles.categoryContainer}>
      <Typography align="center" variant="h5" color="initial">
        AGREGAR CATEGORIA
      </Typography>
      <div className={styles.line}/>
      <Box className={styles.textField} component="form" onSubmit={enviarDatos}>
        <TextField className={styles.item} type="text" placeholder="Nombre" name="name" variant="outlined" required onChange={handleInputChange}/>
        <TextField className={styles.item} type="text" placeholder="Descripción" name="description" variant="outlined" multiline onChange={handleInputChange}/>
        <Button className={styles.button} size="large" variant="contained" type="submit" onClick={handleClick}>Agregar</Button>
        {state.success ? (
          <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              {state.success}
            </Alert>
          </Snackbar>
        ) : (
          <Snackbar open={open} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
              {state.error}
            </Alert>
          </Snackbar>
        )}
      </Box>
    </Container>
  );
}

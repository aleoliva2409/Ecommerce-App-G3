import React from "react";
import { TextField, Button, Box } from "@material-ui/core";
import useStyles from './AddProduct';

const AddForm = ({ product }) => {

  const classes = useStyles()

  return (
    <form>
      <TextField id="name" label="Nombre" variant="outlined" margin="normal" className={classes.textField}/>
      <TextField id="size" label="Medida" variant="outlined" margin="normal" className={classes.textField} fullWidth/>
      <TextField
        id="description"
        label="Descripción"
        variant="outlined"
        margin="normal"
        className={classes.textField}
      />

      <TextField
        id="image"
        label="URL imagen"
        variant="outlined"
        margin="normal"
        className={classes.textField}
      />
      <TextField id="stock" label="Stock" variant="outlined" margin="normal" className={classes.textField}/>
      <TextField id="price" label="Price" variant="outlined" margin="normal" className={classes.textField}/>
      <Box>
        <Button variant="contained" color="primary">
          Enviar
        </Button>
      </Box>
    </form>
  );
};

export default AddForm;

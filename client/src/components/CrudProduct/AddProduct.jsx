import React, { useState } from "react";
import { FormControl, TextField, Select, MenuItem, InputLabel, Button, Box } from "@material-ui/core";
import useStyles from "./AddProduct";

const AddForm = ({ product, btnState, btnChange, categories }) => {
  const classes = useStyles();

  const [formProduct, setFormProduct] = useState({
    name: "",
    size: "",
    description: "",
    image: "",
    stock: 0,
    price: 0,
    categories: []
  })

  if(product.name) {
    btnChange(false)
  }

  const handleForm = (e) => {
    setFormProduct({
      ...formProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    btnChange(false);
    e.preventDefault();
  }

  return (
    <form onClick={handleSubmit}>
      <TextField
        id="name"
        label="Nombre"
        variant="outlined"
        margin="normal"
        className={classes.textField}
        value={formProduct.name}
        onChange={handleForm}
      />
      <TextField
        id="size"
        label="Medida"
        variant="outlined"
        margin="normal"
        className={classes.textField}
        value={formProduct.size}
        onChange={handleForm}
      />
      <TextField
        id="description"
        label="Descripción"
        variant="outlined"
        margin="normal"
        className={classes.textField}
        value={formProduct.description}
        onChange={handleForm}
      />
      <TextField
        id="image"
        label="URL imagen"
        variant="outlined"
        margin="normal"
        className={classes.textField}
        value={formProduct.image}
        onChange={handleForm}
      />
      <TextField
        id="stock"
        label="Stock"
        variant="outlined"
        margin="normal"
        className={classes.textField}
        value={formProduct.stock}
        onChange={handleForm}
      />
      <TextField
        id="price"
        label="Price"
        variant="outlined"
        margin="normal"
        className={classes.textField}
        value={formProduct.price}
        onChange={handleForm}
      />
      <Select
        id="category"
        label="Category"
        variant="outlined"
        defaultValue={formProduct.categories}
        onChange={handleForm}
        name="categories"
        multiple
      >
        <MenuItem value="DEFAULT" selected disabled>
          <em>None</em>
        </MenuItem>
        {
          categories &&
          categories.map(category => (
            <MenuItem value={category.name} key={category.name}>
              {category.name}
            </MenuItem>
          ))
        }
      </Select>
      <Box display="flex" justifyContent="flex-end" alignItems="center" my={2}>
        {
          product.name ?
          <button >
            Editar
          </button>
          :
          <button >
            Agregar
          </button>
        }
      </Box>
    </form>

  );
};

export default AddForm;

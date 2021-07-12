import React, { useEffect, useState } from "react";
import { TextField, Select, MenuItem, Button, Box, FormControl } from "@material-ui/core";
import useStyles from "./AddProductStyle";
import { useSelector } from "react-redux";
import { updateProduct } from "../../redux/actions/productActions";

const AddForm = ({ product, btnState, btnChange, categories }) => {
  const classes = useStyles();

  // const produc = useSelector(state => state.produc)
  // const [edit, setEdit] = useState(null)
  // const [add, setAdd] = useState(null)
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

  // useEffect(() => {
  //   if(submit) {
  //     dispatch(updateProduct(product.id, product))
  //   }
  // }, [submit])

  const handleSubmit = (update) => {
    if(update) {

    }
  }

  return (
    <FormControl>
      <TextField
        id="name"
        name="name"
        label="Nombre"
        variant="outlined"
        margin="normal"
        className={classes.textField}
        value={formProduct.name ? formProduct.name : product.name}
        onChange={handleForm}
      />
      <TextField
        id="size"
        name="size"
        label="Medida"
        variant="outlined"
        margin="normal"
        className={classes.textField}
        value={formProduct.size ? formProduct.size : product.size}
        onChange={handleForm}
      />
      <TextField
        id="description"
        name="description"
        label="Descripción"
        variant="outlined"
        margin="normal"
        className={classes.textField}
        value={formProduct.description ? formProduct.description : product.description}
        onChange={handleForm}
      />
      <TextField
        id="image"
        name="image"
        label="URL imagen"
        variant="outlined"
        margin="normal"
        className={classes.textField}
        value={formProduct.image ? formProduct.image : product.image}
        onChange={handleForm}
      />
      <TextField
        id="stock"
        name="stock"
        label="Stock"
        variant="outlined"
        margin="normal"
        className={classes.textField}
        value={formProduct.stock ? formProduct.stock : product.stock}
        onChange={handleForm}
      />
      <TextField
        id="price"
        name="price"
        label="Price"
        variant="outlined"
        margin="normal"
        className={classes.textField}
        value={formProduct.price ? formProduct.price : product.price}
        onChange={handleForm}
      />
      <Select
        id="category"
        label="Category"
        variant="outlined"
        defaultValue={categories}
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
          <Button onClick={handleSubmit(true)}>
            Editar
          </Button>
          :
          <Button onClick={handleSubmit(false)}>
            Agregar
          </Button>
        }
      </Box>
    </FormControl>

  );
};

export default AddForm;

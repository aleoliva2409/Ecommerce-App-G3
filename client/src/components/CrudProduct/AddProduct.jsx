import React, { useState } from "react";
import { TextField, Select, MenuItem, Button, Box, FormControl } from "@material-ui/core";
import useStyles from "./AddProductStyle";
import { useDispatch } from "react-redux";
import { updateProduct, addProduct } from "../../redux/actions/productActions";

const AddForm = ({ product, btnState, btnChange, categories, state, setState }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [formProduct, setFormProduct] = useState({
    name: "",
    size: "",
    description: "",
    color: "",
    image: [],
    stock: 0,
    price: 0,
    categories: []
  })


  const handleForm = (e) => {
    if(e.target.name === "image"){
      let imageArr = formProduct.image;
      if(formProduct.image.includes(e.target.value)){
        imageArr = formProduct.image.filter( el => e.target.value !== el);
      }else{
        imageArr.push(e.target.value);
      }
      setFormProduct({
        ...formProduct,
        [e.target.name]: imageArr
      });
    }else{
      setFormProduct({
        ...formProduct,
        [e.target.name]: e.target.value,
      });
    }
  };


  const editProduct = (id,product) => {
    dispatch(updateProduct(id,product))
    setState(true)
  }

  const addProductForm = (product) => {
    dispatch(addProduct(product))
    setState(true)
    setFormProduct({
      name: "",
      size: "",
      description: "",
      color: "",
      image: [],
      stock: 0,
      price: 0,
      categories: []
    })
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
        required
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
        id="color"
        name="color"
        label="Color"
        variant="outlined"
        margin="normal"
        className={classes.textField}
        value={formProduct.color ? formProduct.color : product.color}
        onChange={handleForm}
      />
      <TextField
        id="image"
        name="image"
        label="URL imagen"
        variant="outlined"
        margin="normal"
        className={classes.textField}
        // value={formProduct.image[0] !== undefined ? "" : product.image[0]}
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
        required
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
        required
      />
      <Select
        id="category"
        label="Category"
        variant="outlined"
        defaultValue={categories}
        onChange={handleForm}
        name="categories"
        multiple
        required
      >
        <MenuItem value="DEFAULT" selected disabled>
          <em>None</em>
        </MenuItem>
        {
          categories &&
          categories.map(category => (
            <MenuItem value={category.id} key={category.name}>
              {category.name}
            </MenuItem>
          ))
        }
      </Select>
      <Box display="flex" justifyContent="flex-end" alignItems="center" my={2}>
        {
          product.name ?
          <Button onClick={() => editProduct(product.id, formProduct)}>
            Editar
          </Button>
          :
          <Button onClick={() => addProductForm(formProduct)}>
            Agregar
          </Button>
        }
      </Box>
    </FormControl>

  );
};

export default AddForm;

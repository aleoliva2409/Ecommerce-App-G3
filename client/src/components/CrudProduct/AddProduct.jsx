import React, { useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  Button,
  Box,
} from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import AddIcon from "@material-ui/icons/Add";
import useStyles from "./AddProductStyle";
import { useDispatch } from "react-redux";
import { addModelAndProduct, addProductOnly } from "../../redux/actions/productActions";

const AddProduct = ({ productsAll, categories, setState, open, formOpen, formClose }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [formProduct, setFormProduct] = useState({
    model: "",
    name: "",
    brand: "",
    size: "",
    sizeMattress: "",
    description: "",
    color: "",
    image: "",
    stock: 0,
    price: 0,
    categories: [],
  });

  const handleForm = (e) => {
    setFormProduct({
      ...formProduct,
      [e.target.name]: e.target.value
    })
  }

  const addProductForm = (e) => {
    if (formProduct.model) {
      dispatch(addProductOnly(formProduct, formProduct.model))
    } else {
      dispatch(addModelAndProduct(formProduct))
    }
    setState(true);
    setFormProduct({
      model: "",
      name: "",
      brand: "",
      size: "",
      sizeMattress: "",
      description: "",
      color: "",
      image: "",
      stock: 0,
      price: 0,
      categories: [],
    });
    e.preventDefault();
  };

  return (
    <>
      <Button
        onClick={formOpen}
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<AddIcon />}
      >
        Agregar producto
      </Button>
      <Dialog open={open} onClose={formClose}>
        <DialogContent>
          <form className={classes.formAddProduct} onSubmit={addProductForm}>
            <Select
              id="model"
              label="Modelo de Producto"
              variant="outlined"
              defaultValue={productsAll}
              onChange={handleForm}
              name="model"
              required
              className={classes.field}
            >
              <MenuItem value="DEFAULT" selected disabled>
                <em>None</em>
              </MenuItem>
              <MenuItem value={false}>
                Nuevo producto +
              </MenuItem>
              {productsAll &&
                productsAll.map((product) => (
                  <MenuItem value={product.id} key={product.name}>
                    {product.name}
                  </MenuItem>
                ))}
            </Select>
            <TextField
              id="name"
              name="name"
              label="Nombre"
              variant="outlined"
              margin="normal"
              fullWidth="true"
              className={classes.field}
              value={formProduct.name}
              onChange={handleForm}
              required
            />
            <TextField
              id="brand"
              name="brand"
              label="Marca"
              variant="outlined"
              margin="normal"
              fullWidth="true"
              className={classes.field}
              value={formProduct.brand}
              onChange={handleForm}
            />
            <Box component="div" className={classes.measures}>
              <TextField
                id="size"
                name="size"
                label="Medida(cm)"
                variant="outlined"
                margin="normal"
                fullWidth="true"
                className={classes.measuresField}
                value={formProduct.size}
                onChange={handleForm}
                required
              />
              X
              <TextField
                id="sizeMattress"
                name="sizeMattress"
                label="Medida"
                variant="outlined"
                margin="normal"
                fullWidth="true"
                className={classes.measuresField}
                value={formProduct.sizeMattress}
                onChange={handleForm}
              />
            </Box>
            <TextField
              id="description"
              name="description"
              label="Descripción"
              variant="outlined"
              margin="normal"
              fullWidth="true"
              className={classes.field}
              value={formProduct.description}
              onChange={handleForm}
              multiline
              rows={4}
              required
            />
            <TextField
              id="color"
              name="color"
              label="Color"
              variant="outlined"
              margin="normal"
              fullWidth="true"
              className={classes.field}
              value={formProduct.color}
              onChange={handleForm}
              required
            />
            <TextField
              id="image"
              name="image"
              label="URL imagen"
              variant="outlined"
              margin="normal"
              fullWidth="true"
              className={classes.field}
              value={formProduct.image}
              onChange={handleForm}
              required
            />
            <TextField
              id="stock"
              name="stock"
              label="Stock"
              variant="outlined"
              margin="normal"
              fullWidth="true"
              className={classes.field}
              value={formProduct.stock}
              onChange={handleForm}
              required
            />
            <TextField
              id="price"
              name="price"
              label="Price"
              variant="outlined"
              margin="normal"
              fullWidth="true"
              className={classes.field}
              value={formProduct.price}
              onChange={handleForm}
              required
            />
            <Select
              id="category"
              label="Category"
              variant="outlined"
              defaultValue={formProduct.categories}
              onChange={handleForm}
              name="categories"
              multiple
              required
              className={classes.field}
            >
              <MenuItem value="DEFAULT" selected disabled>
                <em>None</em>
              </MenuItem>
              {categories &&
                categories.map((category) => (
                  <MenuItem value={category.id} key={category.name}>
                    {category.name}
                  </MenuItem>
                ))}
            </Select>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              my={2}
            >
              <Button variant="contained" color="primary" type="submit">
                Agregar
              </Button>
            </Box>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddProduct;

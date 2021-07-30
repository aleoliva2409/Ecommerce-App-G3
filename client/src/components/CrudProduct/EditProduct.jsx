import React, { useState } from "react";
import { DialogContent, Dialog, TextField, Select, MenuItem, Button, Box } from "@material-ui/core";
import useStyles from "./AddProductStyle";
import { useDispatch } from "react-redux";
import { updateProduct } from "../../redux/actions/productActions";

const EditProduct = ({ productsAll, product, categories, setState, open, formClose }) => {
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

  const editProduct = (e) => {
    dispatch(updateProduct(product.id, product.products[0].id, formProduct));
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
      <Dialog open={open} onClose={formClose}>
        <DialogContent>
          <form className={classes.formAddProduct} onSubmit={editProduct}>
            <Select
              id="model"
              label="Modelo de Producto"
              variant="outlined"
              defaultValue={product.id}
              onChange={handleForm}
              name="model"
              required
              className={classes.field}
            >
              <MenuItem value={product.id} selected >
                {product.name}
              </MenuItem>
              {productsAll &&
                productsAll.map((product) => (
                  <MenuItem value={product.id} key={product.name}>
                    {product.name}
                  </MenuItem>
                ))}
            </Select>
            <Box component="div" className={classes.measures}>
              <TextField
                id="size"
                name="size"
                label="Medida(cm)"
                variant="outlined"
                margin="normal"
                value={product.products ? product.products[0].size : formProduct.size}
                onChange={handleForm}
                required
                className={classes.measuresField}
              />
              X
              <TextField
                id="sizeMattress"
                name="sizeMattress"
                label="Medida"
                variant="outlined"
                margin="normal"
                value={product.products ? product.products[0].sizeMattress : formProduct.sizeMattress}
                onChange={handleForm}
                className={classes.measuresField}
              />
            </Box>
            <TextField
              id="description"
              name="description"
              label="Descripción"
              variant="outlined"
              margin="normal"
              fullwidth="true"
              className={classes.field}
              value={
                product.description ?
                  product.description :
                  formProduct.description
              }
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
              fullwidth="true"
              className={classes.field}
              value={product.products ? product.products[0].color : formProduct.color}
              onChange={handleForm}
              required
            />
            <TextField
              id="image"
              name="image"
              label="URL imagen"
              variant="outlined"
              margin="normal"
              fullwidth="true"
              className={classes.field}
              value={product.image ? product.image : formProduct.image}
              onChange={handleForm}
              required
            />
            <TextField
              id="stock"
              name="stock"
              label="Stock"
              variant="outlined"
              margin="normal"
              fullwidth="true"
              className={classes.field}
              value={product.products ? product.products[0].stock : formProduct.stock}
              onChange={handleForm}
              required
            />
            <TextField
              id="price"
              name="price"
              label="Price"
              variant="outlined"
              margin="normal"
              fullwidth="true"
              className={classes.field}
              value={product.products ? product.products[0].price : formProduct.price}
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
              className={classes.field}
            >
              <MenuItem value={categories} disabled selected>
                <em>None</em>
              </MenuItem>
              {categories &&
                categories.map((category) => (
                  <MenuItem value={category.id} key={category.name} selected={category.id === product.categoryId ? true : false}>
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
              <Button variant="contained" color="primary" type="submit" >
                Editar
              </Button>
            </Box>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EditProduct;

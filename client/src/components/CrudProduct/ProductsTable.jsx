import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { StyledTableCell, StyledTableRow, useStyles } from "./ProductsTableStyle";
import { useDispatch } from 'react-redux';
import { deleteProduct, getProductDetails } from "../../redux/actions/productActions";

const ProductsTable = ({ products, state, setState }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  // ? usar selector en AddForm

  const btnDelete = (id) => {
    dispatch(deleteProduct(id));
    setState(true);
  }

  const btnEdit = (id) => {
    // ? uso 2do parametro para que editAction
    dispatch(getProductDetails(id,true));
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="products table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">ID</StyledTableCell>
            <StyledTableCell align="center">Nombre</StyledTableCell>
            <StyledTableCell align="center">Medida</StyledTableCell>
            <StyledTableCell align="center">Stock</StyledTableCell>
            <StyledTableCell align="center">Precio</StyledTableCell>
            <StyledTableCell align="center">Editar</StyledTableCell>
            <StyledTableCell align="center">Eliminar</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products &&
            products.map((product) => (
              <StyledTableRow key={product.name}>
                <StyledTableCell align="center">{product.id}</StyledTableCell>
                <StyledTableCell align="center">{product.name}</StyledTableCell>
                <StyledTableCell align="center">{product.size}</StyledTableCell>
                <StyledTableCell align="center">
                  {product.stock}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {product.price}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <IconButton aria-label="edit" color="primary" onClick={() => btnEdit(product.id)}>
                    <EditIcon />
                  </IconButton>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <IconButton aria-label="delete" color="secondary" onClick={() => btnDelete(product.id)}>
                    <DeleteIcon />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductsTable;

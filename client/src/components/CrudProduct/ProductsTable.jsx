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
            <StyledTableCell className={classes.cells} align="center">ID</StyledTableCell>
            <StyledTableCell className={classes.cellsName} align="center">Nombre</StyledTableCell>
            <StyledTableCell className={classes.cells} align="center">Medida</StyledTableCell>
            <StyledTableCell className={classes.cells} align="center">Stock</StyledTableCell>
            <StyledTableCell className={classes.cells} align="center">Precio</StyledTableCell>
            <StyledTableCell className={classes.cells} align="center">Editar</StyledTableCell>
            <StyledTableCell className={classes.cells} align="center">Eliminar</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products &&
            products.map((product) => (
              <StyledTableRow key={product.name}>
                <StyledTableCell className={classes.cells} align="center">{product.id}</StyledTableCell>
                <StyledTableCell className={classes.cellsName} align="center">{product.name}</StyledTableCell>
                <StyledTableCell className={classes.cells} align="center">{product.size}</StyledTableCell>
                <StyledTableCell className={classes.cells} align="center">
                  {product.stock}
                </StyledTableCell>
                <StyledTableCell className={classes.cells} align="center">
                  {product.price}
                </StyledTableCell>
                <StyledTableCell className={classes.cells} align="center">
                  <IconButton aria-label="edit" color="primary" onClick={() => btnEdit(product.id)}>
                    <EditIcon />
                  </IconButton>
                </StyledTableCell>
                <StyledTableCell className={classes.cells} align="center">
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

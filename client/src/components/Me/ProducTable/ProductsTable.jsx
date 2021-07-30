import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CollapseTable from './CollapseTable';


const ProductsTable = ({ products, setState, formOpen }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="center">Producto</TableCell>
            <TableCell align="center">Nombre</TableCell>
            <TableCell align="center">Categoria/s</TableCell>
            <TableCell align="center">Marca</TableCell>
            <TableCell align="center">Imagen</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <CollapseTable key={product.id} model={product} setState={setState} formOpen={formOpen} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ProductsTable;

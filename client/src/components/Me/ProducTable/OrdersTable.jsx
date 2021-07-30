import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CollapseTable from './CollapseTable';
import useStyles from './CollapseStyle';


const ProductsTable = ({ orders }) => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell className={classes.th} align="center">ID Orden</TableCell>
            <TableCell className={classes.th} align="center">Fecha</TableCell>
            <TableCell className={classes.th} align="center">Estado de orden</TableCell>
            <TableCell className={classes.th} align="center">Recibe</TableCell>
            <TableCell className={classes.th} align="center">Dirección</TableCell>
            <TableCell className={classes.th} align="center">Ciudad</TableCell>
            <TableCell className={classes.th} align="center">Codigo postal</TableCell>
            <TableCell className={classes.th} align="center">Estado de envío</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders?.map((order) => (
            <CollapseTable key={order.id} order={order} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ProductsTable;

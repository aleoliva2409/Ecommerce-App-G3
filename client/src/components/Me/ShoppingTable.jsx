import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useStyles, StyledTableCell, StyledTableRow } from './ShoppingStyle'



function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(2, "11/21/15", "proceso", "en camino"),
  createData(5, "11/21/15", "proceso", "en camino"),
  createData(2, "11/21/15", "proceso", "en camino"),
  createData(23, "11/21/15", "proceso", "en camino"),
  createData(23, "11/21/15", "proceso", "en camino"),
];



const ShoppingTable = ({ user }) => {
  const classes = useStyles();
  console.log(user)
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">N° Orden</StyledTableCell>
            <StyledTableCell align="center">Fecha</StyledTableCell>
            <StyledTableCell align="center">Recibe</StyledTableCell>
            <StyledTableCell align="center">Estado de pago</StyledTableCell>
            <StyledTableCell align="center">Estado de envío</StyledTableCell>
            <StyledTableCell align="center">Costo de envío</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {user.orders.map((item) => (
            <StyledTableRow key={item.id}>
              <StyledTableCell align="center">{item.id}</StyledTableCell>
              <StyledTableCell align="center">{item.date}</StyledTableCell>
              <StyledTableCell align="center">{`${item.firstName} ${item.lastName}`}</StyledTableCell>
              <StyledTableCell align="center">{item.orderState}</StyledTableCell>
              <StyledTableCell align="center">{item.shippingState}</StyledTableCell>
              <StyledTableCell align="center">{item.shippingCost}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ShoppingTable;

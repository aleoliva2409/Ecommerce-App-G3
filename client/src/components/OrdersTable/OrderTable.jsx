import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Typography,
  Collapse,
  CardMedia
} from '@material-ui/core';
import {
  ExpandLess,
  ExpandMore
} from '@material-ui/icons';
import { useState } from 'react';
import { useStyles } from './OrderTable.js';
import OrderDetails from './OrderDetail/OrderDetail.jsx';

//* Rows Table Generator
const RowsTable = (props) => {

  //* Collapsable controler
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();

  return (
    <>
      <TableRow
        onClick={()=>setIsOpen(!isOpen)}
        className={classes.rows}
      >
        <TableCell
          className={classes.cells}
          size={"small"}
        >
          <IconButton size={"medium"}>
            {isOpen ? <ExpandLess/> : <ExpandMore/>}
          </IconButton>
        </TableCell>
        <TableCell
          className={classes.cells}
          align={"center"}
          >1</TableCell>             {/* ID */}
        <TableCell
          className={classes.cells}
          align={"center"}
        >                          {/* DATE */}
          28/09/1996
        </TableCell>
        <TableCell
          className={classes.cells}
          align={"center"}
        >
          Sebastian Garcia
        </TableCell>                               {/* NAME */}
        <TableCell
          className={classes.cells}
          align={"right"}
        >
          $50000
        </TableCell>                               {/* COST */}
        <TableCell
          className={classes.cells}
          align={"right"}
        >
          Processing
        </TableCell>                               {/* ORDER STATE */}
        <TableCell
          className={classes.cells}
          align={"right"}
        >
          Initial
        </TableCell>                               {/* SHIPPING STATE*/}
      </TableRow>
      <TableRow
        className={classes.collapse}
      >
        <TableCell
          className={classes.cells}
          colSpan={7}
        >
          <Collapse in={isOpen} timeout={"auto"} unmountOnExit>
            <OrderDetails></OrderDetails>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}

//* Table Structure
const OrdersTable = () => {

  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead
          className={classes.header}
        >
          <TableCell/>
          <TableCell align={"center"}>
            <Typography variant={"h5"} className={classes.headerText}>ID</Typography>
          </TableCell>
          <TableCell align={"center"}>
            <Typography variant={"h5"} className={classes.headerText}>Fecha</Typography>
          </TableCell>
          <TableCell align={"center"}>
            <Typography variant={"h5"} className={classes.headerText}>Cliente</Typography>
          </TableCell>
          <TableCell align={"right"}>
            <Typography variant={"h5"} className={classes.headerText}>Costo</Typography>
          </TableCell>
          <TableCell align={"right"}>
            <Typography variant={"h5"} className={classes.headerText}>Estado de Orden</Typography>
          </TableCell>
          <TableCell align={"right"}>
            <Typography variant={"h5"} className={classes.headerText}>Estado de Envio</Typography>
          </TableCell>
        </TableHead>
        <TableBody>
          {
            [1,1,1,1,1,1,1].map(()=><RowsTable/>)
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default OrdersTable;

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
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
  getOrders,
} from "../../redux/actions/ordersActions.js";
import { useStyles } from './OrderTableStyle.js';
import OrderDetails from './OrderDetail/OrderDetail.jsx';

//* Rows Table Generator
const RowsTable = (props) => {

  //* Collapsable controler
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();

  const getTotal = () => {
    let total = 0;
    for(let i=0; i < props.cart.length; i++){
      total += props.cart[i].price;
    }
    return total;
  }

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
          >{props.id}</TableCell>             {/* ID */}
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
          {`${props.firstName} ${props.lastName}`}
        </TableCell>                               {/* NAME */}
        <TableCell
          className={classes.cells}
          align={"right"}
        >
          {`$${getTotal()}`}
        </TableCell>                               {/* COST */}
        <TableCell
          className={classes.cells}
          align={"right"}
        >
          {props.orderState}
        </TableCell>                               {/* ORDER STATE */}
        <TableCell
          className={classes.cells}
          align={"right"}
        >
          {props.shippingState}
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
            <OrderDetails order={props}></OrderDetails>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}

//* Table Structure
const OrdersTable = () => {

  const classes = useStyles();
  const dispatch = useDispatch();
  const orders = useSelector(state => state.orders.ordersList);

  useEffect(()=>{
    dispatch(getOrders);
  },[])

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
            orders.map(el=><RowsTable order={el}/>)
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default OrdersTable;

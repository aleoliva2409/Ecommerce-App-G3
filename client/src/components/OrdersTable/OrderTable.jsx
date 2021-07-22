import {
  Grid,
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
  CardMedia,
  TableSortLabel,
  TableFooter,
  TablePagination,
  useTheme,
  makeStyles
} from '@material-ui/core';
import {
  ExpandLess,
  ExpandMore,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  FirstPage,
  LastPage
} from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
  getOrders,
} from "../../redux/actions/ordersActions.js";
import { useStyles } from './OrderTableStyle.js';
import OrderDetails from './OrderDetail/OrderDetail.jsx';

//* Rows Table Generator
const RowsTable = ({order}) => {

  //* Collapsable controler
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();

  const getTotal = () => {
    let total = 0;
    for(let i=0; i < order.cart.length; i++){
      total += order.cart[i].price;
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
          >{order.id}</TableCell>             {/* ID */}
        <TableCell
          className={classes.cells}
          align={"center"}
        >                          {/* DATE */}
          {/* {order.updatedAt.split('T')[0].replace(/-/g,'/')} */}
        </TableCell>
        <TableCell
          className={classes.cells}
          align={"center"}
        >
          {`${order.firstName} ${order.lastName}`}
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
          {order.orderState}
        </TableCell>                               {/* ORDER STATE */}
        <TableCell
          className={classes.cells}
          align={"right"}
        >
          {order.shippingState}
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
            <OrderDetails order={order}></OrderDetails>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}

//* pagination Controls

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  const theme = useTheme();
  const classes = useStyles1();

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPage/> : <FirstPage/>}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPage/> : <LastPage/>}
      </IconButton>
    </div>
  );
}


//* Table Structure
const OrdersTable = () => {

  const classes = useStyles();
  const dispatch = useDispatch();
  const orders = useSelector(state => state.orders.ordersList).concat([
    {
      orderState:"processing",
      shippingState:"initial",
      shippingCost:600.99,
      shippingAddres:"juan b justo 400",
      shippingZip:"1508",
      shippingCity:"buenos Aires",
      comments:"marcarme al celular",
      paymentDetails:"debit",
      firstName:"camila",
      lastName:"bonilla",
      cart:[
        {
          id: 1,
          name: "Colchón y Sommier Suavegom Merit 80x190",
          cant: 2,
          price: 35800.00
        }
      ],
    },
    {
      orderState:"cancelled",
      shippingState:"created",
      shippingCost:600.99,
      shippingAddres:"condarco 800",
      shippingZip:"1508",
      shippingCity:"buenos Aires",
      comments:"dejar en porteria",
      paymentDetails:"credit",
      firstName:"felipe",
      lastName:"alvarez",
      cart:[
        {
          id: 1,
          name: "Colchón y Sommier Suavegom Merit 80x190",
          cant: 2,
          price: 35800.00
        },
        {
          id: 2,
          name: "Colchón y Sommier King Koil Brighton 200x200",
          cant: 1,
          price: 158100.00
        },
        {
          id: 3,
          name: "Colchón y Sommier Elegante Señorial 180x200",
          cant: 1,
          price: 86000.00
        }
      ],
    },
    {
      orderState:"pending",
      shippingState:"processing",
      shippingCost:600.99,
      shippingAddres:"juan b alberdi 200",
      shippingZip:"1508",
      shippingCity:"buenos Aires",
      comments:"golpear fuerte la puerta",
      paymentDetails:"debit",
      firstName:"camilo",
      lastName:"moralez",
      cart:[
        {
          id: 1,
          name: "Colchón y Sommier Suavegom Merit 80x190",
          cant: 2,
          price: 35800.00
        },
        {
          id: 3,
          name: "Colchón y Sommier Elegante Señorial 180x200",
          cant: 1,
          price: 86000.00
        }
      ],
    },
    {
      orderState:"completed",
      shippingState:"cancelled",
      shippingCost:600.99,
      shippingAddres:"curapaligue 1000",
      shippingZip:"1508",
      shippingCity:"buenos Aires",
      comments:"dejar en la puerta lateral",
      paymentDetails:"credit",
      firstName:"jaime",
      lastName:"angulo",
      cart:[
        {
          id: 2,
          name: "Colchón y Sommier King Koil Brighton 200x200",
          cant: 1,
          price: 158100.00
        },
        {
          id: 3,
          name: "Colchón y Sommier Elegante Señorial 180x200",
          cant: 1,
          price: 86000.00
        }
      ],
    },
  ]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [columnActiveOrder, setColumnActiveOrder] = useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(()=>{
    dispatch(getOrders());
  },[dispatch])

  return (
    <TableContainer component={Paper}>

      <Table style={{overflowX: "scroll"}}>
        <TableHead>
        </TableHead>
        <TableBody>
          {
            (rowsPerPage>0 ?
              orders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              :
              orders).map(el=><RowsTable order={el}/>)
          }
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5,10, {label: 'All', value: -1}]}
              colSpan={7}
              count={orders.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  )

























  // return (
  //   <TableContainer component={Paper}>
  //     <Table>
  //       <TableHead
  //         className={classes.header}
  //       >
  //         <TableCell/>
  //         <TableCell align={"center"}>
  //           <Typography variant={"h5"} className={classes.headerText}>ID</Typography>
  //         </TableCell>
  //         <TableCell align={"center"}
  //           onClick={() => setColumnActiveOrder(columnActiveOrder===1 ? 0 : 1)}
  //         >
  //           <TableSortLabel
  //             active={columnActiveOrder === 2}
  //           >
  //           <Typography variant={"h5"} component={"span"} className={classes.headerText}>Fecha</Typography>
  //           </TableSortLabel>
  //         </TableCell>
  //         <TableCell align={"center"}>
  //           <Typography variant={"h5"} className={classes.headerText}>Cliente</Typography>
  //         </TableCell>
  //         <TableCell align={"right"}>
  //           <Typography variant={"h5"} className={classes.headerText}>Costo</Typography>
  //         </TableCell>
  //         <TableCell align={"right"}>
  //           <Typography variant={"h5"} className={classes.headerText}>Estado de Orden</Typography>
  //         </TableCell>
  //         <TableCell align={"right"}>
  //           <Typography variant={"h5"} className={classes.headerText}>Estado de Envio</Typography>
  //         </TableCell>
  //       </TableHead>
  //       <TableBody>
  //         {
  //           orders.map(el=><RowsTable order={el}/>)
  //         }
  //       </TableBody>
  //       <TableFooter>
  //         <TableRow>
  //           <TablePagination
  //             rowsPerPage={2}
  //           ></TablePagination>
  //         </TableRow>
  //       </TableFooter>
  //     </Table>
  //   </TableContainer>
  // )
}

export default OrdersTable;

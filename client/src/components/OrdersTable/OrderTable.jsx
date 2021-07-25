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
  makeStyles,
  useTheme,
  TableFooter,
  TablePagination,
  TableSortLabel,
  TextField
} from '@material-ui/core';
import {
  ExpandLess,
  ExpandMore,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  FirstPage,
  LastPage,
  Close
} from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
  getOrders,
} from "../../redux/actions/ordersActions.js";
import { useStyles } from './OrderTableStyle.js';
import OrderDetails from './OrderDetail/OrderDetail.jsx';

//* Table Headers

const HeaderCell = (props) => {

  const classes = useStyles();
  const {label, order, orderBy, setOrder, setOrderBy, setShowFilter, showFilter} = props;

  function handleSortDirection(id){
    console.log("¬params: "+id)
    if(id!=="Estado de Orden" && id!="Estado de Envio"){
      setOrderBy(id);
      setOrder((order==="asc") ? "desc" : "asc");
    }else{
      setOrderBy(id);
      setShowFilter(!showFilter);
    }
  }

  return (
    <TableCell>
      <TableSortLabel
        active={orderBy === label}
        direction={order}
        onClick={()=>handleSortDirection(label)}
      >
        <Typography variant={"h6"} className={classes.headerText}>{label}</Typography>
      </TableSortLabel>
    </TableCell>
  )
}


//* Rows Table Generator
const RowsTable = ({order}) => {

  //* Collapsable controler
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();

  const getTotal = () => {
    let total = 0;
    for(let i=0; i < order.products.length; i++){
      console.log(order.products[i].orderlines.price);
      total += Number(order.products[i].orderlines.price);
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
          {order.date}
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
  const orders = useSelector(state => state.orders.ordersList);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [orderBy, setOrderBy] = useState('ID');
  const [order, setOrder] = useState('asc');
  const [showFilter, setShowFilter] = useState(false);
  const [filter, setFilter] = useState("");

  const headers = ["ID", "Fecha", "Nombre", "Total", "Estado de Orden", "Estado de Envio"]

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getTotal = (order) => {
    let total = 0;
    for(let i=0; i < order.products.length; i++){
      console.log(order.products[i].orderlines.price);
      total += Number(order.products[i].orderlines.price);
    }
    return total;
  }

  const orderRows = () => {
    let ordersLocal = [];
    switch(orderBy){
      case 'ID':
        ordersLocal = orders.sort((a,b) => a.id-b.id);
        break;
      case 'Fecha':
        ordersLocal = orders.sort((a,b) => {
          let dateA = a.date.split("/");
          let dateB = b.date.split("/");
          dateA= new Date(dateA[2],dateA[1],dateA[0])
          dateB= new Date(dateB[2],dateB[1],dateB[0])
          return dateA-dateB;
        })
        break;
      case 'Nombre':
        ordersLocal = orders.sort((a,b) => {
          if(a.firstName < b.firstName){
            return -1
          }
          if(a.firstName > b.firstName){
            return 1
          }
          return 0
        })
      case 'Total':
        ordersLocal = orders.map(order => {
          order.total = getTotal(order);
          return order;
        });
        ordersLocal = ordersLocal.sort((a,b) => a.total-b.total);
        break;
      case 'Estado de Orden':
        if(filter===''){
          ordersLocal = orders
        }else{
          ordersLocal = orders.filter(el => el.orderState === filter);
        }
        break;
      case 'Estado de Envio':
        if(filter===''){
          ordersLocal = orders
        }else{
          ordersLocal = orders.filter(el => el.shippingState === filter);
        }
        break;
    }
    return (order === "asc") ? ordersLocal : ordersLocal.reverse();
  }

  const enterKey = (ev) => {
    if(ev.key === "Enter") setFilter(ev.target.value);
  }

  const close = () => {
    setShowFilter(!showFilter);
    setFilter("");
  }

  useEffect(()=>{
    dispatch(getOrders());
  },[dispatch])

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Typography variant="h4" color="initial">Ordenes</Typography>
      </Grid>
      <Grid item xl={10} lg={10} md={12} sm={12} xs={12}>
        <TableContainer component={Paper}>

          <Table style={{overflowX: "scroll"}}>
            <TableHead
              className={classes.header}
            >
              <TableCell />
              {headers.map( (el) =>
                <HeaderCell
                  label = {el}
                  order = {order}
                  orderBy = {orderBy}
                  setOrder = {setOrder}
                  setOrderBy = {setOrderBy}
                  setShowFilter = {setShowFilter}
                  showFilter = {showFilter}
                  />
                )}
            </TableHead>
            <TableBody>
                {(showFilter)?
                    <TableRow>
                      <TableCell colSpan={2}>
                        <Typography variant={'label'}>Escribe el estado: </Typography>
                      </TableCell>
                      <TableCell colSpan={4}>
                      <TextField
                        required
                        label={orderBy}
                        onKeyDown={enterKey}
                        fullWidth
                      />
                      </TableCell>
                      <TableCell>
                        <IconButton
                          onClick={close}
                        >
                          <Close></Close>
                        </IconButton>
                      </TableCell>
                    </TableRow>
                :null}
              {
                (rowsPerPage>0 ?
                  orderRows().slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  :
                  orderRows()).map(el=><RowsTable order={el}/>)
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
      </Grid>
    </Grid>
  )

}

export default OrdersTable;

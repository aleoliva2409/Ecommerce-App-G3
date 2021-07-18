import {
  Box,
  TableContainer,
  TableHead,
  TableCell,
  Paper,
  TableRow,
  Table,
  Typography,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  TextareaAutosize
} from '@material-ui/core';
import {
  useState
} from 'react';
import { useStyles } from './OrderDetail.js';

//* Products Table
const ProductsTable = ({productos}) => {

  const styles = useStyles();

  const getTotal = () => {
    let total = 0;
    for(let i = 0; i < productos.length; i++){
      total += productos[i].price;
    }
    return total;
  }

  return (
    <TableContainer
        component={Paper}
        className={styles.generalContainer}
        >
        <Table>
          <TableHead>
            <TableCell
              align={"center"}
              className={styles.productsTableCell}
            >
              <Typography
                variant={"subtitle1"}
                className={styles.Headers}
              >
                ID
              </Typography>
            </TableCell>
            <TableCell
              align={"center"}
              className={styles.productsTableCell}
            >
              <Typography
                variant={"subtitle1"}
                className={styles.Headers}
              >
                Nombre
              </Typography>
            </TableCell>
            <TableCell
              align={"center"}
              className={styles.productsTableCell}
            >
              <Typography
                variant={"subtitle1"}
                className={styles.Headers}
              >
                Cantidad
              </Typography>
            </TableCell>
            <TableCell
              align={"center"}
              className={styles.productsTableCell}
            >
              <Typography
                variant={"subtitle1"}
                className={styles.Headers}
              >
                Precio
              </Typography>
            </TableCell>
          </TableHead>
          {
            productos.map(producto => {
              return (
                <TableRow>
                  <TableCell
                    align={"center"}
                    className={styles.productsTableCell}
                  >
                    {producto.id}
                  </TableCell>
                  <TableCell
                    align={"center"}
                    className={styles.productsTableCell}
                  >
                    {producto.nombre}
                  </TableCell>
                  <TableCell
                    align={"center"}
                    className={styles.productsTableCell}
                  >
                    {producto.cantidad}
                  </TableCell>
                  <TableCell
                    align={"center"}
                    className={styles.productsTableCell}
                  >
                    {producto.price}
                  </TableCell>
                </TableRow>
              )
            })
          }
          <TableRow>
            <TableCell
              align={"right"}
              colSpan={3}
              className={styles.productsTableCell}
            >
              <strong>Total:</strong>
            </TableCell>
            <TableCell
              align={"center"}
              className={styles.productsTableCell}
            >
              {getTotal()}
            </TableCell>
          </TableRow>
          </Table>
      </TableContainer>
  )
}

//* Shipping Details
const ShippingData = ({id, shippingState, shippingCost, shippingAddres, shippingCity, shippingZip}) => {

  const styles = useStyles();
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingOneElement, setIsEditingOneElement] = useState([false,false,false,false,false]);
  const [shippingStateLocal, setShippingStateLocal] = useState(shippingState);
  const [shippingCostLocal, setShippingCostLocal] = useState(shippingCost);
  const [shippingAddresLocal, setShippingAddresLocal ] = useState(shippingAddres);
  const [shippingCityLocal, setShippingCityLocal ] = useState(shippingCity);
  const [shippingZipLocal, setShippingZipLocal ] = useState(shippingZip);

  const handleChange = (ev) => {
    switch(ev.target.name){
      case 'shippingState':
        setIsEditingOneElement(false,false,false,false);
        setShippingStateLocal(ev.target.value);
      break;
      case 'shippingCost':
        setShippingCostLocal(ev.target.value);
      break;
      case 'shippingAddres':
        setShippingAddresLocal(ev.target.value);
      break;
      case 'shippingCity':
        setShippingCityLocal(ev.target.value);
      break;
      case 'shippingZip':
        setShippingZipLocal(ev.target.value);
      break;
    }
  }

  const enterKey = (ev) => {
    if(ev.key === "Enter" && ev.target.value!=="") setIsEditingOneElement(false,false,false,false)
  }

  return (
    <Box
      component={Paper}
      className={styles.generalContainer}
    >
      <Typography variant={"caption"} className={styles.caption}>DOBLE CLICK PARA EDITAR</Typography>
      <Box
        onDoubleClick={()=>setIsEditingOneElement([!isEditingOneElement[0],false,false,false])}
        className={styles.shippingContainers}
        >
        <Typography variant={"h6"} className={styles.Headers} align={"center"}>State:</Typography>
        {(isEditing || isEditingOneElement[0]) ?
            <div className={styles.right}>
              <InputLabel shrink id={"shippingState"}>State</InputLabel>
              <Select
                lableId={"shippingState"}
                value={shippingStateLocal}
                onChange={handleChange}
                name={"shippingState"}

              >
                <MenuItem value={"initial"} >Initial</MenuItem>
                <MenuItem value={"created"} >Created</MenuItem>
                <MenuItem value={"processing"} >Processing</MenuItem>
                <MenuItem value={"cancelled"} >Cancelled</MenuItem>
                <MenuItem value={"completed"} >Completed</MenuItem>
              </Select>
            </div>
            :
            <Typography variant={"subtitle1"} className={styles.right}>{shippingStateLocal}</Typography>
          }
      </Box>
      <Box
        onDoubleClick={()=>setIsEditingOneElement([false,!isEditingOneElement[0],false,false])}
        className={styles.shippingContainers}
      >
        <Typography variant={"h6"} className={styles.Headers} align={"center"}>Cost:</Typography>
        {
        (isEditing || isEditingOneElement[1]) ?
          <>
          <TextField
            required
            label="Cost"
            defaultValue={shippingCostLocal}
            onChange={handleChange}
            onKeyDown={enterKey}
            name={"shippingCost"}
          />
          </>
          :
          <Typography variant={"subtitle1"}>{shippingCostLocal}</Typography>
        }
      </Box>
      <Box
        onDoubleClick={()=>setIsEditingOneElement([false,false,!isEditingOneElement[0],false,false])}
        className={styles.shippingContainers}
      >
        <Typography variant={"h6"} className={styles.Headers} align={"center"}>Direccion:</Typography>
        {
        (isEditing || isEditingOneElement[2]) ?
          <>
          <TextField
            required
            label="Address"
            defaultValue={shippingAddresLocal}
            onChange={handleChange}
            onKeyDown={enterKey}
            name={"shippingAddres"}
            className={styles.right}
          />
          </>
          :
          <Typography variant={"subtitle1"}>{shippingAddresLocal}</Typography>
        }
      </Box>
      <Box
        onDoubleClick={()=>setIsEditingOneElement([false,false,false,!isEditingOneElement[0],false])}
        className={styles.shippingContainers}
      >
        <Typography variant={"h6"} className={styles.Headers} align={"center"}>City:</Typography>
        {
        (isEditing || isEditingOneElement[3]) ?
          <>
          <TextField
            required
            label="City"
            defaultValue={shippingCityLocal}
            onChange={handleChange}
            onKeyDown={enterKey}
            name={"shippingCity"}
            className={styles.right}
          />
          </>
          :
          <Typography variant={"subtitle1"}>{shippingCityLocal}</Typography>
        }
      </Box>
      <Box
        onDoubleClick={()=>setIsEditingOneElement([false,false,false,false,!isEditingOneElement[0]])}
        className={styles.shippingContainers}
      >
        <Typography variant={"h6"} className={styles.Headers} align={"center"}>Zip Code:</Typography>
        {
        (isEditing || isEditingOneElement[4]) ?
          <>
          <TextField
            required
            label="Zip Code"
            defaultValue={shippingZipLocal}
            onChange={handleChange}
            onKeyDown={enterKey}
            name={"shippingZip"}
            className={styles.right}
          />
          </>
          :
          <Typography variant={"subtitle1"}>{shippingZipLocal}</Typography>
        }
      </Box>
    </Box>
  )
}

//* Order State, payment details and Comments

const Comments = ({id, orderState, comments, paymentDetails}) => {

  const styles = useStyles();
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingOneElement, setIsEditingOneElement] = useState([false,false,false]);
  const [orderStateLocal, setOrderStateLocal] = useState(orderState);
  const [paymentDetailsLocal, setPaymentDetailsLocal] = useState(paymentDetails);
  const [commentsLocal, setCommentsLocal ] = useState(comments);

  const handleChange = (ev) => {
    switch(ev.target.name){
      case 'orderState':
        setIsEditingOneElement(false,false,false,false);
        setOrderStateLocal(ev.target.value);
      break;
      case 'paymentDetails':
        setPaymentDetailsLocal(ev.target.value);
      break;
      case 'comments':
        setCommentsLocal(ev.target.value);
      break;
    }
  }

  const enterKey = (ev) => {
    if(ev.key === "Enter" && ev.target.value!=="") setIsEditingOneElement(false,false,false)
  }

  return (
    <Box
      component={Paper}
      className={styles.generalContainer}
    >
      <Box
        onDoubleClick={()=>setIsEditingOneElement([!isEditingOneElement[0],false,false])}
        className={styles.shippingContainers}
        >
        <Typography variant={"h6"} className={styles.Headers} align={"center"}>State:</Typography>
        {(isEditing || isEditingOneElement[0]) ?
            <div className={styles.right}>
              <InputLabel shrink id={"orderState"}>State</InputLabel>
              <Select
                lableId={"orderState"}
                value={orderStateLocal}
                onChange={handleChange}
                name={"orderState"}

              >
                <MenuItem value={"cart"} >Cart</MenuItem>
                <MenuItem value={"pending"} >Pending</MenuItem>
                <MenuItem value={"processing"} >Processing</MenuItem>
                <MenuItem value={"cancelled"} >Cancelled</MenuItem>
                <MenuItem value={"completed"} >Completed</MenuItem>
              </Select>
            </div>
            :
            <Typography variant={"subtitle1"} className={styles.right}>{orderStateLocal}</Typography>
          }
      </Box>
      <Box
        onDoubleClick={()=>setIsEditingOneElement([false,!isEditingOneElement[1],false])}
        className={styles.shippingContainers}
      >
        <Typography variant={"h6"} className={styles.Headers} align={"center"}>Pago:</Typography>
        {
        (isEditing || isEditingOneElement[1]) ?
          <>
          <TextField
            required
            label="Pago"
            defaultValue={paymentDetailsLocal}
            onChange={handleChange}
            onKeyDown={enterKey}
            name={"paymentDetails"}
            className={styles.right}
          />
          </>
          :
          <Typography variant={"subtitle1"}>{paymentDetailsLocal}</Typography>
        }
      </Box>
      <Box
        onDoubleClick={()=>setIsEditingOneElement([false,false,!isEditingOneElement[2]])}
        className={styles.shippingContainers}
      >
        <Typography variant={"h6"} className={styles.Headers} align={"center"}>Comments:</Typography>
        {
        (isEditing || isEditingOneElement[2]) ?
          <>
          <TextareaAutosize
            required
            label="Comments"
            defaultValue={commentsLocal}
            onChange={handleChange}
            onKeyDown={enterKey}
            name={"comments"}
            className={styles.right}
          />
          </>
          :
          <Typography variant={"subtitle1"}>{commentsLocal}</Typography>
        }
      </Box>
    </Box>
  )
}

//* OrderDetail Structure
const OrderDetail = (props) => {

  const styles = useStyles();

  return (
    <Box
      className={styles.container}
    >
      <Box>
        <Typography variant={"h4"}>Productos</Typography>
        <ProductsTable productos={props.cart}/>
      </Box>
      <Box>
        <Typography variant={"h4"}>Datos de Envio</Typography>
        <ShippingData
          id={props.id}
          shippingState= {props.shippingState}
          shippingCost = {props.shippingCost}
          shippingAddres= {props.shippingAddres}
          shippingZip= {props.shippingZip}
          shippingCity= {props.shippingCity}
        ></ShippingData>
      </Box>
      <Box>
        <Typography variant={"h4"}>Pago y Coment</Typography>
        <Comments
          id={props.id}
          orderState={props.orderState}
          paymentDetails={props.paymentDetails}
          comments={props.comments}
        ></Comments>
      </Box>
    </Box>
  )
}

export default OrderDetail;

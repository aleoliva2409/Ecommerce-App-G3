import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import useStyles from './CollapseStyle';


const CollapseTable = ({ order }) => {

  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="center">
          {order.id}
        </TableCell>
        <TableCell align="center">{order.date}</TableCell>
        <TableCell align="center">{order.orderState}</TableCell>
        <TableCell align="center">{`${order.firstName} ${order.lastName}`}</TableCell>
        <TableCell align="center">{order.paymentDetails}</TableCell>
        <TableCell align="center">{order.shippingAddres}</TableCell>
        <TableCell align="center">{order.shippingCity}</TableCell>
        <TableCell align="center">{order.shippingZip}</TableCell>
        <TableCell align="center">{order.shippingState}</TableCell>
        <TableCell align="center">{order.shippingCost}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={11}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Productos
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.th} align="center">Nombre</TableCell>
                    <TableCell className={classes.th} align="center">Color</TableCell>
                    <TableCell className={classes.th} align="center">Medida(cm)</TableCell>
                    <TableCell className={classes.th} align="center">Medida</TableCell>
                    <TableCell className={classes.th} align="center">Categoria/s</TableCell>
                    <TableCell className={classes.th} align="center">Precio</TableCell>
                    <TableCell className={classes.th} align="center">Imagen</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {order.products.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell align="center">
                        <Link className={classes.link} component={RouterLink} to={`/products/${product.id}`}>{product.name}</Link>
                      </TableCell>
                      <TableCell align="center">{product.color}</TableCell>
                      <TableCell align="center">{product.size}</TableCell>
                      <TableCell align="center">{product.sizeMattress || "--"}</TableCell>
                      <TableCell align="center">{product.modelId}</TableCell>
                      <TableCell align="center">{product.price}</TableCell>
                      <TableCell className={classes.cellsImg} align="center">
                        <img className={classes.img} src={product.image[0]} alt="img not found" />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default CollapseTable;

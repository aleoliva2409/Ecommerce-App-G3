import React from 'react';
import Box from '@material-ui/core/Box';
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
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import useStyles from './CollapseStyle';
import { useDispatch } from 'react-redux';
import { deleteProduct, getModelAndProductDetail } from "../../../redux/actions/productActions";


const CollapseTable = ({ model, setState, formOpen}) => {


  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const classes = useStyles();

  const btnDelete = (id) => {
    dispatch(deleteProduct(id));
    setState(true);
  }

  const btnEdit = (idModel,idProduct) => {
    // ? uso 2do parametro para que editAction
    dispatch(getModelAndProductDetail(idModel,idProduct,true));
    formOpen()
  }


  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell className={classes.cells}>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell className={classes.cells} align="center">
          {model.id}
        </TableCell>
        <TableCell className={classes.cellsName} align="center">{model.name}</TableCell>
        <TableCell className={classes.cells} align="center">{model.category.name}</TableCell>
        <TableCell className={classes.cells} align="center">{model.brand}</TableCell>
        <TableCell className={classes.cellsImg} align="center" >
          <img className={classes.img} src={model.image} alt="img not found" />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Variantes
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Nombre</TableCell>
                    <TableCell align="center">Medida(cm)</TableCell>
                    <TableCell align="center">Medida</TableCell>
                    <TableCell align="center">Precio</TableCell>
                    <TableCell align="center">Stock</TableCell>
                    <TableCell align="center">Editar</TableCell>
                    <TableCell align="center">Eliminar</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {model.products.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell align="center">
                        {product.name}
                      </TableCell>
                      <TableCell align="center">{product.size}</TableCell>
                      <TableCell align="center">{product.sizeMattress || "--"}</TableCell>
                      <TableCell align="center">{product.price}</TableCell>
                      <TableCell align="center">{product.stock}</TableCell>
                      <TableCell align="center">
                        <IconButton aria-label="edit" color="primary"
                          onClick={() => btnEdit(model.id,product.id)}
                        >
                          <EditIcon />
                        </IconButton>
                      </TableCell>
                      <TableCell align="center">
                        <IconButton aria-label="delete" color="secondary"
                        onClick={() => btnDelete(product.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
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

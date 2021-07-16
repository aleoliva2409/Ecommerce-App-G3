import {
  Box, StylesProvider
} from '@material-ui/core';
import { useStyles } from './OrderDetail.js';




//* OrderDetail Structure
const OrderDetail = (props) => {

  const styles = useStyles();

  return (
    <Box
      className={styles.container}
    >
      <h1>hola mundo</h1>
      <h1>hola mundo</h1>
      <h1>hola mundo</h1>
    </Box>
  )
}

export default OrderDetail;

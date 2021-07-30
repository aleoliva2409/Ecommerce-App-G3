import React,{ useState, useEffect} from 'react';
import Rating from '@material-ui/lab/Rating';
import { useDispatch, useSelector } from "react-redux";
import { Button, FormControl,FormLabel ,Box} from '@material-ui/core';
import {postReview} from '../../redux/actions/ReviewActions';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { useToken } from '../../hooks/useToken';
import { getOrdersByUser } from "../../redux/actions/ordersActions";
// * STYLES *
import { useStyles } from './ReviewStyle';

function Review({idproduct}) {

  const { id,isadmin } = useToken()
  const classes = useStyles();
  const dispatch = useDispatch();
  const shoppingUser = useSelector((state) => state.orders.ordersByUser);
  //console.log("shoppingUser " + shoppingUser.isadmin);
  //console.log("shoppingUser compra " + shoppingUser.orders[0].cart[0].id);

  useEffect(() => {
    dispatch(getOrdersByUser(id));
  }, [dispatch]);


  const [valuesForm,SetValuesForm] = useState({
    score: '',
    text: '',
    submitted: false
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetValuesForm({ ...valuesForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    SetValuesForm({submitted: true });
    const { score, text } = valuesForm;
    // console.log("score " + score);
    // console.log("texarea " + text);
    if (score && text ) {
      const idUser = id;
      dispatch(postReview(idproduct,{idUser,text,score}));

  }

  };
  return (

    <Box component='div' display={isadmin===false ? 'block' : 'none'}>
       <form onSubmit={handleSubmit} >
        <FormControl className={classes.formControl}>
            <Box className={classes.review1}>
            <FormLabel className={classes.labbel}>Tu puntuación :</FormLabel>
                <Rating
                  name="score"
                  value={valuesForm.score}
                  onChange={handleChange}
                  className={classes.stars}
                />
            </Box>
            <TextareaAutosize
              rows={10}
              className={classes.text}
              name='text'
              value={valuesForm.text}
              onChange={handleChange}
            />
            <Button variant="contained" color="primary" disableElevation type="submit" className={classes.button1}>
              Enviar
            </Button>
        </FormControl>
        </form>

    </Box>
  )
}

export default Review


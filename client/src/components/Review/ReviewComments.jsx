import React,{useState,useEffect} from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Button, FormControl,FormLabel} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import {getAllReview} from '../../redux/actions/ReviewActions';
import { useDispatch, useSelector } from 'react-redux';
// * STYLES *
import { useStyles } from './ReviewCommentsStyle';


function ReviewComments({idproduct}) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const reviews = useSelector(state => state.reviews.reviews);

  useEffect(() => {
    dispatch(getAllReview(idproduct))
  }, [dispatch])



  return (
    <div>
        <Typography component="legend">Comentarios</Typography>

        <Box component="fieldset" mb={3} borderColor="transparent">

            {(!reviews || reviews.length == 0)  ?
              <Typography component="h5" variant="h5" className={classes.inline} color="textPrimary" >
                      El producto no tiene reviews
              </Typography>
            :
            (reviews && reviews.map(review => (
              <>
                <Rating name="read-only" className={classes.stars} value={review.score} readOnly />
                <ListItem alignItems="flex-start">
                      <ListItemText primary={
                        <>
                          <Typography component="span" variant="body2" className={classes.inline} color="textPrimary" >
                              {review.text}
                          </Typography>
                        </>
                        }
                      />
                    </ListItem>
              </>
              )))
            }
        </Box>

    </div>
  )
}

export default ReviewComments;


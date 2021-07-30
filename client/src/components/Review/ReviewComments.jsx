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


function ReviewComments() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [value, setValue] = React.useState(2);

  useEffect(() => {
    dispatch(getAllReview(2))
  }, [dispatch])

   const reviews = useSelector(state => state.reviews.reviews);


  return (
    <div>
        <Typography component="legend">Comentarios</Typography>

        <Box component="fieldset" mb={3} borderColor="transparent">

        {reviews.map((review) => (
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
        ))}

        </Box>

    </div>
  )
}

export default ReviewComments;


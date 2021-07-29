import React from 'react'
import Review from '../components/Review/Review';
import ReviewComments from '../components/Review/ReviewComments';
import { Grid } from '@material-ui/core';
// * STYLES *
//import { useStyles } from './ProductStyle.js';

const LoginPage = () => {
  //const classes = useStyles();
  return (
    <Grid container spacing={2}  >
        <Grid item md={6} direction='column'>
            <Review />
        </Grid>
        <Grid item md={6} direction='column'>
            <ReviewComments />
        </Grid>
    </Grid>
  )
}

export default LoginPage;

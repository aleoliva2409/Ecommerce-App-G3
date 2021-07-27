import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageListItem from '@material-ui/core/ImageListItem';
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import Box from '@material-ui/core/Box';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    margin:'2rem',
    color:'transparent',

  },
  MuiContainerRoot:{
    paddingLeft:'0px',
    paddingRight:'0px',
  },
  imgs:{
    [theme.breakpoints.down('sm')]: {
      width: '300px',
    },
  },
  product:{
    padding:'0.2rem',
    textTransform: 'uppercase'
  }


}));
const itemData = [
  {
   img: 'https://www.pillowtop.com.ar/wp-content/uploads/Sommier-Colchones-e1578370738569-600x600.jpg',
   title: 'Colchón y sommier',
   author: 'author',
    cols: 3,
  },
  {
    img: 'https://www.pillowtop.com.ar/wp-content/uploads/1plaza-300x300.jpg',
    title: '1 plaza',
    author: 'author',
     cols: 1,
   },
   {
    img: 'https://www.pillowtop.com.ar/wp-content/uploads/2-plazas-principal-300x300.jpg',
    title: '2 plazas',
    author: 'author',
     cols: 1,
   },
   {
    img: 'https://www.pillowtop.com.ar/wp-content/uploads/Queen-DeepSleep-300x300.jpg',
    title: 'Queen',
    author: 'author',
     cols: 1,
   },
   {
    img: 'https://www.pillowtop.com.ar/wp-content/uploads/King-Belspring3-300x300.jpg',
    title: 'King',
    author: 'author',
     cols: 1,
   },
];

export default function BasicImageList() {
  const classes = useStyles();

  return (
    //--------------------------------------------
     <Grid   direction="column" className={classes.root}>
               <Grid   md={12} sm={12} xs={12} container direction="row" >
                   {/* First Row */}
                  <Grid  md={6} sm={12} xs={12} container direction="row" justifyContent="center">
                      <Box className={classes.product}>
                              <ImageListItem key={itemData[0]['img']}>
                                  <Link component={RouterLink} to="/products"  >
                                      <img src={itemData[0]['img']} alt={itemData[0]['title']} className={classes.imgs}/>
                                      <ImageListItemBar
                                        title={itemData[0]['title']}
                                      />
                                  </Link>
                              </ImageListItem>
                      </Box>
                  </Grid>
                  {/* Second Row */}
                  <Grid  md={6} sm={12} xs={12} container direction="column" justifyContent="center" >
                      <Grid  md={12} sm={12} xs={12} container direction="row" >
                          <Box className={classes.product}>
                                  <ImageListItem key={itemData[1]['img']}>
                                      <Link component={RouterLink} to="/product" >
                                          <img src={itemData[1]['img']} alt={itemData[1]['title']} />
                                          <ImageListItemBar
                                            title={itemData[1]['title']}
                                          />
                                      </Link>
                                  </ImageListItem>
                          </Box>
                          <Box className={classes.product}>
                                <ImageListItem key={itemData[2]['img']}>
                                    <Link component={RouterLink} to="/product" >
                                        <img src={itemData[2]['img']} alt={itemData[2]['title']} />
                                        <ImageListItemBar
                                          title={itemData[2]['title']}
                                        />
                                    </Link>
                                </ImageListItem>
                          </Box>
                      </Grid>

                      <Grid  md={12} sm={12} xs={12} container direction="row" >
                          <Box className={classes.product}>
                                  <ImageListItem key={itemData[3]['img']}>
                                      <Link component={RouterLink} to="/product"  >
                                          <img src={itemData[3]['img']} alt={itemData[3]['title']} />
                                          <ImageListItemBar
                                            title={itemData[3]['title']}
                                          />
                                      </Link>
                                  </ImageListItem>
                          </Box>
                          <Box className={classes.product}>
                            <ImageListItem key={itemData[4]['img']}>
                                <Link component={RouterLink} to="/"  >
                                    <img src={itemData[4]['img']} alt={itemData[4]['title']} />
                                    <ImageListItemBar
                                      title={itemData[4]['title']}
                                    />
                                </Link>
                            </ImageListItem>
                          </Box>
                      </Grid>
                  </Grid>
               </Grid>
     </Grid>
  );
}

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ListFavorites from "../components/Favorites/ListFavorites";
import { Container, Grid, Typography, Box } from "@material-ui/core";
import { getWishlist } from '../redux/actions/wishlistAction';
import { useToken } from '../hooks/useToken';

const FavoritesPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [render, setRender] = useState(false)
  const { email } = useToken()
  const dispatch = useDispatch()
  const favorites = useSelector((state) => state.wishlists.favorites);

  useEffect(() => {
    dispatch(getWishlist(email));
  }, [dispatch,email]);

  useEffect(() => {
    if(render) {
      dispatch(getWishlist(email))
      setRender(false)
    }
  }, [render,email,dispatch])

  return (
    <Container maxWidth="xl">
      <Box mt={5}>
        <Typography variant="h3" color="initial">Favoritos</Typography>
      </Box>
      <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
        <Grid item xl={10} lg={10} md={9} sm={12} xs={12}>
          <ListFavorites products={favorites} currentPage={currentPage} setCurrentPage={setCurrentPage} setRender={setRender}/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default FavoritesPage;

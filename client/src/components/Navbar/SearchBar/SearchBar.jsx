import React,{ useEffect, useState } from 'react';
import { TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchProducts, getProducts } from '../../../redux/actions/productActions';
import { Redirect } from 'react-router-dom';
// * STYLES *
import {useStyles} from './Styles';

const SearchBar = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [redirect,setRedirect]= useState(false);

const allProducts = useSelector(state => state.products.allProducts)

useEffect(() => {
 dispatch(getProducts())
}, [dispatch])

  const onChange = (e) => {
    console.log(e.target.value)
    if(e.keyCode === 13){
      if (e.target.value !== ""){
        dispatch(getSearchProducts(e.target.value));
        setRedirect(true);
        e.target.value = "";
      }
      else{
        setRedirect(false);
      }
    }
  };

  return (
    <>
    <Autocomplete
      freeSolo
      classes={{
      root: classes.inputRoot,
      input: classes.inputInput,
      }}
      placeholder="Search…"
      onKeyDown={onChange}
      options={allProducts.map((option) => option.name)}
      renderInput={(params) => (
    <TextField {...params} 
    classes={{
      root: classes.inputRoot,
      input: classes.inputInput,
    }} color='secondary' label="Search…" margin="normal" variant="outlined" 
    />
)}
/>
      {/* <InputBase
          placeholder="Search…"
          color='secondary'
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
          onKeyDown={onChange}
      /> */}
      { redirect &&
        <Redirect to="/products/search" />}
    </>
  )
}

export default SearchBar;

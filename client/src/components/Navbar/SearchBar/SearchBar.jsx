import React,{ useEffect, useState } from 'react';
import { TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchProducts, getAllProducts, getAllModels } from '../../../redux/actions/productActions';
import { Redirect } from 'react-router-dom';
// * STYLES *
import {useStyles} from './Styles';

const SearchBar = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [redirect,setRedirect]= useState(false);

  const allModels = useSelector(state => state.products.allModels)

  useEffect(() => {
    dispatch(getAllProducts())
    dispatch(getAllModels())
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
        className ={classes.autocomplet}
        onKeyDown={onChange}
        options={allModels.map((option) => option.name)}
        renderInput={(params) => (
            <TextField {...params}
              InputProps={{...params.InputProps, disableUnderline: true}}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              placeholder="Search…"

            />
        )}
    />
    { redirect &&
    <Redirect to="/products/search" />}
    </>
  )
}

export default SearchBar;

import React,{useState} from 'react';
import InputBase from '@material-ui/core/InputBase';
import { useDispatch } from 'react-redux';
import { getSearchProducts } from '../../../redux/actions/productActions';
import {Redirect} from 'react-router-dom';

// * STYLES *
import {useStyles} from './Styles';

const SearchBar = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [redirect,setRedirect]= useState(false);
  const onChange = (e) => {
    if(e.keyCode == 13){
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
    <InputBase
        placeholder="Search…"
        color='secondary'
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
        onKeyDown={onChange}

    />
    { redirect &&
      <Redirect to="/products" />}
    </>
  )
}

export default SearchBar

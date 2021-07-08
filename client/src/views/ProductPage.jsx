import React, { useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { activeLoading, getProductDetails } from '../redux/actions/productActions.js';
import Product from './../components/Product/Product.jsx';
import {connect} from 'react-redux';

const ProductPage = ({getProductDetails, activeLoading, product, isLoading}) => {

  let {id} = useParams();

  useEffect(()=>{
    async function getDetails(){
      activeLoading();
      return await getProductDetails(id);
    }
    getDetails();
  },[])

  return (
    <Product
      product={product}
      isLoading={isLoading}
    />
  )
}

function mapStateToProps(state){
  return {
    product: state.products.product,
    isLoading: state.products.isLoading,
  }
}

function mapDispatchToProps(dispatch){
  return {
    getProductDetails: (id)=>dispatch(getProductDetails(id)),
    activeLoading: ()=>dispatch(activeLoading()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductPage);

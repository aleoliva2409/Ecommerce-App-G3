import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CrudProduct from '../components/CrudProduct/CrudProduct'
import { getProducts } from '../redux/actions/productActions'

const Admin = () => {

  const dispatch = useDispatch()
  const products = useSelector(state => state.products.allProducts)

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <div>
      <CrudProduct products={products}/>
    </div>
  )
}

export default Admin;

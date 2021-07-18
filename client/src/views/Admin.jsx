import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CrudProduct from '../components/CrudProduct/CrudProduct'
import { getProducts } from '../redux/actions/productActions'
import { getCategories } from '../redux/actions/categoriesActions';
import Table from '../components/OrdersTable/OrderTable';

const Admin = () => {

  const dispatch = useDispatch()
  const products = useSelector(state => state.products.allProducts)
  const categories = useSelector(state => state.categories.categories)
  const [render, setRender] = useState(null)

  useEffect(() => {
    dispatch(getProducts())
    dispatch(getCategories())
  }, [dispatch])

  useEffect(() => {
    if(render) {
      dispatch(getProducts())
      setRender(false)
    }
  }, [dispatch, render])

  return (
    <div>
      <CrudProduct products={products} categories={categories} state={render} setState={setRender}/>
      <Table />
    </div>
  )
}

export default Admin;

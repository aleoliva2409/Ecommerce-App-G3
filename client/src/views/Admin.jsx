import React from 'react'
import CrudProduct from '../components/CrudProduct/CrudProduct'
import products from '../components/CrudProduct/products'

const Admin = () => {

  return (
    <div>
      <CrudProduct products={products}/>
    </div>
  )
}

export default Admin

import React from 'react'
import Container from '@material-ui/core/Container'
import ProductsTable from './ProductsTable.jsx';

const Crud = () => {
  return (
      <Container maxWidth="md">
        <ProductsTable />
      </Container>
  )
}

export default Crud;

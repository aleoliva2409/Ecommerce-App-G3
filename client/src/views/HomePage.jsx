import React from 'react';
import { Container } from "@material-ui/core";
import Carrousel from '../components/Home/Carrousel/Carrousel';
import Table from '../components/OrdersTable/OrderTable.jsx';

const HomePage = () => {
  return (
    <Container maxWidth="xl">
      <Carrousel />
      <Table></Table>
    </Container>
  )
}

export default HomePage;

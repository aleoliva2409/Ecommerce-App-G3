import React from 'react';
import { Container, Typography } from "@material-ui/core";
import Carrousel from '../components/Home/Carrousel/Carrousel';
const HomePage = () => {
  return (
    <Container maxWidth="xl">
      <Carrousel />
    </Container>
  )
}

export default HomePage;

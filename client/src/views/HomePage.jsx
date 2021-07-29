import React from 'react';
import { Container } from "@material-ui/core";
import Carrousel from '../components/Home/Carrousel/Carrousel';
import ImagesFilter from '../components/Home/ImagesFilter';
import Footer from '../components/Home/Footer';


const HomePage = () => {
  return (
    <Container maxWidth="xl" style={{padding: 0}}>
      <Carrousel />
      <ImagesFilter />
      <Footer/>
    </Container>
  )
}

export default HomePage;

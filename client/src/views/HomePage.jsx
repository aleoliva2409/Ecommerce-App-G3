import React from 'react';
import { Container } from "@material-ui/core";
import Carrousel from '../components/Home/Carrousel/Carrousel';
import ImagesFilter from '../components/Home/ImagesFilter';
import Footer from '../components/Home/Footer';


const HomePage = () => {
  return (
    <>
    <div component='div' maxWidth="xl" fixed={false}>
      <Carrousel />
    </div>
     <Container maxWidth="xl" fixed={false} style={{ paddingLeft: "0px", paddingRight: "0px" }}>
      <ImagesFilter />
    </Container>
    <Footer/>
    </>
  )
}

export default HomePage;

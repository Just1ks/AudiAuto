import Header from "../components/Header";
import Footer from "../components/Footer";
import Description from "../components/Description";
import CarElement from "../components/CarElement";
import CarsCatalog from "../components/CarsCatalog";
import { styled } from "styled-components";
import ModelsCatalog from "../components/ModelsCatalog";

function Home() {
  return (
    <div className="wrapper">
      <Header />
      <div className="main">
        <Description/>
        <CarsCatalog/>    
        <ModelsCatalog/>
      </div>      
      <Footer />
    </div>
  );
}

export default Home;

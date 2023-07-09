import Header from "./components/Header";
import Footer from "./components/Footer";
import Description from "./components/Description";
import CarElement from "./components/CarElement";
import CarsCatalog from "./components/CarsCatalog";
import {cars} from "./cars.data";
import { styled } from "styled-components";

function Home() {
  return (
    <div className="wrapper">
      <Header />
      <div className="main">
        <Description/>
        <CarsCatalog/>       
      </div>      
      <Footer />
    </div>
  );
}

export default Home;

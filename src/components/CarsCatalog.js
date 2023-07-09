import React from 'react'
import { styled } from "styled-components";
import CarElement from './CarElement';
import {cars} from "../cars.data";

const Container = styled.div`
    text-align: center;
    margin: 2vw;
`

const Cars = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
`

export default function CarsCatalog() {
  return (
    <Container>
        <h2>Модельный ряд</h2>
        <Cars>
            {cars.map (car => (
                <CarElement carId={car.id} name={car.name} image={car.image}/>
            ))}
        </Cars>
    </Container>
   
  )
}

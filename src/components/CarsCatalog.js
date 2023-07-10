import React, { useState } from 'react'
import { styled } from "styled-components";
import CarElement from './CarElement';
import ModelsCatalog from './ModelsCatalog';
import {cars} from "../cars.data";

const Container = styled.div`
    display: inline-block;
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

    const [selectedCar, setSelectedCar] = useState(null);
    const handleSelectCar = (car) => {
      setSelectedCar(car);
    };

    return (
    <Container>
        <h2>Модельный ряд</h2>
        <Cars>
            {cars.map (car => (
                <CarElement
                    car={car}
                    isSelected={selectedCar && selectedCar.id === car.id}
                    onSelectCar={handleSelectCar}/>
            ))}
        </Cars>
        {selectedCar && (
            <ModelsCatalog models={selectedCar.models} />
        )}
    </Container>
   
  )
}

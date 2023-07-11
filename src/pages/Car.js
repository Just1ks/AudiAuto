import React from 'react';
import { useParams  } from "react-router-dom"
import CarHeadImage from '../components/CarHeadImage';
import CarImage from '../components/CarImage';
import Specifications from '../components/Specifications';
import {cars} from "../cars.data";

export default function Car() {
    const { id, name } = useParams();    

    const model = cars.flatMap(car => car.models).find(model => model.name === name && model.id === Number(id));
    
    return (
    <div>
        <CarHeadImage image={model.videoOrImage}/>
        <CarImage image={model.demoImage} head={model.head} paragraph={model.paragraph}/>
        <Specifications specifications={model.specifications}/>
    </div>
  )
}

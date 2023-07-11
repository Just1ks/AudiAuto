import React from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
padding: 4vw;

& p{
    font-size: 1.1vw;
    font-weight: 300;
}

& li{
    text-align: center;
}

& h1{
    text-align: center;
    margin: 4vw;
}

& ul{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
}

`

export default function Specifications({specifications}) {
  return (
    <Container>           
        <h1>Технические характеристики</h1>
            <ul>
                <li>
                    <p>Объём</p>
                    <span>{specifications.Volume}</span>
                </li>
                <li>
                    <p>Топливо</p>
                    <span>{specifications.Fuel}</span>
                </li>
                <li>
                    <p>Мощность</p>
                    <span>{specifications.Power}</span>
                </li>
                <li>
                    <p>Привод</p>
                    <span>{specifications.Drive}</span>
                </li>
                <li>
                    <p>Коробка</p>
                    <span>{specifications.Box}</span>
                </li>
                <li>
                    <p>Расход</p>
                    <span>{specifications.Consumption}</span>
                </li>
            </ul>
    </Container>    
  )
}

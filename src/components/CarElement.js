import styled from 'styled-components';

const CarContainer = styled.div`
  text-align: center;
  width: 15vw;
 
  & img{
    transition: transform 0.5s ease;
    width: 14vw;
  }
  
  & img:hover {
  transform: scale(1.1);
  }

  &:hover{
    cursor: pointer;
    text-decoration: underline;
  }

  ${({isSelected}) => 
    isSelected &&
    `
    text-decoration: underline;
    font-weight:700;
    `
  }
`

export default function CarElement({car, isSelected, onSelectCar}) {

  const handleClick = () => {
    if (onSelectCar) {
      onSelectCar(car);
    }
  };

  return (
    <CarContainer isSelected={isSelected} onClick={handleClick} key={car.carId}>
      <img src={isSelected ? car.selectImage : car.image} alt={car.carId}/>
      <p>{car.name}</p>
    </CarContainer>
  )
}
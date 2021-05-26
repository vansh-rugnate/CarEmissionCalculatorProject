import { useForm } from "react-hook-form";
import './App.css';
import React, { useState, Component, MouseEvent } from 'react';
import './car_array.js';
import styled from 'styled-components';
import Button from './Button.tsx';
import MakeField from './MakeField.tsx';
import ModelField from './ModelField.tsx';
import MileageField from './MileageField.tsx';

type cardetails = [string, number]
const emissions: cardetails[] = [
    {
      carmake:'volkswagen',
      co2: 120, 
    },
    {
      carmake:'mercedes',
      co2: 130, 
    },
]


export const getData = () =>{
  var make = prompt("Make");
  var lowermake = make.toLowerCase();
  var model = prompt("Model");
  var lowermodel = model.toLowerCase();
  var mileage = prompt("Mileage (km)");
  var lowermileage = mileage.toLowerCase();
  console.log(lowermake, lowermodel, lowermileage)
  
  const search = obj => obj.carmake === lowermake;
  const i = emissions.findIndex(search)
  console.log(i)
  console.log(emissions[i].co2)

  const TotalEmissions = emissions[i].co2 * mileage
  console.log(TotalEmissions)

  alert('The total carbon dioxide emitted by your vehicle over its lifespan is: ' + TotalEmissions + ' grams')
}

const App = () => {
  
const getData = () => {
  const clickEvent:(Event: React.MouseEvent<HTMLButtonElement>) => void = () => {
    console.log('it works!')
  }
}  
  return (
  <form>  
    <Button type='button' onClick={clickEvent}>
    CALCULATE
    </Button>
  </form>
  )
}

export default App;





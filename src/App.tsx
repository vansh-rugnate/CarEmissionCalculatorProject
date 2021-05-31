import { useForm } from "react-hook-form";
import './App.css';
import React, { useState, Component, MouseEvent } from 'react';
import './car_array.js';
import styled from 'styled-components';
import Button from './Button.tsx';
import MakeField from './MakeField.tsx';
import ModelField from './ModelField.tsx';
import MileageField from './MileageField.tsx';
import { TextField } from '@material-ui/core'

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
    {
      carmake:'toyota',
      co2: 100, 
    },
]



const App = () => {
  
  const getData = () => {
    
    var make = prompt('Enter the make of your car here:');
    
    if (make === null ) {
      alert('You have cancelled the calculation!')
      return;
    }
    
    if (make === '' ) {
      alert('You have to enter a make!')
      return;
    }
    
    var lowermake = make.toLowerCase();
    
    var model = prompt('Enter the model of your car here:')
    
    var mileage = prompt('Enter the mileage of your car (in km) here:')
    
    if (mileage === null ) {
      alert('You have cancelled the calculation!')
      return;
    }
    
    if (mileage === '' ) {
      alert('You have to enter a mileage!')
      return;
    }
    
    if (isNaN(mileage)) {
      alert('You have to enter a number!')
      return;
    }

    const search = obj => obj.carmake === lowermake;
    
    const i = emissions.findIndex(search)
    
    const TotalEmissions = emissions[i].co2 * mileage
    
    alert('The total carbon dioxide emitted by your vehicle over its lifespan is: ' + TotalEmissions + ' grams')
  }  
  
  return(
    
    <button type='button' onClick = { getData }>calculate</button>
    
  )
  
}

export default App;

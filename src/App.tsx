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
]



const App = () => {
  
  const showData = () => {
    
    var lowermake = make.toLowerCase();
    const search = obj => obj.carmake === lowermake;
    const i = emissions.findIndex(search)
    const TotalEmissions = emissions[i].co2 * mileage
    alert('The total carbon dioxide emitted by your vehicle over its lifespan is: ' + TotalEmissions + ' grams')
  }  
  
  return(
    <div>
      <h1>
        What is CO2?
      </h1>
      <h1>
        CO2 is the fundamental right
      </h1>
      <div>
        <TextField id='make' label='Make' type='text'>
        Make
        </TextField>
        <h1>
        </h1>
        <TextField id='model' label='Model' type='text'>
        Model
        </TextField>
        <h1>
        </h1>
        <TextField id='mileage' label='Mileage' type='text'>
        Mileage
        </TextField>
        <h1>
        </h1>
      </div>
        <button type='button' onClick = { showData }>
        calculate
        </button>
    </div>
  
  )
  

  
}
export default App;

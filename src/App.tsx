import './car_array.js';
import './App.css';
import './index.css';
import LinearGradient from 'react-native-linear-gradient'
//import { useForm } from "react-hook-form";
//import React, { useState, Component, MouseEvent } from 'react';
//import styled from 'styled-components';
//import Button from './Button.tsx';
//import MakeField from './MakeField.tsx';
//import ModelField from './ModelField.tsx';
//import MileageField from './MileageField.tsx';
//import { TextField } from '@material-ui/core'


// make an array for the different cars with corresponding g/km
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


// start a const of App
const App = () => {
  
  const getData = () => {
    
    // ask for the make
    var make = prompt('Enter the make of your car here:');
    
    // handle cancellation of make prompt
    if (make === null ) {
      alert('You have cancelled the calculation!')
      return;
    }
    
    // handle skipping of make prompt
    if (make === '' ) {
      alert('You have to enter a make!')
      return;
    }
    
    if (isNaN(make) === false){
      alert('You have to enter a make!')
      return;
    }
    
    // allow user to input the make in caps
    var lowermake = make.toLowerCase();
    
    // find index of make in terms of carmake
    const search = obj => obj.carmake === lowermake;
    
    // find index of the array which has the make
    var i = emissions.findIndex(search)

    // if the make is not present in array, alert user
    if (i === -1) {
      alert('Please enter a valid car make!')
      return;
    }
    
    // ask for mileage
    var mileage = prompt('Enter the mileage of your car (in km) here:')
    
    // hand;e cancellation of mileage prompt
    if (mileage === null ) {
      alert('You have cancelled the calculation!')
      return;
    }
    
    // handle skipping of mileage prompt
    if (mileage === '' ) {
      alert('You have to enter a mileage!')
      return;
    }
    
    // if mileage is not a number, ask user to input number
    if (isNaN(mileage)) {
      alert('You have to enter a number!')
      return;
    }

    // calculate the total grams of co2 and alert user
    const TotalEmissions = emissions[i].co2 * mileage
    
    alert('The total carbon dioxide emitted by your vehicle over its lifespan is: ' + TotalEmissions + ' grams')
  }  
  
  
  
  return(
    
    // make a button with type, className and onClick
      

    <LinearGradient 
    
    className = 'styled-body'
    
    colors = {{'#11998e','#38ef7d'}}

    >  

      <button 
        
      type='button' 
      className='styled-button' 
      onClick = {getData} 
        
      >
        
      CALCULATE
        
      </button>
      
    </LinearGradient>

    

  );
  
}

export default App;

//import './car_array.js';
import { Helmet } from 'react-helmet';
import './App.css';
import './index.css';
//@ts-ignore
//import CarArray from './car_array.js';
//import { useForm } from "react-hook-form";
//import React, { useState, Component, MouseEvent } from 'react';
//import styled from 'styled-components';
//import Button from './Button.tsx';
//import MakeField from './MakeField.tsx';
//import ModelField from './ModelField.tsx';
//import MileageField from './MileageField.tsx';
//import { TextField } from '@material-ui/core'






//make an array for the different cars with corresponding g/km
type cardetails = [string , number]

const emissions: cardetails[] = [
    
    {
      carmake:'audi',
      co2: 150,
    },

    {
      carmake:'aston martin',
      co2: 300,
    },

    {
      carmake:'alfa romeo',
      co2: 128,
    },
    
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
    
    // if (isNaN(make) === false){
    //   alert('You have to enter a make!')
    //   return;
    // }
    
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
      
    <div

    className='body'

    >  

      <Helmet> 
      
        <title lang = 'en'>
          Car Emissions Calculator 
        </title>
      
      </Helmet>

    
      <h1 className='subtitle1'> What is carbon dioxide? </h1>

      <h1 className='text'> Carbon dioxide is a greenhouse gas. </h1>

      <h1 className='subtitle1'> Why does carbon dioxide affect us? </h1>
      
      <h1 className='text'> Carbon dioxide affects us because it causes global warming. </h1>

      <button 
        
      type='button' 
      className='button' 
      onClick = {getData} 
        
      >
        
      CALCULATE
        
      </button>
        
    </div>

  );
  
}

export default App;

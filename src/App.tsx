import { cars } from './CarArray';
import { Helmet } from 'react-helmet';
import './App.css';
import './index.css';
import CarEmissionsCalculator from './CarEmissionCalculator';
import Home from './Home';
import { Route, Link, BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar'
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




    


// start a const of App
const App = () => {
  
    
  return(
    
    // make a button with type, className and onClick
      
    <div

    className='body'

    >  

      <BrowserRouter>

      <NavBar />  

        <Route exact path = '/' component = { Home } />
            
        <Route exact path = '/CarEmissionCalculator' component = { CarEmissionsCalculator } />
            
      </BrowserRouter>

    </div>

  );
  
}

export default App;
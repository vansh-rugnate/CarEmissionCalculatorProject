import { cars } from './CarArray';
import { Helmet } from 'react-helmet';
import './App.css';
import './index.css';
import CarEmissionsCalculator from './CarEmissionCalculator';
import Home from './Home';
import { Route, Link, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import NavBar from './NavBar'
import ErrorPage from './ErrorPage'
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
      
    <div >  

      <Router>      
        <div className='topbar'>
          <Link className='homelink' to="/" >Home</Link>
          <Link className='calclink' to="/CO2Calculator">CO2Calculator</Link>
        </div>
        <Route exact path="/" component={Home} />
        <Route exact path="/CO2Calculator" component={CarEmissionsCalculator} />
        <Redirect to = "/" />
      </Router>
    
    </div>

  );
  
}

export default App;
import React from 'react';
import App from './App';
import getData from './App';
import './App.css';
import './index.css';
import { Helmet } from 'react-helmet';
import { cars } from './CarArray';

const CarEmissionsCalculator = () => {

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

    const search = (obj:any) => obj.carmake === lowermake;
    
    // find index of the array which has the make
    var i = cars.findIndex(search)

    // if the make is not present in array, alert user
    if (i === -1) {
      alert('Please enter a valid car make!')
      return;
    }
    
    // ask for mileage
    var mileageinmiles = Number(prompt('Enter the mileage of your car (in miles) here:'))
    
    // hand;e cancellation of mileage prompt
    if (mileageinmiles === null ) {
      alert('You have cancelled the calculation!')
      return;
    }
    
    // handle skipping of mileage prompt
    if (mileageinmiles === 0 ) {
      alert('You have to enter a mileage!')
      return;
    }
    
    // if mileage is not a number, ask user to input number
    if (isNaN(mileageinmiles)) {
      alert('You have to enter a number!')
      return;
    }

    const mileageinkm = mileageinmiles * 1.60934

    // calculate the total grams of co2 and alert user
    const TotalEmissions = cars[i].co2 * mileageinkm
    
    alert('The total carbon dioxide emitted by your vehicle over its lifespan is: ' + TotalEmissions + ' grams')
    
    }

	return (

		
    <div className='calcpage'>

			<Helmet> 
      
        <title lang = 'en'>
         Car Emissions Calculator 
        </title>
      
      </Helmet>

		  <div className='calcpage1'>

        <div className='buttonpagebox'>	

          <div>

            <div className = 'buttonpagebox1'>  

              <h1 className='calcpagetext'> Find out an estimation of how many grams of carbon dioxide your car has produced over it's lifetime! </h1>

              <button type='button' className='button' onClick = { getData }> CALCULATE </button>

            </div>

          </div>

  		  </div>

      </div>

    </div>
	);
}

export default CarEmissionsCalculator; 
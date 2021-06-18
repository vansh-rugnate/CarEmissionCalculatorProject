import React, { useState } from 'react';
import App from './App';
import './App.css';
import './index.css';
import { Helmet } from 'react-helmet';
import { cars } from './CarArray';
//import React, { useState } from "react";

const CarEmissionsCalculator = () => {

  const [make, setmake] = useState(String);
  const [mileage, setmileage] = useState(String);

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    // Preventing the page from reloading
    event.preventDefault();

    // Do something 
    var lowermake = make.toLowerCase();
    
    if (make === '') {
      alert('You have to enter a make!')
      return;
    }

    const search = (obj:any) => obj.carmake === lowermake;
    
    // find index of the array which has the make
    var i = cars.findIndex(search)
    
    if (i === -1) {
      alert('Please enter a valid car make!')
      return;
    }

    var nummileage : number = +mileage;
    
    if (nummileage === 0 ) {
      alert('You have to enter a mileage!')
      return;
    }
    
    // if mileage is not a number, ask user to input number
    if (isNaN(nummileage)) {
      alert('The mileage has to be a number!')
      return;
    }

    const TotalEmissions = cars[i].co2 * nummileage
    alert('The total carbon dioxide emitted by your vehicle over its lifespan is: ' + TotalEmissions + ' grams')

  }

  return (
    
    <div className='calcpage'>
      
      <div className='calcpage1'>

        <form onSubmit={submitForm}>

          <div className='buttonpagebox'>

            <div>  

              <div>

                <div className='buttonpagebox1'>  

                  <input
                    value={make}
                    onChange={(e) => setmake(e.target.value)}
                    type="text"
                    placeholder="Enter the make"
                    className="input"
                  />

                  <input
                    value={mileage}
                    onChange={(e) => setmileage(e.target.value)}
                    type="string"
                    placeholder="Enter the mileage"
                    className="input"
                  />

                  <button type="submit" className="button">Submit</button>
            
                </div>

              </div>

            </div>

          </div>

        </form>

      </div>
    
    </div>
  );
};

export default CarEmissionsCalculator; 
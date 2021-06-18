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
      alert('You have to select a make!')
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

                  <select 
                  
                  id='make'
                  name='make'
                  onChange={(e) => setmake(e.target.value)}
                  placeholder='Make'
                  className='input'>

                    <option value=''> Select a make... </option>
                    
                    <optgroup label='A' ></optgroup>
                    <option value='abarth'> Abarth </option>
                    <option value='alfa romeo'> Alfa Romeo </option>
                    <option value='aston martin'> Aston Martin </option>
                    <option value='audi'> Audi </option>
                    <option value='audi sport'> Audi Sport </option>
                    
                    <optgroup label='B' ></optgroup>
                    <option value='bentley'> Bentley </option>
                    <option value='bmw'> BMW </option>
                    <option value='bugatti'> Bugatti </option>
                    
                    <optgroup label='C' ></optgroup>
                    <option value='cadillac'> Cadillac </option>
                    <option value='chevrolet'> Chevrolet </option>
                    <option value='chevrolet corvette'> Chevrolet Corvette </option>
                    <option value='chrysler'> Chrysler </option>
                    <option value='citroen'> Citroen </option>
                    
                    <optgroup label='D' ></optgroup>
                    <option value='dacia'> Dacia </option>
                    <option value='daf'> DAF </option>
                    <option value='dodge'> Dodge </option>

                    <optgroup label='F' ></optgroup>
                    <option value='ferarri'> Ferarri </option>
                    <option value='fiat'> Fiat </option>
                    <option value='ford'> Ford </option>
                    <option value='ford mustang'> Ford Mustang </option>

                    <optgroup label='H' ></optgroup>
                    <option value='honda'> Honda </option>
                    <option value='hyundai'> Hyundai </option>

                    <optgroup label='J' ></optgroup>
                    <option value='jaguar'> Jaguar </option>
                    <option value='jeep'> Jeep </option>

                    <optgroup label='K' ></optgroup>
                    <option value='kia'> Kia </option>

                    <optgroup label='L' ></optgroup>
                    <option value='lamborghini'> Lamborghini </option>
                    <option value='lancia'> Lancia </option>
                    <option value='land rover'> Land Rover </option>
                    <option value='lexus'> Lexus </option>

                    <optgroup label='M' ></optgroup>
                    <option value='maserati'> Maserati </option>
                    <option value='mazda'> Mazda </option>
                    <option value='mclaren'> Mclaren </option>
                    <option value='mercedes amg'> Mercedes AMG </option>
                    <option value='mercedes benz'> Mercedes Benz </option>
                    <option value='mg'> MG </option>
                    <option value='mini'> Mini </option>
                    <option value='mitsubishi'> Mitsubishi </option>

                    <optgroup label='N' ></optgroup>
                    <option value='nissan'> Mitsubishi </option>
                    <option value='nissan gtr'> Mitsubishi </option>
                    <option value='nissan nismo'> Mitsubishi </option>

                    <optgroup label='P' ></optgroup>
                    <option value='perodua'> Perodua </option>
                    <option value='peugeot'> Peugeot </option>
                    <option value='porsche'> Porsche </option>
                    <option value='proton'> Proton </option>

                    <optgroup label='R' ></optgroup>
                    <option value='renault'> Renault </option>
                    <option value='rolls royce'> Rolls-Royce </option>

                    <optgroup label='S' ></optgroup>
                    <option value='saab'> Saab </option>
                    <option value='seat'> Seat </option>
                    <option value='skoda'> Skoda </option>
                    <option value='smart'> Smart </option>
                    <option value='ssangyong'> Ssangyong </option>
                    <option value='subaru'> Subaru </option>
                    <option value='suzuki'> Suzuki </option>

                    <optgroup label='T' ></optgroup>
                    <option value='tata'> Tata </option>
                    <option value='tesla'> Tesla </option>
                    <option value='toyota'> Toyota </option>

                    <optgroup label='V' ></optgroup>
                    <option value='vauxhall'> Vauxhall </option>
                    <option value='volkswagen'> Volkswagen </option>
                    <option value='volvo'> Volvo </option>


                  </select>

                  <input
                    value={mileage}
                    onChange={(e) => setmileage(e.target.value)}
                    type='string'
                    placeholder='Enter the mileage'
                    className='input'
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
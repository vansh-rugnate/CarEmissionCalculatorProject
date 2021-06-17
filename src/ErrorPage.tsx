import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const ErrorPage = () => {
	
	return (

		<div className = 'errorpage'>

			<div className = 'errorpagetopbox'>

				
				<div>

					<h1 className='errormessage'> This page could not be found! Sorry for any inconvenience! </h1>

				</div>	

				<div>	

					<Link className = 'errorhelpmessage' to = '/' > Return to the homepage... </Link>

				</div>

			
			</div>

		</div>

	);
}

export default ErrorPage;
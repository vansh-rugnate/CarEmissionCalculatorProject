import React from 'react';
import './App.css';
import './index.css';
import { Helmet } from 'react-helmet';

const Home = () => {

	return (

		<div>

			<Helmet> 
      
        		<title lang = 'en'>
          		Home 
        		</title>
      
      		</Helmet>

			<h1 className='subtitle1'> What is carbon dioxide? </h1>

      		<h1 className='text'> Carbon dioxide is a greenhouse gas. </h1>

      		<h1 className='subtitle1'> Why does carbon dioxide affect us? </h1>
      
      		<h1 className='text'> Carbon dioxide affects us because it causes global warming. </h1>

		</div>
	);
}

export default Home;
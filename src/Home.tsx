import React from 'react';
import './App.css';
import './index.css';
import { Helmet } from 'react-helmet';

const Home = () => {

	return (

		<div className='homepage'>

			<Helmet> 
      
        <title lang = 'en'>
         Home 
        </title>
      
      </Helmet>

			<div className='homepagebox'>

        <h1 className='homepagesubtitle'> What is carbon dioxide? </h1>

    		<h1 className='homepagetext'> Carbon dioxide is a greenhouse gas. </h1>

    		<h1 className='homepagesubtitle'> Why is carbon dioxide important? </h1>

        <h1 className='homepagetext'> It is one of the most important gases on earth. </h1>

        <h1 className='homepagesubtitle'> Why does carbon dioxide affect us? </h1>
    
    		<h1 className='homepagetext'> Carbon dioxide affects us because it causes global warming. </h1>

	      <h1 className='homepagesubtitle'> How do cars produce carbon dioxide? </h1>

        <h1 className='homepagetext'> Cars produce carbon dioxide during combustion. </h1>

        <h1 className='homepagesubtitle'> What is global warming? </h1>

        <h1 className='homepagetext'> Global warming is when heat gets trapped in the atmosphere, leading to the earth heating up. </h1>

        <h1 className='homepagesubtitle'> How does carbon dioxide contribute to global warming? </h1>

        <h1 className='homepagetext'> Carbon dioxide is one of the gases that build up in the atmosphere. </h1>


      </div>

    </div>
	);
}

export default Home;
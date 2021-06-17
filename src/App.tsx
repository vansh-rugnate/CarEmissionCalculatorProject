import './App.css';
import './index.css';
import Home from './Home';
import NavBar from './NavBar'
import ErrorPage from './ErrorPage'
import { cars } from './CarArray';
import { Helmet } from 'react-helmet';
import CarEmissionsCalculator from './CarEmissionCalculator';
import { Route, Link, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';


// start a const of App
const App = () => {
  
    
  return(
    
    <div >  

      <Router>      
        
        
        <div className='topbar'>
          
          <Link className='homelink' to="/" >Home</Link>
          
          <Link className='calclink' to="/CO2Calculator">CO2Calculator</Link>
        
        </div>

        
        <Switch>    

          <Route exact path="/" component={ Home } />
          
          <Route exact path="/CO2Calculator" component={ CarEmissionsCalculator } />
          
          <Route path = '' component = { ErrorPage }/>

        </Switch>
      
      
      </Router>
    
    </div>

  );
  
}

export default App;
import React from 'react';
import Navbart from './componentsT/Navbar';
import './AppT.css';
import './AppTr.css';
import Home from './componentsT/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LogInOutContainer from './container';
import ContactUs from './componentsT/pages/ContactUs'


function AppT() {

  
    return (
      <Router>
      <Navbart />
      
      <Switch>
        <Route path='/home' exact component={Home} />
        {/* <Route path='/contact-us' exact component={ContactUs} /> */}
        {/* <Route path='/login' component={LogInOutContainer} /> */}
      </Switch>
    </Router>
        
    );
  }
  
  export default AppT;

import React from 'react';
import Navbart from './componentsT/Navbar';
import './AppT.css';
import './AppTr.css';
import Home from './componentsT/pages/Home';
// import AppI from "./AppI";
//  import AppT from "./AppT";
 import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import ProjectList from './Components/ProjectList';

export default function App(){



    return(
        <BrowserRouter>
        <Switch>
            <Route path='/dash' exact component={ProjectList}/>
            <Route path='/home' component={Home}/>
            <Route path='/project' component={Dashboard}/>
        </Switch>
        </BrowserRouter>
        
    )

}


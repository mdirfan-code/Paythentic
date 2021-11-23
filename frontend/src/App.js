
import React,{useEffect} from 'react';
import Navbart from './componentsT/Navbar';
import './AppT.css';
import './AppTr.css';
import Home from './componentsT/pages/Home';
// import AppI from "./AppI";
//  import AppT from "./AppT";

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MyProfile from './Components/MyProfile'
import Dashboard from './Components/Dashboard';
import ProjectList from './Components/ProjectList';
import GeneralProject from './Components/GeneralProfile'

import { customTheme } from './componentsT/pages/MaterialUIStyle';
import { ThemeProvider } from '@material-ui/styles';

export default function App(){


    return(
        
        <BrowserRouter>
        <Switch>
        
            <Route path='/'exact component={Home}/>
            
            <Route path='/dash' component={ProjectList}/>
            <Route path='/MyProfile' component={MyProfile}/>
            
            <Route path='/project/:paramProjId' component={Dashboard}/>
            <Route path='/search/:Username' component={GeneralProject}/>
           
            
        </Switch>

        </BrowserRouter>
        
        
    )

}


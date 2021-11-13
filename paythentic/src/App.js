
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
import { customTheme } from './componentsT/pages/MaterialUIStyle';
import { ThemeProvider } from '@material-ui/styles';

export default function App(){


    return(
        <BrowserRouter>
        <Switch>
         <ThemeProvider theme={customTheme}>  
            <Route path='/'exact component={Home}/>
        </ThemeProvider >
            <Route path='/dash' component={ProjectList}/>
            
            <Route path='/project/:projId' component={Dashboard}/>
            <Route path='/myProfile' component={MyProfile}/>
        </Switch>
        </BrowserRouter>
        
    )

}


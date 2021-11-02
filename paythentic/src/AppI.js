import React from 'react';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom'
import NavBar from './Components/NavBar';
import HomePageEntry from './Components/HomePageEntry';
import Dashboard from './Components/Dashboard';
import ProjectList from './Components/ProjectList';



function AppI() {
  return (
    <div>
      <BrowserRouter>
     <NavBar userName="mdirfan.code" />
     {/* <Dashboard /> */}
     <Route path='/dash' exact component={ProjectList}/>
     <Route path='/project/:prjId' component={Dashboard}/>
     <Route path='/mdirfan.code/ReportUser'/>

     </BrowserRouter>
    </div>
  );
}

export default AppI;

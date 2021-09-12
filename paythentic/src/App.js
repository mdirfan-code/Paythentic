import './App.css';
import NavBar from './Components/NavBar';
import HomePageEntry from './Components/HomePageEntry';
import Dashboard from './Components/Dashboard';
import ProjectList from './Components/ProjectList';
function App() {
  return (
    <div>
     <NavBar userName="mdirfan.code" />
     <ProjectList/>
     {/* <Dashboard /> */}
     
   
    </div>
  );
}

export default App;

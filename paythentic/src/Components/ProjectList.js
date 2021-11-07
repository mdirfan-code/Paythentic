import React,{useState, useEffect} from 'react'
import './ProjectList.css';
import Navbar from './NavBar'
import {Link, useLocation}from 'react-router-dom';
import CreateProjectForm from './CreateProjectForm.js';

const axios = require('axios')


export default function ProjectList() {


    
    const [projectType,setProjectType] = useState('active')
    
    const [ isDialBoxVisible, setVisibility] = useState(false)
    const [currentList, setCurrentList] = useState([]);

    useEffect(() => {

            const bearerToken = `Bearer ${localStorage.getItem('accessToken')}`
            axios.get(`http://localhost:5000/dash${projectType=='active'?"":"/history"}`,{headers:{
                'authorization': bearerToken
            }})
            .then((response)=>{
                setCurrentList(response.data.projects)
                console.log(response)
            })
       


    },[projectType]);

   


    


    return (<>
     <Navbar />
     {isDialBoxVisible && <div className='OnBG' onClick={() => setVisibility(!isDialBoxVisible)}></div>}
        <div className="bg-DshBrd">
            <span className="title-wrap"><h1 className='title-your-proj'>Your Projects</h1></span>
            <span className="proj-btns"><button className="proj-btn active-proj" onClick={()=>setProjectType('active')}>Active</button><button className="proj-btn history-proj" onClick={()=>setProjectType('history')}>History</button></span>
            <div className="proj-list">
                {
                  currentList.map(lstItm => (
                      <Link to={`/project/${lstItm.projNo}`} className='proj-link' key={lstItm.projId}>
                          <div className='proj-slab' key={lstItm.projNo}>
                              <h5>PRJ#{lstItm.projId}</h5>
                                <h2>{lstItm.projectName}</h2>
                          </div>
                          
                      </Link>
                  ))
                }
            </div>
            
            <button className="create-proj-btn" onClick={() => setVisibility(!isDialBoxVisible)}>+ Create Project</button>
        </div>
        {isDialBoxVisible && <CreateProjectForm/>}
        </>
    )
}

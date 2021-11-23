import React,{useState, useEffect} from 'react'
import './ProjectList.css';
import Navbar from './NavBar'
import {Link, useLocation, Redirect}from 'react-router-dom';
import CreateProjectForm from './CreateProjectForm.js';

const axios = require('axios')


export default function ProjectList() {


    
    const [projectType,setProjectType] = useState('active')
    const [redirect, setRedirect] = useState(false)
    const [ isDialBoxVisible, setVisibility] = useState(false)
    const [currentList, setCurrentList] = useState([]);

    useEffect(() => {



            console.log(window.location.hostname)
            const bearerToken = `Bearer ${localStorage.getItem('accessToken')}`
            axios.get(`/dash${projectType=='active'?"":"/history"}`,{headers:{
                'authorization': bearerToken
            }})
            .then((response)=>{
                setCurrentList(response.data.projects)
                console.log(response)
            })
            .catch((err) =>{
                if (err.message == 'jwt expired' ){
                    axios.post(`/auth/refreshToken`,{
                                refreshToken: localStorage.getItem('refreshToken')
                            })
                            .then((resp) => {
                                localStorage.setItem("accessToken",resp.data.accessToken)
                                console.log("refresh access")
                                localStorage.setItem("refreshToken",resp.data.refreshToken)
                            })
                            .catch((err)=>{
                                console.log(err)
                                if (err.code == 401)
                                {
                                window.alert("You are not logined")
                                setRedirect(true)
                            }
                            })
                    
                }
                console.log(err)
            })
       


    },[projectType,localStorage.getItem('usertype')]);

    if(redirect){
        return (<Redirect to='/'/>)
    }
    


    


    return (<>
     <Navbar />
     {isDialBoxVisible && <div className='OnBG' onClick={() => setVisibility(!isDialBoxVisible)}></div>}
        <div className="bg-DshBrd">
            <span className="title-wrap"><h1 className='title-your-proj'>Your Projects</h1></span>
            <span className="proj-btns"><button className="proj-btn active-proj" onClick={()=>setProjectType('active')}>Active</button><button className="proj-btn history-proj" onClick={()=>setProjectType('history')}>History</button></span>
            <div className="proj-list">
                {
                  currentList.map(lstItm => (
                      <Link to={`/project/${lstItm.projId}`} className='proj-link' key={lstItm.projId}>
                          <div className='proj-slab' key={lstItm.projId}>
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

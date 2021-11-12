import React,{useState,useEffect} from 'react'
import './Dashboard.css'
import {useParams} from 'react-router-dom'
import StatusCard from './StatusCard';
import Messaging from './Messaging';
import NavBar from './NavBar';

const axios = require('axios')
export default function Dashboard() {

    const [projectDetails,setProjectDetails] = useState({})
    const [isFreelancer,setUserType] = useState()
    const param = useParams();
    console.log(param);

    useEffect(()=>{
        const bearerToken = `Bearer ${localStorage.getItem('accessToken')}`
        axios.get(`http://localhost:5000/project/${param.projId}`,{
            headers:{
                'authorization': bearerToken
            }
        })
        .then((resp)=>{

            console.log("response project details ::",resp)

            if(localStorage.getItem('username')===resp.data.freelancerUname){
                setUserType(true)
            }
            else{
                setUserType(false)
            }



            setProjectDetails(resp.data.project)
            console.log(projectDetails.stage)

        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    
  
        
        
 
    return (
        <>
        <NavBar />
         <div className="bg-DshBrd">
            <div className="wrap-proj-chat">
                <div className="proj-desc"><div className="proj-info">
                <h3>PRJ#{}</h3>
                {/* <h1>{PROJ_NAME}</h1>
                <h6>{PROJ_DESC}</h6> */}
                </div>
                <StatusCard isFreelancer={isFreelancer} stage={projectDetails.stage}/>
                </div>
                {/* <Messaging /> */}
            </div>
        </div></>
       
    )
}

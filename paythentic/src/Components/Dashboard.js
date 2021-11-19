import React,{useState,useEffect} from 'react'
import './Dashboard.css'
import {useParams, Redirect} from 'react-router-dom'
import StatusCard from './StatusCard';
import Messaging from './Messaging';
import NavBar from './NavBar';

const axios = require('axios')
export default function Dashboard() {
    const {paramProjId} = useParams();
    const [projectDetails,setProjectDetails] = useState({})
    const [redirect, setRedirect] = useState(false)
    const [isFreelancer,setUserType] = useState()
   
    console.log(paramProjId);

    useEffect(()=>{
        const bearerToken = `Bearer ${localStorage.getItem('accessToken')}`
        axios.get(`http://localhost:5000/project/${paramProjId}`,{
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
            console.log(projectDetails)

        })
        .catch((err)=>{
            if (err.message == 'Request failed with status code 401' ){
                axios.post("http://localhost:5000/auth/refreshToken",{
                            refreshToken: localStorage.getItem('refreshToken')
                        })
                        .then((resp) => {
                            localStorage.setItem("accessToken",resp.data.accessToken)
                            console.log("refresh access")
                            localStorage.setItem("refreshToken",resp.data.refreshToken)
                            window.location.reload()
                        })
                        .catch((err)=>{
                            console.log(err)
                            if (err.message == 401)
                            {
                            window.alert("You are not logined")
                            setRedirect(true)
                        }
                        })
                
            }

            console.log(err.message)
            
        })
    },[])
    
    if(redirect){
        return (<Redirect to='/'/>)
    }
    
        
        
 
    return (
        <>
        <NavBar />
         <div className="bg-DshBrd">
    
                <div className="proj-desc"><div className="proj-info">
                <h3>PRJ#{}</h3>
                <h1>{projectDetails.projectName}</h1>
                <h6>{projectDetails.projectDscrp}</h6>
                </div>
                <StatusCard isFreelancer={isFreelancer} stage={projectDetails.stage}/>
                </div>
              
        </div></>
       
    )
}

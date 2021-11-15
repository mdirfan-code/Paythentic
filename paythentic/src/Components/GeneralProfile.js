import React,{useState, useEffect} from 'react'
import {Redirect} from 'react-router-dom'
import NavBar from './NavBar'
import './GeneralProfile.css'

const axios = require('axios')

export default function GeneralProfile() {

    const [expireances, setExpireances] = useState([])
    const [redirect, setRedirect] = useState(false)
    const [skills, setSkills] = useState(['HTML','CSS','JavaScript','ReactJS','NodeJS','HTML','CSS','JavaScript'])
    const [info, setInfo] = useState({username:"@mdirfan-code",fullName:"Md. Irfan",currentUserType:"Freelancer",emailId:"mdirfan.code@gmail.com",contactNo:"90877234234",isVerified:true})
    
    useEffect(()=>{
        const bearerToken = `Bearer ${localStorage.getItem('accessToken')}`
        axios.get('http://localhost:5000/dash/MyProfile',{},{
            headers:{
                'authorization': bearerToken
            }
        })
        .then((resp)=>{
            console.log(resp)
            
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])


    if(redirect){
        return (<Redirect to='/'/>)
    }
    
    return (
        <>
            <NavBar />
            <div className='my-profile-layout'>
            <div className='upper-side-my-profile'>
                <div className='my-profile-image'>
                    <img src={'https://pbs.twimg.com/profile_images/531611861758660608/F3muqP6v.jpeg'} width='200px'/>
                </div>
                <div className='wrapper-headers-my-info'>
                <div className='headers-my-info'>
                    <h3>{info.username}</h3>
                    <h1>{info.fullName}</h1>
                    <h4>{info.currentUserType}</h4>
                </div>
                <div className={`verification-btn ${info.isVerified?"verified":"notVerified"}`} >{info.isVerified?"Verified":"Not Verified"}</div>
                </div>
                
            </div>
            <div className='lower-side-my-profile'>
                <div className='my-skills-section'>
                    <h3>Skills</h3>
                    <div className='my-skills-list'>
                        {
                            skills.map(skill => (<h4 key={skills.indexOf(skill)} className='skill-brick'>{skill}</h4>))
                        }
                    </div>

                </div>
                <div className='my-expireance-section'>
                        <h3>Expireance</h3>
                        <div className='my-expireances-list'>
                            {
                                expireances.map(expr => {
                                    return(
                                        <div className='expireance-slab'>
                                            <h4>{expr.designation}</h4>
                                            <h6>{expr.dateFrom} - {expr.dateTo}</h6>
                                            <h5>{expr.description}</h5>
                                        </div>
                                    )
                                })
                            }
                        </div>
                </div>
                <span className='my-profile-email-contact'><h3>Email :{'  '}</h3><h4>{info.emailId}</h4></span>
                <span className ='my-profile-email-contact'><h3>Contact No. :{'  '}</h3> <h4>{info.contactNo}</h4></span>
            </div>


        </div>
        </>
    )
}

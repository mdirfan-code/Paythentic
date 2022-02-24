import React,{useState, useEffect} from 'react'
import {Redirect, useParams} from 'react-router-dom'
import NavBar from './NavBar'
import './MyProfile.css'

const axios = require('axios')

export default function GeneralProfile() {

    const {Username} = useParams();
    const [expireances, setExpireances] = useState([])
    const [Redirect, setRedirect] = useState(false)
    const [skills, setSkills] = useState([])
    const [info, setInfo] = useState({})
    
    useEffect(()=>{
       
        axios.get(`/api/search/${Username}`)
        .then((resp)=>{
            console.log(resp)
            setInfo(resp.data.profile)
            setSkills(resp.data.profile.skills)
            // setSkills([])
            setExpireances(resp.data.profile.exp)
        })
        .catch((err)=>{
            if (err.message == 'Request failed with status code 401' ){
                axios.post("/api/auth/refreshToken",{
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


    if(Redirect){
        return (<Redirect to='/'/>)
    }
    
    return (
        <>
            <NavBar />
            <div className='my-profile-layout'>
            <div className='upper-side-my-profile'>
                <div className='my-profile-image'>
                    <img src={info.profilePicUrl} width='200px'/>
                </div>
                <div className='wrapper-headers-my-info'>
                <div className='headers-my-infos'>
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
                            skills.length >0 ? skills.map(skill => (<h4 key={skills.indexOf(skill)} className='skill-brick'>{skill}</h4>)): <div className='unavailable-info-msg-box'>No skills added yet.</div>
                        }
                    </div>

                </div>
                <div className='my-expireance-section'>
                        <h3>Experience</h3>
                        <div className='my-expireances-list'>
                            {
                               (expireances !== undefined && expireances.length > 0) ? expireances.map(expr => {
                                    return(
                                        <div className='expireance-slab' key={expireances.indexOf(expr)}>
                                            <h4>{expr.designation}</h4>
                                            <h6>{expr.dateFrom} - {expr.dateTo}</h6>
                                            <h5>{expr.description}</h5>
                                        </div>
                                    )
                                }): <div className='unavailable-info-msg-box'>No experience added yet.</div>
                            }
                        </div>
                </div>
                <span className='my-profile-email-contact'><h3>Email :{'  '}</h3><h4>{info.emailId}</h4></span>
                <span className ='my-profile-email-contact'><h3>Contact No. :{'  '}</h3> <h4>{info.contactNo === undefined ?"Not added yet.":info.contactNo}</h4></span>
            </div>


        </div>
        </>
    )
}

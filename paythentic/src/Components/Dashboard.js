import React,{useState,useEffect} from 'react'
import './Dashboard.css'
import {useParams} from 'react-router-dom'
import StatusCard from './StatusCard';
import Messaging from './Messaging';
export default function Dashboard() {

  
    const param = useParams();
    console.log(param);
    const PROJ_NO = 1223
    const PROJ_NAME = "Designing "
    const PROJ_DESC = "teri ma ki ankh"

  
        
        
 
    return (
        <div className="bg-DshBrd">
            <div className="wrap-proj-chat">
                <div className="proj-desc"><div className="proj-info">
                <h3>PRJ#{PROJ_NO}</h3>
                <h1>{PROJ_NAME}</h1>
                <h6>{PROJ_DESC}</h6>
                </div>
                <StatusCard isFreelancer={false} stage="initial"/>
                </div>
                {/* <Messaging /> */}
            </div>
        </div>
    )
}

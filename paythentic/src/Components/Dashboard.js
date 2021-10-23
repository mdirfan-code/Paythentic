import React,{useState} from 'react'
import './Dashboard.css'
import {useParams} from 'react-router-dom'
import StatusCard from './StatusCard';
import Messaging from './Messaging';
export default function Dashboard() {

    const PROJECTS = [{'projNo':12,'projName':'Logo creation'},{'projNo':13,'projName':'Web Design'},{'projNo':24,'projName':'Video Editing'},{'projNo':38,'projName':'Content Writing'},{'projNo':93,'projName':'Web Scraping'},{'projNo':47,'projName':'Building E-commerce Website'},{'projNo':86,'projName':'Business Card Design'},{'projNo':67,'projName':'Enhancing Song "falana dhimkana"'},{'projNo':92,'projName':'Web Scraping'},{'projNo':45,'projName':'Building E-commerce Website'},{'projNo':80,'projName':'Business Card Design'},{'projNo':66,'projName':'Enhancing Song "falana dhimkana"'}];
    const param = useParams();
    console.log(param);

    const [PROJ_NO, setProjNo] = useState(PROJECTS.find(x => x.projNo === parseInt(param.prjId)).projNo);
    const [PROJ_NAME, setProjName] = useState(PROJECTS.find(x => x.projNo === parseInt(param.prjId)).projName)
    const PROJ_DESC = "Project management is the process of leading the work of a team to achieve all project goals within the given constraints. This information is usually described in project documentation, created at the beginning of the development process. The primary constraints are scope, time, budget. The secondary challenge is to optimize the allocation of necessary inputs and apply them to meet pre-defined objectives"
  
        
        
    
    // useEffect(()=>{
    //     ppppp()
        
    // })
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
                <Messaging />
            </div>
        </div>
    )
}

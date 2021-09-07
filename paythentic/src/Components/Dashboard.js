import React from 'react'
import './Dashboard.css'
import StatusCard from './StatusCard';
import Messaging from './Messaging';
export default function Dashboard() {
    const PROJ_NO = "PRJ#"+"23";
    const PROJ_NAME = "Website Design"
    const PROJ_DESC = "Project management is the process of leading the work of a team to achieve all project goals within the given constraints. This information is usually described in project documentation, created at the beginning of the development process. The primary constraints are scope, time, budget. The secondary challenge is to optimize the allocation of necessary inputs and apply them to meet pre-defined objectives"

    return (
        <div className="bg-DshBrd">
            <div className="wrap-proj-chat">
                <div className="proj-desc"><div className="proj-info">
                <h3>{PROJ_NO}</h3>
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

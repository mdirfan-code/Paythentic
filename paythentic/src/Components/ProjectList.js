import React from 'react'
import './ProjectList.css'
export default function ProjectList() {
    return (
        <div className="bg-DshBrd">
            <h1>Your Projects</h1>
            <span className="proj-btns"><button className="proj-btn active-proj">Active</button><button className="proj-btn history-proj">History</button></span>
           
        </div>
    )
}

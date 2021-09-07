import React from 'react'
import './ProjectList.css'
export default function ProjectList() {
    return (
        <div className="bg-DshBrd">
            <span className="title-wrap"><h1 className='title-your-proj'>Your Projects</h1></span>
            <span className="proj-btns"><button className="proj-btn active-proj">Active</button><button className="proj-btn history-proj">History</button></span>
           
        </div>
    )
}

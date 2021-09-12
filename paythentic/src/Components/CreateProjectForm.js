import React from 'react'
import './CreateProjectForm.css';
export default function CreateProjectForm() {
    return (<>
       
        <div className="create-proj-form">
            <h1>Create Project</h1>
            <form method='GET'>
                <h3>Project Name</h3>
                <input type='text' placeholder='Enter Project Name'/>
                <h3>Client Username</h3>
                <input type='text' placeholder="Client's @Username" />
                <h3>Enter project description</h3>
                <textarea placeholder='Project description goes here...' />
                <button className='create-btn'>Create</button>
            </form>
        </div>
        </>
    )
}

import React from 'react'
import './CreateProjectForm.css';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

export default function CreateProjectForm() {
    return (<>
       
        <div className="create-proj-form">
            <div className='top-wrapper'><h1>Create Project</h1></div>
            <div className='line-str'></div>
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

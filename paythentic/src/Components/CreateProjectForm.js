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
                <input type='text' placeholder='Enter Project Name' required/>
                <h3>Client Username</h3>
                <input type='text' placeholder="Client's @Username" required/>
                <h3>Enter project description</h3>
                <textarea placeholder='Project description goes here...' required/>
                <h3>Enter signing amount</h3>
                <input type='number' placeholder='Enter project signing amount' required/>
                <h3>Enter due date</h3>
                <input type='date' required/>

                <button className='create-btn'>Create</button>
            </form>
        </div>
        </>
    )
}

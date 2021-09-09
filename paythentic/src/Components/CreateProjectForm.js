import React from 'react'
import './CreateProjectForm.css';
export default function CreateProjectForm() {
    return (
        <div className="create-proj-form">
            <form>
                <input type='text' placeholder='Enter Project Name'/>
                <input type='text' placeholder="Client's Username" />
                <textarea placeholder='Project description goes here...' />
                <button>Create</button>
            </form>
        </div>
    )
}

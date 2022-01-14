import React, { useState, useeffect } from 'react'
import './CreateProjectForm.css';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

const axios = require('axios')
const { baseURL } = require('../axios_config.js').config()

export default function CreateProjectForm({ setVisibilityCF }) {

	const userType = localStorage.getItem('usertype')
	const [Redirect, setRedirect] = useState(false)
	const userNames = {
		freelancerUname: '',
		clientUname: ''
	}

	if (userType == "Freelancer") {
		userNames.freelancerUname = localStorage.getItem('username')

	}
	else {
		userNames.clientUname = localStorage.getItem('username')
	}
	const [projectValues, setPrjValues] = useState({
		projectName: '',
		projectDscrp: '',
		dueDate: '',
		signingAmount: undefined,
		...userNames
	})

	const handleInputChange = e => {
		const { name, value } = e.target
		console.log(name, '::', value)
		setPrjValues({
			...projectValues,
			[name]: value
		});
		//console.log(projectValues)

	}
	const handleSubmit = e => {
		e.preventDefault()

		console.log('sending project details......')

		const bearerToken = `Bearer ${localStorage.getItem('accessToken')}`
		axios.post("/dash/createProject", { ...projectValues }, {

			headers: {
				'authorization': bearerToken
			}
		})
			.then((response) => {
				console.log(response)
			})
			.catch((err) => {
				console.log(err)
			})
		setVisibilityCF(false)
		window.location.reload();
	}

	return (<>

		<div className="create-proj-form">
			<div className='top-wrapper'><h1>Create Project</h1></div>
			<div className='line-str'></div>
			<form method="POST">
				<h3>Project Name</h3>
				<input type='text' placeholder='Enter Project Name' name="projectName" value={projectValues.projectName} onChange={(e) => { handleInputChange(e) }} required />
				<h3>{userType == "Freelancer" ? 'Client' : 'Freelancer'} Username</h3>
				<input type='text' placeholder={`${userType == "Freelancer" ? 'Client' : 'Freelancer'} @Username`} name={`${userType == "Freelancer" ? 'clientUname' : 'freelancerUname'}`} value={userType == "Freelancer" ? projectValues.clientUname : projectValues.freelancerUname} onChange={(e) => { handleInputChange(e) }} required />
				<h3>Project description</h3>
				<textarea placeholder='Project description goes here...' name='projectDscrp' value={projectValues.projectDscrp} onChange={(e) => { handleInputChange(e) }} required />
				<h3>Signing amount</h3>
				<input type='number' placeholder='Enter project signing amount' name="signingAmount" value={projectValues.signingAmount} onChange={(e) => { handleInputChange(e) }} required />
				<h3>Due date</h3>
				<input type='date' name="dueDate" value={projectValues.dueDate} onChange={(e) => { handleInputChange(e) }} required />
				<button className='create-btn' onClick={(e) => { handleSubmit(e) }} >Create</button>
			</form>
		</div>
	</>
	)
}

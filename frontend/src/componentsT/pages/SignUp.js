import React,{useState,useEffect} from 'react'
import { Grid, Paper, Avatar, Typography, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import useStyles from './MaterialUIStyle';
import {useForm,Form} from '../useForm';
import Input from '../control/Input';

const axios = require('axios');


const Signup = () => {
    
    const marginTop = { marginTop: 15 }
    const classes= useStyles();

    const makeUsername = (email) => email.slice(0,email.indexOf('@'))

    const validate = (fieldValues=values) => {
        let temp = {...errors}
        if ('fullName' in fieldValues)
            temp.fullName=fieldValues.fullName?"":"This field is required."
        if ('email' in fieldValues)
            temp.email = (/.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
        if ('phno' in fieldValues)    
            temp.phno=(fieldValues.phno.length===10)&& (/^[1-9][0-9]*$/).test(fieldValues.phno) ?"" : "Phone Number is not valid.."
        if ('password' in fieldValues)
            // temp.password=(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,50})/).test(fieldValues.password)?"":"Password must contain 1 Uppercase"
            // {
            //     let password=fieldValues.password
            //     console.log(password)
            //     const arr =[password.length >= 8 ,(/^(?=.*[a-z])/).test(password),(/^(?=.*[A-Z])/).test(password),(/^(?=.*[0-9])/).test(password),(/^(?=.*[~`!@#$%^&*()-_+={}[]|\;:"<>,.?])/).test(password)]
            // }
            {
                let password=fieldValues.password
                // const isPasswordTrue = (password) => (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,50})/).test(fieldValues.password)       
                if(password.length >= 8 ){
                    if(((/^(?=.*[a-z])/).test(password))){
                        if((/^(?=.*[A-Z])/).test(password)){
                            if((/^(?=.*[0-9])/).test(password)){
                                if((/^(?=.*[~`\!@#\$%^&\*\(\)\-_\+\=\{\}\[\]\|\;\:\"\<\>\,.\/\?])/).test(password)){
                                    temp.password=""
                                }else{
                                    temp.password = "Passwords must contain at least 1 special character Eg:@,#,etc"
                                }
                            }else{
                                temp.password = "Passwords must contain at least 1 numeric character"
                            }
                        }else{
                            temp.password = "Passwords must contain at least 1 uppercase letter"
                        }
                    }else{
                        temp.password = "Passwords must contain at least 1 lowercase letter"
                    }        
                }else{
                    temp.password = "Passwords must be at least 8 characters in length."
                }
            }
        if ('cpassword' in fieldValues)
            {   
                temp.cpassword=(fieldValues.password===fieldValues.cpassword)?"":"Password not matching."
                console.log(temp.cpassword," :: ",fieldValues.password," :: ",fieldValues.cpassword)

            }
        setErrors({
            ...temp
        })
        if(fieldValues==values)
            return Object.values(temp).every(x => x === "")
    }

    
    
    
    const initialFValues={
        fullName: '',
        email: '',
        role:'Client',
        phno: '',
        password:'',
        cpassword:'',
    }
    
    const{
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange   
    }=useForm(initialFValues,true,validate);

    const handleSubmit = e =>{
        e.preventDefault()
        if(validate()){
            axios.post('/api/auth/signup', {
                username: makeUsername(values.email),
                fullName: values.fullName,
                emailId: values.email,
                currentUserType: values.role,
                password: values.cpassword
                
              })
              .then(function (response) {
                  window.alert(response.data.message)
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
        }
        
    }
    
    return (
        <Grid>
            <Paper className={classes.paperStyle}>
                <Grid align='center'>
                    <Avatar className={classes.icon}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <Form onSubmit={handleSubmit}>
                    <Input
                        fullWidth 
                        label='Full Name'
                        name='fullName'
                        type='text'
                        value={values.fullName} 
                        placeholder="Enter your name"
                        onChange={handleInputChange} 
                        error={errors.fullName}
                    />
                    
                    <Input 
                        fullWidth 
                        label='Email'
                        name='email'
                        type='email' 
                        value={values.email} 
                        placeholder="Enter your email"
                        onChange={handleInputChange}
                        error={errors.email}
                    />
                    
                    <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Role</FormLabel>
                        <RadioGroup 
                            aria-label="role" 
                            name="role"  
                            style={{display : 'initial'}}
                            value={values.role}
                            onChange={handleInputChange}
                        >
                            <FormControlLabel 
                                value="Employer" 
                                control={<Radio />} 
                                label="Employer" 
                            />
                            <FormControlLabel    
                                value="Freelancer" 
                                control={<Radio />} 
                                label="Freelancer" 
                            />
                            
                        </RadioGroup>
                    </FormControl>
                    <Input 
                        fullWidth 
                        label='Phone Number'
                        name='phno'
                        value={values.phno} 
                        type='tel' 
                        placeholder="Enter your phone number"
                        onChange={handleInputChange} 
                        error={errors.phno}
                    />
                    
                    <Input  
                        fullWidth 
                        label='Password'
                        name='password' 
                        value={values.password}
                        type='password' 
                        placeholder="Enter your password"
                        onChange={handleInputChange}
                        error={errors.password}
                    />
                    
                    <Input  
                        fullWidth 
                        label='Confirm Password'
                        name='cpassword' 
                        value={values.cpassword}
                        type='password' 
                        placeholder="Confirm your password"
                        onChange={handleInputChange}
                        error={errors.cpassword}
                    />
                    
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />
                    <Button 
                        type='submit' 
                        variant='contained' 
                        color='primary' 
                    >
                        Sign up
                    </Button>
                </Form>
            </Paper>
        </Grid>
    )
}

export default Signup;

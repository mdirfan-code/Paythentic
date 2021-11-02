import '../../App.css';
import React,{useState} from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import useStyles from './MaterialUIStyle.js';

const axios = require('axios')



const Login=({handleChange})=>{

    const classes= useStyles();

    const initialFValues = {
        emailId: '',
        password:''
    }

    const [values,setValues] = useState(initialFValues);

    const handleInputChange = e =>{
        const {name,value} = e.target
        console.log(values,'::',name,'::',value)
        setValues({
            ...values,
            [name]:value
        });

    }

    const makeUsername = (email) => email.slice(0,email.indexOf('@'))

    const handleSubmit = e =>{
        e.preventDefault()

        console.log("Sending request...........")
   
            axios.post('http://localhost:5000/auth/login', {
                
                username: makeUsername(values.emailId),
                password: values.password
                
              })
              .then(function (response) {
                  window.alert(response.data.message)
                  localStorage.setItem("accessToken",response.data.accessToken)
                  localStorage.setItem("refreshToken",response.data.refreshToken)
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
        
        
    }




    
    return(
        
            <Grid>
                <Paper  className={classes.paperStyle}>
                    <Grid align='center'>
                        <Avatar className={classes.icon}><LockOutlinedIcon/></Avatar>
                        <h2>Log in</h2>
                    </Grid>
                    <form onSubmit={handleSubmit}>
                    <TextField 
                        label='Email ID' 
                        placeholder='Enter email id'
                        name='emailId'
                        type='email' 
                        value={values.emailId}
                        onChange={handleInputChange}
                        fullWidth 
                        required/>
                    <TextField 
                        label='Password' 
                        placeholder='Enter password' 
                        name='password'
                        type='password' 
                        value={values.password}
                        onChange={handleInputChange}
                        fullWidth 
                        required/>
                    <FormControlLabel
                        control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                        }
                        label="Remember me"
                    />
                    <Button className={classes.buttons} type='submit' color='primary' variant="contained"  fullWidth>Log in</Button>
                    <Typography >
                        <Link href="#" >
                            Forgot password ?
                    </Link>
                    </Typography>
                    <Typography > Do you have an account ?
                        <Link href="#" onClick={handleSubmit} >
                            Sign Up 
                    </Link>
                    </Typography>
                    </form>
                </Paper>
            </Grid>
        
    )
}

export default Login
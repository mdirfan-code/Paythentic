import '../../App.css';
import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import useStyles from './MaterialUIStyle.js';



const Login=({handleChange})=>{

    const classes= useStyles();
    
    return(
        
            <Grid>
                <Paper  className={classes.paperStyle}>
                    <Grid align='center'>
                        <Avatar className={classes.icon}><LockOutlinedIcon/></Avatar>
                        <h2>Log in</h2>
                    </Grid>
                    <form>
                    <TextField 
                        label='Email ID' 
                        placeholder='Enter email id' 
                        type='email' 
                        fullWidth 
                        required/>
                    <TextField 
                        label='Password' 
                        placeholder='Enter password' 
                        type='password' 
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
                        <Link href="#" onClick={()=>handleChange("event",1)} >
                            Sign Up 
                    </Link>
                    </Typography>
                    </form>
                </Paper>
            </Grid>
        
    )
}

export default Login
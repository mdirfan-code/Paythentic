import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Login from '../componentsT/pages/Login'
import Signup from '../componentsT/pages/SignUp' 
import useStyles from '../componentsT/pages/MaterialUIStyle';

const LogInOutContainer=()=>{
const [value,setValue]=useState(0)
const classes= useStyles();
const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function TabPanel(props) {
    const { children, value, index, ...other } = props;
    
    
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
    return (
      <div className='login'>
      <Paper  className={classes.paperStyleIndex}>
        <Tabs
          className='log-sign-btn-wrap'
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"

        >
          <Tab label="Log In" />
        
          <Tab label="Sign Up" />
        </Tabs>
        <TabPanel value={value} index={0}>
      <Login handleChange={handleChange}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Signup/>
      </TabPanel>
    </Paper>
    </div>
        
      
    )
}

export default LogInOutContainer;
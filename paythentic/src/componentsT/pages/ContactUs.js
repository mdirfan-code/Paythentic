import React from 'react';
import '../../AppT.css';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';

export default function ContactUs() {
  return (
    <div className="contact-us"> 
      <Grid>
        <Card elevation={20}style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" ,backgroundColor:'#fff'}}>
          <CardContent>
            <Typography gutterBottom variant="h5" align='center'>
              Contact Us
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p" gutterBottom align='center'>
              support@paythentic.co
          </Typography> 
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              Fill up the form and our team will get back to you within 24 hours.
          </Typography> 
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter first name" label="First Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter last name" label="Last Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="number" placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button style={{backgroundColor:'#107869'}}type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

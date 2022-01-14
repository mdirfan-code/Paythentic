import React from 'react';
import '../../AppT.css';
import LogInOutContainer from '../../container'; 
import ContactUs from './ContactUs';
import NavBart from '../../componentsT/Navbar'
import SwipeableTextMobileStepper from '../control/stepper';
import { StyledEngineProvider } from '@mui/material';



export default function Home() {
  return (
    <>
    <NavBart/>
    <div className='bgimage'></div>
    <div className='home'>
      <div className='home-wrapper'>
        <div className='feature-description'>
          {/* <img  src='./paythentic_logo_black-removebg-preview.png' alt=''/> */}
       
            <StyledEngineProvider injectFirst>
              <SwipeableTextMobileStepper />
            </StyledEngineProvider>
        
          {/* <h1 className='tagline'>Ensure your freelance <br/>transaction</h1> */}
        </div>
        <div className='login-form'>
          <LogInOutContainer/>
        </div>
      </div>
      <div className='about-us'>
        <h2>About Us</h2> 
        <p>
        Today we are living in a world where people of various industries don't hire employees for works 
like graphic designing, content writing, software, or application development, so instead, they hire 
freelancers for this sort of work. Freelancers are people who pursue a profession without a longterm commitment to any one employer and work individually on a specific project assigned by the 
client.
<br/>
<br/>
Frauds that happens with freelancers are:-
<br/>
- After project delivery sometimes clients pay less money than the signing amount or no money at 
all.
<br/>
- Holding advance payments from a client and neglecting freelancers.
<br/>
<br/>
Frauds that happens with the client are:-
<br/>
- After payment freelancers delay project delivery.
<br/>
- Freelancers neglects client after advance payment.
<br/>
<br/>
Here PayThentic will help users to reduce the risk of these frauds who get encountered frauds. 
Users can create their profiles on our platforms with certain credentials. Our platform will work as 
a mediator between them during the whole process from connecting to the completion of the 
project.

        </p>
      </div>
      <div className='MiddleElements'>
        <div id="test">
          <ContactUs/>
        </div>
      </div>
      <footer>
        <div>
        <ul class="social-icons">
          <li><a href="#" target="_blank"><i class="fab fa-instagram" aria-hidden="true"></i></a></li>
          <li><a href="#" target="_blank"><i class="fab fa-telegram-plane" aria-hidden="true"></i></a></li>
          <li><a href="#" target="_blank"><i class="fab fa-linkedin" aria-hidden="true"></i></a></li>
          </ul>
        </div>
        <div> 
          <p>Copyright ©2021 All rights reserved</p>
        </div>
        <div>
          <a href="#" target="_blank" >Terms &amp; Conditions</a>|
          <a href="#" target="_blank" >Privacy Policy</a>|
          <a href="#" target="_blank" >DMCA</a>
        </div>
      </footer>
    </div>
    </>
    
  );
}
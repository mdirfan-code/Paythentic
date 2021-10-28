import React from 'react';
import '../../App.css';
import LogInOutContainer from '../../container'; 
import ContactUs from './ContactUs';

export default function Home() {
  return (<>
      <div className='bgimage'></div>
     <div className='home'>
      <div className='home-wrapper'>
        <div className='feature-description'>
          {/* <img  src='./paythentic_logo_black-removebg-preview.png' alt=''/> */}
          <h1 className='tagline'>Ensure your freelance <br/>transaction</h1>
        </div>
        <div className='login-form'>
          <LogInOutContainer/>
        </div>
      </div>
      <div className='about-us'>
        <h2>About Us</h2> 
        <p>
          This is a free online calculator which counts the number of characters or letters in a text, useful for your tweets on Twitter, as well as a multitude of other applications.

          Whether it is Snapchat, Twitter, Facebook, Yelp or just a note to co-workers or business officials, the number of actual characters matters. What you say may not be as important as how you say it. And how many characters you use.
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
          <li><a href="https://bit.ly/2UFwHIY" target="_blank"><i class="fab fa-instagram" aria-hidden="true"></i></a></li>
          <li><a href="https://t.me/internfreak" target="_blank"><i class="fab fa-telegram-plane" aria-hidden="true"></i></a></li>
          <li><a href="https://bit.ly/2VAFaOp" target="_blank"><i class="fab fa-linkedin" aria-hidden="true"></i></a></li>
          </ul>
        </div>
        <div> 
          <p style={{"color":"black"}}>Copyright ©2021 All rights reserved</p>
        </div>
        <div>
          <a href="/terms-and-conditions" target="_blank" >Terms &amp; Conditions</a>|
          <a href="/privacy-policy" target="_blank" >Privacy Policy</a>|
          <a href="/dmca" target="_blank" >DMCA</a>
        </div>
      </footer>
    </div>
  </>
   
  );
}
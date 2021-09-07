import React from 'react'
import Payment from './Payment';
import "./StatusCard.css"

export default function StatusCard({isFreelancer,stage,amount}) {
    
 
    if(isFreelancer){
        if(stage ==="initial"){
            return(
                <div className="Status-Card"><h2>Advance Payment Pending</h2></div>
            );
        }
        if(stage === "second"){
            return(
                <div className="Status-Card"><h2>You have to Upload Files here</h2><button>Upload Files</button></div>
            );
        }
       if(stage === "third"){
            return(
                <div className="Status-Card"><h2>You have uploaded file successfully.</h2></div>
            );
        }
     if(stage==="final"){
            return(
                <div className="Status-Card"><h2>We Got money.<br/>Waiting for approval.</h2></div>
            );
        }
        
        
    }


        if(stage ==="initial"){
            return(
                <div className="Status-Card"><h2>Firstly You have to pay 30% amount.</h2><Payment className='card-btn'/></div>
            );
        }
        if(stage === "second"){
            return(
                <div className="Status-Card"><h2>Files are not forwarded yet.</h2></div>
            );
        }
       if(stage === "third"){
            return(
                <div className="Status-Card"><h2>Files are here.</h2><h2>Pay rest money</h2><Payment className='card-btn'/></div>
            );
        }
     if(stage==="final"){
            return(
                <div className="Status-Card"><h2>Review complete project files</h2><button className='card-btn'>Download Files</button></div>
            );
        }
  
}

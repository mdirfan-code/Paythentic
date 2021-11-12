import React from 'react'
import Payment from './Payment';
import "./StatusCard.css"

export default function StatusCard({isFreelancer,stage,amount}) {
    
 
    if(isFreelancer){
        if(stage ==="Initial"){
            return(
                <div className="Status-Card"><h2>Advance Payment Pending</h2></div>
            );
        }
        if(stage === "Building"){
            return(
                <div className="Status-Card"><h2>You have to Upload Files here</h2><input type='file' className='card-btn' value='Upload Files'/></div>
            );
        }
       if(stage === "Uploaded"){
            return(
                <div className="Status-Card"><h2>You have uploaded file successfully.</h2></div>
            );
        }
     if(stage==="Review"){
            return(
                <div className="Status-Card"><h2>We Got money.<br/>Waiting for approval.</h2></div>
            );
        }
        
        
    }


        if(stage ==="Initial"){
            return(
                <div className="Status-Card"><h2>Firstly You have to pay 30% amount.</h2><Payment className='card-btn'/></div>
            );
        }
        if(stage === "Building"){
            return(
                <div className="Status-Card"><h2>Files are not forwarded yet.</h2></div>
            );
        }
       if(stage === "Uploaded"){
            return(
                <div className="Status-Card"><h2>Files are here.</h2><h2>Pay rest money</h2><Payment className='card-btn'/></div>
            );
        }
     if(stage==="Review"){
            return(
                <div className="Status-Card"><h2>Review complete project files</h2><button className='card-btn'>Download Files</button></div>
            );
        }
        return( <div className="Status-Card"><h2>Unable to fetch stage</h2></div>)
}

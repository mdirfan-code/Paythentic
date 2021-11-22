import React,{useState} from 'react'
import './Messaging.css'

export default function Messaging() {

    const [ isDialBoxVisible, setVisibility] = useState(false)
   
    const clickHandler = () => {
        var Visible;
        if(isDialBoxVisible){
           Visible=false;
        }
        else{
            Visible=true;
        }
        setVisibility(Visible)

    }

    return (
        <>
        <div className={`message-out-line ${isDialBoxVisible?"":"Off-msg-box"}`}><h1 id="msg-box-title">Messaging</h1><div className="message-container"></div><form><input type="text" placeholder="Message"/> <input type="submit" value="Send"/></form></div>
        <div className="message-box-btn" onClick={clickHandler} >Message</div>    
        </>
    )
}

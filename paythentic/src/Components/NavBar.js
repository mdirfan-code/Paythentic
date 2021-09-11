import React,{useState} from 'react';
import './NavBar.css';
import Icon from '@mdi/react'
import { mdiMagnify } from '@mdi/js'
import { mdiClose } from '@mdi/js';


function NavBar({userName}) {
    const [ isDialBoxVisible, setVisibility] = useState(false)
 

   
    return (
        <nav className="NavBar">
            <a id="paythentic-logo"><h1>PayThentic</h1></a>
            <div className="right-cor"><span id='search-bar'><Icon path={mdiMagnify} title="User Profile" size={1}   color="rgb(6, 27, 41)" onMouseOver/><input  type="text" placeholder="Search"/></span>
            <div className="profile-option" onClick={() => setVisibility(!isDialBoxVisible) } >
                <h2>@{userName}</h2>
                <img className="profile-image" src="https://source.unsplash.com/EQFtEzJGERg/1600x1600" alt="Profile Pic"/>
                </div>
                {isDialBoxVisible && <Options />}
                
            </div>
            
        </nav>
    )

    function Options() {
        return(
            <div className={`Options`} >
                    <span className="cross-btn" onClick={() => setVisibility(false) }><Icon path={mdiClose} title="User Profile" size={1}   color="white" onMouseOver/></span>                
                    <span className='update-profile-btn'>Update Profile</span>
                    <button>Log Out</button>
            </div>
                 
        )
    }
}





export default NavBar;

import React,{useState, useEffect} from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';
import Icon from '@mdi/react'
import UpdateProfileForm from './UpdateProfileForm.js';
import { mdiMagnify , mdiClose } from '@mdi/js';


function NavBar({userName}) {
    
    const [ isDialBoxVisible, setVisibility] = useState(false)
    const [isUpdateFormVisible,setUpdateFormVisibility] = useState(false)
    const [isSearchListVisible,setSearchListVisibility] = useState(false)

    const inClickHandler = ()=> {
        setVisibility(true)
        setTimeout( () => window.addEventListener('click',outClickHandler), 100)
       
        
    }
   
    const outClickHandler = () =>{
        setVisibility(false)
        window.removeEventListener('click',outClickHandler)

    }
        
    
    
 
    const PROFILE_PIC ="https://source.unsplash.com/EQFtEzJGERg/1600x1600";
   
    return (<>
        <nav className="NavBar">
            <Link to='/' id="paythentic-logo"><h1>PayThentic</h1></Link>
            <div className="right-cor">
                <span id='search-bar'>
                <Icon path={mdiMagnify} title="User Profile" size={1}   color="rgb(6, 27, 41)" />
                <input  type="text" placeholder="Search" on={() => setSearchListVisibility} />
                </span>
            <div className="profile-option" onClick={inClickHandler} >
                <h2>@{userName}</h2>
                <img className="profile-image" src={PROFILE_PIC} alt="Profile Pic"/>
                </div>
                {isDialBoxVisible && <Options />}
                
            </div>
            
        </nav>
        { isUpdateFormVisible && <UpdateProfileForm userName={userName} isFreelancer={true} profilePicLink={PROFILE_PIC}/>}
        </>
    )

    function Options() {
        return(
            <div className={`Options`} >
                    <span className="cross-btn" onClick={() => setVisibility(false) }><Icon path={mdiClose} title="User Profile" size={1}   color="white" /></span>                
                    <span className='update-profile-btn' onClick={() => setUpdateFormVisibility(!isUpdateFormVisible)}>Update Profile</span>
                    <button>Log Out</button>
            </div>
                 
        )
    }
}


export default NavBar;

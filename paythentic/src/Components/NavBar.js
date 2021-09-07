import React,{useState} from 'react';
import './NavBar.css';

function NavBar({userName}) {
    const [ isDialBoxVisible, setVisibility] = useState(false)
   
    const clickHandler = (Visible) => {
       
        setVisibility(Visible)

    }
    console.log(isDialBoxVisible)
   
    return (
        <nav className="NavBar">
            <a id="paythentic-logo"><h1>PayThentic</h1></a>
            <div className="right-cor"><span id='search-bar'><input  type="text" placeholder="Search"/></span>
            <div className="profile-option" onMouseOver={() => clickHandler(true)} ><h2>@{userName}</h2><img className="profile-image" src="https://source.unsplash.com/EQFtEzJGERg/1600x1600" alt="Profile Pic"/></div>
            <div className={`Options-${isDialBoxVisible?"OnOption":"OffOption"}`} onMouseOut={() => clickHandler(false) }>
                <span>Update Profile</span>
                <button>Log Out</button>
                </div></div>
            
        </nav>
    )
}



export default NavBar;

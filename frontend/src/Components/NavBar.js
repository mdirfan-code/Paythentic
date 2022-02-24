import React,{useState, useEffect} from 'react';
import './NavBar.css';
import {Link, Redirect } from 'react-router-dom';
import Icon from '@mdi/react'
import UpdateProfileForm from './UpdateProfileForm.js';
import { mdiMagnify , mdiClose } from '@mdi/js';

const axios = require('axios')


function NavBar({userName}) {
    
    const [ isDialBoxVisible, setVisibility] = useState(false)
    const [fetchedUsers,setFetchedUser] = useState([])
    const [isUpdateFormVisible,setUpdateFormVisibility] = useState(false)
    const [isSearchListVisible,setSearchListVisibility] = useState(false)
    const [userType,setUserType] = useState(localStorage.getItem('usertype'))
    const [doRedirect, setRedirect] = useState(false)

    const userTypesOption ={
        'Freelancer':'Employer',
        'Employer':'Freelancer'
    }

    const changeUserTypeHandler = (uType) =>{

        const bearerToken = `Bearer ${localStorage.getItem('accessToken')}`
        axios.put('/dash/usertype',{},{
            headers:{
                'authorization': bearerToken
            }
        })
        .then((resp)=>{
            console.log(resp,'::',uType)
            localStorage.setItem("usertype",uType)
            setUserType(uType)
            window.location.reload()
            
        })
        .catch((err)=>{
            if (err.message == 'Request failed with status code 401' ){
                axios.post("/api/auth/refreshToken",{
                            refreshToken: localStorage.getItem('refreshToken')
                        })
                        .then((resp) => {
                            localStorage.setItem("accessToken",resp.data.accessToken)
                            console.log("refresh access")
                            localStorage.setItem("refreshToken",resp.data.refreshToken)
                            window.location.reload()
                        })
                        .catch((err)=>{
                            console.log(err)
                            if (err.message == 401)
                            {
                            window.alert("You are not logined")
                            setRedirect(true)
                        }
                        })
                
            }

            console.log(err.message)
        })

    }

    const fetchUnameWith = e =>{
        if(e.target.value === ''){
            setSearchListVisibility(false)
            setFetchedUser([])
            return
        }
        axios.get('/api/search',{
            params:{q: e.target.value}
        })
        .then((resp) => {
                console.log(resp.data.profiles);
                setSearchListVisibility(true)
                setFetchedUser(resp.data.profiles)
            })
        
        .catch((err) => {
            if (err.message == 'Request failed with status code 401' ){
                axios.post("/api/auth/refreshToken",{
                            refreshToken: localStorage.getItem('refreshToken')
                        })
                        .then((resp) => {
                            localStorage.setItem("accessToken",resp.data.accessToken)
                            console.log("refresh access")
                            localStorage.setItem("refreshToken",resp.data.refreshToken)
                            window.location.reload()
                        })
                        .catch((err)=>{
                            console.log(err)
                            if (err.message == 401)
                            {
                            window.alert("You are not logined")
                            setRedirect(true)
                        }
                        })
                
            }

            console.log(err.message)

        })

    }

    const inClickHandler = ()=> {
        setVisibility(true)
        setTimeout( () => window.addEventListener('click',outClickHandler), 100)
       
        
    }
   
    const outClickHandler = () =>{
        setVisibility(false)
        window.removeEventListener('click',outClickHandler)

    }

    const logOutHandle = () => {

        axios.post("/api/auth/logout",{
            refreshToken: localStorage.getItem('refreshToken')
        })
        .then((resp)=>{

                console.log(resp)
                setRedirect(true)

        })
        .catch((err)=>{
            console.log(err)
        })


    }
        
    if(doRedirect){
        return (<Redirect to='/'/>)
    }
    
 
    const PROFILE_PIC ="https://www.seekpng.com/png/detail/41-410093_circled-user-icon-user-profile-icon-png.png";
   
    return (<>
        <nav className="NavBar">
            <Link to='/dash' id="paythentic-logo"><h1>PayThentic</h1></Link>
            <div className="right-cor">
                <span id='search-bar'>
                <Icon path={mdiMagnify} title="User Profile" size={1}   color="rgb(6, 27, 41)" />
                <input  type="text" placeholder="Search" onChange={(event) => fetchUnameWith(event)} on />
                </span>
                { isSearchListVisible && <SearchList />}
                

               
            <div className="profile-option" onClick={inClickHandler} >
           
                <h2>@{localStorage.getItem('username')?localStorage.getItem('username'):'username'}</h2>
                <img className="profile-image" src={PROFILE_PIC} alt="Profile Pic"/>
                </div>
                {isDialBoxVisible && <Options />}
                
            </div>
            
        </nav>
        { isUpdateFormVisible && <UpdateProfileForm userName={userName} isFreelancer={true} profilePicLink={PROFILE_PIC}/>}
        {isUpdateFormVisible && <div className='OnBG' onClick={() => setUpdateFormVisibility(!isUpdateFormVisible)}></div>}
        {isSearchListVisible && <div className='OnBG' onClick={() => setSearchListVisibility(!isSearchListVisible)}></div>}
       
        </>
    )

    function Options() {
        return(
            <div className={`Options`} >
                    <span className="cross-btn" onClick={() => setVisibility(false) }><Icon path={mdiClose} title="User Profile" size={1}   color="white" /></span>   
                    <span className='change-user-type-btn' onClick={()=>{changeUserTypeHandler(userTypesOption[userType])}}>{userType==='Freelancer'?'Set as Employer':'Set as Freelancer'}</span>     
                    <Link to='/MyProfile' style={{textDecoration: 'none'}}><span className='your-profile-btn'>Your Profile</span></Link>
                    <span className='connection-request-btn'>Connection Requests</span>        
                    <span className='update-profile-btn' onClick={() => setUpdateFormVisibility(!isUpdateFormVisible)}>Update Profile</span>
                    <button onClick={logOutHandle}>Log Out</button>
            </div>
                 
        )
    }

    function SearchList(){

        const clickHandlerUname = async (uname) => {
            window.location.assign(`/api/search/${uname}`)
            
        }


        return(<div className='searchList'>
                {
                    fetchedUsers.length >0 ?fetchedUsers.map(user =><Link to={`/api/search/${user.username}`} ><div className='uname-bar' key={user.username} onClickCapture={()=>clickHandlerUname(user.username)}>{user.username}</div></Link> ): <div className='uname-bar' key ='asdfsdf'>{"No User exist with this username" }</div>
                }
        </div>)
    }
}


export default NavBar;

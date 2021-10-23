import {React, useState} from 'react'
import './UpdateProfileForm.css';

export default function UpdateProfileForm({isFreelancer,userName,profilePicLink,details}) {

    const [skillList, setSkillList ] = useState([ 'HTML', 'CSS', 'JavaScript', 'ReactJS']);

    const skillChangeHandler = (index) => {
        setSkillList(prevState => {
            return (
               prevState.filter(item => prevState[index] !== item)
            )
        })
        
    }

    const addSkill = (item) => {
        document.forms['skill-form']['New-Skill'].value = ''
        setSkillList(prevState=>{
            return(
                [...prevState,item]
            )
        })
    }

    return (
        <div className='update-profile-form'>
            <h1>Your Profile</h1>
            <div className='upper-side'>
                <div className='profile-pic-picker'><img className='profile-image-edit' src={profilePicLink} /><div className='update-photo-btn' >Update Photo</div></div>
                <div className='user-immutable-details'><span className='save-btn-wrap'><button>Save</button></span><h2>{`@${userName}`}</h2><h3>{isFreelancer?'Freelancer':'Client'}</h3></div>
            </div>
            <div className='line-str'></div>
            <div className='user-mutable-details' >
                <span><h3>Name</h3><input type='text' value='' placeholder='Enter Your Name' /></span>
                <span><h3>Email</h3><input type='email' value='' placeholder='Enter Your Email'/></span>
                <div className='gender-wrap' ><h3>Gender</h3>
                    <div className='gender-option' >
                        <span><input type='radio' name='gender' value='Male' /><h4>Male</h4></span>
                        <span><input type='radio' name='gender' value='Female' /><h4>Female</h4></span>
                        <span><input type='radio' name='gender' value='Others' /><h4>Others</h4></span>
                    </div>
                </div>
                <div className='skill-section'>
                    <h3>Skills</h3>
                    <ul className='skill-list'>
                        {
                            skillList.map(skill => (<li key={skillList.indexOf(skill)}>
                                <h3>{skill}</h3>
                                <button onClick={()=>skillChangeHandler(skillList.indexOf(skill))}>Delete</button>
                                </li>))
                        }
                        <form name='skill-form'>
                            <input name='New-Skill' placeholder="Enter New Skill" />

                           
                            
                        </form>
                        <button onClick={()=> addSkill(document.forms['skill-form']['New-Skill'].value) }>Add</button>
                    </ul>

                </div>

                <span><h3>Payment info</h3></span>

            </div>
            
        </div>
    )
}

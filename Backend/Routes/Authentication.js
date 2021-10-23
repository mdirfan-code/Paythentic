const router = require('express').Router();
const jwt = require('jsonwebtoken')
require('dotenv').config();

const {
    signAccessToken,
    signRefreshToken,
    // verifyRefreshToken,
  } = require('../Helpers/JWT_methods.help')

const User = require('../Models/Users.model') 

router.route('/signup').post( async (req,res) => {
    console.log( {
        ...req.body
    })
    let newUser = new User(
        {
            ...req.body
        }
    )
    
    await User.findOne({username:newUser.username})
    .then(async profile=>{
        if(!profile)
            {
                await newUser.save()
                .then(async (user) => {
                        const accessToken = await signAccessToken(user.id)
                        console.log(accessToken)
                        const refreshToken = await signRefreshToken(user.id)
                        console.log(refreshToken)
                        res.status(200).json({
                            success: 1,
                            accessToken: accessToken,
                            refreshToken: refreshToken,
                            message: 'You are successfully registerd',
                        
                        });
                    }
                )
                .catch(
                    err => {
                        console.log("Error is ", err.message);
                        res.status(200).json({
                                        success: 0,
                                        message: 'registeration failed',
                                        error: err
                            
                                            });
            
                            }
                    )
            }
            else{
                res.status(200).json({
                    success: 0,
                    message:"User already exists....."
                })
            }

    })

 
    
 
})
router.route('/login').post( async (req,res) => {
    const curUser = {username: req.body.username, pass:req.body.password}

    await User.findOne(
        {username: curUser.username}
    )
    .then(async (profile) => {
        
        if(!profile){
            res.status(404).json({success: 0, message:"User not found"})
        }
        else{
            if(await profile.isValidPassword(curUser.pass)){
                const accessToken = await signAccessToken(profile.id)
                        const refreshToken = await signRefreshToken(profile.id)
                        res.status(200).json({
                            success: 1,
                            accessToken: accessToken,
                            refreshToken: refreshToken,
                            message: 'You are successfully registerd',
                        
                        });
            }
            else{
                res.json({success: 0, message:'Invalid credentials'})
            }
        }
    }).catch(err => {console.log(err) })
    


    
    

    
    
})
router.route('/logout').post((req,res) => {
    

    
    
})


module.exports = router;



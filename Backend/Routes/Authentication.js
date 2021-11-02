const router = require('express').Router();
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const nodemailer = require('nodemailer')
require('dotenv').config();

const {
    signAccessToken,
    signRefreshToken,
    verifyRefreshToken,
  } = require('../Helpers/JWT_methods.help')
  const client = require('../Helpers/init_redis.help')

const User = require('../Models/Users.model') 
const Token = require('../Models/Token.model')

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



                    var token = new Token({ _userId: user._id, token: crypto.randomBytes(16).toString('hex')});    
                    
                    token.save(function (err) {
                        if (err) { return res.status(500).json({ 
                            success: 0,
                            message: err.message 
                        }); }
             
                        // Send the email
                        var transporter = nodemailer.createTransport({service:'hotmail', auth: { user: process.env.EMAIL_ID, pass: process.env.PASS_EMAIL },
                           
                           });
                        var mailOptions = { from: 'paythentic.sup@outlook.com', to: user.emailId, subject: 'Account Verification Token', text: 'Hello,\n\n' + 'Please verify your account by clicking the link: \nhttp:\/\/' + req.headers.host + '\/auth\/confirmation\/' + token.token + ' \n ThankYou' };
                        console.log(mailOptions)
                        transporter.sendMail(mailOptions, function (err) {
                            if (err) { return res.status(500).json({ msg: err}); }

                            
                            res.status(200).json({success:1,message:'A verification email has been sent to ' + user.emailId + '.'});
                        });
                    });
                    if(user.isVerified)
                       { const accessToken = await signAccessToken([user.id,user.username])
                        console.log(accessToken)
                        const refreshToken = await signRefreshToken([user.id,user.username])
                        
                        console.log(refreshToken)
                        res.status(200).json({
                            success: 1,
                            accessToken: accessToken,
                            refreshToken: refreshToken,
                            message: 'You are successfully registerd',
                        
                        });}

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
    //await setInterval(client.ping(), 1000 * 60 * 30);
    console.log("reached log in")
    await User.findOne(
        {username: curUser.username}
    )
    .then(async (profile) => {
       
        
        if(!profile){
            res.status(404).json({success: 0, message:"User not found"})
        }
        else{
            if(await profile.isValidPassword(curUser.pass)){
             

                if (!profile.isVerified) 
                return res.status(401).send({ type: 'not-verified', msg: 'Your account has not been verified.' });
                console.log("passed validation")
                const accessToken = await signAccessToken([profile.id,profile.username])
                console.log("accessToken ",accessToken )
                const refreshToken = await signRefreshToken([profile.id,profile.username])
                console.log("refreshToken ",refreshToken )
                res.status(200).json({
                    success: 1,
                    accessToken: accessToken,
                    refreshToken: refreshToken,
                    message: 'You are successfully login',
                        
                    });
            }
            else{
                res.json({success: 0, message:'Invalid credentials'})
            }
        }
    }).catch(err => {console.log(err) })
    


    
    

    
    
})

router.route('/confirmation/:token').get( async (req,res) => {

    

    Token.findOne({ token: req.params.token }, function (err, token) {
        if (!token) return res.status(400).send({ type: 'not-verified', msg: 'We were unable to find a valid token. Your token my have expired.' });
 
        // If we found a token, find a matching user
        User.findOne({ _id: token._userId }, function (err, user) {
            if (!user) return res.status(400).send({ msg: 'We were unable to find a user for this token.' });
            if (user.isVerified) return res.status(400).send({ success:0, msg: 'This user has already been verified.' });
 
            // Verify and save the user
            user.isVerified = true;
            user.save(function (err) {
                if (err) { return res.status(500).send({ msg: err.message }); }
                res.status(200).json({success:1 , message:"The account has been verified. Please log in"});
            });
        });
    });

    
    
})

router.route('/refreshToken').post(async (req,res,next)=>{
    try {
        const { refreshToken } = req.body
        if (!refreshToken) throw createError.BadRequest()
        const userId = await verifyRefreshToken(refreshToken)
  
        const accessToken = await signAccessToken(userId)
        const refToken = await signRefreshToken(userId)
        res.send({ accessToken: accessToken, refreshToken: refToken })
      } catch (error) {
        next(error)
      }
})

router.route('/logout').post(async (req,res,next) => {
    try {
        const { refreshToken } = req.body
        if (!refreshToken) throw createError.BadRequest()
        const userId = await verifyRefreshToken(refreshToken)
        client.DEL(userId, (err, val) => {
          if (err) {
            console.log(err.message)
            throw createError.InternalServerError()
          }
          console.log(val)
          res.sendStatus(204)
        })
      } catch (error) {
        next(error)
      } 
})


module.exports = router;



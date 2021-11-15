const router = require('express').Router();
const jwt = require('jsonwebtoken')

const User = require('../Models/Users.model')

require('dotenv').config();
// let Exercise = require('../Models/Users');


//search 

router.route('/').get(async (req,res) => {
    let uname = req.query.q
    // console.log(uname)
    await User.find({username:{"$regex":`.*${uname}.*`}},{"_id":0,username:true,})
    .then((profiles)=>{
        // console.log(profiles)
        res.status(200).json({
            success:1,
            profiles
        })
    })
    .catch((err) => {
        res.status(404).json({
            success:0,
            error:err
        })
    })

}
)

// fecthing profile of particular 
router.route('/:username').get(async (req,res) => {
    let uname = req.params.username
    await User.findOne({username:uname},{"_id":0,username:true,"fullName":true,"currentUserType":true,"emailId":true,"skills":true,"experience":true,"profilePicUrl":true,'isVerified':true})
    .then((profile)=>{  
        res.status(200).json({
            success:1,
            message: "Found the User",
            profile
        })

    })
    .catch((err) => {
        res.status(404).json({
            success:0,
            error:err
        })
    })

}
)



module.exports = router;



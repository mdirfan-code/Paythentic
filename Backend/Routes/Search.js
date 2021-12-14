const router = require('express').Router();
const jwt = require('jsonwebtoken')

const User = require('../Models/Users.model')

require('dotenv').config();
// let Exercise = require('../Models/Users');


//search 

router.route('/').get(async (req,res) => {
    let uname = req.query.q
    // console.log(uname)
    await User.find({username:{"$regex":`.*${uname}.*`}},{"_id":0,username:true,}).limit(5)
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
    console.log(uname)
    await User.findOne({username:uname},{id:0,accountNo:0,password:0,ifscCode:0,historyProjects:0,activeProjects:0})
    .then((profile)=>{ 
        console.log(profile) 
        if(profile == null){
            res.status(200).json({
                success:1,
                message: "User does not",
                profile
            })
        }
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



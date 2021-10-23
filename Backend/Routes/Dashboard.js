const router = require('express').Router();
const jwt = require('jsonwebtoken')

const express = require('express')

var sanitize = require('mongo-sanitize');

const bcrypt = require('bcrypt')
require('dotenv').config();
const User = require('../Models/Users.model')
const Project = require('../Models/Projects.model')


// const { getProjectById} = require('../Helpers/projects_methods.help')

router.use(express.json())

const userTypes= {
    "Freelancer":"asFreelancer" ,
    "Client":"asClient"}

const changeType = (curtype)=>{
    if(curtype==="Client"){
        return "Freelancer"
    }
    return "Client"
}

// Active Project

router.route('/:username/').get( async (req,res) => {
    const uname = sanitize(req.params.username)
    console.log(req.params)
    await User.findOne({"username":uname})
    .then(async (profile) =>{
            console.log(profile)
            const activeProjects = profile.activeProjects[userTypes[profile.currentUserType]]
            let expandedPrj = []
            for(let projId of activeProjects){
                    const output = await Project.findById(projId)
                    .then((proj) => proj)
                    .catch((err) => err)

                    expandedPrj.push({
                        projId:output.id,projectName: output.projectName,projectDscrp:output.projectDscrp,freelancer:output.freelancerUname,client:output.clientUname
                    })
            }
            console.log(expandedPrj)
            res.status(200).json({
                "success": 1,
                "projects":expandedPrj
            })
        }
    )
    .catch((err)=>{
        console.log(err)
        res.status(500).json({
            success:0,
            message:'Fetching failed!',
            error: err
        })

    })

}) 

// History Project
router.route('/:username/history').get(async (req,res) => {
    const uname = sanitize(req.params.username)
    console.log(req.params)
    await User.findOne({"username":uname})
    .then(async (profile) =>{
            console.log(profile)
            const historyProjects = profile.historyProjects[userTypes[profile.currentUserType]]
            let expandedPrj = []
            for(let projId of historyProjects){
                    const output = await Project.findById(projId)
                    .then((proj) => proj)
                    .catch((err) => err)

                    expandedPrj.push({
                        projId:output.id,projectName: output.projectName,projectDscrp:output.projectDscrp,freelancer:output.freelancerUname,client:output.clientUname
                    })
            }
            console.log(expandedPrj)
            res.status(200).json({
                "success": 1,
                "projects":expandedPrj
            })
        }
    )
    .catch((err)=>{
        console.log(err)
        res.status(500).json({
            success:0,
            message:'Fetching failed!',
            error: err
        })

    })

})

// Create Project
router.route('/createProject').post(async (req,res) => {
    console.log({...req.body})
    let sentProfile = sanitize(req.body)
    const newProject = new Project(sentProfile);

    await newProject.save()
    .then(async (project)=> {
        
        await User.findOneAndUpdate(
            {username: project.freelancerUname},
            {"$push":{"activeProjects.asFreelancer":project.id}}
            ).then((resp)=>{console.log(resp)})
            .catch(err => {console.log(err)
                res.status(500).json({
                    success: 0,
                    message:"project got saved on database but there is an error on user schema",
                    error:err
            })
        })
        await User.findOneAndUpdate(
            {username: project.clientUname},
            {"$push":{"activeProjects.asClient":project.id}}
            ).then((resp)=>{console.log(resp)})
            .catch((err) => {console.log(err)
                res.status(500).json({
                    success: 0,
                    message:"project got saved on database but there is an error on user schema",
                    error:err
            })
        })

        res.status(200).json({success:1,
            message:"Project got create successfully!"

        })


    }).catch(
        (err) => {
            res.status(500).json(
                {
                    success: 0,
                    message:"Creation of new project got failed!!",
                    error: err
                }
            )
        }
    )



})

// view Your Profile
router.route('/:username/YourProfile').get( async (req,res) => {
    const uname = sanitize(req.params.username)

    await User.findOne({username:uname},{accountNo:0,password:0,ifscCode:0,historyProjects:0,activeProjects:0})
    .then((profile) => {
        
    
        console.log(profile)

        res.status(200).json({
            success:1,
            profile: profile,
            message:"Fetching successful"
        })
    })
    .catch((err) => {
        console.log(err)
        res.status(500).json({
            success:0,
            message:"Fetching failed",
            error: err
        })

    })

})

// Update Profile
router.route('/UpdateProfile').put((req,res) => {


})

// change User Type
router.route('/:username/usertype').put( async (req,res) => {
    const uname = sanitize(req.params.username)

    await User.findOne({username:uname})
    .then(async (profile) =>{

        // console.log(profile.currentUserType)
        await User.updateOne({username:uname},{$set:{currentUserType:changeType(profile.currentUserType)}})
        .then((prof)=>{
            // console.log(prof.currentUserType)
            res.status(200).json({
                success: 1,
                message:"user type changed successfully"
            })
        }).catch((err)=>{
            res.status(500).json({
                success: 0,
                message:"Process Failed",
                error:err
            })

        })
    }
    ).catch(
        (err)=>{
            res.status(500).json({
                success: 0,
                message:"Process Failed",
                error:err
            })
        }
    )




        
})



// connection request send
router.route('/connect').post( async (req,res) => {
    let info = sanitize(req.body)
     
    console.log(info)

    await User.findOneAndUpdate({username:info.to},{$push:{"connectionRequest" :{"From":info.from}}})
    .then((profile)=>{
        console.log(profile)
        res.status(200).json({
            success: 1,
            message: "Request successfully sent!"
        })
    })
    .catch((err)=>{
        res.status(500).json({
            success:0,
            message: "Something went wrong !",
            error: err
        })
    })



})

// view all connection requests
router.route('/:username/connectionRequests').get( async(req,res) => {
        let uname = sanitize(req.params.username)

        await User.find({username:uname,"connectionRequest.status":'unresolve'})
        .then((requests)=>{
            res.status(200).json({
                success:1,
                requests:requests

            })
        }
        )
        .catch((err) => {
            res.status(500).json({
                success:0,
                message:"something went wrong",
                error: err
            })
        })




})

// action on connection request
router.route('/action').post((req,res) => {

})



module.exports = router;



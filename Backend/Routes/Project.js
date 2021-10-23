const router = require('express').Router();
const jwt = require('jsonwebtoken')
require('dotenv').config();



const Project = require('../Models/Projects.model')

const express = require('express')

var sanitize = require('mongo-sanitize');
// const { getProjectById} = require('../Helpers/projects_methods.help')

router.use(express.json())



// View Specific Project
router.route('/:id').get(async(req,res) => {
  const info = sanitize(req.params)


    await Project.findOne({id:info.id},{_id:0,projectFiles:0})
    .then( (proj) => {
      console.log(proj)
      res.status(200).json(
        {
          success:1,
          project:proj
        }
      )
    }

    ).catch(
      (err) => {

        res.status(500).json({
          success:0,
          message:"something went wrong",
          error:err
        })

    })

})

// Update Project
router.route('/:id/updateProject').put(async (req,res) => {
        
    await Project.findOneAndUpdate({id:req.params.id},{"$set":req.body})
    .then(() => {
      res.status(200).json({
        success:1,
        message:"Updated your project details !"
      })

    }).catch((err) => {
      res.status(500).json({
        success: 0,
        message:"Updation failed!",
        error: err
      })
    })
})


// Make Payment 
router.route('/payment').post((req,res) => {

})

// upload Files
router.route('/upload').post((req,res) => {
  
})









module.exports = router;



const router = require('express').Router();
const jwt = require('jsonwebtoken')
require('dotenv').config();



const Project = require('../Models/Projects.model')

const express = require('express')
const multer = require('multer');


const {uploadS3} = require('../Helpers/aws_buckect.help')

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
router.post('/upload',uploadS3.array, (req,res) => {
  const { projId } = req.header;
  console.log("projId ",projId)
  let files= [];

  if (req.files.length > 0) {
    files = req.files.map((file) => {
      return { file: file.location };
    });
  }
  console.log("thisidnnd",projId)



  Project.findOneAndUpdate({"_id":projId},{"$set":{"projectFiles":files}},(error, product) => {
    if (error) return res.status(400).json({ error });
    if (product) {
      res.status(201).json({ product, files: req.files });
    }
  });
})









module.exports = router;



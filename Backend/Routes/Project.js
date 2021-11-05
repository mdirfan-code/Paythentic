const router = require('express').Router();
const jwt = require('jsonwebtoken')
require('dotenv').config();
const express = require('express')
const multer = require('multer');




const Project = require('../Models/Projects.model')
const ProjectFile = require('../Models/ProjectFiles.model')
const Payment = require('../Models/Payment.model')



const {uploadS3, isFileCame} = require('../Helpers/aws_buckect.help')

var sanitize = require('mongo-sanitize');
// const { getProjectById} = require('../Helpers/projects_methods.help')

router.use(express.json())


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
router.route('/upload/:projid').post( uploadS3.array("projectFiles",1),  async (req,res) => {
  const {projid}  = req.params;
  console.log("projId ",projid)


  let files= [];

  if (req.files.length > 0) {
    files = req.files.map((file) => {
      return { file: file.location };
    });
  }
  console.log("thisidnnd",projid)

  const newFiles = new ProjectFile({"projectId":projid, "projectFiles":files})

 


  newFiles.save(async (error, projectFiles) => {
    if (error) return res.status(400).json({ error });
    if (projectFiles) {

      res.status(201).json({ projectFiles, files: req.files });
    }
  });
});


router.route('/fetch/:projid').get(async (req,res) => {
  const {projid}  = req.params;



  await ProjectFile.findOne({"projectId":projid})
  .then(
    (files) =>{

      res.status(200).json({
        success:1,
        files: files
      })
      
    }
  )
  .catch((err)=> {
    res.status(200).json({
      success:0,
      error: err
    })
  })



})









module.exports = router;



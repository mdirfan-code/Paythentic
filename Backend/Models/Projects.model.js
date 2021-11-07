const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectsSchema = new Schema(
    {
       
          projectName:
          {
              type: String,
              required: true,
              minlength: 8
          },
        projectDscrp:{
            type: String,
            required: true,
            minlength:10,
            trim: true,
        },
        freelancerUname:{

            type: String,
            required: true,
            trim: true,
            minlength: 5
        },
        clientUname:{
            type:String,
            required: true,
            trim:true,
            minlength:7
        },
        dueDate:{
            type: Date,
        },
        projectFiles:[{
            type: Schema.Types.ObjectId,
            ref:'ProjectFile'
        }],
        status:{
            type: String,
            enum:['Initial','Building','Uploaded','Review'],
            default: 'Initial'
        },
        signingAmount:{
            type: mongoose.Types.Decimal128
        },
        isCompleted:{
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
)

const Project = mongoose.model('Project', projectsSchema);

module.exports = Project;
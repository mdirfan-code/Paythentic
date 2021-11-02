const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectFileSchema = new Schema(
    {
        projectId: {
            type: Schema.Types.ObjectId,
            ref:'Project'
          },
        projectFiles:{
            type: Array
        }
        
    },
    {
        timestamps: true
    }
)

const ProjectFile = mongoose.model('ProjectFile', projectFileSchema);

module.exports = ProjectFile;
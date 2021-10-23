const Project = require('../Models/Projects.model')

module.exports={
    getProjectById: async (projId) => {
        const output = await Project.findById(projId)
        .then((proj) => proj)
        .catch((err) => err)

       return output
    },
}
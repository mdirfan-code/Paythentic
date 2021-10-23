const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const connectionSchema = new Schema(
    {
 
         requestFromTo:{
             type:{from: String,
             to: String},
             unique:true   
         },
        
        date: {
            type: Date,
            default: Date.now()
        },
        status:{
            type: String,
            enum:['rejected','accepted','unresolve'],
            default: 'unresolve'
        }
    },
    {
        timestamps: true
    }
)

const Connection = mongoose.model('connection', connectionSchema);

module.exports = Connection;
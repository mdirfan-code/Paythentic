const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const adminsSchema = new Schema(
    {
        adminUsername: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            
          },
         password:{
            type: String,
            required: true,
            trim: true,
            minlength: 5
         },
         role:{
            type: String,
            required: true,
            minlength: 5
        },
        fullname:{
            type:String,
            required: true
    },
        privilages: [{
            type: String   
        }]
    },
    {
        timestamps: true
    }
)

const Admin = mongoose.model('Admin', adminsSchema);

module.exports = Admin;
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messagesSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            minlength: 5
          },
          password:
          {

              type: String,
              required: true,
              minlength: 8
          },
        currentUserType:{
            type: String,
            required: true,
            trim: true,
        },
        fullName:{
            type: String,
            required: true,
            trim: true,
            minlength: 5
        },
        emailId:{
        
            type:String,
            required: true,
            trim:true,
            minlength:7
        },
        accountNo:{
            type: Number,
            

        },
        skills:{
            type:Array

        },
        connectedUsers:{
            type:Array
        }
    },
    {
        timestamps: true
    }
)

const Message = mongoose.model('Message', messagesSchema);

module.exports = Message;
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema;


const userSchema = new Schema(
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
            enum:['Client','Freelancer'],
            default: 'Client'
        },
        fullName:{

            type: String,
            required: true,
            minlength: 5
        },
        emailId:{
            type:String,
            required: true,
            unique:true,
            trim:true,
            minlength:7
        },
        contactNo:{
            type:String, 
            minlength:10,
            trim:true,
        },
        accountNo:{
            type: Number,
        },
        skills:{
            type:Array
        },
        // connectionRequest:[{
        //     From:{
        //         type: String,
        //         unique: true,
        //         ref: 'User'
        //     },
        //     date: {
        //         type: Date,
        //         default: Date.now()
        //     },
        //     status:{
        //         type: String,
        //         enum:['rejected','accepted','unresolve'],
        //         default: 'unresolve'
        //     }
            
        // }],
        connectedUsers:[{ type: Schema.Types.ObjectId, ref: 'User'}],
        expirience:[{
            designation: String,
            dateFrom:  String,
            dateTo: String,
            description : String
        }],
        ifscCode:{
            type:String
        },
        profilePicUrl:{
            type:String
        },
        historyProjects:{asClient:[{
            type: Schema.Types.ObjectId, ref: 'Project'
        }], asFreelancer:[{
            type: Schema.Types.ObjectId, ref: 'Project'
        }]},
        activeProjects:{asClient:[{
            type: Schema.Types.ObjectId, ref: 'Project'
        }], asFreelancer:[{
            type: Schema.Types.ObjectId, ref: 'Project'
        }]},
        trustIndex:{
            type: Schema.Types.Decimal128
        }
    },
    {
        timestamps: true
    }
)

userSchema.pre('save', async function (next) {
    try {
      /* 
      Here first checking if the document is new by using a helper of mongoose .isNew, therefore, this.isNew is true if document is new else false, and we only want to hash the password if its a new document, else  it will again hash the password if you save the document again by making some changes in other fields incase your document contains other fields.
      */
      if (this.isNew) {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(this.password, salt)
        this.password = hashedPassword
      }
      next()
    } catch (error) {
      next(error)
    }
  })

userSchema.methods.isValidPassword = async function (password) {
    try {
      return await bcrypt.compare(password, this.password)
    }catch (error) {
      throw error
    }
  }
  
const User = mongoose.model('User', userSchema);



module.exports = User;
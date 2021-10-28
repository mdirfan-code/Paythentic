const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reportsSchema = new Schema(
    {
        projectId: {
            type: Schema.Types.ObjectId,
            ref:'Project'
          },
         reportedBy:{
            type: String,
            required: true,
            trim: true,
            minlength: 5
         },
         reportType:{
            type: String,
            required: true,
            trim: true,
            enum:['Fraud','Technical']
         },
         reportedUser:{
            type: String,
            required: true,
            trim: true,
            minlength: 5
        },
        complain:{type:String},
        date: {
            type: Date,
            default: Date.now()
        },
        isReviewed:{
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
)

const Report = mongoose.model('Report', reportsSchema);

module.exports = Report;
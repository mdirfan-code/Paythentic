const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const paymentsSchema = new Schema(
    {
        projectId: {
            type: Schema.Types.ObjectId, ref: 'Project'
          },
         advanceAmount:{
             type: Schema.Types.Decimal128
         },
         finalAmount:{
            type: Schema.Types.Decimal128
        },
        signingAmount:{
            type: Schema.Types.Decimal128
        },
        advTransactionId:{
            type : String
        },
        finalTransactionId:{
            type : String
        }
    },
    {
        timestamps: true
    }
)

const Payment = mongoose.model('Payment', paymentsSchema);

module.exports = Payment;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JobSchema = new Schema({ 
    jobID: {
        type: Number
    },
    customerID: {
        type: Number
    },
    dayBooked: {
        type: Date,
        default: Date.now,
    },
    dayService: {
        type: Date,
    },
    serviceList: [
        {
        type: {
            type: String,
            // required: "Exercise type required",
        },
        name: {
             type: String,
            //  required: "Exercise name required",
        },
        code: {
            type: String
        },
        quantity: {
            type: Number
        },
        price: {
            type: Number
        }
        }
    ]
  }
)


module.exports = mongoose.model("Job", JobSchema)

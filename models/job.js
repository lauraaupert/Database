const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JobSchema = new Schema({ 
    curr_id: {
        type: Schema.Types.ObjectId,
        ref: "Customer"
        // type: String
    },
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
    date: {
        type: Date,
    },
    serviceList: [
        {
        type: {
            type: Object,
            // required: "Exercise type required",
        },
        quantity: {
            type: Number
        },
        total: {
            type: Number
        }
        }
    ]
  }
)


module.exports = mongoose.model("Job", JobSchema)

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({ 
    customerID: {
        type: Number
    },
  firstName: {
    type: String,
    // required: [true, "Please provide a name"]
  },
  lastName: {
    type: String,
    // required: [true, "Please provide an email"],
    // unique: true,
    // match: [
    //   /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    //   "Please provide a valid email"
    // ]
  },
  cellPhone: {
      type: String,
    //   required: [true, "Please provide at least one show"]
  },
  homePhone: {
    type: String,
  //   required: [true, "Please provide at least one show"]
},
email: {
    type: String,
  //   required: [true, "Please provide at least one show"]
},
referral: {
  type: String,
//   required: [true, "Please provide at least one show"]
},
county: {
  type: String,
//   required: [true, "Please provide at least one show"]
},
confirmed: {
  type: Boolean,
//   required: [true, "Please provide at least one show"]
},

address: {
    
        line1: {
          type: String,
          // required: [true, "Please enter your address. It will not be displayed."]
        },
        line2: {
        type: String,
        // required: [true, "Please enter your address. It will not be displayed."]
        },
        city: {
            type: String,
            // required: [true, "Please enter your address. It will not be displayed."]
          },
          state: {
          type: String,
          // required: [true, "Please enter your address. It will not be displayed."]
          },
          zip: {
            type: Number,
            // required: [true, "Please enter your address. It will not be displayed."]
          },
        },

  jobs: [
    {
     type: Schema.Types.ObjectId,
     ref: "Job",
    }
    ]      
  


})


module.exports = mongoose.model("Customer", CustomerSchema)

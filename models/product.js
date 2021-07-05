const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({ 
        group: {
            type: String,
        },
        name: {
             type: String,
        },
        code: {
            type: String
        },
        price: {
            type: Number
        }
    }
)

module.exports = mongoose.model("Product", ProductSchema)

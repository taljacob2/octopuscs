const mongoose = require("mongoose");

const ItemSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Missing name."],
        minLength: [2, "Name must be minimum 2 chars."],
        maxLength: [50, "Name can't exceed 50 chars."],
        validate: {
            validator: value => value.indexOf("  ") === -1,
            message: "Name can't contain multiple spaces."
        }
    },
    qty: {
        type: Number,
        required: [true, "Missing qty."],
        min: [0, "Quantity can't be negative."],
        max: [1000, "Quantity can't exceed 1000."]
    },
    rating: {
        type: Number,
        required: [true, "Missing rating."],
        min: [1, "Rating must be at least 1."],
        max: [10, "Rating can't exceed 10."]
    },
    microsieverts: {
        type: Number
    }
})

// class name, schema, collection
const ItemModel = mongoose.model('ItemModel', ItemSchema, "items")


module.exports = ItemModel;
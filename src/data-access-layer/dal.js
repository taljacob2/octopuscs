const mongoose = require("mongoose");

const connectAsync = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB is connected")
    } catch (err) {
        console.log(err.message)
        process.exit(1)
    }
}

module.exports = connectAsync
const mongoose = require("mongoose");

const connectDB = (uri) => {
    console.log("From Database");
    return mongoose.connect(uri)
}

module.exports = connectDB
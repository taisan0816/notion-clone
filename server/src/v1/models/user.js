const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        requred: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

modules.exports = mongoose.models("User", userSchema)
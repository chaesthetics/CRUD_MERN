const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: true,
    },
    age:{
        type: Number,
        required: true,
    },

    email:{
        type: String,
        required: true,
    },
    status:{
        type: String,
        required: true,
    }
})

const User = mongoose.model("user", UserSchema);
module.exports = User

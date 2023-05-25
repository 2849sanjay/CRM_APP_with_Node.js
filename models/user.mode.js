const mongoose = require("mongoose");
const constants = require("../utills/constants");


const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        minLength: 10,
        lowercase: true,
        unique: true
    },
    userType: {
        type: String,
        required: true,
        default: constants.userType.customer
    },
    userStatus: {
        type: String,
        required: true,
        default: constants.userType.approved
    },
    createdAt: {
        type: Date,
        immutable,
        default: () => {
            return Date.now();
        }
    },
    updatedAt: {
        type: Date,
        default: () => {
            return Date.now()
        }
    }




})
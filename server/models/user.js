import mongoose from "mongoose";
import validator from "validator";

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique:[true, 'Email already exists'],
        validate: validator.isEmail
    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
        minlength: [6, 'Password must be at least 6 characters'],
        select: false
    },
    pinCode: {
        type: String,
        required: [true, 'Please add a pinCode'],
    },
    address: {
        type: String,
        required: [true, 'Please add an address'],
    },
    city: {
        type: String,
        required: [true, 'Please add a city'],
    },
    state: {
        type: String,
        required: [true, 'Please add a state'],
    },
    country: {
        type: String,
        required: [true, 'Please add a country'],
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    avatar: {
        public_id: String,
        url: String
    },
    otp: {
        type: Number,
        otp_expires: Date
    }


})

export const User = mongoose.model('User',schema)
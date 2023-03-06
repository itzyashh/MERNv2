import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
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
        type: Number,
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

schema.pre('save', async function(next) {
   
    this.password = await bcrypt.hash(this.password, 10)
})

schema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password)
}
schema.methods.generateToken = async function() {
    return jwt.sign({id: this._id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRES
    })
}

export const User = mongoose.model('User',schema)
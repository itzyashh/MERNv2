
import {User} from '../models/user.js'

export const signup = async  (req,res,next) => {
    const {name,email,password,pinCode,address,city,state,country} = req.body
    await User.create({name,email,password,pinCode,address,city,state,country})
    res.status(201).json({success: true})
}

export const login = async (req,res,next) => {
    const {email,password} = req.body
    const user = await User.findOne({email}).select('+password')
    if(!user) {
        return res.status(404).json({success: false, message: 'User not found'})
    }
    const isPasswordMatched = await user.comparePassword(password)
    if(!isPasswordMatched) {
        return res.status(401).json({success: false, message: 'Invalid credentials'})
    }
    res.status(200).json({success: true})
}
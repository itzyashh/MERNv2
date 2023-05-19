import { User } from "../models/user.js"

export const test = (req, res) => {
    res.send(`Email: ${req.body.email} Password: ${req.body.password}`)

}

export const register = async (req, res) => {

    const existingUser = await User.findOne({email:req.body.email})
    if (existingUser) {
       return res.status(409).json({
            success: false,
            message: "User already exists"
        })}

    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        address: req.body.address,
        state: req.body.state,
        city: req.body.city,
        country: req.body.country,
        pinCode: req.body.pinCode
    })

    await newUser.save()
    res.status(201).json({
        success: true,
        message: "User created successfully"
    })
}

export const login = async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        })
    }
    const isMatch = await user.verifyPassword(password)
    if (!isMatch) {
        return res.status(404).json({
            success: false,
            message: "Incorrect password"
        })
    }
    res.status(200).json({
        success: true,
        message: "Login successful"
    })
}
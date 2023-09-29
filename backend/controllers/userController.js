import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';


const loginUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Login user' });
});


const logoutUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Logout user' });
});


const getUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'User profile' });
});


const updateUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Update profile' });
});


const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email: email });

    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    const user = await User.create({
        name: name,
        email: email,
        password: password
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});


export {
    loginUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    registerUser,
};
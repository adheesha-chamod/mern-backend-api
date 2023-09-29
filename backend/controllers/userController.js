import asyncHandler from 'express-async-handler';


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
    res.status(200).json({ message: 'Register user' });
});


export {
    loginUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    registerUser,
};
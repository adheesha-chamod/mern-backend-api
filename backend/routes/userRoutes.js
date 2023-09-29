import express from "express";
const router = express.Router();
import {
    loginUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    registerUser,
} from "../controllers/userController.js";


router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.get('/profile', getUserProfile);
router.put('/profile', updateUserProfile);
router.post('/register', registerUser);


export default router;
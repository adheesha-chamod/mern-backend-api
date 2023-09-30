import express from "express";
const router = express.Router();
import protect from "../middleware/authMiddleware.js";
import {
    loginUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    registerUser,
} from "../controllers/userController.js";


router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.get('/profile', protect, getUserProfile);
router.put('/profile', protect, updateUserProfile);
router.post('/register', registerUser);


export default router;
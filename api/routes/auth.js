import express from "express";
import { login, register, logout } from "../controllers/auth.js";

const router = express.Router()

// Route for user login
router.post("/login", login)

// Route for user registration
router.post("/register", register)

// Route for user logout
router.post("/logout", logout)

export default router
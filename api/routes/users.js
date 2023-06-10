import express from "express";
import { getUser, updateUser } from "../controllers/user.js";

const router = express.Router()

// Route for retrieving user information by ID
router.get("/find/:userId", getUser)

// Route for updating user information
router.put("/", updateUser)

export default router

import express from "express";
import { getLikes, addLike, deleteLike } from "../controllers/like.js";

const router = express.Router()

// Route for retrieving likes
router.get("/", getLikes)

// Route for adding a new like
router.post("/", addLike)

// Route for deleting a like
router.delete("/", deleteLike)

export default router
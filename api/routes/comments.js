import express from "express";
import { getComments, addComment, deleteComment } from "../controllers/comment.js";

const router = express.Router()

// Route for retrieving comments
router.get("/", getComments)

// Route for adding a new comment
router.post("/", addComment)

// Route for deleting a comment by ID
router.delete("/:id", deleteComment)

export default router
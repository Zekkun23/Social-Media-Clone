import express from "express";
import { getPosts, addPost, deletePost } from "../controllers/post.js";

const router = express.Router();

// Route for retrieving posts
router.get("/", getPosts);

// Route for adding a new post
router.post("/", addPost);

// Route for deleting a post by ID
router.delete("/:id", deletePost);

export default router;
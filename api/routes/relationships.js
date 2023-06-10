import express from "express";
import { getRelationships, deleteRelationship, addRelationship } from "../controllers/relationship.js";

const router = express.Router()

// Route for retrieving relationships
router.get("/", getRelationships)

// Route for adding a new relationship
router.post("/", addRelationship)

// Route for deleting a relationship
router.delete("/", deleteRelationship)

export default router

import express from "express";
import { getComments } from "../controllers/comment.js";
import { addComment } from "../controllers/comment.js";


const router= express.Router()
router.get("/", getComments);
router.post("/", addComment);

export default router
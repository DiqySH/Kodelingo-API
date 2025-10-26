import express from "express";
import { createNote, getAllNotes } from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getAllNotes);
router.post("/", createNote);
router.put("/:id", getAllNotes);
router.delete("/:id", getAllNotes);

export default router;

import express from "express";
import { getAllNotes, createNote } from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getAllNotes);
router.post("/", createNote);
router.put("/:id", getAllNotes);
router.delete("/:id", getAllNotes);

export default router;

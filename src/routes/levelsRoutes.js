import express from "express";
import {
  getAllLevels,
  getLevelById,
  createLevel,
  updateLevel,
  deleteLevel,
} from "../controllers/levelsController.js";

const router = express.Router();

router.get("/", getAllLevels);
router.get("/:id", getLevelById);
router.post("/", createLevel);
router.put("/:id", updateLevel);
router.delete("/:id", deleteLevel);

export default router;

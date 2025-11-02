import express from "express";
import {
  getAllEntities,
  getEntityByName,
  createEntity,
  updateEntity,
  deleteEntity,
} from "../controllers/entityController.js";

const router = express.Router();

router.get("/", getAllEntities);
router.get("/:name", getEntityByName);
router.post("/", createEntity);
router.put("/:name", updateEntity);
router.delete("/:name", deleteEntity);

export default router;

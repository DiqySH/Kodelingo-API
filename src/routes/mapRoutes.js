import express from "express";
import {
  createKota,
  deleteKota,
  getAllKota,
  getKotaById,
  updateKota,
} from "../controllers/mapsController.js";

const router = express.Router();

router.get("/", getAllKota);
router.get("/:id", getKotaById);
router.post("/", createKota);
router.put("/:id", updateKota);
router.delete("/:id", deleteKota);

export default router;

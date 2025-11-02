import express from "express";
import {
  getAllCities,
  getCityByName,
  createCity,
  updateCity,
  deleteCity,
} from "../controllers/cityController.js";

const router = express.Router();

router.get("/", getAllCities);
router.get("/:name", getCityByName);
router.post("/", createCity);
router.put("/:name", updateCity);
router.delete("/:name", deleteCity);

export default router;

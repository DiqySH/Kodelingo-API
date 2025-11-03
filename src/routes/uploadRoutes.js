import express from "express";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import Asset from "../models/Asset.js";

dotenv.config();

const router = express.Router();

const upload = multer({ dest: "/tmp" });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

router.post("/", upload.single("file"), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "my_assets",
    });

    const asset = await Asset.create({
      name: req.file.originalname,
      url: result.secure_url,
      public_id: result.public_id,
      type: req.file.mimetype,
    });

    res.json(asset);
  } catch (err) {
    console.error("Cloudinary upload error:", err);
    res.status(500).json({ message: "Upload failed", error: err.message });
  }
});

export default router;

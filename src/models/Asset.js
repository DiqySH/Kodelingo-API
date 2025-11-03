import mongoose from "mongoose";

const assetSchema = new mongoose.Schema({
  name: String,
  url: String,
  public_id: String,
  type: String,
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
});

const Asset = mongoose.model("Asset", assetSchema);

export default Asset;

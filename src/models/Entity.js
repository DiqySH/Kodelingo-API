import mongoose from "mongoose";

const entitySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  type: { type: String, enum: ["enemy", "boss"], required: true },
  hp: { type: Number },
  attackPower: { type: Number },
  sprite: { type: String, required: true },
  animations: [String],
  dialog: [String],
});

const Entity = mongoose.model("Entity", entitySchema);

export default Entity;

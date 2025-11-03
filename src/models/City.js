import mongoose from "mongoose";

const citySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: String,
  background: String,
  levels: [
    {
      id: Number,
      entityName: String, // referensi ke Entity.name
      question: {
        text: String,
        options: [String],
        answer: String,
        type: String,
      },
    },
  ],
});

const City = mongoose.model("City", citySchema);

export default City;

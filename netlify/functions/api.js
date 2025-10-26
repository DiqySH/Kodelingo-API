import express from "express";
import { connectDB } from "../../db/connection.js";
import dotenv from "dotenv";
import notesRoutes from "../../routes/notesRoutes.js";
import ServerlessHttp from "serverless-http";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5555;

connectDB();

app.use(express.json());

app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
  console.log("SERVER STARTED ON PORT:", PORT);
});

export const handler = ServerlessHttp(app);

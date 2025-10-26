import express from "express";
import { connectDB } from "../src/db/connection.js";
import dotenv from "dotenv";
import notesRoutes from "../src/routes/notesRoutes.js";
import ServerlessHttp from "serverless-http";
import cors from "cors";

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/notes", notesRoutes);

const handlerWrapper = ServerlessHttp(app);

export const handler = async (event, context) => {
  const result = await handlerWrapper(event, context);
  return result;
};

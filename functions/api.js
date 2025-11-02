import express from "express";
import { connectDB } from "../src/db/connection.js";
import dotenv from "dotenv";
import mapRoutes from "../src/routes/mapRoutes.js";
import adminsRoutes from "../src/routes/adminsRoutes.js";
import ServerlessHttp from "serverless-http";
import cors from "cors";

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/maps", mapRoutes);
app.use("/api/admins", adminsRoutes);

const handlerWrapper = ServerlessHttp(app);

export const handler = async (event, context) => {
  const result = await handlerWrapper(event, context);
  return result;
};

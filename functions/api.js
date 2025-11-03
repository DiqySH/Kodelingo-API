import express from "express";
import { connectDB } from "../src/db/connection.js";
import dotenv from "dotenv";
import adminsRoutes from "../src/routes/adminsRoutes.js";
import ServerlessHttp from "serverless-http";
import entityRoutes from "../src/routes/entityRoutes.js";
import cityRoutes from "../src/routes/cityRoutes.js";
import uploadRoutes from "../src/routes/uploadRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use("/api/admins", adminsRoutes);
app.use("/api/entities", entityRoutes);
app.use("/api/cities", cityRoutes);
app.use("/api/upload", uploadRoutes);

const handlerWrapper = ServerlessHttp(app);

export const handler = async (event, context) => {
  const result = await handlerWrapper(event, context);
  return result;
};

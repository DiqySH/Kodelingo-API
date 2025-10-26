import express from "express";
import { connectDB } from "../src/db/connection.js";
import dotenv from "dotenv";
import notesRoutes from "../src/routes/notesRoutes.js";
import ServerlessHttp from "serverless-http";

dotenv.config();

const app = express();

connectDB();

app.use(express.json());

app.use("/api/notes", notesRoutes);

// app.listen(PORT, () => {
//   console.log("SERVER STARTED ON PORT:", PORT);
// });

export const handler = ServerlessHttp(app);

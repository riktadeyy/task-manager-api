import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import taskRoutes from "./routes/taskRoutes.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/tasks", taskRoutes);

(async function db() {
    try {
      await connectDB();
      app.listen(process.env.PORT, () => {
        console.log(`App is running on http://localhost:${process.env.PORT || 5000}`);
      });
    } catch (error) {
      console.error('Error connecting to MongoDB:', error.message);
      throw error;
    }
  })()
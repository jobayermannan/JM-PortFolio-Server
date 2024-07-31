import express from "express";
import dotenv from "dotenv";
import cors from "cors";


import dbConfig from "./config/dbConfig.js";
import portfolioRoute from "./routes/portfolioRoute.js";

const app = express();

// Load environment variables from .env file
dotenv.config();

// Your database configuration
dbConfig();

// Enable CORS for all routes
app.use(cors());

app.use(express.json());

app.use("/api/v1", portfolioRoute);


const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


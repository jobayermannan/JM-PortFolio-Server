import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
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

app.use("/api/portfolio", portfolioRoute);

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static(path.join(__dirname, 'dist')));

  app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
  });
}
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

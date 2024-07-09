// dbConfig.js

import mongoose from "mongoose";

// Your database connection logic
const dbConfig = () => {
  const dbUri = process.env.DB_URI;
  if (!dbUri) {
    console.error("DB_URI is not defined in environment variables");
    return;
  }

  mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected!"))
  .catch(err => console.error("Database connection error:", err));
};

export default dbConfig;


const mongoose = require("mongoose");
const defaultUri = "mongodb://localhost:27017/backendPdracrice";
const uri = process.env.MONGO_URI || defaultUri;

mongoose
  .connect(uri)
  .then(() => {
    console.log("MongoDB connected successfully");
    console.log("Connected to database:", mongoose.connection.name);
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    console.error("Error details:", {
      name: err.name,
      message: err.message,
      code: err.code,
    });
  });

require("dotenv").config();
const cors = require("cors");
const path = require("path");
const express = require('express');
const userRoutes = require("../backend/routes/userRoutes");

// Initialize DB connection
require("../backend/utils/db");

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));

// Test route
app.get('/', (req,res) =>{
  res.send("hi this is test api on the first time");
});

//  Correct router mount
app.use('/api/users', userRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));

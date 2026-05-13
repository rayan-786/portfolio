const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

// ROUTES

const contactRoutes = require("./routes/contactRoutes");

app.use("/api", contactRoutes);

// DATABASE CONNECTION

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

// EXPORT APP FOR VERCEL

module.exports = app;
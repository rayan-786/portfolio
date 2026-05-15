const dotenv = require("dotenv");
dotenv.config();
const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");



const helmet = require("helmet");

const rateLimit = require("express-rate-limit");




// APP CREATE

const app = express();
app.set("trust proxy", 1);

// HELMET

app.use(helmet());


// CORS

app.use(cors());


// JSON

app.use(express.json());


// ROUTES

const contactRoutes = require("./routes/contactRoutes");

app.use("/api", contactRoutes);


// TEST ROUTE

app.get("/", (req, res) => {

  res.send("Backend Running 🚀");

});


// DATABASE CONNECTION

mongoose
  .connect(process.env.MONGO_URL)

  .then(() => {

    console.log("MongoDB Connected");

  })

  .catch((err) => {

    console.log(err);

  });

  const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(`Server running on port ${PORT}`);

});


// EXPORT APP

module.exports = app;
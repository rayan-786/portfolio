const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");


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


// PORT

const PORT = process.env.PORT || 5000;


// DATABASE CONNECTION

console.log("Connecting to MongoDB...");

mongoose
  .connect(process.env.MONGO_URL)

  .then(() => {

    console.log("MongoDB Connected ✅");

    // START SERVER ONLY AFTER DB CONNECTS

    app.listen(PORT, () => {

      console.log(`Server running on port ${PORT} 🚀`);

    });

  })

  .catch((err) => {

    console.log("MongoDB Connection Error ❌");

    console.log(err);

  });


// EXPORT APP

module.exports = app;
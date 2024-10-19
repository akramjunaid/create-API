const express = require("express");
const app = express();
const connectDB = require("./db/connect.js")
const product_routes = require("./routes/product.route.js");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello I'm akram");
});

// middleware or set router
app.use("/api/products", product_routes)

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(PORT, () => {
      console.log(`${PORT} I'm Connected`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
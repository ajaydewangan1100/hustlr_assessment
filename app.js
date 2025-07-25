const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const productRoutes = require("./routes/productRoute");
app.use("/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Assessment Product API is running!");
});

module.exports = app;

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Product = require("./models/productModel");
const router = require("./routes/routes");
const app = express();
app.use(bodyParser.json());
app.use("/", router);
const connection = "mongodb://127.0.0.1:27017/react-ecommerce";
mongoose
  .connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log("connected successfully"))
  .catch((error) => console.log("connection error : " + error));

app.listen(5001, () => {
  console.log("Running on Port 5001.");
});

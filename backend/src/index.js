require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes");

const app = express();

app.use(morgan("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Conectado no banco de dados");
  }
);

app.use("/", routes);

app.listen(process.env.PORT || 3000, () => {
  console.log(
    `Servidor conectado com sucesso, porta: ${
      process.env.PORT ? process.env.PORT : 3000
    }`
  );
});

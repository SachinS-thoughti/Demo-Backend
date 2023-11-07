require("dotenv").config();
require("./routes/server.api");
const express = require("express");
const app = express();
const mainRoutes = require("./routes/index");
const cors = require("cors");

const corsOptions = {
  origin: "*",
};

app.use(express.json());

app.use(cors(corsOptions));

app.use("/", mainRoutes);

app.listen(
  process.env.PORT,
  console.log(`server is listening on port ${process.env.PORT}`)
);

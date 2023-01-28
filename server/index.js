// LOAD ENV VARIABLES
require("dotenv").config();

// IMPORT DEPENDENCIES
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const errorHandler = require("./middleWare/errorMiddleware");

// CREATE AN EXPRESS APP
const app = express();

// database connection
const db = require("./config/db");
db.connect();

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "http://morsa-crm.app"],
    credentials: true,
  })
);

// Error Middleware
app.use(errorHandler);

// Importando as rotas
const userRoutes = require("./routes/userRoutes");

// Rotas
app.use("/users", userRoutes);

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Listening on port ${port}...`));

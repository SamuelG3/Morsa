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

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: ["http://localhost:3000" /* "https://pinvent-app.vercel.app" */],
    credentials: true,
  })
);

// Error Middleware
app.use(errorHandler);

// Importando as rotas
const userRoutes = require("./routes/userRoutes");
const boardRoutes = require("./routes/boardRoutes"); /* 
const listRoutes = require("./routes/listRoutes"); */
const cardRoutes = require("./routes/cardRoutes");

// Rotas
app.use("/users", userRoutes);
app.use("/board", boardRoutes);
/* app.use("/list", listRoutes); */
app.use("/card", cardRoutes);

// Connect to DB and start server
const port = process.env.PORT || 5000;

// database connection
const db = require("./config/db");
db.connect();

app.listen(port, console.log(`Listening on port ${port}...`));

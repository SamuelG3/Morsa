// LOAD ENV VARIABLES
require("dotenv").config();

// IMPORT DEPENDENCIES
const express = require("express");
const cors = require("cors");

// CREATE AN EXPRESS APP
const app = express();

// database connection
const db = require("./config/db");
db.connect();

// middlewares
app.use(express.json());
app.use(cors());

// definindo as rotas principais
const userRoutes = require("./routes/users-routes");
const authRoutes = require("./controller/auth");

app.use("/users", userRoutes);
app.use("/auth", authRoutes);

const port = process.env.PORT;
app.listen(port, console.log(`Listening on port ${port}...`));

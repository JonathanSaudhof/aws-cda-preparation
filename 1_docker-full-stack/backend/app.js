const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
require("./db");
const indexRouter = require("./routes/index");
const todoRouter = require("./routes/todo");
const morgan = require("morgan");
const app = express();
const cors = require("cors");

app.use(logger("dev"));
app.use(cookieParser());
app.use(morgan());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// app.use("/", indexRouter);
app.use("/todo", todoRouter);

module.exports = app;

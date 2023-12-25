const express = require("express");
const helmet = require("helmet");
const router = require("./router");
const cors = require("cors");
const app = express();

// Configure express app
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(cors());

// Route everything
app.use(router);

module.exports = app;

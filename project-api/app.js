import express from "express";
import helmet from "helmet";
import router from "./router.js";
import cors from "cors";
import dbConnection from "./db/db.js";
const app = express();

// TODO: Connect to db MYSQL

await dbConnection.sync();
// Configure express app
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(cors());

// Route everything
app.use(router);

export default app;

import express from "express";
import helmet from "helmet";
import router from "./router.js"; // Make sure to include the file extension
import cors from "cors";
const app = express();

// Configure express app
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(cors());

// Route everything
app.use(router);

export default app;

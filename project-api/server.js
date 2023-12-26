#!/usr/bin/env node
import dotenv from "dotenv";
dotenv.config();
import { createServer } from "http";
import pkgPino from "pino";
import app from "./app.js";

const logger = pkgPino();

/**
 * Make sure to fallback to development environment.
 */
process.env.NODE_ENV = process.env.NODE_ENV || "development";

/**
 * Create HTTP server.
 */
const server = createServer(app);

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || "9000";
app.set("port", port);

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  const addr = server.address();
  logger.info(`Listening on ${addr.port}`);
}

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

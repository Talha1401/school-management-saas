import express from "express";

import { errorHandler } from "./middleware/errorHandler.js";
import { notFoundHandler } from "./middleware/notFound.js";
import { requestLogger } from "./middleware/requestLogger.js";
import { securityMiddleware } from "./config/security.js";
import apiRouter from "./routes/index.js";

const app = express();

app.use(express.json());

app.use(securityMiddleware);

app.use(requestLogger);

app.use("/api/v1", apiRouter);

app.use(notFoundHandler);

app.use(errorHandler);

export default app;
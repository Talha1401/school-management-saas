import type { RequestHandler } from "express";
import { AppError } from "../errors/AppError.js";

export const notFoundHandler: RequestHandler = (req) => {
  throw new AppError(
    `Route not found: ${req.method} ${req.originalUrl}`,
    404,
  );
};
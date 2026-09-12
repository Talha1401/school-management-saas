import type { ErrorRequestHandler } from "express";
import { AppError } from "../errors/AppError.js";
import { sendError } from "../utils/apiResponse.js";

export const errorHandler: ErrorRequestHandler = (
  error,
  _req,
  res,
  _next,
) => {
  if (error instanceof AppError) {
    sendError(res, error.statusCode, error.message);
    return;
  }

  console.error("Unexpected error:", error);

  sendError(
    res,
    500,
    "An unexpected error occurred",
  );
};
import type { RequestHandler } from "express";
import mongoose from "mongoose";
import { sendSuccess } from "../../utils/apiResponse.js";

export const getHealth: RequestHandler = (_req, res) => {
  const databaseStatus =
    mongoose.connection.readyState === 1
      ? "connected"
      : "disconnected";

  sendSuccess(
    res,
    200,
    {
      status: "ok",
      database: databaseStatus,
    },
    "Health check successful",
  );
};
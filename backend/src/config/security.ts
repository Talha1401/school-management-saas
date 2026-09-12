import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { env } from "./env.js";

export const securityMiddleware = [
  helmet(),

  cors({
    origin: env.frontendUrl,
    credentials: true,
  }),

  rateLimit({
    windowMs: env.rateLimitWindowMs,
    limit: env.rateLimitMaxRequests,
    standardHeaders: "draft-8",
    legacyHeaders: false,
  }),
];
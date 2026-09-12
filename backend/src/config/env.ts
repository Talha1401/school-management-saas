import "dotenv/config";

const nodeEnv = process.env.NODE_ENV ?? "development";

const port = Number(process.env.PORT);

if (!Number.isInteger(port) || port <= 0) {
  throw new Error("PORT must be a valid positive integer");
}

const mongodbUri = process.env.MONGODB_URI;

if (!mongodbUri) {
  throw new Error("MONGODB_URI is required");
}

const frontendUrl = process.env.FRONTEND_URL;

if (!frontendUrl) {
  throw new Error("FRONTEND_URL is required");
}

const rateLimitWindowMs = Number(process.env.RATE_LIMIT_WINDOW_MS);

if (!Number.isInteger(rateLimitWindowMs) || rateLimitWindowMs <= 0) {
  throw new Error(
    "RATE_LIMIT_WINDOW_MS must be a valid positive integer",
  );
}

const rateLimitMaxRequests = Number(
  process.env.RATE_LIMIT_MAX_REQUESTS,
);

if (
  !Number.isInteger(rateLimitMaxRequests) ||
  rateLimitMaxRequests <= 0
) {
  throw new Error(
    "RATE_LIMIT_MAX_REQUESTS must be a valid positive integer",
  );
}

export const env = {
  nodeEnv,
  port,
  mongodbUri,
  frontendUrl,
  rateLimitWindowMs,
  rateLimitMaxRequests,
} as const;
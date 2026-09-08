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

export const env = {
  nodeEnv,
  port,
  mongodbUri,
} as const;
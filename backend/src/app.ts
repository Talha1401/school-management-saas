import express from "express";

const app = express();

app.get("/api/v1/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "School Management SaaS API is running",
  });
});

export default app;
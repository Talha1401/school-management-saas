import type { Response } from "express";

interface SuccessResponse<T> {
  success: true;
  data: T;
  message: string;
}

interface ErrorResponse {
  success: false;
  message: string;
  error?: unknown;
}

export const sendSuccess = <T>(
  res: Response,
  statusCode: number,
  data: T,
  message: string,
): Response<SuccessResponse<T>> => {
  return res.status(statusCode).json({
    success: true,
    data,
    message,
  });
};

export const sendError = (
  res: Response,
  statusCode: number,
  message: string,
  error?: unknown,
): Response<ErrorResponse> => {
  return res.status(statusCode).json({
    success: false,
    message,
    ...(error !== undefined && { error }),
  });
};
import { Response } from "express";
import { StatusCode, errorCodes } from "./constants";

export function handleSucceed<T>({
  res,
  data,
  status,
}: {
  res: Response;
  data: T;
  status: StatusCode;
}) {
  res.status(status).json({ data, err: null, status });
}

export function handleFailed({
  res,
  status,
}: {
  res: Response;
  status: StatusCode;
}) {
  res.status(status).json({ data: null, err: errorCodes[status], status });
}

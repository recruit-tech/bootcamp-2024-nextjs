import { NextApiResponse } from "next";
import { StatusCode, errorCodes } from "./constants";

export function handleSucceed<T>({
  res,
  data,
  status,
}: {
  res: NextApiResponse;
  data: T;
  status: StatusCode;
}) {
  res.status(status).json({ data, err: null, status });
}

export function handleFailed({
  res,
  status,
}: {
  res: NextApiResponse;
  status: StatusCode;
}) {
  res.status(status).json({ data: null, err: errorCodes[status], status });
}

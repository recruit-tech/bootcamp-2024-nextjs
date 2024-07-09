export const errorCodes = {
  200: "OK",
  201: "Created",
  204: "No Content",
  400: "Invalid Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not Found",
  405: "Method Not Allowed",
  409: "Conflict",
  500: "Internal Server Error",
};

export type StatusCode = keyof typeof errorCodes;

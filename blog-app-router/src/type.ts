import { StatusCode } from "./constants";

export type HttpResponse<T> =
  | {
      data: T;
      err: null;
      status: StatusCode;
    }
  | { data: null; err: string; status: StatusCode };

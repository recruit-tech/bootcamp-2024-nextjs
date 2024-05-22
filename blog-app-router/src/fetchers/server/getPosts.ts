import { path } from ".";
import type { HttpResponse } from "@/type";
import type { Post } from "api/type";

type Data = {
  posts: Post[];
};

export function getPosts(): Promise<HttpResponse<Data>> {
  return fetch(path("/api/posts"), {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    next: {
      tags: ["posts"],
    },
  }).then((res) => res.json());
}

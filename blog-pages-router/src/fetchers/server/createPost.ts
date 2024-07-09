import { path } from ".";
import type { HttpResponse } from "@/type";
import type { CreatePostInput, Post } from "api/type";

type Data = {
  post: Post;
};

export function createPost(
  input: CreatePostInput,
): Promise<HttpResponse<Data>> {
  return fetch(path("/api/posts"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  }).then((res) => res.json());
}

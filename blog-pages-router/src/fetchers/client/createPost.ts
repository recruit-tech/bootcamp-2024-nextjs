import type { CreatePostInput, Post } from "api/type";
import type { HttpResponse } from "@/type";

type Data = {
  post: Post;
};

export function createPost(
  input: CreatePostInput,
): Promise<HttpResponse<Data>> {
  return fetch("/api/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  }).then((res) => res.json());
}

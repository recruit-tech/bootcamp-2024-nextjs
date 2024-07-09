import { path } from ".";
import type { HttpResponse } from "@/type";
import type { Post, UpdatePostInput } from "api/type";

type Data = {
  post: Post;
};

export function updatePost(
  input: UpdatePostInput,
): Promise<HttpResponse<Data>> {
  return fetch(path(`/api/posts/${input.slug}`), {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  }).then((res) => res.json());
}

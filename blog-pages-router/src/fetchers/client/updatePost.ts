import type { Post, UpdatePostInput } from "api/type";
import type { HttpResponse } from "@/type";

type Data = {
  post: Post;
};

export function updatePost(
  input: UpdatePostInput,
): Promise<HttpResponse<Data>> {
  return fetch(`/api/posts/${input.slug}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  }).then((res) => res.json());
}

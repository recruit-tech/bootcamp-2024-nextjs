import type { Post } from "api/type";
import type { HttpResponse } from "@/type";

type Data = {
  post: Post;
};

export function deletePost(slug: string): Promise<HttpResponse<Data>> {
  return fetch(`/api/posts/${slug}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
}

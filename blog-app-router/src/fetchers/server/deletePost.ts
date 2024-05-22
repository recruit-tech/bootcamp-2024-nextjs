import { path } from ".";
import type { HttpResponse } from "@/type";
import type { Post } from "api/type";

type Data = {
  post: Post;
};

export function deletePost(slug: string): Promise<HttpResponse<Data>> {
  return fetch(path(`/api/posts/${slug}`), {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
}

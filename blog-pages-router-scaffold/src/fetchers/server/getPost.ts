import { path } from ".";
import type { HttpResponse } from "@/type";
import type { Post } from "api/type";

type Data = {
  post: Post;
};

export function getPost(slug: string): Promise<HttpResponse<Data>> {
  return fetch(path(`/api/posts/${slug}`), {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
}

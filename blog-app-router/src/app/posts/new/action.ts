"use server";

import { createPost } from "@/fetchers/server/createPost";
import type { Post } from "api/posts/type";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function newPostsAction(formData: FormData) {
  const { data, err } = await createPost(Object.fromEntries(formData) as Post);
  if (err || !data) {
    throw new Error("新規作成に失敗しました");
  }
  // FIXME: `posts`もrevalidateしないと、`posts`の一覧ページに戻ったときに更新が反映されない
  // revalidateTag("posts");
  redirect(`/posts/${data.post.slug}`);
}

"use server";

import { updatePost } from "@/fetchers/server/updatePost";
import { Post } from "api/posts/type";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function editAction(formData: FormData) {
  const input = Object.fromEntries(formData) as Post;
  const { err } = await updatePost(input);
  if (err) {
    throw new Error("更新に失敗しました");
  }
  console.log(`Updated post: ${input.slug}`);
  revalidateTag(`posts/${input.slug}`);
  // FIXME: `posts`もrevalidateしないと、`posts`の一覧ページに戻ったときに更新が反映されない
  // revalidateTag("posts");
  redirect(`/posts/${input.slug}`);
}

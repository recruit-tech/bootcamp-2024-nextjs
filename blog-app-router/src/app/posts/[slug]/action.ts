"use server";

import { deletePost } from "@/fetchers/server/deletePost";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function deletePostAction(formData: FormData) {
  const slug = formData.get("slug") as string;
  const { err } = await deletePost(slug);
  if (err) {
    throw new Error("削除に失敗しました");
  }
  console.log(`Deleted post: ${slug}`);
  // FIXME: `posts`もrevalidateしないと、`posts`の一覧ページに戻ったときに更新が反映されない
  // revalidateTag("posts");
  revalidateTag(`posts/${slug}`);
  redirect("/posts?alert=deleted");
}

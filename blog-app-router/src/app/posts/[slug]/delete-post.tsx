"use client";

import { Button } from "@/components/Button";
import type { Post } from "api/posts/type";
import { deletePostAction } from "@/app/posts/[slug]/action";

export function DeletePost({
  post,
}: {
  post: Post;
}) {
  const onSubmit = () => window.confirm("本当に削除しますか？");
  return (
    <form action={deletePostAction} onSubmit={onSubmit}>
      <input type="hidden" name="slug" value={post.slug} />
      <Button>記事を削除する</Button>
    </form>
  );
}

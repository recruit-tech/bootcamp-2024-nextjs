import { RequestHandler } from "express";
import { nanoid } from "nanoid";
import { Post } from "./type";
import { inputSchema } from "./schema";
import { handleFailed, handleSucceed } from "../fns";

// 実際はデータベースなどを使うが、今回はメモリ上に保存する
let posts: Post[] = [
  {
    id: "WMSTzGK8nb9120BrLrOcH",
    createdAt: "2024-05-13T01:30:09.228Z",
    title: "Test",
    body: "ダミー記事の本文です",
    slug: "example-post",
  },
];

export const getPosts: RequestHandler = async (_, res) => {
  handleSucceed({ res, data: { posts }, status: 200 });
};

export const createPost: RequestHandler = async (req, res) => {
  // 📌 リクエストボディのバリデーション
  const parsed = inputSchema.safeParse(req.body);
  if (!parsed.success) return handleFailed({ res, status: 400 });
  // 📌 重複した slug が存在する場合は 409 を返す
  const isConflictedSlug = posts.some((post) => post.slug === parsed.data.slug);
  if (isConflictedSlug) return handleFailed({ res, status: 409 });
  // 📌 リクエストボディを元に新しい Post を作成
  const post: Post = {
    id: nanoid(),
    createdAt: new Date().toISOString(),
    ...parsed.data,
  };
  posts.push(post);
  handleSucceed({ res, data: { post }, status: 201 });
};

export const getPost: RequestHandler = async (req, res) => {
  // 📌 該当記事の取得
  const post = posts.find((post) => post.slug === req.params.slug);
  if (!post) return handleFailed({ res, status: 404 });
  handleSucceed({ res, data: { post }, status: 200 });
};

export const updatePost: RequestHandler = async (req, res) => {
  // 📌 該当記事の取得
  const post = posts.find((post) => post.slug === req.params.slug);
  if (!post) return handleFailed({ res, status: 404 });
  // 📌 リクエストボディのバリデーション
  const parsed = inputSchema.safeParse(req.body);
  if (!parsed.success) return handleFailed({ res, status: 400 });
  const updatedPost = { ...post, ...parsed.data };
  // 📌 リクエストボディを元に Post を更新
  const updatedPosts = posts.map((p) => {
    if (p.slug !== req.params.slug) return p;
    return updatedPost;
  });
  posts = updatedPosts;
  handleSucceed({ res, data: { post: updatedPost }, status: 200 });
};

export const deletePost: RequestHandler = async (req, res) => {
  // 📌 該当記事の取得
  const post = posts.findIndex((post) => post.slug === req.params.slug);
  if (post === -1) return handleFailed({ res, status: 404 });
  // 📌 リクエストボディを元に Post を削除
  posts.splice(post, 1);
  handleSucceed({ res, data: { post }, status: 200 });
};

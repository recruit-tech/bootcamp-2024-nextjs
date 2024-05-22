export type PostBase = {
  slug: string;
  title: string;
  body: string;
};

export type Post = PostBase & {
  id: string;
  createdAt: string;
};

export type CreatePostInput = PostBase;

export type UpdatePostInput = PostBase;

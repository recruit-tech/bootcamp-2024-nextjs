import express from "express";
import { createPost, deletePost, getPost, getPosts, updatePost } from "./posts";

express()
  .use(express.json())
  .get("/api/posts", getPosts)
  .post("/api/posts", createPost)
  .get("/api/posts/:slug", getPost)
  .put("/api/posts/:slug", updatePost)
  .delete("/api/posts/:slug", deletePost)
  .listen(8080, () => {
    console.log("Server is running on port 8080");
  });

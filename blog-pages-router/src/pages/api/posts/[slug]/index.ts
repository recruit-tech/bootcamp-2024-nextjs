import { handleFailed, handleSucceed } from "@/utils";
import { updatePost } from "@/fetchers/server/updatePost";
import { deletePost } from "@/fetchers/server/deletePost";
import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import type { Post } from "api/type";
import type { HttpResponse } from "@/type";

type Data = HttpResponse<Post>;

const PUT: NextApiHandler<Data> = async (req, res) => {
  const slug = req.query.slug;
  if (typeof slug !== "string") return handleFailed({ res, status: 400 });
  const body = req.body;
  const { data, err, status } = await updatePost({ slug, ...body });
  if (err) return handleFailed({ res, status });
  handleSucceed({ res, data, status });
};

const DELETE: NextApiHandler<Data> = async (req, res) => {
  const slug = req.query.slug;
  if (typeof slug !== "string") return handleFailed({ res, status: 400 });
  const { data, err, status } = await deletePost(slug);
  if (err) return handleFailed({ res, status });
  handleSucceed({ res, data, status });
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  switch (req.method) {
    case "PUT":
      return PUT(req, res);
    case "DELETE":
      return DELETE(req, res);
    default:
      return handleFailed({ res, status: 405 });
  }
}

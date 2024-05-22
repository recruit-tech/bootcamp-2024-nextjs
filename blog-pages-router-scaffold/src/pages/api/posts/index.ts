import { handleFailed, handleSucceed } from "@/utils";
import { createPost } from "@/fetchers/server/createPost";
import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import type { Post } from "api/type";
import type { HttpResponse } from "@/type";

type Data = HttpResponse<Post>;

const POST: NextApiHandler<Data> = async (req, res) => {
  const body = req.body;
  const { data, err, status } = await createPost(body);
  if (err) return handleFailed({ res, status });
  handleSucceed({ res, data, status });
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  switch (req.method) {
    case "POST":
      return POST(req, res);
    default:
      return handleFailed({ res, status: 405 });
  }
}

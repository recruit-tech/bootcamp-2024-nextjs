import { z } from "zod";

export const inputSchema = z.object({
  title: z.string(),
  body: z.string(),
  slug: z.string(),
});

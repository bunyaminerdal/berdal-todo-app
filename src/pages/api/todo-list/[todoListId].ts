// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string|undefined;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const { todoListId } = req.query;
    res.status(200).json({ name: todoListId?.toString() + " get Todo List" });
    if (req.method === "GET") res.status(200).json({ name: todoListId?.toString() });
    if (req.method === "PATCH") res.status(200).json({ name: todoListId?.toString() + " patch Todo List" });
    if (req.method === "DELETE") res.status(200).json({ name: todoListId?.toString() + " delete Todo List" });
}

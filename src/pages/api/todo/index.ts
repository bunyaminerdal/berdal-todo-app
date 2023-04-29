// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Todo[] | Todo>
) {
    if (req.method === "GET") {
     const {id}= req.body
    const todo = await prisma.todo.findMany({
        where: { id },
    });
    res.status(200).json(todo);
  }
  if (req.method === "POST") {
    const newTodo = await prisma.todo.create({
      data: req.body,
    });
    res.status(200).json(newTodo);
  }
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TodoList>
) {
    const { todoListId } = req.query;
  if (req.method === "GET") {
    try {
      
      const todoList = await prisma.todoList.findFirstOrThrow({   where: { id: todoListId?.toString() },})
      res.status(200).json({ id: todoList.id, title:todoList.title});
    } catch (error) {
      return error;
    }
  };
    // if (req.method === "PATCH") res.status(200).json({ title: todoListId?.toString() + " patch Todo List" });
    // if (req.method === "DELETE") res.status(200).json({ title: todoListId?.toString() + " delete Todo List" });
}

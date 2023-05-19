// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from '@lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse<TodoList[] | TodoList>) {
  if (req.method === "GET") {
    const todoLists = await prisma.todoList.findMany({
      //   where: { user: "Alice" },
    });
    res.status(200).json(todoLists);
  }
  if (req.method === "POST") {
    const newTodoList = await prisma.todoList.create({
      data: req.body,
    });
    res.status(200).json(newTodoList);
  }
}

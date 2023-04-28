// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from '@lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse<TodoList[] | TodoList>) {
  if (req.method === "GET") {
    const todoLists = await prisma.todoList.findMany({
      //   where: { user: "Alice" },
    });
      const newTodoLists = todoLists.map(todoList => { return { id: todoList.id,title:todoList.title}; });
    res.status(200).json(newTodoLists);
  }
  if (req.method === "POST") {
    console.log("🚀 ~ file: index.ts:16 ~ handler ~ req.body:", req.body)
    const newTodoList = await prisma.todoList.create({
      data: req.body,
    });
    res.status(200).json(newTodoList);
  }
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from '@lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse<TodoList[]>) {
  if (req.method === "GET") {
    const todoLists = await prisma.todoList.findMany({
      //   where: { user: "Alice" },
    });
      const newTodoLists = todoLists.map(todoList => { return { id: todoList.id,name:todoList.name}; });
    res.status(200).json(newTodoLists);
  }
//   if (req.method === "POST") res.status(200).json({ name: "post Todo List" });
}

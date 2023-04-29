// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@lib/prisma";
import { AxiosError } from 'axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TodoList|{message:string}>
) {
    const { todoListId } = req.query;
  if (req.method === "GET") {
    try {      
      const todoList = await prisma.todoList.findFirstOrThrow({ where: { id: todoListId?.toString() }, })
      const todos = await prisma.todo.findMany({where:{todoListId:todoListId?.toString()}})
      res.status(200).json({...todoList,todos});
    } catch (error) {
      const saf = error as AxiosError
      res.status(422).json({message:saf.message})
    }
  };
    // if (req.method === "PATCH") res.status(200).json({ title: todoListId?.toString() + " patch Todo List" });
    // if (req.method === "DELETE") res.status(200).json({ title: todoListId?.toString() + " delete Todo List" });
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@lib/prisma";
import { AxiosError } from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Todo | { message: string }>
) {
    const { todoId } = req.query;
  if (req.method === "PATCH") {
      try {
          const todo = req.body;
      const updatedTodo = await prisma.todo.update({
        where: { id: todoId?.toString() },
        data: { content:todo.content,isDone:todo.isDone },
      });
      res.status(200).json( updatedTodo );
    } catch (error) {
      const saf = error as AxiosError;
      res.status(422).json({ message: saf.message });
    }
  }
    if (req.method === "DELETE") {
        try {
             await prisma.todo.delete({
                 where: { id: todoId?.toString() },
            });
            res.status(200).json({message:"todo deleted successfully!"});
        } catch (error) {
            const saf = error as AxiosError;
            res.status(422).json({ message: saf.message });
        }
    }
}

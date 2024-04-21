export const dynamic = 'force-dynamic'
import prisma from "../../../lib/prisma";
import { NextResponse } from "next/server";

const DELETE= async (req, res) => {

  
  try {
    const { todo_id} = await req.json();
    const deleteTodo = await prisma.todo.delete({
      where: {
        todo_id: todo_id,
      },
    });

    return NextResponse.json({ data: deleteTodo }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};

export {DELETE};
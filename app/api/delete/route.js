import prisma from "../../../lib/prisma";
import { NextResponse } from "next/server";

export const DELETE = async (request, res) => {
  try {
    const { todo_id } = await request.json();
    console.log("todo_id", todo_id);
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

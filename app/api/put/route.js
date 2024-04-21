import prisma from "../../../lib/prisma";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
const PUT = async (req, res) => {
  try {
    const { todo_id, status } = await req.json();

    const updateTodo = await prisma.todo.update({
      where: {
        todo_id: todo_id,
      },
      data: {
        status: status,
      },
    });

    return NextResponse.json({ data: updateTodo }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};

export { PUT };

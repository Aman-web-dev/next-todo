import prisma from "../../../lib/prisma";
import { NextResponse } from "next/server";

const POST = async (req, res) => {
  try {
    const { title, description, status, user_id } = await req.json();
    const result = await prisma.todo.create({
      data: {
        user_id: user_id,
        todo_id: JSON.stringify(Date.now()),
        title: title,
        Description: description,
        status: status,
      },
    });
   
      return NextResponse.json({ data: result }, { status: 201 });
    
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};

export { POST };

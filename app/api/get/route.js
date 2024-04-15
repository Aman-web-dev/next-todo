export const dynamic = "force-dynamic";
import prisma from "../../../lib/prisma";
import { NextResponse } from "next/server";

const GET = async (req, res) => {
  console.log("i got the call");
  const url = new URL(req.url);
  const searchParams = new URLSearchParams(url.searchParams);
  console.log("search", searchParams);

  const user_id = searchParams.get("user_id");
  console.log("user_id", user_id);
  try {
    const todo = await prisma.todo.findMany({
      where: {
        user_id: user_id,
      },
    });
    //   console.log("todo",todo)
    return NextResponse.json({ data: todo }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};

export { GET };

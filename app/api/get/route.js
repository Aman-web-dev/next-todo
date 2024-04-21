export const dynamic = "force-dynamic";
import prisma from "../../../lib/prisma";
import { NextResponse } from "next/server";

const GET = async (req, res) => {
  const url = new URL(req.url);
  const searchParams = new URLSearchParams(url.searchParams);

  const user_id = searchParams.get("user_id");

  try {
    const todo = await prisma.todo.findMany({
      where: {
        user_id: user_id,
      },
    });

    return NextResponse.json({ data: todo }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};

export { GET };

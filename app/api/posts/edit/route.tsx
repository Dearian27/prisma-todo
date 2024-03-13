import prisma from "@/app/utils/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { id, content, author } = await req.json();
  const updatedPost = await prisma.todo.update({
    where: {
      id: id,
    },
    data: {
      author,
      content,
    },
  });
  return NextResponse.json({ updatedPost, status: 200 });
}

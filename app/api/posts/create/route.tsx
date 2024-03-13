import { NextResponse } from "next/server";
import prisma from "@/app/utils/prismadb";

export async function POST(req: Request) {
  try {
    const { author, content } = await req.json();
    console.log(content);
    const newPost = await prisma.todo.create({
      data: {
        author,
        content,
      },
    });
    return NextResponse.json({ newPost, status: 200 });
  } catch (err) {
    console.log(err);
    return Response.json({ status: 500 });
  }
}

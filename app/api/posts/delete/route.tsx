import prisma from "@/app/utils/prismadb";
import { NextResponse } from "next/server";

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();
    await prisma.todo.delete({ where: { id } });
    return NextResponse.json({ status: 200 });
  } catch (err) {
    console.log(err);
    return Response.json({ status: 500 });
  }
}

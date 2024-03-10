import { PostParams } from "../components/Post";
import prisma from "@/app/utils/prismadb";

export async function getPosts() {
  try {
    const posts = await prisma.todo.findMany();
    console.log(posts);
    return posts;
  } catch (err) {
    console.log(err);
  }
}

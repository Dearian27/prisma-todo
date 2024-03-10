import { PostParams } from "../components/Post";
import prisma from "@/app/utils/prismadb";

export async function createPost(post: PostParams) {
  try {
    const result = await prisma.todo.create({
      data: {
        author: post.author,
        content: post.content,
      },
    });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

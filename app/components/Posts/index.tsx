import React from "react";
import styles from "./styles.module.scss";
import Post from "../Post";
import { getPosts } from "@/app/actions/getPosts";

const Posts = async () => {
  const res = await getPosts();
  console.log(res);
  return (
    <div className={styles.posts}>
      {res?.map((el) => (
        <Post key={el.id} author={el.author} content={el.content} />
      ))}
    </div>
  );
};

export default Posts;

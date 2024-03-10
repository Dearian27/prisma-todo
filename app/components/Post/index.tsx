import React from "react";
import styles from "./styles.module.scss";

export type PostParams = {
  author: string;
  content: string;
};

const Post: React.FC<PostParams> = ({ author, content }) => {
  return (
    <div className={styles.post}>
      <h2 className={styles.author}>{author}</h2>
      <p className={styles.content}>{content}</p>
    </div>
  );
};

export default Post;

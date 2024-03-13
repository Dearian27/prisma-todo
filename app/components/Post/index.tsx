"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import axios from "axios";

export type PostParams = {
  author: string;
  content: string;
  id: string;
};

const Post: React.FC<PostParams> = ({ author, content, id }) => {
  const [edit, setEdit] = useState(false);
  const editPost = async () => {
    try {
      await axios.post(`/api/posts/edit`, { id, content, author });
      // signal
    } catch (err) {
      console.log(err);
    }
  };
  const deletePost = async () => {
    try {
      await axios.delete(`/api/posts/delete`, { data: { id } });
      // signal
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={styles.post}>
      <div className={styles.information}>
        <input disabled={!edit} className={styles.author} value={author} />
        <input disabled={!edit} className={styles.content} value={content} />
      </div>
      <div className={styles.buttons}>
        {edit && (
          <div onClick={editPost} className={styles.icon}>
            <Image src="/check.png" fill alt="ok" />
          </div>
        )}
        <div
          className={`${styles.icon} ${edit ? styles.active : ""}`}
          onClick={() => {
            setEdit((prev) => !prev);
          }}
        >
          <Image src="/edit.png" fill alt="edit" />
        </div>
        <div className={styles.icon} onClick={() => deletePost()}>
          <Image src="/delete.png" fill alt="delete" />
        </div>
      </div>
    </div>
  );
};

export default Post;

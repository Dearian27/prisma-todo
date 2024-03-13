"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import { createPost } from "@/app/actions/action";
import axios from "axios";

const Form = () => {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const submit = async () => {
    const res = await axios.post("/api/posts/create", {
      author,
      content,
    });
    console.log(res);
    // const result = await createPost({ author, content });
    // console.log(result);
  };
  return (
    <div className={styles.form}>
      <h2 className={styles.title}>Create a post</h2>
      <input
        value={author}
        onChange={(event) => setAuthor(event.target.value)}
        className={styles.input}
        type="text"
        placeholder="nickname"
      />
      <input
        value={content}
        onChange={(event) => setContent(event.target.value)}
        className={styles.input}
        type="text"
        placeholder="text"
      />
      <button onClick={submit} className={styles.button}>
        Submit
      </button>
    </div>
  );
};

export default Form;

import Image from "next/image";
import styles from "./page.module.css";
import Form from "./components/Form";
import Posts from "./components/Posts";

export default function Home() {
  return (
    <main className={styles.main}>
      <Posts />
      <Form />
    </main>
  );
}

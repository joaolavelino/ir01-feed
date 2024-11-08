import React from "react";
import styles from "./Post.module.css";
import { Comment } from "../Comment/Comment";

export const Post = () => {
  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/joaolavelino.png"
            alt=""
          />
          <div className={styles.info}>
            <strong>João Avelino</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="8 de novembro às 17:40" dateTime="2024-11-08 17:47:40">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Título do Post</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat in
          placeat optio, similique repudiandae ex dicta distinctio, adipisci
          ducimus animi non deleniti iusto quisquam vitae praesentium suscipit
          sit odit? Enim!
        </p>
        <p>
          <a href="#">Link para outra página</a>
        </p>
        <p>
          <a href="#">#webdev</a>
          <a href="#">#react</a>
          <a href="#">#rocketseat</a>
        </p>
      </div>
      <form action="POST" className={styles.commentForm}>
        <label htmlFor="comment">Deixe seu feedback</label>
        <textarea
          name="comment"
          id="comment"
          placeholder="Deixe um comentário"
        />
        <footer>
          <button type="submit">Enviar</button>
        </footer>
      </form>
      <div className={styles.commentSection}>
        <Comment />
        <Comment />
      </div>
    </article>
  );
};

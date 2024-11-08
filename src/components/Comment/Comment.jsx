import React from "react";
import styles from "./Comment.module.css";
import { ThumbsUp, Trash } from "phosphor-react";

export const Comment = () => {
  return (
    <div className={styles.comment}>
      <img
        src="https://github.com/diego3g.png"
        alt=""
        className={styles.avatar}
      />
      <div className={styles.rightSection}>
        <div className={styles.commentCard}>
          <header>
            <div className={styles.authorInfo}>
              <strong>Diego Fernandes</strong>
              <time
                title="Três de Novembro, às 20 horas e 30 minutos"
                datetime="2024-11-03 20:30:34"
              >
                Há cerca de 2h
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem,
            eum? Dignissimos, omnis, excepturi maiores aspernatur quos eveniet
            tempora suscipit magni eligendi fugit, architecto id. Suscipit sequi
            quam adipisci optio odio?
          </p>
        </div>
        <footer>
          <ThumbsUp />
          <a href="#">Aplaudir - 33</a>
        </footer>
      </div>
    </div>
  );
};

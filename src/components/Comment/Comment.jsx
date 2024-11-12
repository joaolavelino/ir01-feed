import React, { useState } from "react";
import styles from "./Comment.module.css";
import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../Avatar/Avatar";

export const Comment = ({ content }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCounter, setLikesCounter] = useState(0);

  const toggleLike = async () => {
    await setLikesCounter(isLiked ? likesCounter - 1 : likesCounter + 1);
    setIsLiked(!isLiked);
    return;
  };

  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/diego3g.png" />
      <div className={styles.rightSection}>
        <div className={styles.commentCard}>
          <header>
            <div className={styles.authorInfo}>
              <strong>Diego Fernandes</strong>
              <time
                title="Três de Novembro, às 20 horas e 30 minutos"
                dateTime="2024-11-03 20:30:34"
              >
                Há cerca de 2h
              </time>
            </div>
            <button
              title="Deletar comentário"
              onClick={() => window.alert("Excluir Comentário")}
            >
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button
            className={`${
              isLiked ? styles.likedButton : styles.notLikedButton
            }`}
            onClick={() => toggleLike()}
          >
            <ThumbsUp weight={`${isLiked ? "fill" : "regular"}`} />
            Aplaudir • {likesCounter}
          </button>
        </footer>
      </div>
    </div>
  );
};

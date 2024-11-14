import React, { useState } from "react";
import styles from "./Comment.module.css";
import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../Avatar/Avatar";
import { formatDateTime, formatRelativeDate } from "../../functions/formatDate";

export const Comment = ({ content, publishedAt, id, onDelete }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCounter, setLikesCounter] = useState(0);

  const toggleLike = () => {
    setLikesCounter((state) => (isLiked ? state - 1 : state + 1));
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
                title={formatDateTime(publishedAt)}
                dateTime={publishedAt.toString()}
              >
                {formatRelativeDate(publishedAt)}
              </time>
            </div>
            <button title="Deletar comentário" onClick={() => onDelete(id)}>
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

import React from "react";
import { formatDateTime, formatRelativeDate } from "../../functions/formatDate";
import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";
import styles from "./Post.module.css";

export const Post = ({ post }) => {
  const postContent = post.content.map((line) => {
    switch (line.type) {
      case "paragraph":
        return <p key={line.index}>{line.content}</p>;

      case "link":
        return (
          <p key={line.index}>
            <a href={line.content}>{line.content}</a>
          </p>
        );
      default:
        <p key={line.index}>{line.content}</p>;
        break;
    }
  });

  const postTags = post.tags.map((tag) => {
    return (
      <a href="" key={tag.index}>
        #{tag}
      </a>
    );
  });

  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl} border />
          <div className={styles.info}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>
        <time
          title={formatDateTime(post.publishedAt)}
          dateTime={post.publishedAt.toISOString()}
        >
          {formatRelativeDate(post.publishedAt)}
        </time>
      </header>
      <div className={styles.content}>
        {postContent}

        <p>{postTags}</p>
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

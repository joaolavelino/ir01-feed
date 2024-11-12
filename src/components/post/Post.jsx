import React, { useState } from "react";
import { formatDateTime, formatRelativeDate } from "../../functions/formatDate";
import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";
import styles from "./Post.module.css";

export const Post = ({ post }) => {
  const [comments, setComments] = useState([
    "ola, post muito legal",
    "hahahaha",
  ]);

  const [newCommentText, setNewCommentText] = useState("");

  // ----- DYNAMIC RENDERING -----
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

  // ----- FORM FUNCTIONS -----

  function handleSubmitComment() {
    event.preventDefault();
    const commentContent = event.target.comment.value;
    setComments([...comments, commentContent]);
    setNewCommentText("");
  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value);
  }

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
      <form
        action="POST"
        onSubmit={handleSubmitComment}
        className={styles.commentForm}
      >
        <label htmlFor="comment">Deixe seu feedback</label>
        <textarea
          name="comment"
          id="comment"
          placeholder="Deixe um comentário"
          onChange={() => handleNewCommentChange()}
          value={newCommentText}
        />
        <footer>
          <button type="submit">Enviar</button>
        </footer>
      </form>
      <div className={styles.commentSection}>
        {comments.map((comment) => (
          <Comment content={comment} key={comment} />
        ))}
      </div>
    </article>
  );
};

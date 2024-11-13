import React, { useState } from "react";
import { formatDateTime, formatRelativeDate } from "../../functions/formatDate";
import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";
import styles from "./Post.module.css";
import { v4 as uuidv4 } from "uuid";

export const Post = ({ post }) => {
  const [comments, setComments] = useState([]);

  const [newCommentText, setNewCommentText] = useState("");

  // ----- DYNAMIC RENDERING -----
  const postContent = post.content.map((line, index) => {
    switch (line.type) {
      case "paragraph":
        return <p key={index}>{line.content}</p>;

      case "link":
        return (
          <p key={index}>
            <a href={line.content}>{line.content}</a>
          </p>
        );
      default:
        <p key={index}>{line.content}</p>;
        break;
    }
  });

  const postTags = post.tags.map((tag, index) => {
    return (
      <a href="" key={index}>
        #{tag}
      </a>
    );
  });

  // ----- FORM FUNCTIONS -----

  function handleSubmitComment() {
    event.preventDefault();
    const newComment = {
      id: { uuidv4 },
      publishedAt: Date.now(),
      content: event.target.comment.value,
    };
    setComments([...comments, newComment]);
    setNewCommentText("");
  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value);
  }

  function handleCommentValidation() {
    event.target.setCustomValidity("O comentário não pode ser vazio");
  }

  const isNewCommentEmpty = !newCommentText.length;

  // ----- MANAGE COMMENTS -----

  const deleteComment = (id) => {
    let updatedCommentList = comments.filter((comment) => comment.id !== id);
    setComments(updatedCommentList);
  };

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
          required
          onInvalid={handleCommentValidation}
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Enviar
          </button>
        </footer>
      </form>
      <div className={styles.commentSection}>
        {comments.map((comment) => (
          <Comment
            content={comment.content}
            publishedAt={comment.publishedAt}
            key={comment.id}
            id={comment.id}
            onDelete={deleteComment}
          />
        ))}
      </div>
    </article>
  );
};

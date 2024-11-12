import React from "react";
import styles from "./Avatar.module.css";

export const Avatar = ({ border, src }) => {
  return (
    <div>
      <img
        src={src}
        alt=""
        className={`${styles.avatarImg} ${border ? styles.border : ""}`}
      />
    </div>
  );
};

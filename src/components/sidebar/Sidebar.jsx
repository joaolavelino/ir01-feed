import React from "react";
import styles from "./Sidebar.module.css";
import { PencilSimpleLine } from "phosphor-react";

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1482160549825-59d1b23cb208?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGFydHxlbnwwfHwwfHx8MA%3D%3D"
        alt=""
      />
      <img
        className={styles.avatar}
        src="https://github.com/joaolavelino.png"
        alt=""
      />
      <div className={styles.profile}>
        <strong>João Avelino</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilSimpleLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
};

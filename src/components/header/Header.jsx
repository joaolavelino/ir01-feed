import logo from "../../../public/ignite symbol.png";
import styles from "./Header.module.css";

function Header({}) {
  return (
    <header className={styles.header}>
      <h1>
        oi
        <img src={logo} alt="two overlapping triangles pointing up-right" />
      </h1>
    </header>
  );
}

export default Header;

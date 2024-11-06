import Header from "./components/header/Header";
import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/sidebar/Sidebar";

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>posts</main>
      </div>
    </>
  );
}

export default App;

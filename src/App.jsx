import Header from "./components/header/Header";
import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Post } from "./components/post/Post";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/joaolavelino.png",
      name: "João Avelino",
      role: "Web Developer",
    },
    content: [
      {
        type: "paragraph",
        content:
          "Do mesmo modo, a consulta aos diversos militantes promove a alavancagem do fluxo de informações.",
      },
      {
        type: "paragraph",
        content:
          "Podemos já vislumbrar o modo pelo qual a consolidação das estruturas faz parte de um processo de gerenciamento do processo de comunicação como um todo.",
      },
      {
        type: "link",
        content: "https://lerolero.com/",
      },
    ],
    tags: ["lero-lero", "non-sense", "gerador"],
    publishedAt: new Date("2024-11-11 08:46:28"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/tiagobega.png",
      name: "Tiago Bega",
      role: "Web Developer",
    },
    content: [
      {
        type: "paragraph",
        content:
          "Nesse pull request, a normalização da data deletou todas as entradas no parse retroativo do DOM.",
      },
      {
        type: "paragraph",
        content:
          "Desde ontem a noite o módulo de recursão paralela superou o desempenho de estados estáticos nos componentes da UI.",
      },
      {
        type: "link",
        content: "https://lerolero.com/#",
      },
    ],
    tags: ["lero-lero", "non-sense", "gerador"],
    publishedAt: new Date("2024-11-12 06:29:20"),
  },
];

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </main>
      </div>
    </>
  );
}

export default App;

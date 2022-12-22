import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Page2({ posts }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setCount((n) => n + 1), 1000);
    return () => clearInterval(timer);
  });

  return (
    <>
      <Head>
        <title>Mon premier blog</title>
      </Head>
      <h1>Page2 avec getStaticProps</h1>
      <br />
      <h2>Compteur: {count}</h2>
      <br />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
          </li>
        ))}
      </ul>
    </>
  );
}

// Next récupère les données en amont (précharge) et donne le rendu
export async function getStaticProps() {
  const posts = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=4`
  ).then((r) => r.json());
  return {
    props: {
      posts,
    },
  };
}

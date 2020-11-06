import Head from "next/head";
import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    let timeID: NodeJS.Timeout;
    timeID = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timeID);
    };
  }, []); // [] を第２引数に渡すことで マウント時とアンマウント時のみにできる。

  return <h1 className="clock">{date.toLocaleString()}</h1>;
}

export default function Home() {
  const [url, setUrl] = useState("https:example.com");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };
  const handleSubmit = () => {
    open(url);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>はじめてのNext.js with Typescript</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Clock />

        <form onSubmit={handleSubmit}>
          <h2>urlを入力してください</h2>
          <input type="text" value={url} onChange={handleChange} />
          <input type="submit" value="開く" />
        </form>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}

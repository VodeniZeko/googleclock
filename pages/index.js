import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Popover from "./Popover";

/////////////////////////////////////////////////////////////////////

export default function Time() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Time Assignment</title>
        <link rel="icon" href="/clock.png" />
      </Head>

      <main className={styles.main}>
        <Popover />
      </main>

      <footer className={styles.footer}>
        <a href="https://takija.io" target="_blank" rel="noopener noreferrer">
          Created by <img src="/me.png" alt="image" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}

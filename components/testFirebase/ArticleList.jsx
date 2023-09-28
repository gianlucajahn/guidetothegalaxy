import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "/firebase.js";

import styles from "./firebase.module.css";

import allArticles from "./allArticles";

export default function ArticleList({ user }) {
  const [userArticles, setUserArticles] = useState({});

  // executes given function on mount and every time the given document is updated in the database - the document is the logged in users document
  const unsub = onSnapshot(doc(db, "users", user.uid), (docSnap) => {
    // create a deep copy from the read-articles object in the users data
    const readArticles = JSON.parse(JSON.stringify(docSnap.data()["read-articles"]));
    setUserArticles(readArticles);
  });

  useEffect(() => {
    return unsub;
  });

  const articles = allArticles.map((articleName) => (
    <div className={styles.articlePrev}>
      <p>{articleName}</p>
      <div>{userArticles[articleName] ? "Article read" : "Not read"}</div>
    </div>
  ));

  return <div className={styles.articleList}>{articles}</div>;
}

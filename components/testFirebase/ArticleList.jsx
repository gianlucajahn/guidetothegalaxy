import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "/firebase.js";
import { auth } from "/firebase.js";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import styles from "./firebase.module.css";
import allArticles from "./allArticles";
import { getDocSnap } from "../../helpers/firebaseFunctions";

export default function ArticleList({ user }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrentUser(user);
      if (!loggedIn) setLoggedIn(true);
      addNewUserDoc(user);
    } else if (loggedIn) {
      setCurrentUser({});
      setLoggedIn(false);
    }
  });

  async function addNewUserDoc(user) {
    const docSnap = await getDocSnap(user.uid);
    if (!docSnap.exists()) {
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        id: user.uid,
        "read-articles": { index: true },
      });
    }
  }

  async function login() {
    try {
      const result = await signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error);
    }
  }

  function logout() {
    signOut(auth);
  }

  const [userArticles, setUserArticles] = useState({});

  // executes given function on mount and every time the given document is updated in the database - the document is the logged in users document
  const unsub = onSnapshot(doc(db, "users", user.uid), (docSnap) => {
    // create a deep copy from the read-articles object in the users data
    const readArticles = JSON.parse(
      JSON.stringify(docSnap.data()["read-articles"])
    );
    setUserArticles(readArticles);
  });

  useEffect(() => {
    return unsub;
  });

  const articles = allArticles.map((article) => (
    <div className={styles.articlePrev}>
      <h2>{article.title}</h2>
      <p>{article.desc}</p>
      <div className={styles.status}>{userArticles[article.title] ? "Article read" : "Not read"}</div>
    </div>
  ));

  return (
    <div className={styles.articleList}>
      <h1 className={styles.greeting}>
        Hey, {currentUser.displayName?.substring(0, currentUser.displayName.indexOf(" "))}
      </h1>
      <div className={styles.array}>{articles}</div>
    </div>
  );
}

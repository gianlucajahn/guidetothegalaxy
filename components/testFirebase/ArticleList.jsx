import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "/firebase.js";
import { auth } from "/firebase.js";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import styles from "./firebase.module.scss";
import allArticles from "./allArticles.ts";
import { getDocSnap } from "../../helpers/firebaseFunctions";
import Image from "next/image";
import allChapters from "./allArticles.ts";

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

  const articles = allChapters.map((chapter) => (
    <div className={styles.chapter}>
      <h1 className={styles.chapterTitle}>{chapter.title}</h1>
      <p className={styles.chapterDesc}>{chapter.desc}</p>

      <div className={styles.array}>
      {chapter.articles.map((art, i) => {
        return (
          <div>
            <div className={styles.articlePrev}>
              <h2>{art.title}</h2>
              <Image
                src={require(`../../resources/images/${art.image}`)}
                alt="Background"
                className={`${styles.card} ${styles.background}`}
              />
              <p>{art.desc.slice(0, 75) + "..."}</p>
              <div
                className={`${styles.status} ${
                  userArticles[art.title] ? styles.read : styles.notread
                }`}
              >
                {userArticles[art.title] ? "Article read" : "Not read"}
              </div>
            </div>
          </div>
        );
      })}
      </div>
    </div>
  ));

  return (
    <div className={styles.articleList}>
      <h1 className={styles.greeting}>
        Hey,{" "}
        {currentUser.displayName?.substring(
          0,
          currentUser.displayName.indexOf(" ")
        )}
      </h1>
      <p className={styles.introduction}>
        This is your profile! Here, you can track your progress, mark articles
        as read/listened to and jump to whichever article you'd like. Feel free
        to look around.
      </p>
      {articles}
    </div>
  );
}
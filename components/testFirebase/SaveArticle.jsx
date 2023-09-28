import {
  doc,
  getDoc,
  setDoc
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, db } from "/firebase.js";

import styles from "./firebase.module.css";

export default function SaveArticle(props) {
  const [articleIsRead, setArticleIsRead] = useState(false);
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    async function readArticleStatus() {
      const docSnap = await getDoc(doc(db, "users", auth.currentUser.uid));
      console.log(articleIsRead);
      setArticleIsRead(docSnap.data()["read-articles"][props.article]);
      console.log(articleIsRead);
    }
    readArticleStatus();
  }, [user]);

  async function markAsRead() {
    // get users data including the read articles
    const docSnap = await getDoc(doc(db, "users", auth.currentUser.uid));

    // create a deep copy from the read-articles object in the users data
    const readArticles = JSON.parse(
      JSON.stringify(docSnap.data()["read-articles"])
    );

    // set article property to true - will create the property first if it doest exist yet
    readArticles[props.article] = true;

    // update the read-articles object in the users document with readArticles
    // note - if object read-articles doesnt exist yet, it will be created
    await setDoc(
      doc(db, "users", auth.currentUser.uid),
      { "read-articles": readArticles },
      { merge: true }
    );
    setArticleIsRead(readArticles[props.article]);
  }

  async function markAsNotRead() {
    // get users data including the read articles
    const docSnap = await getDoc(doc(db, "users", auth.currentUser.uid));

    // create a deep copy from the read-articles object in the users data
    const readArticles = JSON.parse(
      JSON.stringify(docSnap.data()["read-articles"])
    );

    // set article property to false - will create the property first if it doest exist yet
    readArticles[props.article] = false;

    // update the read-articles object in the users document with readArticles
    // note - if object read-articles doesnt exist yet, it will be created
    await setDoc(
      doc(db, "users", auth.currentUser.uid),
      { "read-articles": readArticles },
      { merge: true }
    );
    setArticleIsRead(readArticles[props.article]);
  }

  return (
    <div id="article-read-section" className={styles.articleRead}>
      {!articleIsRead ? (
        <>
          <p>Save this article as read</p>
          <button
            id={styles.articleReadButton}
            className={styles.button}
            onClick={markAsRead}
          >
            Article read
          </button>
        </>
      ) : (
        <>
          <p>Mark this article as not read</p>
          <button
            id={styles.notReadButton}
            className={styles.button}
            onClick={markAsNotRead}
          >
            Not read
          </button>
        </>
      )}
    </div>
  );
}

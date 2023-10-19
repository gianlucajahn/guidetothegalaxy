import { useEffect, useState } from "react";

import styles from "./firebase.module.scss";

import { getDocSnap, getReadArticles, setReadArticles } from "../../helpers/firebaseFunctions";

export default function SaveArticleDE({ user, article }) {
  const [articleIsRead, setArticleIsRead] = useState(false);

  useEffect(() => {
    async function readArticleStatus() {
      const docSnap = await getDocSnap(user.uid);
      setArticleIsRead(docSnap.data()["read-articles"][article]);
    }
    readArticleStatus();
  }, [user]);

  async function markAsRead() {
    const readArticles = await getReadArticles(user.uid);
    // set article property to true - will create the property first if it doest exist yet
    readArticles[article] = true;
    await setReadArticles(readArticles, user.uid);
    setArticleIsRead(readArticles[article]);
  }

  async function markAsNotRead() {
    const readArticles = await getReadArticles(user.uid);
    // set article property to true - will create the property first if it doest exist yet
    readArticles[article] = false;
    await setReadArticles(readArticles, user.uid);
    setArticleIsRead(readArticles[article]);
  }

  return (
    <div id="article-read-section" className={styles.articleRead}>
      {!articleIsRead ? (
        <>
          <p>Logge diesen Artikel als gelesen:</p>
          <button id={styles.articleReadButton} className={styles.button} onClick={markAsRead}>
            Artikel gelesen
          </button>
        </>
      ) : (
        <>
          <p>Logge diesen Artikel als nicht gelesen:</p>
          <button id={styles.notReadButton} className={styles.button} onClick={markAsNotRead}>
            Artikel nicht gelesen
          </button>
        </>
      )}
    </div>
  );
}

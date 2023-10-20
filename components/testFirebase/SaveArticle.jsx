import { useEffect, useState } from "react";

import styles from "./firebase.module.scss";

import { getDocSnap, markAsNotRead, markAsRead } from "../../helpers/firebaseFunctions";

export default function SaveArticle({ user, article }) {
  const [articleIsRead, setArticleIsRead] = useState(false);

  useEffect(() => {
    async function readArticleStatus() {
      const docSnap = await getDocSnap(user.uid);
      setArticleIsRead(docSnap.data()["read-articles"][article]);
    }
    readArticleStatus();
  }, [user]);

  async function read() {
    markAsRead(user, article, setArticleIsRead)
  }

  async function notRead() {
    markAsNotRead(user, article, setArticleIsRead)
  }

  return (
    <div id="article-read-section" className={styles.articleRead}>
      {!articleIsRead ? (
        <>
          <p>Save this article as read</p>
          <button id={styles.articleReadButton} className={styles.button} onClick={read}>
            Article read
          </button>
        </>
      ) : (
        <>
          <p>Mark this article as not read</p>
          <button id={styles.notReadButton} className={styles.button} onClick={notRead}>
            Not read
          </button>
        </>
      )}
    </div>
  );
}

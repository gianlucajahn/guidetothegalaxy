import { doc, onSnapshot } from "firebase/firestore";
import Image from "next/image";
import { useEffect, useState } from "react";
import { markAsNotRead, markAsRead } from "../../helpers/firebaseFunctions";
import allChapters from "./allArticles.ts";
import styles from "./firebase.module.scss";
import { db } from "/firebase.js";

export default function ArticleListDE({ user }) {
  const [progress, setProgress] = useState(0);

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

  useEffect(() => {
    let progressVar = 0;

    allChapters.map((chapter) => {
      chapter.articles.map((article) => {
        if (userArticles[article.id]) {
          progressVar += 1;
        }
      });
    });

    setProgress(progressVar);
  }, [userArticles]);

  useEffect(() => {
    const progressBar = document.getElementById("progress");
    const calculatedWith = 550 / (41 / progress);
    progressBar.style.width = `${calculatedWith}px`;
  }, [progress]);

  const toggleReadStatus = (articleId) => {
    userArticles[articleId] ? markAsNotRead(user, articleId) : markAsRead(user, articleId);
  };

  const articles = allChapters.map((chapter) => (
    <div className={styles.chapter}>
      <h1 className={styles.chapterTitle}>{chapter.title_de}</h1>
      <p className={styles.chapterDesc}>{chapter.desc_de}</p>

      <div className={styles.array}>
        {chapter.articles.map((art, i) => {
          const baseText = art.desc_de.slice(0, 75);
          const additionalText = art.desc_de.slice(75, 125);
          const [isHovered, setIsHovered] = useState(false);

          useEffect(() => {
            const text = document.getElementById("additional-text");
            if (text) {
              if (isHovered) {
                if (!text) {
                  return;
                }
                setTimeout(() => {
                  text.style.opacity = 1;
                }, 100);
              } else {
                if (!text) {
                  return;
                }
                text.style.opacity = 0;
              }
            }
          }, [isHovered]);

          return (
            <div>
              <div className={styles.articlePrev}>
                <Image src={require(`../../resources/images/${art.image}`)} alt="Background" className={`${styles.card} ${styles.background}`} />
                <div className={styles.info} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                  <h2>{art.title_de}</h2>
                  <p>
                    {baseText}
                    {isHovered ? (
                      <span className={styles.additionalText} id="additional-text">
                        {additionalText}
                      </span>
                    ) : (
                      "..."
                    )}
                  </p>
                </div>
                <div
                  className={`${styles.status} ${userArticles[art.id] ? styles.read : styles.notread}`}
                  onClick={() => {
                    toggleReadStatus(art.id);
                  }}
                >
                  {userArticles[art.id] ? "Gelesen" : "Nicht gelesen"}
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
      <h1 className={styles.greeting}>Hey, {user.displayName?.substring(0, user.displayName.indexOf(" "))}</h1>
      <p className={styles.introduction}>
        Hier kannst du deinen Fortschritt tracken und dir einen Überblick über die Artikel verschaffen, die noch vor dir liegen. Über Klicks auf die Artikel-Karten gelangst du direkt zu ihnen.
      </p>

      <h1 className={styles.chapterTitle}>Mein Fortschritt</h1>
      <div className={styles.progressBarContainer}>
        <div className={styles.progressBar}>
          <div className={styles.progress} id="progress" />
        </div>
        <h2>{Math.floor((progress / 41) * 100)}%</h2>
      </div>
      {articles}
    </div>
  );
}

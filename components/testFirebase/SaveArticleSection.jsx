import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import SaveArticle from "./SaveArticle";
import LoginButton from "./LoginButton.jsx";
import { auth } from "/firebase.js";
import styles from "./firebase.module.scss";

export default function SaveArticleSection(props) {
  const [user, setUser] = useState(auth.currentUser);

  onAuthStateChanged(auth, (user) => {
    setUser(user);
  });

  return (
    <>
      {user == undefined || user == null ? (
        <div className={styles.articleRead}>
          Login to log your reading progress
          <button
            id={styles.articleReadButton}
            className={styles.button}
            onClick={null}
          >
            Login
          </button>
        </div>
      ) : (
        <SaveArticle user={user} article={props.article} />
      )}
    </>
  );
}

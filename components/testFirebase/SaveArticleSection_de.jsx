import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import LoginButton from "./LoginButton.jsx";
import { auth } from "/firebase.js";
import styles from "./firebase.module.scss";
import SaveArticleDE from "./SaveArticle_de";

export default function SaveArticleSection(props) {
  const [user, setUser] = useState(auth.currentUser);

  onAuthStateChanged(auth, (user) => {
    setUser(user);
  });

  return (
    <>
      {user == undefined || user == null ? (
        <div className={styles.articleRead}>
          Log dich ein, um deinen Lesefortschritt zu speichern
          <button
            id={styles.articleReadButton}
            className={styles.button}
            onClick={null}
          >
            Login
          </button>
        </div>
      ) : (
        <SaveArticleDE user={user} article={props.article} />
      )}
    </>
  );
}

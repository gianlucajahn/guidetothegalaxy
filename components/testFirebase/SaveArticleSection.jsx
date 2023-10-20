import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import SaveArticle from "./SaveArticle";
import styles from "./firebase.module.scss";
import { auth } from "/firebase.js";
import { getDocSnap } from "../../helpers/firebaseFunctions";

export default function SaveArticleSection(props) {
  const [user, setUser] = useState(auth.currentUser);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
      addNewUserDoc(user);
    } else {
      setUser({});
    }
  });

  async function addNewUserDoc(user) {
    const docSnap = await getDocSnap(user.uid);
    if (!docSnap.exists()) {
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        id: user.uid,
        "read-articles": {},
      });
    }
  }

  async function login() {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {user == undefined || user == null ? (
        <div className={styles.articleRead}>
          Login to log your reading progress
          <button id={styles.articleReadButton} className={styles.button} onClick={login}>
            Login
          </button>
        </div>
      ) : (
        <SaveArticle user={user} article={props.article} />
      )}
    </>
  );
}

import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import SaveArticleDE from "./SaveArticle_de";
import styles from "./firebase.module.scss";
import { auth } from "/firebase.js";
import { getDocSnap } from "../../helpers/firebaseFunctions";

export default function SaveArticleSection(props) {
  const [user, setUser] = useState(auth.currentUser);
  const [loggedIn, setLoggedIn] = useState(false)

  const provider = new GoogleAuthProvider();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
      if (!loggedIn) setLoggedIn(true);
      addNewUserDoc(user);
    } else if (loggedIn) {
      setUser({});
      setLoggedIn(false);
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
          Melde dich an, um deinen Lesefortschritt zu speichern
          <button
            id={styles.articleReadButton}
            className={styles.button}
            onClick={login}
          >
            Anmelden
          </button>
        </div>
      ) : (
        <SaveArticleDE user={user} article={props.article} />
      )}
    </>
  );
}

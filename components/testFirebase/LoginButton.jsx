import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { getDocSnap } from "../../helpers/firebaseFunctions";
import { auth, db } from "/firebase.js";

import styles from "./firebase.module.scss";

export default function LoginButton() {
  const provider = new GoogleAuthProvider();

  const [loggedIn, setLoggedIn] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      if (!loggedIn) setLoggedIn(true);
      addNewUserDoc(user);
    } else if (loggedIn) {
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

  function logout() {
    signOut(auth);
  }

  const button = loggedIn ? null : (
    <div className={styles.loginContainer}>
      <button className={`${styles.button} ${styles.login}`} onClick={login}>
        Login
      </button>
      <button className={`${styles.button} ${styles.login}`} onClick={login}>
        Sign Up
      </button>
    </div>
  );

  return (
    <div id={styles.body}>
      <div className={styles.header}>{button}</div>
    </div>
  );
}

import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { getDocSnap } from "../../helpers/firebaseFunctions";
import { auth, db } from "/firebase.js";

import styles from "./firebase.module.scss";

export default function LoginButton() {
  const provider = new GoogleAuthProvider();

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

  const button = loggedIn ? (
    null
  ) : (
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
      <div className={styles.header}>
        {button}
      </div>
    </div>
  );
}

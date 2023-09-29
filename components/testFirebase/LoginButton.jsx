import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { auth, db } from "/firebase.js";

import styles from "./firebase.module.css";

export default function TestAuth() {
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
    const docSnap = await getDoc(doc(db, "users", user.uid));
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
    <button className={`${styles.button} ${styles.logout}`} onClick={logout}>
      logout
    </button>
  ) : (
    <button className={`${styles.button} ${styles.login}`} onClick={login}>
      login
    </button>
  );

  return (
    <div id={styles.body}>
      <div className={styles.header}>
        <div>{loggedIn ? currentUser.displayName : "Gast"}</div>
        {button}
      </div>
    </div>
  );
}

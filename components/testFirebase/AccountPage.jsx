import classNames from "classnames";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  setDoc,
  getDocs,
  collectionGroup,
  query,
} from "firebase/firestore";
import { useState } from "react";
import { FoodModal } from "./FoodModal";
import { auth, db } from "/firebase.js";
import TestAuth from "./TestAuth";
import ArticleList from "./ArticleList";

import styles from "./firebase.module.css";

export default function AccountPage() {
  const [user, setUser] = useState(auth.currentUser);

  onAuthStateChanged(auth, (user) => {
    setUser(user);
  });

  return (
    <>{user == undefined || user == null ? <TestAuth /> : <ArticleList user={user} />}</>
  );
}

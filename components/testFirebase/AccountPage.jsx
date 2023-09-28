import {
  onAuthStateChanged
} from "firebase/auth";
import { useState } from "react";
import ArticleList from "./ArticleList";
import TestAuth from "./TestAuth";
import { auth } from "/firebase.js";


export default function AccountPage() {
  const [user, setUser] = useState(auth.currentUser);

  onAuthStateChanged(auth, (user) => {
    setUser(user);
  });

  return (
    <>{user == undefined || user == null ? <TestAuth /> : <ArticleList user={user} />}</>
  );
}

import {
  onAuthStateChanged
} from "firebase/auth";
import { useState } from "react";
import ArticleList from "./ArticleList";
import LoginButton from "./LoginButton.jsx";
import { auth } from "/firebase.js";


export default function AccountPage() {
  const [user, setUser] = useState(auth.currentUser);

  onAuthStateChanged(auth, (user) => {
    setUser(user);
  });

  return (
    <>{user == undefined || user == null ? <LoginButton /> : <>
    <ArticleList user={user} />
    <LoginButton />
  </>}</>
  );
}

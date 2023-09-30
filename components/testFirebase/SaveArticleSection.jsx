import {
    onAuthStateChanged
} from "firebase/auth";
import { useState } from "react";
import SaveArticle from "./SaveArticle";
import LoginButton from "./LoginButton.jsx";
import { auth } from "/firebase.js";

export default function SaveArticleSection(props) {
  const [user, setUser] = useState(auth.currentUser);

  onAuthStateChanged(auth, (user) => {
    setUser(user);
  });

  return (
    <>{user == undefined || user == null ? <LoginButton /> : <SaveArticle user={user} article={props.article} />}</>
  );
}
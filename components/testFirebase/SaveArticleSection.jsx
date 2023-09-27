import {
    onAuthStateChanged
} from "firebase/auth";
import { useState } from "react";
import SaveArticle from "./SaveArticle";
import TestAuth from "./TestAuth";
import { auth } from "/firebase.js";

export default function SaveArticleSection(props) {
  const [user, setUser] = useState(auth.currentUser);

  onAuthStateChanged(auth, (user) => {
    setUser(user);
  });

  return (
    <>{user == undefined || user == null ? <TestAuth /> : <SaveArticle article={props.article} />}</>
  );
}
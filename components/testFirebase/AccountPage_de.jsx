import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import ArticleListDE from "./ArticleList_de";
import LoginButton from "./LoginButton.jsx";
import { auth } from "/firebase.js";
import css from "./AccountPage.module.scss";
import Image from "next/image";

export default function AccountPage() {
  const [user, setUser] = useState(auth.currentUser);
  const [loggedIn, setLoggedIn] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
      if (!loggedIn) setLoggedIn(true);
    } else if (loggedIn) {
      setUser({});
      setLoggedIn(false);
    }
  });

  return (
    <div>
      {user == undefined || user == null ? (
        <div className={css.account}>
          <h1>Hey, Fremder!</h1>
          <p>
            Du scheinst nicht angemeldet zu sein. Um die Kontofunktion zu nutzen und deinen Lese- bzw. Hörbuchfortschritt zu verfolgen kannst du dich auf unserer Website registrieren oder einloggen.
            Danach kannst du deinen Fortschritt am Ende jeden Artikels tracken!
          </p>
          <Image className={css.troll} src={require("../../resources/images/engineers.jpg")} alt="Software Engineer Meme" />
          <figcaption style={{ color: "rgb(156, 156, 156)", fontSize: "14px", marginTop: "2px" }}>Live Footage unseres Entwicklers auf der Suche nach deinem Eintrag in unserer Datenbank</figcaption>
          <LoginButton />
        </div>
      ) : (
        <div>
          <ArticleListDE user={user} />
          <LoginButton />
        </div>
      )}
    </div>
  );
}

import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import ArticleList from "./ArticleList";
import LoginButton from "./LoginButton.jsx";
import { auth } from "/firebase.js";
import css from './AccountPage.module.scss';
import Image from "next/image";

export default function AccountPage() {
  const [user, setUser] = useState(auth.currentUser);

  onAuthStateChanged(auth, (user) => {
    setUser(user);
  });

  return (
    <div>
      {user == undefined || user == null ? (
        <div className={css.account}>
          <h1>Hey, Stranger!</h1>
          <p>You seem to be not logged in. To use the Account feature and to track your reading or listening progress, you can login or sign up to a free account on our website. Afterwards, you will be able to track your progress at the end of every article!</p>
          <Image
              className={css.troll}
              src={require("../../resources/images/engineers.jpg")}
              alt="Software Engineer Meme"
            />
            <figcaption style={{ color: "rgb(156, 156, 156)", fontSize: "14px", marginTop: "2px" }}>Live Footage of our Engineers trying to find you in our database</figcaption>
            <p>Worry not, young astronaut, for you can make up for your past mistakes of not creating an account quite easily! Just click on one of the buttons below.</p>
          <LoginButton />
        </div>
      ) : (
        <div>
          <ArticleList user={user} />
          <LoginButton />
        </div>
      )}
    </div>
  );
}

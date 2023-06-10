import * as React from "react";
import css from "./About.module.scss";

export default function About() {
  return (
    <section className={css.about}>
      <section className={css.firstSection}>
        <h1>About Beyond Earth©</h1>
        <div className={css.textbox}>
          <h2>Hey, I'm Gianluca,</h2>
          <h2>
            and I am the creator and author of this page.
          </h2>
        </div>

        <div className={css.profile}>

        </div>
      </section>
    </section>
  );
}

import * as React from "react";
import css from "./About.module.scss";

export default function About() {
  const [isRendered, setIsRendered] = React.useState(false);

  React.useEffect(() => {
    if (typeof document === 'undefined') {

    } else {
      if (isRendered) {
        return;
      }
      if (document.querySelector("#textbox") !== null && document.querySelector("#first") !== null) {
        const textbox = document.querySelector("#textbox") as HTMLDivElement;
        console.log("set beginning transform");
        textbox.style.transform = "rotateX(1.5deg) rotateY(13deg) skew(8.5deg)";
        const pre = document.querySelector("#textbox");
        document.querySelector('#first').addEventListener("mousemove", (e) => {
          rotateElement(e, pre);
        });
      }
    }
  }, [isRendered]);

function rotateElement(event, element) {
  const x = event.clientX;
  const y = event.clientY;

  const middleX = window.innerWidth / 2;
  const middleY = window.innerHeight / 2;

  const offsetX = ((x - middleX) / middleX) * 45;
  const offsetY = ((y - middleY) / middleY) * 45;

  // set rotation based on all vals
  const finalX =  offsetX >= 32 ? 32 : offsetX <= -32 ? -32 : offsetX + "deg"
  const finalY = -1 * offsetY >= 17 ? 17 : offsetY <= -17 ? -17 : offsetY + "deg";
  if (offsetX >= 32 || offsetX <= -32 || offsetY >= 17 || offsetY <= -17) {
    element!.style.transition = "0.3s all";
    element!.style.transform = "rotateX(1.5deg) rotateY(13deg) skew(8.5deg)";
  } else {
    element!.style.transform = "";
    element!.style.transition = "0.1s all";
  }
  element!.style.setProperty("--rotateX", offsetX >= 32 ? 32 : offsetX <= -32 ? -32 : offsetX + "deg");
  element!.style.setProperty("--rotateY", -1 * offsetY >= 17 ? 17 : offsetY <= -17 ? -17 : offsetY + "deg");
}


  return (
    <section className={css.about} id="first">
      <div className={css.backgroundContainer}>
        <div className={css.stars}></div>
        <div className={css.twinkling}></div>
      </div>
      <section className={css.firstSection}>
        <h1>About Beyond <span className={css.grad}>Earth©</span></h1>
        <h3>The open-sourced guide on spacetravel</h3>
        <div className={css.info}>
          <div className={css.textbox} tabIndex={0} id="textbox">
            <h2><div className={css.hand}>👋</div> Hey, I'm Gianluca,</h2>
            <p>
              and I am the creator and author of this page. <span>Beyond Earth©</span> is a
              project aiming to increase awareness for the aerospace engineering
              and space exploration industry. My goal is to inspire as many
              people as possible for this niche and I felt a project like this
              could be a great first step, so I took it. You decide if you want
              to read our content at your own pace or if you would like to
              listen to our audiobooks. 
              
              <br /> <br /><span>Beyond Earth©</span> is designed to be
              accessible and free for everyone and is natively open-source.
              Feature Requests and active participation in this project is
              greatly appreciated!
            </p>
          </div>

          <div className={css.socials}>

          </div>
        </div>

        <div className={css.profile}></div>
      </section>
    </section>
  );
}

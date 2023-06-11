import * as React from "react";
import css from "./About.module.scss";
import Image from "next/image";

export default function About() {
  const [isRendered, setIsRendered] = React.useState(false);

  React.useEffect(() => {
    if (typeof document === "undefined") {
    } else {
      if (isRendered) {
        return;
      }
      if (
        document.querySelector("#textbox") !== null &&
        document.querySelector("#first") !== null &&
        document.querySelector("#selfie") !== null
      ) {
        const textbox = document.querySelector("#textbox") as HTMLDivElement;
        const selfie = document.querySelector("#selfie") as HTMLImageElement;
        console.log("set beginning transform");
        textbox.style.transform = "rotateX(1.5deg) rotateY(13deg) skew(7deg)";
        selfie.style.transform = "rotateX(1.5deg) rotateY(13deg) skew(-3deg)";
        const pre = document.querySelector("#textbox");
        document.querySelector("#first").addEventListener("mousemove", (e) => {
          rotateElement(e, pre);
        });
      }
    }
  }, [isRendered]);

  function rotateElement(event, element) {
    const selfie = document.querySelector("#selfie") as HTMLImageElement;
    if (!selfie) {
      return;
    }

    const x = event.clientX;
    const y = event.clientY;

    const middleX = window.innerWidth / 2;
    const middleY = window.innerHeight / 2;

    const offsetX = ((x - middleX) / middleX) * 45;
    const offsetY = ((y - middleY) / middleY) * 45;

    // set rotation based on all vals
    const finalX = offsetX >= 32 ? 32 : offsetX <= -32 ? -32 : offsetX + "deg";
    const finalY =
      -1 * offsetY >= 17 ? 17 : offsetY <= -17 ? -17 : offsetY + "deg";
    if (offsetX >= 32 || offsetX <= -32 || offsetY >= 17 || offsetY <= -17) {
      element!.style.transition = "0.3s all";
      element!.style.transform = "rotateX(1.5deg) rotateY(13deg) skew(7deg)";
      selfie!.style.transition = "0.3s all";
      selfie!.style.transform = "rotateX(1.5deg) rotateY(13deg) skew(-3deg)";
    } else {
      selfie!.style.transition = "0.5s all";
      selfie!.style.transform = "translateZ(-50px)";
      element!.style.transform = "";
      element!.style.transition = "0.1s all";
    }
    element!.style.setProperty(
      "--rotateX",
      offsetX >= 32 ? 32 : offsetX <= -32 ? -32 : offsetX + "deg"
    );
    element!.style.setProperty(
      "--rotateY",
      -1 * offsetY >= 17 ? 17 : offsetY <= -17 ? -17 : offsetY + "deg"
    );
    selfie!.style.setProperty("--rotateX", offsetX + "deg");
    selfie!.style.setProperty("--rotateY", -1 * offsetY + "deg");
  }

  return (
    <section className={css.about}>
      <div className={css.backgroundContainer}>
        <div className={css.stars}></div>
        <div className={css.twinkling}></div>
      </div>
      <section className={css.firstSection} id="first">
        <h1>
          About Beyond <span className={css.grad}>Earth©</span>
        </h1>
        <h3>The open-sourced guide on spacetravel</h3>
        <div className={css.info}>
          <div
            className={`${css.textbox} ${css.text}`}
            tabIndex={0}
            id="textbox"
          >
            <h2>
              <div className={css.hand}>👋</div> Hey, I'm Gianluca,
            </h2>
            <p>
              and I am the creator and author of this page.{" "}
              <span>Beyond Earth©</span> is a project aiming to increase
              awareness for the aerospace engineering and space exploration
              industry. My goal is to inspire as many people as possible for
              this niche and I felt a project like this could be a great first
              step, so I took it. You decide if you want to read our content at
              your own pace or if you would like to listen to our audiobooks.
              <br /> <br />
              <span>Beyond Earth©</span> is designed to be accessible and free
              for everyone and is natively open-source. Feature Requests and
              active participation in this project is greatly appreciated!
            </p>
          </div>

          <div className={css.socials}>
            <a target="_blank" href="https://github.com/gianlucajahn">
              <button
                className={`${css.textbox} ${css.socialButton} ${css.github}`}
              >
                <Image
                  className={css.icon}
                  src={require(".//../../resources/images/github.png")}
                  alt="GitHub"
                />
                <span>GitHub</span>
              </button>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/gianlucajahn/">
              <button
                className={`${css.textbox} ${css.socialButton} ${css.linkedin}`}
              >
                <Image
                  className={css.icon}
                  src={require(".//../../resources/images/linkedinabout.png")}
                  alt="LinkedIn"
                />
                <span>LinkedIn</span>
              </button>
            </a>
            <a
              target="_blank"
              href="https://open.spotify.com/user/j4qraqxbso40v4yu0dq1xkjq4"
            >
              <button
                className={`${css.textbox} ${css.socialButton} ${css.spotify}`}
              >
                <Image
                  className={css.icon}
                  src={require(".//../../resources/images/spotify.png")}
                  alt="Spotify"
                />
                <span>Spotify</span>
              </button>
            </a>
            <a
              target="_blank"
              href="https://discord.com/users/556559991062921217"
            >
              <button
                className={`${css.textbox} ${css.socialButton} ${css.discord}`}
              >
                <Image
                  className={css.icon}
                  src={require(".//../../resources/images/discordlogo.png")}
                  alt="Discord"
                />
                <span>Discord</span>
              </button>
            </a>
            <a target="_blank" href="https://gianluca-jahn.de">
              <button
                className={`${css.textbox} ${css.socialButton} ${css.website}`}
              >
                <Image
                  className={css.icon}
                  src={require(".//../../resources/images/website.png")}
                  alt="Website"
                />
              </button>
            </a>
          </div>
        </div>

        <div className={css.profile}>
          <div className={`${css.selfieBox} ${css.textbox}`} id="selfie">
            <Image
              className={css.selfie}
              src={require(".//../../resources/images/selfie.png")}
              alt="A selfie from me"
            />
          </div>
          <div className={`${css.socials} ${css.cred}`}>
            <button
              className={`${css.textbox} ${css.socialButton} ${css.work}`}
            >
              <Image
                className={css.icon}
                src={require(".//../../resources/images/work.png")}
                alt="Work"
              />
              <span>Developer</span>
            </button>
            <button
              className={`${css.textbox} ${css.socialButton} ${css.location}`}
            >
              <Image
                className={css.icon}
                src={require(".//../../resources/images/location.png")}
                alt="Location"
              />
              <span>Germany</span>
            </button>
          </div>
        </div>
        <div className={css.divider} />
      </section>

      <section className={css.secondSection}>
        <h1>Check us out on your preferred platform!</h1>
        <h2 className={css.cta1}>Our content is available on <strong className={css.spoti}>Spotify</strong> and on <strong className={css.apple}>Apple Podcasts</strong>!</h2>

        <div className={css.boxes}>
          <div className={css.boxesLeft}>
            <div className={css.box}>
              <span><strong>German Articles</strong> on our Website</span>
            </div>
            <div className={css.box}>
              <span><strong>English Articles</strong> on our Website</span>
            </div>
          </div>

          <div className={css.boxesMiddle}>
            <div className={css.box}>
              <Image
                className={css.teaser}
                src={require(".//../../resources/images/spotifyteaser1.png")}
                alt="Location"
              />
              <span><strong>German Audiobook</strong> on Spotify</span>
            </div>
            <div className={css.box}>
              <Image
                className={css.teaser}
                src={require(".//../../resources/images/spotifyteaser2.png")}
                alt="Location"
              />
              <span><strong>English Audiobook</strong> on Spotify</span>
            </div>
          </div>

          <div className={css.boxesRight}>
            <div className={css.box}>
              <Image
                className={css.teaser}
                src={require(".//../../resources/images/applepodcasts1.png")}
                alt="Location"
              />
              <span><strong>German Audiobook</strong> on Apple Podcasts</span>
            </div>
            <div className={css.box}>
              <Image
                className={css.teaser}
                src={require(".//../../resources/images/applepodcasts2.png")}
                alt="Location"
              />
              <span><strong>English Audiobook</strong> on Apple Podcasts</span>
            </div>
          </div>
        </div>

        <h3 className={css.cta2}>Leave a like or a follow if you don't want to miss future content!</h3>
        <div className={css.divider} />
      </section>
    </section>
  );
}

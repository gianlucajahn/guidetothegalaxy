import * as React from "react";
import css from "./About.module.scss";
import Image from "next/image";

export default function About() {
  const [isRendered, setIsRendered] = React.useState(false);
  const [firstFAQ, setFirstFAQ] = React.useState(false);
  const [secondFAQ, setSecondFAQ] = React.useState(false);
  const [thirdFAQ, setThirdFAQ] = React.useState(false);
  const [fourthFAQ, setFourthFAQ] = React.useState(false);
  const [fifthFAQ, setFifthFAQ] = React.useState(false);
  const [portfolio, setPortfolio] = React.useState<string | undefined>();

  React.useEffect(() => {
    if (window.innerWidth <= 600) {
      setPortfolio("My Portfolio");
      return
    }

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
                {portfolio ? <span>{portfolio}</span> : null}
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
        <h1>Check us out{portfolio ? ' here!': ''}{portfolio ? '' : ' on your preferred platform!'}</h1>
        <h2 className={css.cta1}>
          Our content is available on{" "}
          <strong className={css.spoti}>Spotify</strong> and on{" "}
          <strong className={css.apple}>Apple Podcasts</strong>!
        </h2>

        <div className={css.boxes}>
          <div className={css.boxesLeft}>
            <div className={css.box}>
              <Image
                className={css.teaser}
                src={require(".//../../resources/images/website_ger.png")}
                alt="Location"
              />
              <span>
                <strong>German Articles</strong> on our Website
              </span>
            </div>
            <div className={css.box}>
              <Image
                className={css.teaser}
                src={require(".//../../resources/images/website_eng.png")}
                alt="Location"
              />
              <span>
                <strong>English Articles</strong> on our Website
              </span>
            </div>
          </div>

          <div className={css.boxesMiddle}>
            <div className={css.box}>
              <Image
                className={css.teaser}
                src={require(".//../../resources/images/spotifyteaser1.png")}
                alt="Location"
              />
              <span>
                <strong>German Audiobook</strong> on Spotify
              </span>
            </div>
            <div className={css.box}>
              <Image
                className={css.teaser}
                src={require(".//../../resources/images/spotifyteaser2.png")}
                alt="Location"
              />
              <span>
                <strong>English Audiobook</strong> on Spotify
              </span>
            </div>
          </div>

          <div className={css.boxesRight}>
            <div className={css.box}>
              <Image
                className={css.teaser}
                src={require(".//../../resources/images/applepodcasts1.png")}
                alt="Location"
              />
              <span>
                <strong>German Audiobook</strong> on Apple Podcasts
              </span>
            </div>
            <div className={css.box}>
              <Image
                className={css.teaser}
                src={require(".//../../resources/images/applepodcasts2.png")}
                alt="Location"
              />
              <span>
                <strong>English Audiobook</strong> on Apple Podcasts
              </span>
            </div>
          </div>
        </div>

        <h3 className={css.cta2}>
          Leave a like or a follow if you don't want to miss future content!
        </h3>
        <div className={css.divider} />
      </section>

      <section className={css.thirdSection}>
        <h1>Frequently Asked Questions</h1>

        <div className={css.questionBox}>
          <div
            className={`${css.question} ${firstFAQ ? css.expanded : css.none}`}
            onClick={() => setFirstFAQ(!firstFAQ)}
          >
            <Image
              className={`${css.arrow} ${firstFAQ ? css.expanded : css.none}`}
              src={require(".//../../resources/images/arrow.png")}
              alt="Arrow"
            />
            <p>What is this page about?</p>
          </div>
          <div className={`${css.answer} ${firstFAQ ? css.expanded : css.none}`}>
            <p>
              Within this page, we're going to take a chronological leap through
              the future of human spaceflight. We're going to be looking at
              what's on the agenda and how we can achieve it and we're also
              going to take a look at what might come long after all current
              plans for future space colonization ends. The goal here is to give
              readers a clear and concise glance into our future without causing
              confusion or sensory overload.
              <br />
              <br />
              After reading through our page, readers are very likely to have
              the fundamentals on spaceflight down and can engage in meaninful
              and constructive conversations about our possible future/s.
            </p>
          </div>
        </div>
        <div className={css.questionBox}>
          <div
            className={`${css.question} ${secondFAQ ? css.expanded : css.none}`}
            onClick={() => setSecondFAQ(!secondFAQ)}
          >
            <Image
              className={`${css.arrow} ${secondFAQ ? css.expanded : css.none}`}
              src={require(".//../../resources/images/arrow.png")}
              alt="Arrow"
            />
            <p>Do you work in this field?</p>
          </div>
          <div className={`${css.answer} ${secondFAQ ? css.expanded : css.none}`}>
            <p>
              No, not currently. I am considering enrollment in a part-time Bachelor of Science in Aerospace Engineering but I'm currently working as a Software Developer. My ultimate goal is to help shape and form the future of the spacetravel industry in a bigger fashion than "just" a job in the field though, so I am most likely to continue the (well-paid) path of a Software Engineer and ramp up enough money to start my own company in the Aeronautics & Aerospace Engineering field.
            </p>
          </div>
        </div>
        <div className={css.questionBox}>
          <div
            className={`${css.question} ${thirdFAQ ? css.expanded : css.none}`}
            onClick={() => setThirdFAQ(!thirdFAQ)}
          >
            <Image
              className={`${css.arrow} ${thirdFAQ ? css.expanded : css.none}`}
              src={require(".//../../resources/images/arrow.png")}
              alt="Arrow"
            />
            <p>Where can I request a topic or feature?</p>
          </div>
          <div className={`${css.answer} ${thirdFAQ ? css.expanded : css.none}`}>
            <p>Anywhere you want, really, as long as it's probable for me to notice it. You choose between the GitHub repository, my LinkedIn inbox, Discord or even the e-mail option on my portfolio website.</p>
          </div>
        </div>
        <div className={css.questionBox}>
          <div
            className={`${css.question} ${fourthFAQ ? css.expanded : css.none}`}
            onClick={() => setFourthFAQ(!fourthFAQ)}
          >
            <Image
              className={`${css.arrow} ${fourthFAQ ? css.expanded : css.none}`}
              src={require(".//../../resources/images/arrow.png")}
              alt="Arrow"
            />
            <p>Do you think you'll ever be on Mars?</p>
          </div>
          <div className={`${css.answer} ${fourthFAQ ? css.expanded : css.none}`}>
            <p>
              Tough one. The correct answer to this question is, especially if you know me well enough, much more dependant on my health situation than on the progression speed of spacetravel. If I get to live 70+ years, I think it's pretty likely. If not, I don't think I will, honestly. <br /><br />It's not about me, though. I am not even excited to be there, even if we had a colony up on Mars. What's important to me is accelerating progress and for that, my location doesn't matter at all. If I was an outside observer looking at humans and their progress, I wouldn't care for a single human so why should I now? Because I just so happen to be him? 
            </p>
          </div>
        </div>
        <div className={`${css.questionBox} ${css.last}`}>
          <div
            className={`${css.question} ${fifthFAQ ? css.expanded : css.none}`}
            onClick={() => setFifthFAQ(!fifthFAQ)}
          >
            <Image
              className={`${css.arrow} ${fifthFAQ ? css.expanded : css.none}`}
              src={require(".//../../resources/images/arrow.png")}
              alt="Arrow"
            />
            <p>How can I contribute?</p>
          </div>
          <div className={`${css.answer} ${fifthFAQ ? css.expanded : css.none} ${css.last}`}>
            <p>
              Lots of ways! Apart from the very obvious one being fulfilling feature requests or writing chapters that the both of us agreed on, simply sharing this page will help increase awareness already. Give it a like on Spotify, Apple Podcasts or GitHub, if you like. Everything helps :)
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

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
          Über Beyond <span className={css.grad}>Earth©</span>
        </h1>
        <h3>Die Online-Bibliothek zur Raumfahrt</h3>
        <div className={css.info}>
          <div
            className={`${css.textbox} ${css.text}`}
            tabIndex={0}
            id="textbox"
          >
            <h2>
              <div className={css.hand}>👋</div> Hey, Ich bin Gianluca,
            </h2>
            <p>
              und ich bin der Ersteller und Autor dieser Website.{" "}
              <span>Beyond Earth©</span> ist ein Projekt mit dem Ziel,
              das Bewusstsein für die Raumfahrttechnik und Weltraumforschung zu stärken. Mein persönliches
              Ziel ist es, so viele Menschen wie möglich für diese Nische zu begeistern. 
              Du entscheidest, ob du die Inhalte dieses Projekts in deinem eigenen Tempo lesen oder dir die Hörbücher anhören möchtest.
              <br /> <br />
              <span>Beyond Earth©</span> ist konzipiert, um für jede/n zugänglich und kostenlos zu sein und ist von Haus aus Open Source. Feature Requests und aktive Beteiligung an diesem Projekt sind jederzeit willkommen!
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
              <span>Entwickler</span>
            </button>
            <button
              className={`${css.textbox} ${css.socialButton} ${css.location}`}
            >
              <Image
                className={css.icon}
                src={require(".//../../resources/images/location.png")}
                alt="Location"
              />
              <span>Bochum</span>
            </button>
          </div>
        </div>
        <div className={css.divider} />
      </section>

      <section className={css.secondSection}>
        <h1>Besuch' uns auf deiner Lieblingsplattform!</h1>
        <h2 className={css.cta1}>
          Unser Content ist sowohl auf{" "}
          <strong className={css.spoti}>Spotify</strong> als auch{" "}
          <strong className={css.apple}>Apple Podcasts</strong> verfügbar!
        </h2>

        <div className={css.boxes}>
          <div className={css.boxesLeft}>
            <div className={css.box}>
              <span>
                <strong>Deutsche Artikel</strong> auf unserer Website
              </span>
            </div>
            <div className={css.box}>
              <span>
                <strong>Englische Artikel</strong> auf unserer Website
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
                <strong>Deutsches Hörbuch</strong> auf Spotify
              </span>
            </div>
            <div className={css.box}>
              <Image
                className={css.teaser}
                src={require(".//../../resources/images/spotifyteaser2.png")}
                alt="Location"
              />
              <span>
                <strong>Englisches Hörbuch</strong> auf Spotify
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
              <strong>Deutsches Hörbuch</strong> auf Apple Podcasts
              </span>
            </div>
            <div className={css.box}>
              <Image
                className={css.teaser}
                src={require(".//../../resources/images/applepodcasts2.png")}
                alt="Location"
              />
              <span>
              <strong>Englisches Hörbuch</strong> auf Apple Podcasts
              </span>
            </div>
          </div>
        </div>

        <h3 className={css.cta2}>
          Hinterlass' einen Like oder Follow, wenn du zukünftige Inhalte nicht verpassen willst!
        </h3>
        <div className={css.divider} />
      </section>

      <section className={css.thirdSection}>
        <h1>Häufig gestellte Fragen</h1>

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
            <p>Worum geht es auf dieser Website?</p>
          </div>
          <div className={`${css.answer} ${firstFAQ ? css.expanded : css.none}`}>
            <p>
                Innerhalb dieser Seite unternehmen wir eine zeitlich chronologische Reise durch die Zukunft der
                menschlichen Raumfahrt. Wir werden uns anschauen, was so auf der Agenda steht, wie wir all das erreichen können und
                auch beleuchten, was weit jenseits der Menschheit liegt. Das Ziel hier ist es, Lesern einen klaren und prägnanten Blick in unsere Zukunft zu verschaffen,
                ohne Verwirrung oder Reizüberflutung zu stiften.
              <br />
              <br />
              Nach dem Durchforsten dieser Seite werden Leser:innen mit großer Wahrscheinlichkeit die Grundlagen der Raumfahrt verstehen und können sich an sinnvollen und konstruktiven Gesprächen über unsere mögliche/n Zukünfte beteiligen.
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
            <p>Arbeitest du in dieser Branche?</p>
          </div>
          <div className={`${css.answer} ${secondFAQ ? css.expanded : css.none}`}>
            <p>
            Nein, derzeit nicht. Ich erwäge, einen Teilzeit-Bachelor of Science in Luft- und Raumfahrttechnik zu absolvieren, aber ich arbeite derzeit als Softwareentwickler. Mein ultimatives Ziel ist es, die Zukunft der Raumfahrtindustrie mitzugestalten, und zwar auf eine größere Art und Weise als "nur" durch einen Job in diesem Bereich. Daher werde ich höchstwahrscheinlich den (gut bezahlten) Weg eines Software-Ingenieurs fortsetzen und genug Geld auftreiben, um mein eigenes Unternehmen im Bereich Luft- und Raumfahrttechnik zu gründen.
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
            <p>Wo kann ich ein Feature oder Thema anfragen?</p>
          </div>
          <div className={`${css.answer} ${thirdFAQ ? css.expanded : css.none}`}>
            <p>Tatsächlich wo immer du willst, solange es hinreichend wahrscheinlich ist, dass ich es über diesen Weg mitbekomme. Du hast die freie Wahl zwischen GitHub, LinkedIn, Discord oder sogar der E-Mail Option auf meiner Portfolio-Website.</p>
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
            <p>Glaubst du, du wirst jemals auf dem Mars sein?</p>
          </div>
          <div className={`${css.answer} ${fourthFAQ ? css.expanded : css.none}`}>
            <p>
              Schwierige Frage. Die korrekte Antwort darauf hängt, besonders wenn man mich gut kennt, deutlich eher von meinem zukünftigen Gesundheitszustand als dem menschlichen Fortschritt ab. Sollte ich die Ehre haben, 70 oder mehr Jahre lang zu leben, halte ich das tatsächlich für recht wahrscheinlich. Andernfalls nicht.

              <br /><br />
              Es geht aber auch überhaupt nicht um mich. Ich wäre nicht außerordentlich euphorisch darüber, Teil einer Kolonie auf dem Mars sein zu können. Wichtig ist mir die Beschleunigung des technologischen Fortschritts, für welchen mein Aufenthaltsort völlig unerheblich ist. Wäre ich ein außenstehender Beobachter, der auf die Menschheit herabsieht, würde ich mich wohl kaum für einen einzelnen Menschen sondern für ihren Fortschritt und ihre Entwicklung interessieren. Warum sollte es für mich also anders sein? Weil ich zufällig dieser einzelne Mensch bin?
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
            <p>Wie kann ich mich an diesem Projekt beteiligen?</p>
          </div>
          <div className={`${css.answer} ${fifthFAQ ? css.expanded : css.none} ${css.last}`}>
            <p>
            Es gibt viele Möglichkeiten! Abgesehen von der sehr offensichtlichen Möglichkeit, Feature-Wünsche zu erfüllen oder Kapitel zu schreiben, auf die wir uns beide geeinigt haben, hilft schon das Teilen dieser Seite dabei, deren Bekanntheit zu steigern. Gib uns einen Like auf Spotify, Apple Podcasts oder GitHub, wenn du magst. Alles hilft :)
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

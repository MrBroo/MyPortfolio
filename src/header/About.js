import { useState } from "react";
import "../main/About.css";

function About() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="about__body" id="about">
      <div className="about">
        <div className="about__left">
          <div className="about__img"></div>
        </div>
        <div className="about__right">
          <h1>About Me</h1>
          <p>
            I am passionate about building excellent software that improves the
            lives of those around me. I specialize in creating software for
            clients ranging from individuals and small-businesses all the way to
            large enterprise corporations.
          </p>

          <div className="containerTab">
            <div className="bloc-tabs">
              <button
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
              >
                Main skills
              </button>
              <button
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
              >
                Experience
              </button>
              <button
                className={
                  toggleState === 3
                    ? "tab__self tabs active-tabs "
                    : "tab__self tabs"
                }
                onClick={() => toggleTab(3)}
              >
                Education & Certification
              </button>
            </div>

            <div className="content-tabs">
              <div
                className={
                  toggleState === 1 ? "content  active-content" : "content"
                }
              >
                <div className="about__tabs">
                  <p>
                    <b>Web and user interface design - </b> Development
                  </p>
                  <p>JavaScript, React, TypeScript</p>
                </div>
                <div className="about__tabs">
                  <p>
                    <b>Backend - </b> Development
                  </p>
                  <p>Java, Spring boot, Postgresql</p>
                </div>
                <div className="about__tabs">
                  <p>
                    <b>Mobil Application - </b> Development
                  </p>
                  <p>JavaScript, TypeScript, ReactNative</p>
                </div>
              </div>

              <div
                className={
                  toggleState === 2 ? "content  active-content" : "content"
                }
              >
                <div className="about__tabs">
                  <p>
                    <b>Web and user interface design - </b> Development
                  </p>
                  <p>Websites, web experiences, ...</p>
                </div>
                <div className="about__tabs">
                  <p>
                    <b>Web and user interface design - </b> Development
                  </p>
                  <p>Websites, web experiences, ...</p>
                </div>
                <div className="about__tabs">
                  <p>
                    <b>Web and user interface design - </b> Development
                  </p>
                  <p>Websites, web experiences, ...</p>
                </div>
              </div>

              <div
                className={
                  toggleState === 3 ? "content  active-content" : "content"
                }
              >
                <div className="about__tabs">
                  <p>
                    <b>PDP IT ACADEMY</b>
                  </p>
                  <p>Fullstack Developer</p>
                </div>
                <div className="about__tabs">
                  <p>
                    <b>Certification of PDP</b>
                  </p>
                  <p>WEB FULL STACK DEVELOPMENT COURSE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;

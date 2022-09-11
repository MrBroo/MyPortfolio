import { useState } from "react";
import "../main/About.css";

function About() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="about__body" id='about'>
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
                <h2>Content 1</h2>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati praesentium incidunt quia aspernatur quasi quidem
                  facilis quo nihil vel voluptatum?
                </p>
              </div>

              <div
                className={
                  toggleState === 2 ? "content  active-content" : "content"
                }
              >
                <h2>Content 2</h2>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente voluptatum qui adipisci.
                </p>
              </div>

              <div
                className={
                  toggleState === 3 ? "content  active-content" : "content"
                }
              >
                <h2>Content 3</h2>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
                  sed nostrum rerum laudantium totam unde adipisci incidunt modi
                  alias! Accusamus in quia odit aspernatur provident et ad vel
                  distinctio recusandae totam quidem repudiandae omnis veritatis
                  nostrum laboriosam architecto optio rem, dignissimos
                  voluptatum beatae aperiam voluptatem atque. Beatae rerum
                  dolores sunt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;

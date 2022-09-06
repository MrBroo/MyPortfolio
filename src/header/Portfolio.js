import "../main/Portfolio.css";
import { useState } from "react";
import tabsImg from "../images/e1ba95dc7351e6540d5e50657181fec5.jpg";

function Portfolio() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="portfolio__body">
      <div className="portfolio">
        <div className="portfolio__text">
          <h1>My Some Projects</h1>
          <p>
            {" "}
            There are many variations of passages of Lorem Ipsum available, but
            the <br /> majority have suffered alteration.
          </p>
        </div>
        <div className="container1">
          <div className="bloc-tabs1">
            <button
              className={toggleState === 1 ? "tabs1 active-tabs1" : "tabs1"}
              onClick={() => toggleTab(1)}
            >
              All Projects
            </button>
            <button
              className={toggleState === 2 ? "tabs1 active-tabs1" : "tabs1"}
              onClick={() => toggleTab(2)}
            >
              React
            </button>
            <button
              className={toggleState === 3 ? "tabs1 active-tabs1" : "tabs1"}
              onClick={() => toggleTab(3)}
            >
              Html
            </button>
            <button
              className={toggleState === 4 ? "tabs1 active-tabs1" : "tabs1"}
              onClick={() => toggleTab(4)}
            >
              Fullstack
            </button>
          </div>

          <div className="content-tabs1">
            <div
              className={
                toggleState === 1 ? "content1  active-content1" : "content1"
              }
            >
              <div className="content__card">
                <div className="card__body">
                  <a href="#" className="card__hover">
                    <div className="card__more">
                      <div>
                        <h3>Click button for more see</h3>
                        <p>
                          I throw myself down among the tall grass by the stream
                          as I lie close to the earth.
                        </p>
                        <button>More</button>
                      </div>
                    </div>
                  </a>
                  <img src={tabsImg} className="card__img" />
                </div>
                <div className="card__body">
                  <a href="#" className="card__hover">
                    <div className="card__more">
                      <div>
                        <h3>Click button for more see</h3>
                        <p>
                          I throw myself down among the tall grass by the stream
                          as I lie close to the earth.
                        </p>
                        <button>More</button>
                      </div>
                    </div>
                  </a>
                  <img src={tabsImg} className="card__img" />
                </div>
              </div>
            </div>
            <div
              className={
                toggleState === 2 ? "content1  active-content1" : "content1"
              }
            >
              <div className="content__card">
                <div className="card__body">
                  <a href="#" className="card__hover">
                    <div className="card__more">
                      <div>
                        <h3>Click button for more see</h3>
                        <p>
                          I throw myself down among the tall grass by the stream
                          as I lie close to the earth.
                        </p>
                        <button>More</button>
                      </div>
                    </div>
                  </a>
                  <img src={tabsImg} className="card__img" />
                </div>
                <div className="card__body">
                  <a href="#" className="card__hover">
                    <div className="card__more">
                      <div>
                        <h3>Click button for more see</h3>
                        <p>
                          I throw myself down among the tall grass by the stream
                          as I lie close to the earth.
                        </p>
                        <button>More</button>
                      </div>
                    </div>
                  </a>
                  <img src={tabsImg} className="card__img" />
                </div>
              </div>
            </div>
            <div
              className={
                toggleState === 3 ? "content1  active-content1" : "content1"
              }
            >
              <div className="content__card">
                <div className="card__body">
                  <a href="#" className="card__hover">
                    <div className="card__more">
                      <div>
                        <h3>Click button for more see</h3>
                        <p>
                          I throw myself down among the tall grass by the stream
                          as I lie close to the earth.
                        </p>
                        <button>More</button>
                      </div>
                    </div>
                  </a>
                  <img src={tabsImg} className="card__img" />
                </div>
                <div className="card__body">
                  <a href="#" className="card__hover">
                    <div className="card__more">
                      <div>
                        <h3>Click button for more see</h3>
                        <p>
                          I throw myself down among the tall grass by the stream
                          as I lie close to the earth.
                        </p>
                        <button>More</button>
                      </div>
                    </div>
                  </a>
                  <img src={tabsImg} className="card__img" />
                </div>
              </div>
              <div
                className={
                  toggleState === 4 ? "content1  active-content1" : "content1"
                }
              >
                <div className="content__card">
                  <div className="card__body">
                    <a href="#" className="card__hover">
                      <div className="card__more">
                        <div>
                          <h3>Click button for more see</h3>
                          <p>
                            I throw myself down among the tall grass by the
                            stream as I lie close to the earth.
                          </p>
                          <button>More</button>
                        </div>
                      </div>
                    </a>
                    <img src={tabsImg} className="card__img" />
                  </div>
                  <div className="content__card">
                    <div className="card__body">
                      <a href="#" className="card__hover">
                        <div className="card__more">
                          <div>
                            <h3>Click button for more see</h3>
                            <p>
                              I throw myself down among the tall grass by the
                              stream as I lie close to the earth.
                            </p>
                            <button>More</button>
                          </div>
                        </div>
                      </a>
                      <img src={tabsImg} className="card__img" />
                    </div>
                    <div className="card__body">
                      <a href="#" className="card__hover">
                        <div className="card__more">
                          <div>
                            <h3>Click button for more see</h3>
                            <p>
                              I throw myself down among the tall grass by the
                              stream as I lie close to the earth.
                            </p>
                            <button>More</button>
                          </div>
                        </div>
                      </a>
                      <img src={tabsImg} className="card__img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Portfolio;

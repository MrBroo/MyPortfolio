import "../main/Portfolio.css";
import { useState } from "react";
import tabsImg from "../images/Html_1_image.png";
import Html2 from "../images/Html_2_image.png";
import Html3 from "../images/Html_3_image.png";
import Modal from "react-bootstrap/Modal";

function Portfolio() {
  const [show, setShow] = useState(false);
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      {" "}
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="portfolio__modal">
            <div className="modal__text">
              <h3>This is my site</h3>
              <p>
                {" "}
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration. There are many
                variations of
              </p>
            </div>
            <div className="modal__cards">
              <div className="modal__card mr-3">
                <img src={tabsImg} />
              </div>
              <div className="modal__card mr-3">
                <img src={tabsImg} />
              </div>
              <div className="modal__card">
                <img src={tabsImg} />
              </div>
              <div className="modal__card">
                <img src={tabsImg} />
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <div className="portfolio__body" id="portfolio">
        <div className="portfolio">
          <div className="portfolio__text">
            <h1>My Some Projects</h1>
            <p>
              {" "}
              There are many variations of passages of Lorem Ipsum available,
              but the <br /> majority have suffered alteration.
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
            </div>

            <div className="content-tabs1">
              <div
                className={
                  toggleState === 1 ? "content1  active-content1" : "content1"
                }
              >
                <div className="content__card">
                  <div className="card__body">
                    <a className="card__hover">
                      <div className="card__more">
                        <div>
                          <h3>Click button for more see</h3>
                          <p>
                            you will get complete information about this project
                            by clicking the button
                          </p>
                          <button onClick={() => setShow(true)}>More</button>
                        </div>
                      </div>
                    </a>
                    <img src={tabsImg} className="card__img" />
                  </div>
                  <div className="card__body">
                    <a className="card__hover">
                      <div className="card__more">
                        <div>
                          <h3>Click button for more see</h3>
                          <p>
                            I throw myself down among the tall grass by the
                            stream as I lie close to the earth.
                          </p>
                          <button onClick={() => setShow(true)}>More</button>
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
                    <a className="card__hover">
                      <div className="card__more">
                        <div>
                          <h3>Click button for more see</h3>
                          <p>
                            I throw myself down among the tall grass by the
                            stream as I lie close to the earth.
                          </p>
                          <button onClick={() => setShow(true)}>More</button>
                        </div>
                      </div>
                    </a>
                    <img src={tabsImg} className="card__img" />
                  </div>
                  <div className="card__body">
                    <a className="card__hover">
                      <div className="card__more">
                        <div>
                          <h3>Click button for more see</h3>
                          <p>
                            I throw myself down among the tall grass by the
                            stream as I lie close to the earth.
                          </p>
                          <button onClick={() => setShow(true)}>More</button>
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
                    <a className="card__hover">
                      <div className="card__more">
                        <div>
                          <h3>Click button for more see</h3>
                          <p>
                            I throw myself down among the tall grass by the
                            stream as I lie close to the earth.
                          </p>
                          <button onClick={() => setShow(true)}>More</button>
                        </div>
                      </div>
                    </a>
                    <img src={tabsImg} className="card__img" />
                  </div>
                  <div className="card__body">
                    <a className="card__hover">
                      <div className="card__more">
                        <div>
                          <h3>Click button for more see</h3>
                          <p>
                            I throw myself down among the tall grass by the
                            stream as I lie close to the earth.
                          </p>
                          <button onClick={() => setShow(true)}>More</button>
                        </div>
                      </div>
                    </a>
                    <img src={Html2} className="card__img" />
                  </div>
                  <div className="card__body">
                    <a className="card__hover">
                      <div className="card__more">
                        <div>
                          <h3>Click button for more see</h3>
                          <p>
                            I throw myself down among the tall grass by the
                            stream as I lie close to the earth.
                          </p>
                          <button onClick={() => setShow(true)}>More</button>
                        </div>
                      </div>
                    </a>
                    <img src={Html3} className="card__img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Portfolio;

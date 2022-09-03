import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "../main/About.css";
function About() {
  return (
    <div className="about__body">
      <div className="about">
        <div className="about__left">
          <div className="about__img"></div>
        </div>
        <div className="about__right">
          <h1>About Me</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which dont look even slightly
            believable. If you are going to use a passage of Lorem Ipsum,
          </p>
          <div>
            <Tabs
              defaultActiveKey="profile"
              id="fill-tab-example"
              className="mb-3"
              fill
            >
              <Tab eventKey="home" title="Home" className="tab__class">
                Lorem
              </Tab>
              <Tab eventKey="profile" title="Profile" className="tab__class">
                Lorem
              </Tab>
              <Tab eventKey="longer-tab" title="Loooonger Tab" className="tab__class">
                Lorem
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;

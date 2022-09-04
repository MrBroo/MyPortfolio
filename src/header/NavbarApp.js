import { RiInstagramLine } from "react-icons/ri";
import { RiFacebookFill } from "react-icons/ri";
import { RiLinkedinFill } from "react-icons/ri";
import { RiGithubFill } from "react-icons/ri";
import "../main/NavbarApp.css";
function NavbarApp() {
  return (
    <div className="wrapper">
      <div className="header">
        <div className="header__left">
          <div className="header__logo">Ibrohim</div>
          <div className="header__menu">
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#service">Service</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="header__right">
          <div className="header__icons">
            <ul>
              <li>
                <a href="#">
                  {" "}
                  <RiInstagramLine />
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <RiFacebookFill />
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <RiLinkedinFill />
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <RiGithubFill />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <button className="header__button">
              <strong>Contact me</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NavbarApp;

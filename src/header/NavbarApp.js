import { useState } from "react";
import { RiInstagramLine } from "react-icons/ri";
import { RiFacebookFill } from "react-icons/ri";
import { RiLinkedinFill } from "react-icons/ri";
import { RiGithubFill } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai";
import { HiOutlineX } from "react-icons/hi";
import "../main/NavbarApp.css";

function NavbarApp() {
  const [navState, setNavState] = useState(0);

  const toggleTab = (index) => {
    setNavState(index);
  };
  return (
    <>
      <div className="wrapper">
        <div className="header">
          <div className="header__left">
            <a href="#home" className="header_logo_link">
              <div className="header__logo">Ibrohim</div>
            </a>
            <div className="header__menu">
              <ul>
                <li>
                  <a href="#about" className="navbar__a">
                    About
                  </a>
                </li>
                <li>
                  <a href="#service" className="navbar__a">
                    Service
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="navbar__a">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#feedback" className="navbar__a">
                    Feedback
                  </a>
                </li>
                <li>
                  <a href="#contact" className="navbar__a">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="header__right">
            <div className="header__icons">
              <ul>
                <li>
                  <a href="https://www.instagram.com/f.ibrokhim_/">
                    <RiInstagramLine />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <RiFacebookFill />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/ibrohim-fayzullayev-7a1431245/">
                    <RiLinkedinFill />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/MrBroo">
                    <RiGithubFill />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <AiOutlineMenu
                className={navState === 1 ? "nav__button__active" : "nav__button"}
                onClick={() => toggleTab(1)}
              />
              <div
                className={navState === 0 ? "nav__mobile__none " : "nav__cancel__button"}
                onClick={() => toggleTab(0)}
              >
                <HiOutlineX />
              </div>
              <a href="#contact" className="header__button">
                <strong>Contact me</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="nav__position">
        <div className={navState === 1 ? "nav__mobile__block" : "nav__mobile__none"}>
          <div className="wrapper__mobile">
            <div className="header__mobile">
              <div className="header__left__mobile">
                <div className="header__menu__mobile">
                  <ul>
                    <li>
                      <a href="#home" className="navbar__a__mobile">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#about" className="navbar__a__mobile">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#service" className="navbar__a__mobile">
                        Service
                      </a>
                    </li>
                    <li>
                      <a href="#portfolio" className="navbar__a__mobile">
                        Portfolio
                      </a>
                    </li>
                    <li>
                      <a href="#contact" className="navbar__a__mobile">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="header__right__mobile">
                <div className="header__icons__mobile">
                  <ul>
                    <li>
                      <a href="https://www.instagram.com/f.ibrokhim_/">
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
                      <a href="https://github.com/MrBroo">
                        {" "}
                        <RiGithubFill />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default NavbarApp;

import { useState } from "react";
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
                <a href="#home" className="navbar__a">
                  Home
                </a>
              </li>
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
                <a className="navbar__a" href="#portfolio">Portfolio</a>
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

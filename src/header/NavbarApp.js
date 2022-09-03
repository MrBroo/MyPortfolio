import { AiOutlineInstagram } from "react-icons/ai";
import { RiFacebookLine } from "react-icons/ri";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";
import "../main/NavbarApp.css";
function NavbarApp() {
  return (
    <div className="wrapper">
      <div className="header">
        <div className="header__left">
          <div className="header__logo">Ibrohim</div>
          <div className="header__menu">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Service</li>
              <li>Portfolio</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <div className="header__right">
          <div className="header__icons">
            <ul>
              <li>
                <AiOutlineInstagram />
              </li>
              <li>
                <RiFacebookLine />
              </li>
              <li>
                <RiLinkedinBoxLine />
              </li>
              <li>
                <AiFillGithub />
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

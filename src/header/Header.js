import "../main/Header.css";
import Fade from "react-reveal/Fade";
function Header() {
  return (
    <div className="header__body" id="home">
      <div className="header__content">
        <p className="header__toptext">WELCOME TO MY WORLD</p>

        <p className="header__text">
          Hi, I`m Ibrokhim
          <div className="header__textmoution">JS Developer</div>
        </p>
        <p className="header__bottomtext">based in UZB</p>
      </div>
    </div>
  );
}

export default Header;

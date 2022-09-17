import "../main/Header.css";
import Typewriter from "typewriter-effect";
// import "react-simple-typewriter/dist/index.css";

function Header() {
  return (
    <div className="header__body" id="home">
      <div className="header__content">
        <p className="header__toptext">WELCOME TO MY WORLD</p>

        <div className="header__text">
          Hi, I`m Ibrokhim
          <span className="header__textmoution">
            <Typewriter
              options={{
                strings: ["Fullstack Developer", "I code cool websites"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>
        <p className="header__bottomtext">based in UZB</p>
      </div>
    </div>
  );
}

export default Header;

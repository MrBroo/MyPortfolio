import "../main/Header.css";
import Typewriter from "typewriter-effect";
// import "react-simple-typewriter/dist/index.css";

function Header() {
  return (
    <div className="header__body" id="home">
      <div className="header__content">
        <p className="header__toptext">WELCOME TO MY WORLD</p>

        <p className="header__text">
          Hi, I`m Ibrokhim
          <div className="header__textmoution">
            {/* <Typewriter
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              word={["JS Developer", "Fullstack Developer"]}
            /> */}
            {/* <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("JS Developer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Fullstack Developer")
                  .start();
              }}
            /> */}
            <Typewriter
              options={{
                strings: ["JS Developer", "Fullstack Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </p>
        <p className="header__bottomtext">based in UZB</p>
      </div>
    </div>
  );
}

export default Header;

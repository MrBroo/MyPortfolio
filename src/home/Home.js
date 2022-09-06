import About from "../header/About";
import Contact from "../header/Contact";
import Footer from "../header/Footer";
import Header from "../header/Header";
import NavbarApp from "../header/NavbarApp";
import Portfolio from "../header/Portfolio";
import Service from "../header/Service";
import SliderApp from "../header/SliderApp";

function Home() {
  return (
    <>
      <NavbarApp />
      <Header />
      <About />
      <Service />
      <Portfolio />
      <SliderApp />
      <Contact />
      <Footer />
    </>
  );
}
export default Home;

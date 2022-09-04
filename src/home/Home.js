import About from "../header/About";
import Contact from "../header/Contact";
import Footer from "../header/Footer";
import Header from "../header/Header";
import NavbarApp from "../header/NavbarApp";
import Service from "../header/Service";

function Home() {
  return (
    <>
      <NavbarApp />
      <Header />
      <About />
      <Service />
      <Contact />
      <Footer />
    </>
  );
}
export default Home;

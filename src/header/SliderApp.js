import "../main/Slider.css";
import carouselImg from "../images/e1ba95dc7351e6540d5e50657181fec5.jpg";
import carouselImg2 from "../images/download.png";
import { CgQuoteO } from "react-icons/cg";
import Carousel from "react-bootstrap/Carousel";
function SliderApp() {
  return (
    <div class="slide__body">
      <div className="slide">
        <Carousel variant="dark">
          <Carousel.Item>
          <div class="karusel border">
                <div class="karuseltext">
                  Ayni paytda TPS eng yuqori saviyadagi ma’lumot <br />
                  uzatish global taqmog‘iga yuqori tezlikda kirish <br />
                  imkonini yaratuvchi xizmatni taklif etaoladigan
                  <br />intellektual va texnik quvvatga ega.
                </div>
                <div class="karuseltext1 mb-3">
                  Tania Perfilyeva
                  <div class="text-secondary">Java Bootcamp talabasi</div>
                </div>
              </div>
              <div className="slide__quote">
                <CgQuoteO />
              </div>
              <img
               src={carouselImg}
                height="335"
                width="330"
                class="karuselimg"
              />
              <img
                src={carouselImg2}
                height="251"
                width="248"
                class="karuselimg2"
              />
          </Carousel.Item>
          <Carousel.Item>
            <div className="slide__content">
              <div className="slide__quote">
                <CgQuoteO />
              </div>
              <div className="slide__left">
                <p>
                  I throw myself down among the tall grass by the stream as I
                  lie close to the earth. I throw myself down among the tall
                  grass by the stream as I lie close to the earth. I throw
                  myself down among the tall grass by the
                </p>
                <div className="slide__man">
                  <p>Abduvali Rajabov</p>
                  <p>Java Developer</p>
                </div>
              </div>
              <div className="slide__right">
                <img src={carouselImg} className="slide__img" />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="slide__content">
              <div className="slide__quote">
                <CgQuoteO />
              </div>
              <div className="slide__left">
                <p>
                  I throw myself down among the tall grass by the stream as I
                  lie close to the earth. I throw myself down among the tall
                  grass by the stream as I lie close to the earth. I throw
                  myself down among the tall grass by the
                </p>
                <div className="slide__man">
                  <p>Abduvali Rajabov</p>
                  <p>Java Developer</p>
                </div>
              </div>
              <div className="slide__right">
                <img src={carouselImg} className="slide__img" />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
        {/* <OwlCarousel className="owl-theme" {...options}>
          <div className="item">
            <div className="slide__content">
              <div className="slide__quote">
                <CgQuoteO />
              </div>
              <div className="slide__left">
                <p>
                  I throw myself down among the tall grass by the stream as I
                  lie close to the earth. I throw myself down among the tall
                  grass by the stream as I lie close to the earth. I throw
                  myself down among the tall grass by the
                </p>
                <div className="slide__man">
                  <p>Abduvali Rajabov</p>
                  <p>Java Developer</p>
                </div>
              </div>
              <div className="slide__right">
                <img src={tabsImg} className="slide__img" />
               
              </div>
            </div>
          </div>
          <div className="item">
            <div className="slide__content">
              <div className="slide__left">
                <p>
                  I throw myself down among the tall grass by the stream as I
                  lie close to the earth. I throw myself down among the tall
                  grass by the stream as I lie close to the earth. I throw
                  myself down among the tall grass by the stream as I lie close
                  to the earth. I throw myself down among the tall
                </p>

                <div className="slide__man">
                  <p>Abduvali Rajabov</p>
                  <p>Java Developer</p>
                </div>
              </div>
              <div className="slide__right">
                <img src={tabsImg} width="330" height="335" />
              </div>
            </div>
          </div>
          <div className="item">
            <div className="slide__content">
              <div className="slide__left">
                <p>
                  I throw myself down among the tall grass by the stream as I
                  lie close to the earth. I throw myself down among the tall
                  grass by the stream as I lie close to the earth. I throw
                  myself down among the tall grass by the stream as I lie close
                  to the earth. I throw myself down among the tall
                </p>
                <div className="slide__man">
                  <p>Abduvali Rajabov</p>
                  <p>Java Developer</p>
                </div>
              </div>
              <div className="slide__right">
                <img src={tabsImg} width="330" height="335" />
              </div>
            </div>
          </div>
        </OwlCarousel> */}
      </div>
    </div>
  );
}
export default SliderApp;

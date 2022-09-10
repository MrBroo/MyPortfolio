import "../main/Slider.css";
import carouselImg from "../images/img_avatar3.png";
import carouselImg2 from "../images/download.png";
import { CgQuoteO } from "react-icons/cg";
import Carousel from "react-bootstrap/Carousel";
function SliderApp() {
  return (
    <div class="slide__body">
      <div className="slide">
        <Carousel variant="white">
          <Carousel.Item>
            <div class="carousel border">
              <div class="carousel__text">
                Ayni paytda TPS eng yuqori saviyadagi ma’lumot uzatish global
                taqmog‘iga yuqori tezlikda kirish imkonini yaratuvchi xizmatni
                taklif etaoladigan intellektual va texnik quvvatga ega.
              </div>
              <div class="carousel__back_text mb-3">
                Tania Perfilyeva
                <div class="text-secondary">Java Bootcamp talabasi</div>
              </div>
              <img
                src={carouselImg}
                // height="335"
                // width="330"
                class="slide__img"
              />
              <img
                src={carouselImg2}
                // height="251"
                // width="248"
                class="slide__back__img"
              />
            </div>
            <div className="slide__quote">
              <CgQuoteO />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div class="carousel border">
              <div className="slide__quote">
                <CgQuoteO />
              </div>
              <div class="carousel__text">
                Ayni paytda TPS eng yuqori saviyadagi ma’lumot uzatish global
                taqmog‘iga yuqori tezlikda kirish imkonini yaratuvchi xizmatni
                taklif etaoladigan intellektual va texnik quvvatga ega.
              </div>
              <div class="carousel__back_text mb-3">
                Tania Perfilyeva
                <div class="text-secondary">Java Bootcamp talabasi</div>
              </div>
              <img
                src={carouselImg}
                // height="335"
                // width="330"
                class="slide__img"
              />
              <img
                src={carouselImg2}
                // height="251"
                // width="248"
                class="slide__back__img"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div class="carousel border">
              <div class="carousel__text">
                Ayni paytda TPS eng yuqori saviyadagi ma’lumot uzatish global
                taqmog‘iga yuqori tezlikda kirish imkonini yaratuvchi xizmatni
                taklif etaoladigan intellektual va texnik quvvatga ega.
              </div>
              <div class="carousel__back_text mb-3">
                Tania Perfilyeva
                <div class="text-secondary">Java Bootcamp talabasi</div>
              </div>
              <img src={carouselImg} class="slide__img" />
              <img src={carouselImg2} class="slide__back__img" />
            </div>
            <div className="slide__quote">
              <CgQuoteO />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
export default SliderApp;

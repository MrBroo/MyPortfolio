import "../main/Service.css";
import { FiMonitor } from "react-icons/fi";
import { AiOutlineMobile } from "react-icons/ai";
import { AiOutlineLaptop } from "react-icons/ai";
import { IoLogoBuffer } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { MdDns } from "react-icons/md";
function Service() {
  // const [active, setActive] = useState(false);
  return (
    <div className="service__body" id="service">
      <div className="service">
        <div className="service__text">
          <div>
            <h1>My Awesome Service</h1>
            <p>
              {" "}
              Everything I offer with a detailed overview of each.
            </p>
          </div>
        </div>
        <div className="service__content">
          <div className="service__card">
            <div className="card__icon">
              {" "}
              <FiMonitor />{" "}
            </div>
            <h3>Single Page Application</h3>
            <p>My single page application is fast and easy to understand.</p>
          </div>
          <div className="service__card">
            <div className="card__icon">
              {" "}
              <AiOutlineMobile />{" "}
            </div>
            <h3>Full Responsive</h3>
            <p>My layouts will work on any device, big or small.</p>
          </div>
          <div className="service__card">
            <div className="card__icon">
              {" "}
              <IoLogoBuffer />{" "}
            </div>
            <h3>Fast</h3>
            <p>
            Fast load times and lag free interaction, my highest priority.
            </p>
          </div>
          <div className="service__card">
            <div className="card__icon">
              {" "}
              <MdDns />{" "}
            </div>
            <h3>Backend Development</h3>
            <p>
            My web development services include  back-end development.
							
            </p>
          </div>
          <div className="service__card">
            <div className="card__icon">
              {" "}
              <AiOutlineLaptop />{" "}
            </div>
            <h3>Web Development</h3>
            <p>
              My web development services include front-end 
              development.
            </p>
          </div>
          <div className="service__card">
            <div className="card__icon">
              {" "}
              <MdDashboard />{" "}
            </div>
            <h3>Dynamic</h3>
            <p>
              Websites don't have to be static, I love making pages come to
              life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Service;

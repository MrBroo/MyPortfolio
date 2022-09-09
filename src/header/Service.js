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
              There are many variations of passages of Lorem Ipsum available,
              but the <br /> majority have suffered alteration.
            </p>
          </div>
        </div>
        <div className="service__content">
          <div className="service__card">
            <div className="card__icon">
              {" "}
              <FiMonitor />{" "}
            </div>
            <h3>Business Strgatagy</h3>
            <p>
              I throw myself down among the tall grass by the stream as I lie
              close to the earth.
            </p>
          </div>
          <div className="service__card">
            <div className="card__icon">
              {" "}
              <AiOutlineMobile />{" "}
            </div>
            <h3>Website Development</h3>
            <p>
              I throw myself down among the tall grass by the stream as I lie
              close to the earth.
            </p>
          </div>
          <div className="service__card">
            <div className="card__icon">
              {" "}
              <IoLogoBuffer />{" "}
            </div>
            <h3>Marketing & Reporting</h3>
            <p>
              I throw myself down among the tall grass by the stream as I lie
              close to the earth.
            </p>
          </div>
          <div className="service__card">
            <div className="card__icon">
              {" "}
              <MdDns />{" "}
            </div>
            <h3>
              Mobile App <br />
              Development
            </h3>
            <p>
              I throw myself down among the tall grass by the stream as I lie
              close to the earth.
            </p>
          </div>
          <div className="service__card">
            <div className="card__icon">
              {" "}
              <AiOutlineLaptop />{" "}
            </div>
            <h3>Marketing & Reporting</h3>
            <p>
              I throw myself down among the tall grass by the stream as I lie
              close to the earth.
            </p>
          </div>
          <div className="service__card">
            <div className="card__icon">
              {" "}
              <MdDashboard />{" "}
            </div>
            <h3>
              Mobile App <br />
              Development
            </h3>
            <p>
              I throw myself down among the tall grass by the stream as I lie
              close to the earth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Service;

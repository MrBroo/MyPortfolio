import "../main/Service.css";
import { FiMonitor } from "react-icons/fi";
import { BsFillMouseFill } from "react-icons/bs";
function Service() {
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
          <div className="card__icon"> <FiMonitor /> </div>
            <h2>Business Strgatagy</h2>
            <p>
              I throw myself down among the tall grass by the stream as I lie
              close to the earth.
            </p>
          </div>
          <div className="service__card">
          <div className="card__icon"> <FiMonitor /> </div>
            <h2>Website Development</h2>
            <p>
              I throw myself down among the tall grass by the stream as I lie
              close to the earth.
            </p>
          </div>
          <div className="service__card">
             <div className="card__icon"> <FiMonitor /> </div>
            <h2>Marketing & Reporting</h2>
            <p>
              I throw myself down among the tall grass by the stream as I lie
              close to the earth.
            </p>
          </div>
        </div>
        <div className="service__content">
          <div className="service__card">
          <div className="card__icon"> <FiMonitor /> </div>
            <h2>
              Mobile App <br />
              Development
            </h2>
            <p>
              I throw myself down among the tall grass by the stream as I lie
              close to the earth.
            </p>
          </div>
          <div className="service__card">
          <div className="card__icon"> <FiMonitor /> </div>
            <h2>Marketing & Reporting</h2>
            <p>
              I throw myself down among the tall grass by the stream as I lie
              close to the earth.
            </p>
          </div>
          <div className="service__card">
            <div className="card__icon"> <FiMonitor /> </div>
            <h2>
              Mobile App <br />
              Development
            </h2>
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

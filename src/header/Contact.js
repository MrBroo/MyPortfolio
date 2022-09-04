import "../main/Contact.css";

function Contact() {
  return (
    <div className="contact__body">
      <div className="contact">
        <div className="contact__left">
          <h1>Hire Me.</h1>
          <p>
            <strong>Email: </strong> Ibrohim.fayzullayevv@gmail.com
          </p>
          <p>
            <strong>Phone: </strong> (99833) 882-58-52
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit.
            Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, <br /> nisi
            at imperdiet pharetra.
          </p>
        </div>
        <div className="contact__right">
          <div className="contact__send">
            <div>
              <input placeholder="Name" className="name__input" />
            </div>
            <div>
              <input placeholder="Email" className="email__input" />
            </div>
          </div>
          <div>
            <textarea placeholder="Message" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;

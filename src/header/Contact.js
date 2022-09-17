import "../main/Contact.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Alert } from "react-bootstrap";

function Contact() {
  const [formData, setFormdata] = useState({
    loading: false,
    show: false,
  });
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setFormdata({ loading: true });
    emailjs
      .sendForm(
        "service_1db1a9g",
        "template_812c7a8",
        form.current,
        "WgxWuxv8l5kKMLSIY"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormdata({
            loading: false,
            alertmessage: "SUCCESS! ,Thankyou for your messege",
            variant: "success",
            show: true,
          });
        },
        (error) => {
          console.log(error.text);
          setFormdata({
            alertmessage: `Faild to send!,${error.text}`,
            variant: "danger",
            show: true,
          });
        }
      );
  };
  return (
    <div className="contact__body" id='contact'>
      <Alert
        //show={formData.show}
        variant={formData.variant}
        className={`rounded-0 contact__alert ${formData.show ? "d-block contact__alert" : "d-none"}`}
        onClose={() => setFormdata({ show: false })}
        dismissible
      >
        <p className="my-0">{formData.alertmessage}</p>
      </Alert>
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
          Hello, I am ready for independent work. <br/> 
          You can send me questions or suggestions here
          </p>
        </div>
        <div className="contact__right">
          <div className="contact__send">
            <form ref={form} onSubmit={sendEmail}>
              <input placeholder="Name" className="name__input" required/>
              <input placeholder="Email" className="email__input" required/>
              <textarea placeholder="Message" />
              <div className="contact__buttom">
                {" "}
                <input type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;

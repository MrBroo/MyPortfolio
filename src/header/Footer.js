import "../main/Footer.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { RiGithubFill } from "react-icons/ri";
function Footer() {
  return (
    <div className="footer__body">
      <div className="footer">
        <div className="footer__logo">Ibrokhim</div>
        <div className="footer__icons">
            <ul>
                <li><AiOutlineInstagram /></li>
                <li> <TiSocialFacebook /></li>
                <li><TiSocialLinkedin /></li>
                <li><RiGithubFill /></li>
            </ul>
        </div>
        <div className="footer__right">Copyright © 2021 Rainbow-Themes. All Rights Reserved.</div>
      </div>
    </div>
  );
}
export default Footer;

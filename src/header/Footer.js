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
            <li>
              <a href="https://www.instagram.com/f.ibrokhim_/" target="_blank">
                <AiOutlineInstagram />
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <TiSocialFacebook />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ibrohim-fayzullayev-7a1431245/" target="_blank">
                <TiSocialLinkedin />
              </a>
            </li>
            <li>
              <a href="https://github.com/MrBroo" target="_blank">
                <RiGithubFill />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__right">Made by Ibrokhim Fayzullayev 2022</div>
      </div>
    </div>
  );
}
export default Footer;

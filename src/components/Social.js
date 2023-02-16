import "../css/main.css";
import {
  FiGithub,
  FiExternalLink,
  FiInstagram,
  FiFacebook,
  FiLinkedin,
} from "react-icons/fi";

export default function Social() {
  function Li(props) {
    return (
      <li className="li-link">
        <a href={props.link} className="link">
          {props.logo}
        </a>
      </li>
    );
  }

  return (
    <div className="social">
      <ul className="links">
        <Li link="https://github.com/laze03" logo={<FiGithub />} />
        <Li
          link="https://www.facebook.com/ahmed.lazrak.526"
          logo={<FiFacebook />}
        />
        <Li
          link="https://www.instagram.com/lazrak_03/"
          logo={<FiInstagram />}
        />
        <Li
          link="https://www.linkedin.com/in/ahmed-lazrak-29763a204/"
          logo={<FiLinkedin />}
        />
      </ul>
    </div>
  );
}

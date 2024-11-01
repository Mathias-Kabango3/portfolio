import {
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaInstagram,
} from "react-icons/fa";
import "../Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
            <div>
              <p> 5210 Southlea Park</p>
              <p>Harare, Zimbabwe</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />{" "}
              +263 771 301 062
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              kabangomathias0@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>© {year} Mathias Kabango</h4>
          <div className="social">
            <Link to="https://www.linkedin.com/in/mathias-kabango-631231311/">
              <FaLinkedin
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
            </Link>
            <Link to="https://github.com/Mathias-Kabango3">
              <FaGithub size={20} style={{ color: "white" }} />
            </Link>

            <Link to="https://www.instagram.com/kabangomathias/">
              <FaInstagram
                size={20}
                style={{ color: "white", marginLeft: "2rem" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

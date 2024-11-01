import { Link } from "react-router-dom";
import "../HeroImg.css";
import introImg from "../assets/intro-bg.jpg";

function HeroImg() {
  return (
    <div className="hero">
      <div className="mask">
        <img src={introImg} alt="intro image" className="intro-img" />
      </div>
      <div className="content">
        <p>HI, I'M MATHIAS.</p>
        <h1>FULLSTACK DEVELOPER</h1>
        <div>
          <Link to="/projects" className="btn">
            View Projects
          </Link>
          <Link to="/contact" className=" btn btn-light">
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroImg;

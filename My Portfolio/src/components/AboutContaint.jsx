import { Link } from "react-router-dom";
import "../AboutContent.css";
import code1 from "../assets/code1.jpg";

function AboutContaint() {
  return (
    <div className="about">
      <div className="left">
        <h1>Who am I?</h1>
        <p>
          I am a dedicated web developer with a passion for crafting efficient
          and innovative applications. With a strong foundation in Python and
          Django, I specialize in building robust back-end systems that power
          modern web applications. My front-end expertise in JavaScript, HTML,
          CSS, and Tailwind CSS allows me to create seamless, responsive user
          interfaces. I thrive on collaboration and continuous learning,
          constantly exploring new technologies like Node.js, Docker, and
          Kubernetes to enhance my development toolkit. Whether it’s developing
          a dynamic web application or deploying scalable solutions, I am
          committed to delivering high-quality work that meets both user needs
          and business goals.
        </p>
        <Link to="/contact">
          <button className="btn">Contact Me</button>
        </Link>
      </div>
      {/* <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={code1} alt="programs" className="img" />
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default AboutContaint;

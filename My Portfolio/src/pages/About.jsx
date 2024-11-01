import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Navbar from "../components/Navbar";
import AboutContaint from "../components/AboutContaint";

function About() {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="ABOUT ME." text="I am a FullStack web developer" />
      <AboutContaint />
      <Footer />
    </div>
  );
}

export default About;

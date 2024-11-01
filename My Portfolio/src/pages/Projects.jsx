import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HeroImg2 from "../components/HeroImg2";
import Work from "../components/Work";

function Projects() {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS." text="Here are some of my projects" />
      <Work/>
      <Footer />
    </div>
  );
}

export default Projects;

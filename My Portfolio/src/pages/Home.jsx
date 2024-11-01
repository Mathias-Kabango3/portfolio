import HeroImg from "../components/HeroImg";
import Navbar from "../components/Navbar";
import "../App.css";
import Footer from "../components/Footer";
import Work from "../components/Work";

function Home() {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <Work />
      <Footer />
    </div>
  );
}

export default Home;

import ContactForm from "../components/Form";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Navbar from "../components/Navbar";

function Contact() {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="CONTACT ME." text="Here are some ways to contact me" />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Contact;

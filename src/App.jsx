import "./App.css";
import FollowUs from "./components/FollowUs";
import Footer from "./components/Footer";
import GetStarted from "./components/GetStarted";
import InternCount from "./components/InternCount";
import Seminar from "./components/Seminar";
import TestimonialCarousel from "./components/Testimonial";
import TrustedPartners from "./components/TrustedPartners";
import Hero from "./Pages/Hero";
import Section1 from "./Pages/Section1";
import Services from "./Pages/Services";
import "./index.css";

function App() {
  return (
    <>
      <Hero />
      <Section1 />
      <Seminar />
      <Services />
      <TestimonialCarousel />
      <InternCount />
      <FollowUs />
      <TrustedPartners />
      <GetStarted />
      <Footer />
    </>
  );
}

export default App;

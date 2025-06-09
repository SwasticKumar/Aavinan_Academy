import styles from "./Home.module.css";
import Testimonials from "../../components/testimonials/Testimonials";
import HeroSection from "../../components/heroSection/HeroSection";
import WhyChooseSection from "../../components/WhyChooseSection/WhyChooseSection";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import CTASection from "../../components/CTA/CTASection.JSX";

const Home = () => {
  return (
    <>
      {/* ---------HeroSection------------- */}

      <HeroSection />

      {/* ---------Services Section ---------- */}
      <ServicesSection />
      {/* ------Why choose us--------- */}
      <WhyChooseSection />
      {/* ------Testimonials------- */}
      <Testimonials />
      {/* --------CTA--------- */}
      <CTASection />
    </>
  );
};

export default Home;

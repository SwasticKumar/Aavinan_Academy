import styles from "./About.module.css";
import heroImg from "../../assets/hero-image.webp";
import { AiFillEye, AiFillHeart, AiOutlineAim } from "react-icons/ai";
import TeamSection from "../../components/teamSection/TeamSection";
import WhyWorkWithUs from "../../components/WhyWorkWithUs/WhyWorkWithUs";
import CallToAction from "../../components/CallToAction/CallToAction";

const About = () => {
  return (
    <>
      <section className={`py-5 ${styles.heroSection}`}>
        <div className="container position-relative z-2">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <h1 className="fw-bold">
                Empowering the Future with AI and Innovation
              </h1>
              <p className="text-muted mt-3">
                At Aavinan, we build transformative digital solutions that shape
                the future of learning and business.
              </p>
            </div>
            <div className="col-md-6 text-center">
              <img
                src={heroImg}
                alt="Hero Illustration"
                className={`img-fluid ${styles.heroImage}`}
              />
            </div>
          </div>
        </div>
      </section>
      <section className={`container py-5 ${styles.aboutSection} bg-white`}>
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center">
            <h2 className={`mb-4 ${styles.sectionTitle}`}>Our Journey</h2>
            <p className="text-start mb-4">
              Founded with a vision to bridge the gap between cutting-edge
              technology and practical business solutions, Aavinan emerged from
              a passion for innovation and education. Our journey began when our
              founders recognized the transformative potential of AI in
              reshaping how we learn and work.
            </p>
            <p className="text-start mb-4">
              Since our inception, we’ve been dedicated to creating intelligent
              digital solutions that empower organizations and individuals
              alike. Our mission extends beyond technology – we’re committed to
              fostering growth, enabling success, and driving meaningful change
              across industries.
            </p>
            <p className="text-start">
              Today, Aavinan stands as a trusted partner for businesses and
              educational institutions worldwide, delivering scalable solutions
              that adapt to the evolving digital landscape while maintaining our
              core values of innovation, integrity, and customer success.
            </p>
          </div>
        </div>
      </section>
      <section className={`py-5 ${styles.mvvSection}`}>
        <div className="container">
          <h2 className="text-center mb-5">Mission, Vision & Values</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className={`text-center p-4 h-100 ${styles.cardBox}`}>
                <div className={styles.iconCircle}>
                  <AiOutlineAim size={30} />
                </div>
                <h5 className="mt-3">Mission</h5>
                <p className="mb-0">
                  To deliver intelligent digital solutions that empower people
                  and organizations to achieve their full potential.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className={`text-center p-4 h-100 ${styles.cardBox}`}>
                <div className={styles.iconCircle}>
                  <AiFillEye size={30} />
                </div>
                <h5 className="mt-3">Vision</h5>
                <p className="mb-0">
                  To become a global leader in AI-powered education and
                  enterprise solutions that transform industries.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className={`text-center p-4 h-100 ${styles.cardBox}`}>
                <div className={styles.iconCircle}>
                  <AiFillHeart size={30} />
                </div>
                <h5 className="mt-3">Core Values</h5>
                <p className="mb-0">
                  Innovation, Integrity, Customer Success, and Continuous
                  Learning guide everything we do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TeamSection />
      <WhyWorkWithUs/>
      <CallToAction/>
    </>
  );
};

export default About;

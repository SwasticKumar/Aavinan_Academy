import styles from "./HeroSection.module.css";
import heroImg from "../../assets/hero-image.webp";
import { TypeAnimation } from "react-type-animation";
import React from "react";

const HeroSection = () => {
  return (
    <section className={`py-5 ${styles.heroSection}`}>
      <div className="container position-relative z-2">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <h1 className="fw-bold">
               Digital Transformation <br/> with&nbsp;
              <span className="text-primary">
                <TypeAnimation
                  sequence={["Artificial intelligence", 2000, "Web Solution", 2000]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  speed={50}
                  deletionSpeed={40}
                />
              </span>
            </h1>
            <p className="text-muted mt-3">
              Build smarter businesses and skilled individuals with our
              innovative platforms.
            </p>
            <div className="d-flex gap-3 mt-4">
              <button className="btn btn-primary">Start Learning</button>
              <button className="btn btn-outline-primary">Get a Free Quote</button>
            </div>
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
  );
};

export default HeroSection;
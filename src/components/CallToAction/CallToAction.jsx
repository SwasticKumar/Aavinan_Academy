import React from 'react';
import styles from './CallToAction.module.css';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className={`${styles.ctaSection} py-5`}>
      <div className="container text-center text-white">
        <h3 className="mb-3">Want to Build the Future With Us?</h3>
        <p className="mb-4">
          Explore careers or partner with us for your next digital solution.
        </p>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <Link to="/careers" className={`btn ${styles.ctaBtnPrimary}`}>
            View Careers
          </Link>
          <Link to="/contact" className={`btn ${styles.ctaBtnOutline}`}>
            Partner With Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

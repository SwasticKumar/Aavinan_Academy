import styles from './CTASection.module.css';

const CTASection = () => {
  return (
    <section className={`${styles.ctaBg} text-white py-5`}>
      <div className="container text-center">
        <h2 className="fw-bold mb-3">Ready to Build the Future of Your Business?</h2>
        <p className="mb-4">Join thousands of successful individuals and businesses</p>

        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <button className="btn btn-light fw-semibold px-4 py-2">Get Started Now</button>
          <button className={`btn ${styles.outlineWhite} fw-semibold px-4 py-2`}>Contact Sales</button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

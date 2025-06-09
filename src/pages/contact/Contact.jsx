import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import styles from "./Contact.module.css";
const Contact = () => {
  return (
    <>
      <section className="container py-5 bg-white">
        <h2 className="text-center fw-bold mb-2">Get in Touch</h2>
        <p className="text-center text-muted mb-5">
          We're here to help with your{" "}
          <span className=" text-warning">
            Aa<span className="text-success">vin</span>
            <span style={{ color: "#1E40AF" }}>an</span>
          </span>{" "}
          needs
        </p>

        <div className="row g-4">
          {/* Left: Contact Info */}
          <div className="col-md-4">
            <div className="p-4 shadow rounded bg-light">
              <h5 className="fw-bold mb-4">Quick Contact Info</h5>
              <div className="d-flex align-items-start mb-3">
                <FaMapMarkerAlt className="me-3 text-primary mt-1" />
                <div>
                  <strong>Address</strong>
                  <p className="mb-0">Palani, Tamil Nadu</p>
                </div>
              </div>
              <div className="d-flex align-items-start mb-3">
                <FaPhoneAlt className="me-3 text-primary mt-1" />
                <div>
                  <strong>Phone</strong>
                  <p className="mb-0">+91 88775 34216</p>
                </div>
              </div>
              <div className="d-flex align-items-start mb-3">
                <FaEnvelope className="me-3 text-primary mt-1" />
                <div>
                  <strong>Email</strong>
                  <p className="mb-0">info@aavinan.com</p>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <FaClock className="me-3 text-primary mt-1" />
                <div>
                  <strong>Working Hours</strong>
                  <p className="mb-0">Mon - Fri: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form with Labels */}
          <div className="col-md-8">
            <div className="p-4 shadow rounded bg-light">
              <form>
                <div className="row mb-3">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label className={`${styles.label} form-label`}>
                      Full Name
                    </label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="col-md-6">
                    <label className={`${styles.label} form-label`}>
                      Email Address
                    </label>
                    <input type="email" className="form-control" required />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label className={`${styles.label} form-label`}>
                      Phone Number
                    </label>
                    <input type="tel" className="form-control" required />
                  </div>
                  <div className="col-md-6">
                    <label className={`${styles.label} form-label`}>
                      Service Needed
                    </label>
                    <select className="form-select">
                      <option value="">Select a service</option>
                      <option>Web Development</option>
                      <option>CRM Systems</option>
                      <option>AI Solutions</option>
                      <option>Learning Platform</option>
                    </select>
                  </div>
                </div>
                <div className="mb-3">
                  <label className={`${styles.label} form-label`}>
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className={`btn btn-primary w-100 ${styles.sendBtn}`}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

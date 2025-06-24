import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styles from "./Footer.module.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "../../assets/LOGO.webp";

export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center pt-4 mt-auto ">
      <div className="container">
        {/* Top Row: 4 Columns */}
        <div className="row text-start text-md-left mb-4">
          {/* Column 1: Brand */}
          <div className="col-12 col-md-3 mb-3 mb-md-0">
            <div className="mb-3">
              <Link className="navbar-brand text-white " to="/">
                <img src={logo} alt="logo" style={{ width: "30px" }} />

                <b className="mx-md-1 text-warning">
                  Aa<span className="text-success">vin</span>
                  <span style={{ color: "#1E40AF" }}>an</span>
                </b>
              </Link>
            </div>
            <p className="small mt-2 text-secondary">
              Empowering businesses with innovative digital solutions.
            </p>
          </div>

          {/* Column 2: Solutions */}
          <div className="col-12 col-md-3 mb-3 mb-md-0">
            <div className="mb-3">
              <h5>
                <strong>Solutions</strong>
              </h5>
            </div>
            <ul className={`${styles.color} list-unstyled`}>
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-secondary text-decoration-none small"
                >
                  Web Development
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-secondary text-decoration-none small"
                >
                  CRM Systems
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-secondary text-decoration-none small"
                >
                  AI Solutions
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  className="text-secondary text-decoration-none small"
                >
                  Learning Platform
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="col-12 col-md-3 mb-3 mb-md-0">
            <div className="mb-3">
              <h5>
                <strong>Company</strong>
              </h5>
            </div>
            <ul className={`${styles.color} list-unstyled`}>
              <li className="mb-2">
                <Link
                  to="/about"
                  className="text-secondary text-decoration-none small"
                >
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-secondary text-decoration-none small"
                >
                  Careers
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-secondary text-decoration-none small"
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  className="text-secondary text-decoration-none small"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: More Links */}

          <div className="col-12 col-md-3 mb-3 mb-md-0">
            <div className="mb-3">
              {" "}
              <h5>
                <strong>Contact</strong>
              </h5>
            </div>

            <p className="small mb-1 text-secondary">Palani, Tamil Nadu</p>
            <p className="small mb-2 text-secondary">info@aavinan.com</p>
            <div className="d-flex justify-content-start gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

         
        </div>

        {/* Bottom Row: Copyright */}
        <div className="row border-top border-secondary py-5 opacity-50">
          <div className="col-12">
            <p className="mb-0 small">
              &copy; 2025{" "}
              <b className=" text-warning">
                Aa<span className="text-success">vin</span>
                <span style={{ color: "#1E40AF" }}>an</span>
              </b>{" "}
              Software Solution Pvt Ltd. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

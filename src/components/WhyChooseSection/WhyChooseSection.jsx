import styles from "./WhyChooseSection.module.css";
import {
  FaMapMarkerAlt,
  FaShieldAlt,
  FaBrain,
  FaHeadset,
} from "react-icons/fa";

const features = [
  {
    icon: <FaMapMarkerAlt />,
    title: "Local Expertise",
    desc: "Deep understanding of local market needs and requirements.",
    color: "#667EEA",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure & Scalable",
    desc: "Enterprise-grade security with solutions that grow with your business.",
    color: "#9F7AEA",
  },
  {
    icon: <FaBrain />,
    title: "AI-Driven Innovation",
    desc: "Cutting-edge AI technology integrated into all our solutions.",
    color: "#38B2AC",
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Support",
    desc: "Round-the-clock technical support and customer service.",
    color: "#ED8936",
  },
];

const WhyChooseSection = () => {
  return (
    <section className=" py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Why Choose Aavinan?</h2>
        </div>

        <div className="row text-center">
          {features.map((item, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3 mb-4">
              <div
                className={styles.iconCircle}
                style={{
                  backgroundColor: `${item.color}20`,
                  color: item.color,
                }}
              >
                {item.icon}
              </div>
              <h5 className="fw-bold mt-3">{item.title}</h5>
              <p className="text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;

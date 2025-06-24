import React from 'react';
import styles from './WhyWorkWithUs.module.css';
import { FaLightbulb, FaExpandArrowsAlt, FaUsers, FaRocket } from 'react-icons/fa';

const reasons = [
  {
    title: 'Innovative Culture',
    description: 'We foster creativity and embrace cutting-edge technologies to solve complex challenges.',
    icon: <FaLightbulb size={28} />,
  },
  {
    title: 'Scalable Solutions',
    description: 'Our solutions grow with your business, ensuring long-term success and adaptability.',
    icon: <FaExpandArrowsAlt size={28} />,
  },
  {
    title: 'Client-Centric Approach',
    description: 'Your success is our priority. We build lasting partnerships through dedicated support.',
    icon: <FaUsers size={28} />,
  },
  {
    title: 'Agile Development',
    description: 'Fast, flexible, and efficient development processes that deliver results quickly.',
    icon: <FaRocket size={28} />,
  },
];

const WhyWorkWithUs = () => {
  return (
    <section className={`py-5 ${styles.whySection}`}>
      <div className="container text-center">
        <h2 className="mb-5">Why Work With Us</h2>
        <div className="row g-4 justify-content-center">
          {reasons.map((item, index) => (
            <div className="col-6 col-md-3" key={index}>
              <div className={`p-3 h-100 ${styles.reasonCard}`}>
                <div className={styles.iconCircle}>{item.icon}</div>
                <h6 className="mt-3 mb-2">{item.title}</h6>
                <p className="small text-muted">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;

import styles from './ServicesSection.module.css';
import { FaCode, FaUsers, FaRobot, FaGraduationCap, FaBullhorn } from 'react-icons/fa';

const services = [
  {
    icon: <FaCode />,
    title: 'Website & Webapp Development',
    desc: 'Custom web solutions built with modern technologies for optimal performance.',
    color: '#5A67D8'
  },
  {
    icon: <FaUsers />,
    title: 'CRM Solutions',
    desc: 'Streamline customer relationships with intelligent CRM systems.',
    color: '#D53F8C'
  },
  {
    icon: <FaRobot />,
    title: 'AI Business Solutions',
    desc: 'Leverage artificial intelligence to automate and optimize business processes.',
    color: '#38B2AC'
  },
  {
    icon: <FaGraduationCap />,
    title: 'Learning Platform',
    desc: 'Interactive educational platforms for skill development and training.',
    color: '#ED8936'
  },
  {
    icon: <FaBullhorn />,
    title: 'Digital Marketing',
    desc: 'Comprehensive digital marketing strategies to grow your online presence.',
    color: '#D53F8C'
  }
];

const ServicesSection = () => {
  return (
    <section className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Our Services</h2>
        <p className="text-muted">Comprehensive solutions for education and business growth</p>
      </div>

      <div className="row gy-4">
        {services.map((service, idx) => (
          <div key={idx} className="col-12 col-sm-6 col-lg-4">
            <div className={`p-4 rounded ${styles.card}`}>
              <div
                className={`${styles.icon}`}
                style={{ backgroundColor: `${service.color}20`, color: service.color }}
              >
                {service.icon}
              </div>
              <h5 className="fw-bold mt-3">{service.title}</h5>
              <p className="text-muted">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;

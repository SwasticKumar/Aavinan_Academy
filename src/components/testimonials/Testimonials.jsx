import styles from "./Testimonials.module.css";
import test1 from '../../assets/t1.webp'
import test2 from '../../assets/t2.webp'
import test3 from '../../assets/t3.webp'
const testimonials = [
  {
    name: "Anandh Kumar",
    role: "CEO, TechStart",
    message:
      "Aavinan transformed our business with their AI solutions. The results exceeded our expectations.",
    image: test1,
  },
  {
    name: "Swastic Kumar",
    role: "Founder, EduTech",
    message:
      "Their learning platform revolutionized how we deliver training to our students.",
    image: test2,
  },
  {
    name: "Prasanth Arun Kumar",
    role: "Director, RetailPlus",
    message:
      "Professional team with excellent technical expertise. Highly recommend their services.",
    image: test3,
  },
];

const Testimonials = () => {
  return (
    <section className="py-5">
      <div className="container text-center">
        <h2 className="mb-5 fw-bold">What Our Clients Say</h2>
        <div className="row justify-content-center g-4">
          {testimonials.map((client, index) => (
            <div className="col-md-4" key={index}>
              <div className={`p-4 h-100 ${styles.testimonialCard}`}>
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={client.image}
                    alt={client.name}
                    className={`rounded-circle ${styles.testimonialImage}`}
                  />
                  <div className="ms-3 text-start">
                    <h6 className="mb-0 fw-semibold">{client.name}</h6>
                    <small className="text-muted">{client.role}</small>
                  </div>
                </div>
                <p className="fst-italic text-start text-muted mb-0">
                  "{client.message}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

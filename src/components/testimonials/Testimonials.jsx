import styles from "./Testimonials.module.css";
import testimonials from "../../data/testimonialsData";

const Testimonials = () => {
  return (
    <section className={`${styles.testimonialsSection}`}>
      <div className={styles.header}>
        <h2 className="fw-bold">What Our Clients Say</h2>
      </div>

      <div className={`${styles.cardWrapper} `}>
        {testimonials.map((client, index) => (
          <div key={index} className={`${styles.card} shadow bg-light`}>
            <div className={styles.clientInfo}>
              <img
                src={client.image}
                alt={client.name}
                className={styles.avatar}
              />
              <div>
                <h4 className={styles.fontsixteen}>{client.name}</h4>
                <p className={styles.fontsixteen}>{client.title}</p>
              </div>
            </div>
            <p className={styles.quote}>"{client.quote}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

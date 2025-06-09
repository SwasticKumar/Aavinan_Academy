import React, { useState } from "react";
import styles from "./ScrollingList.module.css";

const ScrollingList = () => {
  const [hoveredCols, setHoveredCols] = useState([false, false, false]);

  const testimonials = [
    "Client review 1: Excellent service!",
    "Client review 2: Highly recommend.",
    "Client review 3: Loved the quality.",
    "Client review 4: Fast delivery!",
    "Client review 5: Amazing experience.",
  ];

  const handleHover = (index, isHovering) => {
    const updated = [...hoveredCols];
    updated[index] = isHovering;
    setHoveredCols(updated);
  };

  return (
    <div className={`position-relative py-5 ${styles.testimonialSection}`}>
      <div className="container text-center mb-4">
        <h2>What Our Clients Say</h2>
        <p className="text-muted">Hear from those who have experienced our services</p>
      </div>

      {/* Smoke effect */}
      <div className={`${styles.smokeTop}`}></div>
     

      <div className="container">
        <div className="row">
          {[0, 1, 2].map((colIndex) => (
            <div
              key={colIndex}
              className="col-12 col-md-4"
              onMouseEnter={() => handleHover(colIndex, true)}
              onMouseLeave={() => handleHover(colIndex, false)}
            >
              <ul
                className={`list-group ${styles.scrollList} ${
                  hoveredCols[colIndex] ? styles.pauseScroll : ""
                }`}
              >
                {[...testimonials, ...testimonials].map((item, index) => (
                  <li key={index} className={`list-group-item ${styles.testimonialItem}`}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
       <div className={`${styles.smokeBottom}`}></div>
    </div>
  );
};

export default ScrollingList;

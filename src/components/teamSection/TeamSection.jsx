import React from "react";
import styles from "./TeamSection.module.css";
import { FaLinkedin } from "react-icons/fa";
import team1 from '../../assets/anandh.webp'
import team2 from '../../assets/mangai.webp'
import team3 from '../../assets/swastic.webp'
import team4 from '../../assets/t1.webp'
const teamMembers = [
  {
    name: "Anandh Kumar",
    role: "CEO & Founder",
    image: team1, 
    linkedin: "https://www.linkedin.com/in/anandh-kumar-b0087782/",
  },
  {
    name: "Swastic Kumar",
    role: "CTO",
    image: team3,
    linkedin: "https://www.linkedin.com/in/swastic-kumar-a56910157/",
  },
  {
    name: "Michael Rodriguez",
    role: "Product Manager",
    image: team4,
    linkedin: "https://linkedin.com/in/michael-rodriguez",
  },
  {
    name: "Emma Thompson",
    role: "Head of Design",
    image: team2,
    linkedin: "https://linkedin.com/in/emma-thompson",
  },
];

const TeamSection = () => {
  return (
    <section className="py-5">
      <div className="container text-center">
        <h2 className="mb-5">Meet Our Team</h2>
        <div className="row justify-content-center g-4">
          {teamMembers.map((member, index) => (
            <div className="col-6 col-md-3" key={index}>
              <div className={styles.teamMember}>
                <img
                  src={member.image}
                  alt={member.name}
                  className={`img-fluid rounded-circle ${styles.teamImage}`}
                  loading="lazy"
                />
                <h6 className="mt-3 mb-1">{member.name}</h6>
                <p className="text-muted small mb-2">{member.role}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin color="#0a66c2" size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

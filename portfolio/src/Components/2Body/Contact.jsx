import React from "react";
import { Link } from "react-router-dom";

export const Contact = ({ theme }) => {
  return (
    <section id="contact">
      <div className="contact-container" id={theme}>
        <div className="contact-content">
          <div className="contact-reseaux-box">
            <h2>Réseaux</h2>
            <Link
              to="https://www.instagram.com/jordy.rocacher/"
              className="contact-link"
              id={theme}
            >
              Instagram
            </Link>
            <Link to="" className="contact-link" id={theme}>
              LinkdIn
            </Link>
          </div>
          <div className="contact-email-box">
            <h2>Email</h2>
            <Link
              to="mailto:jprogpro7@outlook.com"
              className="contact-link "
              id={theme}
            >
              jprogpro7@outlook.com
            </Link>
          </div>
          <div className="validation" />
        </div>
      </div>
    </section>
  );
};

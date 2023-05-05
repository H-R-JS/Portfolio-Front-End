import React from "react";
import { Link } from "react-router-dom";

export const Contact = ({ theme }) => {
  return (
    <section id="contact">
      <div className="contact-container" id={theme}>
        <h2 className="contact-title" id={theme}>
          Contact
        </h2>
        <div className="contact-content">
          <Link
            to="https://www.instagram.com/jordy.rocacher/"
            className="contact-link"
            id={theme}
          >
            Instagram
          </Link>

          <Link
            to="mailto:jprogpro7@outlook.com"
            className="contact-link "
            id={theme}
          >
            jprogpro7@outlook.com
          </Link>

          <Link className="contact-link" id={theme}>
            LinkedIn
          </Link>

          <div className="validation" />
        </div>
      </div>
    </section>
  );
};

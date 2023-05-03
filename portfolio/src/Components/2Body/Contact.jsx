import React from "react";
import { Link } from "react-router-dom";

export class Contact extends React.Component {
  render() {
    return (
      <section className="contact-container" id="contact">
        <h2>Contact</h2>
        <div className="contact-content">
          <div className="back-link ins">
            <Link className="contact-link">Instagram</Link>
          </div>
          <div className="back-link">
            <Link to="mailto:jprogpro7@outlook.com" className="contact-link ">
              jprogpro7@outlook.com
            </Link>
          </div>
          <div className="back-link lin">
            <Link className="contact-link">LinkedIn</Link>
          </div>
          <div className="validation" />
        </div>
      </section>
    );
  }
}

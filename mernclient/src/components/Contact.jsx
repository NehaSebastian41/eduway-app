import React from 'react';
import './Contact.css'; 

const Contact = () => {
  return (
    <div className="contact-container">
    <h1 className="contact-title">Contact Us</h1>
    <p className="contact-description">
      Have questions, feedback, or need help? We’re here to assist you! Please feel free to reach out to us through any of the methods below.
    </p>

    <h2 className="contact-subtitle">Email Us</h2>
    <p className="contact-text">
      You can email us at <a href="mailto:support@studygroupfinder.com" className="contact-link">support@studygroupfinder.com</a>. We aim to respond to all inquiries within 24 hours.
    </p>

    <h2 className="contact-subtitle">Follow Us</h2>
    <p className="contact-text">
      Stay updated with the latest news and updates by following us on social media:
    </p>
    <ul className="contact-list">
      <li className="contact-list-item">
        <a href="https://www.facebook.com/studygroupfinder" className="contact-link" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
      </li>
      <li className="contact-list-item">
        <a href="https://www.twitter.com/studygroupfinder" className="contact-link" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
      </li>
      <li className="contact-list-item">
        <a href="https://www.instagram.com/studygroupfinder" className="contact-link" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </li>
    </ul>

    <h2 className="contact-subtitle">Visit Us</h2>
    <p className="contact-text">
      Our office is located at 123 Learning Lane, Knowledge City, Education State, 12345. Come by and say hello!
    </p>
  </div>
  );
}

export default Contact

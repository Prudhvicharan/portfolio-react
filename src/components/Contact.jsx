import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ThemeContext from "../context/ThemeContext";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaPaperPlane,
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const { darkTheme } = useContext(ThemeContext);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [formSuccess, setFormSuccess] = useState(null);
  const [activeField, setActiveField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFocus = (field) => {
    setActiveField(field);
  };

  const handleBlur = () => {
    setActiveField(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const emailParams = {
      from_name: formData.name,
      subject: formData.subject || "New Portfolio Contact",
      message: formData.message,
      from_mail: formData.email,
    };

    try {
      const response = await emailjs.send(
        "service_pf",
        "template_portfolio",
        emailParams,
        { publicKey: "xbUKzfuh22RF4N59K" }
      );

      if (response.status === 200) {
        setFormSuccess({
          type: "success",
          message: "Message Sent Successfully!",
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setFormSuccess({
        type: "error",
        message: "Error sending email. Please try again.",
      });
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setFormSuccess(null);
      }, 5000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className={`contact-container ${darkTheme ? "dark" : ""}`}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        <FaEnvelope className="section-icon" /> Get In Touch
      </motion.h2>

      <motion.div
        ref={ref}
        className="contact-content"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="contact-info" variants={itemVariants}>
          <div className="info-card">
            <div className="info-header">
              <h3>Let's Connect</h3>
              <p>
                Feel free to reach out for opportunities, questions, or just to
                say hello!
              </p>
            </div>

            <div className="info-items">
              <div className="contact-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>johndoe@example.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>+1 (123) 456-7890</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>San Francisco, CA</p>
                </div>
              </div>
            </div>

            <div className="social-profiles">
              <h4>My Profiles</h4>
              <div className="social-links">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div className="contact-form-wrapper" variants={itemVariants}>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div
              className={`form-group ${activeField === "name" ? "active" : ""}`}
            >
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => handleFocus("name")}
                onBlur={handleBlur}
                required
              />
            </div>

            <div
              className={`form-group ${
                activeField === "email" ? "active" : ""
              }`}
            >
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => handleFocus("email")}
                onBlur={handleBlur}
                required
              />
            </div>

            <div
              className={`form-group ${
                activeField === "subject" ? "active" : ""
              }`}
            >
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                onFocus={() => handleFocus("subject")}
                onBlur={handleBlur}
              />
            </div>

            <div
              className={`form-group ${
                activeField === "message" ? "active" : ""
              }`}
            >
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => handleFocus("message")}
                onBlur={handleBlur}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className={`send-button ${isLoading ? "loading" : ""}`}
              disabled={isLoading}
            >
              <span className="button-text">
                {isLoading ? "Sending..." : "Send Message"}
              </span>
              <span className="button-icon">
                <FaPaperPlane />
              </span>
            </button>

            {formSuccess && (
              <div className={`form-message ${formSuccess.type}`}>
                {formSuccess.message}
              </div>
            )}
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;

import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ThemeContext from "../context/ThemeContext";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import emailjs from "@emailjs/browser";
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
        <FaEnvelope className="section-icon" /> Contact Me
      </motion.h2>

      <motion.div
        ref={ref}
        className="contact-content"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="contact-info" variants={itemVariants}>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <div>
              <h3>Email</h3>
              <p>johndoe@example.com</p>
            </div>
          </div>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <div>
              <h3>Phone</h3>
              <p>+1 (123) 456-7890</p>
            </div>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <div>
              <h3>Location</h3>
              <p>San Francisco, CA</p>
            </div>
          </div>
        </motion.div>

        <motion.form
          className="contact-form"
          variants={itemVariants}
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className={`send-button ${isLoading ? "loading" : ""}`}
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>

          {formSuccess && (
            <div className={`form-message ${formSuccess.type}`}>
              {formSuccess.message}
            </div>
          )}
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Contact;

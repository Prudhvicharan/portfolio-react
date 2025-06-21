import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import SectionTitle from "./common/SectionTitle";
import "./Contact.css";

const contactInfo = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    text: "bunnycharanprudhvi@gmail.com",
    link: "mailto:bunnycharanprudhvi@gmail.com",
  },
  {
    icon: <FaPhone />,
    title: "Phone",
    text: "+1 (123) 456-7890",
    link: "tel:+11234567890",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    text: "San Francisco, CA",
    link: "https://www.google.com/maps/place/San+Francisco,+CA",
  },
];

const socialLinks = [
  { icon: <FaLinkedin />, href: "https://linkedin.com" },
  { icon: <FaGithub />, href: "https://github.com" },
  { icon: <FaTwitter />, href: "https://twitter.com" },
];

const Contact = () => {
  const { ref, inView } = useInView({
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
    setFormData({ ...formData, [name]: value });
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
        setFormData({ name: "", email: "", subject: "", message: "" });
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
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="contact-section" id="contact" ref={ref}>
      <div className="container">
        <SectionTitle>Get In Touch</SectionTitle>
        <motion.p
          className="contact-intro"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Feel free to reach out for opportunities, questions, or just to say
          hello!
        </motion.p>

        <motion.div
          className="contact-container"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="contact-info-cards" variants={itemVariants}>
            {contactInfo.map((info, index) => (
              <a
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card-link"
                key={index}
              >
                <div className="contact-card">
                  <div className="contact-card-icon">{info.icon}</div>
                  <div>
                    <h3 className="contact-card-title">{info.title}</h3>
                    <p className="contact-card-text">{info.text}</p>
                  </div>
                </div>
              </a>
            ))}
            <div className="social-profiles">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="contact-form-container"
            variants={itemVariants}
          >
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="name">Your Name</label>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="email">Your Email</label>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="subject">Subject</label>
              </div>
              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <label htmlFor="message">Your Message</label>
              </div>

              <button
                type="submit"
                className={`btn btn-primary send-button ${
                  isLoading ? "loading" : ""
                }`}
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
    </div>
  );
};

export default Contact;

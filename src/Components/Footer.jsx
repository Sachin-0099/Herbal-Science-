import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = () => {
    if (email && email.includes("@")) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail("");
    } else {
      alert("Please enter a valid email address.");
    }
  };

  const shopLinks = [
    { name: "Skin", path: "/shop/skin" },
    { name: "Hairfall", path: "/shop/hairfall" },
    { name: "Joint & Muscle Care", path: "/shop/joint-muscle" },
    { name: "Joint Pain", path: "/shop/joint-pain" },
    { name: "Sexual", path: "/shop/sexual" },
    { name: "Diabetic", path: "/shop/diabetic" },
  ];

  const aboutLinks = [
    { name: "Our Story", path: "/our-story" },
    { name: "The HS Blog - Our Beauty Journal", path: "/about/hs-blog" },
    { name: "Gifting", path: "/about/gifting" },
    { name: "Ingredients", path: "/about/ingredients" },
    { name: "Recycle With Just Herbs", path: "/about/recycle" },
    { name: "Hotel Partnerships", path: "/about/hotels" },
    { name: "Refer & Earn", path: "/about/refer-earn" },
    { name: "Loyalty Program", path: "/about/loyalty" },
  ];

  const helpLinks = [
    { name: "Contact Us", path: "/help/contact" },
    { name: "Privacy Policy", path: "/help/privacy-policy" },
    { name: "Refund Policy", path: "/help/refund-policy" },
    { name: "Shipping Policy", path: "/help/shipping-policy" },
    { name: "Terms of Service", path: "/help/terms" },
    { name: "Track Your Order", path: "/help/track-order" },
  ];

  return (
    <footer style={{ backgroundColor: "#fef9f6", padding: "3rem 2rem" }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "2rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Herbal Science Info */}
        <div>
          <h2 style={{ fontWeight: "bold", fontSize: "1.5rem", color: "#228B22" }}>
            Herbal Science
          </h2>
          <p style={{ marginTop: "1rem", lineHeight: "1.6", color: "#333" }}>
            A line of pure, bespoke and Ayurvedic results-driven skin and hair care…
            <Link to="/about" style={{ color: "#864f43", textDecoration: "underline", marginLeft: 5 }}>
              read more
            </Link>
          </p>
        </div>

        {/* SHOP */}
        <div>
          <h3 style={{ fontWeight: "bold", fontSize: "1.2rem", color: "#228B22" }}>SHOP</h3>
          <ul style={{ marginTop: "1rem", listStyle: "none", padding: 0 }}>
            {shopLinks.map(({ name, path }) => (
              <li key={name} style={{ marginBottom: "0.5rem" }}>
                <Link
                  to={path}
                  style={{ color: "#333", textDecoration: "none" }}
                  onMouseEnter={(e) => (e.target.style.color = "#864f43")}
                  onMouseLeave={(e) => (e.target.style.color = "#333")}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ABOUT */}
        <div>
          <h3 style={{ fontWeight: "bold", fontSize: "1.2rem", color: "#228B22" }}>ABOUT</h3>
          <ul style={{ marginTop: "1rem", listStyle: "none", padding: 0 }}>
            {aboutLinks.map(({ name, path }) => (
              <li key={name} style={{ marginBottom: "0.5rem" }}>
                <Link
                  to={path}
                  style={{ color: "#333", textDecoration: "none" }}
                  onMouseEnter={(e) => (e.target.style.color = "#864f43")}
                  onMouseLeave={(e) => (e.target.style.color = "#333")}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* HELP */}
        <div>
          <h3 style={{ fontWeight: "bold", fontSize: "1.2rem", color: "#228B22" }}>HELP</h3>
          <ul style={{ marginTop: "1rem", listStyle: "none", padding: 0 }}>
            {helpLinks.map(({ name, path }) => (
              <li key={name} style={{ marginBottom: "0.5rem" }}>
                <Link
                  to={path}
                  style={{ color: "#333", textDecoration: "none" }}
                  onMouseEnter={(e) => (e.target.style.color = "#864f43")}
                  onMouseLeave={(e) => (e.target.style.color = "#333")}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 style={{ fontWeight: "bold", fontSize: "1.2rem", color: "#228B22" }}>STAY UPDATED</h3>
          <p style={{ marginTop: "1rem", color: "#333", lineHeight: "1.6" }}>
            Sign up for our newsletter to know about launches & offers!
          </p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            style={{
              padding: "0.8rem",
              borderRadius: "8px",
              border: "1px solid #b0897e",
              width: "100%",
              marginTop: "1rem",
              marginBottom: "0.8rem",
            }}
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSubscribe}
            style={{
              backgroundColor: "#228B22",
              color: "#fff",
              padding: "0.8rem 2rem",
              borderRadius: "30px",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
              width: "100%",
            }}
          >
            {submitted ? "THANK YOU!" : "SUBSCRIBE"}
          </motion.button>

          {/* Social Icons */}
          <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem" }}>
            {[
              { icon: "facebook", link: "https://facebook.com" },
              { icon: "instagram", link: "https://instagram.com" },
              { icon: "twitter", link: "https://twitter.com" },
              { icon: "youtube", link: "https://youtube.com" },
              { icon: "pinterest", link: "https://pinterest.com" },
            ].map(({ icon, link }) => (
              <a
                key={icon}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#2c2c2c" }}
              >
                <i className={`fab fa-${icon}`} style={{ fontSize: "1.4rem" }}></i>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;

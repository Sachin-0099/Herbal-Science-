import React, { useState } from "react";
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
          <h2 style={{ fontWeight: "bold", fontSize: "1.5rem", color: "#2c2c2c" }}>
            Herbal Science
          </h2>
          <p style={{ marginTop: "1rem", lineHeight: "1.6", color: "#333" }}>
            A line of pure, bespoke and Ayurvedic results-driven skin and hair care…
            <a href="#" style={{ color: "#864f43", textDecoration: "underline", marginLeft: 5 }}>
              read more
            </a>
          </p>
        </div>

        {/* SHOP */}
        <div>
          <h3 style={{ fontWeight: "bold", fontSize: "1.2rem", color: "#2c2c2c" }}>SHOP</h3>
          <ul style={{ marginTop: "1rem", listStyle: "none", padding: 0 }}>
            {["Skin", "Hair", "Bath & Body", "Natural Makeup", "Pure Fragrances", "Festive Giftings"].map((item) => (
              <li
                key={item}
                style={{ marginBottom: "0.5rem", color: "#333", cursor: "pointer" }}
                onMouseEnter={(e) => (e.target.style.color = "#864f43")}
                onMouseLeave={(e) => (e.target.style.color = "#333")}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ABOUT */}
        <div>
          <h3 style={{ fontWeight: "bold", fontSize: "1.2rem", color: "#2c2c2c" }}>ABOUT</h3>
          <ul style={{ marginTop: "1rem", listStyle: "none", padding: 0 }}>
            {[
              "Our Story",
              "The JH Edit - Our Beauty Journal",
              "Gifting",
              "Ingredients",
              "Recycle With Just Herbs",
              "Hotel Partnerships",
              "Refer & Earn",
              "Loyalty Program",
            ].map((item) => (
              <li
                key={item}
                style={{ marginBottom: "0.5rem", color: "#333", cursor: "pointer" }}
                onMouseEnter={(e) => (e.target.style.color = "#864f43")}
                onMouseLeave={(e) => (e.target.style.color = "#333")}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* HELP */}
        <div>
          <h3 style={{ fontWeight: "bold", fontSize: "1.2rem", color: "#2c2c2c" }}>HELP</h3>
          <ul style={{ marginTop: "1rem", listStyle: "none", padding: 0 }}>
            {[
              "Contact Us",
              "Privacy Policy",
              "Refund Policy",
              "Shipping Policy",
              "Terms of Service",
              "Track Your Order",
            ].map((item) => (
              <li
                key={item}
                style={{ marginBottom: "0.5rem", color: "#333", cursor: "pointer" }}
                onMouseEnter={(e) => (e.target.style.color = "#864f43")}
                onMouseLeave={(e) => (e.target.style.color = "#333")}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 style={{ fontWeight: "bold", fontSize: "1.2rem", color: "#2c2c2c" }}>STAY UPDATED</h3>
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
              backgroundColor: "#864f43",
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

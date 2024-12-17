import React from "react";

const Footer = () => {
  return (
    <footer style={{ paddingTop: "16px", paddingBottom: "16px", backgroundColor: "#0f0715" }}>
      <div>
        <img
          src="public/_ DEVxNET.png"
          alt="logo"
          style={{ margin: "0 auto", display: "block", width: "auto", height: "auto", maxWidth: "180px", maxHeight: "180px" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          color: "white",
          fontWeight: "bold",
          paddingTop: "20px",
        }}
      >
        <div style={{ padding: "14px" }}>
          <a href="#home" style={{ textDecoration: "none", color: "white" }}>Home</a>
        </div>
        <div style={{ padding: "14px" }}>
          <a href="#services" style={{ textDecoration: "none", color: "white" }}>Services</a>
        </div>
        <div style={{ padding: "14px" }}>
          <a href="#projects" style={{ textDecoration: "none", color: "white" }}>Projects</a>
        </div>
        <div style={{ padding: "14px" }}>
          <a href="#reviews" style={{ textDecoration: "none", color: "white" }}>Reviews</a>
        </div>
        <div style={{ padding: "14px" }}>
          <a href="#contact" style={{ textDecoration: "none", color: "white" }}>Contact</a>
        </div>
      </div>
      <p
        style={{
          color: "rgba(255, 255, 255, 0.6)",
          marginTop: "24px",
          textAlign: "center",
        }}
      >
        © 2024 All Rights Reserved by DEVxNET
      </p>
    </footer>
  );
};

export default Footer;

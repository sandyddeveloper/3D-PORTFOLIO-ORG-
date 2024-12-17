import React from "react";

function HireMeButton() {
  const handleEmailRedirect = () => {
    const email = "santhoshrajk1812@gmail.com";
    const subject = "Hiring Inquiry";
    const body = `Hi Santhoshrajk,

I would like to hire you for...

Here are the details of my project:

[Add project details here]

Best regards,
[Your Name]`;

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <button
      className="hireme"
      onClick={handleEmailRedirect}
      style={{
        display: "inline-block",
        padding: "15px 30px",
        backgroundColor: "#4b0082",
        color: "white",
        borderRadius: "30px",
        fontWeight: "bold",
        fontSize: "18px",
        border: "none",
        cursor: "pointer",
        textTransform: "uppercase",
        letterSpacing: "1.5px",
        position: "relative",
        overflow: "hidden",
        zIndex: 1,
      }}
      onMouseEnter={(e) => {
        e.target.style.boxShadow = "0 0 20px #a855f7, 0 0 40px #7c3aed";
      }}
      onMouseLeave={(e) => {
        e.target.style.boxShadow = "none";
      }}
    >
      <span
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(45deg, #a855f7, #7c3aed, #6d28d9)",
          zIndex: -1,
          filter: "blur(15px)",
          opacity: 0,
          transition: "opacity 0.3s ease-in-out",
        }}
        className="glow"
      ></span>
      Hire Me
    </button>
  );
}

export default HireMeButton;

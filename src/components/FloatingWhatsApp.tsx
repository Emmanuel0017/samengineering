import React from "react";
import "./FloatingButtons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const PHONE_NUMBER = "265994002138"; 
const MESSAGE = encodeURIComponent(
  "Hello, I would like to inquire about your engineering services. From S.A.M Engineering website"
);

const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={`https://wa.me/${PHONE_NUMBER}?text=${MESSAGE}`}
      className="floating-btn whatsapp"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FontAwesomeIcon icon={faWhatsapp} />
    </a>
  );
};

export default FloatingWhatsApp;

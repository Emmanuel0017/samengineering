import React from "react";
import "./FloatingButtons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";

interface Props {
  onClick: () => void;
}

const FloatingChatbotButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button
      className="floating-btn chatbot"
      onClick={onClick}
      aria-label="Open chatbot"
    >
      <FontAwesomeIcon icon={faComments} />
    </button>
  );
};

export default FloatingChatbotButton;

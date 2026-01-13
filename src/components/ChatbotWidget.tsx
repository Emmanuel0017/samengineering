import React, { useState } from "react";
// import Chatbot from "./Chatbot"; 
import FloatingChatbotButton from "./FloatingChatbotButton";
import FloatingWhatsApp from "./FloatingWhatsApp";
import "./ChatbotWidget.css";

const ChatbotWidget: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <FloatingWhatsApp />

      <FloatingChatbotButton onClick={() => setOpen(!open)} />

      {/* {open && (
        <div className="chatbot-widget">
          <div className="chatbot-header">
            <span>S.A.M Engineering Assistant</span>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>
          <Chatbot />
        </div>
      )} */}
    </>
  );
};

export default ChatbotWidget;

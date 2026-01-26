import { useState, JSX } from "react";
import "./Chatbot.css";

type Sender = "user" | "bot";

interface Message {
  from: Sender;
  text: string | JSX.Element;
}

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "bot",
      text: "Hello 👋 How can S.A.M Engineering assist you today?",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userText = input.trim();

    // Clear input immediately
    setInput("");
    setLoading(true);

    // Add user message
    setMessages((prev) => [
      ...prev,
      { from: "user", text: userText },
    ]);

    try {
      const res = await fetch(
        "https://chatbot-wzhx.onrender.com/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text: userText, // must match FastAPI schema
          }),
        }
      );

      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }

      const data = await res.json();

      // Add bot response
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: data.response || "No response from server.",
        },
      ]);
    } catch (error) {
      console.error("Chatbot error:", error);

      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: (
            <>
              Sorry, I can’t help you right now. Please{" "}
              <a
                href="/contact"
                style={{
                  color: "#007bff",
                  textDecoration: "underline",
                }}
              >
                contact us
              </a>{" "}
              directly.
            </>
          ),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Send on Enter key
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="chatbot">
      <div className="messages">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`message ${m.from}`}
          >
            {typeof m.text === "string" ? m.text : m.text}
          </div>
        ))}

        {loading && (
          <div className="message bot">
            Typing...
          </div>
        )}
      </div>

      <div className="input-row">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask about our services..."
          disabled={loading}
        />

        <button
          onClick={sendMessage}
          disabled={loading}
        >
          Send
        </button>
      </div>
    </div>
  );
}

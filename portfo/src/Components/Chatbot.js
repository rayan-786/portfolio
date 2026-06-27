import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { MessageCircle, X, Send } from "lucide-react";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "👋 Hi! I'm Rayan AI. Ask me about my skills, projects, experience or resume.",
    },
  ]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!message.trim() || loading) return;

    const currentMessage = message;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: currentMessage,
      },
    ]);

    setMessage("");
    setLoading(true);

    try {
      const res = await axios.post(
        "https://legend-back.duckdns.org/api/chat",
        {
          message: currentMessage,
        }
      );

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text:
            res.data.reply ||
            "Sorry, I couldn't generate a response.",
        },
      ]);
    } catch (err) {
      console.error(err);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text:
            "Backend is not connected. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
fixed
bottom-5
right-5
z-50
bg-cyan-500
hover:bg-cyan-400
text-white
p-4
rounded-full
shadow-xl
transition-all
"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}

      {isOpen && (
        <div
          className="
            fixed
            bottom-40
            right-2
            left-2
            md:left-auto
            md:right-5
            md:bottom-24
            z-50
            h-[70vh]
            max-h-[600px]
            md:h-[500px]
            md:w-[350px]
            bg-slate-900
            border
            border-slate-700
            rounded-2xl
            shadow-2xl
            overflow-hidden
          "
        >
          {/* Header */}

          <div className="bg-slate-800 border-b border-slate-700 p-4">
            <h2 className="text-white font-semibold">
              🤖 Rayan AI Assistant
            </h2>

            <p className="text-xs text-gray-400">
              Ask me anything about Rayan
            </p>
          </div>

          {/* Messages */}

          <div className="h-[calc(100%-130px)] overflow-y-auto p-4 space-y-3">

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2 rounded-xl text-sm ${
                    msg.role === "user"
                      ? "bg-cyan-500 text-white"
                      : "bg-slate-800 text-gray-200"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Loading */}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-slate-800 text-gray-300 px-4 py-2 rounded-xl text-sm flex items-center gap-3">

                  <div className="flex gap-1">
                    <span
                      className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce"
                    ></span>

                    <span
                      className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce"
                      style={{
                        animationDelay: "0.15s",
                      }}
                    ></span>

                    <span
                      className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce"
                      style={{
                        animationDelay: "0.3s",
                      }}
                    ></span>
                  </div>

                  <span className="italic">
                    Searching...
                  </span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}

          <div className="absolute bottom-0 left-0 right-0 border-t border-slate-700 bg-slate-900 p-3">
            <div className="flex gap-2">

              <input
                type="text"
                placeholder={
                  loading
                    ? "Please wait..."
                    : "Ask something..."
                }
                value={message}
                disabled={loading}
                onChange={(e) =>
                  setMessage(e.target.value)
                }
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  !loading &&
                  sendMessage()
                }
                className="flex-1 bg-slate-800 disabled:opacity-60 text-white px-3 py-2 rounded-lg outline-none"
              />

              <button
                onClick={sendMessage}
                disabled={loading}
                className="bg-cyan-500 hover:bg-cyan-400 disabled:bg-slate-700 disabled:cursor-not-allowed text-white p-2 rounded-lg transition"
              >
                <Send size={18} />
              </button>

            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;
import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello! 👋 Welcome to Raj Photo Studio. I'm here to help you with any questions about our photography services, pricing, or bookings. How can I assist you today?",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();
    setInputValue("");

    const newMessages = [...messages, { role: "user", content: userMessage }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const response = await fetch("http://backend:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
          chatHistory: newMessages.slice(-10),
        }),
      });

      const data = await response.json();

      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content:
            data.response ||
            "I'm sorry, I couldn't process your request. Please try again.",
        },
      ]);
    } catch (error) {
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content:
            "I'm sorry, I'm having trouble connecting. Please try again later or contact us at +91 98765 43210.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300 border border-amber-300 ${
          isOpen
            ? "bg-amber-600 hover:bg-amber-700"
            : "bg-yellow-500 hover:bg-yellow-600"
        }`}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 h-[500px] bg-amber-50 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-amber-200">
          {/* Header */}
          <div className="bg-amber-500 bg-gradient-to-r from-yellow-400 to-amber-500 p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center shadow-md">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-white font-bold">
                AI Assistant Raj Photo Studio
              </h3>
              <p className="text-amber-100 text-sm">Online</p>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-amber-50 via-yellow-50 to-amber-100">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex items-start gap-2 ${
                  message.role === "user" ? "flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm ${
                    message.role === "user"
                      ? "bg-amber-200"
                      : "bg-yellow-300"
                  }`}
                >
                  {message.role === "user" ? (
                    <User className="w-4 h-4 text-amber-900" />
                  ) : (
                    <Bot className="w-4 h-4 text-amber-900" />
                  )}
                </div>
                <div
                  className={`max-w-[75%] p-3 rounded-2xl text-sm ${
                    message.role === "user"
                      ? "bg-amber-500 text-white rounded-tr-none"
                      : "bg-yellow-100 text-amber-900 rounded-tl-none border border-yellow-200"
                  }`}
                >
                  <p className="whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-full bg-amber-300 flex items-center justify-center shadow-sm">
                  <Bot className="w-4 h-4 text-amber-900" />
                </div>
                <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-2xl rounded-tl-none shadow-sm">
                  <div className="flex space-x-1">
                    <div
                      className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    />
                    <div
                      className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    />
                    <div
                      className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form
            onSubmit={handleSubmit}
            className="p-4 bg-amber-50 border-t border-amber-200"
          >
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-amber-300 rounded-full bg-white/90 text-amber-900 placeholder:amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent text-sm"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isLoading}
                className="p-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md"
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;

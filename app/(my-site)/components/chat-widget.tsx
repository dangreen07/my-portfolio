"use client";

import { useState, useRef, useEffect } from "react";
import Markdown from "react-markdown";

interface WidgetMessage {
  id: string;
  role: string;
  content: string;
}

interface WidgetProps {
  clientId: string;
  appSlug?: string;
  apiUrl?: string;
}

const CONVERSATION_KEY = "sa_conversation_id";

export default function ChatWidget({ clientId, appSlug = "site-assistant", apiUrl }: WidgetProps) {
  const API = apiUrl;
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<WidgetMessage[]>([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem(CONVERSATION_KEY);
    if (stored) setConversationId(stored);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  async function handleSend(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() || sending) return;

    const text = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { id: "temp", role: "user", content: text }]);
    setSending(true);

    try {
      const res = await fetch(`${API}/api/apps/site-assistant/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          conversationId,
          message: text,
          clientId,
          appSlug,
        }),
      });

      if (!res.ok) throw new Error("Failed to send message");

      const data = await res.json();
      setConversationId(data.conversationId);
      localStorage.setItem(CONVERSATION_KEY, data.conversationId);
      setMessages((prev) => [
        ...prev.filter((m) => m.id !== "temp"),
        { id: "temp", role: "user", content: text },
        { id: data.message.id, role: data.message.role, content: data.message.content },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev.filter((m) => m.id !== "temp"),
        { id: "temp", role: "user", content: text },
        { id: "error", role: "assistant", content: "Sorry, something went wrong. Please try again." },
      ]);
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <style>{`
        .sa-widget-btn {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 9999;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #18181b;
          color: white;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          transition: transform 0.2s;
        }
        .sa-widget-btn:hover { transform: scale(1.05); }
        .sa-widget-panel {
          position: fixed;
          bottom: 92px;
          right: 24px;
          z-index: 9999;
          width: 360px;
          height: 520px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.12);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          animation: sa-slide-up 0.2s ease-out;
        }
        @keyframes sa-slide-up {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .sa-header {
          padding: 16px;
          background: #18181b;
          color: white;
          font-weight: 600;
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .sa-messages {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .sa-message {
          max-width: 80%;
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 13px;
          line-height: 1.4;
        }
        .sa-message.user {
          align-self: flex-end;
          background: #18181b;
          color: white;
        }
        .sa-message.assistant {
          align-self: flex-start;
          background: #f4f4f5;
          color: #09090b;
        }
        .sa-message.assistant p { margin: 0 0 0.5em; }
        .sa-message.assistant p:last-child { margin-bottom: 0; }
        .sa-message.assistant ul,
        .sa-message.assistant ol { margin: 0.5em 0; padding-left: 1.5em; list-style-type: disc; }
        .sa-message.assistant ol { list-style-type: decimal; }
        .sa-message.assistant li { margin: 0.25em 0; }
        .sa-message.assistant code {
          background: #e4e4e7;
          padding: 0.15em 0.35em;
          border-radius: 4px;
          font-size: 0.9em;
        }
        .sa-message.assistant pre {
          background: #18181b;
          color: #fafafa;
          padding: 8px 12px;
          border-radius: 6px;
          overflow-x: auto;
          margin: 0.5em 0;
        }
        .sa-message.assistant pre code {
          background: none;
          padding: 0;
          color: inherit;
        }
        .sa-message.assistant h1,
        .sa-message.assistant h2,
        .sa-message.assistant h3 {
          font-weight: 600;
          margin: 0.75em 0 0.25em;
        }
        .sa-message.assistant h1 { font-size: 1.1em; }
        .sa-message.assistant h2 { font-size: 1.05em; }
        .sa-message.assistant h3 { font-size: 1em; }
        .sa-message.assistant blockquote {
          border-left: 3px solid #d4d4d8;
          margin: 0.5em 0;
          padding: 0.25em 0 0.25em 0.75em;
          color: #52525b;
        }
        .sa-message.assistant a {
          color: #2563eb;
          text-decoration: underline;
        }
        .sa-input-area {
          display: flex;
          gap: 8px;
          padding: 12px 16px;
          border-top: 1px solid #e4e4e7;
        }
        .sa-input-area input {
          flex: 1;
          padding: 8px 12px;
          border: 1px solid #e4e4e7;
          border-radius: 8px;
          font-size: 13px;
          outline: none;
        }
        .sa-input-area input:focus {
          border-color: #18181b;
        }
        .sa-input-area button {
          padding: 8px 16px;
          background: #18181b;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 13px;
          cursor: pointer;
        }
        .sa-input-area button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .sa-close {
          margin-left: auto;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          font-size: 18px;
          padding: 0 4px;
        }
      `}</style>

      {open && (
        <div className="sa-widget-panel">
          <div className="sa-header">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="14" rx="2" />
              <path d="M21 9H3" />
              <path d="M8 21h8" />
              <path d="M12 17v4" />
            </svg>
            Support
            <button className="sa-close" onClick={() => setOpen(false)}>&times;</button>
          </div>
          <div className="sa-messages" ref={scrollRef}>
            {messages.length === 0 && (
              <div style={{ textAlign: "center", color: "#71717a", fontSize: 13, padding: "24px 0" }}>
                Hi! How can we help you today?
              </div>
            )}
            {messages.map((msg, i) => (
              <div key={msg.id || i} className={`sa-message ${msg.role}`}>
                <Markdown>{msg.content}</Markdown>
              </div>
            ))}
            {sending && (
              <div className="sa-message assistant" style={{ opacity: 0.6 }}>
                Typing...
              </div>
            )}
          </div>
          <form className="sa-input-area" onSubmit={handleSend}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              disabled={sending}
            />
            <button type="submit" disabled={sending || !input.trim()}>
              Send
            </button>
          </form>
        </div>
      )}

      <button className="sa-widget-btn" onClick={() => setOpen(!open)}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </button>
    </>
  );
}

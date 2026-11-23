"use client";

import React, { useState } from "react";
import { MessageSquare, Phone, X, Send, Bot, ExternalLink, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  links?: { label: string; href: string }[];
}

interface FloatingWidgetsProps {
  currentProduct?: string;
  onOpenQuoteModal?: (productName?: string) => void;
}

export default function FloatingWidgets({ currentProduct, onOpenQuoteModal }: FloatingWidgetsProps) {
  const [chatOpen, setChatOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      sender: "bot",
      text: "Welcome to Alutecksystems! How can we assist you with your project today?",
      links: [
        { label: "Explore Aluminium Systems", href: "/products/system-aluminium" },
        { label: "Explore Façade Systems", href: "/products/facade-systems" },
        { label: "Request a Quote", href: "/#enquiry" },
        { label: "Track a Complaint", href: "/customer-complaint" },
      ],
    },
  ]);

  const whatsappMessage = currentProduct
    ? `Hello Alutecksystems, I would like more information and a technical consultation regarding the ${currentProduct} system.`
    : "Hello Alutecksystems, I would like more information about your aluminium window, door and façade solutions.";

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(whatsappMessage)}`;

  const quickActions = [
    { label: "Explore Aluminium Systems", query: "Tell me about Aluminium Windows & Doors" },
    { label: "Explore Façade Systems", query: "What Façade solutions do you offer?" },
    { label: "Request a Quote", query: "I want to get a project quotation" },
    { label: "Installation Support", query: "What is your installation process?" },
    { label: "Customer Complaints", query: "How do I register a complaint?" },
    { label: "Talk to Our Team", query: "Connect me with an engineer" },
  ];

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputValue.trim();
    if (!text) return;

    // Add user message
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: "user",
      text,
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue("");

    // Simulate smart bot response based on verified catalogue knowledge
    setTimeout(() => {
      let botResponse: ChatMessage;
      const lower = text.toLowerCase();

      if (lower.includes("aluminium") || lower.includes("sliding") || lower.includes("cs.") || lower.includes("cos.")) {
        botResponse = {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: "We offer 4 distinct Aluminium product families across 11 series: Slim Series (CS.25, CS.29, CS.32, CS.37), Opulence Series (COS.28, COS.35, COS.49), Casement Series (CC.40, CC.50, COC.40), and Bifold S&F 50. Which system would you like to explore?",
          links: [
            { label: "View Aluminium Catalogue", href: "/products/system-aluminium" },
            { label: "CS.25 Slim 25mm System", href: "/products/system-aluminium/cs-25" },
            { label: "COS.49 Heavy Opulence", href: "/products/system-aluminium/cos-49" },
          ],
        };
      } else if (lower.includes("facade") || lower.includes("façade") || lower.includes("glazing") || lower.includes("curtain")) {
        botResponse = {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: "Our Façade Systems incorporate Saint-Gobain architectural glass and Jindal 6063-T6 aluminium extrusions. We deliver Structural Glazing, Curtain Wall Glazing, Spider Glazing, ACP Elevations, Partitions, Canopies, Skylights, and Façade Louvers.",
          links: [
            { label: "View All 8 Façade Systems", href: "/products/facade-systems" },
            { label: "Structural Glazing", href: "/products/facade-systems/structural-glazing" },
            { label: "Curtain Wall Glazing", href: "/products/facade-systems/curtain-wall-glazing" },
          ],
        };
      } else if (lower.includes("quote") || lower.includes("pricing") || lower.includes("cost") || lower.includes("consultation")) {
        botResponse = {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: "To give you an accurate architectural quote, we calculate panel dimensions, wind load criteria, and glass specifications. You can submit your requirements directly or connect on WhatsApp.",
          links: [
            { label: "Submit Enquiry Form", href: "/#enquiry" },
            { label: "Chat on WhatsApp", href: whatsappUrl },
          ],
        };
      } else if (lower.includes("complaint") || lower.includes("service") || lower.includes("issue")) {
        botResponse = {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: "You can lodge an official complaint ticket on our Customer Complaint portal. You will receive a unique tracking reference (ALT-CMP-XXXX) to track inspection and resolution status.",
          links: [{ label: "Open Complaint Portal", href: "/customer-complaint" }],
        };
      } else if (lower.includes("installation") || lower.includes("support")) {
        botResponse = {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: "Our certified installation process includes 6 key stages: Site laser measurement, planning, trained factory teams, water-tightness and lock quality checks, maintenance guidance, and after-sales support.",
          links: [{ label: "View Installation Details", href: "/#support" }],
        };
      } else {
        botResponse = {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: "Thank you for connecting with Alutecksystems. Our technical advisors are ready to assist with project shop drawings, material schedules, and quotations.",
          links: [
            { label: "Call Us: " + COMPANY_INFO.phone, href: `tel:${COMPANY_INFO.phone}` },
            { label: "Chat via WhatsApp", href: whatsappUrl },
            { label: "Explore Projects", href: "/projects" },
          ],
        };
      }

      setMessages((prev) => [...prev, botResponse]);
    }, 400);
  };

  return (
    <>
      {/* Floating Buttons: WhatsApp, Call, Chatbot */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        {/* Call Button (Click-to-Call) */}
        <a
          href={`tel:${COMPANY_INFO.phone}`}
          className="w-12 h-12 rounded-full bg-graphite hover:bg-graphite-light border border-graphite-border shadow-xl flex items-center justify-center text-gold hover:text-white transition-all transform hover:scale-105 group relative"
          aria-label="Call Alutecksystems"
        >
          <Phone className="w-5 h-5" />
          <span className="absolute right-14 bg-graphite border border-graphite-border text-white text-xs px-2.5 py-1 rounded shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Call {COMPANY_INFO.phone}
          </span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-xl flex items-center justify-center transition-all transform hover:scale-105 group relative"
          aria-label="Chat on WhatsApp"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
          <span className="absolute right-14 bg-graphite border border-graphite-border text-white text-xs px-2.5 py-1 rounded shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            WhatsApp Us
          </span>
        </a>

        {/* Chatbot Toggle Button */}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="w-13 h-13 px-4 py-3 rounded-full bg-gradient-to-r from-gold to-gold-dark hover:from-gold-light hover:to-gold text-charcoal shadow-2xl flex items-center gap-2 font-heading font-semibold text-xs transition-all transform hover:scale-105"
          aria-label="Open Chatbot"
        >
          {chatOpen ? <X className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
          <span className="hidden sm:inline">{chatOpen ? "Close" : "Need Help?"}</span>
        </button>
      </div>

      {/* Chatbot Window */}
      {chatOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 w-[94vw] sm:w-96 max-h-[580px] h-[80vh] z-50 bg-graphite border border-graphite-border rounded-lg shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-charcoal px-4 py-3.5 border-b border-graphite-border flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center text-gold">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-heading font-semibold text-white flex items-center gap-1.5">
                  Aluteck Assistant
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </h4>
                <p className="text-[10px] text-textgrey">Architectural Systems Desk</p>
              </div>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              className="text-textgrey hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Action Suggestions */}
          <div className="bg-charcoal/60 px-3 py-2 border-b border-graphite-border/50 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {quickActions.slice(0, 3).map((act, i) => (
              <button
                key={i}
                onClick={() => handleSend(act.query)}
                className="text-[10px] whitespace-nowrap bg-graphite hover:bg-charcoal text-lightgrey hover:text-gold px-2.5 py-1 rounded border border-graphite-border transition-colors flex-shrink-0"
              >
                {act.label}
              </button>
            ))}
          </div>

          {/* Message History */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-lg p-3 leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-gold text-charcoal font-medium rounded-br-none"
                      : "bg-charcoal/90 text-lightgrey border border-graphite-border rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </div>

                {/* Render Suggested Links if present */}
                {msg.links && msg.links.length > 0 && (
                  <div className="mt-2 flex flex-col gap-1 w-full max-w-[85%]">
                    {msg.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.href}
                        onClick={() => setChatOpen(false)}
                        className="text-[11px] bg-graphite hover:bg-gold/15 text-gold p-2 rounded border border-graphite-border flex items-center justify-between transition-colors group"
                      >
                        <span>{link.label}</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-2.5 bg-charcoal border-t border-graphite-border flex items-center gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about series, glazing, or quotes..."
              className="flex-1 bg-graphite border border-graphite-border text-white text-xs px-3 py-2 rounded focus:outline-none focus:border-gold placeholder:text-textgrey"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="p-2 rounded bg-gold hover:bg-gold-light text-charcoal disabled:opacity-40 transition-colors"
              aria-label="Send message"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}

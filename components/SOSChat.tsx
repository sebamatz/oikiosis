"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { X, Send, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  content: string;
  sender: "user" | "giannis";
  createdAt: string;
}

interface Conversation {
  id: string;
  sessionId: string;
  name?: string;
  messages: Message[];
}

export default function SOSChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [conversation, setConversation] = useState<Conversation | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Get or create session ID
  const getSessionId = (): string => {
    if (typeof window === "undefined") return "";

    let sessionId = localStorage.getItem("sos_chat_session_id");
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random()
        .toString(36)
        .substr(2, 9)}`;
      localStorage.setItem("sos_chat_session_id", sessionId);
    }
    return sessionId;
  };

  // Listen for custom event to open chat (triggered by other buttons)
  useEffect(() => {
    const handleOpenChat = () => {
      setIsOpen(true);
    };

    window.addEventListener("openSOSChat", handleOpenChat);
    return () => window.removeEventListener("openSOSChat", handleOpenChat);
  }, []);

  // --- THE GA4 TRACKING HUB ---
  // This watches the chat window. If it opens from ANYWHERE, it fires exactly once.
  useEffect(() => {
    if (isOpen) {
      console.log("SOS Chat opened! Firing click_sos with debug_mode...");
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "click_sos");
      }
    }
  }, [isOpen]);
  // ----------------------------

  // POLLING: Check for new messages every 5 seconds while chat is OPEN
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isOpen) {
      // Load immediately
      loadConversation();

      // Then load every 5 seconds
      interval = setInterval(() => {
        loadConversation(true); // true = silent mode (don't log errors)
      }, 5000);
    }

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [conversation?.messages]);

  const loadConversation = async (silent = false) => {
    try {
      const sessionId = getSessionId();
      const response = await fetch(
        `/api/sos-chat/conversation?sessionId=${sessionId}`,
      );
      if (response.ok) {
        const data = await response.json();
        if (data.conversation) {
          // Only update state if message count changed (prevents flickering)
          setConversation((prev) => {
            if (prev?.messages.length !== data.conversation.messages.length) {
              return data.conversation;
            }
            return prev;
          });

          if (data.conversation.name) {
            setName(data.conversation.name);
          }
        }
      }
    } catch (error) {
      if (!silent) console.error("Error loading conversation:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsSubmitting(true);
    setShowSuccess(false);

    try {
      const sessionId = getSessionId();
      const response = await fetch("/api/sos-chat/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sessionId,
          name: name.trim() || undefined,
          content: message.trim(),
        }),
      });

      if (response.ok) {
        const data = await response.json();

        // Update state immediately
        setConversation(data.conversation);
        setMessage("");
        setShowSuccess(true);

        // Force reload to confirm sync
        await loadConversation();

        setTimeout(() => {
          messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 500);
      } else {
        alert("Σφάλμα κατά την αποστολή. Παρακαλώ δοκιμάστε ξανά.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Σφάλμα κατά την αποστολή. Παρακαλώ δοκιμάστε ξανά.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const hasMessages = conversation && conversation.messages.length > 0;

  // Logic to show "Typing..." dots
  const lastMessage = conversation?.messages[conversation.messages.length - 1];
  const isWaitingForReply = lastMessage?.sender === "user";

  return (
    <>
      {/* Chat Bubble */}
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 z-50",
          "flex items-center gap-2",
          "bg-primary text-primary-foreground",
          "px-4 py-3 rounded-full shadow-lg",
          "hover:bg-primary/90 transition-colors",
          "font-semibold text-sm sm:text-base",
          isOpen && "hidden",
        )}
        aria-label="Άνοιγμα S.O.S. chat"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline">S.O.S. μήνυμα</span>
        <span className="sm:hidden">S.O.S.</span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-end p-4 sm:p-6 pointer-events-none"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsOpen(false);
            }
          }}
        >
          <div className="pointer-events-auto w-full max-w-md h-150 sm:h-175 flex flex-col bg-background border rounded-lg shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b bg-muted/30">
              <h2 className="font-semibold text-lg">Γράψε ένα S.O.S. μήνυμα</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-muted rounded-full transition-colors"
                aria-label="Κλείσιμο chat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {/* Greeting */}
              {!hasMessages && (
                <div className="mb-4 p-4 bg-muted/50 rounded-lg text-sm text-muted-foreground space-y-2">
                  <p>👋 Γεια σου, είμαι ο Γιάννης Γιαννόπουλος, ψυχολόγος.</p>
                  <p>
                    Αν νιώθεις ότι είσαι στα όριά σου ή ότι δεν αντέχεις άλλο
                    μόνος/η, μπορείς να μου γράψεις εδώ με απλά λόγια τι σε
                    δυσκολεύει περισσότερο.
                  </p>
                  <p>
                    Το S.O.S. μήνυμα δεν λειτουργεί 24/7, αλλά διαβάζω προσωπικά
                    ό,τι θα γράψεις και απαντώ όσο πιο σύντομα μπορώ.
                  </p>
                </div>
              )}

              {/* Success notification */}
              {showSuccess && (
                <div className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-sm text-green-800 dark:text-green-200">
                  ✅ Το S.O.S. μήνυμά σου στάλθηκε.
                </div>
              )}

              {/* Messages List */}
              {conversation?.messages.map((msg, index) => {
                const isFirstBotMessage =
                  msg.sender === "giannis" &&
                  index ===
                    conversation.messages.findIndex(
                      (m) => m.sender === "giannis",
                    );

                const cleanContent = msg.content
                  .replace(/\[AUDIO:.*?\]/g, "")
                  .trim();

                return (
                  <div key={msg.id}>
                    <div
                      className={cn(
                        "flex",
                        msg.sender === "user" ? "justify-end" : "justify-start",
                      )}
                    >
                      <div
                        className={cn(
                          "max-w-[80%] rounded-lg p-3 text-sm",
                          msg.sender === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-foreground",
                        )}
                      >
                        <p className="whitespace-pre-wrap">{cleanContent}</p>
                      </div>
                    </div>
                    {/* Audio Link */}
                    {isFirstBotMessage && (
                      <div className="flex justify-start mt-2">
                        <div className="max-w-[80%]">
                          <div className="p-3 bg-muted/50 rounded-lg border border-muted-foreground/20">
                            <p className="mb-2 text-xs text-muted-foreground">
                              ​Αν νιώθεις ότι αυτή τη στιγμή η πίεση είναι
                              μεγάλη, άκουσε το παρακάτω audio ηρεμίας.
                            </p>
                            <audio
                              controls
                              preload="metadata"
                              className="w-full h-10 outline-none rounded-md"
                            >
                              <source src="/relax.m4a" type="audio/mp4" />
                              Το πρόγραμμα περιήγησής σας δεν υποστηρίζει την
                              αναπαραγωγή ήχου.
                            </audio>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

              {/* TYPING INDICATOR */}
              {isWaitingForReply && (
                <div className="flex justify-start animate-pulse">
                  <div className="bg-muted px-4 py-3 rounded-lg rounded-tl-none flex gap-1">
                    <span
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    ></span>
                    <span
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    ></span>
                    <span
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    ></span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            {!hasMessages ? (
              <form onSubmit={handleSubmit} className="p-4 border-t space-y-3">
                <div>
                  <label className="block text-xs font-medium mb-1 text-muted-foreground">
                    Όνομα (προαιρετικό)
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 text-sm border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Όνομα..."
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1">
                    Τι σε δυσκολεύει;
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3 py-2 text-sm border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    rows={4}
                    required
                    placeholder="Γράψε εδώ..."
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting || !message.trim()}
                >
                  <Send className="h-4 w-4 mr-2" /> Στείλε το S.O.S.
                </Button>
              </form>
            ) : (
              <form onSubmit={handleSubmit} className="p-4 border-t flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Γράψε το μήνυμά σου..."
                  className="flex-1 px-3 py-2 text-sm border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={isSubmitting || !message.trim()}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function AdminDashboard() {
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  const [replyText, setReplyText] = useState("");

  // CHANGED: We now reference the container itself, not the bottom element
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // 1. Load list of conversations
  const { data: listData, mutate: refreshList } = useSWR(
    "/api/admin/conversations",
    fetcher,
    { refreshInterval: 5000 },
  );

  // 2. Load the active chat messages
  const { data: chatData, mutate: refreshChat } = useSWR(
    selectedChatId
      ? `/api/sos-chat/conversation?sessionId=${selectedChatId}`
      : null,
    fetcher,
    { refreshInterval: 3000 },
  );

  // Helper: Extract messages safely
  const messages = chatData?.messages || chatData?.conversation?.messages || [];

  // THE FIX: Scroll handling
  // We use LayoutEffect or useEffect to jump to the bottom instantly
  // ONLY inside the container. This prevents the window from moving.
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages.length, selectedChatId]); // Trigger only when messages change or chat switches

  // Helper: Find the active conversation object to get the Name
  const activeConv = listData?.conversations?.find(
    (c: any) => c.sessionId === selectedChatId,
  );

  const handleReply = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeConv || !replyText.trim()) return;

    try {
      await fetch("/api/admin/reply", {
        method: "POST",
        body: JSON.stringify({
          conversationId: activeConv.id, // Use internal ID
          content: replyText,
        }),
      });
      setReplyText("");
      refreshChat();
    } catch (err) {
      console.error("Failed to reply", err);
    }
  };

  return (
    // Height calculation ensures no global scrollbar
    <div className="flex h-[calc(100vh-64px)] bg-gray-100 font-sans">
      {/* LEFT SIDEBAR */}
      <div className="w-1/3 border-r border-gray-300 bg-white flex flex-col">
        <div className="p-4 border-b bg-gray-50 font-bold text-gray-700 shadow-sm z-10">
          Inbox ({listData?.conversations?.length || 0})
        </div>
        <div className="flex-1 overflow-y-auto">
          {listData?.conversations?.map((conv: any) => (
            <div
              key={conv.id}
              onClick={() => setSelectedChatId(conv.sessionId)}
              className={`p-4 border-b cursor-pointer transition-colors ${
                selectedChatId === conv.sessionId
                  ? "bg-blue-50 border-l-4 border-blue-600"
                  : "hover:bg-gray-50 border-l-4 border-transparent"
              }`}
            >
              <div className="font-bold text-gray-900">
                {conv.name || "Anonymous User"}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {new Date(conv.updatedAt).toLocaleDateString()} at{" "}
                {new Date(conv.updatedAt).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
              {/* Preview last message */}
              {conv.messages && conv.messages[0] && (
                <div className="text-sm text-gray-600 truncate mt-2 italic">
                  "{conv.messages[0].content}"
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT CHAT AREA */}
      <div className="w-2/3 flex flex-col bg-slate-50">
        {selectedChatId ? (
          <>
            {/* Header */}
            <div className="p-4 border-b bg-white shadow-sm flex justify-between items-center z-10">
              <div>
                <h2 className="font-bold text-xl text-gray-800">
                  {activeConv?.name || "Anonymous User"}
                </h2>
                <div className="flex items-center gap-2 mt-1">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-xs text-green-600 font-medium">
                    Live Conversation
                  </span>
                </div>
              </div>
            </div>

            {/* Messages - THE FIX IS HERE (Added ref to this container) */}
            <div
              ref={chatContainerRef}
              className="flex-1 overflow-y-auto p-6 space-y-4"
            >
              {messages.length === 0 ? (
                <div className="text-center text-gray-400 mt-10">
                  No messages found in this conversation.
                </div>
              ) : (
                messages.map((msg: any) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${
                      msg.sender === "giannis" ? "items-end" : "items-start"
                    }`}
                  >
                    <div
                      className={`max-w-[70%] p-4 rounded-2xl whitespace-pre-wrap shadow-sm text-sm ${
                        msg.sender === "giannis"
                          ? "bg-blue-600 text-white rounded-tr-sm"
                          : "bg-white border border-gray-200 text-gray-800 rounded-tl-sm"
                      }`}
                    >
                      {msg.content}
                    </div>
                    <span className="text-[10px] text-gray-400 mt-1 px-1">
                      {msg.sender === "giannis"
                        ? "Giannis"
                        : activeConv?.name || "User"}{" "}
                      •{" "}
                      {new Date(msg.createdAt).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                ))
              )}
            </div>

            {/* Reply Input */}
            <form onSubmit={handleReply} className="p-4 bg-white border-t z-10">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Type a reply..."
                  className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  disabled={!replyText.trim()}
                  className="px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
                >
                  Send
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-400">
            Select a conversation from the left to start chatting
          </div>
        )}
      </div>
    </div>
  );
}

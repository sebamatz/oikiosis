"use client";

import { useState, useEffect, useRef } from "react";
import useSWR from "swr";
import { ArrowLeft, Send, User, Circle } from "lucide-react"; // Added Icons

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function AdminDashboard() {
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  const [replyText, setReplyText] = useState("");

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

  // Scroll handling
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages.length, selectedChatId]);

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
          conversationId: activeConv.id,
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
    // ADJUSTED: Added pt-20 (mobile header height) and md:pt-28 (desktop header height)
    // to prevent the header from hiding the content.
    <div className="flex h-screen pt-20 md:pt-28 bg-white font-sans overflow-hidden">
      {/* LEFT SIDEBAR (INBOX)
        Mobile: Hidden if a chat is selected. Full width otherwise.
        Desktop: Always visible, fixed width of 380px.
      */}
      <div
        className={`${
          selectedChatId ? "hidden md:flex" : "flex"
        } w-full md:w-[380px] flex-col border-r border-gray-200 bg-white shrink-0`}
      >
        {/* Sidebar Header */}
        <div className="p-4 pt-6 pb-2">
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
            Chats
          </h1>
          <div className="text-sm font-medium text-gray-500 mt-1">
            {listData?.conversations?.length || 0} active conversations
          </div>
        </div>

        {/* Conversation List */}
        <div className="flex-1 overflow-y-auto px-2 space-y-1">
          {listData?.conversations?.map((conv: any) => {
            const isSelected = selectedChatId === conv.sessionId;
            const lastMessage = conv.messages?.[0]?.content;

            return (
              <div
                key={conv.id}
                onClick={() => setSelectedChatId(conv.sessionId)}
                className={`flex items-center gap-3 p-3 cursor-pointer rounded-xl transition-all duration-200 ${
                  isSelected ? "bg-blue-50/80" : "hover:bg-gray-50"
                }`}
              >
                {/* Avatar Placeholder */}
                <div className="relative flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full shrink-0">
                  <User className="w-6 h-6 text-gray-400" />
                  {/* Fake online indicator dot for premium feel */}
                  <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></div>
                </div>

                {/* Chat Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-0.5">
                    <h3
                      className={`text-sm truncate ${isSelected ? "font-bold text-gray-900" : "font-semibold text-gray-800"}`}
                    >
                      {conv.name || "Anonymous User"}
                    </h3>
                    <span className="text-xs text-gray-400 shrink-0 ml-2">
                      {new Date(conv.updatedAt).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                  <p
                    className={`text-sm truncate ${isSelected ? "text-blue-600 font-medium" : "text-gray-500"}`}
                  >
                    {lastMessage ? `"${lastMessage}"` : "New conversation..."}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* RIGHT CHAT AREA
        Mobile: Hidden if NO chat is selected. Full width otherwise.
        Desktop: Always visible, takes up remaining space.
      */}
      <div
        className={`${
          !selectedChatId ? "hidden md:flex" : "flex"
        } flex-1 flex-col bg-white relative`}
      >
        {selectedChatId ? (
          <>
            {/* Chat Header */}
            <div className="flex items-center gap-3 p-4 border-b border-gray-100 bg-white/80 backdrop-blur-md z-10 shadow-sm">
              {/* Back Button (Mobile Only) */}
              <button
                onClick={() => setSelectedChatId(null)}
                className="md:hidden p-2 -ml-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>

              <div className="flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-600 rounded-full shrink-0">
                <User className="w-5 h-5" />
              </div>

              <div>
                <h2 className="font-bold text-gray-900 leading-tight">
                  {activeConv?.name || "Anonymous User"}
                </h2>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <Circle className="w-2 h-2 fill-green-500 text-green-500 animate-pulse" />
                  <span className="text-xs text-green-600 font-medium">
                    Live Session
                  </span>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div
              ref={chatContainerRef}
              className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 bg-white"
            >
              {messages.length === 0 ? (
                <div className="flex h-full items-center justify-center text-gray-400 text-sm">
                  Connecting to secure chat...
                </div>
              ) : (
                messages.map((msg: any, index: number) => {
                  const isGiannis = msg.sender === "giannis";
                  const prevMsg = messages[index - 1];
                  const isConsecutive =
                    prevMsg && prevMsg.sender === msg.sender;

                  return (
                    <div
                      key={msg.id}
                      className={`flex flex-col ${
                        isGiannis ? "items-end" : "items-start"
                      } ${isConsecutive ? "mt-1" : "mt-4"}`}
                    >
                      <div
                        className={`max-w-[75%] md:max-w-[65%] px-4 py-2.5 text-[15px] leading-relaxed whitespace-pre-wrap shadow-sm ${
                          isGiannis
                            ? "bg-blue-600 text-white rounded-2xl rounded-tr-sm"
                            : "bg-gray-100 text-gray-900 rounded-2xl rounded-tl-sm"
                        }`}
                      >
                        {msg.content}
                      </div>

                      {(!messages[index + 1] ||
                        messages[index + 1].sender !== msg.sender) && (
                        <span className="text-[11px] text-gray-400 mt-1 px-1 font-medium">
                          {new Date(msg.createdAt).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                      )}
                    </div>
                  );
                })
              )}
            </div>

            {/* Input Form (Messenger Style) */}
            <form
              onSubmit={handleReply}
              className="p-4 bg-white border-t border-gray-100"
            >
              <div className="flex items-end gap-2 max-w-4xl mx-auto">
                <div className="flex-1 bg-gray-100 rounded-3xl overflow-hidden focus-within:ring-2 focus-within:ring-blue-500/50 focus-within:bg-white border border-transparent focus-within:border-blue-500 transition-all">
                  <textarea
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder="Message..."
                    rows={1}
                    className="w-full max-h-32 px-4 py-3 bg-transparent text-gray-900 focus:outline-none resize-none"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleReply(e as any);
                      }
                    }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={!replyText.trim()}
                  className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:bg-gray-200 disabled:text-gray-400 transition-all shrink-0 shadow-sm"
                >
                  <Send className="w-5 h-5 ml-0.5" />
                </button>
              </div>
            </form>
          </>
        ) : (
          // Empty State Desktop
          <div className="hidden md:flex flex-1 flex-col items-center justify-center bg-gray-50">
            <div className="w-20 h-20 mb-6 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100">
              <Send className="w-8 h-8 text-blue-500 ml-1" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Your Inbox</h3>
            <p className="text-gray-500 mt-2 text-sm">
              Select a conversation from the left to start helping.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

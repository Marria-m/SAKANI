import { useState } from "react";
import { Send, MapPin, Phone, MoreHorizontal, Search } from "lucide-react";
import DashboardLayout from "../layout/DashboardLayout";
import { chats } from "../data/mock";

import avatar1 from "@/imports/الشات/f3192a71f6b9e1735f71dc77ef230ba26f36c174.png";
import avatar2 from "@/imports/الشات/8c8790704c1455a6ed45eb8a2db43d05a204ea79.png";
import avatar3 from "@/imports/الشات/9af79686d9f1bc99218683537f4b5a9c3ead95df.png";
import avatar4 from "@/imports/الشات/31f479756296e1184890b5b0b3a32353cf568817.png";
import mapImg from "@/imports/الشات/6d6d7891d64b112da4a33953ffa21d80dbef6d00.png";
import ownerAvatar from "@/imports/الشات/a30ee74f5ae5768420c1c28e389d5b4e44a93fed.png";

const F = "'Readex Pro', sans-serif";
const C = "'Cairo', sans-serif";

const AVATARS = [avatar1, avatar2, avatar3, avatar4];

type Message = { id: string; sender: string; text: string; time: string; date: string };
type Chat = (typeof chats)[number] & { messages: Message[] };

export default function Chat() {
  const [activeChatId, setActiveChatId] = useState(chats[0].id);
  const [messagesByChat, setMessagesByChat] = useState<Record<string, Message[]>>(
    Object.fromEntries(chats.map((c) => [c.id, c.messages as Message[]]))
  );
  const [input, setInput] = useState("");

  const activeChat = chats.find((c) => c.id === activeChatId)!;
  const messages = messagesByChat[activeChatId] || [];

  function sendMessage() {
    const text = input.trim();
    if (!text) return;
    const newMsg: Message = {
      id: `m${Date.now()}`,
      sender: "owner",
      text,
      time: new Date().toLocaleTimeString("ar-EG", { hour: "2-digit", minute: "2-digit" }),
      date: "اليوم",
    };
    setMessagesByChat((prev) => ({
      ...prev,
      [activeChatId]: [...(prev[activeChatId] || []), newMsg],
    }));
    setInput("");
  }

  return (
    <DashboardLayout title="المحادثات">
      <div className="flex h-[calc(100vh-64px)] overflow-hidden">
        {/* Sidebar: conversation list */}
        <div
          className="w-80 shrink-0 flex flex-col bg-white overflow-y-auto"
          style={{ borderLeft: "1px solid rgba(0,0,0,0.06)" }}
        >
          {/* Search */}
          <div className="p-4 sticky top-0 bg-white z-10" style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
            <div className="flex items-center gap-2 bg-[#f3f4f5] rounded-xl px-4 py-2.5">
              <Search size={15} color="#94a3b8" />
              <input
                placeholder="بحث في المحادثات..."
                dir="rtl"
                className="bg-transparent flex-1 text-sm text-[#001d28] placeholder-[#94a3b8] outline-none text-right border-none"
                style={{ fontFamily: F }}
              />
            </div>
          </div>

          {chats.map((chat, i) => (
            <button
              key={chat.id}
              onClick={() => setActiveChatId(chat.id)}
              className="flex items-center gap-3 p-4 text-right transition-colors hover:bg-[#f8f9fa] border-none bg-transparent cursor-pointer w-full"
              style={{
                background: activeChatId === chat.id ? "#f3f4f5" : "transparent",
                borderBottom: "1px solid rgba(0,0,0,0.04)",
              }}
            >
              <div className="relative shrink-0">
                <img src={AVATARS[i % AVATARS.length]} alt={chat.studentName} className="w-11 h-11 rounded-full object-cover" />
                {chat.unread > 0 && (
                  <span
                    className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                    style={{ background: "#f2994a", fontFamily: F }}
                  >
                    {chat.unread}
                  </span>
                )}
              </div>
              <div className="flex-1 min-w-0 text-right">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] text-[#94a3b8]" style={{ fontFamily: F }}>{chat.time}</span>
                  <span className="text-[#001d28] font-semibold text-sm truncate" style={{ fontFamily: C }}>{chat.studentName}</span>
                </div>
                <p className="text-[#71787c] text-xs truncate mt-0.5" style={{ fontFamily: F }}>{chat.lastMessage}</p>
                <p className="text-[#94a3b8] text-[10px] mt-0.5" style={{ fontFamily: F }}>{chat.propertyName}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Main chat window */}
        <div className="flex-1 flex flex-col bg-[#f8f9fa] overflow-hidden">
          {/* Chat header */}
          <div
            className="flex items-center justify-between px-6 py-4 bg-white shrink-0"
            style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}
          >
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-lg hover:bg-[#f3f4f5] transition-colors border-none bg-transparent cursor-pointer">
                <Phone size={16} color="#71787c" />
              </button>
              <button className="p-2 rounded-lg hover:bg-[#f3f4f5] transition-colors border-none bg-transparent cursor-pointer">
                <MoreHorizontal size={16} color="#71787c" />
              </button>
            </div>
            <div className="flex items-center gap-3 text-right">
              <div>
                <p className="text-[#001d28] font-bold text-sm" style={{ fontFamily: C }}>{activeChat.studentName}</p>
                <p className="text-[#94a3b8] text-xs" style={{ fontFamily: F }}>{activeChat.university} · {activeChat.propertyName}</p>
              </div>
              <img
                src={AVATARS[chats.findIndex((c) => c.id === activeChatId) % AVATARS.length]}
                alt={activeChat.studentName}
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>
          </div>

          {/* Messages area */}
          <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-3">
            {messages.map((msg, i) => {
              const isOwner = msg.sender === "owner";
              const showDate = i === 0 || messages[i - 1].date !== msg.date;
              return (
                <div key={msg.id}>
                  {showDate && (
                    <div className="flex justify-center my-2">
                      <span
                        className="text-[10px] text-[#94a3b8] bg-white px-3 py-1 rounded-full"
                        style={{ fontFamily: F, boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
                      >
                        {msg.date}
                      </span>
                    </div>
                  )}
                  <div className={`flex items-end gap-2 ${isOwner ? "flex-row-reverse" : ""}`}>
                    {!isOwner && (
                      <img
                        src={AVATARS[chats.findIndex((c) => c.id === activeChatId) % AVATARS.length]}
                        alt=""
                        className="w-7 h-7 rounded-full object-cover shrink-0 mb-1"
                      />
                    )}
                    {isOwner && (
                      <img src={ownerAvatar} alt="" className="w-7 h-7 rounded-full object-cover shrink-0 mb-1" />
                    )}
                    <div
                      className="max-w-xs px-4 py-2.5 rounded-2xl text-sm leading-relaxed text-right"
                      style={{
                        fontFamily: F,
                        background: isOwner ? "#001d28" : "white",
                        color: isOwner ? "white" : "#001d28",
                        boxShadow: isOwner ? "none" : "0 2px 8px rgba(0,0,0,0.06)",
                        borderBottomLeftRadius: isOwner ? 16 : 4,
                        borderBottomRightRadius: isOwner ? 4 : 16,
                      }}
                    >
                      {msg.text}
                      <div
                        className="text-[10px] mt-1 opacity-60 text-left"
                        style={{ fontFamily: F }}
                      >
                        {msg.time}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Map card */}
            <div className="flex items-end gap-2 justify-end">
              <img
                src={AVATARS[chats.findIndex((c) => c.id === activeChatId) % AVATARS.length]}
                alt=""
                className="w-7 h-7 rounded-full object-cover shrink-0 mb-1"
              />
              <div
                className="rounded-2xl overflow-hidden"
                style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.08)", borderBottomRightRadius: 4, width: 220 }}
              >
                <img src={mapImg} alt="الموقع" className="w-full h-32 object-cover" />
                <div className="bg-white px-3 py-2 flex items-center gap-1.5 justify-end">
                  <span className="text-xs text-[#001d28]" style={{ fontFamily: F }}>حي المهندسين، الجيزة</span>
                  <MapPin size={13} color="#f2994a" />
                </div>
              </div>
            </div>
          </div>

          {/* Quick replies */}
          <div className="px-6 py-2 flex gap-2 justify-end shrink-0">
            {["نعم، متوفرة ✓", "سأتواصل معك قريباً", "هل يمكنني مساعدتك؟"].map((q) => (
              <button
                key={q}
                onClick={() => setInput(q)}
                className="px-3 py-1.5 rounded-full text-xs border transition-colors hover:bg-[#001d28] hover:text-white hover:border-[#001d28] cursor-pointer bg-transparent"
                style={{ fontFamily: F, borderColor: "rgba(0,29,40,0.15)", color: "#001d28" }}
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input bar */}
          <div
            className="px-4 py-3 bg-white shrink-0 flex items-center gap-3"
            style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}
          >
            <button
              onClick={sendMessage}
              disabled={!input.trim()}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all shrink-0 disabled:opacity-40 border-none cursor-pointer"
              style={{ background: "#001d28" }}
            >
              <Send size={16} color="white" />
            </button>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="اكتب رسالتك..."
              dir="rtl"
              className="flex-1 bg-[#f3f4f5] rounded-xl px-4 py-2.5 text-sm text-[#001d28] placeholder-[#94a3b8] outline-none text-right border-none"
              style={{ fontFamily: F }}
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

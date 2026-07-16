import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bell, Search, Menu } from "lucide-react";
import Sidebar from "../components/Sidebar";
import { useAuth } from "../../context/AuthContext";
import ownerPhoto from "@/imports/لوحةتحكمالمالك/ff14c0cd59cb1218e945e9742d72558eeb90d5bd.png";

const F = "'Readex Pro', sans-serif";
const C = "'Cairo', sans-serif";

const getImageUrl = (url?: string) => {
  if (!url) return null;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  const base = (import.meta.env.VITE_API_URL || "http://localhost:5125/api").replace("/api", "");
  return `${base}/${url.replace(/^\/+/, "")}`;
};

interface Props {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

export default function DashboardLayout({ children, title, subtitle }: Props) {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const getRole = (): string => {
    if (!user?.token) return '';
    try {
      const payload = JSON.parse(atob(user.token.split('.')[1]));
      return payload['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] || '';
    } catch {
      return '';
    }
  };

  const role = getRole();
  const ownerName = user?.fullName || (role === "Tenant" ? "طالب مستخدم" : "مالك عقار");
  const ownerRole = role === "Tenant" ? "طالب مستأجر موثق" : "مالك عقار مميز";
  const avatarUrl = user?.profileImageUrl ? getImageUrl(user.profileImageUrl) : ownerPhoto;

  return (
    <div
      className="flex h-screen overflow-hidden bg-[#f8f9fa]"
      dir="rtl"
      style={{ direction: "rtl" }}
    >
      {/* Sidebar renders on right in RTL */}
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <div
          className="shrink-0 flex items-center justify-between px-8 py-4 bg-white/80 backdrop-blur-md z-10"
          style={{ borderBottom: "1px solid rgba(0,29,40,0.06)" }}
        >
          {/* Left: owner info + menu toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden p-2 rounded-xl bg-[#f3f4f5] text-[#001d28] cursor-pointer border-none flex items-center justify-center"
            >
              <Menu size={20} />
            </button>
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/profile")}>
              <div className="text-right">
                <p className="text-[#001d28] font-bold text-sm" style={{ fontFamily: F }}>{ownerName}</p>
                <p className="text-[#94a3b8] text-[10px]" style={{ fontFamily: F }}>{ownerRole}</p>
              </div>
              <img src={avatarUrl || ownerPhoto} alt={ownerName} className="w-10 h-10 rounded-full object-cover" />
            </div>
          </div>

          {/* Center: title */}
          {title && (
            <div className="text-center">
              <h1 className="text-[#001d28] font-black text-lg md:text-xl" style={{ fontFamily: C }}>{title}</h1>
              {subtitle && <p className="text-[#94a3b8] text-[10px]" style={{ fontFamily: F }}>{subtitle}</p>}
            </div>
          )}

          {/* Right: search + bell */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <input
                placeholder="بحث..."
                dir="rtl"
                className="bg-[#f3f4f5] rounded-xl pr-4 pl-10 py-2.5 text-sm text-[#001d28] outline-none placeholder-[#94a3b8] w-52 border border-transparent hover:border-gray-200 focus:border-[#f2994a] focus:bg-white transition-all"
                style={{ fontFamily: F }}
              />
              <Search size={15} color="#94a3b8" className="absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
            <button className="relative w-10 h-10 rounded-xl bg-[#f3f4f5] flex items-center justify-center cursor-pointer border-none outline-none hover:bg-gray-200 transition-colors">
              <Bell size={18} color="#001d28" />
              <span
                className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full animate-pulse"
                style={{ background: "#f2994a" }}
              />
            </button>
          </div>
        </div>

        {/* Page content */}
        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
}

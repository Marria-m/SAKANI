import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
  LayoutDashboard,
  Building2,
  Clock,
  MessageCircle,
  User,
  Star,
  HelpCircle,
  LogOut,
  PlusCircle,
  Heart,
} from "lucide-react";

const F = "'Readex Pro', sans-serif";

const OWNER_NAV = [
  { path: "/dashboard",   label: "الرئيسية",         icon: LayoutDashboard },
  { path: "/properties",  label: "عقاراتي",           icon: Building2 },
  { path: "/waiting",     label: "طلبات الانتظار",    icon: Clock },
  { path: "/chats",       label: "المحادثات",          icon: MessageCircle },
  { path: "/profile",     label: "ملفي الشخصي",       icon: User },
  { path: "/reviews",     label: "آراء المستأجرين",   icon: Star },
];

const TENANT_NAV = [
  { path: "/tenant-home", label: "الرئيسية",          icon: LayoutDashboard },
  { path: "/wishlist",    label: "المفضلة",           icon: Heart },
  { path: "/my-bookings", label: "حجوزاتي وطلباتي",   icon: Clock },
  { path: "/chats",       label: "المحادثات",          icon: MessageCircle },
  { path: "/profile",     label: "ملفي الشخصي",       icon: User },
];

interface SidebarProps {
  open?: boolean;
  onClose?: () => void;
}

export default function Sidebar({ open = false, onClose }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout, user } = useAuth();

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
  const NAV = role === "Tenant" ? TENANT_NAV : OWNER_NAV;

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      {/* Mobile overlay backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed md:relative top-0 right-0 z-40 h-full w-[248px] shrink-0 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full md:translate-x-0"
        }`}
        style={{
          background: "linear-gradient(to bottom, #003344, #001d28)",
          direction: "rtl",
        }}
      >
      {/* Logo */}
      <div className="px-6 py-7 flex items-center gap-2">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center text-[#001d28] font-black text-sm"
          style={{ background: "#f2994a", fontFamily: F }}
        >
          س
        </div>
        <span className="text-white font-bold text-xl" style={{ fontFamily: "'Cairo', sans-serif" }}>
          سكني
        </span>
      </div>

      {/* Nav */}
      <nav className="flex flex-col gap-1 px-3 flex-1">
        {NAV.map(({ path, label, icon: Icon }) => {
          const active = location.pathname === path;
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className="flex items-center gap-3 pr-4 pl-3 py-3 rounded-xl text-right w-full transition-all duration-200 cursor-pointer border-none outline-none"
              style={{
                background: active ? "rgba(242,153,74,0.12)" : "transparent",
                color: active ? "#f2994a" : "rgba(203,213,225,0.7)",
                borderRight: active ? "4px solid #f2994a" : "4px solid transparent",
                paddingRight: active ? "16px" : "12px",
                fontFamily: F,
                fontSize: 14,
                fontWeight: active ? 600 : 400,
              }}
            >
              <Icon size={18} className="transition-transform duration-200" style={{ transform: active ? "scale(1.05)" : "scale(1)" }} />
              <span>{label}</span>
            </button>
          );
        })}
      </nav>

      {/* Add property */}
      {role !== "Tenant" && (
        <div className="px-3 pb-2">
          <button
            onClick={() => navigate("/add-property")}
            className="flex items-center gap-2 w-full px-4 py-3 rounded-xl font-semibold text-sm transition-opacity hover:opacity-90 cursor-pointer border-none"
            style={{ background: "#f2994a", color: "#001d28", fontFamily: F }}
          >
            <PlusCircle size={16} />
            إضافة سكن جديد
          </button>
        </div>
      )}

      {/* Bottom links */}
      <div className="px-3 pb-6 flex flex-col gap-1 border-t border-white/10 pt-3 mt-1">
        <button
          onClick={() => navigate("/help")}
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-right w-full cursor-pointer border-none bg-transparent"
          style={{ color: "rgba(203,213,225,0.5)", fontFamily: F, fontSize: 14 }}
        >
          <HelpCircle size={16} />
          <span>المساعدة</span>
        </button>
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-right w-full cursor-pointer"
          style={{ color: "rgba(203,213,225,0.5)", fontFamily: F, fontSize: 14 }}
        >
          <LogOut size={16} />
          <span>تسجيل الخروج</span>
        </button>
      </div>
    </div>
  </>
  );
}

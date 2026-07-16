import { useNavigate } from "react-router";
import { Home, Key, ShieldCheck, Lock, MessageCircle } from "lucide-react";
import sakaniLogo from "@/imports/تمالتسجيلبنجاحسكني/c2af01dc3102fd7b4269c7e033985ac217ebac1a.png";

const F = "'Readex Pro', sans-serif";
const C = "'Cairo', sans-serif";

export default function Success() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-[#f8f9fa] relative overflow-hidden"
      dir="rtl"
    >
      {/* Background blurs */}
      <div
        className="absolute w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "rgba(242,153,74,0.08)", top: -80, right: -80, filter: "blur(60px)" }}
      />
      <div
        className="absolute w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "rgba(0,29,40,0.05)", bottom: -40, left: -40, filter: "blur(40px)" }}
      />

      {/* Card */}
      <div
        className="bg-white rounded-3xl p-12 flex flex-col items-center gap-8 max-w-md w-full mx-4 text-center relative"
        style={{ boxShadow: "0 16px 64px rgba(0,0,0,0.08)" }}
      >
        {/* Logo */}
        <img src={sakaniLogo} alt="سكني" className="h-10 object-contain" />

        {/* Success illustration */}
        <div className="relative flex items-center justify-center">
          {/* Outer ring */}
          <div
            className="absolute w-36 h-36 rounded-full"
            style={{ border: "2px solid rgba(242,153,74,0.15)" }}
          />
          {/* Mid ring */}
          <div
            className="absolute w-24 h-24 rounded-full"
            style={{ border: "2px solid rgba(242,153,74,0.25)" }}
          />
          {/* Center */}
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #f2994a, #e07b1a)" }}
          >
            <Home size={28} color="white" />
          </div>
          {/* Floating icons */}
          <div
            className="absolute -top-2 -right-2 w-9 h-9 rounded-full flex items-center justify-center bg-white"
            style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
          >
            <Key size={16} color="#f2994a" />
          </div>
          <div
            className="absolute -bottom-2 -left-2 w-9 h-9 rounded-full flex items-center justify-center bg-white"
            style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
          >
            <ShieldCheck size={16} color="#22c55e" />
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col gap-2">
          <h1 className="text-[#001d28] font-black text-3xl" style={{ fontFamily: C }}>
            تم تسجيلك بنجاح!
          </h1>
          <p className="text-[#71787c] text-sm leading-relaxed" style={{ fontFamily: F }}>
            مرحباً بك في سكني. حسابك جاهز الآن،
            <br />ابدأ باستكشاف الوحدات السكنية المتاحة
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col gap-3 w-full">
          <button
            onClick={() => navigate("/dashboard")}
            className="w-full py-4 rounded-2xl font-bold text-white text-base transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #f2994a, #e07b1a)", fontFamily: F }}
          >
            الذهاب إلى لوحة التحكم
          </button>
          <button
            className="w-full py-3.5 rounded-2xl font-semibold text-[#001d28] text-sm transition-colors hover:bg-[#f3f4f5]"
            style={{ fontFamily: F, border: "1px solid rgba(0,0,0,0.1)" }}
          >
            استكشف العقارات
          </button>
        </div>

        {/* Security meta */}
        <div className="flex items-center gap-4 text-xs text-[#94a3b8]" style={{ fontFamily: F }}>
          {["بيانات مشفرة بـ SSL", "توثيق آمن", "خصوصية محمية"].map((item) => (
            <div key={item} className="flex items-center gap-1 opacity-60">
              <Lock size={11} />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Floating chat */}
      <button
        className="fixed bottom-6 left-6 w-12 h-12 rounded-full flex items-center justify-center transition-opacity hover:opacity-90"
        style={{ background: "#001d28", boxShadow: "0 8px 24px rgba(0,29,40,0.3)" }}
      >
        <MessageCircle size={20} color="white" />
      </button>

      {/* Watermark */}
      <div
        className="fixed bottom-4 left-1/2 -translate-x-1/2 text-xs text-[#94a3b8]/50"
        style={{ fontFamily: F }}
      >
        سكني © 2025 — جميع الحقوق محفوظة
      </div>
    </div>
  );
}

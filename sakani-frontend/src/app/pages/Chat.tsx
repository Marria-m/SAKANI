import { MessageCircle, Clock, Sparkles } from "lucide-react";
import DashboardLayout from "../layout/DashboardLayout";

const F = "'Readex Pro', sans-serif";
const C = "'Cairo', sans-serif";

export default function Chat() {
  return (
    <DashboardLayout title="المحادثات">
      <div className="flex items-center justify-center min-h-[calc(100vh-140px)] p-6" dir="rtl">
        <div 
          className="max-w-md w-full bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/60 text-center flex flex-col items-center gap-6 shadow-xl relative overflow-hidden"
          style={{ animation: "fadeInUp 0.6s ease both" }}
        >
          {/* Style injection for animations */}
          <style>{`
            @keyframes fadeInUp {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes pulseGlow {
              0%, 100% { transform: scale(1); opacity: 0.2; }
              50% { transform: scale(1.15); opacity: 0.4; }
            }
          `}</style>

          {/* Glowing background shapes */}
          <div className="absolute -top-12 -left-12 w-32 h-32 bg-[#f2994a]/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-[#001d28]/10 rounded-full blur-2xl" />

          {/* Feature Icon Container */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#f2994a]/20 rounded-full blur-xl" style={{ animation: "pulseGlow 3s infinite ease-in-out" }} />
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#001d28] to-[#004d5a] flex items-center justify-center text-[#f2994a] shadow-lg relative z-10">
              <MessageCircle size={36} />
            </div>
          </div>

          {/* Texts */}
          <div className="flex flex-col gap-2">
            <span 
              className="px-3 py-1 rounded-full text-[11px] font-bold text-[#f2994a] border border-[#f2994a]/30 bg-[#f2994a]/5 w-fit mx-auto flex items-center gap-1"
              style={{ fontFamily: F }}
            >
              <Sparkles size={11} />
              ميزة جديدة قريباً
            </span>
            <h2 className="text-[#001d28] font-black text-2xl mt-2" style={{ fontFamily: C }}>
              نظام المحادثات المباشرة 💬
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: F }}>
              نعمل حالياً على بناء نظام محادثات فوري وآمن يتيح لك التواصل المباشر مع ملاك العقارات والاتفاق على تفاصيل السكن والمعاينة بكل سهولة وسرعة.
            </p>
          </div>

          {/* Status/Badge */}
          <div 
            className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-amber-50/50 border border-amber-100 text-amber-800 text-xs text-right leading-relaxed"
            style={{ fontFamily: F }}
          >
            <Clock size={16} className="shrink-0 text-amber-600" />
            <span>سنقوم بإطلاق هذه الميزة قريباً جداً فور الانتهاء من فترات التجربة وضمان الأمان الكامل لرسائلكم.</span>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

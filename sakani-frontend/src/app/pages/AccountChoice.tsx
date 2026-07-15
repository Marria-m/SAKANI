import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GraduationCap, Building2, ShieldCheck, Star, Mail, Lock, X } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import api from "../../api/axiosConfig";

const F = "'Readex Pro', sans-serif";
const C = "'Cairo', sans-serif";

export default function AccountChoice() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await api.post("/Auth/login", { email, password });
      const userData = response.data;
      
      // Temporary token storage to authenticate subsequent profile fetch
      localStorage.setItem("accessToken", userData.token);
      
      try {
        const profileRes = await api.get("/owner/profile", {
          headers: { Authorization: `Bearer ${userData.token}` }
        });
        if (profileRes.data && profileRes.data.profileImageUrl) {
          userData.profileImageUrl = profileRes.data.profileImageUrl;
        }
      } catch (profileErr) {
        console.error("Failed to pre-fetch owner profile image", profileErr);
      }

      login(userData);
      navigate("/dashboard");
    } catch (err: any) {
      setError(
        err.response?.data?.message ||
        err.response?.data?.Message ||
        "فشل تسجيل الدخول. يرجى التحقق من بيانات الاعتماد الخاصة بك."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-[#f8f9fa] flex flex-col relative"
      dir="rtl"
      style={{ fontFamily: F }}
    >
      {/* NavBar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white" style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <button
          onClick={() => setShowLogin(true)}
          className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90 cursor-pointer"
          style={{ background: "#001d28", fontFamily: F }}
        >
          تسجيل الدخول
        </button>
        <div className="flex items-center gap-6">
          <button onClick={() => navigate("/contact")} className="text-[#94a3b8] text-sm hover:text-[#001d28] transition-colors cursor-pointer border-none bg-transparent" style={{ fontFamily: F }}>تواصل معنا</button>
          <button onClick={() => navigate("/how-it-works")} className="text-[#94a3b8] text-sm hover:text-[#001d28] transition-colors cursor-pointer border-none bg-transparent" style={{ fontFamily: F }}>كيف يعمل سكني؟</button>
          <button onClick={() => navigate("/explore")} className="text-[#94a3b8] text-sm hover:text-[#001d28] transition-colors cursor-pointer border-none bg-transparent" style={{ fontFamily: F }}>استكشف العقارات</button>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#f2994a] flex items-center justify-center text-[#001d28] font-black text-sm" style={{ fontFamily: F }}>
            س
          </div>
          <span className="text-[#001d28] font-bold text-xl" style={{ fontFamily: C }}>سكني</span>
        </div>
      </nav>

      {/* Hero */}
      <div className="flex flex-col items-center pt-20 pb-12 px-8 text-center">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
          style={{ background: "rgba(242,153,74,0.12)", color: "#f2994a", fontFamily: F }}
        >
          <Star size={14} />
          أفضل منصة سكن طلابي في مصر
        </div>
        <h1
          className="text-[#001d28] font-black text-5xl leading-tight mb-4 max-w-2xl"
          style={{ fontFamily: C }}
        >
          اختر نوع
          <span className="text-[#f2994a]"> حسابك </span>
          في سكني
        </h1>
        <p className="text-[#71787c] text-lg max-w-xl" style={{ fontFamily: F }}>
          سواء كنت طالباً يبحث عن سكن مناسب أو مالك عقار يريد إدارة وحداته، سكني يوفر لك الأدوات الصحيحة
        </p>
      </div>

      {/* Cards */}
      <div className="flex justify-center gap-8 px-8 pb-16">
        {/* Student card */}
        <div
          className="bg-white rounded-3xl p-8 flex flex-col gap-6 w-80 cursor-pointer transition-all hover:shadow-xl hover:-translate-y-1"
          style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.06)", border: "2px solid transparent" }}
          onClick={() => navigate("/register")}
        >
          <div className="w-14 h-14 rounded-2xl bg-[#eff6ff] flex items-center justify-center">
            <GraduationCap size={28} color="#2563eb" />
          </div>
          <div className="text-right">
            <h2 className="text-[#001d28] font-black text-2xl mb-2" style={{ fontFamily: C }}>أنا طالب</h2>
            <p className="text-[#71787c] text-sm leading-relaxed" style={{ fontFamily: F }}>
              ابحث عن سكن مناسب قريب من جامعتك، قارن الأسعار واقرأ تقييمات المستأجرين السابقين
            </p>
          </div>
          <ul className="flex flex-col gap-2">
            {["بحث ذكي بالموقع والسعر", "تقييمات حقيقية من الطلاب", "حجز آمن وموثوق"].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-[#001d28]" style={{ fontFamily: F }}>
                <ShieldCheck size={14} color="#22c55e" />
                {f}
              </li>
            ))}
          </ul>
          <button
            onClick={() => navigate("/register")}
            className="w-full py-3.5 rounded-2xl font-bold text-white text-sm transition-opacity hover:opacity-90 cursor-pointer"
            style={{ background: "#001d28", fontFamily: F }}
          >
            إنشاء حساب طالب
          </button>
        </div>

        {/* Owner card */}
        <div
          className="rounded-3xl p-8 flex flex-col gap-6 w-80 cursor-pointer transition-all hover:shadow-xl hover:-translate-y-1"
          style={{ background: "#001d28", boxShadow: "0 4px 20px rgba(0,29,40,0.3)" }}
          onClick={() => navigate("/register")}
        >
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: "rgba(242,153,74,0.2)" }}>
            <Building2 size={28} color="#f2994a" />
          </div>
          <div className="text-right">
            <h2 className="text-white font-black text-2xl mb-2" style={{ fontFamily: C }}>أنا مالك عقار</h2>
            <p className="text-[#94a3b8] text-sm leading-relaxed" style={{ fontFamily: F }}>
              أضف وحداتك السكنية وادرها بسهولة، تواصل مع الطلاب واستقبل طلبات الحجز فوراً
            </p>
          </div>
          <ul className="flex flex-col gap-2">
            {["لوحة تحكم احترافية", "إشعارات فورية للطلبات", "إدارة العقود والمدفوعات"].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-white" style={{ fontFamily: F }}>
                <ShieldCheck size={14} color="#f2994a" />
                {f}
              </li>
            ))}
          </ul>
          <button
            onClick={() => navigate("/register")}
            className="w-full py-3.5 rounded-2xl font-bold text-[#001d28] text-sm transition-opacity hover:opacity-90 cursor-pointer"
            style={{ background: "#f2994a", fontFamily: F }}
          >
            إنشاء حساب مالك
          </button>
        </div>
      </div>

      {/* Stats row */}
      <div className="flex justify-center gap-12 py-10 bg-white" style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        {[
          { value: "+500", label: "وحدة سكنية" },
          { value: "+12", label: "جامعة مشمولة" },
          { value: "4.9", label: "متوسط التقييم" },
          { value: "+2000", label: "طالب مسجل" },
        ].map(({ value, label }) => (
          <div key={label} className="text-center">
            <div className="text-[#001d28] font-black text-3xl" style={{ fontFamily: C }}>{value}</div>
            <div className="text-[#94a3b8] text-sm mt-1" style={{ fontFamily: F }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="py-8 px-8 flex items-center justify-between bg-[#001d28] text-[#94a3b8] text-sm" style={{ fontFamily: F }}>
        <div className="flex gap-6">
          <button className="hover:text-white transition-colors cursor-pointer">شروط الاستخدام</button>
          <button className="hover:text-white transition-colors cursor-pointer">سياسة الخصوصية</button>
          <button className="hover:text-white transition-colors cursor-pointer">تواصل معنا</button>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-[#f2994a] flex items-center justify-center text-[#001d28] font-black text-xs">س</div>
          <span>سكني © 2026</span>
        </div>
      </footer>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div
            className="bg-white rounded-3xl p-8 max-w-md w-full flex flex-col gap-6 relative"
            style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
          >
            <button
              onClick={() => setShowLogin(false)}
              className="absolute top-4 left-4 p-1.5 rounded-full hover:bg-gray-100 cursor-pointer"
            >
              <X size={18} color="#71787c" />
            </button>

            <div className="text-right">
              <h3 className="text-[#001d28] font-black text-2xl" style={{ fontFamily: C }}>
                تسجيل الدخول
              </h3>
              <p className="text-[#71787c] text-sm mt-1" style={{ fontFamily: F }}>
                أدخل بيانات اعتمادك للوصول إلى لوحة التحكم الخاصة بك.
              </p>
            </div>

            {error && (
              <div
                className="p-3 bg-red-50 text-red-600 text-sm rounded-xl text-right"
                style={{ fontFamily: F }}
              >
                {error}
              </div>
            )}

            <form onSubmit={handleLoginSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-[#001d28] text-sm font-semibold text-right" style={{ fontFamily: F }}>
                  البريد الإلكتروني
                </label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@email.com"
                    dir="ltr"
                    className="w-full bg-[#f3f4f5] rounded-xl pl-4 pr-12 py-3 text-sm text-[#001d28] placeholder-[#94a3b8] outline-none text-left"
                    style={{ fontFamily: F }}
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2">
                    <Mail size={16} color="#71787c" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#001d28] text-sm font-semibold text-right" style={{ fontFamily: F }}>
                  كلمة المرور
                </label>
                <div className="relative">
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    dir="ltr"
                    className="w-full bg-[#f3f4f5] rounded-xl pl-4 pr-12 py-3 text-sm text-[#001d28] placeholder-[#94a3b8] outline-none text-left"
                    style={{ fontFamily: F }}
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2">
                    <Lock size={16} color="#71787c" />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-2xl font-bold text-white text-base transition-opacity hover:opacity-90 cursor-pointer disabled:opacity-50 mt-2"
                style={{ background: "linear-gradient(135deg, #001d28, #003344)", fontFamily: F }}
              >
                {loading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
              </button>
            </form>

            <p className="text-center text-sm text-[#94a3b8]" style={{ fontFamily: F }}>
              ليس لديك حساب؟{" "}
              <button
                onClick={() => {
                  setShowLogin(false);
                  navigate("/register");
                }}
                className="text-[#f2994a] font-semibold hover:underline cursor-pointer"
              >
                إنشاء حساب جديد
              </button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

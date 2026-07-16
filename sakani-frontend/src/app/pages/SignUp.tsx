import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Phone, Mail, ChevronRight, Building2, GraduationCap, Lock } from "lucide-react";
import signupBg from "@/imports/إنشاءحسابجديدسكني/15afd845d01d9f003052411d898fe4cc52692f8a.png";
import api from "../../api/axiosConfig";

const F = "'Readex Pro', sans-serif";
const C = "'Cairo', sans-serif";

function InputField({
  label,
  value,
  onChange,
  icon: Icon,
  type = "text",
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  icon: React.ElementType;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[#001d28] text-sm font-semibold text-right" style={{ fontFamily: F }}>
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder || label}
          dir="rtl"
          required
          className="w-full bg-[#f3f4f5] rounded-xl pr-4 pl-12 py-4 text-sm text-[#001d28] placeholder-[#94a3b8] outline-none focus:ring-2 focus:ring-[#001d28]/10 text-right transition-all"
          style={{ fontFamily: F }}
        />
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <Icon size={16} color="#71787c" />
        </div>
      </div>
    </div>
  );
}

export default function SignUp() {
  const navigate = useNavigate();
  const [accountType, setAccountType] = useState<"student" | "owner">("student");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const payload = {
        fullName: name,
        email: email,
        password: password,
        phoneNumber: phone,
        role: accountType === "student" ? 0 : 1,
      };

      await api.post("/Auth/register", payload);
      navigate("/success");
    } catch (err: any) {
      setError(
        err.response?.data?.message ||
        err.response?.data?.Message ||
        "فشل إنشاء الحساب. يرجى التحقق من المدخلات والمحاولة مرة أخرى."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col" dir="rtl">
      {/* Header */}
      <nav
        className="flex items-center justify-between px-8 py-4 bg-white"
        style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}
      >
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-1 text-[#94a3b8] text-sm hover:text-[#001d28] transition-colors cursor-pointer"
          style={{ fontFamily: F }}
        >
          <ChevronRight size={16} />
          الرجوع
        </button>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#f2994a] flex items-center justify-center text-[#001d28] font-black text-sm">
            س
          </div>
          <span className="text-[#001d28] font-bold text-xl" style={{ fontFamily: C }}>سكني</span>
        </div>
      </nav>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="flex gap-8 max-w-5xl w-full">
          {/* Form card */}
          <form
            onSubmit={handleRegisterSubmit}
            className="bg-white rounded-3xl p-8 flex flex-col gap-6 flex-1"
            style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.06)" }}
          >
            <div className="text-right">
              <h2 className="text-[#001d28] font-black text-3xl" style={{ fontFamily: C }}>إنشاء حساب جديد</h2>
              <p className="text-[#71787c] text-sm mt-1" style={{ fontFamily: F }}>
                أنشئ حسابك وابدأ رحلتك مع سكني
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

            {/* Account type toggle */}
            <div className="flex gap-2 p-1 rounded-xl bg-[#f3f4f5]">
              {(["student", "owner"] as const).map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setAccountType(type)}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all cursor-pointer"
                  style={{
                    fontFamily: F,
                    background: accountType === type ? "white" : "transparent",
                    color: accountType === type ? "#001d28" : "#94a3b8",
                    boxShadow: accountType === type ? "0 2px 8px rgba(0,0,0,0.08)" : "none",
                  }}
                >
                  {type === "student" ? <GraduationCap size={16} /> : <Building2 size={16} />}
                  {type === "student" ? "طالب" : "مالك عقار"}
                </button>
              ))}
            </div>

            {/* Fields */}
            <div className="flex flex-col gap-4">
              <InputField
                label="الاسم الكامل"
                value={name}
                onChange={setName}
                icon={User}
                placeholder="أحمد منصور العمودي"
              />
              <InputField
                label="رقم الجوال"
                value={phone}
                onChange={setPhone}
                icon={Phone}
                placeholder="01XXXXXXXXX"
              />
              <InputField
                label="البريد الإلكتروني"
                value={email}
                onChange={setEmail}
                icon={Mail}
                type="email"
                placeholder="example@email.com"
              />
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
                    placeholder="أدخل كلمة مرور قوية"
                    dir="rtl"
                    className="w-full bg-[#f3f4f5] rounded-xl pr-4 pl-12 py-4 text-sm text-[#001d28] placeholder-[#94a3b8] outline-none focus:ring-2 focus:ring-[#001d28]/10 text-right"
                    style={{ fontFamily: F }}
                  />
                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <Lock size={16} color="#71787c" />
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-2xl font-bold text-white text-base transition-opacity hover:opacity-90 cursor-pointer disabled:opacity-50"
              style={{ background: "linear-gradient(135deg, #001d28, #003344)", fontFamily: F }}
            >
              {loading ? "جاري إنشاء الحساب..." : "إنشاء الحساب"}
            </button>

            <p className="text-center text-sm text-[#94a3b8]" style={{ fontFamily: F }}>
              لديك حساب بالفعل؟{" "}
              <button
                type="button"
                onClick={() => navigate("/")}
                className="text-[#f2994a] font-semibold hover:underline cursor-pointer"
              >
                تسجيل الدخول
              </button>
            </p>
          </form>

          {/* Dark panel */}
          <div
            className="rounded-3xl overflow-hidden w-80 flex flex-col justify-end relative shrink-0"
            style={{ minHeight: 480 }}
          >
            <img
              src={signupBg}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,29,40,0.95) 40%, rgba(0,29,40,0.3) 100%)" }} />
            <div className="relative p-8 text-right">
              <h3 className="text-white font-black text-2xl mb-2" style={{ fontFamily: C }}>
                ابدأ رحلتك<br />مع سكني اليوم
              </h3>
              <p className="text-[#94a3b8] text-sm mb-6" style={{ fontFamily: F }}>
                انضم إلى آلاف الطلاب والملاك في منصة السكن الطلابي الأولى
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { n: "+500", l: "وحدة سكنية" },
                  { n: "+12", l: "جامعة" },
                  { n: "4.9★", l: "تقييم المنصة" },
                  { n: "+2K", l: "طالب مسجل" },
                ].map(({ n, l }) => (
                  <div key={l} className="bg-white/10 rounded-xl p-3 text-right">
                    <div className="text-white font-black text-xl" style={{ fontFamily: C }}>{n}</div>
                    <div className="text-[#94a3b8] text-xs" style={{ fontFamily: F }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="py-4 text-center text-xs text-[#94a3b8]" style={{ fontFamily: F }}>
        بالتسجيل توافق على{" "}
        <button className="text-[#001d28] font-medium hover:underline cursor-pointer">شروط الاستخدام</button>
        {" "}و{" "}
        <button className="text-[#001d28] font-medium hover:underline cursor-pointer">سياسة الخصوصية</button>
      </div>
    </div>
  );
}

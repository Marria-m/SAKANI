import { useState, useEffect } from "react";
import { Camera, CheckCircle, Clock, Upload, Phone, Mail, User, Building2, XCircle } from "lucide-react";
import DashboardLayout from "../layout/DashboardLayout";
import { useAuth } from "../../context/AuthContext";
import api from "../../api/axiosConfig";
import profilePhoto from "@/imports/إعدادملفالمالكالبياناتوالتوثيق/4082ddea2b9dd0337d73f71e55279b60c46a94a0.png";
import idPhoto from "@/imports/إعدادملفالمالكالبياناتوالتوثيق/904c2b068797ed6416105528e26ce8e675451e2b.png";

const F = "'Readex Pro', sans-serif";
const C = "'Cairo', sans-serif";

const getImageUrl = (url?: string) => {
  if (!url) return null;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  const base = (import.meta.env.VITE_API_URL || "http://localhost:5125/api").replace("/api", "");
  return `${base}/${url.replace(/^\/+/, "")}`;
};

function ToggleRow({ label, defaultChecked }: { label: string; defaultChecked: boolean }) {
  const [on, setOn] = useState(defaultChecked);
  return (
    <div className="flex items-center justify-between p-3 rounded-xl" style={{ background: "#f9f9fb" }}>
      <button
        onClick={() => setOn(!on)}
        className="w-10 h-6 rounded-full transition-all relative cursor-pointer border-none"
        style={{ background: on ? "#001d28" : "#e2e8f0" }}
      >
        <div
          className="absolute top-1 w-4 h-4 rounded-full bg-white transition-all"
          style={{ left: on ? "auto" : 4, right: on ? 4 : "auto" }}
        />
      </button>
      <span className="text-[#001d28] text-sm" style={{ fontFamily: F }}>{label}</span>
    </div>
  );
}

function InputField({
  label,
  value,
  onChange,
  icon: Icon,
  placeholder,
  disabled = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  icon?: React.ElementType;
  placeholder?: string;
  disabled?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[#001d28] text-sm font-semibold text-right" style={{ fontFamily: F }}>
        {label}
      </label>
      <div className="relative">
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          dir="rtl"
          className={`w-full bg-[#f3f4f5] rounded-xl py-3.5 pr-11 pl-4 text-sm text-[#001d28] placeholder-[#94a3b8] outline-none text-right border-none ${
            disabled ? "opacity-60 cursor-not-allowed" : ""
          }`}
          style={{ fontFamily: F }}
        />
        {Icon && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <Icon size={16} color="#94a3b8" />
          </div>
        )}
      </div>
    </div>
  );
}

export default function Profile() {
  const { user } = useAuth();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [profileImgUrl, setProfileImgUrl] = useState<string | null>(null);
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<"personal" | "contact" | "identity" | "preferences">("personal");

  // Verification files
  const [selfieFile, setSelfieFile] = useState<File | null>(null);
  const [idCardFile, setIdCardFile] = useState<File | null>(null);
  const [verifying, setVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<string | null>(null);

  async function fetchProfile() {
    try {
      const res = await api.get("/owner/profile");
      const data = res.data;
      setName(`${data.firstName || ""} ${data.lastName || ""}`.trim() || "المالك");
      setPhone(data.phoneNumber || "");
      setEmail(data.email || "");
      setProfileImgUrl(data.profileImageUrl);
      setIsVerified(data.isVerified);
    } catch (err) {
      console.error("Failed to load profile details", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleSave = async () => {
    try {
      setError(null);
      const nameParts = name.trim().split(" ");
      const firstName = nameParts[0] || "";
      const lastName = nameParts.slice(1).join(" ") || "";

      await api.put("/owner/profile", {
        firstName,
        lastName,
        phoneNumber: phone,
      });

      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.message || "فشل حفظ التغييرات");
    }
  };

  const handleProfileImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    try {
      setError(null);
      const res = await api.post("/owner/profile/image", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setProfileImgUrl(res.data.profileImageUrl);
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.message || "فشل رفع الصورة الشخصية");
    }
  };

  const handleVerifyId = async () => {
    if (!selfieFile || !idCardFile) {
      setError("الرجاء تحديد صورة شخصية حديثة (سيلفي) وصورة الهوية الوطنية أولاً.");
      return;
    }
    setVerifying(true);
    setError(null);
    setVerificationResult(null);

    const formData = new FormData();
    formData.append("selfie", selfieFile);
    formData.append("idCard", idCardFile);

    try {
      const res = await api.post("/owner/verify-id", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (res.data.match) {
        setIsVerified(true);
        setVerificationResult("✓ تم مطابقة الهوية والتحقق من حسابك بنجاح!");
        fetchProfile(); // Reload verified picture and status
      } else {
        setError(res.data.error || "فشلت مطابقة الصور. يرجى التأكد من جودة الصورة وتطابق الوجه مع الهوية.");
      }
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.message || "فشل إرسال طلب التوثيق.");
    } finally {
      setVerifying(false);
    }
  };

  if (loading) {
    return (
      <DashboardLayout title="إعداد ملف المالك" subtitle="جاري التحميل...">
        <div className="flex justify-center items-center h-64 text-gray-500" style={{ fontFamily: F }}>
          جاري تحميل البيانات...
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout title="إعداد ملف المالك" subtitle="البيانات والتوثيق">
      <div className="p-8 flex flex-col gap-6">
        {/* Profile header card */}
        <div
          className="bg-white rounded-2xl p-6 text-right"
          style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}
        >
          <div className="flex items-start justify-between">
            {/* Progress */}
            <div className="flex flex-col gap-2 w-64 text-right">
              <div className="flex justify-between text-sm" style={{ fontFamily: F }}>
                <span className={isVerified ? "text-[#22c55e] font-bold" : "text-amber-500 font-bold"}>
                  {isVerified ? "100% مكتمل" : "85% مكتمل"}
                </span>
                <span className="text-[#001d28] font-medium">أكمل ملفك الشخصي</span>
              </div>
              <div className="h-2 rounded-full bg-[#f3f4f5]">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: isVerified ? "100%" : "85%", background: isVerified ? "#22c55e" : "#f59e0b" }}
                />
              </div>
              <p className="text-[#94a3b8] text-xs" style={{ fontFamily: F }}>
                {isVerified ? "حسابك موثق ونشط بالكامل." : "أكمل التوثيق لزيادة فرصك ظهوراً في البحث."}
              </p>
            </div>

            {/* Right: avatar + info */}
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="flex items-center gap-2 justify-end mb-1">
                  {isVerified ? (
                    <span
                      className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold"
                      style={{ background: "#dcfce7", color: "#16a34a", fontFamily: F }}
                    >
                      <CheckCircle size={10} />
                      حساب موثق
                    </span>
                  ) : (
                    <span
                      className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold"
                      style={{ background: "#fef3c7", color: "#b45309", fontFamily: F }}
                    >
                      <Clock size={10} />
                      غير موثق
                    </span>
                  )}
                </div>
                <h2 className="text-[#001d28] font-black text-2xl" style={{ fontFamily: C }}>
                  {name}
                </h2>
                <p className="text-[#94a3b8] text-sm" style={{ fontFamily: F }}>
                  مالك عقار
                </p>
              </div>

              {/* Avatar */}
              <div className="relative">
                <img
                  src={getImageUrl(profileImgUrl) || profilePhoto}
                  alt={name}
                  className="w-20 h-20 rounded-full object-cover"
                  style={{ border: "3px solid rgba(242,153,74,0.3)" }}
                />
                <label
                  className="absolute bottom-0 right-0 w-7 h-7 rounded-full flex items-center justify-center transition-opacity hover:opacity-90 cursor-pointer border-none"
                  style={{ background: "#f2994a", border: "2px solid white" }}
                >
                  <input type="file" accept="image/*" className="hidden" onChange={handleProfileImageUpload} />
                  <Camera size={12} color="#001d28" />
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Section tabs */}
        <div className="flex gap-2 justify-end">
          {[
            { key: "personal", label: "البيانات الشخصية" },
            { key: "contact", label: "معلومات الاتصال" },
            { key: "identity", label: "توثيق الهوية" },
            { key: "preferences", label: "تفضيلات الاستضافة" },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveSection(key as typeof activeSection)}
              className="px-4 py-2 rounded-xl text-sm font-medium transition-all cursor-pointer bg-white"
              style={{
                fontFamily: F,
                background: activeSection === key ? "#001d28" : "white",
                color: activeSection === key ? "white" : "#94a3b8",
                border: "1px solid",
                borderColor: activeSection === key ? "#001d28" : "rgba(0,0,0,0.08)",
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Error Alert */}
        {error && (
          <div
            className="p-4 rounded-xl text-sm text-[#dc2626] bg-[#fee2e2] flex items-center gap-2 justify-end text-right"
            style={{ fontFamily: F, border: "1px solid #fecaca" }}
          >
            <span>{error}</span>
            <XCircle size={18} />
          </div>
        )}

        {/* Success Alert */}
        {verificationResult && (
          <div
            className="p-4 rounded-xl text-sm text-[#16a34a] bg-[#f0fdf4] flex items-center gap-2 justify-end text-right"
            style={{ fontFamily: F, border: "1px solid #bbf7d0" }}
          >
            <span>{verificationResult}</span>
            <CheckCircle size={18} />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
          {/* Left: form */}
          <div
            className="bg-white rounded-2xl p-6 flex flex-col gap-6"
            style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}
          >
            {activeSection === "personal" && (
              <>
                <h3 className="text-[#001d28] font-bold text-lg text-right" style={{ fontFamily: C }}>
                  البيانات الشخصية
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  <InputField label="الاسم الكامل" value={name} onChange={setName} icon={User} />
                </div>
              </>
            )}

            {activeSection === "contact" && (
              <>
                <h3 className="text-[#001d28] font-bold text-lg text-right" style={{ fontFamily: C }}>
                  معلومات الاتصال
                </h3>
                <div className="grid grid-cols-1 gap-4 text-right">
                  <InputField label="رقم الجوال" value={phone} onChange={setPhone} icon={Phone} />
                  <InputField label="البريد الإلكتروني الرسمي" value={email} onChange={setEmail} icon={Mail} disabled={true} />
                  <div className="flex items-center gap-2 p-3 rounded-xl justify-end" style={{ background: "#f0fdf4", border: "1px solid #bbf7d0" }}>
                    <span className="text-[#16a34a] text-sm" style={{ fontFamily: F }}>
                      تم التحقق من رقم الجوال
                    </span>
                    <CheckCircle size={16} color="#16a34a" />
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-xl justify-end" style={{ background: "#f0fdf4", border: "1px solid #bbf7d0" }}>
                    <span className="text-[#16a34a] text-sm" style={{ fontFamily: F }}>
                      تم التحقق من البريد الإلكتروني
                    </span>
                    <CheckCircle size={16} color="#16a34a" />
                  </div>
                </div>
              </>
            )}

            {activeSection === "identity" && (
              <>
                <h3 className="text-[#001d28] font-bold text-lg text-right" style={{ fontFamily: C }}>
                  توثيق الهوية الوطنية
                </h3>
                <div className="flex flex-col gap-4 text-right">
                  <div className="grid grid-cols-2 gap-4">
                    {/* Front: Selfie */}
                    <div className="flex flex-col gap-2">
                      <p className="text-sm font-medium text-right text-[#001d28]" style={{ fontFamily: F }}>
                        الصورة الشخصية الحديثة (سيلفي للوجه)
                      </p>
                      <label
                        className="rounded-xl overflow-hidden relative h-36 cursor-pointer hover:opacity-90 transition-opacity flex items-center justify-center bg-[#f3f4f5]"
                        style={{ border: "2px dashed rgba(242,153,74,0.4)" }}
                      >
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => e.target.files && e.target.files[0] && setSelfieFile(e.target.files[0])}
                        />
                        {selfieFile ? (
                          <img src={URL.createObjectURL(selfieFile)} alt="Selfie" className="w-full h-full object-cover" />
                        ) : (
                          <div className="flex flex-col items-center gap-1">
                            <Upload size={24} color="#f2994a" />
                            <span className="text-xs text-[#94a3b8]" style={{ fontFamily: F }}>اضغط للرفع</span>
                          </div>
                        )}
                      </label>
                    </div>
                    {/* Back: ID Card */}
                    <div className="flex flex-col gap-2">
                      <p className="text-sm font-medium text-right text-[#001d28]" style={{ fontFamily: F }}>
                        صورة الهوية الوطنية أو الجواز (الوجه)
                      </p>
                      <label
                        className="rounded-xl overflow-hidden relative h-36 cursor-pointer hover:opacity-90 transition-opacity flex items-center justify-center bg-[#f3f4f5]"
                        style={{ border: "2px dashed rgba(242,153,74,0.4)" }}
                      >
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => e.target.files && e.target.files[0] && setIdCardFile(e.target.files[0])}
                        />
                        {idCardFile ? (
                          <img src={URL.createObjectURL(idCardFile)} alt="ID Card" className="w-full h-full object-cover" />
                        ) : (
                          <div className="flex flex-col items-center gap-1">
                            <Upload size={24} color="#f2994a" />
                            <span className="text-xs text-[#94a3b8]" style={{ fontFamily: F }}>اضغط للرفع</span>
                          </div>
                        )}
                      </label>
                    </div>
                  </div>

                  <div className="flex justify-end mt-2">
                    <button
                      type="button"
                      onClick={handleVerifyId}
                      disabled={verifying || !selfieFile || !idCardFile}
                      className={`px-6 py-3 rounded-xl font-bold text-white text-sm transition-all border-none ${
                        verifying || !selfieFile || !idCardFile ? "bg-gray-300 cursor-not-allowed" : "bg-[#f2994a] hover:bg-orange-600 cursor-pointer"
                      }`}
                      style={{ fontFamily: F }}
                    >
                      {verifying ? "جاري التحقق عبر الذكاء الاصطناعي..." : "بدء التحقق والمطابقة بالذكاء الاصطناعي"}
                    </button>
                  </div>
                </div>
              </>
            )}

            {activeSection === "preferences" && (
              <>
                <h3 className="text-[#001d28] font-bold text-lg text-right" style={{ fontFamily: C }}>
                  تفضيلات الاستضافة
                </h3>
                <div className="flex flex-col gap-3">
                  <ToggleRow label="قبول الحجوزات التلقائي للطالبات المستوفيات للشروط" defaultChecked={true} />
                  <ToggleRow label="إرسال رسائل التذكير بالدفع شهرياً" defaultChecked={true} />
                  <ToggleRow label="إظهار أوقات معاينة العقار على الملف الشخصي" defaultChecked={false} />
                </div>
              </>
            )}

            {/* Save Button */}
            {activeSection !== "identity" && (
              <div className="flex items-center justify-between mt-4">
                {saved && (
                  <div
                    className="px-4 py-2.5 rounded-xl text-sm font-semibold text-[#16a34a]"
                    style={{ background: "#f0fdf4", fontFamily: F }}
                  >
                    ✓ تم حفظ التغييرات بنجاح
                  </div>
                )}
                <button
                  onClick={handleSave}
                  className="px-8 py-3.5 rounded-xl font-bold text-white text-sm transition-opacity hover:opacity-90 cursor-pointer mr-auto border-none"
                  style={{ background: "linear-gradient(135deg, #001d28, #003344)", fontFamily: F }}
                >
                  حفظ التغييرات
                </button>
              </div>
            )}
          </div>

          {/* Right: info card */}
          <div className="flex flex-col gap-4">
            <div
              className="bg-white rounded-2xl p-5 text-right flex flex-col gap-3"
              style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}
            >
              <h3 className="text-[#001d28] font-bold text-sm" style={{ fontFamily: C }}>
                حالة الحساب
              </h3>
              <div className="flex justify-between items-center text-sm" style={{ fontFamily: F }}>
                <span className={isVerified ? "font-semibold text-[#16a34a]" : "font-semibold text-orange-600"}>
                  {isVerified ? "موثق بالكامل" : "تحت المراجعة"}
                </span>
                <span className="text-[#94a3b8]">توثيق الملف</span>
              </div>
              <div className="flex justify-between items-center text-sm" style={{ fontFamily: F }}>
                <span className="font-semibold text-[#16a34a]">نشط</span>
                <span className="text-[#94a3b8]">حالة النشر</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

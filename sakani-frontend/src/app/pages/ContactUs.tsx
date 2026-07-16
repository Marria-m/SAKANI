import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const F = "'Readex Pro', sans-serif";
const C = "'Cairo', sans-serif";

export default function ContactUs() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col" dir="rtl" style={{ fontFamily: F }}>
      {/* NavBar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white shrink-0" style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <button
          onClick={() => navigate("/")}
          className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90 cursor-pointer flex items-center gap-2 bg-[#001d28] border-none"
        >
          <ArrowLeft size={16} />
          العودة للرئيسية
        </button>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#f2994a] flex items-center justify-center text-[#001d28] font-black text-sm" style={{ fontFamily: F }}>
            س
          </div>
          <span className="text-[#001d28] font-bold text-xl" style={{ fontFamily: C }}>سكني</span>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 max-w-5xl w-full mx-auto p-8 flex flex-col gap-10">
        
        {/* Title */}
        <div className="text-center">
          <h1 className="text-[#001d28] font-black text-4xl mb-3" style={{ fontFamily: C }}>تواصل معنا 📞</h1>
          <p className="text-gray-500 text-base max-w-md mx-auto leading-relaxed">
            فريق دعم سكني هنا لمساعدتك والإجابة على أي استفسارات تخص حجز السكن أو إدارة العقارات.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8">
          {/* Support Info Sidebar */}
          <div className="flex flex-col gap-5 text-right">
            <div className="bg-white rounded-3xl p-6 flex flex-col gap-6" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.03)" }}>
              <h2 className="text-[#001d28] font-black text-lg" style={{ fontFamily: C }}>معلومات التواصل</h2>
              
              <div className="flex items-center gap-3 justify-end">
                <div className="text-right">
                  <span className="text-[10px] text-gray-400 block" style={{ fontFamily: F }}>البريد الإلكتروني</span>
                  <span className="text-xs text-[#001d28] font-bold" style={{ fontFamily: F }}>support@sakani.com</span>
                </div>
                <div className="w-9 h-9 rounded-xl bg-gray-50 flex items-center justify-center text-[#f2994a]">
                  <Mail size={16} />
                </div>
              </div>

              <div className="flex items-center gap-3 justify-end">
                <div className="text-right">
                  <span className="text-[10px] text-gray-400 block" style={{ fontFamily: F }}>رقم الهاتف الموحد</span>
                  <span className="text-xs text-[#001d28] font-bold" style={{ fontFamily: F }}>920001234 (20+)</span>
                </div>
                <div className="w-9 h-9 rounded-xl bg-gray-50 flex items-center justify-center text-[#f2994a]">
                  <Phone size={16} />
                </div>
              </div>

              <div className="flex items-center gap-3 justify-end">
                <div className="text-right">
                  <span className="text-[10px] text-gray-400 block" style={{ fontFamily: F }}>المقر الرئيسي</span>
                  <span className="text-xs text-[#001d28] font-bold" style={{ fontFamily: F }}>القاهرة، جمهورية مصر العربية</span>
                </div>
                <div className="w-9 h-9 rounded-xl bg-gray-50 flex items-center justify-center text-[#f2994a]">
                  <MapPin size={16} />
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl p-8 flex flex-col gap-6 text-right" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.03)" }}>
            <h2 className="text-[#001d28] font-black text-xl" style={{ fontFamily: C }}>أرسل استفسارك</h2>
            
            {submitted ? (
              <div className="p-6 rounded-2xl bg-green-50 text-green-700 flex flex-col items-center gap-2 text-center" style={{ border: "1px solid #bbf7d0" }}>
                <CheckCircle size={32} />
                <h3 className="font-bold text-lg" style={{ fontFamily: C }}>✓ تم إرسال رسالتك بنجاح!</h3>
                <p className="text-xs text-green-600 max-w-xs leading-relaxed" style={{ fontFamily: F }}>
                  شكراً لتواصلك مع سكني. سيقوم فريق خدمة العملاء بالرد عليك عبر البريد الإلكتروني في أقرب وقت ممكن.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-4 py-2 bg-green-600 text-white rounded-xl text-xs font-bold transition-opacity hover:opacity-90 border-none cursor-pointer"
                >
                  إرسال رسالة أخرى
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#001d28]">الاسم الكامل</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-[#f3f4f5] rounded-xl px-4 py-3 text-xs text-[#001d28] outline-none border-none text-right"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#001d28]">البريد الإلكتروني</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-[#f3f4f5] rounded-xl px-4 py-3 text-xs text-[#001d28] outline-none border-none text-left"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#001d28]">الموضوع</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="bg-[#f3f4f5] rounded-xl px-4 py-3 text-xs text-[#001d28] outline-none border-none text-right"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#001d28]">نص الرسالة</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-[#f3f4f5] rounded-xl px-4 py-3 text-xs text-[#001d28] outline-none border-none text-right resize-none"
                    placeholder="كيف يمكننا مساعدتك اليوم؟"
                  />
                </div>

                <div className="flex justify-end mt-2">
                  <button
                    type="submit"
                    className="px-6 py-3.5 rounded-xl bg-[#001d28] text-white font-bold text-xs hover:opacity-90 transition-opacity cursor-pointer border-none flex items-center gap-2"
                  >
                    <Send size={13} />
                    إرسال الرسالة
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

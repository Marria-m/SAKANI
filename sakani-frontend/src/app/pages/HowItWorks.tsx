import { useNavigate } from "react-router-dom";
import { ArrowLeft, GraduationCap, Building2 } from "lucide-react";

const F = "'Readex Pro', sans-serif";
const C = "'Cairo', sans-serif";

export default function HowItWorks() {
  const navigate = useNavigate();

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
      <div className="flex-1 max-w-4xl w-full mx-auto p-8 flex flex-col gap-10">
        
        {/* Title */}
        <div className="text-center">
          <h1 className="text-[#001d28] font-black text-4xl mb-3" style={{ fontFamily: C }}>كيف تعمل منصة سكني؟ 🤔</h1>
          <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
            منصة ذكية متكاملة تربط بين الطلاب الباحثين عن سكن ملائم وملاك العقارات لإيجار سكن آمن وموثق بأحدث تقنيات الذكاء الاصطناعي.
          </p>
        </div>

        {/* Roles Timelines */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          
          {/* Student Flow */}
          <div className="bg-white rounded-3xl p-8 flex flex-col gap-6 text-right" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.03)" }}>
            <div className="flex items-center gap-3 justify-end border-b border-gray-50 pb-4">
              <h2 className="text-[#2563eb] font-bold text-xl" style={{ fontFamily: C }}>للطلاب والطالبات</h2>
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                <GraduationCap size={20} color="#2563eb" />
              </div>
            </div>
            
            <div className="flex flex-col gap-6 relative pr-4" style={{ borderRight: "2px solid #eff6ff" }}>
              {[
                { title: "1. إنشاء حساب وتأكيد الهوية", desc: "سجل حسابك كطالب وأدخل بياناتك الدراسية للتحقق الفوري." },
                { title: "2. البحث والمقارنة", desc: "ابحث في منطقتك، واستخدم محرك التوصيات بالذكاء الاصطناعي للوصول للسكن الأنسب." },
                { title: "3. إرسال طلب الحجز", desc: "تواصل مع المالك مباشرة، وأرسل طلب حجز للسكن المفضل." },
                { title: "4. التوثيق والدفع الآمن", desc: "ادفع مبلغ التأمين والإيجار إلكترونياً بشكل موثق وآمن بالكامل." }
              ].map((step, idx) => (
                <div key={idx} className="relative flex flex-col gap-1">
                  <div className="absolute -right-[25px] top-1 w-3.5 h-3.5 rounded-full bg-[#2563eb] border-2 border-white" />
                  <h3 className="text-[#001d28] font-bold text-sm" style={{ fontFamily: C }}>{step.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Owner Flow */}
          <div className="bg-white rounded-3xl p-8 flex flex-col gap-6 text-right" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.03)" }}>
            <div className="flex items-center gap-3 justify-end border-b border-gray-50 pb-4">
              <h2 className="text-[#f2994a] font-bold text-xl" style={{ fontFamily: C }}>لملاك العقارات</h2>
              <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center">
                <Building2 size={20} color="#f2994a" />
              </div>
            </div>

            <div className="flex flex-col gap-6 relative pr-4" style={{ borderRight: "2px solid #fff7ed" }}>
              {[
                { title: "1. إنشاء الحساب وتوثيق الهوية", desc: "قم بتسجيل حسابك كمالك وتوثيق هويتك إلكترونياً بمطابقة الوجه بالذكاء الاصطناعي." },
                { title: "2. إضافة الوحدات وحساب السعر", desc: "أدخل مواصفات عقارك واحصل على السعر المثالي المقترح تلقائياً من مساعد السعر الذكي." },
                { title: "3. مراجعة وتصفية الطلبات", desc: "استعرض طلبات الطلاب المتقدمين، واطلع على تقييماتهم ومعلوماتهم واختر المناسب." },
                { title: "4. إدارة السكن والصيانة", desc: "تلقى الإيجارات شهرياً وتابع تنبيهات الصيانة المقدمة من الطلاب بكل سهولة." }
              ].map((step, idx) => (
                <div key={idx} className="relative flex flex-col gap-1">
                  <div className="absolute -right-[25px] top-1 w-3.5 h-3.5 rounded-full bg-[#f2994a] border-2 border-white" />
                  <h3 className="text-[#001d28] font-bold text-sm" style={{ fontFamily: C }}>{step.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Features Row */}
        <div className="bg-[#001d28] rounded-3xl p-8 text-white text-right flex flex-col sm:flex-row items-center justify-between gap-6" style={{ boxShadow: "0 8px 30px rgba(0,29,40,0.15)" }}>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg" style={{ fontFamily: C }}>منظومة موثقة بالكامل 🤝</h3>
            <p className="text-xs text-gray-300 leading-relaxed max-w-lg">
              نوثق العقارات والطلاب للتأكد من خلو الوحدات من النزاعات ومطابقتها للمواصفات الحقيقية لضمان سلامة الإقامة.
            </p>
          </div>
          <button
            onClick={() => navigate("/register")}
            className="px-6 py-3.5 rounded-xl bg-[#f2994a] text-[#001d28] font-bold text-sm hover:opacity-90 transition-opacity cursor-pointer border-none whitespace-nowrap"
          >
            ابدأ رحلتك الآن
          </button>
        </div>

      </div>
    </div>
  );
}

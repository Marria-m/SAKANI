import { useState } from "react";
import { ChevronDown, MessageSquare, Phone, Mail, BookOpen, Send, CheckCircle } from "lucide-react";
import DashboardLayout from "../layout/DashboardLayout";
import { useAuth } from "../../context/AuthContext";

const F = "'Readex Pro', sans-serif";
const C = "'Cairo', sans-serif";

const OWNER_FAQS = [
  {
    q: "كيف يمكنني إضافة عقار جديد؟",
    a: "من القائمة الجانبية، انقر على زر 'إضافة سكن جديد'. املأ البيانات الأساسية، حدد المزايا المتوفرة، حدد موقع العقار الجغرافي، ثم قم برفع صور العقار وانقر على 'نشر'."
  },
  {
    q: "كيف يعمل مساعد الأسعار الذكي؟",
    a: "يقوم نموذج الذكاء الاصطناعي بتحليل مساحة عقارك، عدد الغرف، وموقعه الجغرافي ومقارنتها بمتوسطات أسعار العقارات المماثلة في نفس المنطقة ليقترح عليك السعر المثالي شهرياً لضمان سرعة التأجير."
  },
  {
    q: "لماذا ترفض صور العقار التي أقوم برفعها؟",
    a: "تخضع جميع الصور المرفوعة لفحص جودة فوري بالذكاء الاصطناعي. يُرجى التأكد من أن الصور واضحة، ذات إضاءة جيدة، ولا تحتوي على غباش (Blur) أو تعتيم شديد لتقبلها المنصة بنجاح."
  },
  {
    q: "ما هي عملية توثيق الهوية بالمنصة؟",
    a: "لتأمين التعاملات، نطلب من الملاك توثيق هويتهم برفع صورة البطاقة الوطنية وصورة سيلفي حديثة. يقوم الذكاء الاصطناعي بمطابقة ملامح الوجه مع الهوية للتأكد من ملكية الحساب ويظهر لك شعار 'موثق' الأخضر."
  },
  {
    q: "كيف يمكنني إدارة طلبات الطلاب؟",
    a: "عند تقدم طالب لحجز وحدة سكنية، سيصلك إشعار وتظهر تفاصيل الطلب في صفحة 'طلبات الانتظار'. يمكنك مراجعة الملف التعريفي للطالب، تقييماته، ومعدل إشغال الوحدة الحالية ومن ثم قبول أو رفض الطلب."
  }
];

const TENANT_FAQS = [
  {
    q: "كيف يمكنني البحث وتصفية السكنات المتاحة؟",
    a: "من شاشة الرئيسية، يمكنك استخدام شريط التصفية السريع لتحديد المدينة، نطاق السعر، عدد الغرف وسياسة الجنس الملائمة للطلاب لتظهر لك العقارات المطابقة فوراً."
  },
  {
    q: "كيف يمكنني حجز موعد لمعاينة السكن؟",
    a: "عند الدخول لصفحة تفاصيل أي سكن، ستجد في اللوحة الجانبية نموذج 'طلب تحديد موعد معاينة'. حدد تاريخ الزيارة المقترح واكتب رسالتك للمالك ثم اضغط إرسال. يمكنك متابعة حالة الطلب في صفحة 'حجوزاتي وطلباتي'."
  },
  {
    q: "كيف أقوم بطلب تأجير رسمي (عقد إيجار)؟",
    a: "بمجرد قبول المالك لطلب المعاينة الخاص بك، سيظهر لك في صفحة تفاصيل العقار نموذج 'طلب تأجير السكن'. قم بتحديد موعد بدء العقد ومدة الإيجار المطلوبة ثم أرسل الطلب وبانتظار موافقة المالك النهائية."
  },
  {
    q: "كيف يمكنني الاحتفاظ بالعقارات المفضلة؟",
    a: "يمكنك الضغط على رمز القلب الأحمر الموجود على كرت العقار في شاشة الاستكشاف أو الضغط على زر 'إضافة للمفضلة' في صفحة تفاصيل السكن، لتجدها محفوظة دائماً للرجوع إليها لاحقاً في صفحة 'المفضلة'."
  },
  {
    q: "هل يمكنني إلغاء موعد معاينة أو حجز؟",
    a: "نعم، يمكنك إلغاء أي موعد معاينة قيد الانتظار أو حجز قادم بالذهاب إلى صفحة 'حجوزاتي وطلباتي' والضغط على زر 'إلغاء الطلب' بجانب كارت الحجز المعني."
  }
];

export default function Help() {
  const { user } = useAuth();
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [ticketSubmitted, setTicketSubmitted] = useState(false);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

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
  const FAQS = role === "Tenant" ? TENANT_FAQS : OWNER_FAQS;

  const handleTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTicketSubmitted(true);
    setSubject("");
    setMessage("");
  };

  return (
    <DashboardLayout title="مركز المساعدة" subtitle="الدعم الفني والإرشادات">
      <div className="p-8 flex flex-col gap-6" dir="rtl">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
          
          {/* Left Column: FAQ Accordion */}
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-3xl p-6 text-right" style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}>
              <div className="flex items-center gap-2 border-b border-gray-100 pb-4 mb-5">
                <BookOpen size={18} className="text-[#f2994a]" />
                <h2 className="text-[#001d28] font-black text-lg" style={{ fontFamily: C }}>الأسئلة الشائعة</h2>
              </div>

              <div className="flex flex-col gap-3">
                {FAQS.map((faq, idx) => {
                  const isOpen = openIdx === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border border-gray-100 overflow-hidden transition-all duration-200"
                    >
                      <button
                        onClick={() => setOpenIdx(isOpen ? null : idx)}
                        className="w-full px-5 py-4 flex items-center justify-between text-right font-semibold text-sm text-[#001d28] bg-white hover:bg-gray-50/50 cursor-pointer border-none"
                        style={{ fontFamily: F }}
                      >
                        <ChevronDown
                          size={16}
                          className="text-gray-400 transition-transform duration-200"
                          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                        />
                        <span>{faq.q}</span>
                      </button>
                      
                      {isOpen && (
                        <div className="px-5 pb-5 pt-1 text-xs text-gray-500 leading-relaxed bg-white border-t border-gray-50/80">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick tutorials panel */}
            <div className="bg-[#001d28] rounded-3xl p-6 text-white text-right flex flex-col gap-3" style={{ boxShadow: "0 4px 12px rgba(0,29,40,0.1)" }}>
              {role === "Tenant" ? (
                <>
                  <h3 className="font-bold text-base" style={{ fontFamily: C }}>إرشادات الأمان والموثوقية للطلاب 🛡️</h3>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    تأكد دائماً من معاينة السكن والاتفاق مع المالك قبل سداد مبالغ حجز الوحدات. نوصي بالتواصل مع الملاك من خلال القنوات الرسمية بالمنصة لضمان حقوقك وتأكيد حجزك بشكل موثق.
                  </p>
                </>
              ) : (
                <>
                  <h3 className="font-bold text-base" style={{ fontFamily: C }}>إرشادات الأمان والموثوقية للملاك 🛡️</h3>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    تأكد دائماً من صحة البيانات المرفوعة لعقاراتك لتجنب حظر الحساب. نوصي بتوثيق الهوية الوطنية لزيادة ثقة الطلاب في عروض السكن الخاصة بك ورفع معدل حجز الوحدات بنسبة تصل إلى 80%.
                  </p>
                </>
              )}
            </div>
          </div>

          {/* Right Column: Support form & Contacts */}
          <div className="flex flex-col gap-6">
            {/* Quick Contacts */}
            <div className="bg-white rounded-3xl p-6 text-right flex flex-col gap-4" style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}>
              <h3 className="text-[#001d28] font-bold text-base" style={{ fontFamily: C }}>اتصال سريع</h3>
              
              <div className="flex items-center gap-3 justify-end">
                <div className="text-right">
                  <span className="text-[10px] text-gray-400 block" style={{ fontFamily: F }}>الدعم الهاتفي</span>
                  <span className="text-xs text-[#001d28] font-bold" style={{ fontFamily: F }}>920001234 (20+)</span>
                </div>
                <div className="w-8 h-8 rounded-xl bg-orange-50 flex items-center justify-center text-[#f2994a]">
                  <Phone size={14} />
                </div>
              </div>

              <div className="flex items-center gap-3 justify-end">
                <div className="text-right">
                  <span className="text-[10px] text-gray-400 block" style={{ fontFamily: F }}>البريد الإلكتروني</span>
                  <span className="text-xs text-[#001d28] font-bold" style={{ fontFamily: F }}>support@sakani.com</span>
                </div>
                <div className="w-8 h-8 rounded-xl bg-orange-50 flex items-center justify-center text-[#f2994a]">
                  <Mail size={14} />
                </div>
              </div>
            </div>

            {/* Create Ticket Form */}
            <div className="bg-white rounded-3xl p-6 text-right flex flex-col gap-4" style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}>
              <div className="flex items-center gap-2 pb-2">
                <MessageSquare size={16} className="text-[#f2994a]" />
                <h3 className="text-[#001d28] font-bold text-base" style={{ fontFamily: C }}>فتح تذكرة دعم</h3>
              </div>

              {ticketSubmitted ? (
                <div className="p-4 rounded-xl bg-green-50 text-green-700 text-center flex flex-col items-center gap-2" style={{ border: "1px solid #bbf7d0" }}>
                  <CheckCircle size={24} />
                  <span className="text-xs font-bold" style={{ fontFamily: F }}>✓ تم إرسال طلبك!</span>
                  <span className="text-[10px] text-green-600 leading-relaxed" style={{ fontFamily: F }}>سيقوم فريق الدعم بمراجعة تذكرتك والرد عليك قريباً.</span>
                  <button
                    onClick={() => setTicketSubmitted(false)}
                    className="mt-2 px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white text-[10px] font-bold rounded-lg border-none cursor-pointer"
                  >
                    تذكرة جديدة
                  </button>
                </div>
              ) : (
                <form onSubmit={handleTicketSubmit} className="flex flex-col gap-3">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs text-gray-500 font-semibold">الموضوع</label>
                    <input
                      type="text"
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="عنوان المشكلة..."
                      className="bg-[#f3f4f5] rounded-xl px-3 py-2.5 text-xs text-[#001d28] outline-none border-none text-right"
                      style={{ fontFamily: F }}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs text-gray-500 font-semibold">التفاصيل</label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="اشرح المشكلة بالتفصيل هنا..."
                      className="bg-[#f3f4f5] rounded-xl px-3 py-2.5 text-xs text-[#001d28] outline-none border-none text-right resize-none"
                      style={{ fontFamily: F }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-[#001d28] hover:opacity-90 transition-opacity text-white text-xs font-bold border-none cursor-pointer flex items-center justify-center gap-1.5"
                    style={{ fontFamily: F }}
                  >
                    <Send size={12} />
                    إرسال الطلب
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}

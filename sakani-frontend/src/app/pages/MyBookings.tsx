import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Phone } from "lucide-react";
import DashboardLayout from "../layout/DashboardLayout";
import api from "../../api/axiosConfig";

const F = "'Readex Pro', sans-serif";
const C = "'Cairo', sans-serif";

const getImageUrl = (url?: string) => {
  if (!url) return null;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  const base = (import.meta.env.VITE_API_URL || "http://localhost:5125/api").replace("/api", "");
  return `${base}/${url.replace(/^\/+/, "")}`;
};

/* ── inline keyframes via style tag ── */
const AnimStyles = () => (
  <style>{`
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(18px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes shimmer {
      0%   { background-position: -400px 0; }
      100% { background-position: 400px 0; }
    }
    .fade-in-up { animation: fadeInUp .5s ease both; }
    .fade-d1 { animation-delay: .05s; }
    .fade-d2 { animation-delay: .10s; }
    .shimmer-bg {
      background: linear-gradient(90deg, #f0f0f0 25%, #e8e8e8 50%, #f0f0f0 75%);
      background-size: 800px 100%;
      animation: shimmer 1.5s infinite linear;
    }
    .card-lift {
      transition: transform .25s cubic-bezier(.4,0,.2,1), box-shadow .25s cubic-bezier(.4,0,.2,1);
    }
    .card-lift:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0,29,40,.06) !important;
    }
    .glass-card {
      background: rgba(255, 255, 255, 0.75);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.5);
    }
  `}</style>
);

export default function MyBookings() {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState<any[]>([]);
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState<"appointments" | "bookings">("bookings");
  const [cancellingId, setCancellingId] = useState<number | null>(null);

  async function loadTenantData() {
    try {
      const apptsRes = await api.get("/appointments");
      setAppointments(apptsRes.data || []);

      const bookingsRes = await api.get("/bookings");
      setBookings(bookingsRes.data || []);
    } catch (err) {
      console.error("Failed to load tenant request data", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadTenantData();
  }, []);

  const handleCancelAppointment = async (apptId: number) => {
    if (!window.confirm("هل أنت متأكد من إلغاء طلب المعاينة هذا؟")) return;
    setCancellingId(apptId);
    try {
      await api.post(`/appointments/${apptId}/cancel`);
      await loadTenantData();
    } catch (err) {
      console.error("Failed to cancel appointment", err);
      alert("فشل إلغاء طلب المعاينة.");
    } finally {
      setCancellingId(null);
    }
  };

  const handleCancelBooking = async (bookingId: number) => {
    if (!window.confirm("هل أنت متأكد من إلغاء هذا الحجز؟")) return;
    setCancellingId(bookingId);
    try {
      await api.post(`/bookings/${bookingId}/cancel`);
      await loadTenantData();
    } catch (err) {
      console.error("Failed to cancel booking", err);
      alert("فشل إلغاء الحجز.");
    } finally {
      setCancellingId(null);
    }
  };

  const getAppointmentStatusBadge = (status: number) => {
    switch (status) {
      case 0:
        return (
          <span className="px-3 py-1 rounded-xl text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">
            ⏳ قيد الانتظار
          </span>
        );
      case 1:
        return (
          <span className="px-3 py-1 rounded-xl text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
            🔍 قيد المراجعة
          </span>
        );
      case 2:
        return (
          <span className="px-3 py-1 rounded-xl text-xs font-bold bg-green-50 text-green-700 border border-green-200">
            ✓ مقبول
          </span>
        );
      case 3:
        return (
          <span className="px-3 py-1 rounded-xl text-xs font-bold bg-red-50 text-red-600 border border-red-200">
            ✕ مرفوض
          </span>
        );
      case 4:
        return (
          <span className="px-3 py-1 rounded-xl text-xs font-bold bg-gray-100 text-gray-500 border border-gray-200">
            ✕ ملغي
          </span>
        );
      default:
        return (
          <span className="px-3 py-1 rounded-xl text-xs font-bold bg-gray-50 text-gray-500">
            غير معروف
          </span>
        );
    }
  };

  const getBookingStatusBadge = (status: number) => {
    switch (status) {
      case 0:
        return (
          <span className="px-3 py-1 rounded-xl text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
            ⏳ حجز قادم (UPCOMING)
          </span>
        );
      case 1:
        return (
          <span className="px-3 py-1 rounded-xl text-xs font-bold bg-green-50 text-green-700 border border-green-200">
            ✓ عقد نشط (ACTIVE)
          </span>
        );
      case 2:
        return (
          <span className="px-3 py-1 rounded-xl text-xs font-bold bg-gray-100 text-gray-500 border border-gray-200">
            ✓ مكتمل (COMPLETED)
          </span>
        );
      case 3:
        return (
          <span className="px-3 py-1 rounded-xl text-xs font-bold bg-red-50 text-red-600 border border-red-200">
            ✕ ملغي (CANCELLED)
          </span>
        );
      default:
        return (
          <span className="px-3 py-1 rounded-xl text-xs font-bold bg-gray-50 text-gray-500">
            غير معروف
          </span>
        );
    }
  };

  return (
    <DashboardLayout title="حجوزاتي وطلباتي">
      <AnimStyles />
      <div className="p-6 md:p-8 flex flex-col gap-6" dir="rtl">
        {/* Title */}
        <div className="text-right fade-in-up">
          <h1 className="text-[#001d28] font-black text-2xl mb-1" style={{ fontFamily: C }}>إدارة الحجوزات والمعاينات 📆</h1>
          <p className="text-gray-500 text-xs">تابع حالة طلبات السكن ومواعيد المعاينة التي أرسلتها للملاك</p>
        </div>

        {/* Tab switch */}
        <div className="flex bg-[#f3f4f5] p-1.5 rounded-xl gap-1 w-fit mr-auto fade-in-up fade-d1">
          <button
            onClick={() => setTab("bookings")}
            className={`px-6 py-2 rounded-lg text-xs font-bold border-none cursor-pointer transition-all duration-200 ${
              tab === "bookings"
                ? "bg-[#001d28] text-white shadow-sm"
                : "bg-transparent text-gray-500 hover:text-[#001d28]"
            }`}
            style={{ fontFamily: F }}
          >
            🏠 عقود الإيجار والحجوزات ({bookings.length})
          </button>
          <button
            onClick={() => setTab("appointments")}
            className={`px-6 py-2 rounded-lg text-xs font-bold border-none cursor-pointer transition-all duration-200 ${
              tab === "appointments"
                ? "bg-[#001d28] text-white shadow-sm"
                : "bg-transparent text-gray-500 hover:text-[#001d28]"
            }`}
            style={{ fontFamily: F }}
          >
            ⏳ طلبات معاينة السكن ({appointments.length})
          </button>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2].map((i) => (
              <div key={i} className="rounded-2xl p-5 border border-gray-100 flex flex-col gap-4">
                <div className="h-6 w-1/3 rounded-lg shimmer-bg mr-auto" />
                <div className="h-4 w-3/4 rounded-lg shimmer-bg mr-auto" />
                <div className="h-16 rounded-xl shimmer-bg" />
              </div>
            ))}
          </div>
        ) : tab === "appointments" ? (
          appointments.length === 0 ? (
            <div className="glass-card rounded-3xl p-12 text-center text-gray-400 border border-gray-100 fade-in-up fade-d2" style={{ fontFamily: F }}>
              لم تقم بتقديم أي طلبات معاينة حتى الآن.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 fade-in-up fade-d2">
              {appointments.map((appt) => (
                <div
                  key={appt.id}
                  className="bg-white rounded-2xl p-5 border border-gray-50 flex flex-col gap-4 text-right transition-all card-lift"
                  style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.02)" }}
                >
                  <div className="flex justify-between items-start">
                    {getAppointmentStatusBadge(appt.status)}
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[#001d28] font-bold text-sm leading-tight hover:underline cursor-pointer" onClick={() => navigate(`/property/${appt.apartmentId}`)}>
                        {appt.apartmentTitle}
                      </span>
                      <span className="text-[10px] text-gray-400 flex items-center gap-1 mt-1 justify-end">
                        {appt.apartmentLocation}
                        <MapPin size={10} />
                      </span>
                    </div>
                  </div>

                  <div className="bg-[#f8f9fa] rounded-xl p-3 flex flex-col gap-2">
                    <div className="flex justify-between text-xs">
                      <span className="font-bold text-[#001d28]">{appt.appointmentDate}</span>
                      <span className="text-gray-400">تاريخ الزيارة المقترح:</span>
                    </div>
                    <div className="flex flex-col gap-1 mt-1 border-t border-gray-100 pt-2 text-right">
                      <span className="text-[10px] text-gray-400">رسالتك للمالك:</span>
                      <p className="text-xs text-[#71787c] leading-relaxed italic">"{appt.tenantMessage || "بدون رسالة"}"</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center border-t border-gray-50 pt-3">
                    <div className="flex items-center gap-2">
                      {appt.ownerPhone && (
                        <a href={`tel:${appt.ownerPhone}`} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-[#001d28] hover:bg-[#f2994a] transition-colors">
                          <Phone size={13} />
                        </a>
                      )}
                      <button
                        onClick={() => navigate("/chats")}
                        className="px-4 py-1.5 rounded-lg text-[10px] font-bold bg-[#001d28] text-white transition-opacity hover:opacity-90 border-none cursor-pointer"
                        style={{ fontFamily: F }}
                      >
                        مراسلة المالك
                      </button>
                    </div>

                    {appt.status === 0 && (
                      <button
                        onClick={() => handleCancelAppointment(appt.id)}
                        disabled={cancellingId === appt.id}
                        className="px-4 py-1.5 rounded-lg text-[10px] font-bold text-red-600 hover:bg-red-50 border border-red-200 cursor-pointer disabled:opacity-50 transition-colors"
                        style={{ fontFamily: F }}
                      >
                        {cancellingId === appt.id ? "جاري الإلغاء..." : "إلغاء الطلب"}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )
        ) : bookings.length === 0 ? (
          <div className="glass-card rounded-3xl p-12 text-center text-gray-400 border border-gray-100 fade-in-up fade-d2" style={{ fontFamily: F }}>
            لا توجد عقود إيجار نشطة أو حجوزات مسجلة حالياً.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 fade-in-up fade-d2">
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-white rounded-2xl p-5 border border-red-50/20 flex flex-col gap-4 text-right transition-all card-lift"
                style={{ boxShadow: "0 4px 16px rgba(0,29,40,0.03)" }}
              >
                <div className="flex justify-between items-start">
                  {getBookingStatusBadge(booking.status)}
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[#001d28] font-bold text-sm leading-tight hover:underline cursor-pointer" onClick={() => navigate(`/property/${booking.apartmentId}`)}>
                      {booking.apartmentTitle}
                    </span>
                    <span className="text-[10px] text-gray-400 flex items-center gap-1 mt-1 justify-end">
                      {booking.apartmentLocation}
                      <MapPin size={10} />
                    </span>
                  </div>
                </div>

                <div className="bg-[#f8f9fa] rounded-xl p-3 flex flex-col gap-2">
                  <div className="flex justify-between text-xs">
                    <span className="font-bold text-[#f2994a]">{booking.price?.toLocaleString("ar")} ج.م / شهر</span>
                    <span className="text-gray-400">القيمة الإيجارية:</span>
                  </div>
                  <div className="flex justify-between text-xs border-t border-gray-100 pt-2">
                    <span className="font-medium text-[#001d28]">{booking.startDate}</span>
                    <span className="text-gray-400">تاريخ بدء العقد:</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="font-medium text-[#001d28]">{booking.durationInMonthes} أشهر</span>
                    <span className="text-gray-400">مدة التعاقد:</span>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-gray-50 pt-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={booking.ownerProfileImageUrl ? getImageUrl(booking.ownerProfileImageUrl) || "" : ""}
                      alt=""
                      className="w-8 h-8 rounded-full object-cover bg-gray-100"
                    />
                    <div className="flex flex-col">
                      <span className="text-xs text-[#001d28] font-bold">{booking.ownerName}</span>
                      <span className="text-[10px] text-gray-400">المالك</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {booking.ownerPhone && (
                      <a href={`tel:${booking.ownerPhone}`} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-[#001d28] hover:bg-[#f2994a] transition-colors">
                        <Phone size={13} />
                      </a>
                    )}
                    <button
                      onClick={() => navigate("/chats")}
                      className="px-4 py-1.5 rounded-lg text-[10px] font-bold bg-[#001d28] text-white transition-opacity hover:opacity-90 border-none cursor-pointer"
                      style={{ fontFamily: F }}
                    >
                      مراسلة المالك
                    </button>
                    {booking.status === 0 && (
                      <button
                        onClick={() => handleCancelBooking(booking.id)}
                        disabled={cancellingId === booking.id}
                        className="px-4 py-1.5 rounded-lg text-[10px] font-bold text-red-600 hover:bg-red-50 border border-red-200 cursor-pointer disabled:opacity-50 transition-colors"
                        style={{ fontFamily: F }}
                      >
                        {cancellingId === booking.id ? "جاري إلغاء الحجز..." : "إلغاء الحجز"}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

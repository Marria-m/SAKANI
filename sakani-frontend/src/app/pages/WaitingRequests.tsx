import { useState, useEffect } from "react";
import { CheckCircle, XCircle, Clock, Undo2, Inbox, Calendar } from "lucide-react";
import DashboardLayout from "../layout/DashboardLayout";
import api from "../../api/axiosConfig";
import propImg1 from "@/imports/الطلباتوالحجز/6739ce1179abbfb8defc0a1d099350e4f5eb4852.png";
import studentImg1 from "@/imports/الطلباتوالحجز/70a0ea268c420806b4c52d7f5304dded97da60d8.png";

const F = "'Readex Pro', sans-serif";
const C = "'Cairo', sans-serif";

const getImageUrl = (url?: string) => {
  if (!url) return null;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  const base = (import.meta.env.VITE_API_URL || "http://localhost:5125/api").replace("/api", "");
  return `${base}/${url.replace(/^\/+/, "")}`;
};

export default function WaitingRequests() {
  const [bookings, setBookings] = useState<any[]>([]);
  const [appointments, setAppointments] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<"bookings" | "appointments">("appointments");
  const [loading, setLoading] = useState(true);

  async function loadData() {
    try {
      const [bookingsRes, apptsRes] = await Promise.all([
        api.get("/owner/bookings"),
        api.get("/owner/appointments")
      ]);
      setBookings(bookingsRes.data || []);
      setAppointments(apptsRes.data || []);
    } catch (err) {
      console.error("Failed to load owner requests", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  async function updateBookingStatus(bookingId: number, statusNum: number) {
    try {
      await api.patch(`/owner/bookings/${bookingId}/status`, { status: statusNum });
      await loadData();
    } catch (err) {
      console.error("Failed to update booking status", err);
    }
  }

  async function updateAppointmentStatus(apptId: number, statusNum: number) {
    try {
      await api.patch(`/owner/appointments/${apptId}/status`, { status: statusNum });
      await loadData();
    } catch (err) {
      console.error("Failed to update appointment status", err);
    }
  }

  const getStatusString = (statusNum: number) => {
    switch (statusNum) {
      case 0: return "pending";
      case 1: return "approved";
      case 2: return "approved";
      case 3: return "rejected";
      default: return "pending";
    }
  };

  const getApptStatusString = (statusNum: number) => {
    switch (statusNum) {
      case 0: return "pending";
      case 1: return "pending"; // UNDERREVIEW is also pending for UX
      case 2: return "approved";
      case 3: return "rejected";
      default: return "pending";
    }
  };

  // Booking Filtering
  const pendingBookings = bookings.filter((b) => getStatusString(b.status) === "pending");
  const processedBookings = bookings.filter((b) => getStatusString(b.status) !== "pending");

  // Appointment Filtering
  const pendingAppointments = appointments.filter((a) => getApptStatusString(a.appointmentStatus) === "pending");
  const processedAppointments = appointments.filter((a) => getApptStatusString(a.appointmentStatus) !== "pending");

  function BookingCard({ booking }: { booking: any }) {
    const status = getStatusString(booking.status);
    const processed = status !== "pending";

    return (
      <div
        className="bg-white rounded-2xl overflow-hidden transition-all text-right"
        style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.05)" }}
      >
        <div className="flex gap-0">
          {/* Property image */}
          <div className="w-36 shrink-0 relative">
            <img
              src={getImageUrl(booking.apartmentImageUrl) || propImg1}
              alt={booking.apartmentTitle}
              className="w-full h-full object-cover"
              style={{ minHeight: 140 }}
            />
            <div
              className="absolute bottom-2 right-2 px-2 py-0.5 rounded-full text-[10px] font-semibold text-white"
              style={{ background: "rgba(0,0,0,0.55)", fontFamily: F }}
            >
              {booking.durationInMonthes} أشهر
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-5 flex flex-col gap-3">
            {/* Header row */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2">
                {/* Status badge */}
                {status === "pending" && (
                  <span
                    className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold"
                    style={{ background: "#fef9c3", color: "#a16207", fontFamily: F }}
                  >
                    <Clock size={11} />
                    قيد الانتظار
                  </span>
                )}
                {status === "approved" && (
                  <span
                    className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold"
                    style={{ background: "#dcfce7", color: "#16a34a", fontFamily: F }}
                  >
                    <CheckCircle size={11} />
                    مقبول
                  </span>
                )}
                {status === "rejected" && (
                  <span
                    className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold"
                    style={{ background: "#fee2e2", color: "#dc2626", fontFamily: F }}
                  >
                    <XCircle size={11} />
                    مرفوض
                  </span>
                )}
              </div>
              <div className="flex items-center gap-3 text-right">
                <div>
                  <p className="text-[#001d28] font-bold text-sm" style={{ fontFamily: C }}>{booking.tenantName}</p>
                  <p className="text-[#94a3b8] text-xs" style={{ fontFamily: F }}>{booking.apartmentTitle}</p>
                </div>
                <img
                  src={getImageUrl(booking.tenantProfileImageUrl) || studentImg1}
                  alt={booking.tenantName}
                  className="w-10 h-10 rounded-full object-cover shrink-0"
                />
              </div>
            </div>

            {/* Details row */}
            <div className="flex items-center gap-4 justify-end flex-wrap">
              {[
                { label: "المدة", value: `${booking.durationInMonthes} أشهر` },
                { label: "رقم الجوال", value: booking.tenantPhone || "غير متوفر" },
                { label: "البريد الإلكتروني", value: booking.tenantEmail || "غير متوفر" },
              ].map(({ label, value }) => (
                <div key={label} className="text-right">
                  <p className="text-[#001d28] font-semibold text-xs" style={{ fontFamily: F }}>{value}</p>
                  <p className="text-[#94a3b8] text-[10px]" style={{ fontFamily: F }}>{label}</p>
                </div>
              ))}
            </div>

            {/* Actions */}
            {!processed ? (
              <div className="flex gap-2 justify-end mt-auto">
                <button
                  onClick={() => updateBookingStatus(booking.id, 3)} // Rejected
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-[#dc2626] transition-colors hover:bg-[#fee2e2] cursor-pointer border border-[#dc2626]/20 bg-transparent"
                  style={{ fontFamily: F }}
                >
                  <XCircle size={14} />
                  رفض
                </button>
                <button
                  onClick={() => updateBookingStatus(booking.id, 1)} // Approved
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white transition-opacity hover:opacity-90 cursor-pointer border-none"
                  style={{ background: "#16a34a", fontFamily: F }}
                >
                  <CheckCircle size={14} />
                  قبول
                </button>
              </div>
            ) : (
              <div className="flex justify-end mt-auto">
                <button
                  onClick={() => updateBookingStatus(booking.id, 0)} // Pending
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs text-[#94a3b8] hover:text-[#001d28] hover:bg-[#f3f4f5] transition-colors cursor-pointer border-none bg-transparent"
                  style={{ fontFamily: F }}
                >
                  <Undo2 size={13} />
                  تراجع
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  function AppointmentCard({ appt }: { appt: any }) {
    const status = getApptStatusString(appt.appointmentStatus);
    const processed = status !== "pending";

    return (
      <div
        className="bg-white rounded-2xl overflow-hidden transition-all text-right border border-gray-100/50"
        style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.05)" }}
      >
        <div className="flex gap-0">
          {/* Calendar icon left column */}
          <div className="w-32 shrink-0 bg-gray-50 flex flex-col items-center justify-center border-l border-gray-100 gap-1.5 p-4">
            <div className="p-3 bg-[#f2994a]/10 rounded-full text-[#f2994a]">
              <Calendar size={24} />
            </div>
            <span className="text-[10px] text-[#001d28] font-bold" style={{ fontFamily: C }}>طلب معاينة</span>
          </div>

          {/* Content */}
          <div className="flex-1 p-5 flex flex-col gap-3">
            {/* Header row */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2">
                {/* Status badge */}
                {status === "pending" && (
                  <span
                    className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold"
                    style={{ background: "#fef9c3", color: "#a16207", fontFamily: F }}
                  >
                    <Clock size={11} />
                    قيد الانتظار
                  </span>
                )}
                {status === "approved" && (
                  <span
                    className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold"
                    style={{ background: "#dcfce7", color: "#16a34a", fontFamily: F }}
                  >
                    <CheckCircle size={11} />
                    مقبول
                  </span>
                )}
                {status === "rejected" && (
                  <span
                    className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold"
                    style={{ background: "#fee2e2", color: "#dc2626", fontFamily: F }}
                  >
                    <XCircle size={11} />
                    مرفوض
                  </span>
                )}
              </div>
              <div className="flex items-center gap-3 text-right">
                <div>
                  <p className="text-[#001d28] font-bold text-sm" style={{ fontFamily: C }}>{appt.tenantName}</p>
                  <p className="text-[#94a3b8] text-xs" style={{ fontFamily: F }}>{appt.apartmentTitle}</p>
                </div>
              </div>
            </div>

            {/* Tenant Message */}
            {appt.tenantMessage && (
              <p className="text-gray-600 text-xs bg-gray-50 p-2.5 rounded-xl border border-gray-100 leading-relaxed text-right" style={{ fontFamily: F }}>
                {appt.tenantMessage}
              </p>
            )}

            {/* Details row */}
            <div className="flex items-center gap-4 justify-end flex-wrap">
              {[
                { label: "تاريخ الزيارة المقترح", value: appt.appointmentDate },
                { label: "رقم الجوال", value: appt.tenantPhone || "غير متوفر" },
                { label: "البريد الإلكتروني", value: appt.tenantEmail || "غير متوفر" },
              ].map(({ label, value }) => (
                <div key={label} className="text-right">
                  <p className="text-[#001d28] font-semibold text-xs" style={{ fontFamily: F }}>{value}</p>
                  <p className="text-[#94a3b8] text-[10px]" style={{ fontFamily: F }}>{label}</p>
                </div>
              ))}
            </div>

            {/* Actions */}
            {!processed ? (
              <div className="flex gap-2 justify-end mt-auto">
                <button
                  onClick={() => updateAppointmentStatus(appt.id, 3)} // REJECTED
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-[#dc2626] transition-colors hover:bg-[#fee2e2] cursor-pointer border border-[#dc2626]/20 bg-transparent"
                  style={{ fontFamily: F }}
                >
                  <XCircle size={14} />
                  رفض
                </button>
                <button
                  onClick={() => updateAppointmentStatus(appt.id, 2)} // APPROVED
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white transition-opacity hover:opacity-90 cursor-pointer border-none"
                  style={{ background: "#16a34a", fontFamily: F }}
                >
                  <CheckCircle size={14} />
                  قبول
                </button>
              </div>
            ) : (
              <div className="flex justify-end mt-auto">
                <button
                  onClick={() => updateAppointmentStatus(appt.id, 0)} // PENDING
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs text-[#94a3b8] hover:text-[#001d28] hover:bg-[#f3f4f5] transition-colors cursor-pointer border-none bg-transparent"
                  style={{ fontFamily: F }}
                >
                  <Undo2 size={13} />
                  تراجع
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <DashboardLayout title="طلبات الانتظار" subtitle="جاري تحميل الطلبات...">
        <div className="flex items-center justify-center h-64 text-gray-500" style={{ fontFamily: F }}>
          جاري التحميل...
        </div>
      </DashboardLayout>
    );
  }

  // Active dataset variables based on tab
  const activePendingList = activeTab === "bookings" ? pendingBookings : pendingAppointments;
  const activeProcessedList = activeTab === "bookings" ? processedBookings : processedAppointments;
  const totalPending = activeTab === "bookings" ? pendingBookings.length : pendingAppointments.length;
  const totalApproved = activeTab === "bookings"
    ? bookings.filter((b) => getStatusString(b.status) === "approved").length
    : appointments.filter((a) => getApptStatusString(a.appointmentStatus) === "approved").length;
  const totalRejected = activeTab === "bookings"
    ? bookings.filter((b) => getStatusString(b.status) === "rejected").length
    : appointments.filter((a) => getApptStatusString(a.appointmentStatus) === "rejected").length;

  return (
    <DashboardLayout title="طلبات الانتظار">
      <div className="p-8 flex flex-col gap-6" dir="rtl">
        {/* Tab Switcher */}
        <div className="flex gap-2 bg-[#f3f4f5] p-1 rounded-2xl w-fit mr-auto">
          <button
            onClick={() => setActiveTab("appointments")}
            className="px-6 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer border-none"
            style={{
              fontFamily: F,
              background: activeTab === "appointments" ? "white" : "transparent",
              color: activeTab === "appointments" ? "#001d28" : "#94a3b8",
              boxShadow: activeTab === "appointments" ? "0 4px 12px rgba(0,0,0,0.05)" : "none",
            }}
          >
            📅 طلبات المعاينة ({pendingAppointments.length})
          </button>
          <button
            onClick={() => setActiveTab("bookings")}
            className="px-6 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer border-none"
            style={{
              fontFamily: F,
              background: activeTab === "bookings" ? "white" : "transparent",
              color: activeTab === "bookings" ? "#001d28" : "#94a3b8",
              boxShadow: activeTab === "bookings" ? "0 4px 12px rgba(0,0,0,0.05)" : "none",
            }}
          >
            📜 طلبات الحجز ({pendingBookings.length})
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: activeTab === "bookings" ? "حجوزات معلقة" : "معاينات معلقة", value: totalPending, color: "#a16207", bg: "#fef9c3" },
            { label: activeTab === "bookings" ? "حجوزات مقبولة" : "معاينات مقبولة", value: totalApproved, color: "#16a34a", bg: "#dcfce7" },
            { label: activeTab === "bookings" ? "حجوزات مرفوضة" : "معاينات مرفوضة", value: totalRejected, color: "#dc2626", bg: "#fee2e2" },
          ].map(({ label, value, color, bg }) => (
            <div
              key={label}
              className="bg-white rounded-2xl p-5 text-right"
              style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}
            >
              <div className="text-3xl font-black" style={{ color, fontFamily: C }}>{value}</div>
              <div className="text-sm text-[#71787c] mt-1" style={{ fontFamily: F }}>{label}</div>
              <div
                className="mt-3 h-1.5 rounded-full"
                style={{ background: bg, width: "100%" }}
              />
            </div>
          ))}
        </div>

        {/* Pending requests */}
        {activePendingList.length > 0 ? (
          <div className="flex flex-col gap-4">
            <h2 className="text-[#001d28] font-bold text-lg text-right flex items-center gap-2 justify-end" style={{ fontFamily: C }}>
              <span>الطلبات الواردة قيد الانتظار</span>
              <span
                className="px-2.5 py-0.5 rounded-full text-xs font-semibold"
                style={{ background: "#fef9c3", color: "#a16207", fontFamily: F }}
              >
                {activePendingList.length}
              </span>
            </h2>
            <div className="flex flex-col gap-4">
              {activePendingList.map((item) => (
                activeTab === "bookings"
                  ? <BookingCard key={item.id} booking={item} />
                  : <AppointmentCard key={item.id} appt={item} />
              ))}
            </div>
          </div>
        ) : (
          <div
            className="bg-white rounded-3xl flex flex-col items-center justify-center gap-4 py-20 text-center"
            style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.05)" }}
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center bg-[#f3f4f5]"
            >
              <Inbox size={28} color="#94a3b8" />
            </div>
            <div>
              <p className="text-[#001d28] font-bold text-lg" style={{ fontFamily: C }}>
                {activeTab === "bookings" ? "لا توجد طلبات حجز معلقة" : "لا توجد طلبات معاينة معلقة"}
              </p>
              <p className="text-[#94a3b8] text-sm mt-1" style={{ fontFamily: F }}>تمت معالجة جميع الطلبات بنجاح</p>
            </div>
          </div>
        )}

        {/* Processed */}
        {activeProcessedList.length > 0 && (
          <div className="flex flex-col gap-4">
            <h2 className="text-[#001d28] font-bold text-base text-right" style={{ fontFamily: C }}>
              الطلبات المعالجة سابقاً
            </h2>
            <div className="flex flex-col gap-3 opacity-80">
              {activeProcessedList.map((item) => (
                activeTab === "bookings"
                  ? <BookingCard key={item.id} booking={item} />
                  : <AppointmentCard key={item.id} appt={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

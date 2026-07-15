import { useState, useEffect } from "react";
import { CheckCircle, XCircle, Clock, Undo2, Inbox } from "lucide-react";
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
  const [loading, setLoading] = useState(true);

  async function loadBookings() {
    try {
      const response = await api.get("/owner/bookings");
      setBookings(response.data || []);
    } catch (err) {
      console.error("Failed to load owner bookings", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadBookings();
  }, []);

  async function updateStatus(bookingId: number, statusNum: number) {
    try {
      await api.patch(`/owner/bookings/${bookingId}/status`, { status: statusNum });
      // Reload bookings to reflect the update
      await loadBookings();
    } catch (err) {
      console.error("Failed to update booking status", err);
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

  const pendingBookings = bookings.filter((b) => getStatusString(b.status) === "pending");
  const processedBookings = bookings.filter((b) => getStatusString(b.status) !== "pending");

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
                  onClick={() => updateStatus(booking.id, 3)} // CANCELLED / Rejected
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-[#dc2626] transition-colors hover:bg-[#fee2e2] cursor-pointer border border-[#dc2626]/20 bg-transparent"
                  style={{ fontFamily: F }}
                >
                  <XCircle size={14} />
                  رفض
                </button>
                <button
                  onClick={() => updateStatus(booking.id, 1)} // ACTIVE / Approved
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
                  onClick={() => updateStatus(booking.id, 0)} // UPCOMING / Pending
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

  return (
    <DashboardLayout title="طلبات الانتظار">
      <div className="p-8 flex flex-col gap-6">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: "طلبات معلقة", value: pendingBookings.length, color: "#a16207", bg: "#fef9c3" },
            { label: "طلبات مقبولة", value: bookings.filter((b) => getStatusString(b.status) === "approved").length, color: "#16a34a", bg: "#dcfce7" },
            { label: "طلبات مرفوضة", value: bookings.filter((b) => getStatusString(b.status) === "rejected").length, color: "#dc2626", bg: "#fee2e2" },
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

        {/* Pending bookings */}
        {pendingBookings.length > 0 ? (
          <div className="flex flex-col gap-4">
            <h2 className="text-[#001d28] font-bold text-lg text-right animate-pulse" style={{ fontFamily: C }}>
              طلبات قيد الانتظار
              <span
                className="mr-2 px-2.5 py-0.5 rounded-full text-sm font-semibold"
                style={{ background: "#fef9c3", color: "#a16207", fontFamily: F }}
              >
                {pendingBookings.length}
              </span>
            </h2>
            {pendingBookings.map((b) => (
              <BookingCard key={b.id} booking={b} />
            ))}
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
              <p className="text-[#001d28] font-bold text-lg" style={{ fontFamily: C }}>لا توجد طلبات معلقة</p>
              <p className="text-[#94a3b8] text-sm mt-1" style={{ fontFamily: F }}>تمت معالجة جميع الطلبات</p>
            </div>
          </div>
        )}

        {/* Processed */}
        {processedBookings.length > 0 && (
          <div className="flex flex-col gap-4">
            <h2 className="text-[#001d28] font-bold text-base text-right" style={{ fontFamily: C }}>
              الطلبات المعالجة
            </h2>
            <div className="flex flex-col gap-3 opacity-80">
              {processedBookings.map((b) => (
                <BookingCard key={b.id} booking={b} />
              ))}
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

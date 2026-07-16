import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CheckCircle, XCircle, MessageCircle, ShieldCheck, GraduationCap, Phone, Mail, ChevronRight } from "lucide-react";
import DashboardLayout from "../layout/DashboardLayout";
import api from "../../api/axiosConfig";
import studentImg from "@/imports/اليوزرمنوحجهنظرالمالك/3a8cff4f9606598105da6f8258dcb2f38b9c529c.png";
import propImg1 from "@/imports/الطلباتوالحجز/6739ce1179abbfb8defc0a1d099350e4f5eb4852.png";

const F = "'Readex Pro', sans-serif";
const C = "'Cairo', sans-serif";

const getImageUrl = (url?: string) => {
  if (!url) return null;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  const base = (import.meta.env.VITE_API_URL || "http://localhost:5125/api").replace("/api", "");
  return `${base}/${url.replace(/^\/+/, "")}`;
};

export default function UserRequest() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [booking, setBooking] = useState<any>(null);
  const [tenantProfile, setTenantProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  async function loadBookingDetails() {
    try {
      const response = await api.get(`/owner/bookings/${id}`);
      const bookingData = response.data;
      setBooking(bookingData);
      if (bookingData.tenantId) {
        try {
          const profileResponse = await api.get(`/tenants/${bookingData.tenantId}/profile`);
          setTenantProfile(profileResponse.data);
        } catch (profileErr) {
          console.error("Failed to load tenant profile details", profileErr);
        }
      }
    } catch (err) {
      console.error("Failed to load booking details", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (id) {
      loadBookingDetails();
    }
  }, [id]);

  async function updateStatus(statusNum: number) {
    try {
      await api.patch(`/owner/bookings/${id}/status`, { status: statusNum });
      await loadBookingDetails();
    } catch (err) {
      console.error("Failed to update status", err);
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

  if (loading) {
    return (
      <DashboardLayout title="طلب مستأجر" subtitle="جاري تحميل التفاصيل...">
        <div className="flex items-center justify-center h-64 text-gray-500" style={{ fontFamily: F }}>
          جاري التحميل...
        </div>
      </DashboardLayout>
    );
  }

  if (!booking) {
    return (
      <DashboardLayout title="طلب مستأجر" subtitle="الطلب غير موجود">
        <div className="flex flex-col items-center justify-center h-64 text-gray-500 gap-4" style={{ fontFamily: F }}>
          <span>عذراً، لم نتمكن من العثور على طلب الحجز المطلوب.</span>
          <button
            onClick={() => navigate("/dashboard")}
            className="px-4 py-2 bg-[#001d28] text-white rounded-xl text-sm"
          >
            العودة للرئيسية
          </button>
        </div>
      </DashboardLayout>
    );
  }

  const requestStatus = getStatusString(booking.status);

  return (
    <DashboardLayout title="طلب مستأجر">
      <div className="p-8 flex flex-col gap-5">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-right justify-end" style={{ fontFamily: F }}>
          <button onClick={() => navigate("/dashboard")} className="text-[#94a3b8] hover:text-[#001d28] transition-colors cursor-pointer border-none bg-transparent">
            الطلبات
          </button>
          <ChevronRight size={14} color="#94a3b8" />
          <span className="text-[#001d28] font-medium">{booking.tenantName}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">
          {/* Left */}
          <div className="flex flex-col gap-4 text-right">
            {/* Student profile card */}
            <div
              className="bg-white rounded-2xl p-6"
              style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}
            >
              <div className="flex items-start gap-4">
                <div className="flex flex-col gap-3 flex-1 text-right">
                  <div>
                    <div className="flex items-center gap-2 justify-end mb-1">
                      <span
                        className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold"
                        style={{ background: "#dcfce7", color: "#16a34a", fontFamily: F }}
                      >
                        <ShieldCheck size={11} />
                        هوية موثقة
                      </span>
                    </div>
                    <h2 className="text-[#001d28] font-black text-2xl" style={{ fontFamily: C }}>{booking.tenantName}</h2>
                    <div className="flex items-center gap-2 justify-end mt-1">
                      <span className="text-[#94a3b8] text-sm" style={{ fontFamily: F }}>
                        {tenantProfile?.collage ? `${tenantProfile.collage} - ${tenantProfile.major || ""} (${tenantProfile.universityYear || ""})` : "طالبة مسجلة"}
                      </span>
                      <GraduationCap size={14} color="#94a3b8" />
                    </div>
                  </div>
                </div>
                <img src={getImageUrl(booking.tenantProfileImageUrl) || studentImg} alt={booking.tenantName} className="w-20 h-20 rounded-2xl object-cover" />
              </div>
            </div>

            {/* Student Bio */}
            {tenantProfile?.bio && (
              <div
                className="bg-white rounded-2xl p-5 text-right flex flex-col gap-3"
                style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}
              >
                <h3 className="text-[#001d28] font-bold text-base" style={{ fontFamily: C }}>رسالة المستأجر / النبذة</h3>
                <p className="text-[#71787c] text-sm leading-relaxed" style={{ fontFamily: F }}>
                  {tenantProfile.bio}
                </p>
              </div>
            )}

            {/* Action buttons */}
            {requestStatus === "pending" ? (
              <div className="flex gap-3">
                <button
                  onClick={() => updateStatus(3)} // Rejected / Cancelled
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm text-[#dc2626] transition-colors hover:bg-[#fee2e2] cursor-pointer bg-transparent border border-[#dc2626]/30"
                  style={{ fontFamily: F }}
                >
                  <XCircle size={16} />
                  رفض الطلب
                </button>
                <button
                  onClick={() => updateStatus(1)} // Approved / Active
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm text-white transition-opacity hover:opacity-90 cursor-pointer border-none bg-[#16a34a]"
                  style={{ fontFamily: F }}
                >
                  <CheckCircle size={16} />
                  قبول الطلب
                </button>
                <button
                  className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm text-[#001d28] bg-[#f3f4f5] hover:bg-[#ececf0] transition-colors border-none cursor-pointer"
                  style={{ fontFamily: F }}
                >
                  <MessageCircle size={16} />
                  بدء محادثة
                </button>
              </div>
            ) : (
              <div
                className="flex items-center gap-3 p-4 rounded-xl justify-end"
                style={{
                  background: requestStatus === "approved" ? "#f0fdf4" : "#fee2e2",
                  border: `1px solid ${requestStatus === "approved" ? "#bbf7d0" : "#fecaca"}`,
                }}
              >
                <button
                  onClick={() => updateStatus(0)} // Pending
                  className="text-xs text-[#94a3b8] hover:text-[#001d28] transition-colors border-none bg-transparent cursor-pointer ml-auto"
                  style={{ fontFamily: F }}
                >
                  تراجع
                </button>
                <div className="text-right flex flex-col gap-0.5">
                  <p
                    className="font-bold text-sm"
                    style={{ fontFamily: F, color: requestStatus === "approved" ? "#16a34a" : "#dc2626" }}
                  >
                    {requestStatus === "approved" ? "تم قبول الطلب" : "تم رفض الطلب"}
                  </p>
                  <p className="text-xs text-[#94a3b8]" style={{ fontFamily: F }}>
                    {requestStatus === "approved" ? "سيتم إشعار الطالبة فوراً" : "سيتم إشعار الطالبة بالرفض"}
                  </p>
                </div>
                {requestStatus === "approved" ? (
                  <CheckCircle size={20} color="#16a34a" />
                ) : (
                  <XCircle size={20} color="#dc2626" />
                )}
              </div>
            )}
          </div>

          {/* Right panel */}
          <div className="flex flex-col gap-4">
            {/* Booking details */}
            <div
              className="bg-white rounded-2xl p-5 flex flex-col gap-3 text-right"
              style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}
            >
              <h3 className="text-[#001d28] font-bold text-base" style={{ fontFamily: C }}>
                تفاصيل الطلب
              </h3>
              <img src={getImageUrl(booking.apartmentImageUrl) || propImg1} alt={booking.apartmentTitle} className="w-full h-32 object-cover rounded-xl" />
              {[
                { label: "العقار", value: booking.apartmentTitle },
                { label: "المدة", value: `${booking.durationInMonthes} أشهر` },
                { label: "تاريخ البداية", value: booking.startDate || "—" },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between text-sm py-2" style={{ borderBottom: "1px solid rgba(0,0,0,0.05)", fontFamily: F }}>
                  <span className="font-medium text-[#001d28]">{value}</span>
                  <span className="text-[#94a3b8]">{label}</span>
                </div>
              ))}
            </div>

            {/* Contact */}
            <div
              className="bg-white rounded-2xl p-5 flex flex-col gap-2"
              style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}
            >
              <h3 className="text-[#001d28] font-bold text-sm text-right mb-1" style={{ fontFamily: C }}>
                معلومات الاتصال
              </h3>
              <div className="flex items-center gap-2 justify-end text-sm text-[#001d28]" style={{ fontFamily: F }}>
                <span>{booking.tenantPhone || "غير متوفر"}</span>
                <Phone size={14} color="#94a3b8" />
              </div>
              <div className="flex items-center gap-2 justify-end text-sm text-[#001d28]" style={{ fontFamily: F }}>
                <span>{booking.tenantEmail || "غير متوفر"}</span>
                <Mail size={14} color="#94a3b8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

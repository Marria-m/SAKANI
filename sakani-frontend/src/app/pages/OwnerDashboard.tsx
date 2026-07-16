import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MessageCircle, FileText, Clock, ShieldAlert, TrendingUp, Coins, Calendar } from "lucide-react";
import DashboardLayout from "../layout/DashboardLayout";
import studentPhoto1 from "@/imports/لوحةتحكمالمالك/2c3304bde3b1760d646a899a90bd31560f17d450.png";
import propertyImg1 from "@/imports/لوحةتحكمالمالك/9e6a061c3e19291c2be010d75cdd9b4113770095.png";
import propertyImg2 from "@/imports/لوحةتحكمالمالك/c8de0556b60d09ab3bbe4604b383309f3677baac.png";
import api from "../../api/axiosConfig";

const F = "'Readex Pro', sans-serif";
const C = "'Cairo', sans-serif";

function StatCard({
  label,
  value,
  sub,
  icon: Icon,
  iconColor,
  iconBg,
}: {
  label: string;
  value: number;
  sub: string;
  icon: any;
  iconColor: string;
  iconBg: string;
}) {
  return (
    <div
      className="bg-white rounded-2xl p-5 flex items-center justify-between text-right flex-1"
      style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}
    >
      <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: iconBg }}>
        <Icon size={22} color={iconColor} />
      </div>
      <div>
        <div className="text-[#001d28] font-black text-3xl" style={{ fontFamily: C }}>{value}</div>
        <div className="text-[#71787c] text-sm mt-0.5" style={{ fontFamily: F }}>{label}</div>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, { bg: string; color: string; label: string }> = {
    pending:  { bg: "#fef3c7", color: "#b45309", label: "قيد الانتظار" },
    approved: { bg: "#dcfce7", color: "#16a34a", label: "مقبول" },
    rejected: { bg: "#fee2e2", color: "#dc2626", label: "مرفوض" },
  };
  const s = styles[status] || styles.pending;
  return (
    <span
      className="px-2.5 py-1 rounded-full text-xs font-semibold"
      style={{ background: s.bg, color: s.color, fontFamily: F }}
    >
      {s.label}
    </span>
  );
}

const getImageUrl = (url?: string) => {
  if (!url) return null;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  const base = (import.meta.env.VITE_API_URL || "http://localhost:5125/api").replace("/api", "");
  return `${base}/${url.replace(/^\/+/, "")}`;
};

export default function OwnerDashboard() {
  const navigate = useNavigate();
  const [tab, setTab] = useState<"all" | "pending" | "approved">("all");
  const [stats, setStats] = useState({
    totalApartments: 0,
    totalBookings: 0,
    pendingBookings: 0,
    activeIssues: 0
  });
  const [occupancy, setOccupancy] = useState<any[]>([]);
  const [pricing, setPricing] = useState<any[]>([]);
  const [demand, setDemand] = useState<any>(null);
  const [bookings, setBookings] = useState<any[]>([]);
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDashboardData() {
      try {
        const dashboardRes = await api.get("/owner/dashboard");
        setStats(dashboardRes.data.stats);
        setOccupancy(dashboardRes.data.occupancy || []);
        setPricing(dashboardRes.data.pricing || []);
        setDemand(dashboardRes.data.demand || null);
        setRecommendations(dashboardRes.data.recommendations || []);

        const bookingsRes = await api.get("/owner/bookings");
        setBookings(bookingsRes.data || []);
      } catch (err) {
        console.error("Error loading dashboard data", err);
      } finally {
        setLoading(false);
      }
    }
    fetchDashboardData();
  }, []);

  const getStatusString = (statusNum: number) => {
    switch (statusNum) {
      case 0: return "pending"; // UPCOMING
      case 1: return "approved"; // ACTIVE
      case 2: return "approved"; // COMPLETED
      case 3: return "rejected"; // CANCELLED
      default: return "pending";
    }
  };

  const filteredBookings = bookings.filter((b) => {
    const statusStr = getStatusString(b.status);
    return tab === "all" ? true : statusStr === tab;
  });

  if (loading) {
    return (
      <DashboardLayout title="لوحة التحكم" subtitle="جاري تحميل البيانات...">
        <div className="flex items-center justify-center h-64 text-gray-500" style={{ fontFamily: F }}>
          جاري التحميل...
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout title="لوحة التحكم" subtitle="مرحباً بك في سكني">
      <div className="p-8 flex flex-col gap-6">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            label="عقارات نشطة"
            value={stats.totalApartments}
            sub="الوحدات المضافة"
            icon={MessageCircle}
            iconColor="#2563eb"
            iconBg="#eff6ff"
          />
          <StatCard
            label="إجمالي الحجوزات"
            value={stats.totalBookings}
            sub="عقود وطلبات"
            icon={FileText}
            iconColor="#16a34a"
            iconBg="#dcfce7"
          />
          <StatCard
            label="طلبات في الانتظار"
            value={stats.pendingBookings}
            sub="تحتاج مراجعتك"
            icon={Clock}
            iconColor="#f59e0b"
            iconBg="#fef3c7"
          />
          <StatCard
            label="مشاكل نشطة"
            value={stats.activeIssues}
            sub="تنبيهات الصيانة"
            icon={ShieldAlert}
            iconColor="#ef4444"
            iconBg="#fee2e2"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
          {/* Left Column Wrapper */}
          <div className="flex flex-col gap-6">
            {/* Bookings table */}
            <div
              className="bg-white rounded-2xl flex flex-col overflow-hidden"
              style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}
            >
            <div className="flex items-center justify-between p-5" style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
              <div className="flex gap-1 bg-[#f3f4f5] p-1 rounded-xl">
                {(["all", "pending", "approved"] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className="px-4 py-1.5 rounded-lg text-sm font-medium transition-all cursor-pointer"
                    style={{
                      fontFamily: F,
                      background: tab === t ? "white" : "transparent",
                      color: tab === t ? "#001d28" : "#94a3b8",
                      boxShadow: tab === t ? "0 1px 4px rgba(0,0,0,0.08)" : "none",
                    }}
                  >
                    {t === "all" ? "الكل" : t === "pending" ? "قيد الانتظار" : "مقبول"}
                  </button>
                ))}
              </div>
              <h3 className="text-[#001d28] font-bold text-base" style={{ fontFamily: C }}>
                طلبات الحجز
              </h3>
            </div>
            <div className="overflow-auto">
              <table className="w-full">
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(0,0,0,0.06)", background: "#fafafa" }}>
                    {["الحالة", "المدة (أشهر)", "العقار", "الطالبة", "#"].map((h) => (
                      <th
                        key={h}
                        className="px-5 py-3 text-right text-xs font-semibold text-[#94a3b8]"
                        style={{ fontFamily: F }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filteredBookings.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="text-center py-6 text-gray-400 text-sm" style={{ fontFamily: F }}>
                        لا توجد طلبات حجز حالياً
                      </td>
                    </tr>
                  ) : (
                    filteredBookings.map((b, i) => (
                      <tr
                        key={b.id}
                        className="cursor-pointer transition-colors hover:bg-[#f9f9fb]"
                        style={{ borderBottom: "1px solid rgba(0,0,0,0.04)" }}
                        onClick={() => navigate(`/user/${b.id}`)}
                      >
                        <td className="px-5 py-4">
                          <StatusBadge status={getStatusString(b.status)} />
                        </td>
                        <td className="px-5 py-4 text-[#001d28] text-sm font-medium text-right" style={{ fontFamily: F }}>
                          {b.durationInMonthes} أشهر
                        </td>
                        <td className="px-5 py-4 text-[#001d28] text-sm text-right" style={{ fontFamily: F }}>
                          {b.apartmentTitle}
                        </td>
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-2 justify-end">
                            <span className="text-[#001d28] text-sm" style={{ fontFamily: F }}>{b.tenantName}</span>
                            <img
                              src={getImageUrl(b.tenantProfileImageUrl) || studentPhoto1}
                              alt={b.tenantName}
                              className="w-8 h-8 rounded-full object-cover"
                            />
                          </div>
                        </td>
                        <td className="px-5 py-4 text-[#94a3b8] text-sm text-right" style={{ fontFamily: F }}>
                          {i + 1}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Predictive Analytics Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-1">
            {/* Market Demand Forecast */}
            <div
              className="bg-white rounded-2xl p-5 flex flex-col gap-4 text-right"
              style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}
            >
              <div className="flex items-center justify-between">
                <Calendar size={18} className="text-[#f2994a]" />
                <h3 className="text-[#001d28] font-bold text-base" style={{ fontFamily: C }}>
                  توقعات طلب السوق للذكاء الاصطناعي 📈
                </h3>
              </div>
              {demand ? (
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span
                      className="px-3 py-1.5 rounded-full text-xs font-bold"
                      style={{
                        background:
                          demand.demandLevel === "High" || demand.demandLevel === "مرتفع"
                            ? "#dcfce7"
                            : demand.demandLevel === "Medium" || demand.demandLevel === "متوسط"
                            ? "#fef3c7"
                            : "#fee2e2",
                        color:
                          demand.demandLevel === "High" || demand.demandLevel === "مرتفع"
                            ? "#16a34a"
                            : demand.demandLevel === "Medium" || demand.demandLevel === "متوسط"
                            ? "#d97706"
                            : "#dc2626",
                        fontFamily: F,
                      }}
                    >
                      مستوى الطلب الحالي: {demand.demandLevel === "High" ? "مرتفع جداً" : demand.demandLevel === "Medium" ? "متوسط" : "منخفض"}
                    </span>
                  </div>
                  <p className="text-xs text-[#71787c] leading-relaxed" style={{ fontFamily: F }}>
                    {demand.message || "يقوم محرك الذكاء الاصطناعي بتحليل طلب المستأجرين بناءً على تواريخ التسجيل والموسمية."}
                  </p>
                  
                  {/* High demand months */}
                  {demand.highDemandMonths && demand.highDemandMonths.length > 0 && (
                    <div className="flex flex-col gap-1.5 mt-1">
                      <span className="text-xs font-bold text-[#001d28]" style={{ fontFamily: F }}>أشهر الذروة المتوقعة:</span>
                      <div className="flex flex-wrap gap-1.5 justify-end">
                        {demand.highDemandMonths.map((m: number) => {
                          const monthsAr = [
                            "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو",
                            "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
                          ];
                          return (
                            <span
                              key={m}
                              className="px-2 py-1 bg-green-50 text-green-700 rounded-lg text-[10px] font-semibold border border-green-100"
                              style={{ fontFamily: F }}
                            >
                              {monthsAr[m - 1] || `شهر ${m}`}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-xs text-gray-400 text-center py-4" style={{ fontFamily: F }}>
                  جاري حساب توقعات الطلب...
                </p>
              )}
            </div>

            {/* Price Competitiveness Comparison */}
            <div
              className="bg-white rounded-2xl p-5 flex flex-col gap-4 text-right"
              style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}
            >
              <div className="flex items-center justify-between">
                <Coins size={18} className="text-[#16a34a]" />
                <h3 className="text-[#001d28] font-bold text-base" style={{ fontFamily: C }}>
                  تحليل مقارنة الأسعار مع السوق 💸
                </h3>
              </div>
              <div className="flex flex-col gap-3 overflow-y-auto max-h-52">
                {pricing && pricing.length > 0 ? (
                  pricing.map((p: any) => (
                    <div key={p.apartmentId} className="flex flex-col gap-1 border-b border-gray-50 pb-2">
                      <div className="flex justify-between items-center text-xs">
                        <span
                          className="font-bold"
                          style={{
                            color: p.differencePct > 10 ? "#dc2626" : p.differencePct < -10 ? "#16a34a" : "#d97706",
                            fontFamily: F
                          }}
                        >
                          {p.differencePct > 0 ? `+${p.differencePct.toFixed(0)}%` : `${p.differencePct.toFixed(0)}%`} {p.differencePct > 0 ? "أعلى من متوسط الحي" : "أقل من متوسط الحي"}
                        </span>
                        <span className="font-semibold text-[#001d28] text-right" style={{ fontFamily: F }}>{p.apartmentTitle}</span>
                      </div>
                      <div className="flex justify-between text-[10px] text-gray-400" style={{ fontFamily: F }}>
                        <span>متوسط المنطقة: {p.cityAverage.toLocaleString()} ج.م</span>
                        <span>سعرك: {p.yourPrice.toLocaleString()} ج.م</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-gray-400 text-center py-4" style={{ fontFamily: F }}>
                    سيكون التحليل متاحاً فور إضافة عقار وتحديد سعره.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Property performance & AI recommendations */}
        <div className="flex flex-col gap-6">
            {/* Property performance */}
            <div
              className="bg-white rounded-2xl p-5 flex flex-col gap-4"
              style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}
            >
              <div className="flex items-center justify-between">
                <TrendingUp size={18} color="#94a3b8" />
                <h3 className="text-[#001d28] font-bold text-base" style={{ fontFamily: C }}>
                  أداء العقارات
                </h3>
              </div>
              {occupancy.length === 0 ? (
                <p className="text-center text-sm text-gray-400" style={{ fontFamily: F }}>
                  لا توجد عقارات مضافة بعد
                </p>
              ) : (
                occupancy.slice(0, 3).map((p, i) => (
                  <div
                    key={p.apartmentId}
                    className="flex flex-col gap-2 cursor-pointer"
                    onClick={() => navigate(`/property/${p.apartmentId}`)}
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={getImageUrl(p.apartmentImageUrl) || (i === 0 ? propertyImg1 : propertyImg2)}
                        alt={p.apartmentTitle}
                        className="w-12 h-12 rounded-xl object-cover"
                      />
                      <div className="flex-1 text-right">
                        <p className="text-[#001d28] text-sm font-semibold" style={{ fontFamily: F }}>{p.apartmentTitle}</p>
                        <p className="text-[#94a3b8] text-xs" style={{ fontFamily: F }}>
                          معدل الإشغال: {p.occupancyLabel || "عادي"}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#001d28] text-xs font-bold" style={{ fontFamily: F }}>
                        {p.occupancyRate}%
                      </span>
                      <div className="flex-1 h-2 rounded-full bg-[#f3f4f5]">
                        <div
                          className="h-full rounded-full transition-all"
                          style={{
                            width: `${p.occupancyRate}%`,
                            background: p.occupancyRate > 80 ? "#22c55e" : p.occupancyRate > 50 ? "#f59e0b" : "#ef4444",
                          }}
                        />
                      </div>
                    </div>
                    {i < occupancy.slice(0, 3).length - 1 && (
                      <div style={{ height: 1, background: "rgba(0,0,0,0.06)" }} />
                    )}
                  </div>
                ))
              )}
            </div>

            {/* AI Recommendations */}
            <div
              className="bg-white rounded-2xl p-5 flex flex-col gap-3 text-right"
              style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}
            >
              <h3 className="text-[#001d28] font-bold text-base" style={{ fontFamily: C }}>
                توصيات الذكاء الاصطناعي ✨
              </h3>
              <div className="flex flex-col gap-2">
                {recommendations.map((rec, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-orange-50/50 text-[#b45309] text-xs font-medium border border-orange-100"
                    style={{ fontFamily: F }}
                  >
                    {rec}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

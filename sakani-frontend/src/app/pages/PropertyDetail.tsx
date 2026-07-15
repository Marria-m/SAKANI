import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Star, Eye, Users, Bed, Bath, Maximize2, ChevronRight, Phone } from "lucide-react";
import DashboardLayout from "../layout/DashboardLayout";
import api from "../../api/axiosConfig";
import img1 from "@/imports/تفاصيلالعقارمنمنظورالمالك/71b2557214c823053e11c09dc640ae6aa01b532c.png";

const F = "'Readex Pro', sans-serif";
const C = "'Cairo', sans-serif";

const getImageUrl = (url?: string) => {
  if (!url) return null;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  const base = (import.meta.env.VITE_API_URL || "http://localhost:5125/api").replace("/api", "");
  return `${base}/${url.replace(/^\/+/, "")}`;
};

export default function PropertyDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const [property, setProperty] = useState<any>(null);
  const [issues, setIssues] = useState<any[]>([]);
  const [activeImg, setActiveImg] = useState(0);
  const [tab, setTab] = useState<"details" | "bookings" | "issues">("details");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPropertyDetails() {
      try {
        const propRes = await api.get(`/apartments/${id}`);
        setProperty(propRes.data);

        // Fetch maintenance issues and filter by this apartment
        const issuesRes = await api.get("/owner/issues");
        const filteredIssues = (issuesRes.data || []).filter((issue: any) => issue.apartmentId === Number(id));
        setIssues(filteredIssues);
      } catch (err) {
        console.error("Failed to load property details", err);
      } finally {
        setLoading(false);
      }
    }
    if (id) {
      loadPropertyDetails();
    }
  }, [id]);

  if (loading) {
    return (
      <DashboardLayout title="تفاصيل العقار" subtitle="جاري تحميل التفاصيل...">
        <div className="flex items-center justify-center h-64 text-gray-500" style={{ fontFamily: F }}>
          جاري التحميل...
        </div>
      </DashboardLayout>
    );
  }

  if (!property) {
    return (
      <DashboardLayout title="تفاصيل العقار" subtitle="العقار غير موجود">
        <div className="flex flex-col items-center justify-center h-64 text-gray-500 gap-4" style={{ fontFamily: F }}>
          <span>عذراً، لم نتمكن من العثور على العقار المطلوب.</span>
          <button
            onClick={() => navigate("/properties")}
            className="px-4 py-2 bg-[#001d28] text-white rounded-xl text-sm"
          >
            العودة إلى عقاراتي
          </button>
        </div>
      </DashboardLayout>
    );
  }

  // Get gallery from media, or use fallback
  const gallery = property.media && property.media.length > 0
    ? property.media.map((m: any) => getImageUrl(m.mediaUrl))
    : [img1];

  const occupancyRate = property.maxCapacity > 0 ? Math.round((property.currentOccupied / property.maxCapacity) * 100) : 0;

  return (
    <DashboardLayout title={property.title}>
      <div className="p-8 flex flex-col gap-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-right justify-end" style={{ fontFamily: F }}>
          <button onClick={() => navigate("/properties")} className="text-[#94a3b8] hover:text-[#001d28] transition-colors cursor-pointer">
            عقاراتي
          </button>
          <ChevronRight size={14} color="#94a3b8" />
          <span className="text-[#001d28] font-medium">{property.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">
          {/* Left */}
          <div className="flex flex-col gap-5">
            {/* Gallery */}
            <div className="flex flex-col gap-3">
              <div className="rounded-2xl overflow-hidden h-72">
                <img src={gallery[activeImg]} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="flex gap-2 justify-end">
                {gallery.map((img: string, i: number) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className="rounded-xl overflow-hidden h-16 w-24 transition-all cursor-pointer"
                    style={{ outline: activeImg === i ? "2px solid #f2994a" : "2px solid transparent" }}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-1 bg-[#f3f4f5] p-1 rounded-xl w-fit mr-auto justify-end">
              {(["details", "bookings", "issues"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className="px-5 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer"
                  style={{
                    fontFamily: F,
                    background: tab === t ? "white" : "transparent",
                    color: tab === t ? "#001d28" : "#94a3b8",
                    boxShadow: tab === t ? "0 1px 4px rgba(0,0,0,0.08)" : "none",
                  }}
                >
                  {t === "details" ? "التفاصيل" : t === "bookings" ? "الحجوزات" : "طلبات الصيانة"}
                </button>
              ))}
            </div>

            {tab === "details" && (
              <div
                className="bg-white rounded-2xl p-5 flex flex-col gap-5 text-right"
                style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}
              >
                {/* Stats grid */}
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { icon: Star, value: 4.5, label: "التقييم", color: "#f59e0b" },
                    { icon: Users, value: occupancyRate + "%", label: "معدل الإشغال", color: "#2563eb" },
                    { icon: Eye, value: property.viewsCount?.toLocaleString("ar") || 0, label: "مشاهدة", color: "#9333ea" },
                    { icon: Bed, value: property.noOfRooms, label: "غرفة نوم", color: "#001d28" },
                  ].map(({ icon: Icon, value, label, color }) => (
                    <div key={label} className="bg-[#f9f9fb] rounded-xl p-3 text-right">
                      <Icon size={18} color={color} className="mb-2 mr-auto" />
                      <div className="font-bold text-xl text-[#001d28]" style={{ fontFamily: C }}>{value}</div>
                      <div className="text-xs text-[#94a3b8]" style={{ fontFamily: F }}>{label}</div>
                    </div>
                  ))}
                </div>

                {/* Specs */}
                <div className="flex gap-4 flex-wrap justify-end">
                  {[
                    { icon: Bed, v: `${property.noOfRooms} غرف نوم` },
                    { icon: Bath, v: `${property.floor || 1} دور` },
                    { icon: Maximize2, v: `${property.areaSqm} م²` },
                  ].map(({ icon: Icon, v }) => (
                    <div
                      key={v}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#f3f4f5] text-sm text-[#001d28]"
                      style={{ fontFamily: F }}
                    >
                      <Icon size={14} color="#94a3b8" />
                      {v}
                    </div>
                  ))}
                </div>

                {/* Details */}
                <div>
                  <h4 className="text-[#001d28] font-bold text-sm mb-2" style={{ fontFamily: C }}>معلومات السكن</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm" style={{ fontFamily: F }}>
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium text-[#001d28]">{property.city}</span>
                      <span className="text-gray-400">المدينة</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium text-[#001d28]">{property.location}</span>
                      <span className="text-gray-400">العنوان</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium text-[#001d28]">{property.isFurnished ? "نعم" : "لا"}</span>
                      <span className="text-gray-400">مفروش</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium text-[#001d28]">{property.maxCapacity} طالباً</span>
                      <span className="text-gray-400">السعة القصوى</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h4 className="text-[#001d28] font-bold text-sm mb-2" style={{ fontFamily: C }}>الوصف</h4>
                  <p className="text-[#71787c] text-sm leading-relaxed" style={{ fontFamily: F }}>
                    {property.description}
                  </p>
                </div>
              </div>
            )}

            {tab === "issues" && (
              <div
                className="bg-white rounded-2xl p-5 flex flex-col gap-4 text-right"
                style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}
              >
                <h4 className="text-[#001d28] font-bold text-base" style={{ fontFamily: C }}>
                  طلبات الصيانة والمشاكل المبلغ عنها
                </h4>
                {issues.length === 0 ? (
                  <p className="text-center py-6 text-gray-400 text-sm" style={{ fontFamily: F }}>
                    لا توجد مشاكل مبلغ عنها لهذا العقار.
                  </p>
                ) : (
                  <div className="flex flex-col gap-3">
                    {issues.map((issue) => (
                      <div
                        key={issue.id}
                        className="p-4 rounded-xl border border-red-100 bg-red-50/10 flex justify-between items-center"
                        style={{ fontFamily: F }}
                      >
                        <div className="flex gap-2">
                          <span
                            className="px-2 py-0.5 rounded text-xs font-semibold"
                            style={{
                              background: issue.priority === 2 ? "#fee2e2" : "#fef3c7",
                              color: issue.priority === 2 ? "#dc2626" : "#b45309"
                            }}
                          >
                            {issue.priority === 2 ? "عالي" : issue.priority === 1 ? "متوسط" : "منخفض"}
                          </span>
                          <span className="text-[#001d28] font-semibold text-sm">{issue.title}</span>
                        </div>
                        <span className="text-[#71787c] text-xs">{issue.description}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {tab === "bookings" && (
              <div
                className="bg-white rounded-2xl p-5 text-right"
                style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}
              >
                <p className="text-[#94a3b8] text-sm" style={{ fontFamily: F }}>
                  يمكنك مراجعة جميع حجوزات العقار عبر شاشة "طلبات الانتظار" في القائمة الجانبية.
                </p>
              </div>
            )}
          </div>

          {/* Right panel */}
          <div className="flex flex-col gap-4">
            {/* Price card */}
            <div
              className="bg-white rounded-2xl p-5 flex flex-col gap-4"
              style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}
            >
              <div className="text-right">
                <div className="text-[#f2994a] font-black text-3xl" style={{ fontFamily: C }}>
                  {property.price.toLocaleString("ar")} ج.م
                </div>
                <div className="text-[#94a3b8] text-xs" style={{ fontFamily: F }}>/ شهر</div>
              </div>
              <div className="flex flex-col gap-2" style={{ borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: 12 }}>
                {[
                  { label: "الإيجار الشهري", value: `${property.price.toLocaleString("ar")} ج.م` },
                  { label: "مبلغ التأمين", value: `${property.securityDeposit ? property.securityDeposit.toLocaleString("ar") : (property.price * 0.5).toLocaleString("ar")} ج.م` },
                  { label: "شامل الكهرباء", value: property.isElectricityIncluded ? "نعم" : "لا" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between text-sm" style={{ fontFamily: F }}>
                    <span className="font-medium text-[#001d28]">{value}</span>
                    <span className="text-[#94a3b8]">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-2">
              <button
                onClick={() => navigate(`/edit-property/${id}`)}
                className="w-full py-3.5 rounded-xl font-bold text-white text-sm transition-opacity hover:opacity-90 cursor-pointer"
                style={{ background: "#001d28", fontFamily: F }}
              >
                تعديل العقار
              </button>
              <button
                className="w-full py-3.5 rounded-xl font-bold text-sm transition-opacity hover:opacity-90 flex items-center justify-center gap-2 cursor-pointer"
                style={{ background: "#f2994a", color: "#001d28", fontFamily: F }}
              >
                <Phone size={15} />
                تواصل مع المستأجر
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

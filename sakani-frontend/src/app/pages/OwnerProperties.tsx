import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, SlidersHorizontal, Star, Eye, Users, Bed, Bath, Maximize2 } from "lucide-react";
import DashboardLayout from "../layout/DashboardLayout";
import api from "../../api/axiosConfig";
import propImg1 from "@/imports/عقاراتالمالك/6131fcdae07eaca920b08b2f32c040bc98f6a66c.png";

const F = "'Readex Pro', sans-serif";
const C = "'Cairo', sans-serif";

const statusMap: Record<string, { label: string; bg: string; color: string }> = {
  active:      { label: "نشط",      bg: "#dcfce7", color: "#16a34a" },
  occupied:    { label: "مؤجر",     bg: "#dbeafe", color: "#2563eb" },
  maintenance: { label: "صيانة",    bg: "#fef3c7", color: "#b45309" },
};

const getImageUrl = (url?: string) => {
  if (!url) return null;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  const base = (import.meta.env.VITE_API_URL || "http://localhost:5125/api").replace("/api", "");
  return `${base}/${url.replace(/^\/+/, "")}`;
};

const getStatusString = (statusNum: number) => {
  switch (statusNum) {
    case 0: return "occupied"; // Full is occupied
    case 1: return "active"; // PartiallyOccupied is active
    case 2: return "active"; // Empty is active
    default: return "active";
  }
};

function PropertyCard({ property, onClick }: {
  property: any;
  onClick: () => void;
}) {
  const statusStr = getStatusString(property.status);
  const s = statusMap[statusStr] || statusMap.active;
  const occupancyRate = property.maxCapacity > 0 ? Math.round((property.currentOccupied / property.maxCapacity) * 100) : 0;
  
  const coverImage = property.media && property.media.length > 0
    ? getImageUrl(property.media[0].mediaUrl)
    : propImg1;

  return (
    <div
      className="bg-white rounded-2xl overflow-hidden cursor-pointer transition-all hover:shadow-lg hover:-translate-y-0.5"
      style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.06)" }}
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <img src={coverImage || propImg1} alt={property.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)" }} />
        {/* Price overlay */}
        <div
          className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl text-white font-bold text-sm"
          style={{ background: "rgba(0,0,0,0.6)", fontFamily: F, backdropFilter: "blur(8px)" }}
        >
          {property.price.toLocaleString("ar")} ج.م/شهر
        </div>
        {/* Status badge */}
        <div
          className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold"
          style={{ background: s.bg, color: s.color, fontFamily: F }}
        >
          {s.label}
        </div>
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col gap-3">
        <div className="text-right">
          <h3 className="text-[#001d28] font-bold text-base" style={{ fontFamily: C }}>{property.title}</h3>
          <p className="text-[#94a3b8] text-xs mt-0.5" style={{ fontFamily: F }}>{property.location}</p>
        </div>

        {/* Stats row */}
        <div className="flex justify-between">
          {[
            { icon: Star, value: 4.5, color: "#f59e0b" }, // Fallback to 4.5 rating
            { icon: Eye, value: property.viewsCount?.toLocaleString("ar") || 0, color: "#9333ea" },
            { icon: Users, value: occupancyRate + "% إشغال", color: "#2563eb" },
          ].map(({ icon: Icon, value, color }) => (
            <div key={String(value)} className="flex items-center gap-1">
              <span className="text-[#001d28] text-sm font-medium" style={{ fontFamily: F }}>{value}</span>
              <Icon size={13} color={color} />
            </div>
          ))}
        </div>

        {/* Specs */}
        <div className="flex gap-3" style={{ borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: 10 }}>
          {[
            { icon: Bed, value: `${property.noOfRooms} غرف` },
            { icon: Bath, value: `حمام` }, // No bath count in DB yet, display static text
            { icon: Maximize2, value: `${property.areaSqm} م²` },
          ].map(({ icon: Icon, value }) => (
            <div key={value} className="flex items-center gap-1 text-xs text-[#71787c]" style={{ fontFamily: F }}>
              <Icon size={12} color="#94a3b8" />
              {value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function OwnerProperties() {
  const navigate = useNavigate();
  const [properties, setProperties] = useState<any[]>([]);
  const [filter, setFilter] = useState<"all" | "active" | "occupied">("all");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProperties() {
      try {
        const response = await api.get("/apartments/my");
        setProperties(response.data || []);
      } catch (err) {
        console.error("Failed to load owner properties", err);
      } finally {
        setLoading(false);
      }
    }
    loadProperties();
  }, []);

  const filtered = properties.filter((p) => {
    const statusStr = getStatusString(p.status);
    if (filter === "active" && statusStr !== "active") return false;
    if (filter === "occupied" && statusStr !== "occupied") return false;
    if (search && !p.title.includes(search) && !p.location.includes(search)) return false;
    return true;
  });

  const activeCount = properties.filter((p) => getStatusString(p.status) === "active").length;
  const occupiedCount = properties.filter((p) => getStatusString(p.status) === "occupied").length;

  if (loading) {
    return (
      <DashboardLayout title="عقاراتي" subtitle="جاري تحميل عقاراتك...">
        <div className="flex items-center justify-center h-64 text-gray-500" style={{ fontFamily: F }}>
          جاري التحميل...
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout title="عقاراتي" subtitle="إدارة الوحدات السكنية">
      <div className="p-8 flex flex-col gap-6">
        {/* Summary */}
        <div className="flex gap-4">
          {[
            { label: "إجمالي الوحدات", value: properties.length, color: "#001d28" },
            { label: "وحدة نشطة", value: activeCount, color: "#22c55e" },
            { label: "وحدة مؤجرة", value: occupiedCount, color: "#2563eb" },
          ].map(({ label, value, color }) => (
            <div
              key={label}
              className="bg-white rounded-2xl px-6 py-4 flex items-center gap-4"
              style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}
            >
              <span className="text-3xl font-black" style={{ fontFamily: C, color }}>{value}</span>
              <span className="text-[#71787c] text-sm" style={{ fontFamily: F }}>{label}</span>
            </div>
          ))}
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex gap-1 bg-white p-1 rounded-xl" style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
            {(["all", "active", "occupied"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer"
                style={{
                  fontFamily: F,
                  background: filter === f ? "#001d28" : "transparent",
                  color: filter === f ? "white" : "#94a3b8",
                }}
              >
                {f === "all" ? "الكل" : f === "active" ? "النشطة" : "المؤجرة"}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="بحث عن عقار..."
                dir="rtl"
                className="bg-white rounded-xl pr-4 pl-10 py-2.5 text-sm outline-none placeholder-[#94a3b8] w-56 border-none"
                style={{ fontFamily: F, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
              />
              <Search size={15} color="#94a3b8" className="absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
            <button
              className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-xl text-sm text-[#001d28] border-none cursor-pointer"
              style={{ fontFamily: F, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
            >
              <SlidersHorizontal size={15} />
              تصفية
            </button>
          </div>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-3 gap-5">
            {filtered.map((p) => (
              <PropertyCard
                key={p.id}
                property={p}
                onClick={() => navigate(`/property/${p.id}`)}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="text-5xl mb-4">🏠</div>
            <p className="text-[#001d28] font-bold text-lg" style={{ fontFamily: C }}>لا توجد عقارات</p>
            <p className="text-[#94a3b8] text-sm mt-1" style={{ fontFamily: F }}>جرّب تغيير معايير البحث</p>
          </div>
        )}

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2">
          {[1].map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className="w-9 h-9 rounded-xl text-sm font-medium transition-all cursor-pointer"
              style={{
                fontFamily: F,
                background: page === p ? "#001d28" : "white",
                color: page === p ? "white" : "#001d28",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              }}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

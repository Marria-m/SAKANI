import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, MapPin, Bed, Ruler, Heart, Calendar, Compass, Sparkles, ArrowLeft } from "lucide-react";
import DashboardLayout from "../layout/DashboardLayout";
import api from "../../api/axiosConfig";
import { useAuth } from "../../context/AuthContext";
import CustomSelect from "../components/CustomSelect";

const F = "'Readex Pro', sans-serif";
const C = "'Cairo', sans-serif";

const getImageUrl = (url?: string) => {
  if (!url) return null;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  const base = (import.meta.env.VITE_API_URL || "http://localhost:5125/api").replace("/api", "");
  return `${base}/${url.replace(/^\/+/, "")}`;
};

const EGYPT_CITIES = [
  "القاهرة","الجيزة","الإسكندرية","المنصورة","طنطا","أسيوط","الزقازيق",
  "الفيوم","المنيا","سوهاج","قنا","الأقصر","أسوان","بني سويف","شبين الكوم",
  "بنها","دمنهور","كفر الشيخ","دمياط","بورسعيد","الإسماعيلية","السويس",
  "العريش","الطور","الغردقة","مرسى مطروح","الخارجة","الوادى الجديد"
];

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
    @keyframes pulseGlow {
      0%, 100% { box-shadow: 0 0 0 0 rgba(242,153,74,0.25); }
      50%      { box-shadow: 0 0 0 10px rgba(242,153,74,0); }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50%      { transform: translateY(-6px); }
    }
    .fade-in-up { animation: fadeInUp .5s ease both; }
    .fade-d1 { animation-delay: .05s; }
    .fade-d2 { animation-delay: .10s; }
    .fade-d3 { animation-delay: .15s; }
    .fade-d4 { animation-delay: .20s; }
    .shimmer-bg {
      background: linear-gradient(90deg, #f0f0f0 25%, #e8e8e8 50%, #f0f0f0 75%);
      background-size: 800px 100%;
      animation: shimmer 1.5s infinite linear;
    }
    .card-lift {
      transition: transform .25s cubic-bezier(.4,0,.2,1), box-shadow .25s cubic-bezier(.4,0,.2,1);
    }
    .card-lift:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 32px rgba(0,29,40,.08), 0 2px 6px rgba(0,29,40,.04) !important;
    }
    .glass-card {
      background: rgba(255,255,255,.75);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255,255,255,.5);
    }
    .stat-card-hover:hover { animation: pulseGlow 1.5s ease infinite; }
    .modern-select {
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      background-repeat: no-repeat;
      background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23001d28%22%20stroke-width%3D%222.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E");
      background-size: 14px;
      background-position: left 14px center;
      padding-left: 36px !important;
      padding-right: 16px !important;
    }
  `}</style>
);

/* ── Shimmer Skeleton ── */
function PropertySkeleton() {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(0,0,0,.03)" }}>
      <div className="h-48 shimmer-bg" />
      <div className="p-5 flex flex-col gap-3">
        <div className="h-4 w-3/4 rounded-lg shimmer-bg mr-auto" />
        <div className="h-3 w-1/2 rounded-lg shimmer-bg mr-auto" />
        <div className="flex gap-4 mt-2 pt-3 border-t border-gray-50 justify-end">
          <div className="h-3 w-16 rounded-lg shimmer-bg" />
          <div className="h-3 w-16 rounded-lg shimmer-bg" />
        </div>
      </div>
    </div>
  );
}

export default function TenantHome() {
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const [properties, setProperties] = useState<any[]>([]);
  const [wishlistIds, setWishlistIds] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [stats, setStats] = useState({
    wishlistCount: 0,
    apptCount: 0,
    bookingCount: 0
  });

  const [filters, setFilters] = useState({
    city: "",
    minPrice: "",
    maxPrice: "",
    noOfRooms: "",
    genderPolicy: "",
  });

  const [filtersOpen, setFiltersOpen] = useState(false);

  async function loadWishlist() {
    try {
      const res = await api.get("/Tenant/wishlist");
      const ids = (res.data?.apartments || []).map((w: any) => w.id);
      setWishlistIds(ids);
      setStats(prev => ({ ...prev, wishlistCount: ids.length }));
    } catch (err) {
      console.error("Failed to load wishlist", err);
    }
  }

  const fetchProperties = async () => {
    setLoading(true);
    try {
      const params: Record<string, any> = {};
      if (filters.city) params.City = filters.city;
      if (filters.minPrice) params.MinPrice = Number(filters.minPrice);
      if (filters.maxPrice) params.MaxPrice = Number(filters.maxPrice);
      if (filters.noOfRooms) params.NoOfRooms = Number(filters.noOfRooms);
      if (filters.genderPolicy !== "") params.GenderPolices = Number(filters.genderPolicy);
      
      const res = await api.get("/apartments/filter", { params });
      setProperties(res.data.items || res.data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  async function fetchStats() {
    try {
      const apptsRes = await api.get("/appointments");
      const apptCount = (apptsRes.data || []).length;

      const bookingsRes = await api.get("/bookings");
      const bookingCount = (bookingsRes.data || []).length;

      setStats(prev => ({
        ...prev,
        apptCount,
        bookingCount
      }));
    } catch (err) {
      console.error("Failed to load stats", err);
    }
  }

  useEffect(() => {
    async function initData() {
      await loadWishlist();
      await fetchProperties();
      await fetchStats();
    }
    initData();
  }, []);

  const toggleWishlist = async (e: React.MouseEvent, propId: number) => {
    e.stopPropagation();
    const isWish = wishlistIds.includes(propId);
    try {
      if (isWish) {
        await api.delete(`/Tenant/wishlist/remove/${propId}`);
        setWishlistIds(prev => prev.filter(id => id !== propId));
        setStats(prev => ({ ...prev, wishlistCount: Math.max(0, prev.wishlistCount - 1) }));
      } else {
        await api.post(`/Tenant/wishlist/add/${propId}`);
        setWishlistIds(prev => [...prev, propId]);
        setStats(prev => ({ ...prev, wishlistCount: prev.wishlistCount + 1 }));
      }
    } catch (err) {
      console.error("Failed to update wishlist", err);
    }
  };

  return (
    <DashboardLayout title="الرئيسية" subtitle="استكشف وحجز السكن الملائم لك">
      <AnimStyles />
      <div className="p-6 md:p-8 flex flex-col gap-6" dir="rtl">

        {/* ═══ Welcome Banner ═══ */}
        <div
          className="rounded-2xl p-6 md:p-8 text-right fade-in-up relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #001d28 0%, #003344 50%, #004d5a 100%)",
            boxShadow: "0 8px 32px rgba(0,29,40,.15)",
          }}
        >
          {/* Decorative circles */}
          <div className="absolute -left-10 -top-10 w-40 h-40 rounded-full opacity-10" style={{ background: "#f2994a" }} />
          <div className="absolute right-1/4 -bottom-6 w-24 h-24 rounded-full opacity-[.07]" style={{ background: "#f2994a" }} />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2 justify-end">
              <span className="px-3 py-1 rounded-full text-[10px] font-bold text-[#f2994a] border border-[#f2994a]/30 bg-[#f2994a]/10" style={{ fontFamily: F }}>
                <Sparkles size={10} className="inline ml-1" />
                مرحباً بك
              </span>
            </div>
            <h1 className="text-white font-black text-2xl md:text-3xl mb-2" style={{ fontFamily: C }}>
              أهلاً {user?.fullName || "بك"} 👋
            </h1>
            <p className="text-white/60 text-sm max-w-lg" style={{ fontFamily: F }}>
              ابحث عن السكن المثالي بجوار جامعتك — استعرض، قارن، واحجز بكل سهولة
            </p>
          </div>
        </div>

        {/* ═══ Stats Cards ═══ */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: "عقود سكنية نشطة", value: stats.bookingCount, icon: Compass, gradient: "linear-gradient(135deg, #e0f2fe, #bae6fd)", text: "#0369a1", path: "/my-bookings", delay: "fade-d1" },
            { label: "طلبات معاينة السكن", value: stats.apptCount, icon: Calendar, gradient: "linear-gradient(135deg, #fef3c7, #fde68a)", text: "#b45309", path: "/my-bookings", delay: "fade-d2" },
            { label: "عقارات في المفضلة", value: stats.wishlistCount, icon: Heart, gradient: "linear-gradient(135deg, #fee2e2, #fecaca)", text: "#dc2626", path: "/wishlist", delay: "fade-d3" },
          ].map(({ label, value, icon: Icon, gradient, text, path, delay }) => (
            <div
              key={label}
              onClick={() => navigate(path)}
              className={`glass-card rounded-2xl p-5 flex items-center justify-between text-right cursor-pointer card-lift stat-card-hover fade-in-up ${delay}`}
              style={{ boxShadow: "0 4px 16px rgba(0,29,40,.04)" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: gradient }}
              >
                <Icon size={20} color={text} fill={Icon === Heart ? text : "none"} />
              </div>
              <div>
                <div className="text-[#001d28] font-black text-3xl" style={{ fontFamily: C }}>{value}</div>
                <div className="text-[#71787c] text-xs mt-0.5" style={{ fontFamily: F }}>{label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ═══ Filters Panel ═══ */}
        <div
          className="glass-card rounded-2xl fade-in-up fade-d4 relative z-30"
          style={{ boxShadow: "0 4px 20px rgba(0,29,40,.04)" }}
        >
          {/* Filter Header */}
          <button
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="w-full flex items-center justify-between px-6 py-4 text-right cursor-pointer border-none bg-transparent"
            style={{ borderBottom: filtersOpen ? "1px solid rgba(0,0,0,.05)" : "none" }}
          >
            <div className="flex items-center gap-2">
              <span
                className="text-xs font-bold px-3 py-1.5 rounded-lg transition-colors"
                style={{
                  background: filtersOpen ? "#001d28" : "#f3f4f5",
                  color: filtersOpen ? "white" : "#71787c",
                  fontFamily: F,
                }}
              >
                {filtersOpen ? "إخفاء" : "عرض"}
              </span>
              <ArrowLeft
                size={14}
                color="#94a3b8"
                style={{
                  transform: filtersOpen ? "rotate(-90deg)" : "rotate(90deg)",
                  transition: "transform .2s ease",
                }}
              />
            </div>
            <div className="flex items-center gap-2">
              <Search size={16} color="#f2994a" />
              <h3 className="text-[#001d28] font-bold text-sm" style={{ fontFamily: C }}>البحث السريع والتصفية</h3>
            </div>
          </button>

          {/* Filter Body */}
          <div
            style={{
              maxHeight: filtersOpen ? 300 : 0,
              opacity: filtersOpen ? 1 : 0,
              overflow: filtersOpen ? "visible" : "hidden",
              transition: "max-height .35s ease, opacity .25s ease",
            }}
          >
            <div className="px-6 pb-5 pt-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-[#001d28]" style={{ fontFamily: F }}>المدينة</label>
                  <CustomSelect
                    value={filters.city}
                    onChange={(val) => setFilters({ ...filters, city: val })}
                    options={[{ value: "", label: "كل المدن" }, ...EGYPT_CITIES]}
                    placeholder="كل المدن"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-[#001d28]" style={{ fontFamily: F }}>السعر الأدنى</label>
                  <input
                    type="number"
                    placeholder="مثال: 1000"
                    value={filters.minPrice}
                    onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
                    className="bg-[#f3f4f5] rounded-xl px-4 py-3 text-xs text-[#001d28] outline-none border border-transparent hover:border-gray-300 focus:border-[#f2994a] focus:bg-white transition-all text-right"
                    style={{ fontFamily: F }}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-[#001d28]" style={{ fontFamily: F }}>السعر الأقصى</label>
                  <input
                    type="number"
                    placeholder="مثال: 5000"
                    value={filters.maxPrice}
                    onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
                    className="bg-[#f3f4f5] rounded-xl px-4 py-3 text-xs text-[#001d28] outline-none border border-transparent hover:border-gray-300 focus:border-[#f2994a] focus:bg-white transition-all text-right"
                    style={{ fontFamily: F }}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-[#001d28]" style={{ fontFamily: F }}>عدد الغرف</label>
                  <input
                    type="number"
                    placeholder="مثال: 3"
                    value={filters.noOfRooms}
                    onChange={(e) => setFilters({ ...filters, noOfRooms: e.target.value })}
                    className="bg-[#f3f4f5] rounded-xl px-4 py-3 text-xs text-[#001d28] outline-none border border-transparent hover:border-gray-300 focus:border-[#f2994a] focus:bg-white transition-all text-right"
                    style={{ fontFamily: F }}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-[#001d28]" style={{ fontFamily: F }}>سياسة الجنس</label>
                  <CustomSelect
                    value={filters.genderPolicy}
                    onChange={(val) => setFilters({ ...filters, genderPolicy: val })}
                    options={[
                      { value: "", label: "كل السياسات" },
                      { value: "0", label: "طلاب ذكور فقط" },
                      { value: "1", label: "طالبات إناث فقط" },
                      { value: "2", label: "أي جنس (مخلوط)" }
                    ]}
                    placeholder="كل السياسات"
                  />
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <button
                  onClick={fetchProperties}
                  className="px-6 py-3 rounded-xl font-bold text-xs transition-all cursor-pointer border-none flex items-center gap-2"
                  style={{
                    background: "linear-gradient(135deg, #f2994a, #e8850f)",
                    color: "#001d28",
                    fontFamily: F,
                    boxShadow: "0 4px 12px rgba(242,153,74,.25)",
                  }}
                >
                  <Search size={14} />
                  تطبيق التصفية والبحث
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ═══ Section Header ═══ */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate("/explore")}
            className="text-xs font-medium text-[#f2994a] hover:underline cursor-pointer border-none bg-transparent flex items-center gap-1"
            style={{ fontFamily: F }}
          >
            عرض الكل
            <ArrowLeft size={12} />
          </button>
          <h2 className="text-[#001d28] font-bold text-lg" style={{ fontFamily: C }}>
            السكنات المتاحة 🏠
          </h2>
        </div>

        {/* ═══ Property Grid ═══ */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map((i) => <PropertySkeleton key={i} />)}
          </div>
        ) : properties.length === 0 ? (
          <div
            className="glass-card rounded-2xl p-12 text-center flex flex-col items-center gap-4 fade-in-up"
            style={{ boxShadow: "0 4px 20px rgba(0,29,40,.04)" }}
          >
            <div className="w-20 h-20 rounded-full flex items-center justify-center text-3xl" style={{ background: "linear-gradient(135deg, #e0f2fe, #bae6fd)" }}>
              🏠
            </div>
            <p className="text-[#001d28] font-bold text-base" style={{ fontFamily: C }}>لا توجد سكنات مطابقة</p>
            <p className="text-gray-400 text-xs" style={{ fontFamily: F }}>جرّب تعديل معايير البحث للعثور على سكنات أخرى</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((p, idx) => {
              const coverImage = p.media && p.media.length > 0 ? getImageUrl(p.media[0].mediaUrl) : null;
              const isWish = wishlistIds.includes(p.id);
              return (
                <div
                  key={p.id}
                  onClick={() => navigate(`/property/${p.id}`)}
                  className="bg-white rounded-2xl overflow-hidden cursor-pointer card-lift flex flex-col relative fade-in-up"
                  style={{
                    boxShadow: "0 4px 16px rgba(0,29,40,.03)",
                    border: "1px solid rgba(0,0,0,.03)",
                    animationDelay: `${idx * 0.04}s`,
                  }}
                >
                  <div className="h-48 overflow-hidden relative bg-gray-100">
                    {coverImage ? (
                      <img src={coverImage} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, #f8f9fa, #e9ecef)" }}>
                        <Compass size={40} color="#cbd5e1" />
                      </div>
                    )}
                    
                    {/* Price badge */}
                    <div
                      className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl text-white font-bold text-xs"
                      style={{
                        background: "rgba(0,29,40,.75)",
                        backdropFilter: "blur(8px)",
                        fontFamily: F,
                      }}
                    >
                      {p.price?.toLocaleString("ar")} ج.م / شهر
                    </div>

                    {/* Wishlist toggle */}
                    <button
                      type="button"
                      onClick={(e) => toggleWishlist(e, p.id)}
                      className="absolute top-3 left-3 w-9 h-9 rounded-full flex items-center justify-center transition-all border-none cursor-pointer"
                      style={{
                        background: isWish ? "rgba(220,38,38,.12)" : "rgba(255,255,255,.85)",
                        backdropFilter: "blur(8px)",
                        transform: isWish ? "scale(1.05)" : "scale(1)",
                      }}
                    >
                      <Heart size={15} color={isWish ? "#dc2626" : "#71787c"} fill={isWish ? "#dc2626" : "none"} />
                    </button>

                    {/* Status badge */}
                    {p.isBarginAllowed && (
                      <div
                        className="absolute top-3 right-3 px-2.5 py-1 rounded-lg text-[10px] font-bold"
                        style={{
                          background: "rgba(34,197,94,.15)",
                          color: "#16a34a",
                          backdropFilter: "blur(6px)",
                          fontFamily: F,
                        }}
                      >
                        قابل للتفاوض
                      </div>
                    )}
                  </div>

                  <div className="p-5 flex-1 flex flex-col gap-2.5 text-right">
                    <h3 className="text-[#001d28] font-bold text-[15px] leading-tight" style={{ fontFamily: C }}>{p.title}</h3>
                    <div className="flex items-center gap-1 justify-end text-xs text-[#94a3b8]" style={{ fontFamily: F }}>
                      <span>{p.location}، {p.city}</span>
                      <MapPin size={12} />
                    </div>
                    
                    <div className="flex gap-3 justify-end mt-auto pt-3 border-t border-gray-50 text-xs text-gray-500" style={{ fontFamily: F }}>
                      {p.areaSqm > 0 && (
                        <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-gray-50">
                          <span>{p.areaSqm} م²</span>
                          <Ruler size={12} />
                        </div>
                      )}
                      <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-gray-50">
                        <span>{p.noOfRooms} غرف</span>
                        <Bed size={12} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

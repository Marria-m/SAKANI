import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, MapPin, Bed, Ruler, Home, ArrowLeft } from "lucide-react";
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

/* ── inline keyframes and custom dropdown arrows ── */
const AnimStyles = () => (
  <style>{`
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(18px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .fade-in-up { animation: fadeInUp .5s ease both; }
    .card-lift {
      transition: transform .25s cubic-bezier(.4,0,.2,1), box-shadow .25s cubic-bezier(.4,0,.2,1);
    }
    .card-lift:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 32px rgba(0,29,40,.08) !important;
    }
    /* Modern select styling matching RTL layout */
    .modern-select {
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      background-repeat: no-repeat;
      background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23001d28%22%20stroke-width%3D%222.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E");
      background-size: 14px;
      background-position: left 14px center;
      padding-left: 36px;
      padding-right: 16px;
    }
  `}</style>
);

export default function ExploreProperties() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [properties, setProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    city: "",
    minPrice: "",
    maxPrice: "",
    noOfRooms: "",
    genderPolicy: "",
  });

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

  const handleBack = () => {
    if (role === "Tenant") {
      navigate("/tenant-home");
    } else if (role === "Owner") {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  };

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

  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col" dir="rtl" style={{ fontFamily: F }}>
      <AnimStyles />
      {/* NavBar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white shrink-0" style={{ borderBottom: "1px solid rgba(0,29,40,0.06)" }}>
        <button
          onClick={handleBack}
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
      <div className="flex-1 max-w-7xl w-full mx-auto p-8 flex flex-col gap-8 fade-in-up">
        {/* Title */}
        <div className="text-right">
          <h1 className="text-[#001d28] font-black text-3xl mb-2" style={{ fontFamily: C }}>استكشف الوحدات السكنية المتاحة 🏠</h1>
          <p className="text-gray-500 text-sm">ابحث عن أفضل سكن طلابي مجهز وموثق بالكامل</p>
        </div>

        {/* Filters Panel */}
        <div className="bg-white rounded-3xl p-6 flex flex-col gap-4 text-right relative z-30" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.03)", border: "1px solid rgba(0,29,40,0.02)" }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-[#001d28]">المدينة</label>
              <CustomSelect
                value={filters.city}
                onChange={(val) => setFilters({ ...filters, city: val })}
                options={[{ value: "", label: "كل المدن" }, ...EGYPT_CITIES]}
                placeholder="كل المدن"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-[#001d28]">السعر الأدنى</label>
              <input
                type="number"
                placeholder="مثال: 1000"
                value={filters.minPrice}
                onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
                className="bg-[#f3f4f5] rounded-xl px-4 py-3 text-xs text-[#001d28] outline-none border border-transparent hover:border-gray-300 focus:border-[#f2994a] focus:bg-white transition-all text-right"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-[#001d28]">السعر الأقصى</label>
              <input
                type="number"
                placeholder="مثال: 5000"
                value={filters.maxPrice}
                onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
                className="bg-[#f3f4f5] rounded-xl px-4 py-3 text-xs text-[#001d28] outline-none border border-transparent hover:border-gray-300 focus:border-[#f2994a] focus:bg-white transition-all text-right"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-[#001d28]">عدد الغرف</label>
              <input
                type="number"
                placeholder="مثال: 3"
                value={filters.noOfRooms}
                onChange={(e) => setFilters({ ...filters, noOfRooms: e.target.value })}
                className="bg-[#f3f4f5] rounded-xl px-4 py-3 text-xs text-[#001d28] outline-none border border-transparent hover:border-gray-300 focus:border-[#f2994a] focus:bg-white transition-all text-right"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-[#001d28]">سياسة الجنس</label>
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
          <div className="flex justify-end mt-2">
            <button
              onClick={fetchProperties}
              className="px-6 py-3 rounded-xl bg-[#f2994a] text-[#001d28] font-bold text-xs hover:opacity-90 transition-opacity cursor-pointer border-none flex items-center gap-2"
            >
              <Search size={14} />
              تطبيق التصفية والبحث
            </button>
          </div>
        </div>

        {/* Results Grid */}
        {loading ? (
          <div className="flex justify-center items-center h-64 text-gray-400">
            جاري تحميل الوحدات السكنية...
          </div>
        ) : properties.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center text-gray-400 border border-gray-100">
            لا توجد عقارات مطابقة لمعايير البحث الحالية.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((p) => {
              const coverImage = p.media && p.media.length > 0 ? getImageUrl(p.media[0].mediaUrl) : null;
              return (
                <div
                  key={p.id}
                  className="bg-white rounded-2xl overflow-hidden cursor-pointer transition-all card-lift flex flex-col"
                  style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.03)", border: "1px solid rgba(0,29,40,0.02)" }}
                  onClick={() => {
                    if (user) {
                      navigate(`/property/${p.id}`);
                    } else {
                      alert("الرجاء تسجيل الدخول أو إنشاء حساب أولاً لمشاهدة تفاصيل السكن وحجزه!");
                      navigate("/");
                    }
                  }}
                >
                  <div className="h-48 overflow-hidden relative bg-gray-100">
                    {coverImage ? (
                      <img src={coverImage} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-300">
                        <Home size={40} />
                      </div>
                    )}
                    <div className="absolute bottom-3 right-3 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-xl text-white font-bold text-xs">
                      {p.price.toLocaleString("ar")} ج.م / شهر
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col gap-3 text-right">
                    <h3 className="text-[#001d28] font-bold text-base leading-tight" style={{ fontFamily: C }}>{p.title}</h3>
                    <div className="flex items-center gap-1 justify-end text-xs text-[#94a3b8]">
                      <span>{p.location}، {p.city}</span>
                      <MapPin size={12} />
                    </div>
                    
                    <div className="flex gap-4 justify-end mt-2 pt-3 border-t border-gray-50 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <span>{p.areaSqm} م²</span>
                        <Ruler size={13} />
                      </div>
                      <div className="flex items-center gap-1">
                        <span>{p.noOfRooms} غرف</span>
                        <Bed size={13} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

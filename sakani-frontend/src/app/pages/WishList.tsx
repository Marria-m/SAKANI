import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, MapPin, Bed, Ruler, Compass, Trash2 } from "lucide-react";
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
    .shimmer-bg {
      background: linear-gradient(90deg, #f0f0f0 25%, #e8e8e8 50%, #f0f0f0 75%);
      background-size: 800px 100%;
      animation: shimmer 1.5s infinite linear;
    }
    .card-lift {
      transition: transform .25s cubic-bezier(.4,0,.2,1), box-shadow .25s cubic-bezier(.4,0,.2,1);
    }
    .card-lift:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 28px rgba(0,29,40,.07) !important;
    }
    .glass-card {
      background: rgba(255, 255, 255, 0.75);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.5);
    }
  `}</style>
);

export default function WishList() {
  const navigate = useNavigate();
  const [apartments, setApartments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [clearing, setClearing] = useState(false);

  async function loadWishlist() {
    try {
      const res = await api.get("/Tenant/wishlist");
      setApartments(res.data?.apartments || []);
    } catch (err) {
      console.error("Failed to load wishlist", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadWishlist();
  }, []);

  const handleRemove = async (e: React.MouseEvent, propId: number) => {
    e.stopPropagation();
    try {
      await api.delete(`/Tenant/wishlist/remove/${propId}`);
      setApartments(prev => prev.filter(a => a.id !== propId));
    } catch (err) {
      console.error("Failed to remove from wishlist", err);
    }
  };

  const handleClearAll = async () => {
    if (!window.confirm("هل أنت متأكد من رغبتك في مسح جميع العقارات من المفضلة؟")) return;
    setClearing(true);
    try {
      await api.delete("/Tenant/wishlist/clear");
      setApartments([]);
    } catch (err) {
      console.error("Failed to clear wishlist", err);
      alert("حدث خطأ أثناء مسح المفضلة.");
    } finally {
      setClearing(false);
    }
  };

  return (
    <DashboardLayout title="المفضلة" subtitle="العقارات التي قمت بحفظها">
      <AnimStyles />
      <div className="p-6 md:p-8 flex flex-col gap-6" dir="rtl">
        {/* Title / Action bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-right fade-in-up">
          <div>
            <h1 className="text-[#001d28] font-black text-2xl mb-1" style={{ fontFamily: C }}>
              عقاراتي المفضلة ❤️
            </h1>
            <p className="text-gray-500 text-xs">قائمة بالوحدات السكنية التي أضفتها للمفضلة لمراجعتها أو حجزها لاحقاً</p>
          </div>
          {apartments.length > 0 && (
            <button
              onClick={handleClearAll}
              disabled={clearing}
              className="flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold text-red-600 bg-red-50 hover:bg-red-100 border border-red-200 rounded-xl cursor-pointer disabled:opacity-50 transition-colors w-fit mr-auto sm:mr-0"
              style={{ fontFamily: F }}
            >
              <Trash2 size={13} />
              {clearing ? "جاري المسح..." : "مسح الكل"}
            </button>
          )}
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-gray-100 flex flex-col gap-3">
                <div className="h-48 shimmer-bg" />
                <div className="p-5 flex flex-col gap-3">
                  <div className="h-4 w-3/4 rounded-lg shimmer-bg mr-auto" />
                  <div className="h-3 w-1/2 rounded-lg shimmer-bg mr-auto" />
                </div>
              </div>
            ))}
          </div>
        ) : apartments.length === 0 ? (
          <div className="glass-card rounded-3xl p-12 text-center text-gray-400 border border-gray-100 flex flex-col items-center gap-4 fade-in-up" style={{ fontFamily: F }}>
            <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center text-red-500 text-xl font-bold">
              ❤️
            </div>
            <div>
              <p className="text-[#001d28] font-bold text-base" style={{ fontFamily: C }}>قائمة المفضلة فارغة</p>
              <p className="text-gray-400 text-xs mt-1">تصفح العقارات المتاحة وأضف ما يعجبك للمفضلة</p>
            </div>
            <button
              onClick={() => navigate("/tenant-home")}
              className="mt-2 px-6 py-2.5 bg-[#001d28] text-white rounded-xl text-xs font-bold transition-opacity hover:opacity-90 border-none cursor-pointer"
            >
              استكشف السكنات الآن
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 fade-in-up">
            {apartments.map((p) => {
              const coverImage = p.media && p.media.length > 0 ? getImageUrl(p.media[0].mediaUrl) : null;
              return (
                <div
                  key={p.id}
                  onClick={() => navigate(`/property/${p.id}`)}
                  className="bg-white rounded-2xl overflow-hidden cursor-pointer transition-all card-lift flex flex-col relative"
                  style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.02)", border: "1px solid rgba(0,0,0,0.02)" }}
                >
                  <div className="h-48 overflow-hidden relative bg-gray-100">
                    {coverImage ? (
                      <img src={coverImage} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-300">
                        <Compass size={40} />
                      </div>
                    )}
                    <div className="absolute bottom-3 right-3 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-xl text-white font-bold text-xs" style={{ fontFamily: F }}>
                      {p.price?.toLocaleString("ar")} ج.م / شهر
                    </div>

                    {/* Remove Wishlist Button */}
                    <button
                      type="button"
                      onClick={(e) => handleRemove(e, p.id)}
                      className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center transition-colors hover:bg-white border-none cursor-pointer"
                    >
                      <Heart size={14} color="#dc2626" fill="#dc2626" />
                    </button>
                  </div>
                  <div className="p-5 flex-1 flex flex-col gap-3 text-right">
                    <h3 className="text-[#001d28] font-bold text-base leading-tight" style={{ fontFamily: C }}>{p.title}</h3>
                    <div className="flex items-center gap-1 justify-end text-xs text-[#94a3b8]" style={{ fontFamily: F }}>
                      <span>{p.location}، {p.city}</span>
                      <MapPin size={12} />
                    </div>
                    
                    <div className="flex gap-4 justify-end mt-auto pt-3 border-t border-gray-50 text-xs text-gray-500" style={{ fontFamily: F }}>
                      {p.areaSqm > 0 && (
                        <div className="flex items-center gap-1">
                          <span>{p.areaSqm} م²</span>
                          <Ruler size={13} />
                        </div>
                      )}
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
    </DashboardLayout>
  );
}

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ChevronRight, Home, Zap, MapPin, Image,
  Plus, X, Check, Upload, Trash2
} from "lucide-react";
import DashboardLayout from "../layout/DashboardLayout";
import api from "../../api/axiosConfig";
import InteractiveMap from "../components/InteractiveMap";

const F = "'Readex Pro', sans-serif";
const C = "'Cairo', sans-serif";

const getImageUrl = (url?: string) => {
  if (!url) return null;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  const base = (import.meta.env.VITE_API_URL || "http://localhost:5125/api").replace("/api", "");
  return `${base}/${url.replace(/^\/+/, "")}`;
};

const EGYPT_CITIES = ["القاهرة", "الجيزة", "الإسكندرية", "المنصورة", "طنطا", "أسيوط", "الزقازيق", "الفيوم"];

export default function EditProperty() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [formData, setFormData] = useState<Record<string, any>>({
    title: "",
    price: "",
    areaSqm: "",
    maxCapacity: "",
    noOfRooms: "",
    description: "",
    city: "",
    location: "",
    status: 2, // Empty
    latitude: null,
    longitude: null,
  });

  const [existingMedia, setExistingMedia] = useState<any[]>([]);
  const [newFiles, setNewFiles] = useState<File[]>([]);

  useEffect(() => {
    async function loadProperty() {
      try {
        const response = await api.get(`/apartments/${id}`);
        const property = response.data;
        
        setFormData({
          title: property.title || "",
          price: property.price || "",
          areaSqm: property.areaSqm || "",
          maxCapacity: property.maxCapacity || "",
          noOfRooms: property.noOfRooms || "",
          description: property.description || "",
          city: property.city || "",
          location: property.location || "",
          status: property.status !== undefined ? property.status : 2,
          latitude: property.latitude || null,
          longitude: property.longitude || null,
          locationMode: property.latitude ? "map" : "manual",
        });

        setExistingMedia(property.media || []);
      } catch (err) {
        console.error("Failed to load property details", err);
        setError("فشل تحميل بيانات العقار. قد يكون العقار غير موجود أو لا تملك صلاحية تعديله.");
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      loadProperty();
    }
  }, [id]);

  const [loadingGeocode, setLoadingGeocode] = useState(false);
  const locationMode = formData.locationMode || (formData.latitude ? "map" : "manual");

  const handleMapChange = async (lat: number, lng: number) => {
    setFormData((prev: any) => ({
      ...prev,
      latitude: lat,
      longitude: lng,
    }));

    setLoadingGeocode(true);
    try {
      const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
      if (apiKey && (window as any).google && (window as any).google.maps) {
        const geocoder = new (window as any).google.maps.Geocoder();
        geocoder.geocode({ location: { lat, lng } }, (results: any, status: any) => {
          if (status === "OK" && results[0]) {
            const formatted = results[0].formatted_address;
            let cityVal = "";
            for (const component of results[0].address_components) {
              if (component.types.includes("administrative_area_level_1") || component.types.includes("locality")) {
                cityVal = component.long_name;
                break;
              }
            }
            const matchedCity = EGYPT_CITIES.find(c => formatted.includes(c) || cityVal.includes(c)) || EGYPT_CITIES[0];
            setFormData((prev: any) => ({
              ...prev,
              latitude: lat,
              longitude: lng,
              location: formatted,
              city: matchedCity,
            }));
          }
        });
      } else {
        const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&accept-language=ar`);
        const result = await res.json();
        if (result && result.display_name) {
          const address = result.display_name;
          const addressObj = result.address || {};
          const rawCity = addressObj.city || addressObj.town || addressObj.state || addressObj.governorate || "";
          const matchedCity = EGYPT_CITIES.find(c => address.includes(c) || rawCity.includes(c)) || EGYPT_CITIES[0];
          setFormData((prev: any) => ({
            ...prev,
            latitude: lat,
            longitude: lng,
            location: address,
            city: matchedCity,
          }));
        }
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingGeocode(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selected = Array.from(e.target.files);
      setNewFiles((prev) => [...prev, ...selected]);
    }
  };

  const removeNewFile = (index: number) => {
    setNewFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const deleteExistingMedia = async (mediaId: number) => {
    try {
      await api.delete(`/apartments/${id}/media/${mediaId}`);
      setExistingMedia((prev) => prev.filter((m) => m.id !== mediaId));
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.message || "فشل حذف الصورة من الخادم.");
    }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setSaving(true);

    try {
      // 1. Update basic data
      const payload = {
        title: formData.title,
        description: formData.description,
        maxCapacity: Number(formData.maxCapacity) || 1,
        location: formData.location,
        price: Number(formData.price) || 0,
        noOfRooms: Number(formData.noOfRooms) || 1,
        city: formData.city,
        isFurnished: true,
        distanceKm: 1.5,
        floor: 1,
        areaSqm: Number(formData.areaSqm) || 50,
        securityDeposit: Number(formData.price) * 0.5,
        status: Number(formData.status),
        latitude: formData.latitude,
        longitude: formData.longitude,
      };

      await api.put(`/apartments/${id}`, payload);

      // 2. Upload new media
      if (newFiles.length > 0) {
        for (const file of newFiles) {
          const fileData = new FormData();
          fileData.append("file", file);
          try {
            await api.post(`/apartments/${id}/media`, fileData, {
              headers: { "Content-Type": "multipart/form-data" }
            });
          } catch (uploadErr: any) {
            console.error(uploadErr);
            throw new Error(uploadErr.response?.data?.message || "فشلت صورة واحدة أو أكثر في اجتياز فحص الجودة بالذكاء الاصطناعي.");
          }
        }
        setNewFiles([]);
        // Reload property details to get refreshed media urls with tags
        const refreshRes = await api.get(`/apartments/${id}`);
        setExistingMedia(refreshRes.data.media || []);
      }

      setSuccess("✓ تم حفظ تعديلات العقار بنجاح!");
      setTimeout(() => navigate(`/property/${id}`), 2000);
    } catch (err: any) {
      console.error(err);
      setError(err.message || err.response?.data?.message || "فشل تحديث العقار.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <DashboardLayout title="تعديل العقار" subtitle="جاري التحميل...">
        <div className="flex justify-center items-center h-64 text-gray-500" style={{ fontFamily: F }}>
          جاري تحميل بيانات العقار...
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout title="تعديل العقار" subtitle={formData.title}>
      <div className="p-8 flex flex-col gap-6" dir="rtl">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-right" style={{ fontFamily: F }}>
          <button onClick={() => navigate("/properties")} className="text-[#94a3b8] hover:text-[#001d28] transition-colors cursor-pointer border-none bg-transparent">
            العقارات
          </button>
          <ChevronRight size={14} color="#94a3b8" />
          <button onClick={() => navigate(`/property/${id}`)} className="text-[#94a3b8] hover:text-[#001d28] transition-colors cursor-pointer border-none bg-transparent">
            {formData.title}
          </button>
          <ChevronRight size={14} color="#94a3b8" />
          <span className="text-[#001d28] font-medium">تعديل</span>
        </div>

        {error && (
          <div className="p-4 rounded-xl text-sm text-red-600 bg-red-50 text-right font-medium" style={{ fontFamily: F }}>
            {error}
          </div>
        )}

        {success && (
          <div className="p-4 rounded-xl text-sm text-[#16a34a] bg-[#f0fdf4] text-right font-medium" style={{ fontFamily: F }}>
            {success}
          </div>
        )}

        <form onSubmit={handleUpdate} className="flex gap-8">
          {/* Main Edit Panel */}
          <div className="flex-1 bg-white rounded-3xl p-8 flex flex-col gap-6" style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.06)" }}>
            
            {/* Section 1: Basic Information */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
                <Home size={18} className="text-[#f2994a]" />
                <h3 className="text-[#001d28] font-black text-lg" style={{ fontFamily: C }}>البيانات الأساسية</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#001d28] text-sm font-semibold text-right" style={{ fontFamily: F }}>اسم العقار</label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="bg-[#f3f4f5] rounded-xl px-4 py-3 text-sm text-[#001d28] outline-none text-right border-none"
                    style={{ fontFamily: F }}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#001d28] text-sm font-semibold text-right" style={{ fontFamily: F }}>المدينة</label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="bg-[#f3f4f5] rounded-xl px-4 py-3 text-sm text-[#001d28] outline-none text-right border-none cursor-pointer"
                    style={{ fontFamily: F }}
                  >
                    <option value="">اختر المدينة</option>
                    {EGYPT_CITIES.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#001d28] text-sm font-semibold text-right" style={{ fontFamily: F }}>السعر الشهري (جنيه مصري)</label>
                  <input
                    type="number"
                    required
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    className="bg-[#f3f4f5] rounded-xl px-4 py-3 text-sm text-[#001d28] outline-none text-right border-none"
                    style={{ fontFamily: F }}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#001d28] text-sm font-semibold text-right" style={{ fontFamily: F }}>المساحة (م²)</label>
                  <input
                    type="number"
                    required
                    value={formData.areaSqm}
                    onChange={(e) => setFormData({ ...formData, areaSqm: e.target.value })}
                    className="bg-[#f3f4f5] rounded-xl px-4 py-3 text-sm text-[#001d28] outline-none text-right border-none"
                    style={{ fontFamily: F }}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#001d28] text-sm font-semibold text-right" style={{ fontFamily: F }}>عدد الغرف</label>
                  <input
                    type="number"
                    required
                    value={formData.noOfRooms}
                    onChange={(e) => setFormData({ ...formData, noOfRooms: e.target.value })}
                    className="bg-[#f3f4f5] rounded-xl px-4 py-3 text-sm text-[#001d28] outline-none text-right border-none"
                    style={{ fontFamily: F }}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#001d28] text-sm font-semibold text-right" style={{ fontFamily: F }}>السعة القصوى (أفراد)</label>
                  <input
                    type="number"
                    required
                    value={formData.maxCapacity}
                    onChange={(e) => setFormData({ ...formData, maxCapacity: e.target.value })}
                    className="bg-[#f3f4f5] rounded-xl px-4 py-3 text-sm text-[#001d28] outline-none text-right border-none"
                    style={{ fontFamily: F }}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[#001d28] text-sm font-semibold text-right" style={{ fontFamily: F }}>الوصف التفصيلي</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  className="bg-[#f3f4f5] rounded-xl px-4 py-3 text-sm text-[#001d28] outline-none text-right border-none resize-none"
                  style={{ fontFamily: F }}
                />
              </div>
            </div>

            {/* Section 2: Location Details */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                {/* Tab switcher */}
                <div className="flex bg-[#f3f4f5] p-1.5 rounded-xl gap-1" dir="rtl">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, locationMode: "map" })}
                    className={`px-4 py-1.5 rounded-lg text-[10px] font-bold border-none cursor-pointer transition-all duration-200 ${
                      locationMode === "map"
                        ? "bg-[#001d28] text-white shadow-sm"
                        : "bg-transparent text-gray-500 hover:text-[#001d28]"
                    }`}
                    style={{ fontFamily: F }}
                  >
                    📍 تحديد عبر الخريطة (GPS)
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, locationMode: "manual", latitude: null, longitude: null })}
                    className={`px-4 py-1.5 rounded-lg text-[10px] font-bold border-none cursor-pointer transition-all duration-200 ${
                      locationMode === "manual"
                        ? "bg-[#001d28] text-white shadow-sm"
                        : "bg-transparent text-gray-500 hover:text-[#001d28]"
                    }`}
                    style={{ fontFamily: F }}
                  >
                    ✍️ إدخال يدوي للعنوان
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-[#f2994a]" />
                  <h3 className="text-[#001d28] font-black text-lg" style={{ fontFamily: C }}>الموقع الجغرافي</h3>
                </div>
              </div>

              {locationMode === "manual" ? (
                <div className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[#001d28] text-sm font-semibold text-right" style={{ fontFamily: F }}>المدينة</label>
                      <select
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="bg-[#f3f4f5] rounded-xl px-4 py-3 text-sm text-[#001d28] outline-none text-right border-none cursor-pointer"
                        style={{ fontFamily: F }}
                      >
                        <option value="">اختر المدينة</option>
                        {EGYPT_CITIES.map((c) => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[#001d28] text-sm font-semibold text-right" style={{ fontFamily: F }}>العنوان والحي</label>
                      <input
                        type="text"
                        required
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="bg-[#f3f4f5] rounded-xl px-4 py-3 text-sm text-[#001d28] outline-none text-right border-none"
                        style={{ fontFamily: F }}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  <div className="h-56 rounded-2xl overflow-hidden border border-gray-100 relative" style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
                    <InteractiveMap
                      lat={formData.latitude}
                      lng={formData.longitude}
                      onChange={handleMapChange}
                    />
                  </div>
                  
                  {loadingGeocode && (
                    <p className="text-xs text-orange-500 text-right font-medium animate-pulse" style={{ fontFamily: F }}>
                      ⏳ جاري تحديد العنوان من الخريطة...
                    </p>
                  )}

                  {formData.location && !loadingGeocode && (
                    <div className="bg-[#f8f9fa] rounded-2xl p-4 text-right flex flex-col gap-2">
                      <span className="text-[10px] text-gray-400 font-semibold" style={{ fontFamily: F }}>العنوان المكتشف تلقائياً</span>
                      <span className="text-xs text-[#001d28] font-bold leading-relaxed">{formData.location}</span>
                      <span className="text-[10px] text-gray-400 font-medium">المدينة: {formData.city}</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Section 3: Status / Occupancy */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
                <Zap size={18} className="text-[#f2994a]" />
                <h3 className="text-[#001d28] font-black text-lg" style={{ fontFamily: C }}>حالة الإشغال</h3>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[#001d28] text-sm font-semibold text-right" style={{ fontFamily: F }}>الحالة الحالية للوحدة</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  className="bg-[#f3f4f5] rounded-xl px-4 py-3 text-sm text-[#001d28] outline-none text-right border-none cursor-pointer"
                  style={{ fontFamily: F }}
                >
                  <option value={2}>نشط / فارغ (متاح للحجز)</option>
                  <option value={1}>مشترك (فارغ جزئياً)</option>
                  <option value={0}>مؤجر (ممتلئ بالكامل)</option>
                </select>
              </div>
            </div>

            {/* Section 4: Media Gallery */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
                <Image size={18} className="text-[#f2994a]" />
                <h3 className="text-[#001d28] font-black text-lg" style={{ fontFamily: C }}>صور الوحدة والوسائط</h3>
              </div>

              {/* Existing Images */}
              {existingMedia.length > 0 && (
                <div className="flex flex-col gap-2">
                  <span className="text-[#001d28] text-sm font-semibold text-right" style={{ fontFamily: F }}>الصور الحالية:</span>
                  <div className="grid grid-cols-4 gap-3">
                    {existingMedia.map((m) => (
                      <div key={m.id} className="relative rounded-xl overflow-hidden h-24 bg-[#f3f4f5]">
                        <img src={getImageUrl(m.mediaUrl) || ""} alt="" className="w-full h-full object-cover" />
                        <button
                          type="button"
                          onClick={() => deleteExistingMedia(m.id)}
                          className="absolute top-1.5 right-1.5 w-6 h-6 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center border-none cursor-pointer transition-colors"
                        >
                          <Trash2 size={12} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Upload New Images */}
              <div className="flex flex-col gap-2 mt-2">
                <span className="text-[#001d28] text-sm font-semibold text-right" style={{ fontFamily: F }}>إضافة صور جديدة:</span>
                <div className="grid grid-cols-4 gap-3">
                  {/* Plus button */}
                  <label
                    className="rounded-xl flex flex-col items-center justify-center gap-2 transition-colors hover:border-[#001d28] cursor-pointer bg-[#f8f9fa] h-24"
                    style={{ border: "2px dashed rgba(0,0,0,0.12)" }}
                  >
                    <input type="file" accept="image/*" multiple className="hidden" onChange={handleFileChange} />
                    <Plus size={18} className="text-[#94a3b8]" />
                    <span className="text-[10px] text-[#94a3b8]" style={{ fontFamily: F }}>أضف صور</span>
                  </label>

                  {/* Previews for new files */}
                  {newFiles.map((f, idx) => (
                    <div key={idx} className="relative rounded-xl overflow-hidden h-24 bg-[#f3f4f5]">
                      <img src={URL.createObjectURL(f)} alt="" className="w-full h-full object-cover" />
                      <button
                        type="button"
                        onClick={() => removeNewFile(idx)}
                        className="absolute top-1.5 right-1.5 w-6 h-6 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center border-none cursor-pointer transition-colors"
                      >
                        <X size={12} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 justify-end mt-4">
              <button
                type="button"
                onClick={() => navigate(`/property/${id}`)}
                className="px-6 py-3.5 rounded-xl font-bold text-[#001d28] bg-[#f3f4f5] hover:bg-[#ececf0] transition-colors border-none cursor-pointer"
                style={{ fontFamily: F }}
              >
                إلغاء التعديل
              </button>
              <button
                type="submit"
                disabled={saving}
                className="px-8 py-3.5 rounded-xl font-bold text-white transition-opacity hover:opacity-90 cursor-pointer border-none bg-[#001d28] disabled:opacity-50"
                style={{ fontFamily: F }}
              >
                {saving ? "جاري الحفظ..." : "حفظ التغييرات"}
              </button>
            </div>

          </div>
        </form>
      </div>
    </DashboardLayout>
  );
}

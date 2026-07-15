import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronRight, ChevronLeft, Home, Zap, MapPin, Image,
  Wifi, Wind, Car, ShieldCheck, Utensils, WashingMachine,
  Plus, X, Check, Upload, Award
} from "lucide-react";

import ownerProfile from "@/imports/SakaniBasicDataRender/4bcee8928a1197c9f7436fab69e36b4701bd578b.png";
import amenityBg from "@/imports/SakaniHousingCodeRender/b4bf2c3d8a92a200b00cb9d577974cdac035a321.png";
import mapImg from "@/imports/SakaniLocationServicesRender/5ec34a449a94714daf4f8c50a0ed57dd9881bd69.png";
import userProfile from "@/imports/SakaniLocationServicesRender/3e594baa3e964880d48f88e16d741a6e6f6eb318.png";
import uploadPreview from "@/imports/SakaniMediaTrustRender/86210c4743cf38317a6e55bcbf3548494e3e0b1d.png";
import api from "../../api/axiosConfig";
import { useAuth } from "../../context/AuthContext";

const F = "'Readex Pro', sans-serif";
const C = "'Cairo', sans-serif";

const STEPS = [
  { id: 1, label: "البيانات الأساسية", icon: Home },
  { id: 2, label: "المرافق والميزات", icon: Zap },
  { id: 3, label: "الموقع", icon: MapPin },
  { id: 4, label: "الوسائط والتوثيق", icon: Image },
];

const AMENITY_LIST = [
  { key: "wifi", label: "واي فاي", icon: Wifi },
  { key: "ac", label: "تكييف", icon: Wind },
  { key: "parking", label: "موقف سيارة", icon: Car },
  { key: "security", label: "أمن وحراسة", icon: ShieldCheck },
  { key: "kitchen", label: "مطبخ مشترك", icon: Utensils },
  { key: "laundry", label: "غسيل", icon: WashingMachine },
];

const EGYPT_CITIES = ["القاهرة", "الجيزة", "الإسكندرية", "المنصورة", "طنطا", "أسيوط", "الزقازيق", "الفيوم"];

function StepIndicator({ step }: { step: number }) {
  return (
    <div className="flex items-center justify-center gap-0">
      {STEPS.map((s, i) => (
        <div key={s.id} className="flex items-center">
          <div className="flex flex-col items-center gap-1.5">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all"
              style={{
                background: step >= s.id ? "#001d28" : step === s.id - 1 ? "#e2e8f0" : "#f3f4f5",
                border: step === s.id ? "2px solid #f2994a" : "none",
              }}
            >
              {step > s.id ? (
                <Check size={16} color="white" />
              ) : (
                <s.icon size={16} color={step >= s.id ? "white" : "#94a3b8"} />
              )}
            </div>
            <span
              className="text-[10px] whitespace-nowrap"
              style={{ fontFamily: F, color: step >= s.id ? "#001d28" : "#94a3b8", fontWeight: step === s.id ? 600 : 400 }}
            >
              {s.label}
            </span>
          </div>
          {i < STEPS.length - 1 && (
            <div
              className="w-12 h-0.5 mx-1 -mt-5 shrink-0"
              style={{ background: step > s.id ? "#001d28" : "#e2e8f0" }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

/* ── Step 1: Basic Data ── */
function Step1({ data, setData }: { data: any; setData: any }) {
  const { user } = useAuth();
  return (
    <div className="flex gap-8">
      <div className="flex-1 flex flex-col gap-5">
        <h2 className="text-[#001d28] font-black text-2xl text-right" style={{ fontFamily: C }}>البيانات الأساسية</h2>
        <p className="text-[#71787c] text-sm text-right -mt-3" style={{ fontFamily: F }}>أدخل المعلومات الأساسية للوحدة السكنية</p>

        <div className="grid grid-cols-2 gap-4">
          {[
            { key: "name", label: "اسم الوحدة", placeholder: "مثال: شقة المهندسين المريحة", inputType: "text" },
            { key: "type", label: "نوع الوحدة", placeholder: "", type: "select", options: ["شقة", "غرفة", "استوديو"] },
            { key: "price", label: "السعر الشهري (جنيه مصري)", placeholder: "1500", inputType: "number" },
            { key: "area", label: "المساحة (م²)", placeholder: "85", inputType: "number" },
            { key: "beds", label: "عدد الغرف", placeholder: "3", inputType: "number" },
            { key: "baths", label: "عدد الحمامات", placeholder: "2", inputType: "number" },
          ].map(({ key, label, placeholder, type, options, inputType }: any) => (
            <div key={key} className="flex flex-col gap-1.5">
              <label className="text-[#001d28] text-sm font-semibold text-right" style={{ fontFamily: F }}>{label}</label>
              {type === "select" ? (
                <select
                  value={data[key] || ""}
                  onChange={(e) => setData({ ...data, [key]: e.target.value })}
                  dir="rtl"
                  className="bg-[#f3f4f5] rounded-xl px-4 py-3 text-sm text-[#001d28] outline-none text-right border-none"
                  style={{ fontFamily: F }}
                >
                  <option value="">اختر النوع</option>
                  {options.map((o: string) => <option key={o} value={o}>{o}</option>)}
                </select>
              ) : (
                <input
                  type={inputType || "text"}
                  pattern={inputType === "number" ? "[0-9]*" : undefined}
                  value={data[key] || ""}
                  onChange={(e) => setData({ ...data, [key]: e.target.value })}
                  placeholder={placeholder}
                  dir="rtl"
                  className="bg-[#f3f4f5] rounded-xl px-4 py-3 text-sm text-[#001d28] placeholder-[#94a3b8] outline-none text-right border-none"
                  style={{ fontFamily: F }}
                />
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[#001d28] text-sm font-semibold text-right" style={{ fontFamily: F }}>وصف الوحدة</label>
          <textarea
            value={data.description || ""}
            onChange={(e) => setData({ ...data, description: e.target.value })}
            placeholder="اكتب وصفاً تفصيلياً للوحدة..."
            dir="rtl"
            rows={4}
            className="bg-[#f3f4f5] rounded-xl px-4 py-3 text-sm text-[#001d28] placeholder-[#94a3b8] outline-none text-right resize-none border-none"
            style={{ fontFamily: F }}
          />
        </div>
      </div>

      {/* Side panel */}
      <div className="w-64 shrink-0 flex flex-col gap-4">
        <div className="rounded-2xl overflow-hidden bg-white" style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
          <img src={ownerProfile} alt="" className="w-full h-40 object-cover" />
          <div className="p-4 text-right">
            <p className="text-[#001d28] font-bold text-sm" style={{ fontFamily: C }}>{user?.fullName || "المالك"}</p>
            <p className="text-[#94a3b8] text-xs mt-0.5" style={{ fontFamily: F }}>مالك عقار موثق ✓</p>
          </div>
        </div>
        <div
          className="bg-[#001d28] rounded-2xl p-4 text-right"
          style={{ boxShadow: "0 4px 16px rgba(0,29,40,0.15)" }}
        >
          <p className="text-white font-bold text-sm" style={{ fontFamily: C }}>نصائح لوحدة مميزة</p>
          <ul className="mt-2 flex flex-col gap-1.5 text-right">
            {["اكتب عنواناً واضحاً وجذاباً", "حدد السعر بدقة لجذب الطلاب", "اذكر المرافق القريبة من الجامعة"].map((t) => (
              <li key={t} className="flex items-start gap-1.5 text-[#94a3b8] text-xs justify-end" style={{ fontFamily: F }}>
                <span>{t}</span>
                <span className="text-[#f2994a] mt-0.5">•</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ── Step 2: Amenities ── */
function Step2({ data, setData }: { data: any; setData: any }) {
  const amenities: string[] = data.amenities || [];

  function toggle(key: string) {
    setData({
      ...data,
      amenities: amenities.includes(key) ? amenities.filter((a) => a !== key) : [...amenities, key],
    });
  }

  return (
    <div className="flex gap-8">
      <div className="flex-1 flex flex-col gap-6">
        <h2 className="text-[#001d28] font-black text-2xl text-right" style={{ fontFamily: C }}>المرافق والميزات</h2>
        <p className="text-[#71787c] text-sm text-right -mt-3" style={{ fontFamily: F }}>حدد المرافق المتوفرة في الوحدة</p>

        <div className="grid grid-cols-3 gap-3">
          {AMENITY_LIST.map(({ key, label, icon: Icon }) => {
            const active = amenities.includes(key);
            return (
              <button
                key={key}
                type="button"
                onClick={() => toggle(key)}
                className="flex flex-col items-center gap-2 p-4 rounded-2xl transition-all border cursor-pointer"
                style={{
                  background: active ? "#001d28" : "white",
                  borderColor: active ? "#001d28" : "rgba(0,0,0,0.08)",
                  boxShadow: active ? "0 4px 12px rgba(0,29,40,0.2)" : "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                <Icon size={22} color={active ? "#f2994a" : "#94a3b8"} />
                <span
                  className="text-xs font-medium"
                  style={{ fontFamily: F, color: active ? "white" : "#001d28" }}
                >
                  {label}
                </span>
              </button>
            );
          })}
        </div>

        {/* House rules */}
        <div className="flex flex-col gap-3">
          <h3 className="text-[#001d28] font-bold text-base text-right" style={{ fontFamily: C }}>قواعد السكن</h3>
          {[
            { key: "noSmoking", label: "ممنوع التدخين" },
            { key: "noPets", label: "ممنوع الحيوانات الأليفة" },
            { key: "femaleOnly", label: "للطالبات فقط" },
            { key: "quietHours", label: "ساعات هدوء بعد 11م" },
          ].map(({ key, label }) => {
            const active = (data.rules || []).includes(key);
            return (
              <button
                key={key}
                type="button"
                onClick={() => {
                  const rules = data.rules || [];
                  setData({ ...data, rules: active ? rules.filter((r: string) => r !== key) : [...rules, key] });
                }}
                className="flex items-center justify-between p-3.5 rounded-xl transition-colors cursor-pointer"
                style={{ background: active ? "#f0fdf4" : "#f3f4f5", border: active ? "1px solid #bbf7d0" : "1px solid transparent" }}
              >
                <div
                  className="w-5 h-5 rounded-md flex items-center justify-center transition-all"
                  style={{ background: active ? "#16a34a" : "white", border: active ? "none" : "1.5px solid #d1d5db" }}
                >
                  {active && <Check size={12} color="white" />}
                </div>
                <span className="text-[#001d28] text-sm" style={{ fontFamily: F }}>{label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="w-56 shrink-0">
        <div className="rounded-2xl overflow-hidden sticky top-4" style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
          <img src={amenityBg} alt="" className="w-full h-48 object-cover" />
          <div className="bg-white p-4 text-right">
            <p className="text-[#001d28] font-bold text-sm" style={{ fontFamily: C }}>المرافق المختارة</p>
            <p className="text-3xl font-black text-[#f2994a] mt-1" style={{ fontFamily: C }}>{amenities.length}</p>
            <p className="text-[#94a3b8] text-xs" style={{ fontFamily: F }}>من أصل {AMENITY_LIST.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Step 3: Location ── */
function Step3({ data, setData }: { data: any; setData: any }) {
  return (
    <div className="flex gap-8">
      <div className="flex-1 flex flex-col gap-5">
        <h2 className="text-[#001d28] font-black text-2xl text-right" style={{ fontFamily: C }}>الموقع</h2>
        <p className="text-[#71787c] text-sm text-right -mt-3" style={{ fontFamily: F }}>حدد موقع الوحدة بدقة</p>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-[#001d28] text-sm font-semibold text-right" style={{ fontFamily: F }}>المدينة</label>
            <select
              value={data.city || ""}
              onChange={(e) => setData({ ...data, city: e.target.value })}
              dir="rtl"
              className="bg-[#f3f4f5] rounded-xl px-4 py-3 text-sm text-[#001d28] outline-none text-right border-none"
              style={{ fontFamily: F }}
            >
              <option value="">اختر المدينة</option>
              {EGYPT_CITIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[#001d28] text-sm font-semibold text-right" style={{ fontFamily: F }}>الحي</label>
            <input
              type="text"
              value={data.district || ""}
              onChange={(e) => setData({ ...data, district: e.target.value })}
              placeholder="مثال: حي المهندسين"
              dir="rtl"
              className="bg-[#f3f4f5] rounded-xl px-4 py-3 text-sm text-[#001d28] placeholder-[#94a3b8] outline-none text-right border-none"
              style={{ fontFamily: F }}
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[#001d28] text-sm font-semibold text-right" style={{ fontFamily: F }}>العنوان التفصيلي</label>
          <input
            type="text"
            value={data.address || ""}
            onChange={(e) => setData({ ...data, address: e.target.value })}
            placeholder="شارع، مبنى، طابق..."
            dir="rtl"
            className="bg-[#f3f4f5] rounded-xl px-4 py-3 text-sm text-[#001d28] placeholder-[#94a3b8] outline-none text-right border-none"
            style={{ fontFamily: F }}
          />
        </div>

        {/* Map preview */}
        <div className="rounded-2xl overflow-hidden relative" style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
          <img src={mapImg} alt="الخريطة" className="w-full h-52 object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white"
              style={{ background: "rgba(0,29,40,0.8)", fontFamily: F, backdropFilter: "blur(8px)" }}
            >
              <MapPin size={15} color="#f2994a" />
              انقر لتحديد الموقع على الخريطة
            </div>
          </div>
        </div>
      </div>

      <div className="w-56 shrink-0 flex flex-col gap-4">
        <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
          <img src={userProfile} alt="" className="w-full h-36 object-cover" />
        </div>
        <div
          className="bg-[#001d28] rounded-2xl p-4 text-right"
          style={{ boxShadow: "0 4px 16px rgba(0,29,40,0.15)" }}
        >
          <p className="text-white font-bold text-sm" style={{ fontFamily: C }}>لماذا الموقع مهم؟</p>
          <p className="text-[#94a3b8] text-xs mt-2 leading-relaxed" style={{ fontFamily: F }}>
            الطالبات يبحثن عن سكن قريب من جامعاتهن. تحديد الموقع بدقة يزيد من فرص إيجاد مستأجرة مناسبة.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Step 4: Media ── */
function Step4({ data, setData, files, setFiles }: { data: any; setData: any; files: File[]; setFiles: any }) {
  const [docs, setDocs] = useState<string[]>(data.docs || []);

  function addDoc(name: string) {
    const updated = [...docs, name];
    setDocs(updated);
    setData({ ...data, docs: updated });
  }

  function removeDoc(name: string) {
    const updated = docs.filter((d) => d !== name);
    setDocs(updated);
    setData({ ...data, docs: updated });
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      setFiles((prev: File[]) => [...prev, ...newFiles]);
    }
  };

  const removeFile = (idx: number) => {
    setFiles((prev: File[]) => prev.filter((_, i) => i !== idx));
  };

  return (
    <div className="flex gap-8">
      <div className="flex-1 flex flex-col gap-6">
        <h2 className="text-[#001d28] font-black text-2xl text-right" style={{ fontFamily: C }}>الوسائط والتوثيق</h2>
        <p className="text-[#71787c] text-sm text-right -mt-3" style={{ fontFamily: F }}>أضف صوراً وملفات التوثيق للوحدة</p>

        {/* Photo upload area */}
        <div className="flex flex-col gap-3">
          <h3 className="text-[#001d28] font-bold text-base text-right" style={{ fontFamily: C }}>صور الوحدة (يمكنك رفع أكثر من صورة)</h3>
          <div className="grid grid-cols-3 gap-3">
            {/* Main Image Preview Slot */}
            <div
              className="relative rounded-2xl overflow-hidden col-span-2 row-span-2 bg-[#f3f4f5]"
              style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.06)", height: 200 }}
            >
              {files.length > 0 ? (
                <div className="relative w-full h-full">
                  <img src={URL.createObjectURL(files[0])} alt="" className="w-full h-full object-cover" />
                  <button
                    type="button"
                    onClick={() => removeFile(0)}
                    className="absolute top-2 right-2 w-6 h-6 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center border-none cursor-pointer"
                  >
                    <X size={12} />
                  </button>
                </div>
              ) : (
                <img src={uploadPreview} alt="" className="w-full h-full object-cover" />
              )}
              <div className="absolute top-2 left-2 flex gap-1">
                <span
                  className="px-2 py-0.5 rounded-full text-[10px] font-semibold text-white"
                  style={{ background: "#f2994a", fontFamily: F }}
                >
                  صورة الغلاف
                </span>
              </div>
            </div>

            {/* Upload Button */}
            <label
              className="rounded-2xl flex flex-col items-center justify-center gap-2 transition-colors hover:border-[#001d28] cursor-pointer"
              style={{
                height: 94,
                border: "2px dashed rgba(0,0,0,0.12)",
                background: "#f8f9fa",
              }}
            >
              <input type="file" accept="image/*" multiple className="hidden" onChange={handleFileChange} />
              <Plus size={18} color="#94a3b8" />
              <span className="text-[10px] text-[#94a3b8]" style={{ fontFamily: F }}>
                أضف صوراً جديدة
              </span>
            </label>

            {/* Additional previews */}
            {files.slice(1).map((f, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden bg-[#f3f4f5]"
                style={{ height: 94 }}
              >
                <img src={URL.createObjectURL(f)} alt="" className="w-full h-full object-cover" />
                <button
                  type="button"
                  onClick={() => removeFile(index + 1)}
                  className="absolute top-1 right-1 w-5 h-5 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center border-none cursor-pointer"
                >
                  <X size={10} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Document upload */}
        <div className="flex flex-col gap-3">
          <h3 className="text-[#001d28] font-bold text-base text-right" style={{ fontFamily: C }}>وثائق التوثيق</h3>
          <div className="flex flex-col gap-2">
            {[
              { key: "ownership", label: "وثيقة الملكية" },
              { key: "id", label: "صورة الهوية الوطنية" },
            ].map(({ key, label }) => {
              const uploaded = docs.includes(key);
              return (
                <div
                  key={key}
                  className="flex items-center justify-between p-4 rounded-xl transition-all"
                  style={{
                    background: uploaded ? "#f0fdf4" : "#f3f4f5",
                    border: uploaded ? "1px solid #bbf7d0" : "1px solid transparent",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => uploaded ? removeDoc(key) : addDoc(key)}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer"
                    style={{
                      fontFamily: F,
                      background: uploaded ? "white" : "#001d28",
                      color: uploaded ? "#dc2626" : "white",
                    }}
                  >
                    {uploaded ? <><X size={13} /> إزالة</> : <><Upload size={13} /> رفع</>}
                  </button>
                  <div className="flex items-center gap-2 text-right">
                    <span className="text-[#001d28] text-sm font-medium" style={{ fontFamily: F }}>{label}</span>
                    {uploaded && <Check size={15} color="#16a34a" />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="w-56 shrink-0 flex flex-col gap-4">
        <div
          className="bg-[#001d28] rounded-2xl p-5 text-right"
          style={{ boxShadow: "0 4px 16px rgba(0,29,40,0.15)" }}
        >
          <p className="text-white font-bold text-sm mb-3" style={{ fontFamily: C }}>حالة التوثيق</p>
          <div className="flex flex-col gap-2">
            {[
              { label: "الصور", done: files.length >= 1 },
              { label: "الوثائق", done: docs.length >= 1 },
              { label: "التحقق", done: false },
            ].map(({ label, done }) => (
              <div key={label} className="flex items-center justify-between">
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ background: done ? "#16a34a" : "rgba(255,255,255,0.1)" }}
                >
                  {done && <Check size={11} color="white" />}
                </div>
                <span className="text-sm" style={{ fontFamily: F, color: done ? "white" : "#94a3b8" }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Main Component ── */
export default function AddProperty() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Record<string, any>>({
    name: "",
    type: "",
    price: "",
    area: "",
    beds: "",
    baths: "",
    description: "",
    city: "",
    district: "",
    address: "",
    amenities: [],
    rules: [],
    docs: []
  });
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [createdApartmentId, setCreatedApartmentId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  // AI Pricing Suggestion overlay
  const [showAiPricing, setShowAiPricing] = useState(false);
  const [suggestedPrice, setSuggestedPrice] = useState<number | null>(null);

  async function handlePublish() {
    setError("");
    setLoading(true);

    try {
      // 1. Create property
      let apartmentId = createdApartmentId;
      if (!apartmentId) {
        const payload = {
          title: formData.name,
          description: formData.description,
          maxCapacity: Number(formData.beds) || 1,
          location: `${formData.district || ""}, ${formData.address || ""}`,
          price: Number(formData.price) || 0,
          noOfRooms: Number(formData.beds) || 1,
          city: formData.city,
          isFurnished: true,
          distanceKm: 1.5,
          floor: 1,
          areaSqm: Number(formData.area) || 50,
          securityDeposit: Number(formData.price) * 0.5,
          genderPolices: formData.rules?.includes("femaleOnly") ? 1 : 0,
          listingStatus: 0,
          status: 2 // Empty
        };

        const propRes = await api.post("/apartments", payload);
        apartmentId = propRes.data.id;
        setCreatedApartmentId(apartmentId);
      }

      // 2. Upload files if selected
      if (selectedFiles.length > 0 && apartmentId) {
        for (const file of selectedFiles) {
          const fileData = new FormData();
          fileData.append("file", file);
          await api.post(`/apartments/${apartmentId}/media`, fileData, {
            headers: { "Content-Type": "multipart/form-data" }
          });
        }
        // If all uploads succeeded, we can clear the selected files list
        setSelectedFiles([]);
      }

      // 3. Get AI Price suggestion
      try {
        const pricingRes = await api.get(`/apartments/${apartmentId}/price-suggestion`);
        if (pricingRes.data && pricingRes.data.suggestedPrice) {
          setSuggestedPrice(pricingRes.data.suggestedPrice);
          setShowAiPricing(true);
          return; // Wait for user to dismiss/confirm pricing suggestion modal
        }
      } catch (priceErr) {
        console.error("AI Price suggestion failed", priceErr);
      }

      // Default redirect if AI price suggestion has no modal data
      navigate("/properties");
    } catch (err: any) {
      setError(err.response?.data?.message || "فشل نشر العقار. يرجى المحاولة مرة أخرى.");
      setLoading(false);
    }
  }

  function next() {
    if (step < 4) setStep(step + 1);
    else handlePublish();
  }
  function prev() {
    if (step > 1) setStep(step - 1);
    else navigate("/properties");
  }

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col relative" dir="rtl">
      {/* Top nav */}
      <nav
        className="flex items-center justify-between px-8 py-4 bg-white sticky top-0 z-20"
        style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#f2994a] flex items-center justify-center text-[#001d28] font-black text-sm">
            س
          </div>
          <span className="text-[#001d28] font-bold text-xl" style={{ fontFamily: C }}>سكني</span>
        </div>
        <h1 className="text-[#001d28] font-bold text-base" style={{ fontFamily: C }}>إضافة وحدة سكنية جديدة</h1>
        <button
          onClick={() => navigate("/properties")}
          className="flex items-center gap-1 text-[#94a3b8] text-sm hover:text-[#001d28] transition-colors cursor-pointer"
          style={{ fontFamily: F }}
        >
          إلغاء
          <X size={16} />
        </button>
      </nav>

      {/* Step indicator */}
      <div className="bg-white py-6 px-8" style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div className="max-w-3xl mx-auto">
          <StepIndicator step={step} />
        </div>
      </div>

      {/* Form content */}
      <div className="flex-1 px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <div
            className="bg-white rounded-3xl p-8"
            style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.06)" }}
          >
            {error && (
              <div
                className="p-3 bg-red-50 text-red-600 text-sm rounded-xl text-right mb-4"
                style={{ fontFamily: F }}
              >
                {error}
              </div>
            )}
            
            {step === 1 && <Step1 data={formData} setData={setFormData} />}
            {step === 2 && <Step2 data={formData} setData={setFormData} />}
            {step === 3 && <Step3 data={formData} setData={setFormData} />}
            {step === 4 && (
              <Step4
                data={formData}
                setData={setFormData}
                files={selectedFiles}
                setFiles={setSelectedFiles}
              />
            )}
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div
        className="bg-white px-8 py-4 flex items-center justify-between sticky bottom-0"
        style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}
      >
        <button
          onClick={next}
          disabled={loading}
          className="flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm text-white transition-opacity hover:opacity-90 cursor-pointer disabled:opacity-50"
          style={{ background: "linear-gradient(135deg, #001d28, #003344)", fontFamily: F }}
        >
          {loading ? "جاري النشر..." : step === 4 ? "نشر الوحدة" : "التالي"}
          <ChevronLeft size={16} />
        </button>

        <div className="flex items-center gap-2">
          {STEPS.map((s) => (
            <div
              key={s.id}
              className="transition-all rounded-full"
              style={{
                width: step === s.id ? 20 : 8,
                height: 8,
                background: step >= s.id ? "#001d28" : "#e2e8f0",
              }}
            />
          ))}
        </div>

        <button
          onClick={prev}
          disabled={loading}
          className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-[#001d28] bg-[#f3f4f5] hover:bg-[#ececf0] transition-colors cursor-pointer"
          style={{ fontFamily: F }}
        >
          <ChevronRight size={16} />
          {step === 1 ? "إلغاء" : "السابق"}
        </button>
      </div>

      {/* AI Pricing Suggestion Modal */}
      {showAiPricing && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div
            className="bg-white rounded-3xl p-8 max-w-md w-full flex flex-col gap-5 relative text-right"
            style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
          >
            <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center mx-auto mb-2">
              <Award size={28} color="#f2994a" />
            </div>

            <h3 className="text-[#001d28] font-black text-2xl text-center" style={{ fontFamily: C }}>
              مساعد الأسعار الذكي ✨
            </h3>

            <p className="text-[#71787c] text-sm text-center" style={{ fontFamily: F }}>
              قام نموذج الذكاء الاصطناعي بتحليل مواصفات عقارك ومقارنتها بالمنطقة المحيطة.
            </p>

            <div className="p-4 rounded-2xl bg-gray-50 flex justify-between items-center" style={{ fontFamily: F }}>
              <span className="text-[#f2994a] font-bold text-xl">{suggestedPrice} جنيه</span>
              <span className="text-[#001d28] font-medium text-sm">السعر المقترح شهرياً</span>
            </div>

            <p className="text-xs text-gray-400 text-center leading-relaxed" style={{ fontFamily: F }}>
              تم استنتاج هذا السعر بناءً على المساحة، عدد الغرف، والمدينة، لضمان الحصول على أعلى نسبة إشغال.
            </p>

            <button
              onClick={() => navigate("/properties")}
              className="w-full py-3.5 rounded-xl bg-[#001d28] text-white font-bold text-sm transition-opacity hover:opacity-90 cursor-pointer"
              style={{ fontFamily: F }}
            >
              فهمت، عرض عقاراتي
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

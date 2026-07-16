import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Star, Eye, Users, Bed, Bath, Maximize2, ChevronRight, Phone, Heart, Calendar, MessageCircle, FileText } from "lucide-react";
import DashboardLayout from "../layout/DashboardLayout";
import api from "../../api/axiosConfig";
import { useAuth } from "../../context/AuthContext";
import InteractiveMap from "../components/InteractiveMap";
import CustomSelect from "../components/CustomSelect";
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
  const { user } = useAuth();
  
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
  
  const [property, setProperty] = useState<any>(null);
  const [issues, setIssues] = useState<any[]>([]);
  const [activeImg, setActiveImg] = useState(0);
  const [tab, setTab] = useState<"details" | "bookings" | "issues">("details");
  const [loading, setLoading] = useState(true);

  // Tenant states
  const [wishlisted, setWishlisted] = useState(false);
  const [appointmentDate, setAppointmentDate] = useState("");
  const [tenantMessage, setTenantMessage] = useState("");
  const [bookingStatus, setBookingStatus] = useState<string | null>(null);
  const [bookingLoading, setBookingLoading] = useState(false);

  // Tenant Booking Request states
  const [approvedAppointments, setApprovedAppointments] = useState<any[]>([]);
  const [selectedAppointmentId, setSelectedAppointmentId] = useState<number | "">("");
  const [bookingStartDate, setBookingStartDate] = useState("");
  const [bookingDuration, setBookingDuration] = useState("6");
  const [bookingRequestStatus, setBookingRequestStatus] = useState<string | null>(null);
  const [bookingRequestLoading, setBookingRequestLoading] = useState(false);
  const [myAppointments, setMyAppointments] = useState<any[]>([]);
  const [myBookings, setMyBookings] = useState<any[]>([]);

  const toggleWishlist = async () => {
    try {
      if (wishlisted) {
        await api.delete(`/Tenant/wishlist/remove/${id}`);
        setWishlisted(false);
      } else {
        await api.post(`/Tenant/wishlist/add/${id}`);
        setWishlisted(true);
      }
    } catch (err) {
      console.error("Failed to update wishlist", err);
    }
  };

  const handleRequestAppointment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!appointmentDate) return;
    setBookingLoading(true);
    setBookingStatus(null);
    try {
      await api.post("/appointments", {
        apartmentId: Number(id),
        appointmentDate: appointmentDate,
        tenantMessage: tenantMessage || "أرغب في زيارة السكن لمعاينته."
      });
      setBookingStatus("success");
      setTenantMessage("");
      setAppointmentDate("");

      // Reload appointments
      const apptsRes = await api.get("/appointments");
      const propAppts = (apptsRes.data || []).filter(
        (appt: any) => appt.apartmentId === Number(id)
      );
      setMyAppointments(propAppts);

      const approved = propAppts.filter(
        (appt: any) => appt.appointmentStatus === 2
      );
      setApprovedAppointments(approved);
      if (approved.length > 0) {
        setSelectedAppointmentId(approved[0].id);
      }
    } catch (err: any) {
      console.error("Failed to request appointment", err);
      setBookingStatus(err.response?.data?.message || "فشل إرسال طلب المعاينة.");
    } finally {
      setBookingLoading(false);
    }
  };

  const handleRequestBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedAppointmentId || !bookingStartDate || !bookingDuration) {
      setBookingRequestStatus("الرجاء تعبئة جميع الحقول المطلوبة.");
      return;
    }
    setBookingRequestLoading(true);
    setBookingRequestStatus(null);
    try {
      await api.post("/bookings", {
        appointmentId: Number(selectedAppointmentId),
        startDate: bookingStartDate,
        durationInMonthes: bookingDuration.toString()
      });
      setBookingRequestStatus("success");
      setBookingStartDate("");

      // Reload bookings
      const bookingsRes = await api.get("/bookings");
      const propBookings = (bookingsRes.data || []).filter(
        (b: any) => b.apartmentId === Number(id)
      );
      setMyBookings(propBookings);
    } catch (err: any) {
      console.error("Failed to request booking", err);
      setBookingRequestStatus(err.response?.data?.message || "فشل إرسال طلب الحجز.");
    } finally {
      setBookingRequestLoading(false);
    }
  };

  useEffect(() => {
    async function loadPropertyDetails() {
      try {
        const propRes = await api.get(`/apartments/${id}`);
        setProperty(propRes.data);

        if (role !== "Tenant") {
          try {
            const issuesRes = await api.get("/owner/issues");
            const filteredIssues = (issuesRes.data || []).filter((issue: any) => issue.apartmentId === Number(id));
            setIssues(filteredIssues);
          } catch (issueErr) {
            console.error("Failed to load owner issues", issueErr);
          }
        } else {
          try {
            const wishlistRes = await api.get("/Tenant/wishlist");
            const isWish = (wishlistRes.data?.apartments || []).some((w: any) => w.id === Number(id));
            setWishlisted(isWish);
          } catch (wishErr) {
            console.error("Failed to load wishlist", wishErr);
          }

          try {
            const apptsRes = await api.get("/appointments");
            const propAppts = (apptsRes.data || []).filter(
              (appt: any) => appt.apartmentId === Number(id)
            );
            setMyAppointments(propAppts);

            const approved = propAppts.filter(
              (appt: any) => appt.appointmentStatus === 2
            );
            setApprovedAppointments(approved);
            if (approved.length > 0) {
              setSelectedAppointmentId(approved[0].id);
            }
          } catch (apptErr) {
            console.error("Failed to load approved appointments", apptErr);
          }

          try {
            const bookingsRes = await api.get("/bookings");
            const propBookings = (bookingsRes.data || []).filter(
              (b: any) => b.apartmentId === Number(id)
            );
            setMyBookings(propBookings);
          } catch (bookErr) {
            console.error("Failed to load bookings", bookErr);
          }
        }
      } catch (err) {
        console.error("Failed to load property details", err);
      } finally {
        setLoading(false);
      }
    }
    if (id && role) {
      loadPropertyDetails();
    }
  }, [id, role]);

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
            onClick={() => navigate(role === "Tenant" ? "/explore" : "/properties")}
            className="px-4 py-2 bg-[#001d28] text-white rounded-xl text-sm border-none cursor-pointer"
          >
            {role === "Tenant" ? "العودة للاستكشاف" : "العودة إلى عقاراتي"}
          </button>
        </div>
      </DashboardLayout>
    );
  }

  const gallery = property.media && property.media.length > 0
    ? property.media.map((m: any) => getImageUrl(m.mediaUrl))
    : [img1];

  const occupancyRate = property.maxCapacity > 0 ? Math.round((property.currentOccupied / property.maxCapacity) * 100) : 0;

  return (
    <DashboardLayout title={property.title}>
      <div className="p-8 flex flex-col gap-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-right justify-end" style={{ fontFamily: F }}>
          <button onClick={() => navigate(role === "Tenant" ? "/explore" : "/properties")} className="text-[#94a3b8] hover:text-[#001d28] transition-colors cursor-pointer border-none bg-transparent">
            {role === "Tenant" ? "استكشف العقارات" : "عقاراتي"}
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
                <img src={gallery[activeImg]} alt="" className="w-full h-full object-cover animate-fade-in" />
              </div>
              <div className="flex gap-2 justify-end">
                {gallery.map((img: string, i: number) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className="rounded-xl overflow-hidden h-16 w-24 transition-all cursor-pointer border-none"
                    style={{ outline: activeImg === i ? "2px solid #f2994a" : "2px solid transparent" }}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Tabs */}
            {role !== "Tenant" && (
              <div className="flex gap-1 bg-[#f3f4f5] p-1 rounded-xl w-fit mr-auto justify-end">
                {(["details", "bookings", "issues"] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className="px-5 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer border-none"
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
            )}

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

                {/* Location Map */}
                {property.latitude && property.longitude && (
                  <div className="flex flex-col gap-2 mt-4 text-right">
                    <h4 className="text-[#001d28] font-bold text-sm" style={{ fontFamily: C }}>الموقع على الخريطة</h4>
                    <div className="h-56 rounded-2xl overflow-hidden" style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
                      <InteractiveMap
                        lat={property.latitude}
                        lng={property.longitude}
                        readonly={true}
                      />
                    </div>
                  </div>
                )}
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

            {/* Owner Profile Card */}
            {property.ownerName && (
              <div
                className="bg-white rounded-2xl p-5 flex flex-col gap-3 text-right"
                style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}
              >
                <h4 className="text-[#001d28] font-bold text-sm border-b pb-2 mb-1" style={{ fontFamily: C }}>مالك العقار 👤</h4>
                <div className="flex items-center gap-3 justify-end">
                  <div className="text-right flex-1">
                    <div className="font-bold text-sm text-[#001d28]" style={{ fontFamily: C }}>{property.ownerName}</div>
                    <div className="text-[10px] text-green-600 font-semibold" style={{ fontFamily: F }}>✓ مالك موثق</div>
                  </div>
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-100 bg-gray-50 flex items-center justify-center shrink-0">
                    {property.ownerProfileImage ? (
                      <img src={getImageUrl(property.ownerProfileImage) || ""} alt={property.ownerName} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-[#001d28] font-bold text-lg">{property.ownerName[0]}</span>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Actions */}
            {role === "Tenant" ? (
              <div className="flex flex-col gap-4">
                {/* Wishlist Button */}
                <button
                  type="button"
                  onClick={toggleWishlist}
                  className={`w-full py-3.5 rounded-xl font-bold text-sm cursor-pointer transition-colors border-none flex items-center justify-center gap-2 ${
                    wishlisted
                      ? "bg-red-50 text-red-600 border border-red-200"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  style={{ fontFamily: F }}
                >
                  <Heart size={16} fill={wishlisted ? "#dc2626" : "none"} />
                  {wishlisted ? "مسجل بالمفضلة" : "إضافة للمفضلة"}
                </button>

                {/* Chat with Landlord */}
                <button
                  type="button"
                  onClick={() => navigate("/chats")}
                  className="w-full py-3.5 rounded-xl font-bold text-[#001d28] text-sm cursor-pointer bg-[#f2994a] transition-opacity hover:opacity-90 border-none flex items-center justify-center gap-2"
                  style={{ fontFamily: F }}
                >
                  <MessageCircle size={16} />
                  مراسلة مالك العقار
                </button>

                {/* Booking Request Form (Requires Approved Appointment) */}
                {(() => {
                  const pendingB = myBookings.find((b: any) => b.status === 0);
                  const activeB = myBookings.find((b: any) => b.status === 1 || b.status === 2);

                  if (activeB) {
                    return (
                      <div
                        className="bg-emerald-50/50 border border-emerald-200 rounded-2xl p-5 text-right flex flex-col gap-2"
                        style={{ fontFamily: F, boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}
                      >
                        <h4 className="text-emerald-800 font-bold text-sm border-b border-emerald-100 pb-2 mb-1" style={{ fontFamily: C }}>
                          طلب الحجز مقبول ✓
                        </h4>
                        <p className="text-xs text-emerald-950/80 leading-relaxed">
                          تهانينا! تم قبول وتفعيل حجز هذا السكن بنجاح. عقد الإيجار الخاص بك نشط الآن.
                        </p>
                      </div>
                    );
                  }

                  if (pendingB) {
                    return (
                      <div
                        className="bg-amber-50/50 border border-amber-200 rounded-2xl p-5 text-right flex flex-col gap-2"
                        style={{ fontFamily: F, boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}
                      >
                        <h4 className="text-amber-800 font-bold text-sm border-b border-amber-100 pb-2 mb-1" style={{ fontFamily: C }}>
                          طلب الحجز قيد الانتظار ⏳
                        </h4>
                        <p className="text-xs text-amber-950/80 leading-relaxed">
                          لقد أرسلت بالفعل طلب تأجير لهذا السكن. الرجاء الانتظار حتى يقوم المالك بالموافقة وتفعيل الحجز.
                        </p>
                      </div>
                    );
                  }

                  if (approvedAppointments.length > 0) {
                    return (
                      <form
                        onSubmit={handleRequestBooking}
                        className="bg-white rounded-2xl p-5 flex flex-col gap-3 text-right"
                        style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}
                      >
                        <h4 className="text-[#001d28] font-bold text-sm border-b pb-2 mb-1" style={{ fontFamily: C }}>طلب تأجير السكن 📜</h4>
                        
                        <div className="flex flex-col gap-1">
                          <label className="text-xs text-[#001d28] font-semibold">موعد الزيارة المعتمد</label>
                          <CustomSelect
                            value={selectedAppointmentId.toString()}
                            onChange={(val) => setSelectedAppointmentId(Number(val))}
                            options={approvedAppointments.map((appt) => ({
                              value: appt.id.toString(),
                              label: `معاينة بتاريخ ${appt.appointmentDate}`
                            }))}
                            placeholder="موعد الزيارة المعتمد"
                          />
                        </div>

                        <div className="flex flex-col gap-1">
                          <label className="text-xs text-[#001d28] font-semibold">تاريخ بدء العقد</label>
                          <input
                            type="date"
                            required
                            value={bookingStartDate}
                            min={new Date().toISOString().split("T")[0]}
                            onChange={(e) => setBookingStartDate(e.target.value)}
                            className="bg-[#f3f4f5] rounded-xl px-4 py-2.5 text-xs text-[#001d28] outline-none text-right border-none cursor-pointer"
                            style={{ fontFamily: F }}
                          />
                        </div>

                        <div className="flex flex-col gap-1">
                          <label className="text-xs text-[#001d28] font-semibold">مدة الإيجار</label>
                          <CustomSelect
                            value={bookingDuration}
                            onChange={(val) => setBookingDuration(val)}
                            options={[
                              { value: "3", label: "3 أشهر" },
                              { value: "6", label: "6 أشهر" },
                              { value: "12", label: "12 شهر (سنة)" }
                            ]}
                            placeholder="مدة الإيجار"
                          />
                        </div>

                        {bookingRequestStatus && (
                          <div
                            className={`p-3 rounded-xl text-[10px] text-right font-bold ${
                              bookingRequestStatus === "success"
                                ? "bg-green-50 text-green-700"
                                : "bg-red-50 text-red-600"
                            }`}
                            style={{ fontFamily: F }}
                          >
                            {bookingRequestStatus === "success"
                              ? "✓ تم إرسال طلب الحجز بنجاح وبانتظار موافقة المالك!"
                              : `✕ ${bookingRequestStatus}`}
                          </div>
                        )}

                        <button
                          type="submit"
                          disabled={bookingRequestLoading}
                          className="w-full py-3 rounded-xl font-bold text-white text-xs bg-emerald-600 transition-opacity hover:opacity-90 disabled:opacity-50 border-none cursor-pointer flex items-center justify-center gap-1.5"
                          style={{ fontFamily: F }}
                        >
                          <FileText size={14} />
                          {bookingRequestLoading ? "جاري الإرسال..." : "إرسال طلب الحجز"}
                        </button>
                      </form>
                    );
                  }

                  return (
                    <div
                      className="bg-amber-50/50 border border-amber-100 rounded-2xl p-4 text-right text-amber-800 text-xs flex flex-col gap-2"
                      style={{ fontFamily: F }}
                    >
                      <p className="font-semibold text-amber-900">ملاحظة بشأن طلب الحجز:</p>
                      <p className="leading-relaxed">
                        لتقديم طلب تأجير رسمي لهذا السكن، يتطلب أولاً تقديم طلب معاينة بالأسفل والحصول على موافقة معتمدة من مالك العقار.
                      </p>
                    </div>
                  );
                })()}

                {/* Appointment booking form or status message */}
                {(() => {
                  const pendingAppt = myAppointments.find((a: any) => a.appointmentStatus === 0 || a.appointmentStatus === 1);
                  const approvedAppt = myAppointments.find((a: any) => a.appointmentStatus === 2);

                  if (pendingAppt) {
                    return (
                      <div
                        className="bg-amber-50/50 border border-amber-200 rounded-2xl p-5 text-right flex flex-col gap-2"
                        style={{ fontFamily: F, boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}
                      >
                        <h4 className="text-amber-800 font-bold text-sm border-b border-amber-100 pb-2 mb-1" style={{ fontFamily: C }}>
                          طلب المعاينة قيد الانتظار ⏳
                        </h4>
                        <p className="text-xs text-amber-900/80 leading-relaxed">
                          لقد أرسلت بالفعل طلب معاينة لهذا السكن بتاريخ <span className="font-bold text-[#001d28]">{pendingAppt.appointmentDate}</span>.
                        </p>
                        <p className="text-[10px] text-gray-500">
                          الرجاء انتظار رد المالك ليتم تفعيل خيار الحجز.
                        </p>
                      </div>
                    );
                  }

                  if (approvedAppt) {
                    return (
                      <div
                        className="bg-emerald-50/50 border border-emerald-200 rounded-2xl p-5 text-right flex flex-col gap-2"
                        style={{ fontFamily: F, boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}
                      >
                        <h4 className="text-emerald-800 font-bold text-sm border-b border-emerald-100 pb-2 mb-1" style={{ fontFamily: C }}>
                          تم تأكيد موعد المعاينة ✓
                        </h4>
                        <p className="text-xs text-emerald-950/80 leading-relaxed">
                          موعد المعاينة المعتمد هو: <span className="font-bold text-[#001d28]">{approvedAppt.appointmentDate}</span>.
                        </p>
                        <p className="text-[10px] text-emerald-700 font-semibold">
                          يمكنك الآن تعبئة نموذج طلب الحجز في الأعلى.
                        </p>
                      </div>
                    );
                  }

                  return (
                    <form
                      onSubmit={handleRequestAppointment}
                      className="bg-white rounded-2xl p-5 flex flex-col gap-3 text-right"
                      style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}
                    >
                      <h4 className="text-[#001d28] font-bold text-sm border-b pb-2 mb-1" style={{ fontFamily: C }}>طلب تحديد موعد معاينة</h4>
                      
                      <div className="flex flex-col gap-1">
                        <label className="text-xs text-[#001d28] font-semibold">تاريخ الزيارة المقترح</label>
                        <input
                          type="date"
                          required
                          value={appointmentDate}
                          min={new Date().toISOString().split("T")[0]}
                          onChange={(e) => setAppointmentDate(e.target.value)}
                          className="bg-[#f3f4f5] rounded-xl px-4 py-2.5 text-xs text-[#001d28] outline-none text-right border-none cursor-pointer"
                          style={{ fontFamily: F }}
                        />
                      </div>

                      <div className="flex flex-col gap-1">
                        <label className="text-xs text-[#001d28] font-semibold">رسالة للمالك (اختياري)</label>
                        <textarea
                          placeholder="اكتب استفساراتك أو تفاصيل إضافية للمالك..."
                          value={tenantMessage}
                          onChange={(e) => setTenantMessage(e.target.value)}
                          rows={3}
                          className="bg-[#f3f4f5] rounded-xl px-4 py-2.5 text-xs text-[#001d28] outline-none text-right border-none resize-none"
                          style={{ fontFamily: F }}
                        />
                      </div>

                      {bookingStatus && (
                        <div
                          className={`p-3 rounded-xl text-[10px] text-right font-bold ${
                            bookingStatus === "success"
                              ? "bg-green-50 text-green-700"
                              : "bg-red-50 text-red-600"
                          }`}
                          style={{ fontFamily: F }}
                        >
                          {bookingStatus === "success"
                            ? "✓ تم إرسال طلب معاينة السكن للمالك بنجاح!"
                            : `✕ ${bookingStatus}`}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={bookingLoading}
                        className="w-full py-3 rounded-xl font-bold text-white text-xs bg-[#001d28] transition-opacity hover:opacity-90 disabled:opacity-50 border-none cursor-pointer flex items-center justify-center gap-1.5"
                        style={{ fontFamily: F }}
                      >
                        <Calendar size={14} />
                        {bookingLoading ? "جاري الإرسال..." : "إرسال طلب معاينة"}
                      </button>
                    </form>
                  );
                })()}
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => navigate(`/edit-property/${id}`)}
                  className="w-full py-3.5 rounded-xl font-bold text-white text-sm transition-opacity hover:opacity-90 cursor-pointer border-none"
                  style={{ background: "#001d28", fontFamily: F }}
                >
                  تعديل العقار
                </button>
                <button
                  className="w-full py-3.5 rounded-xl font-bold text-sm transition-opacity hover:opacity-90 flex items-center justify-center gap-2 cursor-pointer border-none"
                  style={{ background: "#f2994a", color: "#001d28", fontFamily: F }}
                >
                  <Phone size={15} />
                  تواصل مع المستأجر
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

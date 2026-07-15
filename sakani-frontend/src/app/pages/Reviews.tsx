import { useState } from "react";
import { Star, Send, ArrowUpDown } from "lucide-react";
import DashboardLayout from "../layout/DashboardLayout";
import { reviews } from "../data/mock";
import reviewer1 from "@/imports/Frame34/587368b27b554ea9a395802ffd311251cbd4f6c3.png";
import reviewer2 from "@/imports/Frame34/5cf8fc8498fee9b4ab0a5e8d22152dd45a376c02.png";
import reviewer3 from "@/imports/Frame34/912ca35acc602d16916c03b5f408f590b9c521e1.png";

const F = "'Readex Pro', sans-serif";
const C = "'Cairo', sans-serif";

const reviewerAvatars = [reviewer1, reviewer2, reviewer3];

function StarRow({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: max }).map((_, i) => (
        <Star key={i} size={14} color={i < rating ? "#f59e0b" : "#e2e8f0"} fill={i < rating ? "#f59e0b" : "none"} />
      ))}
    </div>
  );
}

export default function Reviews() {
  const [replyText, setReplyText] = useState<Record<string, string>>({});
  const [repliedMap, setRepliedMap] = useState<Record<string, string>>(
    Object.fromEntries(reviews.filter((r) => r.reply).map((r) => [r.id, r.reply!]))
  );
  const [sortBy, setSortBy] = useState("الأحدث أولاً");

  const overallRating = (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1);

  const ratingCounts = [5, 4, 3, 2, 1].map((n) => ({
    n,
    count: reviews.filter((r) => r.rating === n).length,
  }));

  function handleReply(id: string) {
    if (!replyText[id]?.trim()) return;
    setRepliedMap((prev) => ({ ...prev, [id]: replyText[id] }));
    setReplyText((prev) => ({ ...prev, [id]: "" }));
  }

  return (
    <DashboardLayout title="مراجعات العقارات" subtitle="آراء المستأجرين">
      <div className="p-8 flex flex-col gap-6">
        {/* Summary card */}
        <div
          className="bg-white rounded-2xl p-6 flex items-center gap-8"
          style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}
        >
          {/* Sort button */}
          <button
            onClick={() => setSortBy(sortBy === "الأحدث أولاً" ? "الأعلى تقييماً" : "الأحدث أولاً")}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm text-[#001d28] bg-[#f3f4f5] hover:bg-[#ececf0] transition-colors"
            style={{ fontFamily: F }}
          >
            <ArrowUpDown size={14} />
            {sortBy}
          </button>

          {/* Rating bars */}
          <div className="flex flex-col gap-1.5 flex-1">
            {ratingCounts.map(({ n, count }) => (
              <div key={n} className="flex items-center gap-2">
                <div className="flex-1 h-2 rounded-full bg-[#f3f4f5]">
                  <div
                    className="h-full rounded-full bg-[#f59e0b] transition-all"
                    style={{ width: reviews.length > 0 ? `${(count / reviews.length) * 100}%` : "0%" }}
                  />
                </div>
                <span className="text-xs text-[#94a3b8] w-4" style={{ fontFamily: F }}>{n}</span>
              </div>
            ))}
          </div>

          {/* Big number */}
          <div className="text-right">
            <div className="text-[#001d28] font-black text-6xl" style={{ fontFamily: C }}>{overallRating}</div>
            <StarRow rating={Math.round(Number(overallRating))} />
            <p className="text-[#94a3b8] text-sm mt-1" style={{ fontFamily: F }}>{reviews.length} تقييم</p>
          </div>
        </div>

        {/* Review cards */}
        <div className="flex flex-col gap-4">
          {reviews.map((review, idx) => {
            const existingReply = repliedMap[review.id];
            return (
              <div
                key={review.id}
                className="bg-white rounded-2xl p-5 flex flex-col gap-4"
                style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}
              >
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex flex-col gap-1 text-left">
                    <span className="text-[#94a3b8] text-xs" style={{ fontFamily: F }}>{review.date}</span>
                    <span className="text-[#71787c] text-xs" style={{ fontFamily: F }}>{review.propertyName}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="text-[#001d28] font-bold text-sm" style={{ fontFamily: F }}>{review.authorName}</p>
                      <StarRow rating={review.rating} />
                    </div>
                    <img
                      src={reviewerAvatars[idx % reviewerAvatars.length]}
                      alt={review.authorName}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </div>
                </div>

                {/* Review text */}
                <p className="text-[#71787c] text-sm leading-relaxed text-right" style={{ fontFamily: F }}>
                  {review.text}
                </p>

                {/* Reply */}
                {existingReply ? (
                  <div
                    className="rounded-xl p-4 text-right"
                    style={{ background: "#f9f9fb", borderRight: "3px solid #f2994a" }}
                  >
                    <p className="text-xs text-[#f2994a] font-semibold mb-1" style={{ fontFamily: F }}>ردك:</p>
                    <p className="text-[#001d28] text-sm" style={{ fontFamily: F }}>{existingReply}</p>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleReply(review.id)}
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-opacity hover:opacity-80"
                      style={{ background: "#001d28" }}
                    >
                      <Send size={15} color="white" />
                    </button>
                    <input
                      value={replyText[review.id] || ""}
                      onChange={(e) =>
                        setReplyText((prev) => ({ ...prev, [review.id]: e.target.value }))
                      }
                      onKeyDown={(e) => e.key === "Enter" && handleReply(review.id)}
                      placeholder="اكتب رداً على هذا التقييم..."
                      dir="rtl"
                      className="flex-1 bg-[#f3f4f5] rounded-xl px-4 py-2.5 text-sm text-[#001d28] outline-none placeholder-[#94a3b8] text-right"
                      style={{ fontFamily: F }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
}

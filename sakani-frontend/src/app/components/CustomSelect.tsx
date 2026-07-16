import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: (string | Option)[];
  placeholder?: string;
  className?: string;
}

const F = "'Readex Pro', sans-serif";

export default function CustomSelect({
  value,
  onChange,
  options,
  placeholder = "اختر...",
  className = "",
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Normalize options to always be objects
  const normalizedOptions: Option[] = options.map((opt) => {
    if (typeof opt === "string") {
      return { value: opt, label: opt };
    }
    return opt;
  });

  const selectedOption = normalizedOptions.find((opt) => opt.value === value);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative ${className}`} dir="rtl">
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-[#f3f4f5] rounded-xl px-4 py-3 text-xs text-[#001d28] outline-none text-right border border-transparent hover:border-gray-200 focus:border-[#f2994a] focus:bg-white transition-all flex items-center justify-between gap-2 cursor-pointer"
        style={{ fontFamily: F }}
      >
        <ChevronDown
          size={14}
          className="text-[#001d28] transition-transform duration-200"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        />
        <span className={selectedOption ? "text-[#001d28] font-medium" : "text-[#94a3b8]"}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
      </button>

      {/* Options Dropdown Overlay */}
      {isOpen && (
        <div
          className="absolute right-0 left-0 mt-1.5 max-h-60 overflow-y-auto bg-white/95 backdrop-blur-md border border-gray-100 rounded-2xl shadow-xl py-1.5 scrollbar-thin"
          style={{
            zIndex: 99999,
            animation: "selectFadeIn 0.2s ease both",
            boxShadow: "0 10px 25px -5px rgba(0,29,40,0.1), 0 8px 10px -6px rgba(0,29,40,0.1)"
          }}
        >
          {/* Style for animation and scrollbar */}
          <style>{`
            @keyframes selectFadeIn {
              from { opacity: 0; transform: translateY(-4px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .scrollbar-thin::-webkit-scrollbar {
              width: 5px;
            }
            .scrollbar-thin::-webkit-scrollbar-track {
              background: transparent;
            }
            .scrollbar-thin::-webkit-scrollbar-thumb {
              background: #cbced4;
              border-radius: 99px;
            }
            .scrollbar-thin::-webkit-scrollbar-thumb:hover {
              background: #94a3b8;
            }
          `}</style>

          {normalizedOptions.length === 0 ? (
            <div className="px-4 py-2.5 text-xs text-gray-400 text-center" style={{ fontFamily: F }}>
              لا توجد خيارات
            </div>
          ) : (
            normalizedOptions.map((opt) => {
              const isSelected = opt.value === value;
              return (
                <div
                  key={opt.value}
                  onClick={() => {
                    onChange(opt.value);
                    setIsOpen(false);
                  }}
                  className={`px-4 py-2.5 text-xs text-right cursor-pointer transition-colors ${
                    isSelected
                      ? "bg-[#001d28] text-white font-bold"
                      : "text-[#001d28] hover:bg-[#f3f4f5] hover:text-[#001d28]"
                  }`}
                  style={{ fontFamily: F }}
                >
                  {opt.label}
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
}

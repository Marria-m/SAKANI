import svgPaths from "./svg-4iephmkf8f";
type AsideSideNavBarProps = {
  className?: string;
  property1?: "Default" | "Variant2" | "Variant3" | "Variant4" | "Variant5" | "Variant6" | "Variant7";
};

export default function AsideSideNavBar({ className, property1 = "Default" }: AsideSideNavBarProps) {
  const isDefault = property1 === "Default";
  const isVariant2 = property1 === "Variant2";
  const isVariant2OrVariant3OrVariant4OrVariant5 = ["Variant2", "Variant3", "Variant4", "Variant5"].includes(property1);
  const isVariant2OrVariant3OrVariant4OrVariant6OrVariant7OrVariant5 = ["Variant2", "Variant3", "Variant4", "Variant6", "Variant7", "Variant5"].includes(property1);
  const isVariant3 = property1 === "Variant3";
  const isVariant4 = property1 === "Variant4";
  const isVariant5 = property1 === "Variant5";
  const isVariant6 = property1 === "Variant6";
  const isVariant7 = property1 === "Variant7";
  return (
    <div className={className || `bg-gradient-to-b content-stretch flex flex-col from-[#034] h-[1024px] p-[24px] relative to-[#001d28] w-[256px] ${isVariant2OrVariant3OrVariant4OrVariant5 ? "gap-[32px] items-center" : "gap-[21px] items-start"}`}>
      <div className="absolute bg-[rgba(255,255,255,0)] h-[1024px] right-0 shadow-[0px_25px_50px_-12px_rgba(0,31,42,0.2)] top-0 w-[256px]" data-name="Aside - SideNavBar:shadow" />
      <div className="h-[64px] relative shrink-0 w-full" data-name="Margin">
        <div className="absolute content-stretch flex gap-[12px] h-[44px] items-center left-0 pl-[49px] right-0 top-[10px]" data-name="Container">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[103.94px]" data-name="Container">
            <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Cairo:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-right text-white tracking-[-1px] whitespace-nowrap">
                <p className="leading-[28px]">سكني</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Cairo:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] text-right whitespace-nowrap">
                <p className="leading-[16px]">إدارة العقارات الفاخرة</p>
              </div>
            </div>
          </div>
          <div className="bg-[#f2994a] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" data-name="Background">
            <div className="h-[19px] relative shrink-0 w-[18px]" data-name="Container">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 19">
                <g id="Container">
                  <path d={svgPaths.p3f0e4300} fill="var(--fill-0, #001D28)" id="Icon" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px relative w-full" data-name="Nav">
        <div className="relative rounded-[12px] shrink-0 w-full" data-name="Link - Active: Dashboard">
          <div aria-hidden={isDefault ? true : undefined} className={isVariant2OrVariant3OrVariant4OrVariant6OrVariant7OrVariant5 ? "flex flex-row items-center size-full" : "absolute bg-[rgba(255,255,255,0.1)] inset-0 pointer-events-none rounded-[12px]"}>
            {isVariant2OrVariant3OrVariant4OrVariant6OrVariant7OrVariant5 && (
              <div className="content-stretch flex gap-[15.99px] items-center pl-[76.88px] pr-[16px] py-[12px] relative size-full">
                <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
                    <p className="leading-[20px]" dir="auto">
                      لوحة التحكم
                    </p>
                  </div>
                </div>
                <div className="relative shrink-0 size-[18px]" data-name="Container">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                    <g id="Container">
                      <path d={svgPaths.p191dcc80} fill="var(--fill-0, #94A3B8)" id="Icon" />
                    </g>
                  </svg>
                </div>
              </div>
            )}
          </div>
          {isDefault && (
            <>
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[15.99px] items-center pl-[76.88px] pr-[16px] py-[12px] relative size-full">
                  <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#f2994a] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
                      <p className="leading-[20px]" dir="auto">
                        لوحة التحكم
                      </p>
                    </div>
                  </div>
                  <div className="relative shrink-0 size-[18px]" data-name="Container">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                      <g id="Container">
                        <path d={svgPaths.p191dcc80} fill="var(--fill-0, #F2994A)" id="Icon" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
            </>
          )}
        </div>
        <div className={`relative rounded-[12px] shrink-0 w-full ${isVariant2 ? "bg-[rgba(255,255,255,0.1)]" : ""}`} data-name="Link">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[15.99px] items-center pl-[104.94px] pr-[16px] py-[12px] relative size-full">
              <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
                <div className={`[word-break:break-word] flex flex-col font-["Readex_Pro:Medium",sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-right whitespace-nowrap ${isVariant2 ? "text-[#f2994a]" : "text-[rgba(203,213,225,0.7)]"}`} style={{ fontVariationSettings: '"HEXP" 0' }}>
                  <p className="leading-[20px]">عقاراتي</p>
                </div>
              </div>
              <div className="h-[18px] relative shrink-0 w-[22px]" data-name="Container">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18">
                  <g id="Container">
                    <path d={svgPaths.p7ab5f00} fill={isVariant2 ? "var(--fill-0, #F2994A)" : "var(--fill-0, #CBD5E1)"} fillOpacity={["Default", "Variant3", "Variant4", "Variant6", "Variant7", "Variant5"].includes(property1) ? "0.7" : undefined} id="Icon" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className={`relative rounded-[12px] shrink-0 w-full ${isVariant3 ? "bg-[rgba(255,255,255,0.1)]" : ""}`} data-name="Link">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[16px] items-center pl-[64.17px] pr-[16px] py-[12px] relative size-full">
              <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
                <div className={`[word-break:break-word] flex flex-col font-["Readex_Pro:Medium",sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-right whitespace-nowrap ${isVariant3 ? "text-[#f2994a]" : "text-[rgba(203,213,225,0.7)]"}`} style={{ fontVariationSettings: '"HEXP" 0' }}>
                  <p className="leading-[20px]">طلبات الانتظار</p>
                </div>
              </div>
              <div className="h-[21px] relative shrink-0 w-[19px]" data-name="Container">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 21">
                  <g id="Container">
                    <path d={svgPaths.p1574ee00} fill={isVariant3 ? "var(--fill-0, #F2994A)" : "var(--fill-0, #CBD5E1)"} fillOpacity={["Default", "Variant2", "Variant4", "Variant6", "Variant7", "Variant5"].includes(property1) ? "0.7" : undefined} id="Icon" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className={`relative rounded-[12px] shrink-0 w-full ${isVariant4 ? "bg-[rgba(255,255,255,0.1)]" : ""}`} data-name="Link">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[16px] items-center pl-[90.06px] pr-[16px] py-[12px] relative size-full">
              <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
                <div className={`[word-break:break-word] flex flex-col font-["Readex_Pro:Medium",sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-right whitespace-nowrap ${isVariant4 ? "text-[#f2994a]" : "text-[rgba(203,213,225,0.7)]"}`} style={{ fontVariationSettings: '"HEXP" 0' }}>
                  <p className="leading-[20px]" dir={isVariant6 ? "auto" : undefined}>
                    المحادثات
                  </p>
                </div>
              </div>
              <div className="relative shrink-0 size-[20px]" data-name="Container">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <g id="Container">
                    <path d={svgPaths.p1c483e80} fill={isVariant4 ? "var(--fill-0, #F2994A)" : "var(--fill-0, #CBD5E1)"} fillOpacity={["Default", "Variant2", "Variant3", "Variant6", "Variant7", "Variant5"].includes(property1) ? "0.7" : undefined} id="Icon" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className={`relative rounded-[12px] shrink-0 w-full ${isVariant6 ? "bg-[rgba(255,255,255,0.1)]" : ""}`} data-name="Link">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center pl-[90.06px] pr-[16px] py-[12px] relative size-full">
              <div className="content-stretch flex gap-[27px] items-end relative shrink-0">
                <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
                  <div className={`[word-break:break-word] flex flex-col font-["Readex_Pro:Medium",sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-right whitespace-nowrap ${isVariant6 ? "text-[#f2994a]" : "text-[#94a3b8]"}`} style={{ fontVariationSettings: '"HEXP" 0' }}>
                    <p className="leading-[24px]" dir="auto">
                      Profile
                    </p>
                  </div>
                </div>
                <div className="h-[21px] relative shrink-0 w-[18px]" data-name="Container">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 21">
                    <g id="Container">
                      <path d={svgPaths.p29a42280} fill={isVariant6 ? "var(--fill-0, #F2994A)" : "var(--fill-0, #94A3B8)"} id="Icon" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`h-[44px] relative rounded-[12px] shrink-0 w-full ${isVariant7 ? "bg-[rgba(255,255,255,0.1)]" : ""}`} data-name="Link">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center pl-[90.06px] pr-[16px] py-[12px] relative size-full">
              <div className="absolute content-stretch flex gap-[16px] items-center left-[51.06px] top-[12px]">
                <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
                  <div className={`[word-break:break-word] flex flex-col font-["Readex_Pro:Medium",sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-right whitespace-nowrap ${isVariant7 ? "text-[#f2994a]" : "text-[#94a3b8]"}`} style={{ fontVariationSettings: '"HEXP" 0' }}>
                    <p className="leading-[20px]" dir="auto">
                      اللآراء و التقيمات
                    </p>
                  </div>
                </div>
                <div className="relative shrink-0 size-[20px]" data-name="Container">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g id="Container">
                      <path d={svgPaths.p3d9c6bc0} fill={isVariant7 ? "var(--fill-0, #F2994A)" : "var(--fill-0, #94A3B8)"} id="Icon" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`relative rounded-[12px] shrink-0 w-full ${isVariant5 ? "bg-[rgba(255,255,255,0.1)]" : ""}`} data-name="Link">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[15.99px] items-center pl-[97.63px] pr-[16px] py-[12px] relative size-full">
              <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
                <div className={`[word-break:break-word] flex flex-col font-["Readex_Pro:Medium",sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-right whitespace-nowrap ${isVariant5 ? "text-[#f2994a]" : "text-[rgba(203,213,225,0.7)]"}`} style={{ fontVariationSettings: '"HEXP" 0' }}>
                  <p className="leading-[20px]">الإعدادات</p>
                </div>
              </div>
              <div className="h-[20px] relative shrink-0 w-[20.1px]" data-name="Container">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1 20">
                  <g id="Container">
                    <path d={svgPaths.p3cdadd00} fill={isVariant5 ? "var(--fill-0, #F2994A)" : "var(--fill-0, #CBD5E1)"} fillOpacity={["Default", "Variant2", "Variant3", "Variant4", "Variant6", "Variant7"].includes(property1) ? "0.7" : undefined} id="Icon" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={isVariant2OrVariant3OrVariant4OrVariant5 ? "content-stretch flex flex-col h-[193px] items-center justify-center p-[10px] relative shrink-0 w-[255px]" : "-translate-x-1/2 absolute contents left-1/2 top-[799px]"}>
        <div className={`-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 ${isVariant2OrVariant3OrVariant4OrVariant5 ? "top-0" : "top-[799px]"}`}>
          <div className="content-stretch flex flex-col gap-[8px] items-start pb-[16px] pt-[17px] px-[16px] relative shrink-0 w-[255px]" data-name="HorizontalBorder">
            <div aria-hidden className="absolute border-[rgba(255,255,255,0.05)] border-solid border-t inset-0 pointer-events-none" />
            <div className="bg-[#f2994a] relative rounded-[12px] shrink-0 w-full" data-name="Button">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center justify-center py-[12px] relative size-full">
                <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#001d28] text-[14px] text-center w-[149.11px]" style={{ fontVariationSettings: '"HEXP" 0' }}>
                  <p className="leading-[20px]" dir="auto">
                    إضافة سكن جديد
                  </p>
                </div>
                <div className="relative shrink-0 size-[20px]" data-name="Container">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g id="Container">
                      <path d={svgPaths.p2d8e4cc0} fill="var(--fill-0, #020617)" id="Icon" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
              <div className="flex flex-row items-center size-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.99px] items-center pl-[79.19px] pr-[16px] py-[12px] relative size-full">
                  <div className="-translate-y-1/2 absolute content-stretch flex flex-col h-[24px] items-end left-[42.19px] top-1/2 w-[129px]" data-name="Container">
                    <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] right-0 text-[#94a3b8] text-[16px] text-right top-[12px] w-[129px]" style={{ fontVariationSettings: '"HEXP" 0' }}>
                      <p className="leading-[24px]" dir="auto">
                        هل تحتاج مساعده
                      </p>
                    </div>
                  </div>
                  <div className="-translate-y-1/2 absolute left-[183.18px] size-[20px] top-1/2" data-name="Container">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g id="Container">
                        <path d={svgPaths.p2816f2c0} fill="var(--fill-0, #94A3B8)" id="Icon" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
              <div className="flex flex-row items-center size-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.99px] items-center pl-[115.83px] pr-[16px] py-[12px] relative size-full">
                  <div className="content-stretch flex flex-col h-[24px] items-end relative shrink-0 w-[91px]" data-name="Container">
                    <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] right-[40px] text-[#94a3b8] text-[16px] text-right top-[12px] w-[99px]" style={{ fontVariationSettings: '"HEXP" 0' }}>
                      <p className="leading-[24px]" dir="auto">
                        تسجيل خروج
                      </p>
                    </div>
                  </div>
                  <div className="-translate-y-1/2 absolute left-[186.82px] size-[18px] top-1/2" data-name="Container">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                      <g id="Container">
                        <path d={svgPaths.p3e9df400} fill="var(--fill-0, #94A3B8)" id="Icon" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
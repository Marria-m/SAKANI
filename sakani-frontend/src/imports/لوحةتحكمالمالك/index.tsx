import svgPaths from "./svg-tfu7xzc42x";
import imgOwnerProfile from "./ff14c0cd59cb1218e945e9742d72558eeb90d5bd.png";
import imgStudent from "./32395156866dfc47826b8a2be95e078ae998436c.png";
import imgStudent1 from "./9e6a061c3e19291c2be010d75cdd9b4113770095.png";
import imgProperty from "./c8de0556b60d09ab3bbe4604b383309f3677baac.png";
import imgProperty1 from "./2c3304bde3b1760d646a899a90bd31560f17d450.png";

function OwnerProfile() {
  return (
    <div className="pointer-events-none relative rounded-[9999px] shrink-0 size-[40px]" data-name="Owner profile">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden rounded-[9999px]">
        <img alt="" className="absolute left-[5%] max-w-none size-[90%] top-[5%]" src={imgOwnerProfile} />
      </div>
      <div aria-hidden className="absolute border-2 border-[rgba(242,153,74,0.2)] border-solid inset-0 rounded-[9999px]" />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#001d28] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[20px]">أحمد العمودي</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[15px]">مالك عقار مميز</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-[89.11px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container2 />
        <Container3 />
      </div>
    </div>
  );
}

function VerticalBorder() {
  return (
    <div className="content-stretch flex gap-[12px] items-center pl-[16px] pr-px relative shrink-0" data-name="VerticalBorder">
      <div aria-hidden className="absolute border-[#e2e8f0] border-r border-solid inset-0 pointer-events-none" />
      <OwnerProfile />
      <Container1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p164b49c0} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="Button">
      <Container5 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <Button />
      <div className="absolute bg-[#f2994a] right-[7.98px] rounded-[9999px] size-[8px] top-[8px]" data-name="Background+Border">
        <div aria-hidden className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Container">
      <VerticalBorder />
      <Container4 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Cairo:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#001d28] text-[20px] text-right tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[28px]">لوحة تحكم المالك</p>
      </div>
    </div>
  );
}

function HeaderTopAppBar() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(248,250,252,0.8)] relative shadow-[0px_1px_2px_0px_rgba(0,31,42,0.05)] shrink-0 w-full z-[2]" data-name="Header - TopAppBar">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[32px] py-[16px] relative size-full">
          <Container />
          <Heading />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[15px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 15">
        <g id="Container">
          <path d={svgPaths.p3c22c900} fill="var(--fill-0, #001D28)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(191,233,255,0.3)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" data-name="Overlay">
      <Container8 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[16px]">إجمالي المشاهدات</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Overlay />
      <Container9 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col items-end left-[79.36px] top-[13px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#22c55e] text-[10px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[15px]">+14%</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col items-end left-[115.23px] top-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Cairo:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#001d28] text-[24px] text-right whitespace-nowrap">
        <p className="leading-[32px]">12.4k</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <Container11 />
      <Container12 />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-white col-4 h-[128px] justify-self-stretch relative rounded-[16px] row-1 shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start justify-between p-[24px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] h-[128px] left-0 right-0 rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,31,42,0.05),0px_8px_10px_-6px_rgba(0,31,42,0.05)] top-0" data-name="Overlay+Shadow" />
        <Container7 />
        <Container10 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[21px] relative shrink-0 w-[19px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 21">
        <g id="Container">
          <path d={svgPaths.p1574ee00} fill="var(--fill-0, #F2994A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(255,164,84,0.2)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" data-name="Overlay">
      <Container14 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[16px]">طلبات الانتظار</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Overlay1 />
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col items-end left-[89.25px] top-[13px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[15px]">هذا الأسبوع</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col items-end left-[147.41px] top-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Cairo:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#001d28] text-[24px] text-right whitespace-nowrap">
        <p className="leading-[32px]">28</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <Container17 />
      <Container18 />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-white col-3 h-[128px] justify-self-stretch relative rounded-[16px] row-1 shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start justify-between p-[24px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] h-[128px] left-0 right-0 rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,31,42,0.05),0px_8px_10px_-6px_rgba(0,31,42,0.05)] top-0" data-name="Overlay+Shadow" />
        <Container13 />
        <Container16 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[21px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 21">
        <g id="Container">
          <path d={svgPaths.p3801d860} fill="var(--fill-0, #22C55E)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(34,197,94,0.1)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" data-name="Overlay">
      <Container20 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[16px]">العقارات الموثقة</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between relative size-full">
        <Overlay2 />
        <Container21 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex flex-col items-end left-[76.7px] top-[13px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#22c55e] text-[10px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[15px]">100% مكتمل</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex flex-col items-end left-[147.41px] top-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Cairo:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#001d28] text-[24px] text-right whitespace-nowrap">
        <p className="leading-[32px]">06</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <Container23 />
      <Container24 />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-white col-2 h-[128px] justify-self-stretch relative rounded-[16px] row-1 shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start justify-between p-[24px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] h-[128px] left-0 right-0 rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,31,42,0.05),0px_8px_10px_-6px_rgba(0,31,42,0.05)] top-0" data-name="Overlay+Shadow" />
        <Container19 />
        <Container22 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p11cc5180} fill="var(--fill-0, #003344)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay3() {
  return (
    <div className="bg-[rgba(0,51,68,0.1)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" data-name="Overlay">
      <Container26 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[16px]">المحادثات النشطة</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Overlay3 />
      <Container27 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex flex-col items-end left-[102.72px] top-[13px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f2994a] text-[10px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[15px]">3 جديدة</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex flex-col items-end left-[147.41px] top-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Cairo:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#001d28] text-[24px] text-right whitespace-nowrap">
        <p className="leading-[32px]">15</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <Container29 />
      <Container30 />
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-white col-1 h-[128px] justify-self-stretch relative rounded-[16px] row-1 shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start justify-between p-[24px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] h-[128px] left-0 right-0 rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,31,42,0.05),0px_8px_10px_-6px_rgba(0,31,42,0.05)] top-0" data-name="Overlay+Shadow" />
        <Container25 />
        <Container28 />
      </div>
    </div>
  );
}

function SectionStatisticsBentoGrid() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[_128px] relative shrink-0 w-full" data-name="Section - Statistics Bento Grid">
      <Background />
      <Background1 />
      <Background2 />
      <Background3 />
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#f2994a] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[20px]">عرض الكل</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Cairo:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#001d28] text-[18px] text-right whitespace-nowrap">
        <p className="leading-[28px]">الحجوزات الأخيرة</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Button1 />
          <Heading1 />
        </div>
      </div>
    </div>
  );
}

function Cell() {
  return (
    <div className="content-stretch flex flex-col items-end p-[16px] relative rounded-bl-[12px] rounded-tl-[12px] shrink-0 w-[127.3px] z-[4]" data-name="Cell">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] text-right tracking-[0.6px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[16px]">الإجراءات</p>
      </div>
    </div>
  );
}

function Cell1() {
  return (
    <div className="content-stretch flex flex-col items-end p-[16px] relative shrink-0 w-[102.66px] z-[3]" data-name="Cell">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] text-right tracking-[0.6px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[16px]">الحالة</p>
      </div>
    </div>
  );
}

function Cell2() {
  return (
    <div className="content-stretch flex flex-col items-end p-[16px] relative shrink-0 w-[174.2px] z-[2]" data-name="Cell">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] text-right tracking-[0.6px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[16px]">العقار</p>
      </div>
    </div>
  );
}

function Cell3() {
  return (
    <div className="content-stretch flex flex-col items-end p-[16px] relative rounded-br-[12px] rounded-tr-[12px] shrink-0 w-[161.17px] z-[1]" data-name="Cell">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] text-right tracking-[0.6px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[16px]">الطالب</p>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex isolate items-start justify-center relative shrink-0 w-full" data-name="Row">
      <Cell />
      <Cell1 />
      <Cell2 />
      <Cell3 />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[rgba(243,243,245,0.5)] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Header">
      <Row />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[rgba(0,29,40,0.05)] content-stretch flex items-center justify-center pl-[26.22px] pr-[26.24px] py-[6px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#001d28] text-[10px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[normal] mb-0">الملف</p>
        <p className="leading-[normal]">الشخصي</p>
      </div>
    </div>
  );
}

function Data() {
  return (
    <div className="content-stretch flex flex-col items-end pb-[30.5px] pt-[30px] px-[16px] relative shrink-0 w-[127.3px] z-[4]" data-name="Data">
      <Button2 />
    </div>
  );
}

function Overlay4() {
  return (
    <div className="bg-[rgba(34,197,94,0.1)] content-stretch flex items-center justify-end px-[10px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Overlay">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#22c55e] text-[10px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[normal]">مؤكد</p>
      </div>
    </div>
  );
}

function Data1() {
  return (
    <div className="content-stretch flex flex-col items-end pb-[41px] pt-[40.5px] px-[16px] relative shrink-0 w-[102.66px] z-[3]" data-name="Data">
      <Overlay4 />
    </div>
  );
}

function Data2() {
  return (
    <div className="content-stretch flex flex-col items-end pl-[16px] relative shrink-0 w-[158.2px] z-[2]" data-name="Data">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#475569] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[20px] mb-0">شقة حي النرجس (A-</p>
        <p className="leading-[20px]">12)</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#001d28] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[20px] mb-0">سلطان</p>
        <p className="leading-[20px]">عادل</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[normal] mb-0">جامعة الملك</p>
        <p className="leading-[normal]">سعود</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[55.53px]" data-name="Container">
      <Container34 />
      <Container35 />
    </div>
  );
}

function Student() {
  return (
    <div className="max-w-[129.1699981689453px] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Student">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgStudent} />
      </div>
    </div>
  );
}

function Data3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center pl-[32px] relative shrink-0 w-[161.17px] z-[1]" data-name="Data">
      <Container33 />
      <Student />
    </div>
  );
}

function Row1() {
  return (
    <div className="mb-[-1px] relative shrink-0 w-full" data-name="Row">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex isolate items-center justify-center pr-[16px] relative size-full">
          <Data />
          <Data1 />
          <Data2 />
          <Data3 />
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[rgba(0,29,40,0.05)] content-stretch flex items-center justify-center pl-[26.22px] pr-[26.24px] py-[6px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#001d28] text-[10px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[normal] mb-0">الملف</p>
        <p className="leading-[normal]">الشخصي</p>
      </div>
    </div>
  );
}

function Data4() {
  return (
    <div className="relative shrink-0 w-[127.3px] z-[4]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pb-[17px] pt-[17.5px] px-[16px] relative size-full">
        <Button3 />
      </div>
    </div>
  );
}

function Overlay5() {
  return (
    <div className="bg-[rgba(242,153,74,0.1)] content-stretch flex items-center justify-end pl-[27.42px] pr-[10px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Overlay">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f2994a] text-[10px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[normal] mb-0">قيد</p>
        <p className="leading-[normal]">الانتظار</p>
      </div>
    </div>
  );
}

function Data5() {
  return (
    <div className="relative shrink-0 w-[102.66px] z-[3]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pb-[21px] pt-[21.5px] px-[16px] relative size-full">
        <Overlay5 />
      </div>
    </div>
  );
}

function Data6() {
  return (
    <div className="relative shrink-0 w-[158.2px] z-[2]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pl-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#475569] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
          <p className="leading-[20px] mb-0">سويت حي الملقا (S-</p>
          <p className="leading-[20px]">04)</p>
        </div>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#001d28] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[20px]">ليلى إبراهيم</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[normal]">جامعة نورة</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[75.64px]" data-name="Container">
      <Container37 />
      <Container38 />
    </div>
  );
}

function Student1() {
  return (
    <div className="max-w-[129.1699981689453px] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Student">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgStudent1} />
      </div>
    </div>
  );
}

function Data7() {
  return (
    <div className="relative shrink-0 w-[161.17px] z-[1]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center pl-[33.53px] relative size-full">
        <Container36 />
        <Student1 />
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div aria-hidden className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex isolate items-center justify-center pr-[16px] pt-px relative size-full">
          <Data4 />
          <Data5 />
          <Data6 />
          <Data7 />
        </div>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Body">
      <Row1 />
      <Row2 />
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table">
      <Header />
      <Body />
    </div>
  );
}

function SectionRecentBookingsTable() {
  return (
    <div className="bg-white col-[2/span_2] justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="Section - Recent Bookings Table">
      <div className="content-stretch flex flex-col gap-[32px] items-start pb-[341px] pt-[32px] px-[32px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,31,42,0.05),0px_8px_10px_-6px_rgba(0,31,42,0.05)]" data-name="Section - Recent Bookings Table:shadow" />
        <Container32 />
        <Table />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Cairo:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#001d28] text-[18px] text-right whitespace-nowrap">
        <p className="leading-[28px]">أداء العقارات</p>
      </div>
    </div>
  );
}

function Property() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Property">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[186.66%] left-0 max-w-none top-[-43.33%] w-full" src={imgProperty} />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col h-[160px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Property />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f2994a] text-[12px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[16px]">SAR 4,500</p>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#001d28] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[20px]">فيلا النخيل السكنية</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between relative size-full">
        <Container42 />
        <Heading3 />
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[8.167px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 10.5">
        <g id="Container">
          <path d={svgPaths.p128a9c0} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex gap-[3.99px] items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[15px]">2 حمام</p>
      </div>
      <Container45 />
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[8.167px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 8.16667">
        <g id="Container">
          <path d={svgPaths.p1ba02ff0} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[15px]">3 غرف</p>
      </div>
      <Container47 />
    </div>
  );
}

function Container43() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center pb-[8px] pl-[146.7px] pr-[0.01px] relative size-full">
          <Container44 />
          <Container46 />
        </div>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#f1f5f9] h-[6px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-[#f2994a] inset-[0_0_0_15%] rounded-[9999px]" data-name="Background" />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[15px]">نسبة الإشغال: 85%</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[20px] relative size-full">
        <Container41 />
        <Container43 />
        <Background4 />
        <Container48 />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[11px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 10.5">
        <g id="Container">
          <path d={svgPaths.p2babf400} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#22c55e] relative rounded-[9999px] self-stretch shrink-0" data-name="Background">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative size-full">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_-0.01px_0_0] rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(34,197,94,0.2),0px_4px_6px_-4px_rgba(34,197,94,0.2)]" data-name="Overlay+Shadow" />
          <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[10px] text-right text-white whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
            <p className="leading-[15px]">موثق</p>
          </div>
          <Container50 />
        </div>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex h-[23px] items-start right-[12.02px] top-[12px]" data-name="Container">
      <Background5 />
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,31,42,0.1),0px_8px_10px_-6px_rgba(0,31,42,0.1)] shrink-0 w-full" data-name="Background+Shadow">
      <Container39 />
      <Container40 />
      <Container49 />
    </div>
  );
}

function Property1() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Property">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[186.66%] left-0 max-w-none top-[-43.33%] w-full" src={imgProperty1} />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col h-[160px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Property1 />
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f2994a] text-[12px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[16px]">SAR 2,800</p>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#001d28] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[20px]">سكن الملقا الذكي</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between relative size-full">
        <Container54 />
        <Heading4 />
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[8.167px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 10.5">
        <g id="Container">
          <path d={svgPaths.p128a9c0} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[15px]">1 حمام</p>
      </div>
      <Container57 />
    </div>
  );
}

function Container59() {
  return (
    <div className="h-[8.167px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 8.16667">
        <g id="Container">
          <path d={svgPaths.p1ba02ff0} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[15px]">1 غرفة</p>
      </div>
      <Container59 />
    </div>
  );
}

function Container55() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center pb-[8px] pl-[147.12px] relative size-full">
          <Container56 />
          <Container58 />
        </div>
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col h-[6px] items-start justify-center overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="bg-[#f2994a] flex-[1_0_0] min-h-px relative rounded-[9999px] w-full" data-name="Background" />
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[15px]">نسبة الإشغال: 100%</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[20px] relative size-full">
        <Container53 />
        <Container55 />
        <Background6 />
        <Container60 />
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[11px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 10.5">
        <g id="Container">
          <path d={svgPaths.p2babf400} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#22c55e] relative rounded-[9999px] self-stretch shrink-0" data-name="Background">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative size-full">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_-0.01px_0_0] rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(34,197,94,0.2),0px_4px_6px_-4px_rgba(34,197,94,0.2)]" data-name="Overlay+Shadow" />
          <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[10px] text-right text-white whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
            <p className="leading-[15px]">موثق</p>
          </div>
          <Container62 />
        </div>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute content-stretch flex h-[23px] items-start right-[12.02px] top-[12px]" data-name="Container">
      <Background7 />
    </div>
  );
}

function BackgroundShadow1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,31,42,0.1),0px_8px_10px_-6px_rgba(0,31,42,0.1)] shrink-0 w-full" data-name="Background+Shadow">
      <Container51 />
      <Container52 />
      <Container61 />
    </div>
  );
}

function PropertyPerformanceAsymmetricSection() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Property Performance Asymmetric Section">
      <Heading2 />
      <BackgroundShadow />
      <BackgroundShadow1 />
    </div>
  );
}

function Container31() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_652px] relative shrink-0 w-full" data-name="Container">
      <SectionRecentBookingsTable />
      <PropertyPerformanceAsymmetricSection />
    </div>
  );
}

function Container6() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[inherit] p-[32px] relative size-full">
        <SectionStatisticsBentoGrid />
        <Container31 />
      </div>
    </div>
  );
}

function MainContentArea() {
  return (
    <div className="absolute content-stretch flex flex-col isolate items-start left-0 min-h-[1024px] pb-[76px] top-0 w-[1024px]" data-name="Main Content Area">
      <HeaderTopAppBar />
      <Container6 />
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Cairo:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-right text-white tracking-[-1px] whitespace-nowrap">
        <p className="leading-[28px]" dir="auto">
          سكني
        </p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Cairo:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] text-right whitespace-nowrap">
        <p className="leading-[16px]" dir="auto">
          إدارة العقارات الفاخرة
        </p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[103.94px]" data-name="Container">
      <Container65 />
      <Container66 />
    </div>
  );
}

function Container67() {
  return (
    <div className="h-[19px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 19">
        <g id="Container">
          <path d={svgPaths.p3f0e4300} fill="var(--fill-0, #001D28)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-[#f2994a] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" data-name="Background">
      <Container67 />
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[44px] items-center left-0 pl-[49px] right-0 top-[10px]" data-name="Container">
      <Container64 />
      <Background8 />
    </div>
  );
}

function Margin() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Margin">
      <Container63 />
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#f2994a] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[20px]" dir="auto">
          لوحة التحكم
        </p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p191dcc80} fill="var(--fill-0, #F2994A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function LinkActiveDashboard() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Link - Active: Dashboard">
      <div aria-hidden className="absolute bg-[rgba(255,255,255,0.1)] inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[15.99px] items-center pl-[76.88px] pr-[16px] py-[12px] relative size-full">
          <Container68 />
          <Container69 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(203,213,225,0.7)] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[20px]" dir="auto">
          عقاراتي
        </p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="h-[18px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18">
        <g id="Container">
          <path d={svgPaths.p7ab5f00} fill="var(--fill-0, #CBD5E1)" fillOpacity="0.7" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[15.99px] items-center pl-[104.94px] pr-[16px] py-[12px] relative size-full">
          <Container70 />
          <Container71 />
        </div>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(203,213,225,0.7)] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[20px]" dir="auto">
          طلبات الانتظار
        </p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="h-[21px] relative shrink-0 w-[19px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 21">
        <g id="Container">
          <path d={svgPaths.p1574ee00} fill="var(--fill-0, #CBD5E1)" fillOpacity="0.7" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center pl-[64.17px] pr-[16px] py-[12px] relative size-full">
          <Container72 />
          <Container73 />
        </div>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(203,213,225,0.7)] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[20px]" dir="auto">
          المحادثات
        </p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p1c483e80} fill="var(--fill-0, #CBD5E1)" fillOpacity="0.7" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center pl-[90.06px] pr-[16px] py-[12px] relative size-full">
          <Container74 />
          <Container75 />
        </div>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[16px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[24px]" dir="auto">
          Profile
        </p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="h-[21px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 21">
        <g id="Container">
          <path d={svgPaths.p29a42280} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[27px] items-end relative shrink-0">
      <Container76 />
      <Container77 />
    </div>
  );
}

function Link3() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[90.06px] pr-[16px] py-[12px] relative size-full">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[20px]" dir="auto">
          اللآراء و التقيمات
        </p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p3d9c6bc0} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center left-[51.06px] top-[12px]">
      <Container78 />
      <Container79 />
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[44px] relative rounded-[12px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[90.06px] pr-[16px] py-[12px] relative size-full">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(203,213,225,0.7)] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[20px]" dir="auto">
          الإعدادات
        </p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="h-[20px] relative shrink-0 w-[20.1px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1 20">
        <g id="Container">
          <path d={svgPaths.p3cdadd00} fill="var(--fill-0, #CBD5E1)" fillOpacity="0.7" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link5() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[15.99px] items-center pl-[97.63px] pr-[16px] py-[12px] relative size-full">
          <Container80 />
          <Container81 />
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px relative w-full" data-name="Nav">
      <LinkActiveDashboard />
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
      <Link4 />
      <Link5 />
    </div>
  );
}

function Container82() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p2d8e4cc0} fill="var(--fill-0, #020617)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#f2994a] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center justify-center py-[12px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#001d28] text-[14px] text-center w-[149.11px]" style={{ fontVariationSettings: '"HEXP" 0' }}>
          <p className="leading-[20px]" dir="auto">
            إضافة سكن جديد
          </p>
        </div>
        <Container82 />
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col h-[24px] items-end left-[42.19px] top-1/2 w-[129px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] right-0 text-[#94a3b8] text-[16px] text-right top-[12px] w-[129px]" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[24px]" dir="auto">
          هل تحتاج مساعده
        </p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="-translate-y-1/2 absolute left-[183.18px] size-[20px] top-1/2" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p2816f2c0} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container83() {
  return (
    <div className="h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.99px] items-center pl-[79.19px] pr-[16px] py-[12px] relative size-full">
          <Container84 />
          <Container85 />
        </div>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-end relative shrink-0 w-[91px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] right-[40px] text-[#94a3b8] text-[16px] text-right top-[12px] w-[99px]" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[24px]" dir="auto">
          تسجيل خروج
        </p>
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="-translate-y-1/2 absolute left-[186.82px] size-[18px] top-1/2" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p3e9df400} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container86() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.99px] items-center pl-[115.83px] pr-[16px] py-[12px] relative size-full">
          <Container87 />
          <Container88 />
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pb-[16px] pt-[17px] px-[16px] relative shrink-0 w-[255px]" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.05)] border-solid border-t inset-0 pointer-events-none" />
      <Button4 />
      <Container83 />
      <Container86 />
    </div>
  );
}

function Frame() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[799px]">
      <HorizontalBorder />
    </div>
  );
}

function Group() {
  return (
    <div className="-translate-x-1/2 absolute contents left-1/2 top-[799px]">
      <Frame />
    </div>
  );
}

export default function Component() {
  return (
    <div className="relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(249, 249, 251) 0%, rgb(249, 249, 251) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="لوحة تحكم المالك">
      <MainContentArea />
      <div className="absolute bg-gradient-to-b content-stretch flex flex-col from-[#034] gap-[21px] h-[1024px] items-start left-[1024px] p-[24px] to-[#001d28] top-0 w-[256px]" data-name="Aside - SideNavBar">
        <div className="absolute bg-[rgba(255,255,255,0)] h-[1024px] right-0 shadow-[0px_25px_50px_-12px_rgba(0,31,42,0.2)] top-0 w-[256px]" data-name="Aside - SideNavBar:shadow" />
        <Margin />
        <Nav />
        <Group />
      </div>
    </div>
  );
}
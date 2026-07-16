import svgPaths from "./svg-z7n4kh32s6";
import imgUserProfile from "./4bcee8928a1197c9f7436fab69e36b4701bd578b.png";

function UserProfile() {
  return (
    <div className="max-w-[40px] relative shrink-0 size-[36px]" data-name="User profile">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-[-5.56%] max-w-none size-[111.11%] top-[-5.56%]" src={imgUserProfile} />
      </div>
    </div>
  );
}

function OverlayBorderShadow() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Overlay+Border+Shadow">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <UserProfile />
      </div>
      <div aria-hidden className="absolute border-2 border-[#bfe9ff] border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p2816f2c0} fill="var(--fill-0, #003344)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p164b49c0} fill="var(--fill-0, #003344)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <OverlayBorderShadow />
      <Button />
      <Button1 />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-end px-[12px] py-[4px] relative rounded-[8px] shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Cairo:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(0,51,68,0.7)] text-right whitespace-nowrap">
        <p className="leading-[24px]">عقاراتي</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Cairo:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f2994a] text-[16px] text-right whitespace-nowrap">
        <p className="leading-[24px]">إضافة عقار</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-end px-[12px] py-[4px] relative rounded-[8px] shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Cairo:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(0,51,68,0.7)] text-right whitespace-nowrap">
        <p className="leading-[24px]">الرئيسية</p>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Nav">
      <Link />
      <Link1 />
      <Link2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Cairo:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#034] text-[24px] text-right tracking-[-1.2px] whitespace-nowrap">
        <p className="leading-[32px]">Sakani</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="max-w-[1536px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between max-w-[inherit] pl-[24.02px] pr-[23.99px] py-[16px] relative size-full">
          <Container1 />
          <Nav />
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function HeaderTopAppBarFromJson() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(255,255,255,0.8)] content-stretch flex flex-col items-start relative shadow-[0px_12px_32px_0px_rgba(0,31,42,0.06)] shrink-0 w-full z-[3]" data-name="Header - TopAppBar from JSON">
      <Container />
      <div className="absolute bg-[#f3f3f5] bottom-0 h-px left-0 w-[1280px]" data-name="Horizontal Divider" />
    </div>
  );
}

function Background() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#e8e8e9] h-[4px] left-0 right-0 rounded-[9999px] top-1/2" data-name="Background">
      <div className="absolute bg-[#ffa454] h-[4px] left-3/4 right-0 rounded-[9999px] top-0" data-name="Background" />
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="bg-[#e2e2e4] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background+Shadow">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#71787c] text-[16px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[24px]">4</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#71787c] text-[12px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[16px]">المراجعة والنشر</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0" data-name="Margin">
      <Container7 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <BackgroundShadow />
      <Margin />
    </div>
  );
}

function BackgroundShadow1() {
  return (
    <div className="bg-[#e2e2e4] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background+Shadow">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#71787c] text-[16px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[24px]">3</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#71787c] text-[12px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[16px]">التفاصيل الإضافية</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0" data-name="Margin">
      <Container9 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <BackgroundShadow1 />
      <Margin1 />
    </div>
  );
}

function BackgroundShadow2() {
  return (
    <div className="bg-[#e2e2e4] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background+Shadow">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#71787c] text-[16px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[24px]">2</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#71787c] text-[12px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[16px]">الموقع والصور</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0" data-name="Margin">
      <Container11 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <BackgroundShadow2 />
      <Margin2 />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#ffa454] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background">
      <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0)] left-1/2 rounded-[9999px] shadow-[0px_0px_0px_4px_white,0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[40px] top-0" data-name="Overlay+Shadow" />
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[24px]">1</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#001d28] text-[12px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[16px]">البيانات الأساسية</p>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0" data-name="Margin">
      <Container13 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <Background1 />
      <Margin3 />
    </div>
  );
}

function ProgressStepper() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Progress Stepper">
      <Background />
      <Container6 />
      <Container8 />
      <Container10 />
      <Container12 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Cairo:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#034] text-[30px] text-right tracking-[-0.75px] whitespace-nowrap">
        <p className="leading-[36px]">البيانات الأساسية</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#41484c] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[20px]">ابدأ بتحديد المعلومات الجوهرية لعقارك لجذب المستأجر المناسب.</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Heading />
        <Container14 />
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[666px]" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#034] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[20px]">عنوان السكن</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(113,120,124,0.5)] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
          <p className="leading-[normal]">مثلاً: شقة طلابية بجوار ميدان الشؤون</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pl-[17px] pr-[49px] py-[19px] relative size-full">
          <Container17 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(193,199,204,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute bottom-[29.31%] content-stretch flex flex-col items-start right-[16px] top-[29.31%]" data-name="Container">
      <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
          <path d={svgPaths.p1869180} fill="var(--fill-0, #71787C)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Input />
      <Container18 />
    </div>
  );
}

function Container15() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Label />
      <Container16 />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#034] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[20px]">نوع السكن</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#41484c] text-[16px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
          <p className="leading-[24px]">غرفة مستقلة</p>
        </div>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="absolute left-[16px] size-[24px] top-[17px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d="M7.2 9.6L12 14.4L16.8 9.6" id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function Options() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Options">
      <div aria-hidden className="absolute border border-[rgba(193,199,204,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[17px] relative size-full">
          <Container21 />
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip pl-[286px] pr-[9px] py-[17px] relative rounded-[inherit] size-full">
            <Svg />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Options />
    </div>
  );
}

function Container19() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-2 self-start shrink-0" data-name="Container">
      <Label1 />
      <Container20 />
    </div>
  );
}

function SectionGeneralInfo() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[__86px_fit-content(100%)] relative shrink-0 w-full" data-name="Section: General Info">
      <Container15 />
      <Container19 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-end px-[8px] relative shrink-0" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Cairo:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#034] text-[18px] text-right whitespace-nowrap">
        <p className="leading-[28px]">نظام التسعير</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#e8e8e9] flex-[1_0_0] h-px min-w-px relative" data-name="Horizontal Divider" />
      <Heading1 />
      <div className="bg-[#e8e8e9] flex-[1_0_0] h-px min-w-px relative" data-name="Horizontal Divider" />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[203.33px]" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#034] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[20px]">الإيجار الشهري</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex flex-col items-end left-[64px] overflow-clip right-[16.67px] top-[19px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[16px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[normal]">0.00</p>
      </div>
    </div>
  );
}

function RectangleAlignStretch() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-start relative shrink-0 z-[2]" data-name="Rectangle:align-stretch">
        <div className="h-full min-w-[15px] opacity-0 relative shrink-0 w-[15px]" data-name="Rectangle" />
      </div>
    </div>
  );
}

function Container28() {
  return <div className="flex-[1_0_0] h-[24px] min-w-px relative z-[1]" data-name="Container" />;
}

function Container27() {
  return (
    <div className="absolute content-stretch flex isolate items-center left-[49px] right-[16.67px] top-[17px]" data-name="Container">
      <RectangleAlignStretch />
      <Container28 />
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white h-[58px] relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container26 />
        <Container27 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(193,199,204,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute bottom-[36.21%] content-stretch flex flex-col items-end left-[16px] top-[36.21%]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#71787c] text-[12px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[16px]">ج.م</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Input1 />
      <Container29 />
    </div>
  );
}

function Container24() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Label2 />
      <Container25 />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[203.33px]" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#034] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[20px]">مبلغ التأمين</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex flex-col items-end left-[64px] overflow-clip right-[16.66px] top-[19px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[16px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[normal]">0.00</p>
      </div>
    </div>
  );
}

function RectangleAlignStretch1() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-start relative shrink-0 z-[2]" data-name="Rectangle:align-stretch">
        <div className="h-full min-w-[15px] opacity-0 relative shrink-0 w-[15px]" data-name="Rectangle" />
      </div>
    </div>
  );
}

function Container34() {
  return <div className="flex-[1_0_0] h-[24px] min-w-px relative z-[1]" data-name="Container" />;
}

function Container33() {
  return (
    <div className="absolute content-stretch flex isolate items-center left-[49px] right-[16.67px] top-[17px]" data-name="Container">
      <RectangleAlignStretch1 />
      <Container34 />
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white h-[58px] relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container32 />
        <Container33 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(193,199,204,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute bottom-[36.21%] content-stretch flex flex-col items-end left-[16px] top-[36.21%]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#71787c] text-[12px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[16px]">ج.م</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Input2 />
      <Container35 />
    </div>
  );
}

function Container30() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Label3 />
      <Container31 />
    </div>
  );
}

function Container23() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_86px] relative shrink-0 w-full" data-name="Container">
      <Container24 />
      <Container30 />
    </div>
  );
}

function SectionPricing() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pt-[24px] relative shrink-0 w-full" data-name="Section: Pricing">
      <Container22 />
      <Container23 />
    </div>
  );
}

function Container36() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p300a1100} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Cairo:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">الخطوة التالية</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <a className="bg-[#034] content-stretch cursor-pointer flex gap-[7.99px] items-center justify-center px-[32px] py-[18px] relative rounded-[12px] shrink-0 w-[325px]" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
      <Container36 />
      <Container37 />
    </a>
  );
}

function Container38() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Cairo:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#034] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[24px]">إلغاء</p>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex items-center justify-center px-[34px] py-[18px] relative rounded-[12px] shrink-0 w-[329px]" data-name="Button">
      <div aria-hidden className="absolute border-2 border-[rgba(193,199,204,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container38 />
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center pt-[40px] relative shrink-0 w-full" data-name="Actions">
      <Button2 />
      <Button3 />
    </div>
  );
}

function Form() {
  return (
    <div className="relative shrink-0 w-full" data-name="Form">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[32px] items-start relative size-full">
        <SectionGeneralInfo />
        <SectionPricing />
        <Actions />
      </div>
    </div>
  );
}

function FormCard() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(255,255,255,0.7)] relative rounded-[12px] shrink-0 w-full" data-name="Form Card">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_32px_0px_rgba(0,31,42,0.06)]" />
      <div className="content-stretch flex flex-col gap-[40px] items-start px-[49px] py-[65px] relative size-full">
        <Header />
        <Form />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(113,120,124,0.6)] text-center whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[16px]">جميع بياناتك محمية وفقاً لسياسة خصوصية سكني</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[9.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 11.6667">
        <g id="Container">
          <path d={svgPaths.pf270e00} fill="var(--fill-0, #71787C)" fillOpacity="0.6" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex gap-[7.99px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container40 />
      <Container41 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[768px] relative shrink-0 w-[768px]" data-name="Container">
      <ProgressStepper />
      <FormCard />
      <Container39 />
    </div>
  );
}

function Main() {
  return (
    <div className="relative shrink-0 w-full z-[2]" data-name="Main">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center p-[48px] relative size-full">
          <div className="absolute bg-[#bfe9ff] blur-[32px] left-[-96px] opacity-20 rounded-[9999px] size-[384px] top-[-96px]" data-name="Abstract Background Shape" />
          <div className="absolute bg-[#ffa454] blur-[32px] bottom-[-96px] opacity-10 right-[-96px] rounded-[9999px] size-[384px]" data-name="Background+Blur" />
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-end relative self-stretch shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[20px]">Help Center</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col items-end relative self-stretch shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[20px]">Terms of Service</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex flex-col items-end relative self-stretch shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[20px]">Privacy Policy</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex gap-[24px] h-[20px] items-start relative shrink-0" data-name="Container">
      <Link3 />
      <Link4 />
      <Link5 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-end opacity-70 relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#034] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[20px]">© 2024 Sakani Housing. All rights reserved.</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex items-center justify-between max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Container43 />
      <Container44 />
    </div>
  );
}

function FooterFromJson() {
  return (
    <div className="bg-[#f9f9fb] relative shrink-0 w-full z-[1]" data-name="Footer from JSON">
      <div className="content-stretch flex flex-col gap-[32px] items-start px-[24px] py-[48px] relative size-full">
        <div className="bg-[#f3f3f5] h-px relative shrink-0 w-full" data-name="Horizontal Divider" />
        <Container42 />
      </div>
    </div>
  );
}

export default function SakaniBasicDataRender() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(249, 249, 251) 0%, rgb(249, 249, 251) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Sakani Basic Data Render">
      <HeaderTopAppBarFromJson />
      <Main />
      <FooterFromJson />
    </div>
  );
}
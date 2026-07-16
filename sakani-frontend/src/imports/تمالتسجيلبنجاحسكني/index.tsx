import svgPaths from "./svg-eoo68ht916";
import imgSakaniLogo from "./c2af01dc3102fd7b4269c7e033985ac217ebac1a.png";

function SakaniLogo() {
  return (
    <div className="max-w-[576px] relative shrink-0 size-[40px]" data-name="SAKANI logo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgSakaniLogo} />
      </div>
    </div>
  );
}

function BrandingHeader() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Branding Header">
      <SakaniLogo />
    </div>
  );
}

function Heading1TextualHierarchy() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 1 - Textual Hierarchy">
      <div className="[word-break:break-word] flex flex-col font-['Cairo:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#001d28] text-[36px] text-center tracking-[-0.9px] whitespace-nowrap">
        <p className="leading-[40px]">تم تسجيلك بنجاح!</p>
      </div>
    </div>
  );
}

function Heading1TextualHierarchyMargin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[141.91px] pb-[16px] top-[232px]" data-name="Heading 1 - Textual Hierarchy:margin">
      <Heading1TextualHierarchy />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="[word-break:break-word] h-[56px] leading-[0] max-w-[448px] relative shrink-0 text-[20px] text-center w-[448px] whitespace-nowrap" data-name="Paragraph">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center left-[calc(50%+107.23px)] text-[#41484c] top-[13.5px]" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[28px]">{`أهلاً بك في عائلة `}</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Readex_Pro:SemiBold',sans-serif] font-semibold justify-center left-[calc(50%+6.5px)] text-[#904d00] top-[13.5px]" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[28px]">سكني</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center left-[calc(50%-100.73px)] text-[#41484c] top-[13.5px]" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[28px]">. حسابك جاهز الآن</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center left-1/2 text-[#41484c] top-[41.5px]" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[28px]">لاستكشاف أفضل العروض السكنية في قنا.</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[64px] max-w-[448px] pb-[48px] top-[288px]" data-name="Margin">
      <Paragraph />
    </div>
  );
}

function Container() {
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

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Cairo:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">
        <p className="leading-[28px]">الذهاب إلى لوحة التحكم</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="drop-shadow-[0px_12px_12px_rgba(144,77,0,0.2)] relative rounded-[16px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(169.958deg, rgb(144, 77, 0) 0%, rgb(255, 164, 84) 100%)" }} data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[11.99px] items-center justify-center px-[32px] py-[20px] relative size-full">
          <Container />
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#f3f4f5] relative rounded-[16px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[32px] py-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Cairo:SemiBold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#001d28] text-[16px] text-center whitespace-nowrap">
            <p className="leading-[24px]">استكشاف العقارات المتاحة</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ActionSection() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[96px] max-w-[384px] right-[96px] top-[392px]" data-name="Action Section">
      <Button />
      <Button1 />
    </div>
  );
}

function SecondaryFloatingElementForAsymmetry() {
  return (
    <div className="absolute flex h-[64.691px] items-center justify-center left-[-13.3px] top-[-20.38px] w-[58.287px]">
      <div className="-rotate-12 flex-none">
        <div className="bg-[#034] content-stretch flex flex-col items-center p-[12px] relative rounded-[12px]" data-name="Secondary floating element for asymmetry">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_-0.33px_0_0] rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Secondary floating element for asymmetry:shadow" />
          <div className="[word-break:break-word] flex flex-col font-['Material_Symbols_Outlined:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#749cb0] text-[24px] text-center whitespace-nowrap">
            <p className="leading-[32px]">key</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bottom-[6.24px] flex h-[47.554px] items-center justify-center right-[-2.2px] w-[40.705px]">
      <div className="flex-none rotate-6">
        <div className="bg-[#ffa454] content-stretch flex flex-col items-center p-[8px] relative rounded-[8px]" data-name="Background">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0.3px_0_0] rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
          <div className="[word-break:break-word] flex flex-col font-['Material_Symbols_Outlined:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#713b00] text-[20px] text-center whitespace-nowrap">
            <p className="leading-[28px]">home</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Container">
          <path d={svgPaths.pf059c0} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[113.862px]">
      <div className="flex-none rotate-12">
        <div className="bg-[#904d00] content-stretch flex items-center justify-center relative rounded-[16px] size-[96px]" data-name="Background">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(255,255,255,0)] left-1/2 rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] size-[96px] top-1/2" data-name="Overlay+Shadow" />
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(144,77,0,0.05)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[192px]" data-name="Overlay">
      <div className="absolute bg-[rgba(144,77,0,0.1)] inset-0 rounded-[9999px]" data-name="Abstract 3D Success Visual Representation" />
      <SecondaryFloatingElementForAsymmetry />
      <Background />
      <Background1 />
    </div>
  );
}

function HeroIllustrationSpace() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Hero Illustration Space">
      <Overlay />
    </div>
  );
}

function HeroIllustrationSpaceMargin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[40px] right-0 top-0" data-name="Hero Illustration Space:margin">
      <HeroIllustrationSpace />
    </div>
  );
}

function SuccessContent() {
  return (
    <div className="h-[532px] relative shrink-0 w-full" data-name="Success Content">
      <Heading1TextualHierarchyMargin />
      <Margin />
      <ActionSection />
      <HeroIllustrationSpaceMargin />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[12px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[16px]">اتصال آمن</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[9.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 11.6667">
        <g id="Container">
          <path d={svgPaths.p18636d00} fill="var(--fill-0, #191C1D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[12px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[16px]">حساب موثق</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[9.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 11.6667">
        <g id="Container">
          <path d={svgPaths.pf270e00} fill="var(--fill-0, #191C1D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Container7 />
      <Container8 />
    </div>
  );
}

function SubtleMetadataFooterInCard() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center opacity-40 pt-[40px] relative shrink-0 w-full" data-name="Subtle Metadata / Footer in Card">
      <Container3 />
      <div className="bg-[#71787c] relative rounded-[9999px] shrink-0 size-[4px]" data-name="Background" />
      <Container6 />
    </div>
  );
}

function TheContentCard() {
  return (
    <div className="bg-white relative rounded-[24px] shadow-[0px_40px_80px_0px_rgba(0,29,40,0.06)] shrink-0 w-full" data-name="The Content Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-start p-[48px] relative size-full">
          <BrandingHeader />
          <SuccessContent />
          <SubtleMetadataFooterInCard />
        </div>
      </div>
    </div>
  );
}

function PlatformSecondaryLogoWatermark() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Platform Secondary Logo / Watermark">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(65,72,76,0.4)] text-center tracking-[1.4px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[20px]">© 2024 SAKANI QENA</p>
      </div>
    </div>
  );
}

function MainContainerEditorialAsymmetryWithLayeredSurfaces() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[672px] relative shrink-0 w-[672px]" data-name="Main Container: Editorial Asymmetry with Layered Surfaces">
      <div className="absolute blur-[32px] opacity-60 right-[-48px] rounded-[9999px] size-[256px] top-[-48px]" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(18.102 0 0 18.102 128 128)'><stop stop-color='rgba(144,77,0,0.1)' offset='0'/><stop stop-color='rgba(144,77,0,0)' offset='0.7'/></radialGradient></defs></svg>\")" }} data-name="Background Decorative Element (The 'Academic Architect' Layering)" />
      <TheContentCard />
      <div className="absolute bg-[rgba(0,51,68,0.05)] blur-[20px] bottom-[-32px] left-[-32px] opacity-40 rounded-[9999px] size-[192px]" data-name="Overlay+Blur" />
      <PlatformSecondaryLogoWatermark />
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p11cc5180} fill="var(--fill-0, #904D00)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(255,255,255,0.8)] content-stretch flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[56px]" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(193,199,204,0.15)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[9999px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] size-[56px] top-0" data-name="Button:shadow" />
      <Container9 />
    </div>
  );
}

function ContextualChatbotFloatingBubblePerDesignSystem() {
  return (
    <div className="absolute bottom-[32px] content-stretch flex flex-col items-start left-[32px]" data-name="Contextual Chatbot (Floating Bubble per Design System)">
      <Button2 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[82px] relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(248, 249, 250) 0%, rgb(248, 249, 250) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="تم التسجيل بنجاح - سكني">
      <MainContainerEditorialAsymmetryWithLayeredSurfaces />
      <ContextualChatbotFloatingBubblePerDesignSystem />
    </div>
  );
}
import svgPaths from "./svg-6k50t4q0yc";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Cairo:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#001d28] text-[48px] text-center tracking-[-1.2px] whitespace-nowrap">
        <p className="leading-[48px]">ابدأ رحلتك معنا اليوم</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#41484c] text-[20px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[28px] mb-0">اختر نوع الحساب الذي يناسب احتياجاتك لنتمكن من تخصيص تجربتك بشكل</p>
        <p className="leading-[28px]">أفضل.</p>
      </div>
    </div>
  );
}

function HeroSectionForChoice() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[672px] relative shrink-0 w-[641.64px]" data-name="Hero Section for Choice">
      <Heading />
      <Container />
    </div>
  );
}

function HeroSectionForChoiceMargin() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[672px] pb-[64px] relative shrink-0" data-name="Hero Section for Choice:margin">
      <HeroSectionForChoice />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[36px] relative shrink-0 w-[44px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 36">
        <g id="Container">
          <path d={svgPaths.p1c676b20} fill="var(--fill-0, #001D28)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#bfe9ff] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[96px]" data-name="Background">
      <Container1 />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col h-[128px] items-start pb-[32px] relative shrink-0 w-[96px]" data-name="Margin">
      <Background1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Cairo:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#001d28] text-[30px] text-center whitespace-nowrap">
        <p className="leading-[36px]">أنا طالب</p>
      </div>
    </div>
  );
}

function Heading2Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0" data-name="Heading 2:margin">
      <Heading1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[320px] pl-[0.41px] pr-[0.42px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#41484c] text-[16px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[26px] mb-0">ابحث عن سكن مريح وقريب من جامعتك، قارن</p>
        <p className="leading-[26px] mb-0">بين الخيارات المتاحة، واحجز مكانك المفضل</p>
        <p className="leading-[26px]">بكل سهولة.</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[320px] pb-[40px] relative shrink-0" data-name="Margin">
      <Container2 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#001d28] content-stretch flex flex-col items-center justify-center py-[16px] relative rounded-[12.8px] shrink-0 w-full" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[28px]">إنشاء حساب طالب</p>
      </div>
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="content-stretch flex flex-col h-[64px] items-start justify-end min-h-[60px] pt-[4px] relative shrink-0 w-full" data-name="Button:margin">
      <Button />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-white relative rounded-[11.8px] shrink-0 w-full" data-name="Background">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center justify-between p-[48px] relative size-full">
          <Margin />
          <Heading2Margin />
          <Margin1 />
          <ButtonMargin />
          <div className="absolute bg-[#001d28] bottom-[-44px] opacity-3 right-[-44px] rounded-[9999px] size-[128px]" data-name="Decorative Element" />
        </div>
      </div>
    </div>
  );
}

function StudentChoiceCard() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[19.2px] row-1 self-start shadow-[0px_8px_30px_0px_rgba(0,0,0,0.04)] shrink-0" data-name="Student Choice Card">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[4px] relative size-full">
          <Background />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[41px] relative shrink-0 w-[42px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 41">
        <g id="Container">
          <path d={svgPaths.p140dec80} fill="var(--fill-0, #904D00)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#ffdcc3] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[96px]" data-name="Background">
      <Container3 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="h-[128px] relative shrink-0 w-[96px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[32px] relative size-full">
        <Background2 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Cairo:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#001d28] text-[30px] text-center whitespace-nowrap">
        <p className="leading-[36px]">أنا صاحب عقار</p>
      </div>
    </div>
  );
}

function Heading2Margin1() {
  return (
    <div className="relative shrink-0" data-name="Heading 2:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Heading2 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[320px] pl-[15.44px] pr-[15.45px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#41484c] text-[16px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[26px] mb-0">أعلن عن عقارك، أدر حجوزاتك، وتواصل مع</p>
        <p className="leading-[26px] mb-0">آلاف الطلاب الباحثين عن سكن مميز في</p>
        <p className="leading-[26px]">منطقتك.</p>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="max-w-[320px] relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] pb-[40px] relative size-full">
        <Container4 />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#904d00] relative rounded-[12.8px] shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center py-[16px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12.8px] shadow-[0px_10px_15px_-3px_rgba(144,77,0,0.2),0px_4px_6px_-4px_rgba(144,77,0,0.2)]" data-name="Button:shadow" />
        <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
          <p className="leading-[28px]">إنشاء حساب شريك</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-white relative rounded-[11.8px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden className="absolute border-2 border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[11.8px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center justify-between p-[50px] relative size-full">
          <Margin2 />
          <Heading2Margin1 />
          <Margin3 />
          <Button1 />
          <div className="absolute bg-[#904d00] left-[-44px] opacity-5 rounded-[9999px] size-[128px] top-[-44px]" data-name="Decorative Element" />
        </div>
      </div>
    </div>
  );
}

function PropertyOwnerChoiceCard() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[19.2px] row-1 self-start shadow-[0px_8px_30px_0px_rgba(0,0,0,0.04)] shrink-0" data-name="Property Owner Choice Card">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[4px] relative size-full">
          <BackgroundBorder />
        </div>
      </div>
    </div>
  );
}

function SelectionCardsBentoInspiredAsymmetricalLayout() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_466px] relative shrink-0 w-full" data-name="Selection Cards (Bento-inspired asymmetrical layout)">
      <StudentChoiceCard />
      <PropertyOwnerChoiceCard />
    </div>
  );
}

function BottomAssistanceText() {
  return (
    <div className="[word-break:break-word] content-stretch flex isolate items-start justify-center leading-[0] relative shrink-0 text-[14px] text-center whitespace-nowrap" data-name="Bottom Assistance Text">
      <div className="flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#904d00] z-[2]" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[20px]">سجل دخولك من هنا</p>
      </div>
      <div className="flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#41484c] z-[1]" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[20px]">{`هل لديك حساب بالفعل؟ `}</p>
      </div>
    </div>
  );
}

function BottomAssistanceTextMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[64px] relative shrink-0" data-name="Bottom Assistance Text:margin">
      <BottomAssistanceText />
    </div>
  );
}

function MainCanvas() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-0 max-w-[1280px] px-[24px] py-[96px] right-0 top-[72px]" data-name="Main Canvas">
      <HeroSectionForChoiceMargin />
      <SelectionCardsBentoInspiredAsymmetricalLayout />
      <BottomAssistanceTextMargin />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Cairo:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#904d00] text-[20px] text-right whitespace-nowrap">
        <p className="leading-[28px]">سكنى</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-end relative self-stretch shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c1c7cc] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[22.75px]">اتصل بنا</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-end relative self-stretch shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c1c7cc] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[22.75px]">سياسة الخصوصية</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-end relative self-stretch shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c1c7cc] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[22.75px]">الشروط والأحكام</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[24px] h-[23px] items-start relative shrink-0" data-name="Container">
      <Link />
      <Link1 />
      <Link2 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Container">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c1c7cc] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[22.75px]">© ٢٠٢٤ سكنى. جميع الحقوق محفوظة.</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] px-[48px] relative size-full">
          <Container6 />
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#001d28] bottom-0 content-stretch flex flex-col items-start left-0 pb-[48px] pt-[49px] right-0" data-name="Footer">
      <div aria-hidden className="absolute border-[#034] border-solid border-t inset-0 pointer-events-none" />
      <Container5 />
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Cairo:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#001d28] text-[18px] text-right tracking-[-0.45px] whitespace-nowrap">
        <p className="leading-[28px]">الرئيسية</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Cairo:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#001d28] text-[18px] text-right tracking-[-0.45px] whitespace-nowrap">
        <p className="leading-[28px]">العقارات</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Cairo:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#001d28] text-[18px] text-right tracking-[-0.45px] whitespace-nowrap">
        <p className="leading-[28px]">عن المنصة</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Cairo:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#001d28] text-[18px] text-right tracking-[-0.45px] whitespace-nowrap">
        <p className="leading-[28px]">المساعدة</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 z-[2]" data-name="Container">
      <Link3 />
      <Link4 />
      <Link5 />
      <Link6 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#001d28] text-[24px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[32px]">سكنى</p>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[32px] relative shrink-0 z-[1]" data-name="Margin">
      <Container12 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0" data-name="Container">
      <Container11 />
      <Margin4 />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#001d28] content-stretch flex flex-col items-center justify-center px-[24px] py-[8px] relative rounded-[12.8px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Cairo:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">تسجيل الدخول</p>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Nav">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between max-w-[inherit] px-[32px] py-[16px] relative size-full">
          <Container10 />
          <Button2 />
        </div>
      </div>
    </div>
  );
}

function HeaderTopAppBar() {
  return (
    <div className="absolute bg-[#f8f9fa] content-stretch drop-shadow-[0px_4px_20px_rgba(25,28,29,0.06)] flex flex-col items-start left-0 right-0 top-0" data-name="Header - TopAppBar">
      <Nav />
    </div>
  );
}

export default function Component() {
  return (
    <div className="relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(248, 249, 250) 0%, rgb(248, 249, 250) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="اختيار نوع الحساب - سكني">
      <MainCanvas />
      <Footer />
      <HeaderTopAppBar />
    </div>
  );
}
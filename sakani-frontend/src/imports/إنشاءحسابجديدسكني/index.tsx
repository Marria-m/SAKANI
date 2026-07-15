import svgPaths from "./svg-gihgaierqw";
import imgStudentAccommodation from "./15afd845d01d9f003052411d898fe4cc52692f8a.png";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Cairo:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#001d28] text-[30px] text-right tracking-[-0.75px] whitespace-nowrap">
        <p className="leading-[36px]">إنشاء حساب جديد</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#41484c] text-[16px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[24px]">انضم إلى مجتمع الطلاب الأكبر في المملكة</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-end pl-[42.53px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#41484c] text-[16px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[24px] mb-0">التحقق من</p>
        <p className="leading-[24px]">الهوية</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#e1e3e4] content-stretch flex h-[32px] items-center justify-center relative rounded-[9999px] shrink-0 w-[31.39px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#41484c] text-[16px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[24px]">٢</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Container3 />
      <Background />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-end pl-[58.24px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#001d28] text-[16px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[24px] mb-0">البيانات</p>
        <p className="leading-[24px]">الأساسية</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#001d28] content-stretch flex h-[32px] items-center justify-center relative rounded-[9999px] shrink-0 w-[31.39px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[24px]">١</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Container5 />
      <Background1 />
    </div>
  );
}

function ProgressStepper() {
  return (
    <div className="content-stretch flex gap-[16px] items-center pt-[24px] relative shrink-0 w-full" data-name="Progress Stepper">
      <Container2 />
      <div className="bg-[#e1e3e4] h-[2px] relative shrink-0 w-[47.13px]" data-name="Horizontal Divider" />
      <Container4 />
    </div>
  );
}

function WizardHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="Wizard Header">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Heading />
        <Container1 />
        <ProgressStepper />
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[395px]" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#001d28] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[20px]">الاسم بالكامل</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-end min-w-px overflow-clip relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[16px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[normal]">أدخل اسمك الثلاثي</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#f3f4f5] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pl-[16px] pr-[48px] py-[18px] relative size-full">
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bottom-[28.57%] content-stretch flex flex-col items-start right-[16px] top-[28.57%]" data-name="Container">
      <div className="relative shrink-0 size-[16px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <path d={svgPaths.p85bff00} fill="var(--fill-0, #71787C)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Input />
      <Container10 />
    </div>
  );
}

function Container7() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Label />
      <Container8 />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[395px]" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#001d28] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[20px]">رقم الجوال</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-end min-w-px overflow-clip relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[16px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[normal]">+966 5x xxx xxxx</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[#f3f4f5] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pl-[16px] pr-[48px] py-[18px] relative size-full">
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bottom-[28.57%] content-stretch flex flex-col items-start right-[16px] top-[28.57%]" data-name="Container">
      <div className="h-[22px] relative shrink-0 w-[15px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 22">
          <path d={svgPaths.p2cc7db00} fill="var(--fill-0, #71787C)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Input1 />
      <Container14 />
    </div>
  );
}

function Container11() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-2 self-start shrink-0" data-name="Container">
      <Label1 />
      <Container12 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[395px]" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#001d28] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[20px]">البريد الإلكتروني الجامعي</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-end min-w-px overflow-clip relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[16px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[normal]">student@university.edu.sa</p>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-[#f3f4f5] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pl-[16px] pr-[48px] py-[18px] relative size-full">
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute bottom-[28.57%] content-stretch flex flex-col items-start right-[16px] top-[28.57%]" data-name="Container">
      <div className="h-[18px] relative shrink-0 w-[22px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18">
          <path d={svgPaths.pb257040} fill="var(--fill-0, #71787C)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Input2 />
      <Container18 />
    </div>
  );
}

function Container15() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-3 self-start shrink-0" data-name="Container">
      <Label2 />
      <Container16 />
    </div>
  );
}

function Container6() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[___84px_84px_84px] pb-[8px] relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container11 />
      <Container15 />
    </div>
  );
}

function CtaSectionButton() {
  return (
    <div className="bg-[#904d00] relative rounded-[8px] shrink-0 w-full" data-name="CTA Section → Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[16px] relative size-full">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
          <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
            <p className="leading-[24px]">متابعة التحقق</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[4px] items-start justify-center leading-[0] relative shrink-0 text-[14px] text-center w-full whitespace-nowrap" data-name="Paragraph">
      <div className="flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#904d00]" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[20px]">تسجيل الدخول</p>
      </div>
      <div className="flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#41484c]" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[20px]">{`لديك حساب بالفعل؟ `}</p>
      </div>
    </div>
  );
}

function FormStep() {
  return (
    <div className="relative shrink-0 w-full" data-name="Form Step 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[40px] items-start relative size-full">
        <Container6 />
        <CtaSectionButton />
        <Paragraph />
      </div>
    </div>
  );
}

function LeftSideSignUpCard() {
  return (
    <div className="bg-white drop-shadow-[0px_20px_25px_rgba(0,0,0,0.04)] relative rounded-[12px] self-stretch shrink-0 w-[497px]" data-name="Left Side: Sign Up Card">
      <div aria-hidden className="absolute border border-[rgba(193,199,204,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[40px] items-start p-[49px] relative size-full">
        <WizardHeader />
        <FormStep />
      </div>
    </div>
  );
}

function StudentAccommodation() {
  return (
    <div className="absolute inset-0 mix-blend-overlay opacity-30" data-name="Student Accommodation">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-27.37%] max-w-none top-0 w-[154.75%]" src={imgStudentAccommodation} />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Cairo:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-right text-white whitespace-nowrap">
        <p className="leading-[45px] mb-0" dir="auto">
          بيئة سكنية تحفزك
        </p>
        <p className="leading-[45px] text-[#ffa454]" dir="auto">
          على الإنجاز
        </p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-end max-w-[384px] relative shrink-0 w-[384px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#749cb0] text-[18px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[28px] mb-0">نوفر لك خيارات سكنية قريبة من جامعتك، آمنة،</p>
        <p className="leading-[28px] mb-0">ومصممة لتناسب احتياجاتك الدراسية</p>
        <p className="leading-[28px]">والاجتماعية.</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-end relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Container20 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffa454] text-[24px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[32px]">+٥٠٠</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-end opacity-70 relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-right text-white whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[16px]">وحدة سكنية متاحة</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#034] col-2 justify-self-stretch relative rounded-[8px] row-1 self-start shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[16px] relative size-full">
        <Container22 />
        <Container23 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffa454] text-[24px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[32px]">+١٢</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-end opacity-70 relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-right text-white whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[16px]">جامعة مغطاة</p>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#034] col-1 justify-self-stretch relative rounded-[8px] row-1 self-start shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[16px] relative size-full">
        <Container24 />
        <Container25 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_84px] relative shrink-0 w-full" data-name="Container">
      <Background2 />
      <Background3 />
    </div>
  );
}

function Margin() {
  return (
    <div className="flex-[1_0_0] min-h-[84px] relative w-full" data-name="Margin">
      <div className="flex flex-col justify-end min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-end min-h-[inherit] pt-[396px] relative size-full">
          <Container21 />
        </div>
      </div>
    </div>
  );
}

function RightSideEditorialVisualAnchor() {
  return (
    <div className="bg-[#001d28] relative rounded-[12px] self-stretch shrink-0 w-[495px]" data-name="Right Side: Editorial/Visual Anchor">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between p-[48px] relative size-full">
          <div className="absolute bg-[rgba(144,77,0,0.1)] blur-[32px] bottom-[-80px] left-[-80px] rounded-[9999px] size-[320px]" data-name="Decorative Background Element" />
          <div className="absolute bg-[rgba(255,255,255,0.05)] blur-[20px] right-[40px] rounded-[9999px] size-[160px] top-[40px]" data-name="Overlay+Blur" />
          <StudentAccommodation />
          <Container19 />
          <Margin />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[32px] h-[750px] items-start justify-center max-w-[1024px] relative shrink-0 w-[1024px]" data-name="Container">
      <LeftSideSignUpCard />
      <RightSideEditorialVisualAnchor />
    </div>
  );
}

function MainContentCanvas() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 px-[32px] py-[48px] right-0 top-[80px]" data-name="Main Content Canvas">
      <Container />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Cairo:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#904d00] text-[20px] text-right whitespace-nowrap">
        <p className="leading-[28px]">سكني</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-end relative self-stretch shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c1c7cc] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[20px]">الشروط والأحكام</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-end relative self-stretch shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c1c7cc] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[20px]">سياسة الخصوصية</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-end relative self-stretch shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c1c7cc] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[20px]">اتصل بنا</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex gap-[32px] h-[20px] items-start relative shrink-0" data-name="Container">
      <Link />
      <Link1 />
      <Link2 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c1c7cc] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[20px]">© ٢٠٢٤ سكني. جميع الحقوق محفوظة.</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] pl-[48.02px] pr-[48px] relative size-full">
          <Container27 />
          <Container28 />
          <Container29 />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#001d28] bottom-0 content-stretch flex flex-col items-start left-0 pb-[48px] pt-[49px] right-0" data-name="Footer">
      <div aria-hidden className="absolute border-[#034] border-solid border-t inset-0 pointer-events-none" />
      <Container26 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#001d28] text-[24px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[32px]">سكني</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[32px] relative shrink-0" data-name="Margin">
      <Container31 />
    </div>
  );
}

function Container32() {
  return (
    <div className="flex items-center justify-center relative shrink-0 z-[2]">
      <div className="flex-none rotate-180">
        <div className="relative size-[16px]" data-name="Container">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <g id="Container">
              <path d={svgPaths.p1a406200} fill="var(--fill-0, #904D00)" id="Icon" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 z-[1]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#904d00] text-[16px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[24px]">العودة للرئيسية</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex gap-[8px] isolate items-center relative shrink-0" data-name="Link">
      <Container32 />
      <Container33 />
    </div>
  );
}

function Container30() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between max-w-[inherit] px-[32px] py-[24px] relative size-full">
          <Margin1 />
          <Link3 />
        </div>
      </div>
    </div>
  );
}

function HeaderTopAppBarSimplifiedForSignUpAsPerShellVisibilityRule() {
  return (
    <div className="absolute bg-[#f8f9fa] content-stretch drop-shadow-[0px_4px_20px_rgba(25,28,29,0.06)] flex flex-col items-start left-0 right-0 top-0" data-name="Header - TopAppBar (Simplified for Sign-up as per Shell Visibility Rule)">
      <Container30 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(248, 249, 250) 0%, rgb(248, 249, 250) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="إنشاء حساب جديد - سكني">
      <MainContentCanvas />
      <Footer />
      <HeaderTopAppBarSimplifiedForSignUpAsPerShellVisibilityRule />
    </div>
  );
}
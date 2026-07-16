import svgPaths from "./svg-9jio7a6r2z";
import imgProperty from "./6739ce1179abbfb8defc0a1d099350e4f5eb4852.png";
import imgStudent from "./70a0ea268c420806b4c52d7f5304dded97da60d8.png";
import imgProperty1 from "./fbc557d80500621da69231f1464e1d7b9bd049f4.png";
import imgStudent1 from "./8f0eb5982daf33afc32de53605281268b51f7251.png";

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Cairo:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#001d28] text-[30px] text-right tracking-[-0.75px] whitespace-nowrap">
        <p className="leading-[36px]">طلبات الحجز الواردة</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-end max-w-[672px] relative shrink-0 w-[672px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#41484c] text-[16px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[24px] mb-0">قم بمراجعة طلبات الطلاب المقيمين واتخاذ الإجراءات المناسبة لضمان ملء وحداتك السكنية</p>
        <p className="leading-[24px]">بأفضل المرشحين.</p>
      </div>
    </div>
  );
}

function WelcomeHeadline() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0 w-[1029px]" data-name="Welcome Headline">
      <Heading1 />
      <Container />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#fbfbfb] content-stretch flex flex-col items-center justify-center px-[24px] py-[8px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#ba1a1a] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_-0.11px_0_0] rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(186,26,26,0.2),0px_4px_6px_-4px_rgba(186,26,26,0.2)]" data-name="Button:shadow" />
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ba1a1a] text-[16px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[24px]" dir="auto">
          رفض
        </p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#22c55e] content-stretch flex flex-col items-center justify-center px-[24px] py-[8px] relative rounded-[12px] shrink-0" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(34,197,94,0.2),0px_4px_6px_-4px_rgba(34,197,94,0.2)]" data-name="Button:shadow" />
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[24px]">قبول</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Margin() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[16px] relative size-full">
        <Container1 />
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(0,29,40,0.2)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[17px] py-[9px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#001d28] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
          <p className="leading-[20px]">معاينة الملف</p>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p1fe7b600} fill="var(--fill-0, #749CB0)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#e8e8e9] relative rounded-[12px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center p-[12px] relative size-full">
        <Container2 />
      </div>
    </div>
  );
}

function Actions() {
  return (
    <div className="relative shrink-0" data-name="Actions">
      <div aria-hidden className="absolute border-[rgba(193,199,204,0.1)] border-r border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center pr-[33px] relative size-full">
        <Margin />
        <Button2 />
        <Button3 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] text-right tracking-[1px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[15px]">العقار المطلوب</p>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Heading 5">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#001d28] text-[16px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[24px] mb-0">شقة النخيل - جناح</p>
        <p className="leading-[24px]">التنفيذي A1</p>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(255,164,84,0.1)] content-stretch flex flex-col items-end px-[12px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Overlay">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#713b00] text-[10px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[15px]">معلق</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[10.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 11.6667">
        <g id="Container">
          <path d={svgPaths.p3bb7dc80} fill="var(--fill-0, #41484C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#41484c] text-[12px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[16px]">15 أكتوبر 2023</p>
      </div>
      <Container7 />
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center pl-[18.8px] pt-[4px] relative size-full">
          <Overlay />
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-[173.97px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container4 />
        <Heading3 />
        <Container5 />
      </div>
    </div>
  );
}

function Property() {
  return (
    <div className="h-[64px] max-w-[299.8299865722656px] relative rounded-[12px] shrink-0 w-[73.34px]" data-name="Property">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none rounded-[12px]">
        <img alt="" className="absolute h-[114.59%] left-0 max-w-none top-[-7.3%] w-full" src={imgProperty} />
      </div>
    </div>
  );
}

function PropertyHighlight() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Property Highlight">
      <div aria-hidden className="absolute border-[rgba(193,199,204,0.1)] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16.01px] items-center pr-[33px] relative size-full">
          <Container3 />
          <Property />
        </div>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#001d28] text-[18px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[28px]" dir="auto">
          محمد محمود
        </p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#41484c] text-[12px] text-right w-[178.2px]" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[16px]" dir="auto">
          كلية الهندسة - جامعة قنا
        </p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[15px]">(12 تقييم سابق)</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[4px] relative shrink-0" data-name="Margin">
      <Container11 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1c1d] text-[12px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[16px]">4.8</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p21398000} fill="var(--fill-0, #F59E0B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center pl-[63.25px] pt-[4px] relative size-full">
          <Margin1 />
          <Container12 />
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[178.2px]" data-name="Container">
      <Heading2 />
      <Container9 />
      <Container10 />
    </div>
  );
}

function Student() {
  return (
    <div className="pointer-events-none relative rounded-[9999px] shrink-0 size-[64px]" data-name="Student">
      <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgStudent} />
      </div>
      <div aria-hidden className="absolute border-2 border-[#e8e8e9] border-solid inset-0 rounded-[9999px]" />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Student />
      <div className="absolute bg-[#22c55e] bottom-0 left-0 rounded-[9999px] size-[16px]" data-name="Background+Border">
        <div aria-hidden className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      </div>
    </div>
  );
}

function StudentInfo() {
  return (
    <div className="min-w-[300px] relative shrink-0" data-name="Student Info">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center min-w-[inherit] pl-[41.8px] relative size-full">
        <Container8 />
        <Container14 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white col-1 h-[137px] justify-self-stretch relative rounded-[16px] row-1 shrink-0" data-name="Card 1">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-px items-center p-[25px] relative size-full">
          <Actions />
          <PropertyHighlight />
          <StudentInfo />
          <div className="absolute bg-[#ffa454] bottom-px right-px top-px w-[6px]" data-name="Status Indicator Gradient Edge" />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,31,42,0.05),0px_8px_10px_-6px_rgba(0,31,42,0.05)]" />
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#fdfdfd] content-stretch flex flex-col items-center justify-center px-[24px] py-[8px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#ba1a1a] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_-0.11px_0_0] rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(186,26,26,0.2),0px_4px_6px_-4px_rgba(186,26,26,0.2)]" data-name="Button:shadow" />
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ba1a1a] text-[16px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[24px]" dir="auto">
          رفض
        </p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#22c55e] content-stretch flex flex-col items-center justify-center px-[24px] py-[8px] relative rounded-[12px] shrink-0" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(34,197,94,0.2),0px_4px_6px_-4px_rgba(34,197,94,0.2)]" data-name="Button:shadow" />
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[24px]">قبول</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Button4 />
      <Button5 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[16px] relative size-full">
        <Container15 />
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(0,29,40,0.2)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[17px] py-[9px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#001d28] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
          <p className="leading-[20px]">معاينة الملف</p>
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p1fe7b600} fill="var(--fill-0, #749CB0)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#e8e8e9] relative rounded-[12px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center p-[12px] relative size-full">
        <Container16 />
      </div>
    </div>
  );
}

function VerticalBorder() {
  return (
    <div className="relative shrink-0" data-name="VerticalBorder">
      <div aria-hidden className="absolute border-[rgba(193,199,204,0.1)] border-r border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center pr-[33px] relative size-full">
        <Margin2 />
        <Button6 />
        <Button7 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] text-right tracking-[1px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[15px]">العقار المطلوب</p>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Heading 5">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#001d28] text-[16px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[24px] mb-0">ستوديو الملقا - الطابق</p>
        <p className="leading-[24px]">الثالث</p>
      </div>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(255,164,84,0.1)] content-stretch flex flex-col items-end px-[12px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Overlay">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#713b00] text-[10px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[15px]">معلق</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[10.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 11.6667">
        <g id="Container">
          <path d={svgPaths.p3bb7dc80} fill="var(--fill-0, #41484C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex gap-[3.99px] items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#41484c] text-[12px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[16px]">17 أكتوبر 2023</p>
      </div>
      <Container21 />
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center pl-[14.96px] pt-[4px] relative size-full">
          <Overlay1 />
          <Container20 />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 w-[169.81px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container18 />
        <Heading4 />
        <Container19 />
      </div>
    </div>
  );
}

function Property1() {
  return (
    <div className="h-[64px] max-w-[299.8299865722656px] relative rounded-[12px] shrink-0 w-[77.5px]" data-name="Property">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none rounded-[12px]">
        <img alt="" className="absolute h-[121.09%] left-0 max-w-none top-[-10.55%] w-full" src={imgProperty1} />
      </div>
    </div>
  );
}

function VerticalBorder1() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="VerticalBorder">
      <div aria-hidden className="absolute border-[rgba(193,199,204,0.1)] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center pr-[33px] relative size-full">
          <Container17 />
          <Property1 />
        </div>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#001d28] text-[18px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[28px]">سارة عبد الرحمن</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#41484c] text-[12px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[16px]">كلية الطب - جامعة نورة</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[15px]">(4 تقييمات)</p>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[4px] relative shrink-0" data-name="Margin">
      <Container26 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1c1d] text-[12px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[16px]">5.0</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p21398000} fill="var(--fill-0, #F59E0B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center pl-[42.27px] pt-[4px] relative size-full">
          <Margin3 />
          <Container27 />
          <Container28 />
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[138.86px]" data-name="Container">
      <Heading5 />
      <Container24 />
      <Container25 />
    </div>
  );
}

function Student1() {
  return (
    <div className="pointer-events-none relative rounded-[9999px] shrink-0 size-[64px]" data-name="Student">
      <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgStudent1} />
      </div>
      <div aria-hidden className="absolute border-2 border-[#e8e8e9] border-solid inset-0 rounded-[9999px]" />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Student1 />
      <div className="absolute bg-[#cbd5e1] bottom-0 left-0 rounded-[9999px] size-[16px]" data-name="Background+Border">
        <div aria-hidden className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="min-w-[300px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center min-w-[inherit] pl-[81.14px] relative size-full">
        <Container23 />
        <Container29 />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white col-1 h-[137px] justify-self-stretch relative rounded-[16px] row-2 shrink-0" data-name="Card 2">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-px items-center p-[25px] relative size-full">
          <VerticalBorder />
          <VerticalBorder1 />
          <Container22 />
          <div className="absolute bg-[#ffa454] bottom-px right-px top-px w-[6px]" data-name="Background" />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,31,42,0.05),0px_8px_10px_-6px_rgba(0,31,42,0.05)]" />
    </div>
  );
}

function BookingRequestCardsGrid() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[__137px_137px] pt-[16px] relative shrink-0 w-[1029px]" data-name="Booking Request Cards Grid">
      <Card />
      <Card1 />
    </div>
  );
}

function Container30() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="Container">
          <path d={svgPaths.p22eff180} fill="var(--fill-0, #003344)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(0,51,68,0.2)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[96px]" data-name="Overlay">
      <Container30 />
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col h-[120px] items-start pb-[24px] relative shrink-0 w-[96px]" data-name="Margin">
      <Overlay2 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[448px] px-[0.5px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#41484c] text-[16px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[24px] mb-0">لا يوجد طلبات إضافية حالياً، تأكد من توثيق شقتك وتحديث الصور</p>
        <p className="leading-[24px]">لجذب المزيد من الطلاب.</p>
      </div>
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[448px] pb-[32px] pt-[8px] relative shrink-0" data-name="Margin">
      <Container31 />
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[21px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 21">
        <g id="Container">
          <path d={svgPaths.p13774060} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#001d28] content-stretch flex gap-[8.01px] items-center px-[32px] py-[12px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_-0.01px_0_0] rounded-[9999px] shadow-[0px_20px_25px_-5px_rgba(0,29,40,0.1),0px_8px_10px_-6px_rgba(0,29,40,0.1)]" data-name="Button:shadow" />
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[24px]">وثّق عقارك الآن</p>
      </div>
      <Container32 />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#f3f3f5] max-w-[896px] relative rounded-[48px] shrink-0 w-full" data-name="Background">
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center max-w-[inherit] p-[64px] relative size-full">
          <Margin4 />
          <div className="[word-break:break-word] flex flex-col font-['Cairo:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#001d28] text-[20px] text-center whitespace-nowrap">
            <p className="leading-[28px]">هل تبحث عن المزيد من الطلبات؟</p>
          </div>
          <Margin5 />
          <Button8 />
        </div>
      </div>
    </div>
  );
}

function EmptyStateIllustrationViewDisplayedAsAFooterSectionInThisMock() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[41px] px-[120px] relative shrink-0 w-[1016px]" data-name="Empty State Illustration/View (Displayed as a footer section in this mock)">
      <div aria-hidden className="absolute border-[rgba(193,199,204,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <Background />
    </div>
  );
}

function ContentCanvas() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[952px] items-start left-0 max-w-[1280px] px-[6px] py-[32px] right-[139px] top-[72px]" data-name="Content Canvas">
      <WelcomeHeadline />
      <BookingRequestCardsGrid />
      <EmptyStateIllustrationViewDisplayedAsAFooterSectionInThisMock />
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p164b49c0} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container34 />
      <div className="absolute bg-[#ba1a1a] right-[7.98px] rounded-[9999px] size-[8px] top-[8px]" data-name="Background" />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-end min-w-px overflow-clip relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[normal]">بحث في الطلبات...</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#f3f3f5] content-stretch flex items-start justify-center overflow-clip px-[24px] py-[9px] relative rounded-[9999px] shrink-0 w-[338px]" data-name="Input">
      <Container36 />
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute bottom-[16.67%] content-stretch flex flex-col items-start left-[16px] top-[16.67%]" data-name="Container">
      <div className="relative shrink-0 size-[18px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p8a35e00} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <Input />
      <Container37 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Button9 />
      <Container35 />
    </div>
  );
}

function Button10() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[16px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[24px]">مرفوض</p>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[16px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[24px]">مقبول</p>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[16px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[24px]">معلق</p>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[4px] relative shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[#f2994a] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f2994a] text-[16px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[24px]">الكل</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#f3f3f5] content-stretch flex gap-[24px] items-center px-[16px] py-[6px] relative rounded-[9999px] shrink-0" data-name="Background">
      <Button10 />
      <Button11 />
      <Button12 />
      <Button13 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Cairo:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#001d28] text-[24px] text-right whitespace-nowrap">
        <p className="leading-[32px]">طلبات الحجز</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Container">
      <Background1 />
      <Heading />
    </div>
  );
}

function HeaderTopAppBar() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(255,255,255,0.8)] content-stretch flex items-center justify-between left-0 px-[32px] py-[16px] right-[139px] top-0" data-name="Header - TopAppBar">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 shadow-[0px_10px_15px_-3px_rgba(0,31,42,0.05),0px_4px_6px_-4px_rgba(0,31,42,0.05)]" data-name="Header - TopAppBar:shadow" />
      <Container33 />
      <Container38 />
    </div>
  );
}

function MainContentArea() {
  return (
    <div className="absolute h-[1024px] left-0 top-0 w-[1200px]" data-name="Main Content Area">
      <ContentCanvas />
      <HeaderTopAppBar />
    </div>
  );
}

function Container41() {
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

function Container42() {
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

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[103.94px]" data-name="Container">
      <Container41 />
      <Container42 />
    </div>
  );
}

function Container43() {
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

function Background2() {
  return (
    <div className="bg-[#f2994a] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" data-name="Background">
      <Container43 />
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[44px] items-center left-0 pl-[49px] right-0 top-[10px]" data-name="Container">
      <Container40 />
      <Background2 />
    </div>
  );
}

function Margin6() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Margin">
      <Container39 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[20px]" dir="auto">
          لوحة التحكم
        </p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p191dcc80} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function LinkActiveDashboard() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Link - Active: Dashboard">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[15.99px] items-center pl-[76.88px] pr-[16px] py-[12px] relative size-full">
          <Container44 />
          <Container45 />
        </div>
      </div>
    </div>
  );
}

function Container46() {
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

function Container47() {
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
          <Container46 />
          <Container47 />
        </div>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#f2994a] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[20px]" dir="auto">
          طلبات الانتظار
        </p>
      </div>
    </div>
  );
}

function Container49() {
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

function Link1() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[12px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center pl-[64.17px] pr-[16px] py-[12px] relative size-full">
          <Container48 />
          <Container49 />
        </div>
      </div>
    </div>
  );
}

function Container50() {
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

function Container51() {
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
          <Container50 />
          <Container51 />
        </div>
      </div>
    </div>
  );
}

function Container52() {
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

function Container53() {
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

function Frame2() {
  return (
    <div className="content-stretch flex gap-[27px] items-end relative shrink-0">
      <Container52 />
      <Container53 />
    </div>
  );
}

function Link3() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[90.06px] pr-[16px] py-[12px] relative size-full">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Container54() {
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

function Container55() {
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

function Frame3() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center left-[51.06px] top-[12px]">
      <Container54 />
      <Container55 />
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[44px] relative rounded-[12px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[90.06px] pr-[16px] py-[12px] relative size-full">
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Container56() {
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

function Container57() {
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
          <Container56 />
          <Container57 />
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

function Container58() {
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

function Button14() {
  return (
    <div className="bg-[#f2994a] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center justify-center py-[12px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#001d28] text-[14px] text-center w-[149.11px]" style={{ fontVariationSettings: '"HEXP" 0' }}>
          <p className="leading-[20px]" dir="auto">
            إضافة سكن جديد
          </p>
        </div>
        <Container58 />
      </div>
    </div>
  );
}

function Container60() {
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

function Container61() {
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

function Container59() {
  return (
    <div className="h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.99px] items-center pl-[79.19px] pr-[16px] py-[12px] relative size-full">
          <Container60 />
          <Container61 />
        </div>
      </div>
    </div>
  );
}

function Container63() {
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

function Container64() {
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

function Container62() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.99px] items-center pl-[115.83px] pr-[16px] py-[12px] relative size-full">
          <Container63 />
          <Container64 />
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pb-[16px] pt-[17px] px-[16px] relative shrink-0 w-[255px]" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.05)] border-solid border-t inset-0 pointer-events-none" />
      <Button14 />
      <Container59 />
      <Container62 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-0">
      <HorizontalBorder />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col h-[193px] items-center justify-center p-[10px] relative shrink-0 w-[255px]">
      <Frame1 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(249, 249, 251) 0%, rgb(249, 249, 251) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="الطلبات والحجز">
      <MainContentArea />
      <div className="absolute bg-gradient-to-b content-stretch flex flex-col from-[#034] gap-[32px] h-[1024px] items-center left-[1066px] p-[24px] to-[#001d28] top-0 w-[256px]" data-name="Aside - SideNavBar">
        <div className="absolute bg-[rgba(255,255,255,0)] h-[1024px] right-0 shadow-[0px_25px_50px_-12px_rgba(0,31,42,0.2)] top-0 w-[256px]" data-name="Aside - SideNavBar:shadow" />
        <Margin6 />
        <Nav />
        <Frame />
      </div>
    </div>
  );
}
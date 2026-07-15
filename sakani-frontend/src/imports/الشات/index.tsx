import svgPaths from "./svg-03fldt9lva";
import img from "./f3192a71f6b9e1735f71dc77ef230ba26f36c174.png";
import img1 from "./8c8790704c1455a6ed45eb8a2db43d05a204ea79.png";
import img2 from "./9af79686d9f1bc99218683537f4b5a9c3ead95df.png";
import img3 from "./31f479756296e1184890b5b0b3a32353cf568817.png";
import img4 from "./3069ca25228d1ab6ad9b50422bddcf32cd7a60e6.png";
import img5 from "./a30ee74f5ae5768420c1c28e389d5b4e44a93fed.png";
import imgAb6AXuDEyPphhl8VagdOtkw4ElyAcPypxBf3Cal2YEelFxdiUXj6FRstRiOgyW0QuK26KnldTu3EK4EnmBslm0QcwYjSoipRfzacL1YrJYcbGdPrj3Mgv3Lwr03YaxEklPvlprLxLvSbfJcLo4Ppfy4GmsSWaWz5QFHrsS4QNA5PBRxv4GrQlu99BxjeVjs9O28FQcD9ODDuJc3Prh4QsAjSWzvO5QicLj3RxTsLe13AwCbxvm0TlIzNv3IfTfxQlWpZqaaEcKms from "./6d6d7891d64b112da4a33953ffa21d80dbef6d00.png";
import img6 from "./51cfc89bdbcc05176df462f894d600465458a2fd.png";

function Overlay() {
  return (
    <div className="bg-[rgba(242,153,74,0.1)] content-stretch flex flex-col items-end px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Overlay">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#f2994a] text-[10px] text-right tracking-[-0.5px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[15px]">4 نشطة</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Cairo:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#001d28] text-[24px] text-right whitespace-nowrap">
        <p className="leading-[32px]">المحادثات</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-[182px]" data-name="Container">
      <Overlay />
      <Heading />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-end min-w-px overflow-clip relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[8px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[normal]" dir="auto">
          البحث في الطلاب...
        </p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-[#f3f3f5] content-stretch flex gap-[9px] h-[39px] items-start justify-center left-0 overflow-clip pl-[16px] pr-[22px] py-[13px] right-0 rounded-[16px] top-0" data-name="Input">
      <Container3 />
      <div className="relative shrink-0 size-[13.5px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 13.5">
          <path d={svgPaths.p2500af80} fill="var(--fill-0, #71787C)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container4() {
  return <div className="absolute h-[24.818px] left-[16px] top-[7px] w-[13.5px]" data-name="Container" />;
}

function Container2() {
  return (
    <div className="h-[39px] relative shrink-0 w-full" data-name="Container">
      <Input />
      <Container4 />
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-center justify-center pb-[16px] pt-[32px] px-[32px] relative size-full">
          <Container1 />
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#71787c] text-[8px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[15px]" dir="auto">
          10:52 ص
        </p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-end overflow-clip relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Cairo:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#001d28] text-[16px] text-right whitespace-nowrap">
        <p className="leading-[24px]" dir="auto">
          عمر
        </p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[33px] items-center justify-end relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Heading1 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-end overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#41484c] text-[10px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[16px]" dir="auto">
          شارك موقعاً معك...
        </p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container7 />
        <Container9 />
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="relative rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 size-[56px]" data-name="عمر">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img} />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Component1 />
        <div className="absolute bg-[#f2994a] left-[-4px] rounded-[9999px] size-[16px] top-[-4px]" data-name="Background+Border">
          <div aria-hidden className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
        </div>
      </div>
    </div>
  );
}

function ActiveItem() {
  return (
    <div className="bg-[rgba(243,243,245,0.5)] relative rounded-[12px] shrink-0 w-full" data-name="Active Item">
      <div aria-hidden className="absolute border-[#f2994a] border-l-4 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center pl-[4px] pr-px py-[16px] relative size-full">
          <Container6 />
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#71787c] text-[8px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[15px]" dir="auto">
          أمس
        </p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-end overflow-clip relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Cairo:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#001d28] text-[16px] text-right whitespace-nowrap">
        <p className="leading-[24px]">سارة أحمد</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Heading2 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-end overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#71787c] text-[8px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[16px]" dir="auto">
          هل العربون مسترد؟
        </p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Container">
      <Container12 />
      <Container14 />
    </div>
  );
}

function Component2() {
  return (
    <div className="relative rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 size-[56px]" data-name="سارة">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[16px]">
        <div className="absolute inset-0 overflow-hidden rounded-[16px]">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img1} />
        </div>
        <div className="absolute bg-white inset-0 mix-blend-saturation rounded-[16px]" />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Component2 />
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex gap-[10px] items-center py-[16px] relative rounded-[12px] shrink-0 w-full" data-name="Item 2">
      <div className="bg-[#f2994a] relative rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
      <Container11 />
      <Container15 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#71787c] text-[8px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[15px]" dir="auto">
          الإثنين
        </p>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-end overflow-clip relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Cairo:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#001d28] text-[16px] text-right whitespace-nowrap">
        <p className="leading-[24px]">خالد منصور</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[111px]" data-name="Container">
      <Container18 />
      <Heading3 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-end overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#71787c] text-[8px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[16px]" dir="auto">
          ممتاز، سأرسل المستندات قريباً.
        </p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Container">
      <Container17 />
      <Container19 />
    </div>
  );
}

function Component3() {
  return (
    <div className="relative rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 size-[56px]" data-name="خالد">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[16px]">
        <div className="absolute inset-0 overflow-hidden rounded-[16px]">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img2} />
        </div>
        <div className="absolute bg-white inset-0 mix-blend-saturation rounded-[16px]" />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Component3 />
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center py-[16px] relative rounded-[12px] shrink-0 w-full" data-name="Item 3">
      <Container16 />
      <Container20 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#71787c] text-[8px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[15px]" dir="auto">
          20 أكتوبر
        </p>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-end overflow-clip relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Cairo:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#001d28] text-[12px] text-right whitespace-nowrap">
        <p className="leading-[24px]" dir="auto">
          ليلى إبراهيم
        </p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container23 />
      <Heading4 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-end overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#71787c] text-[8px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[16px]" dir="auto">
          هل يمكننا تحديد موعد للمكالمة؟
        </p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Container">
      <Container22 />
      <Container24 />
    </div>
  );
}

function Component4() {
  return (
    <div className="relative rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 size-[56px]" data-name="ليلى">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[16px]">
        <div className="absolute inset-0 overflow-hidden rounded-[16px]">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img3} />
        </div>
        <div className="absolute bg-white inset-0 mix-blend-saturation rounded-[16px]" />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Component4 />
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center py-[16px] relative rounded-[12px] shrink-0 w-full" data-name="Item 4">
      <Container21 />
      <Container25 />
    </div>
  );
}

function ConversationList() {
  return (
    <div className="relative shrink-0 w-full" data-name="Conversation List">
      <div className="content-stretch flex flex-col gap-[4px] items-start px-[16px] py-[8px] relative size-full">
        <ActiveItem />
        <Item />
        <Item1 />
        <Item2 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ConversationList />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full" />
      </div>
    </div>
  );
}

function MiniUserCard() {
  return (
    <div className="absolute bg-[#f3f3f5] content-stretch flex flex-col items-start left-[16px] p-[25px] right-[16px] rounded-[16px] top-[16px]" data-name="Mini User Card">
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[16px]" />
      <Container26 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#71787c] text-[10px] text-right tracking-[-0.5px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[15px]">حالة المالك</p>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#001d28] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[20px]">مالك موثق</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[57px] top-1/2 w-[69.5px]" data-name="Container">
      <Container28 />
      <Heading5 />
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p1f291c80} fill="var(--fill-0, #F2994A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#001d28] content-stretch flex items-center justify-center left-[142.5px] rounded-[12px] size-[48px] top-1/2" data-name="Background">
      <Container29 />
    </div>
  );
}

function MiniUserCardMargin() {
  return (
    <div className="h-[130px] relative shrink-0 w-full" data-name="Mini User Card:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <MiniUserCard />
        <Container27 />
        <Background />
      </div>
    </div>
  );
}

function AsideSidebarConversationsRightSide() {
  return (
    <div className="bg-white content-stretch flex flex-col h-full items-start pr-px relative shrink-0 w-[219px] z-[2]" data-name="Aside - Sidebar Conversations (Right Side)">
      <div aria-hidden className="absolute border-[rgba(193,199,204,0.1)] border-r border-solid inset-0 pointer-events-none" />
      <Container />
      <Container5 />
      <MiniUserCardMargin />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#eeeeef] relative rounded-[9999px] self-stretch shrink-0" data-name="Background">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col items-end px-[16px] py-[4px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#71787c] text-[10px] text-right tracking-[1px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
            <p className="leading-[15px]">اليوم، 24 أكتوبر</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TimestampSeparator() {
  return (
    <div className="content-stretch flex h-[23px] items-start justify-center relative shrink-0 w-full" data-name="Timestamp separator">
      <Background1 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c1d] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[22.75px]">السلام عليكم، هل الشقة ما زالت متوفرة؟ وهل يمكنني معاينتها غداً؟</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#71787c] text-[10px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[15px]">10:45 ص</p>
      </div>
    </div>
  );
}

function OverlayShadowOverlayBlur() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(226,226,228,0.5)] content-stretch flex flex-col gap-[8px] items-start p-[20px] relative rounded-bl-[16px] rounded-tl-[16px] rounded-tr-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-[444.48px]" data-name="Overlay+Shadow+OverlayBlur">
      <Container30 />
      <Container31 />
    </div>
  );
}

function Component5() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="عمر">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img4} />
      </div>
    </div>
  );
}

function OverlayShadow() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 size-[32px]" data-name="Overlay+Shadow">
      <Component5 />
    </div>
  );
}

function StudentMessage() {
  return (
    <div className="max-w-[639.2000122070312px] relative shrink-0 w-full" data-name="Student Message">
      <div className="flex flex-row items-end max-w-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-end max-w-[inherit] pl-[95.52px] relative size-full">
          <OverlayShadowOverlayBlur />
          <OverlayShadow />
        </div>
      </div>
    </div>
  );
}

function StudentMessageMargin() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[639.2000122070312px] pt-[24px] relative shrink-0 w-[588px]" data-name="Student Message:margin">
      <StudentMessage />
    </div>
  );
}

function Component6() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="المالك">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img5} />
      </div>
    </div>
  );
}

function OverlayShadow1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 size-[32px]" data-name="Overlay+Shadow">
      <Component6 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-right text-white whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[22.75px]">أهلاً بك عمر. نعم، الشقة لا تزال متاحة. الشقة مجهزة بالكامل وتناسب الطلاب.</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[7.015px] relative shrink-0 w-[12.775px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.775 7.01458">
        <g id="Container">
          <path d={svgPaths.pfb5e518} fill="var(--fill-0, #F2994A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.6)] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[15px]">10:52 ص</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-end pr-[401.84px] relative size-full">
          <Container34 />
          <Container35 />
        </div>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#001d28] content-stretch flex flex-col gap-[8px] items-start p-[20px] relative rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0_0.25px_0] shadow-[0px_10px_15px_-3px_rgba(0,29,40,0.1),0px_4px_6px_-4px_rgba(0,29,40,0.1)]" data-name="Overlay+Shadow" />
      <Container32 />
      <Container33 />
    </div>
  );
}

function OwnerMessage() {
  return (
    <div className="content-stretch flex gap-[16px] items-end max-w-[639.2000122070312px] relative shrink-0" data-name="Owner Message">
      <OverlayShadow1 />
      <Background2 />
    </div>
  );
}

function OwnerMessageMargin() {
  return (
    <div className="content-stretch flex flex-col items-end max-w-[639.2000122070312px] pt-[24px] relative shrink-0" data-name="Owner Message:margin">
      <OwnerMessage />
    </div>
  );
}

function OwnerMessageMarginAlignFlexEnd() {
  return (
    <div className="relative shrink-0 w-full" data-name="Owner Message:margin:align-flex-end">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col items-end pr-[184.59px] relative size-full">
          <OwnerMessageMargin />
        </div>
      </div>
    </div>
  );
}

function Container36() {
  return <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="Container" />;
}

function Ab6AXuDEyPphhl8VagdOtkw4ElyAcPypxBf3Cal2YEelFxdiUXj6FRstRiOgyW0QuK26KnldTu3EK4EnmBslm0QcwYjSoipRfzacL1YrJYcbGdPrj3Mgv3Lwr03YaxEklPvlprLxLvSbfJcLo4Ppfy4GmsSWaWz5QFHrsS4QNA5PBRxv4GrQlu99BxjeVjs9O28FQcD9ODDuJc3Prh4QsAjSWzvO5QicLj3RxTsLe13AwCbxvm0TlIzNv3IfTfxQlWpZqaaEcKms() {
  return (
    <div className="flex-[1_0_0] min-h-px opacity-80 relative w-full" data-name="AB6AXuDEyPphhl8VAGDOtkw4ELYAcPYPXBf3Cal2yEelFxdiUXj6FRstRIOgy__W0Qu_k26knldTU3eK4enmBSLM0QCWYjSoipRfzacL1yrJYcbGdPRJ3MGV3LWR03YAXEklPvlprLXLvSbfJCLo4Ppfy4GmsSWaWz5qF_HrsS4q_nA5pB-rxv4GrQlu99bxjeVJS9o28FQcD9oDDuJc3Prh4qsAjSWzvO5qic-_lj3RxTsLE13awCBXVM0TlIZNv3IfTfxQLWpZQAAEcKms">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[198.44%] left-0 max-w-none top-[-49.22%] w-full" src={imgAb6AXuDEyPphhl8VagdOtkw4ElyAcPypxBf3Cal2YEelFxdiUXj6FRstRiOgyW0QuK26KnldTu3EK4EnmBslm0QcwYjSoipRfzacL1YrJYcbGdPrj3Mgv3Lwr03YaxEklPvlprLxLvSbfJcLo4Ppfy4GmsSWaWz5QFHrsS4QNA5PBRxv4GrQlu99BxjeVjs9O28FQcD9ODDuJc3Prh4QsAjSWzvO5QicLj3RxTsLe13AwCbxvm0TlIzNv3IfTfxQlWpZqaaEcKms} />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[30px] relative shrink-0 w-[24px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 30">
        <g id="Container">
          <path d={svgPaths.p2e497c80} fill="var(--fill-0, #F2994A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex inset-0 items-center justify-center" data-name="Container">
      <Container38 />
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#cbd5e1] h-[128px] relative shrink-0 w-full z-[2]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <Ab6AXuDEyPphhl8VagdOtkw4ElyAcPypxBf3Cal2YEelFxdiUXj6FRstRiOgyW0QuK26KnldTu3EK4EnmBslm0QcwYjSoipRfzacL1YrJYcbGdPrj3Mgv3Lwr03YaxEklPvlprLxLvSbfJcLo4Ppfy4GmsSWaWz5QFHrsS4QNA5PBRxv4GrQlu99BxjeVjs9O28FQcD9ODDuJc3Prh4QsAjSWzvO5QicLj3RxTsLe13AwCbxvm0TlIzNv3IfTfxQlWpZqaaEcKms />
        <Container37 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-right text-white whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[16px]">مجمع النخيل السكني</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.6)] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[15px]">اضغط لفتح خرائط جوجل</p>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#001d28] relative shrink-0 w-full z-[1]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[16px] relative size-full">
        <Container39 />
        <Container40 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-[#001d28] relative rounded-[16px] shrink-0 w-[256px]" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Background3 />
        <Background4 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function SharedLocationPlaceholderVisualComponent() {
  return (
    <div className="content-stretch flex gap-[16px] items-end max-w-[639.2000122070312px] relative shrink-0" data-name="Shared Location Placeholder (Visual Component)">
      <Container36 />
      <BackgroundBorderShadow />
    </div>
  );
}

function SharedLocationPlaceholderVisualComponentMargin() {
  return (
    <div className="content-stretch flex flex-col items-end max-w-[639.2000122070312px] pt-[24px] relative shrink-0" data-name="Shared Location Placeholder (Visual Component):margin">
      <SharedLocationPlaceholderVisualComponent />
    </div>
  );
}

function SharedLocationPlaceholderVisualComponentMarginAlignFlexEnd() {
  return (
    <div className="relative shrink-0 w-full" data-name="Shared Location Placeholder (Visual Component):margin:align-flex-end">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col items-end pr-[431px] relative size-full">
          <SharedLocationPlaceholderVisualComponentMargin />
        </div>
      </div>
    </div>
  );
}

function ChatCanvas() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[96px_0_164px_1px] items-end overflow-clip p-[32px]" data-name="Chat Canvas">
      <TimestampSeparator />
      <StudentMessageMargin />
      <OwnerMessageMarginAlignFlexEnd />
      <SharedLocationPlaceholderVisualComponentMarginAlignFlexEnd />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#f3f3f5] content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#001d28] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[16px]">شكراً لتواصلك</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#f3f3f5] content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#001d28] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[16px]">تم إرسال الموقع</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#f3f3f5] content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#001d28] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[16px]">متاح للمعاينة غداً</p>
      </div>
    </div>
  );
}

function QuickReplies() {
  return (
    <div className="relative shrink-0 w-full" data-name="Quick Replies">
      <div className="content-stretch flex gap-[8px] items-start pl-[374.34px] relative size-full">
        <Button />
        <Button1 />
        <Button2 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[16px] relative shrink-0 w-[19px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 16">
        <g id="Container">
          <path d={svgPaths.pb36e280} fill="var(--fill-0, #001D28)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#f2994a] relative rounded-[12px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center p-[12px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_-0.02px_0_0] rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(242,153,74,0.2),0px_2px_4px_-2px_rgba(242,153,74,0.2)]" data-name="Button:shadow" />
        <Container41 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-end overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(113,120,124,0.5)] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[normal]">اكتب رسالتك هنا...</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[12px] py-[9px] relative size-full">
          <Container42 />
        </div>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[20px] relative shrink-0 w-[12.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 20">
        <g id="Container">
          <path d={svgPaths.p2fe31000} fill="var(--fill-0, #71787C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
        <Container43 />
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p1f25e00} fill="var(--fill-0, #71787C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
        <Container44 />
      </div>
    </div>
  );
}

function InputArea() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[16px] shrink-0 w-full" data-name="Input Area">
      <div aria-hidden className="absolute border-2 border-[#eeeeef] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center pl-[18px] pr-[10px] py-[10px] relative size-full">
          <Button3 />
          <Input1 />
          <Button4 />
          <Button5 />
        </div>
      </div>
    </div>
  );
}

function FooterActionBar() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[16px] items-start left-px p-[24px] right-0 top-[860px]" data-name="Footer - Action Bar">
      <QuickReplies />
      <InputArea />
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[16px] relative shrink-0 w-[4px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 16">
        <g id="Container">
          <path d={svgPaths.p3caf0c80} fill="var(--fill-0, #71787C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[12px] relative rounded-[12px] shrink-0" data-name="Button">
      <Container46 />
    </div>
  );
}

function Container47() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p143e1930} fill="var(--fill-0, #71787C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[12px] relative rounded-[12px] shrink-0" data-name="Button">
      <Container47 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Button6 />
      <Button7 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-end mb-[-0.5px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Cairo:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#001d28] text-[16px] text-right whitespace-nowrap">
        <p className="leading-[20px]">استوديو النخيل المتميز</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Readex_Pro:Regular',sans-serif] font-normal isolate items-start justify-end leading-[0] relative shrink-0 text-[12px] text-right w-full whitespace-nowrap" data-name="Paragraph">
      <div className="flex flex-col justify-center relative shrink-0 text-[#001d28] z-[2]" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[16px]">عمر الفاسي</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#749cb0] z-[1]" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[16px]">{`استفسار عن: `}</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[161.45px]" data-name="Container">
      <Heading6 />
      <Paragraph />
    </div>
  );
}

function Component7() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="استوديو النخيل الفاخر">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img6} />
      </div>
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="bg-[#eeeeef] relative rounded-[16px] shrink-0 size-[56px]" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Component7 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Container">
      <Container49 />
      <BackgroundBorderShadow1 />
    </div>
  );
}

function HeaderContextBar() {
  return (
    <div className="absolute bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex h-[96px] items-center justify-between left-px px-[32px] right-0 top-0" data-name="Header - Context Bar">
      <Container45 />
      <Container48 />
    </div>
  );
}

function SectionChatAreaLeftSide() {
  return (
    <div className="bg-[#f9f9fb] flex-[1_0_0] h-full min-w-px relative z-[1]" data-name="Section - Chat Area (Left Side)">
      <div aria-hidden className="absolute border-[rgba(193,199,204,0.1)] border-l border-solid inset-0 pointer-events-none" />
      <ChatCanvas />
      <FooterActionBar />
      <HeaderContextBar />
    </div>
  );
}

function MainContentShell() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full isolate items-start min-w-px overflow-clip relative" data-name="Main Content Shell">
      <AsideSidebarConversationsRightSide />
      <SectionChatAreaLeftSide />
    </div>
  );
}

function Container52() {
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

function Container53() {
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

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[103.94px]" data-name="Container">
      <Container52 />
      <Container53 />
    </div>
  );
}

function Container54() {
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

function Background5() {
  return (
    <div className="bg-[#f2994a] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" data-name="Background">
      <Container54 />
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[44px] items-center left-0 pl-[49px] right-0 top-[10px]" data-name="Container">
      <Container51 />
      <Background5 />
    </div>
  );
}

function Margin() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Margin">
      <Container50 />
    </div>
  );
}

function Container55() {
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

function Container56() {
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
          <Container55 />
          <Container56 />
        </div>
      </div>
    </div>
  );
}

function Container57() {
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

function Container58() {
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
          <Container57 />
          <Container58 />
        </div>
      </div>
    </div>
  );
}

function Container59() {
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

function Container60() {
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
          <Container59 />
          <Container60 />
        </div>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#f2994a] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[20px]" dir="auto">
          المحادثات
        </p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p1c483e80} fill="var(--fill-0, #F2994A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[12px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center pl-[90.06px] pr-[16px] py-[12px] relative size-full">
          <Container61 />
          <Container62 />
        </div>
      </div>
    </div>
  );
}

function Container63() {
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

function Container64() {
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
      <Container63 />
      <Container64 />
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

function Container65() {
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

function Container66() {
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
      <Container65 />
      <Container66 />
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

function Container67() {
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

function Container68() {
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
          <Container67 />
          <Container68 />
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

function Container69() {
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

function Button8() {
  return (
    <div className="bg-[#f2994a] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center justify-center py-[12px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#001d28] text-[14px] text-center w-[149.11px]" style={{ fontVariationSettings: '"HEXP" 0' }}>
          <p className="leading-[20px]" dir="auto">
            إضافة سكن جديد
          </p>
        </div>
        <Container69 />
      </div>
    </div>
  );
}

function Container71() {
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

function Container72() {
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

function Container70() {
  return (
    <div className="h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.99px] items-center pl-[79.19px] pr-[16px] py-[12px] relative size-full">
          <Container71 />
          <Container72 />
        </div>
      </div>
    </div>
  );
}

function Container74() {
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

function Container75() {
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

function Container73() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.99px] items-center pl-[115.83px] pr-[16px] py-[12px] relative size-full">
          <Container74 />
          <Container75 />
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pb-[16px] pt-[17px] px-[16px] relative shrink-0 w-[255px]" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.05)] border-solid border-t inset-0 pointer-events-none" />
      <Button8 />
      <Container70 />
      <Container73 />
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
    <div className="content-stretch flex items-start justify-center relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(249, 249, 251) 0%, rgb(249, 249, 251) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="الشات">
      <MainContentShell />
      <div className="bg-gradient-to-b content-stretch flex flex-col from-[#034] gap-[32px] h-[1024px] items-center p-[24px] relative shrink-0 to-[#001d28] w-[256px]" data-name="Aside - SideNavBar">
        <div className="absolute bg-[rgba(255,255,255,0)] h-[1024px] right-0 shadow-[0px_25px_50px_-12px_rgba(0,31,42,0.2)] top-0 w-[256px]" data-name="Aside - SideNavBar:shadow" />
        <Margin />
        <Nav />
        <Frame />
      </div>
    </div>
  );
}
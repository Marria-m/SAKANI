import svgPaths from "./svg-qiknafy39p";
import imgOwnerProfile from "./ff14c0cd59cb1218e945e9742d72558eeb90d5bd.png";
import imgAb6AXuDpaVlDJkG7X6EfPxVcKbwO2N0ULe9TuRTeDp4GvUy3Epo10Wo7UTdK6IEezIcsryGx07QrKDu14Yd6IZvvu1R0FqWwNsf6YfDPd2PkFCqTihiEvmKjhA5GVNysL9UxThg6UUigPmYUdmYnKoMbAcYtbR84QzztnSvqe88FfRpa93OpL6Xs7RxDv9VYtC3FOduWYtkSs4Jd58LRPo45Bu88WXlwSAco52P3NXImt3BkuWHvRvwNj0V6L5VCr1ZnpKXMn from "./bea84cde5ebf5e8b7e1b1323d9182f5b498860ef.png";
import imgAb6AXuCDnlsDWyUuOc5W6FecB7IgZeMDind3A3QcrPxHbYuGkKV8V59CfqSzxs1LIyJlar5FFYaQnmd31RjKYpFuXzKotZ72WKvQGp8UiPwnX5Kh4VD2A0U4BAP7QTc4Xy7Q5S1Ekx6NVcoa9Mxq1LzOt2RmPy9G3A7AhGOpVcAkYq3Qgj9Q2McdGebQxcLCr2EZemrUiYzDiKi6X3RiXjltlEaewiwc9H5LlU2GksYKicu9JTryXc8Bki00T273RogVrwMvCl from "./b48e318818940a73b81bafb39cf229c8d30cdcbe.png";
import imgAb6AXuAzBj4Hi7IN1Sngrw99XqZsWeld62Yu8QTcXoinnrbGkYAo5QDeMev1Mh90EoGJkBy1KfLa3RwVfAxXythjdxWa16QkQg8YZsxh5SceGrpszP3IMrn5VmHae58MoM9E8YcmlwYhpBes80SJrCr1CmbgJy1Tj2YP38ZZ9JiIomNlNb2HbTz9VUkNg2HwmKtuEsH8GyklUgx12JhTOrvltyAyxdwcMSqAZwkHiQ4MmEnGdDb1YXi2DlOaaGlQDbjraC5PTiVzTzH4 from "./6131fcdae07eaca920b08b2f32c040bc98f6a66c.png";

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
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Cairo:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#001d28] text-[30px] text-right tracking-[-0.75px] whitespace-nowrap">
        <p className="leading-[36px]">إدارة العقارات</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#41484c] text-[16px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[24px]">تتبع وحداتك، حالات الإيجار، والطلبات الجديدة</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container7 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[193.09px]" data-name="Container">
      <Heading />
      <Margin />
    </div>
  );
}

function TopAppBarStyleHeaderSection() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="TopAppBar-style Header Section">
      <Container />
      <Container6 />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[12px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
        <g id="Container">
          <path d={svgPaths.p2889b5c0} fill="var(--fill-0, #001D28)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#f3f3f5] content-stretch flex items-center justify-center left-[-5.8px] p-[12px] rounded-[12px] top-1/2" data-name="Button">
      <Container9 />
    </div>
  );
}

function Button2() {
  return (
    <div className="-translate-y-1/2 absolute bg-white content-stretch flex flex-col items-center justify-center left-[50.22px] px-[24px] py-[12px] rounded-[12px] top-1/2" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#41484c] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[20px]">قيد التوثيق (1)</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="-translate-y-1/2 absolute bg-white content-stretch flex flex-col items-center justify-center left-[196.02px] px-[24px] py-[12px] rounded-[12px] top-1/2" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#41484c] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[20px]">مسودة (2)</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="-translate-y-1/2 absolute bg-white content-stretch flex flex-col items-center justify-center left-[318.02px] px-[24px] py-[12px] rounded-[12px] top-1/2" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#41484c] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[20px]">محجوز (4)</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="-translate-y-1/2 absolute bg-white content-stretch flex flex-col items-center justify-center left-[441.11px] px-[24px] py-[12px] rounded-[12px] top-1/2" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#41484c] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[20px]">نشط (12)</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#001d28] content-stretch flex flex-col items-center justify-center left-[557.5px] px-[24px] py-[12px] rounded-[12px] top-1/2" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[20px]">الكل</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="col-[1/span_8] h-[48px] justify-self-stretch overflow-clip relative row-1 self-center shrink-0" data-name="Container">
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-end min-w-px overflow-clip relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[normal]">ابحث عن عقار...</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white relative rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pl-[16px] pr-[48px] py-[17px] relative size-full">
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bottom-[26.92%] content-stretch flex flex-col items-start right-[16px] top-[26.92%]" data-name="Container">
      <div className="relative shrink-0 size-[18px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p8a35e00} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="col-[9/span_4] content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <Input />
      <Container12 />
    </div>
  );
}

function BentoFilterBar() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_52px] pt-[8px] relative shrink-0 w-full" data-name="Bento Filter Bar">
      <Container8 />
      <Container10 />
    </div>
  );
}

function Ab6AXuDpaVlDJkG7X6EfPxVcKbwO2N0ULe9TuRTeDp4GvUy3Epo10Wo7UTdK6IEezIcsryGx07QrKDu14Yd6IZvvu1R0FqWwNsf6YfDPd2PkFCqTihiEvmKjhA5GVNysL9UxThg6UUigPmYUdmYnKoMbAcYtbR84QzztnSvqe88FfRpa93OpL6Xs7RxDv9VYtC3FOduWYtkSs4Jd58LRPo45Bu88WXlwSAco52P3NXImt3BkuWHvRvwNj0V6L5VCr1ZnpKXMn() {
  return (
    <div className="h-[198.48px] relative shrink-0 w-full" data-name="AB6AXuDPAVlDJkG7X6EfPXVcKBW_o2-N0uLe9tu-rTeDP4GvUy3EPO10WO7UTdK6iEEZIcsryGx07QrKDu-14Yd6iZvvu1R0FqWwNSF-6yfDPd2pkFCqTIHIEvmKjhA5gVNysL9uxTHG6uUIGPmYUdmYnKOMbAcYTB-R84qzztnSVQE88FFRpa93OpL6XS7rxDv9vYtC3FOduWYtkSS4jd58l_rPo45bu88wXlwSAco52p3nXImt-3bkuWHvRVW-Nj0v6L5VCr1ZnpK_X-MN">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[133.34%] left-0 max-w-none top-[-16.67%] w-full" src={imgAb6AXuDpaVlDJkG7X6EfPxVcKbwO2N0ULe9TuRTeDp4GvUy3Epo10Wo7UTdK6IEezIcsryGx07QrKDu14Yd6IZvvu1R0FqWwNsf6YfDPd2PkFCqTihiEvmKjhA5GVNysL9UxThg6UUigPmYUdmYnKoMbAcYtbR84QzztnSvqe88FfRpa93OpL6Xs7RxDv9VYtC3FOduWYtkSs4Jd58LRPo45Bu88WXlwSAco52P3NXImt3BkuWHvRvwNj0V6L5VCr1ZnpKXMn} />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[14px] relative shrink-0 w-[14.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 14">
        <g id="Container">
          <path d={svgPaths.p3c0a9100} fill="var(--fill-0, #001D28)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function OverlayOverlayBlur() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(242,153,74,0.9)] relative rounded-[8px] self-stretch shrink-0" data-name="Overlay+OverlayBlur">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[6px] relative size-full">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_-0.33px_0_0] rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#22c55e] relative rounded-[8px] self-stretch shrink-0" data-name="Background">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col items-end px-[12px] py-[6px] relative size-full">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
          <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-right text-white whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
            <p className="leading-[16px]">نشط</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[28px] items-start right-[16.01px] top-[16px]" data-name="Container">
      <OverlayOverlayBlur />
      <Background />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[3px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 3">
        <g id="Container">
          <path d={svgPaths.p299a2a80} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(0,0,0,0.2)] content-stretch flex items-center justify-center left-[16px] rounded-[9999px] size-[32px] top-[16px]" data-name="Button">
      <Container16 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <Ab6AXuDpaVlDJkG7X6EfPxVcKbwO2N0ULe9TuRTeDp4GvUy3Epo10Wo7UTdK6IEezIcsryGx07QrKDu14Yd6IZvvu1R0FqWwNsf6YfDPd2PkFCqTihiEvmKjhA5GVNysL9UxThg6UUigPmYUdmYnKoMbAcYtbR84QzztnSvqe88FfRpa93OpL6Xs7RxDv9VYtC3FOduWYtkSs4Jd58LRPo45Bu88WXlwSAco52P3NXImt3BkuWHvRvwNj0V6L5VCr1ZnpKXMn />
      <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.5)] inset-[0_0.01px_0_0] to-[rgba(0,0,0,0)] via-1/2 via-[rgba(0,0,0,0)]" data-name="Gradient" />
      <Container14 />
      <Button7 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="relative shrink-0 w-full z-[3]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[20px] relative size-full">
        <Container13 />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[0.5px] items-start leading-[0] relative shrink-0 whitespace-nowrap" data-name="Paragraph">
      <div className="flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#f2994a] text-[18px]" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[28px]">3,500</p>
      </div>
      <div className="flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#41484c] text-[12px]" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[16px]">ج.م / شهري</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Cairo:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#001d28] text-[20px] text-right whitespace-nowrap">
        <p className="leading-[28px]">شقة في حي الشؤون</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Paragraph />
      <Heading1 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#41484c] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[20px]">145 م²</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 size-[12.763px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7631 12.7631">
        <g id="Container">
          <path d={svgPaths.p27694840} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container21 />
      <Container22 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#41484c] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[20px]">2 حمام</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Container">
          <path d={svgPaths.pfa24480} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container24 />
      <Container25 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#41484c] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[20px]">3 غرف</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 10.5">
        <g id="Container">
          <path d={svgPaths.p1b3c1c80} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container27 />
      <Container28 />
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center pb-[16px] pl-[29.14px] relative size-full">
          <Container20 />
          <Container23 />
          <Container26 />
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[9px] relative shrink-0 w-[5.55px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.55 9">
        <g id="Container">
          <path d={svgPaths.p1250fe00} fill="var(--fill-0, #F2994A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f2994a] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[20px]">التفاصيل</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="relative shrink-0 z-[2]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Container29 />
        <Container30 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-end pl-[15.01px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[16px] mb-0">15</p>
        <p className="leading-[16px]">طلب</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0 size-[13.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
        <g id="Container">
          <path d={svgPaths.p22adb880} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative self-stretch shrink-0" data-name="Container">
      <Container33 />
      <Container34 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-end pl-[23.83px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[16px] mb-0">1.2k</p>
        <p className="leading-[16px]">مشاهدة</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[10px] relative shrink-0 w-[14.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 10">
        <g id="Container">
          <path d={svgPaths.p383d04c0} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative self-stretch shrink-0" data-name="Container">
      <Container36 />
      <Container37 />
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[32px] relative shrink-0 z-[1]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
        <Container32 />
        <Container35 />
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex isolate items-center justify-between pt-[21px] relative size-full">
          <Button8 />
          <Container31 />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 w-full z-[2]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start pb-[8px] px-[8px] relative size-full">
        <Container18 />
        <Container19 />
        <HorizontalBorder />
      </div>
    </div>
  );
}

function PropertyCard() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="Property Card 1">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col isolate items-start p-[17px] relative size-full">
        <Margin1 />
        <Container17 />
        <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0.01px_0.48px_0] rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] z-[1]" data-name="Property Card 1:shadow" />
      </div>
    </div>
  );
}

function Ab6AXuCDnlsDWyUuOc5W6FecB7IgZeMDind3A3QcrPxHbYuGkKV8V59CfqSzxs1LIyJlar5FFYaQnmd31RjKYpFuXzKotZ72WKvQGp8UiPwnX5Kh4VD2A0U4BAP7QTc4Xy7Q5S1Ekx6NVcoa9Mxq1LzOt2RmPy9G3A7AhGOpVcAkYq3Qgj9Q2McdGebQxcLCr2EZemrUiYzDiKi6X3RiXjltlEaewiwc9H5LlU2GksYKicu9JTryXc8Bki00T273RogVrwMvCl() {
  return (
    <div className="h-[198.5px] relative shrink-0 w-full" data-name="AB6AXuCDnlsD_wyUuOC5w6FecB7igZeMDind3_a3QcrPXHbYUGk_kV8v59CfqSzxs1l_IyJlar5fFYaQNMD31RjKYpFuXzKotZ72wKvQ--Gp-8uiPwnX5KH4vD2A0U4bA_p7qTC4Xy7q5S1ekx6nVCOA9mxq1LzOT2rmPy9G3A7ahGOpVcAkYQ3QGJ9q2mcdGebQxcLCr2EZemrUIYzDiKI6X3RiXJLTLEaewiwc9h5LlU2GksYKicu9JTryXc8BKI00T27_3ROGVrwMV-CL">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[133.34%] left-0 max-w-none top-[-16.67%] w-full" src={imgAb6AXuCDnlsDWyUuOc5W6FecB7IgZeMDind3A3QcrPxHbYuGkKV8V59CfqSzxs1LIyJlar5FFYaQnmd31RjKYpFuXzKotZ72WKvQGp8UiPwnX5Kh4VD2A0U4BAP7QTc4Xy7Q5S1Ekx6NVcoa9Mxq1LzOt2RmPy9G3A7AhGOpVcAkYq3Qgj9Q2McdGebQxcLCr2EZemrUiYzDiKi6X3RiXjltlEaewiwc9H5LlU2GksYKicu9JTryXc8Bki00T273RogVrwMvCl} />
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#f2994a] relative rounded-[8px] self-stretch shrink-0" data-name="Background">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col items-end px-[12px] py-[6px] relative size-full">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
          <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#001d28] text-[12px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
            <p className="leading-[16px]">محجوز</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-start right-[16px] top-[16px]" data-name="Container">
      <Background1 />
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[3px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 3">
        <g id="Container">
          <path d={svgPaths.p299a2a80} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(0,0,0,0.2)] content-stretch flex items-center justify-center left-[16px] rounded-[9999px] size-[32px] top-[16px]" data-name="Button">
      <Container40 />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <Ab6AXuCDnlsDWyUuOc5W6FecB7IgZeMDind3A3QcrPxHbYuGkKV8V59CfqSzxs1LIyJlar5FFYaQnmd31RjKYpFuXzKotZ72WKvQGp8UiPwnX5Kh4VD2A0U4BAP7QTc4Xy7Q5S1Ekx6NVcoa9Mxq1LzOt2RmPy9G3A7AhGOpVcAkYq3Qgj9Q2McdGebQxcLCr2EZemrUiYzDiKi6X3RiXjltlEaewiwc9H5LlU2GksYKicu9JTryXc8Bki00T273RogVrwMvCl />
      <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.5)] inset-[0_0_1px_0] to-[rgba(0,0,0,0)] via-1/2 via-[rgba(0,0,0,0)]" data-name="Gradient" />
      <Container39 />
      <Button9 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="relative shrink-0 w-full z-[3]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[20px] relative size-full">
        <Container38 />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[0.5px] items-start leading-[0] relative shrink-0 whitespace-nowrap" data-name="Paragraph">
      <div className="flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#f2994a] text-[18px]" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[28px]">12,000</p>
      </div>
      <div className="flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#41484c] text-[12px]" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[16px]">ج.م / شهري</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Cairo:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#001d28] text-[20px] text-right whitespace-nowrap">
        <p className="leading-[28px]">فيلا مارينا الغردقة</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Paragraph1 />
      <Heading2 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#41484c] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[20px]">مسبح</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 13.5">
        <g id="Container">
          <path d={svgPaths.p1e5c5400} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex gap-[3.99px] items-center relative shrink-0" data-name="Container">
      <Container45 />
      <Container46 />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#41484c] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[20px]">4 حمام</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Container">
          <path d={svgPaths.pfa24480} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container48 />
      <Container49 />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#41484c] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[20px]">5 غرف</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 10.5">
        <g id="Container">
          <path d={svgPaths.p1b3c1c80} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex gap-[3.99px] items-center relative shrink-0" data-name="Container">
      <Container51 />
      <Container52 />
    </div>
  );
}

function Container43() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center pb-[16px] pl-[30.96px] relative size-full">
          <Container44 />
          <Container47 />
          <Container50 />
        </div>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[9px] relative shrink-0 w-[5.55px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.55 9">
        <g id="Container">
          <path d={svgPaths.p1250fe00} fill="var(--fill-0, #F2994A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f2994a] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[20px]">التفاصيل</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="relative shrink-0 z-[2]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Container53 />
        <Container54 />
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-end pl-[8.52px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[16px] mb-0">3</p>
        <p className="leading-[16px]">طلبات</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="relative shrink-0 size-[13.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
        <g id="Container">
          <path d={svgPaths.p22adb880} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative self-stretch shrink-0" data-name="Container">
      <Container57 />
      <Container58 />
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-end pl-[22.77px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[16px] mb-0">850</p>
        <p className="leading-[16px]">مشاهدة</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="h-[10px] relative shrink-0 w-[14.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 10">
        <g id="Container">
          <path d={svgPaths.p383d04c0} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative self-stretch shrink-0" data-name="Container">
      <Container60 />
      <Container61 />
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[32px] relative shrink-0 z-[1]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
        <Container56 />
        <Container59 />
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="content-stretch flex isolate items-center justify-between pt-[21px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
      <Button10 />
      <Container55 />
    </div>
  );
}

function Container41() {
  return (
    <div className="relative shrink-0 w-full z-[2]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start pb-[8px] px-[8px] relative size-full">
        <Container42 />
        <Container43 />
        <HorizontalBorder1 />
      </div>
    </div>
  );
}

function PropertyCard1() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="Property Card 2">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col isolate items-start p-[17px] relative size-full">
        <Margin2 />
        <Container41 />
        <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0_0.5px_0] rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] z-[1]" data-name="Property Card 2:shadow" />
      </div>
    </div>
  );
}

function Ab6AXuAzBj4Hi7IN1Sngrw99XqZsWeld62Yu8QTcXoinnrbGkYAo5QDeMev1Mh90EoGJkBy1KfLa3RwVfAxXythjdxWa16QkQg8YZsxh5SceGrpszP3IMrn5VmHae58MoM9E8YcmlwYhpBes80SJrCr1CmbgJy1Tj2YP38ZZ9JiIomNlNb2HbTz9VUkNg2HwmKtuEsH8GyklUgx12JhTOrvltyAyxdwcMSqAZwkHiQ4MmEnGdDb1YXi2DlOaaGlQDbjraC5PTiVzTzH() {
  return (
    <div className="h-[198.48px] relative shrink-0 w-full" data-name="AB6AXuAZBj4Hi7iN1SNGRW99XQZsWELD62YU8qTcXoinnrbGkYAo5qDEMev1mh90EoGJkBy1kfLa3RwVfAxXythjdxWa16qkQG8yZSXH5SCEGrpszP3iMRN5VmHAE58moM9E8ycmlwYhpBES8-0SJrCr1cmbgJy1Tj2yP38zZ9JIIomNlNB2HbTZ9VUkNG2-hwmKtuEsH8Gykl-UGX12JhTOrvltyAyxdwcMSqAZwkHiQ4mmEnGdDB1YXi2DLOaaGlQDbjraC5pTiVz_TzH4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[133.34%] left-0 max-w-none top-[-16.67%] w-full" src={imgAb6AXuAzBj4Hi7IN1Sngrw99XqZsWeld62Yu8QTcXoinnrbGkYAo5QDeMev1Mh90EoGJkBy1KfLa3RwVfAxXythjdxWa16QkQg8YZsxh5SceGrpszP3IMrn5VmHae58MoM9E8YcmlwYhpBes80SJrCr1CmbgJy1Tj2YP38ZZ9JiIomNlNb2HbTz9VUkNg2HwmKtuEsH8GyklUgx12JhTOrvltyAyxdwcMSqAZwkHiQ4MmEnGdDb1YXi2DlOaaGlQDbjraC5PTiVzTzH4} />
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#c1c7cc] relative rounded-[8px] self-stretch shrink-0" data-name="Background">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col items-end px-[12px] py-[6px] relative size-full">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
          <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#41484c] text-[12px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
            <p className="leading-[16px]">مسودة</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-start right-[16.02px] top-[16px]" data-name="Container">
      <Background2 />
    </div>
  );
}

function Container64() {
  return (
    <div className="h-[3px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 3">
        <g id="Container">
          <path d={svgPaths.p299a2a80} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(0,0,0,0.2)] content-stretch flex items-center justify-center left-[16px] rounded-[9999px] size-[32px] top-[16px]" data-name="Button">
      <Container64 />
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <Ab6AXuAzBj4Hi7IN1Sngrw99XqZsWeld62Yu8QTcXoinnrbGkYAo5QDeMev1Mh90EoGJkBy1KfLa3RwVfAxXythjdxWa16QkQg8YZsxh5SceGrpszP3IMrn5VmHae58MoM9E8YcmlwYhpBes80SJrCr1CmbgJy1Tj2YP38ZZ9JiIomNlNb2HbTz9VUkNg2HwmKtuEsH8GyklUgx12JhTOrvltyAyxdwcMSqAZwkHiQ4MmEnGdDb1YXi2DlOaaGlQDbjraC5PTiVzTzH />
      <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.5)] inset-[0_0.01px_0_0] to-[rgba(0,0,0,0)] via-1/2 via-[rgba(0,0,0,0)]" data-name="Gradient" />
      <Container63 />
      <Button11 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="relative shrink-0 w-full z-[3]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[20px] relative size-full">
        <Container62 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[0.5px] items-start leading-[0] relative shrink-0 whitespace-nowrap" data-name="Paragraph">
      <div className="flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#f2994a] text-[18px]" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[28px]">2,100</p>
      </div>
      <div className="flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#41484c] text-[12px]" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[16px]">ج.م / شهري</p>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Cairo:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#001d28] text-[20px] text-right whitespace-nowrap">
        <p className="leading-[28px]">استوديو ريزيدنس 4</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between pr-[0.01px] relative size-full">
        <Paragraph2 />
        <Heading3 />
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#41484c] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[20px]">طابق 2</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="relative shrink-0 size-[13.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 13.5">
        <g id="Container">
          <path d={svgPaths.p18b24f00} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container69 />
      <Container70 />
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#41484c] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[20px]">1 حمام</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Container">
          <path d={svgPaths.pfa24480} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex gap-[3.99px] items-center relative shrink-0" data-name="Container">
      <Container72 />
      <Container73 />
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#41484c] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[20px]">1 غرفة</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 10.5">
        <g id="Container">
          <path d={svgPaths.p1b3c1c80} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container75 />
      <Container76 />
    </div>
  );
}

function Container67() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center pb-[16px] pl-[28.31px] pr-[0.01px] relative size-full">
          <Container68 />
          <Container71 />
          <Container74 />
        </div>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="h-[12px] relative shrink-0 w-[13.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 12">
        <g id="Container">
          <path d={svgPaths.pbd14980} fill="var(--fill-0, #F2994A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f2994a] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[20px]">إكمال النشر</p>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Container77 />
        <Container78 />
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[16px]">0 طلب</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="relative shrink-0 size-[13.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
        <g id="Container">
          <path d={svgPaths.p22adb880} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative self-stretch shrink-0" data-name="Container">
      <Container81 />
      <Container82 />
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[16px]">0 مشاهدة</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="h-[10px] relative shrink-0 w-[14.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 10">
        <g id="Container">
          <path d={svgPaths.p383d04c0} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative self-stretch shrink-0" data-name="Container">
      <Container84 />
      <Container85 />
    </div>
  );
}

function Container79() {
  return (
    <div className="h-[16px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
        <Container80 />
        <Container83 />
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[0.01px] pt-[21px] relative size-full">
          <Button12 />
          <Container79 />
        </div>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="relative shrink-0 w-full z-[2]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start pb-[8px] px-[8px] relative size-full">
        <Container66 />
        <Container67 />
        <HorizontalBorder2 />
      </div>
    </div>
  );
}

function PropertyCard2() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="Property Card 3">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col isolate items-start pb-[29.02px] pt-[17px] px-[17px] relative size-full">
        <Margin3 />
        <Container65 />
        <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0.01px_0.5px_0] rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] z-[1]" data-name="Property Card 3:shadow" />
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="h-[25px] relative shrink-0 w-[23.75px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.75 25">
        <g id="Container">
          <path d={svgPaths.p8f68380} fill="var(--fill-0, #F2994A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[64px]" data-name="Background">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(255,255,255,0)] left-1/2 rounded-[9999px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] size-[64px] top-1/2" data-name="Overlay+Shadow" />
      <Container86 />
    </div>
  );
}

function Margin4() {
  return (
    <div className="h-[80px] relative shrink-0 w-[64px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Background3 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#001d28] text-[16px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[24px]">إضافة وحدة جديدة</p>
      </div>
    </div>
  );
}

function Heading4Margin() {
  return (
    <div className="relative shrink-0" data-name="Heading 4:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <Heading4 />
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="max-w-[200px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center max-w-[inherit] pl-[19.82px] pr-[19.81px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
          <p className="leading-[16px] mb-0">قم بإضافة عقارك الآن وابدأ في</p>
          <p className="leading-[16px]">استقبال العروض</p>
        </div>
      </div>
    </div>
  );
}

function EmptyStateAddNewPlaceholderEditorialStyle() {
  return (
    <div className="bg-[rgba(243,243,245,0.3)] col-3 justify-self-stretch relative rounded-[16px] row-2 self-start shrink-0" data-name="Empty State / Add New Placeholder (Editorial Style)">
      <div aria-hidden className="absolute border-2 border-[#e2e8f0] border-dashed inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[50px] relative size-full">
          <Margin4 />
          <Heading4Margin />
          <Container87 />
        </div>
      </div>
    </div>
  );
}

function PropertyGridEditorialLayout() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[__409.50px_240px] relative shrink-0 w-full" data-name="Property Grid (Editorial Layout)">
      <PropertyCard />
      <PropertyCard1 />
      <PropertyCard2 />
      <EmptyStateAddNewPlaceholderEditorialStyle />
    </div>
  );
}

function Container89() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
        <g id="Container">
          <path d={svgPaths.p3ed0080} fill="var(--fill-0, #41484C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div className="bg-[#f3f3f5] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" data-name="Button">
      <Container89 />
    </div>
  );
}

function Button14() {
  return (
    <div className="bg-[#f3f3f5] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#41484c] text-[16px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[24px]">3</p>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="bg-[#f3f3f5] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#41484c] text-[16px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[24px]">2</p>
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="bg-[#001d28] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[24px]">1</p>
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
        <g id="Container">
          <path d={svgPaths.p28c84800} fill="var(--fill-0, #41484C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button17() {
  return (
    <div className="bg-[#f3f3f5] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" data-name="Button">
      <Container90 />
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Container">
      <Button13 />
      <Button14 />
      <Button15 />
      <Button16 />
      <Button17 />
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#41484c] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[20px]">عرض 1-3 من أصل 19 عقار</p>
      </div>
    </div>
  );
}

function FooterPaginationSummary() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[16px] relative shrink-0 w-full" data-name="Footer - Pagination / Summary">
      <Container88 />
      <Container91 />
    </div>
  );
}

function MainContentCanvas() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start min-h-[1024px] pb-[34.5px] pt-[32px] px-[32px] relative shrink-0 w-[1024px]" data-name="Main Content Canvas">
      <TopAppBarStyleHeaderSection />
      <BentoFilterBar />
      <PropertyGridEditorialLayout />
      <FooterPaginationSummary />
    </div>
  );
}

function Container94() {
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

function Container95() {
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

function Container93() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[103.94px]" data-name="Container">
      <Container94 />
      <Container95 />
    </div>
  );
}

function Container96() {
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

function Background4() {
  return (
    <div className="bg-[#f2994a] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" data-name="Background">
      <Container96 />
    </div>
  );
}

function Container92() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[44px] items-center left-0 pl-[49px] right-0 top-[10px]" data-name="Container">
      <Container93 />
      <Background4 />
    </div>
  );
}

function Margin5() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Margin">
      <Container92 />
    </div>
  );
}

function Container97() {
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

function Container98() {
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
          <Container97 />
          <Container98 />
        </div>
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#f2994a] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"HEXP" 0' }}>
        <p className="leading-[20px]" dir="auto">
          عقاراتي
        </p>
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="h-[18px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18">
        <g id="Container">
          <path d={svgPaths.p7ab5f00} fill="var(--fill-0, #F2994A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[12px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[15.99px] items-center pl-[104.94px] pr-[16px] py-[12px] relative size-full">
          <Container99 />
          <Container100 />
        </div>
      </div>
    </div>
  );
}

function Container101() {
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

function Container102() {
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
          <Container101 />
          <Container102 />
        </div>
      </div>
    </div>
  );
}

function Container103() {
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

function Container104() {
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
          <Container103 />
          <Container104 />
        </div>
      </div>
    </div>
  );
}

function Container105() {
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

function Container106() {
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
      <Container105 />
      <Container106 />
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

function Container107() {
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

function Container108() {
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
      <Container107 />
      <Container108 />
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

function Container109() {
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

function Container110() {
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
          <Container109 />
          <Container110 />
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

function Container111() {
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

function Button18() {
  return (
    <div className="bg-[#f2994a] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center justify-center py-[12px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Readex_Pro:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#001d28] text-[14px] text-center w-[149.11px]" style={{ fontVariationSettings: '"HEXP" 0' }}>
          <p className="leading-[20px]" dir="auto">
            إضافة سكن جديد
          </p>
        </div>
        <Container111 />
      </div>
    </div>
  );
}

function Container113() {
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

function Container114() {
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

function Container112() {
  return (
    <div className="h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.99px] items-center pl-[79.19px] pr-[16px] py-[12px] relative size-full">
          <Container113 />
          <Container114 />
        </div>
      </div>
    </div>
  );
}

function Container116() {
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

function Container117() {
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

function Container115() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.99px] items-center pl-[115.83px] pr-[16px] py-[12px] relative size-full">
          <Container116 />
          <Container117 />
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pb-[16px] pt-[17px] px-[16px] relative shrink-0 w-[255px]" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.05)] border-solid border-t inset-0 pointer-events-none" />
      <Button18 />
      <Container112 />
      <Container115 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-0">
      <HorizontalBorder3 />
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
    <div className="content-stretch flex gap-[10px] items-center relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(249, 249, 251) 0%, rgb(249, 249, 251) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="عقارات المالك">
      <MainContentCanvas />
      <div className="bg-gradient-to-b content-stretch flex flex-col from-[#034] gap-[32px] h-[1024px] items-center p-[24px] relative shrink-0 to-[#001d28] w-[256px]" data-name="Aside - SideNavBar">
        <div className="absolute bg-[rgba(255,255,255,0)] h-[1024px] right-0 shadow-[0px_25px_50px_-12px_rgba(0,31,42,0.2)] top-0 w-[256px]" data-name="Aside - SideNavBar:shadow" />
        <Margin5 />
        <Nav />
        <Frame />
      </div>
    </div>
  );
}
import { useState } from "react";
import alertImage from "./assets/Alert.png";
import gridImg from "./assets/Grid_img.png";
import gridOverlay from "./assets/Grid.jpg";
import iconGuide from "./assets/icon_grid.png";
import watchGrid from "./assets/watch_grid.png";
import filterIcon from "./assets/icons/filter.png";
import accordionDown from "./assets/icons/accordion_down.png";

const iconModules = import.meta.glob(
  "./assets/icons/*.{png,svg,webp}",
  {
    eager: true,
    import: "default",
  }
);

function getIconSrc(slug) {
  const icon =
    iconModules[`./assets/icons/${slug}.png`] ||
    iconModules[`./assets/icons/${slug}.svg`];

  return icon || alertImage;
}

function hexToRgba(hex, opacity) {
  const cleanHex = hex.replace("#", "");
  const bigint = parseInt(cleanHex, 16);

  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

  const typographyRows = [
    ["font.heading.large", "SemiBold", "20px", "26px", "-1%"],
    ["font.heading.medium", "SemiBold", "18px", "24px", "-1%"],
    ["font.heading.small", "Medium", "18px", "24px", "-1%"],
  
    ["font.title.large", "SemiBold", "16px", "22px", "-0.12%"],
    ["font.title.medium", "Medium", "16px", "22px", "-0.12%"],
  
    ["font.subtitle.medium", "Medium", "14px", "20px", "-0.3%"],
  
    ["font.caption.medium", "Medium", "12px", "18px", "-0.4%"],
    ["font.caption.regular", "Regular", "12px", "18px", "-0.4%"],
  ];

const spacingRows = [
  ["space.0", "0×", "0rem", "0px"],
  ["space.025", "0.25×", "0.125rem", "2px"],
  ["space.050", "0.5×", "0.25rem", "4px"],
  ["space.075", "0.75×", "0.375rem", "6px"],
  ["space.100", "1×", "0.5rem", "8px"],
  ["space.150", "1.5×", "0.75rem", "12px"],
  ["space.200", "2×", "1rem", "16px"],
  ["space.250", "2.5×", "1.25rem", "20px"],
  ["space.300", "3×", "1.5rem", "24px"],
  ["space.400", "4×", "2rem", "32px"],
  ["space.500", "5×", "2.5rem", "40px"],
  ["space.600", "6×", "3rem", "48px"],
  ["space.800", "8×", "4rem", "64px"],
  ["space.1000", "10×", "5rem", "80px"],
];

export default function App() {
  const [menu, setMenu] = useState("palette");

  return (
    <div className="flex h-screen bg-[#F9FAFB] text-[#191F28]">
      {/* SIDEBAR */}
      <aside className="hidden lg:flex w-[280px] bg-white border-r border-[#E5E8EB] flex-col">
        <div className="px-6 pt-7 pb-6 border-b border-[#F2F4F6]">
          <h1 className="text-[24px] font-bold tracking-tight">flow</h1>
          <p className="text-sm text-[#8B95A1] mt-1">Design System</p>
        </div>

        <div className="px-6 pt-6">
          <div className="h-11 rounded-xl bg-[#F2F4F6] flex items-center px-4 text-sm text-[#8B95A1]">
            Search...
          </div>
        </div>

        <div className="flex-1 overflow-auto px-4 py-6">
        <div className="space-y-8">

{/* FOUNDATION */}
<div className="bg-[#F3F5F8] rounded-[24px] p-4">

  <div className="flex items-center justify-between mb-4 px-2">
    <h3 className="text-[20px] font-semibold text-[#2563EB]">
      Foundation
    </h3>

    <span className="text-[22px] text-[#6B7280]">
      ⌄
    </span>
  </div>

  <div className="space-y-1">

    <MenuItem
      active={menu === "palette"}
      onClick={() => setMenu("palette")}
    >
      Colors
    </MenuItem>

    <MenuItem
      active={menu === "icons"}
      onClick={() => setMenu("icons")}
    >
      Icons
    </MenuItem>
    <MenuItem
  active={menu === "illustrations"}
  onClick={() => setMenu("illustrations")}
>
  Illustrations
</MenuItem>
    <MenuItem
      active={menu === "typography"}
      onClick={() => setMenu("typography")}
    >
      Typography
    </MenuItem>

    <MenuItem
      active={menu === "spacing"}
      onClick={() => setMenu("spacing")}
    >
      Spacing
    </MenuItem>

    <MenuItem
      active={menu === "grid"}
      onClick={() => setMenu("grid")}
    >
      Grid
    </MenuItem>

  </div>

</div>

{/* COMPONENTS */}
<div className="bg-[#F3F5F8] rounded-[24px] p-4">

  <div className="flex items-center justify-between mb-4 px-2">
    <h3 className="text-[20px] font-semibold text-[#2563EB]">
      Components
    </h3>

    <span className="text-[22px] text-[#6B7280]">
      ⌄
    </span>
  </div>

  <div className="space-y-1">

    <MenuItem
      active={menu === "button"}
      onClick={() => setMenu("button")}
    >
      Button
    </MenuItem>
    <MenuItem
  active={menu === "checkbox"}
  onClick={() => setMenu("checkbox")}
>
  Checkbox
</MenuItem>
<MenuItem
  active={menu === "accordion"}
  onClick={() => setMenu("accordion")}
>
  Accordion
</MenuItem>
<MenuItem
  active={menu === "badge"}
  onClick={() => setMenu("badge")}
>
Badge
</MenuItem>
<MenuItem
      active={menu === "filter"}
      onClick={() => setMenu("filter")}
    >
      filter
    </MenuItem>
    <MenuItem
      active={menu === "tab"}
      onClick={() => setMenu("tab")}
    >
      tab
    </MenuItem>
    <MenuItem
      active={menu === "category"}
      onClick={() => setMenu("category")}
    >
      category
    </MenuItem>
  </div>

</div>

{/* MOTION */}
<div className="bg-[#F3F5F8] rounded-[24px] p-4">

  <div className="flex items-center justify-between px-2">
    <button
      onClick={() => setMenu("motion")}
      className={`
        text-[20px]
        font-semibold
        transition
        ${
          menu === "motion"
            ? "text-[#2563EB]"
            : "text-[#374151]"
        }
      `}
    >
      Motion
    </button>

    <span className="text-[22px] text-[#6B7280]">
      ⌄
    </span>
  </div>

</div>

{/* ADVERTISING */}
<div className="bg-[#F3F5F8] rounded-[24px] p-4">

  <div className="flex items-center justify-between px-2">
    <button
      onClick={() => setMenu("advertising")}
      className={`
        text-[20px]
        font-semibold
        transition
        ${
          menu === "advertising"
            ? "text-[#2563EB]"
            : "text-[#374151]"
        }
      `}
    >
      Advertising
    </button>

    <span className="text-[22px] text-[#6B7280]">
      ⌄
    </span>
  </div>

</div>

</div>
        </div>

        <div className="border-t border-[#F2F4F6] px-6 py-5">
          <p className="text-xs text-[#8B95A1]">
            © 2026 Flow Design System
          </p>
        </div>
      </aside>

      {/* CONTENT */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 bg-white border-b border-[#E5E8EB] flex items-center justify-between px-6 lg:px-10">
          <div>
            <p className="text-xs text-[#8B95A1]">Foundations</p>
            <h2 className="text-[15px] font-semibold tracking-tight">
              Design System
            </h2>
          </div>

          <div className="hidden md:flex w-[280px] h-10 bg-[#F2F4F6] rounded-xl px-4 items-center text-sm text-[#8B95A1]">
            Search...
          </div>
        </header>

        <main className="flex-1 overflow-auto">
          <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-10">
            {menu === "tokens" && <TokenPage />}
            {menu === "typography" && <TypographyPage />}
            {menu === "spacing" && <SpacingPage />}
            {menu === "grid" && <GridPage />}
            {menu === "palette" && <PalettePage />}
            {menu === "button" && <ButtonPage />}
            {menu === "icons" && <IconPage />}
            {menu === "illustrations" && <IllustrationPage />}
            {menu === "motion" && <MotionPage />}
            {menu === "advertising" && <AdvertisingPage />}
            {menu === "checkbox" && <CheckboxPage />}
            {menu === "accordion" && <AccordionPage />}
            {menu === "badge" && <BadgePage />}
            {menu === "filter" && <FilterPage />}
            {menu === "tab" && <TabPage />}
            {menu === "category" && <CategoryPage />}
            
          </div>
        </main>

        <footer className="bg-white border-t border-[#E5E8EB] px-6 lg:px-10 py-4">
          <p className="text-sm text-[#8B95A1]">
            Built with Flow Design System
          </p>
        </footer>
      </div>
    </div>
  );
}

function MenuItem({ children, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center px-3 py-[11px] rounded-xl text-[15px] font-medium transition-all ${
        active
          ? "bg-[#EEF2FF] text-[#4F46E5]"
          : "text-[#4B5563] hover:bg-gray-50"
      }`}
    >
      {children}
    </button>
  );
}

function SectionTitle({ title }) {
  return (
    <div className="mb-8 mt-16 first:mt-0">
      <h2 className="text-[28px] font-bold tracking-tight">
        {title}
      </h2>
    </div>
  );
}

function Card({ children }) {
  return (
    <div className="bg-white rounded-[28px] border border-[#E5E8EB] overflow-hidden mb-6">
      {children}
    </div>
  );
}

function TokenPage() {
  return (
    <div>
      <div className="mb-14">
        <p className="text-sm text-[#8B95A1] mb-3">
          Foundations
        </p>

        <h1 className="text-[44px] leading-[1.1] font-bold tracking-tight">
          Design Tokens
        </h1>

        <p className="text-[#6B7684] text-[15px] leading-7 mt-5 max-w-[720px]">
          Design tokens define the visual foundations of the system.
        </p>
      </div>

      {/* COLOR */}
      <SectionTitle title="Color" />

      <Card>
        <div className="grid md:grid-cols-3 border-b border-[#F2F4F6] text-sm text-[#8B95A1] px-8 py-4">
          <span>Token</span>
          <span>Light</span>
          <span>Dark</span>
        </div>

        <div className="grid md:grid-cols-3 gap-6 px-8 py-8">
          <div>
            <code className="bg-[#F2F4F6] px-3 py-1.5 rounded-lg text-sm">
              color.text.accent.lime
            </code>

            <p className="text-sm text-[#6B7684] mt-4">
              Use for lime text...
            </p>

            <p className="text-xs text-[#9CA3AF] mt-2">
              Introduced v1.8.0
            </p>
          </div>

          <div className="rounded-2xl border border-[#E5E8EB] p-4">
            <div
              className="h-12 rounded-xl mb-3"
              style={{ background: "#4C6B1F" }}
            />
            <span className="text-sm">Lime800</span>
          </div>

          <div className="rounded-2xl bg-[#191F28] p-4">
            <div
              className="h-12 rounded-xl mb-3"
              style={{ background: "#B3DF72" }}
            />
            <span className="text-sm text-gray-300">Lime300</span>
          </div>
        </div>
      </Card>
            {/* BORDER */}
            <SectionTitle title="Border" />

{[
  {
    token: "border.width",
    desc: "The default width for all standard component borders and dividers.",
    value: "1px",
    version: "Introduced v1.5.2",
  },
  {
    token: "border.width.selected",
    desc: "The width used to indicate a selected element, such as an active tab or a chosen item.",
    value: "2px",
    version: "Introduced v6.1.0",
  },
  {
    token: "border.width.focused",
    desc: "The width used for focus rings on interactive elements.",
    value: "2px",
    version: "Introduced v6.1.0",
  },
].map((b) => (
  <Card key={b.token}>
    <div className="grid md:grid-cols-2 gap-8 px-8 py-8 items-center border-b border-[#F2F4F6]">
      <div>
        <code className="bg-[#F2F4F6] px-3 py-1.5 rounded-lg text-sm">
          {b.token}
        </code>

        <p className="text-sm text-[#6B7684] mt-4">
          {b.desc}
        </p>

        <p className="text-xs text-[#8B95A1] mt-2">
          {b.version}
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-[120px] h-10 border border-[#E5E8EB] rounded-lg flex items-center px-3">
          <div
            style={{
              width: "100%",
              borderTop: `${b.value} solid black`,
            }}
          />
        </div>

        <span className="text-sm">{b.value}</span>
      </div>
    </div>
  </Card>
))}

{/* MOTION */}
<SectionTitle title="Motion" />

<Card>
  <div className="grid md:grid-cols-2 gap-8 px-8 py-8">
    <div>
      <code className="bg-[#F2F4F6] px-3 py-1.5 rounded-lg text-sm">
        motion.avatar.enter
      </code>

      <p className="text-sm text-[#6B7684] mt-4">
        Use for avatar group enter transitions.
      </p>

      <p className="text-xs text-[#8B95A1] mt-2">
        Introduced v2.0.0
      </p>
    </div>

    <div className="space-y-2 text-sm text-[#4E5968]">
      <div>ScaleIn80to100</div>
      <div>FadeIn0to100</div>
      <div>150ms</div>
      <div>EasePracticalOut</div>
    </div>
  </div>
</Card>

{/* OPACITY */}
<SectionTitle title="Opacity" />

<Card>
  <div className="grid md:grid-cols-3 gap-8 px-8 py-8 items-center">
    <div>
      <code className="bg-[#F2F4F6] px-3 py-1.5 rounded-lg text-sm">
        opacity.disabled
      </code>

      <p className="text-sm text-[#6B7684] mt-4">
        Apply to images when in a disabled state.
      </p>

      <p className="text-xs text-[#8B95A1] mt-2">
        Introduced v3.4.0
      </p>
    </div>

    {/* LIGHT */}
    <div
      style={{
        width: "120px",
        height: "64px",
        borderRadius: "8px",
        border: "1px solid #E5E7EB",
        backgroundColor: hexToRgba("#292A2E", 0.4),
        backgroundImage: `
          linear-gradient(45deg, #eee 25%, transparent 25%),
          linear-gradient(-45deg, #eee 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, #eee 75%),
          linear-gradient(-45deg, transparent 75%, #eee 75%)
        `,
        backgroundSize: "12px 12px",
        backgroundPosition: "0 0, 0 6px, 6px -6px, -6px 0px",
        display: "flex",
        alignItems: "flex-end",
        padding: "8px",
        fontSize: "12px",
      }}
    >
      Opacity40
    </div>

    {/* DARK */}
    <div
      style={{
        width: "120px",
        height: "64px",
        borderRadius: "8px",
        border: "1px solid #333",
        backgroundColor: hexToRgba("#111111", 0.4),
        backgroundImage: `
          linear-gradient(45deg, #444 25%, transparent 25%),
          linear-gradient(-45deg, #444 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, #444 75%),
          linear-gradient(-45deg, transparent 75%, #444 75%)
        `,
        backgroundSize: "12px 12px",
        backgroundPosition: "0 0, 0 6px, 6px -6px, -6px 0px",
        display: "flex",
        alignItems: "flex-end",
        padding: "8px",
        fontSize: "12px",
        color: "#fff",
      }}
    >
      Opacity40
    </div>
  </div>
</Card>

{/* RADIUS */}
<SectionTitle title="Radius" />

<Card>
  <div className="grid md:grid-cols-2 gap-8 px-8 py-8 items-center">
    <div>
      <code className="bg-[#F2F4F6] px-3 py-1.5 rounded-lg text-sm">
        radius.xsmall
      </code>

      <p className="text-sm text-[#6B7684] mt-4">
        Use for small detail elements.
      </p>

      <p className="text-xs text-[#8B95A1] mt-2">
        Introduced v1.0.0
      </p>
    </div>

    <div className="flex items-center gap-4">
      <div className="w-16 h-10 border border-[#E5E8EB] rounded-sm" />
      <span className="text-sm">2px</span>
    </div>
  </div>
</Card>
</div>
);
}

function TypographyPage() {
  
return (
<div>
<h1 className="text-[44px] font-bold tracking-tight mb-10">
  Typography
</h1>

<Card>
<div className="grid grid-cols-6 px-8 py-4 border-b border-[#F2F4F6] text-sm text-[#8B95A1]">
  <span>Token</span>
  <span>Font weight</span>
  <span>Font size</span>
  <span>Line height</span>
  <span>Letter spacing</span>
  <span>Preview</span>
</div>

{typographyRows.map((r) => (
  <div
    key={r[0]}
    className="grid grid-cols-6 px-8 py-5 border-b border-[#F2F4F6] items-center hover:bg-[#FAFBFC] transition"
  >
    <button
  onClick={() => navigator.clipboard.writeText(r[0])}
  className="
    inline-flex
    items-center
    gap-2
    w-fit
    px-3
    py-1.5
    rounded-md
    bg-[#F2F4F6]
    hover:bg-[#E5E8EB]
    transition
    font-mono
    text-[14px]
    text-[#4E5968]
  "
>
  <span>{r[0]}</span>
  <span className="text-[#8B95A1]">⧉</span>
</button>
    <span>{r[1]}</span>
    <span>{r[2]}</span>
    <span>{r[3]}</span>
    <span>{r[4]}</span>

    <span
      style={{
        fontSize: r[2],
        lineHeight: r[3],
        letterSpacing: r[4],
        fontWeight:
          r[1] === "SemiBold"
            ? 600
            : r[1] === "Medium"
            ? 500
            : 400,
      }}
    >
      망설임 없이 고르고 배우는 문화센터 서비스
    </span>
  </div>
))}
</Card>
<Card>
  <div className="grid grid-cols-4 bg-[#EEF1F4] border-b border-[#D9DEE3]">
    <div className="px-6 py-5 text-[15px] font-semibold">등급</div>
    <div className="px-6 py-5 text-[15px] font-semibold">큰 텍스트</div>
    <div className="px-6 py-5 text-[15px] font-semibold">일반 텍스트</div>
    <div className="px-6 py-5 text-[15px] font-semibold">대비율</div>
  </div>

  {/* AA */}
  <div className="grid grid-cols-4 border-b border-[#E5E8EB]">
    <div className="px-6 py-6 text-[18px] text-[#2F3A47]">
      AA
    </div>

    <div className="px-6 py-6 text-[18px] text-[#2F3A47]">
      3:1 (매직넘버: 40)
    </div>

    <div className="px-6 py-6 text-[18px] text-[#2F3A47]">
      4.5:1 (매직넘버: 50)
    </div>

    <div className="px-6 py-6 text-[18px] text-[#2F3A47]">
      최소
    </div>
  </div>

  {/* AAA */}
  <div className="grid grid-cols-4">
    <div className="px-6 py-6 text-[18px] text-[#2F3A47]">
      AAA
    </div>

    <div className="px-6 py-6 text-[18px] text-[#2F3A47]">
      4.5:1 (매직넘버: 50)
    </div>

    <div className="px-6 py-6 text-[18px] text-[#2F3A47]">
      7:1 (매직넘버: 70)
    </div>

    <div className="px-6 py-6 text-[18px] text-[#2F3A47]">
      강화
    </div>
  </div>
</Card>
<div className="mt-24">
  <h2 className="text-[36px] font-bold tracking-tight mb-10">
    글자 색상
  </h2>

  <p className="text-[18px] leading-[1.8] text-[#191F28] max-w-[980px] mb-14">
    글자 색상은 가독성과 접근성을 고려해 사용한다.
    본문에서는 주로 그레이 계열을 유지하며, 주요 동작에는
    primary, secondary, point, system 색상을 사용할 수 있다.
    이때 명도 대비를 준수하여 시각적 접근성을 확보한다
  </p>

  <div className="grid md:grid-cols-2 gap-8">

    {/* AAA */}
    <div className="bg-[#F3F4F6] rounded-[28px] p-10">

      <h3 className="text-[20px] font-bold text-[#2B2F36] mb-8">
        AAA 등급
      </h3>

      <div className="bg-white rounded-[20px] px-12 py-12">
        <div className="text-[24px] font-bold text-[#2B2F36] mb-6">
          큰 텍스트 4.5:1(매직넘버 50)
        </div>

        <div className="text-[18px] text-[#333D4B]">
          일반 텍스트 7:1(매직넘버 70)
        </div>
      </div>
    </div>

    {/* AA */}
    <div className="bg-[#F3F4F6] rounded-[28px] p-10">

      <h3 className="text-[20px] font-bold text-[#2B2F36] mb-8">
        AA 등급
      </h3>

      <div className="bg-white rounded-[20px] px-12 py-12">
        <div className="text-[24px] font-bold text-[#2B2F36] mb-6">
          큰 텍스트 3:1(매직넘버 40)
        </div>

        <div className="text-[18px] text-[#333D4B]">
          일반 텍스트 4.5:1(매직넘버 50)
        </div>
      </div>
    </div>

  </div>
</div>
<div className="mt-24">
  <h2 className="text-[36px] font-bold tracking-tight mb-10">
    선명한 화면 모드 명도 대비
  </h2>

  <p className="text-[18px] leading-[1.8] text-[#191F28] max-w-[980px] mb-10">
    선명한 화면 모드에서는 본문의 가독성을 위해
    15:1의 고대비 명도 대비를 준수한다.
  </p>

  <ul className="space-y-8 text-[20px] text-[#333D4B]">
    <li className="flex items-center gap-5">
      <span className="w-2.5 h-2.5 rounded-full bg-[#4B5563]" />

      <span>
        본문 텍스트: <strong>15:1</strong>
      </span>
    </li>

    <li className="flex items-center gap-5">
      <span className="w-2.5 h-2.5 rounded-full bg-[#4B5563]" />

      <span>
        헤딩, 레이블 등의 텍스트와 아이콘:
        <strong> 7:1</strong>
      </span>
    </li>

    <li className="flex items-center gap-5">
      <span className="w-2.5 h-2.5 rounded-full bg-[#4B5563]" />

      <span>
        시각적 보조 수단:
        <strong> 4.5:1</strong>
      </span>
    </li>
  </ul>
</div>
<div className="mt-16">
  <h2 className="text-[36px] font-bold tracking-tight mb-10">
    줄 간격
  </h2>

  <p className="text-[18px] leading-[1.8] text-[#191F28] max-w-[920px] mb-12">
    줄 간격이 좁을수록 시각적 피로를 느끼게 하며 정보 전달의
    효율성이 떨어지므로 150% 이상으로 설정한다.
  </p>

  <div className="grid md:grid-cols-2 gap-8">

    {/* GOOD */}
    <div className="rounded-[24px] border border-[#16A34A] overflow-hidden bg-[#EEF6EF]">

      <div className="flex items-center gap-4 px-6 py-6 bg-white">
        <div className="w-10 h-10 rounded-full bg-[#04951F] flex items-center justify-center text-white text-[24px] font-bold">
          ✓
        </div>

        <h3 className="text-[20px] font-bold text-[#191F28]">
          모범 사례
        </h3>
      </div>

      <div className="p-8">
        <div className="bg-white rounded-[20px] p-8">
          <h4 className="text-[22px] font-bold leading-[1.5] mb-6">
            줄 간격은 가독성을 위해 최소 150% 이상으로 설정한다.
          </h4>

          <p className="text-[18px] leading-[1.7] text-[#4E5968] mb-8">
            줄 간격이 좁을 경우, 줄 간의 분리가 잘 되지 않아
            사용자가 다음 줄로 이동할 때 시각적 피로를 느낄 수 있다.
          </p>

          <div className="h-[40px] rounded-[10px] bg-[#F2F4F6] flex items-center justify-center text-[18px] text-[#333D4B]">
            Line height 150%
          </div>
        </div>
      </div>
    </div>

    {/* BAD */}
    <div className="rounded-[24px] border border-[#FF5A36] overflow-hidden bg-[#FAEEEE]">

      <div className="flex items-center gap-4 px-6 py-6 bg-white">
        <div className="w-10 h-10 rounded-full bg-[#F1003C] flex items-center justify-center text-white text-[24px] font-bold">
          ×
        </div>

        <h3 className="text-[20px] font-bold text-[#191F28]">
          피해야 할 사례
        </h3>
      </div>

      <div className="p-8">
        <div className="bg-white rounded-[20px] p-8">
          <h4 className="text-[22px] font-bold leading-[1.25] mb-4">
            줄 간격은 가독성을 위해 최소 150% 이상으로 설정한다.
          </h4>

          <p className="text-[18px] leading-[1.25] text-[#4E5968] mb-8">
            줄 간격이 좁을 경우, 줄 간의 분리가 잘 되지 않아 사용자가
            다음 줄로 이동할 때 시각적 피로를 느낄 수 있다.
          </p>

          <div className="h-[40px] rounded-[10px] bg-[#F2F4F6] flex items-center justify-center text-[18px] text-[#333D4B]">
            Line height 125%
          </div>
        </div>
      </div>
    </div>

  </div>
</div>
</div>
);
}

function SpacingPage() {
return (
<div>
<h1 className="text-[44px] font-bold tracking-tight mb-10">
  Spacing
</h1>

<Card>
  <div className="grid grid-cols-5 px-8 py-4 border-b border-[#F2F4F6] text-sm text-[#8B95A1]">
    <span>Token</span>
    <span>Base unit multiplier</span>
    <span>REM</span>
    <span>Pixels</span>
    <span>Visual representation</span>
  </div>

  {spacingRows.map((r) => (
    <div
      key={r[0]}
      className="grid grid-cols-5 px-8 py-5 border-b border-[#F2F4F6] items-center hover:bg-[#FAFBFC] transition"
    >
      <button
  onClick={() => navigator.clipboard.writeText(r[0])}
  className="
    inline-flex
    items-center
    gap-2
    w-fit
    px-3
    py-1.5
    rounded-md
    bg-[#F2F4F6]
    hover:bg-[#E5E8EB]
    transition
    font-mono
    text-[14px]
    text-[#4E5968]
  "
>
  <span>{r[0]}</span>
  <span className="text-[#8B95A1]">⧉</span>
</button>
      <span>{r[1]}</span>
      <span>{r[2]}</span>
      <span>{r[3]}</span>

      <div
        className="bg-black rounded-full"
        style={{
          width: r[3],
          height: "8px",
        }}
      />
    </div>
  ))}
</Card>
</div>
);
}

function GridPage() {
  return (
    <div>

      <div className="mb-16">
        <p className="text-sm text-[#8B95A1] mb-3">
          Foundations
        </p>

        <h1 className="text-[44px] font-bold tracking-tight">
          Grid
        </h1>

        <p className="text-[18px] text-[#4E5968] leading-[1.8] mt-5 max-w-[900px]">
          Grid는 화면과 콘텐츠의 정렬 기준을 정의한다.
          일관된 레이아웃과 시각적 균형을 위해
          동일한 구조와 규칙을 사용한다.
        </p>
      </div>

      <MobileGridSection />

      <IconGridSection />

      <WatchGridSection />

    </div>
  );
}
function MobileGridSection() {
  return (
    <div className="mb-24">

      <SectionTitle title="Mobile Grid" />

      <p className="text-[18px] text-[#4E5968] leading-[1.8] mb-10">
        모바일 화면은 4 Column Grid를 사용한다.
        모든 콘텐츠는 Margin과 Gutter 기준으로 정렬한다.
      </p>

      <Card>
        <div className="p-10">

          <div className="flex gap-10 flex-wrap justify-center">

            <img
              src={gridImg}
              alt=""
              className="w-[240px]"
            />

            <img
              src={gridOverlay}
              alt=""
              className="w-[240px]"
            />

          </div>

        </div>
      </Card>

      <div className="grid md:grid-cols-4 gap-6 mt-6">

        <SpecCard
          title="Columns"
          value="4"
        />

        <SpecCard
          title="Margin"
          value="16px"
        />

        <SpecCard
          title="Gutter"
          value="16px"
        />

        <SpecCard
          title="Layout"
          value="Responsive"
        />

      </div>

    </div>
  );
}
function IconGridSection() {
  return (
    <div className="mb-24">

      <SectionTitle title="Icon Grid" />

      <p className="text-[18px] text-[#4E5968] leading-[1.8] mb-10">
        모든 아이콘은 동일한 Grid 규칙을 사용하여
        일관된 비율과 시각적 균형을 유지한다.
      </p>

      <Card>
        <div className="p-10">
          <img
            src={iconGuide}
            alt=""
            className="w-full rounded-2xl"
          />
        </div>
      </Card>
    </div>
  );
}
function WatchGridSection() {
  return (
    <div>

      <SectionTitle title="Watch Grid" />

      <p className="text-[18px] text-[#4E5968] leading-[1.8] mb-10">
        원형 디스플레이 환경에서는 Safe Area를 기준으로
        컴포넌트를 배치한다.
      </p>

      <Card>
        <div className="p-10 flex justify-center">
          <img
            src={watchGrid}
            alt=""
            className="max-w-[720px] rounded-2xl"
          />
        </div>
      </Card>
<Card>
  <div className="overflow-x-auto">
    <table className="w-full">
      <thead>
        <tr className="border-b border-[#E5E8EB] bg-[#F8FAFC]">
          <th className="px-6 py-4 text-left">Type</th>
          <th className="px-6 py-4 text-left">Shape</th>
          <th className="px-6 py-4 text-left">Size</th>
          <th className="px-6 py-4 text-left">Description</th>
        </tr>
      </thead>

      <tbody>
        <tr className="border-b border-[#F2F4F6]">
          <td className="px-6 py-5">Small Round</td>
          <td className="px-6 py-5">Circle</td>
          <td className="px-6 py-5">192dp</td>
          <td className="px-6 py-5">
            Compact watch layout
          </td>
        </tr>

        <tr className="border-b border-[#F2F4F6]">
          <td className="px-6 py-5">Large Round</td>
          <td className="px-6 py-5">Circle</td>
          <td className="px-6 py-5">213dp</td>
          <td className="px-6 py-5">
            Large circular display
          </td>
        </tr>

        <tr className="border-b border-[#F2F4F6]">
          <td className="px-6 py-5">Rectangle</td>
          <td className="px-6 py-5">Rectangle</td>
          <td className="px-6 py-5">180 × 220dp</td>
          <td className="px-6 py-5">
            Rectangular watch layout
          </td>
        </tr>

        <tr>
          <td className="px-6 py-5">Square</td>
          <td className="px-6 py-5">Square</td>
          <td className="px-6 py-5">180dp</td>
          <td className="px-6 py-5">
            Square display layout
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</Card>

    </div>
  );
}
function SpecCard({ title, value }) {
  return (
    <div className="bg-[#F8FAFC] rounded-[24px] p-6">

      <div className="text-sm text-[#8B95A1] mb-2">
        {title}
      </div>

      <div className="text-[28px] font-bold">
        {value}
      </div>

    </div>
  );
}
function SizeCard({ size, desc }) {
  return (
    <div className="
      bg-white
      border
      border-[#E5E8EB]
      rounded-[20px]
      p-5
      text-center
    ">
      <div className="text-[24px] font-bold">
        {size}
      </div>

      <div className="text-sm text-[#8B95A1] mt-2">
        {desc}
      </div>
    </div>
  );
}

const lightPalettes = [
  {
      name: "Orange",
      token: "orange",
    colors: [
      { step: 50, hex: "#FFF7ED" },
      { step: 100, hex: "#FFEDD5" },
      { step: 200, hex: "#FED7AA" },
      { step: 300, hex: "#FDBA74" },
      { step: 400, hex: "#FB923C" },
      { step: 500, hex: "#F97316" },
    ],
  },
  {
    name: "Yellow",
    token: "Yellow",
    colors: [
      { step: 100, hex: "#FFF8E3" },
      { step: 200, hex: "#FFECB8" },
      { step: 300, hex: "#FFE08C" },
      { step: 400, hex: "#FFD560" },
      { step: 500, hex: "#FFB700" },
    ],
  },
  {
    name: "Gray",
    token: "Gray",
    colors: [
      { step: 200, hex: "#F4F4F4" },
      { step: 300, hex: "#E5E5E5" },
      { step: 400, hex: "#D5D5D5" },
      { step: 450, hex: "#C9C9C9" },
      { step: 500, hex: "#AAAAAA" },
      { step: 600, hex: "#888888" },
      { step: 700, hex: "#666666" },
      { step: 800, hex: "#222222" },
      { step: 900, hex: "#252425" },
    ],
  },
];

const darkPalettes = [
  {
    name: "Orange",
    colors: [
      { step: 50, hex: "#4A1F0A" },
      { step: 100, hex: "#5C2A0D" },
      { step: 200, hex: "#7A3A12" },
      { step: 300, hex: "#9A4E18" },
      { step: 400, hex: "#C2641F" },
      { step: 500, hex: "#F97316" },
    ],
  },
  {
    name: "Yellow",
    colors: [
      { step: 100, hex: "#4A3B00" },
      { step: 200, hex: "#665200" },
      { step: 300, hex: "#806600" },
      { step: 400, hex: "#A37F00" },
      { step: 500, hex: "#FFB700" },
    ],
  },
  {
    name: "Gray",
    colors: [
      { step: 200, hex: "#2A2A2A" },
      { step: 300, hex: "#3A3A3A" },
      { step: 400, hex: "#4A4A4A" },
      { step: 450, hex: "#5A5A5A" },
      { step: 500, hex: "#7A7A7A" },
      { step: 600, hex: "#9A9A9A" },
      { step: 700, hex: "#B5B5B5" },
      { step: 800, hex: "#D1D1D1" },
      { step: 900, hex: "#EDEDED" },
    ],
  },
];

const accessibilityGood = [
  {
    title: "일반 사용자가 보는 색상",
    colorBlind: false,
    colors: [
      ["Black", "#000000"],
      ["Orange", "#E69F00"],
      ["Sky blue", "#56B4E9"],
      ["Bluish green", "#009E73"],
      ["Yellow", "#F0E442"],
      ["Blue", "#0072B2"],
      ["Vermilion", "#D55E00"],
      ["Reddish purple", "#CC79A7"],
    ],
  },
  {
    title: "적록색약자가 보는 색상",
    colorBlind: true,
    colors: [
      ["Black", "#000000", "#000000"],
      ["Orange", "#E69F00", "#B7A400"],
      ["Sky blue", "#56B4E9", "#7E97D8"],
      ["Bluish green", "#009E73", "#A39B79"],
      ["Yellow", "#F0E442", "#F0E442"],
      ["Blue", "#0072B2", "#5978B8"],
      ["Vermilion", "#D55E00", "#8A7B00"],
      ["Reddish purple", "#CC79A7", "#7F89A9"],
    ],
  }
];

const accessibilityBad = [
  {
    title: "일반 사용자가 보는 색상",
    colors: [
      ["", "#F5003D"],
      ["", "#006B21"],
      ["", "#946300"],
      ["", "#006B21"],
      ["", "#E4DA3D"],
      ["", "#6BC679"],
      ["", "#1476AD"],
      ["", "#C154A7"],
      ["", "#284B9B"],
      ["", "#56389E"],
    ],
  },
  {
    title: "적록색약자가 보는 색상",
    colors: [
      ["", "#706642"],
      ["", "#6F6513"],
      ["", "#776A00"],
      ["", "#70661B"],
      ["", "#CCBE74"],
      ["", "#E1C900"],
      ["", "#5978B8"],
      ["", "#6279B2"],
      ["", "#0D4F97"],
      ["", "#0F4D96"],
    ],
  },
];

function copyHex(hex) {
  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(hex);
alert(`${hex} copied to clipboard`);
  }
}

function PaletteColumn({ palette, dark = false }) {

  return (
    <div className="bg-white border border-[#E5E8EB] rounded-[24px] overflow-hidden">

      {/* header */}
      <div className="px-6 py-5 border-b border-[#F2F4F6] bg-[#FAFBFC]">
        <h3 className="text-[20px] font-semibold tracking-tight">
          {palette.name}
        </h3>
      </div>

      {/* rows */}
      <div>

        {palette.colors.map((c) => {

          const token =
            `${palette.name.toLowerCase()}-${c.step}`;

          return (
            <div
              key={token}
              className="
                grid
                grid-cols-[72px_1fr_140px_180px]
                items-center
                gap-6
                px-6
                py-3
                border-b
                border-[#F2F4F6]
                hover:bg-[#FAFBFC]
                transition
              "
            >

              {/* swatch */}
              <button
                onClick={() => copyHex(c.hex)}
                className="
                  w-12
                  h-12
                  rounded-xl
                  border
                  border-[#E5E8EB]
                "
                style={{
                  backgroundColor: c.hex,
                }}
              />

              {/* token */}
              <button
                onClick={() => copyHex(token)}
                className={`
                  text-left
                  text-[15px]
                  font-medium
                  transition
                  ${
                    dark
                      ? "text-[#191F28]"
                      : "text-[#191F28]"
                  }
                  hover:text-[#2563EB]
                `}
              >
                {token}
              </button>

              {/* hex */}
              <button
                onClick={() => copyHex(c.hex)}
                className={`
                  text-left
                  font-mono
                  text-[14px]
                  transition
                  ${
                    dark
                      ? "text-[#4E5968]"
                      : "text-[#4E5968]"
                  }
                  hover:text-black
                `}
              >
                {c.hex}
              </button>

              {/* css variable */}
              <button
                onClick={() =>
                  copyHex(`var(--${token})`)
                }
                className="
                  text-left
                  font-mono
                  text-[13px]
                  text-[#8B95A1]
                  hover:text-black
                  transition
                "
              >
                var(--{token})
              </button>

            </div>
          );
        })}

      </div>

    </div>
  );
}

function accessibleTextColor(color) {
  return ["#000000", "#0072B2", "#009E73", "#D55E00"].includes(color)
    ? "#fff"
    : "#191F28";
}

function PalettePage() {
  return (
    <div>
      <div className="mb-14">
        <p className="text-sm text-[#8B95A1] mb-3">Foundations</p>
        <h1 className="text-[44px] font-bold tracking-tight">Color Palette</h1>
        <p className="text-[#6B7684] text-[15px] leading-7 mt-5">
          Palette colors are used across the system.
        </p>
      </div>

      <div className="mb-20">
        <h2 className="text-[28px] font-bold tracking-tight mb-8">Light Mode</h2>
        <div className="grid xl:grid-cols-2 gap-6 mb-12">
          {lightPalettes
            .filter((p) => p.name !== "Gray")
            .map((p) => (
              <PaletteColumn key={p.name} palette={p} />
            ))}
        </div>

        <div>
          <h2 className="text-[24px] font-bold tracking-tight mb-8">
            Light mode neutrals
          </h2>
          <div className="grid grid-cols-1">
            {lightPalettes
              .filter((p) => p.name === "Gray")
              .map((p) => (
                <PaletteColumn key={p.name} palette={p} />
              ))}
          </div>
        </div>
      </div>



      <div className="mt-24">
        <h2 className="text-[28px] font-bold tracking-tight mb-8">Dark Mode</h2>
        <div className="grid xl:grid-cols-2 gap-6">
          {darkPalettes.map((p) => (
            <PaletteColumn key={p.name} palette={p} dark />
          ))}
        </div>
      </div>
      <div className="mt-24">
        <h2 className="text-[32px] font-bold tracking-tight mb-8">
          색각이상자가 명확히 구분할 수 있는 색상
        </h2>
        <div className="bg-[#F2F4F6] rounded-[28px] p-10">
          {accessibilityGood.map((section) => (
            <div key={section.title} className="mb-10 last:mb-0">
              <h3 className="text-[22px] font-semibold mb-6">{section.title}</h3>
              <div className="space-y-4">
              <div className="flex overflow-hidden rounded-2xl">
              {section.colors.map(([label, color, displayColor]) => (
    <div
      key={label}
      className="flex-1 h-[124px] px-3 py-4 flex flex-col justify-between"
      style={{
        backgroundColor: displayColor || color,
        color:
          color === "#000000" || color === "#0072B2"
            ? "#fff"
            : "#191F28",
      }}
    >
      <div className="text-[15px] font-medium">
        {label}
      </div>

      <div className="text-[14px] font-medium">
        {color}
      </div>
    </div>
  ))}
</div>

</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24">
        <h2 className="text-[32px] font-bold tracking-tight mb-8">
          색각이상자가 구분하기 어려운 조합
        </h2>
        <div className="bg-[#F2F4F6] rounded-[28px] p-10">
          {accessibilityBad.map((section) => (
            <div key={section.title} className="mb-10 last:mb-0">
              <h3 className="text-[22px] font-semibold mb-6">{section.title}</h3>
              <div className="flex flex-wrap gap-4">
                {Array.from({ length: section.colors.length / 2 }).map((_, i) => (
                  <div key={i} className="flex overflow-hidden rounded-xl">
                    <div
                      className="w-[78px] h-[52px]"
                      style={{ background: section.colors[i * 2][1] }}
                    />
                    <div
                      className="w-[78px] h-[52px]"
                      style={{ background: section.colors[i * 2 + 1][1] }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
          {/* 색각이상 주의사항 */}
<div className="mt-12 bg-white border border-[#E5E8EB] rounded-[24px] p-8">
  <h3 className="text-[22px] font-bold tracking-tight text-[#191F28] mb-6">
    색상 사용 시 주의사항
  </h3>

  <div className="space-y-10">

    {/* RED */}
    <div>
      <p className="text-[17px] leading-[1.7] text-[#4E5968] mb-5">
        <strong className="text-[#191F28]">빨간색</strong>은
        초록색 또는 갈색과 혼동될 수 있으므로
        주황 계열로 채도를 변경하는 것이 좋습니다.
      </p>

      <div className="flex items-center gap-6">

        <div className="flex overflow-hidden rounded-2xl shadow-sm border border-[#E5E8EB]">
          <div className="w-[220px] h-[92px] bg-[#FF0000] flex flex-col items-center justify-center">
            <span className="text-[18px] font-semibold text-black">
              Red
            </span>

            <span className="text-[16px] text-black mt-1">
              #FF0000
            </span>
          </div>

          <div className="w-[76px] h-[92px] bg-[#A3A3A3] flex items-center justify-center text-white text-[28px]">
            →
          </div>

          <div className="w-[220px] h-[92px] bg-[#D55E00] flex flex-col items-center justify-center">
            <span className="text-[18px] font-semibold text-white">
              Vermilion
            </span>

            <span className="text-[16px] text-white mt-1">
              #D55E00
            </span>
          </div>
        </div>

      </div>
    </div>

    {/* GREEN */}
    <div>
      <p className="text-[17px] leading-[1.7] text-[#4E5968] mb-5">
        <strong className="text-[#191F28]">초록색</strong>은
        빨간색 또는 갈색과 혼동될 수 있으므로
        청록 계열로 채도를 변경하는 것이 좋습니다.
      </p>

      <div className="flex items-center gap-6">

        <div className="flex overflow-hidden rounded-2xl shadow-sm border border-[#E5E8EB]">
          <div className="w-[220px] h-[92px] bg-[#00FF00] flex flex-col items-center justify-center">
            <span className="text-[18px] font-semibold text-black">
              Green
            </span>

            <span className="text-[16px] text-black mt-1">
              #00FF00
            </span>
          </div>

          <div className="w-[76px] h-[92px] bg-[#A3A3A3] flex items-center justify-center text-white text-[28px]">
            →
          </div>

          <div className="w-[220px] h-[92px] bg-[#009E73] flex flex-col items-center justify-center">
            <span className="text-[18px] font-semibold text-white">
              Bluish Green
            </span>

            <span className="text-[16px] text-white mt-1">
              #009E73
            </span>
          </div>
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
const iconItems = [
  { label: "홈", slug: "home" },
  { label: "카테고리", slug: "category" },
  { label: "마이페이지", slug: "mypage" },
  { label: "예약", slug: "reservation" },
  { label: "찜", slug: "wishlist" },

  { label: "검색", slug: "search" },
  { label: "알림", slug: "notification" },
  { label: "장바구니", slug: "cart" },
  { label: "필터", slug: "filter" },
  { label: "위치", slug: "location" },

  { label: "추가", slug: "add" },
  { label: "원형 추가", slug: "add_circle" },

  { label: "왼쪽 화살표", slug: "arrow_left" },
  { label: "오른쪽 화살표", slug: "arrow_right" },
  { label: "확인", slug: "check" },
  { label: "아코디언", slug: "accordion_down" },
];

const illustrationModules = import.meta.glob(
  "./assets/illustrations/*.{png,svg,webp}",
  {
    eager: true,
    import: "default",
  }
);
const illustrationItems = [
  { label: "내아이조회", slug: "my_child" },

  { label: "0~24개월", slug: "age_0_24m" },
  { label: "2~4세", slug: "age_2_4" },
  { label: "5~7세", slug: "age_5_7" },
  { label: "초등", slug: "elementary" },

  { label: "창의", slug: "creative" },
  { label: "교육", slug: "education" },
  { label: "전시", slug: "exhibition" },
  { label: "음악·미술", slug: "music_art" },

  { label: "신체", slug: "physical" },
  { label: "감각", slug: "sensory" },
];

function IllustrationPage() {
  const [selectedIllustration, setSelectedIllustration] = useState(illustrationItems[0]);

  return (
    <div className="grid grid-cols-[1fr_380px] gap-10">

      {/* LEFT */}
      <div>
  {/* ICON GUIDE */}

        <div className="grid grid-cols-4 gap-8">

          {illustrationItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setSelectedIllustration(item)}
              className={`
                rounded-[28px]
                p-6
                transition
                text-left
                ${
                  selectedIllustration.label === item.label
                    ? "bg-[#F3F4F6]"
                    : "hover:bg-[#F8FAFC]"
                }
              `}
            >

              <div className="text-[#5B4CF0] text-[18px] font-medium leading-[1.5] mb-6">
              ◆ill_{item.slug}
              </div>

              <div
  className="
    w-[100px]
    h-[100px]
    rounded-[24px]
    border
    border-[#E5E8EB]
    bg-white
    flex
    items-center
    justify-center
  "
>

<img
    src={getIllustrationSrc(item.slug)}
    alt={item.label}
    className="
      max-w-[80px]
      max-h-[80px]
      object-contain
    "
  />

            </div>

            </button>
          ))}

        </div>

      </div>

     {/* RIGHT PANEL */}
<div className="
  bg-white
  border
  border-[#E5E8EB]
  rounded-[32px]
  overflow-hidden
  h-fit
">

  {/* preview */}
  <div className="
    h-[150px]
    border-b
    border-[#E5E8EB]
    flex
    items-center
    justify-center
    text-[34px]
  ">
    ✦
  </div>

  <div className="p-8">

    {/* title */}
    <div className="mb-8">

      <div className="flex items-center gap-3 mb-4">

        <h2 className="text-[42px] text-[#7C3AED] font-bold tracking-tight leading-none">
        ◆ill_{selectedIllustration.slug}
        </h2>

      
      </div>
   
    </div>

  </div>

  {/* REACT */}
  <div className="border-t border-[#E5E8EB] p-8">

    <div className="text-[34px] font-bold mb-6">
      React
    </div>

    <div className="
      bg-[#F3F4F6]
      rounded-[16px]
      p-6
      text-[17px]
      leading-[2]
      font-mono
      text-[#374151]
      relative
    ">

{`import ${selectedIllustration.label.replace(/\s/g, "")}Icon from
'@atlaskit/icon/core/${selectedIllustration.slug}';`}

      <button
        onClick={() =>
          navigator.clipboard.writeText(
`import ${selectedIllustration.label.replace(/\s/g, "")}Icon from '@atlaskit/icon/core/${selectedIllustration.slug}';`
          )
        }
        className="
          absolute
          top-5
          right-5
          text-[22px]
        "
      >
        ⧉
      </button>

    </div>

    <a
      href="#"
      className="
        inline-flex
        items-center
        gap-2
        text-[#2563EB]
        text-[18px]
        underline
        mt-6
      "
    >
      Icon code examples ↗
    </a>

  </div>

  {/* SIZES */}
  <div className="border-t border-[#E5E8EB] p-8">

    <div className="text-[34px] font-bold mb-8">
      Sizes
    </div>

    <div className="space-y-6">

      {/* SMALL */}
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-5">

         
          <div className="flex items-center gap-3">

            <span className="
              px-3
              py-1
              rounded-[8px]
              bg-[#F3F4F6]
              text-[16px]
            ">
              Small
            </span>

         

          </div>

        </div>

        <button
          onClick={() =>
            navigator.clipboard.writeText(
              `<Icon size="small" />`
            )
          }
          className="text-[22px]"
        >
          ⧉
        </button>

      </div>

      {/* MEDIUM */}
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-5">


          <div className="flex items-center gap-3">

            <span className="
              px-3
              py-1
              rounded-[8px]
              bg-[#F3F4F6]
              text-[16px]
            ">
              Medium
            </span>

          

          </div>

        </div>

        <button
          onClick={() =>
            navigator.clipboard.writeText(
              `<Icon size="medium" />`
            )
          }
          className="text-[22px]"
        >
          ⧉
        </button>

      </div>

    </div>

  </div>
{/* STATUS */}
<div className="border-t border-[#E5E8EB] p-8">

<div className="text-[34px] font-bold mb-8">
Status
</div>

<div className="space-y-6">

  {/* SMALL */}
  <div className="flex items-center justify-between">

    <div className="flex items-center gap-5">

     
      <div className="flex items-center gap-3">

        <span className="
          px-3
          py-1
          rounded-[8px]
          bg-[#F3F4F6]
          text-[16px]
        ">
          true
        </span>

     

      </div>

    </div>

    <button
      onClick={() =>
        navigator.clipboard.writeText(
          `<Icon size="small" />`
        )
      }
      className="text-[22px]"
    >
      ⧉
    </button>

  </div>

  {/* MEDIUM */}
  <div className="flex items-center justify-between">

    <div className="flex items-center gap-5">


      <div className="flex items-center gap-3">

        <span className="
          px-3
          py-1
          rounded-[8px]
          bg-[#F3F4F6]
          text-[16px]
        ">
          false
        </span>

      

      </div>

    </div>

    <button
      onClick={() =>
        navigator.clipboard.writeText(
          `<Icon size="medium" />`
        )
      }
      className="text-[22px]"
    >
      ⧉
    </button>

  </div>

</div>

</div>
  {/* FIGMA */}
  <div className="border-t border-[#E5E8EB] p-8">

    <div className="text-[34px] font-bold mb-6">
      Figma
    </div>

    <a
      href="https://figma.com"
      target="_blank"
      className="
        text-[#2563EB]
        underline
        text-[18px]
      "
    >
      Atlassian icon library ↗
    </a>

  </div>

</div>


    </div>
    
  );
}
function getIllustrationSrc(slug) {
  return (
    illustrationModules[
      `./assets/illustrations/${slug}.png`
    ] ||
    illustrationModules[
      `./assets/illustrations/${slug}.svg`
    ] ||
    alertImage
  );
}
function ButtonPage() {
  const [sizeTab, setSizeTab] = useState("design");
  const [hierarchyTab, setHierarchyTab] = useState("design");
  const [emphasisButtonTab, setEmphasisButtonTab] = useState("design");
  const [iconButtonTab, setIconButtonTab] = useState("design");

  return (
    <div>

      {/* HEADER */}
      <div className="mb-14">

        <p className="text-sm text-[#8B95A1] mb-3">
          Components
        </p>

        <h1 className="text-[44px] font-bold tracking-tight">
          Button
        </h1>

        <p className="text-[#4E5968] text-[18px] leading-[1.8] mt-6 max-w-[920px]">
          Buttons trigger actions and allow users to interact with the interface.
          Use different sizes depending on hierarchy and layout density.
        </p>

      </div>

      {/* SIZE SECTION */}
      <SectionTitle title="크기 조정하기" />

      <p className="text-[18px] leading-[1.8] text-[#4E5968] mb-8 max-w-[920px]">
        Button 컴포넌트의 크기를 변경하려면
        <code className="mx-2 px-2 py-1 rounded bg-[#F3F4F6] text-[16px]">
          size
        </code>
        속성을 사용하세요.
      </p>

      <Card>
        <div className="p-4 border-b border-[#E5E8EB] bg-white">
          <div className="inline-flex rounded-[12px] bg-[#F2F4F6] p-1">
            <button
              onClick={() => setSizeTab("design")}
              className={`px-5 py-2 rounded-[10px] text-[14px] font-semibold transition ${
                sizeTab === "design" ? "bg-white text-[#191F28] shadow-sm" : "text-[#6B7280]"
              }`}
            >
              Design
            </button>
            <button
              onClick={() => setSizeTab("code")}
              className={`px-5 py-2 rounded-[10px] text-[14px] font-semibold transition ${
                sizeTab === "code" ? "bg-white text-[#191F28] shadow-sm" : "text-[#6B7280]"
              }`}
            >
              Code
            </button>
          </div>
        </div>

        {sizeTab === "design" ? (
          <div className="p-10 bg-[#FAFBFC]">
           <div className="flex items-start gap-8 flex-wrap">

{/* SMALL */}
<div className="flex flex-col gap-3">
  <div className="text-[18px] font-semibold text-[#7C3AED]">
    ◆btn-small
  </div>

  <button className="
  
    rounded-[8px]
    bg-[#F97316]
    text-white
  h-[46px] px-5 text-[18px] font-medium">
    Small
  </button>
</div>

{/* MEDIUM */}
<div className="flex flex-col gap-3">
  <div className="text-[18px] font-semibold text-[#7C3AED]">
    ◆btn-medium
  </div>

  <button className="
  
  rounded-[8px]
    bg-[#F97316]
    text-white
  h-[54px] px-7 text-[20px] font-medium">
    Medium
  </button>
</div>

{/* LARGE */}
<div className="flex flex-col gap-3">
  <div className="text-[18px] font-semibold text-[#7C3AED]">
    ◆btn-large
  </div>

  <button className="
  
  rounded-[8px]
    bg-[#F97316]
    text-white
    
    h-[64px] px-9 text-[24px] font-medium">
    Large
  </button>
</div>

{/* XLARGE */}
<div className="flex flex-col gap-3">
  <div className="text-[18px] font-medium text-[#7C3AED]">
    ◆btn-xlarge
  </div>

  <button className="
  
  rounded-[8px]
    bg-[#F97316]
    text-white
    
    h-[74px] px-11 text-[28px] font-medium">
    XLarge
  </button>
</div>

</div>
          </div>
        ) : (
          <div className="bg-[#031B34] p-10 relative overflow-auto">
            <div className="absolute top-6 right-6 w-11 h-11 rounded-xl bg-[#0A2747] flex items-center justify-center text-white text-[20px]">
              ⧉
            </div>
            <div className="text-center text-[#7C8DA1] text-[15px] font-semibold mb-8">
              EDITABLE EXAMPLE
            </div>
            <pre className="text-[18px] leading-[2] text-white whitespace-pre-wrap overflow-auto">
{`<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
  <Button size="small">Small</Button>
  <Button size="medium">Medium</Button>
  <Button size="large">Large</Button>
  <Button size="xlarge">XLarge</Button>
</div>`}
            </pre>
          </div>
        )}

      </Card>

            {/* HIERARCHY */}
            <div className="mt-24">

<SectionTitle title="계층" />

<Card>
  <div className="p-4 border-b border-[#E5E8EB] bg-white">
    <div className="inline-flex rounded-[12px] bg-[#F2F4F6] p-1">
      <button
        onClick={() => setHierarchyTab("design")}
        className={`px-5 py-2 rounded-[10px] text-[14px] font-semibold transition ${
          hierarchyTab === "design" ? "bg-white text-[#191F28] shadow-sm" : "text-[#6B7280]"
        }`}
      >
        Design
      </button>
      <button
        onClick={() => setHierarchyTab("code")}
        className={`px-5 py-2 rounded-[10px] text-[14px] font-semibold transition ${
          hierarchyTab === "code" ? "bg-white text-[#191F28] shadow-sm" : "text-[#6B7280]"
        }`}
      >
        Code
      </button>
    </div>
  </div>

  {hierarchyTab === "design" ? (
    <div className="p-14 bg-[#FAFBFC]">
    <div className="flex items-start gap-8 flex-wrap">

  {/* PRIMARY */}
  <div className="flex flex-col gap-3">

    <div className="text-[18px] font-semibold text-[#7C3AED]">
      ◆btn-primary
    </div>

    <button
  className="
    w-[168px]
    h-[48px]
    rounded-[8px]
    bg-[#F97316]
    text-white
    text-[16px]
    font-medium
    hover:bg-[#EA6A10]
    transition-colors
  "
>
 text
</button>

  </div>

  {/* SECONDARY */}
  <div className="flex flex-col gap-3">

    <div className="text-[18px] font-semibold text-[#7C3AED]">
      ◆btn-secondary
    </div>

    <button
  className="
    w-[168px]
    h-[48px]
    rounded-[8px]
    bg-[#FFD560]
    text-white
    text-[16px]
    font-medium
    hover:bg-[#EA6A10]
    transition-colors
  "
>
 text
</button>

  </div>

  {/* OUTLINE */}
  <div className="flex flex-col gap-3">

    <div className="text-[18px] font-semibold text-[#7C3AED]">
      ◆btn-outline
    </div>
  <button
    className="
      w-[168px]
      h-[48px]
      rounded-[8px] 
      bg-transparent
      border
      border-[#F97316]
      text-[#F97316]
      text-[16px]
      font-medium
      transition-colors
    "
  >
  text
  </button>

  </div>

   {/* OUTLINE */}
   <div className="flex flex-col gap-3">

<div className="text-[18px] font-semibold text-[#7C3AED]">
  ◆btn-outline
</div>
<button
  className="
    w-[168px]
    h-[48px]
    rounded-[8px]
    bg-white
    border
    border-[#E5E5E5]
    text-[#222222]
    text-[16px]
    font-medium
    hover:bg-[#F5F5F5]
    transition-colors
  "
>
  text
</button>

</div>


</div>
    </div>
  ) : (
    <div className="bg-[#031B34] px-10 py-9 overflow-auto">
      <pre className="text-[16px] leading-[1.9] text-white whitespace-pre-wrap">
{`<Button appearance="primary">버튼 · primary</Button>
<Button appearance="secondary">버튼 · secondary</Button>
<Button appearance="tertiary">버튼 · tertiary</Button>`}
      </pre>
    </div>
  )}

</Card>

</div>
      {/* EMPHASIS BUTTONS */}
      <div className="mt-16">
        <Card>
          <div className="p-4 border-b border-[#E5E8EB] bg-white">
            <div className="inline-flex rounded-[12px] bg-[#F2F4F6] p-1">
              <button
                onClick={() => setEmphasisButtonTab("design")}
                className={`px-5 py-2 rounded-[10px] text-[14px] font-semibold transition ${
                  emphasisButtonTab === "design" ? "bg-white text-[#191F28] shadow-sm" : "text-[#6B7280]"
                }`}
              >
                Design
              </button>
              <button
                onClick={() => setEmphasisButtonTab("code")}
                className={`px-5 py-2 rounded-[10px] text-[14px] font-semibold transition ${
                  emphasisButtonTab === "code" ? "bg-white text-[#191F28] shadow-sm" : "text-[#6B7280]"
                }`}
              >
                Code
              </button>
            </div>
          </div>

          {emphasisButtonTab === "design" ? (
            <div className="p-6 md:p-8 bg-[#F8FAFC]">
           <div className="flex items-start gap-6 md:gap-8 flex-wrap">

{/* CONFIRM */}
<div className="flex flex-col gap-3">

  <div className="text-[18px] font-semibold text-[#7C3AED]">
    ◆btn-confirm
  </div>

  <button
  className="
    w-[168px]
    h-[48px]
    rounded-[8px]
    bg-[#F97316]
    text-white
    text-[16px]
    font-medium
    hover:bg-[#EA6A10]
    transition-colors
    tracking-tight
    inline-flex
    items-center
    justify-center
    gap-2
  "
>
  <span className="text-[16px] leading-none">♥</span>
  <span>확인</span>
</button>

</div>



{/* LOADING */}
<div className="flex flex-col gap-3">
  <div className="text-[18px] font-semibold text-[#7C3AED]">
    ◆btn-loading
  </div>

  <button
  className="
    h-[54px]
    w-[120px]
    rounded-[8px]
    bg-[#F97316]
    flex
    items-center
    justify-center
    gap-2
  "
>
  <div className="w-2 h-2 rounded-full bg-white animate-bounce" />
  <div
    className="w-2 h-2 rounded-full bg-white animate-bounce"
    style={{ animationDelay: "0.15s" }}
  />
  <div
    className="w-2 h-2 rounded-full bg-white animate-bounce"
    style={{ animationDelay: "0.3s" }}
  />
</button>
</div>

{/* DISABLED */}
<div className="flex flex-col gap-3">

  <div className="text-[18px] font-semibold text-[#7C3AED]">
    ◆btn-disabled
  </div>

  <button
  className="
    w-[168px]
    h-[48px]
    rounded-[8px]
    bg-[#E5E5E5]
    text-[#888888]
    text-[16px]
    font-medium
    transition-colors
  "
>
 비활성
</button>

</div>

</div>
            </div>
          ) : (
            <div className="bg-[#031B34] px-10 py-9 overflow-auto">
              <pre className="text-[16px] leading-[1.9] text-white whitespace-pre-wrap">
{`<div className="flex items-center gap-4 flex-wrap">
  <Button appearance="primary" iconLeft="heart">확인</Button>
  <Button appearance="secondary">다음에</Button>
  <Button loading />
  <Button appearance="secondary" disabled iconLeft="arrow-down">비활성</Button>
</div>`}
              </pre>
            </div>
          )}
        </Card>
      </div>
           
            {/* ACCESSIBILITY */}
            <div className="mt-24">

<SectionTitle title="접근성" />

{/* button role */}
<Card>

  <div className="p-10">

    <h3 className="text-[32px] font-bold tracking-tight leading-[1.5] mb-8">
      버튼으로 작동하는 모든 요소는
      스크린 리더에서 버튼으로 인지될 수 있도록 한다.
    </h3>

    <p className="text-[20px] leading-[1.9] text-[#374151] max-w-[1050px]">
      {"<button>"} 대신 불가피하게 다른 태그를 사용해야 하는 경우
      <code className="mx-2 px-2 py-1 rounded bg-[#F3F4F6] text-[18px]">
        role="button"
      </code>
      을 사용하여 스크린 리더에서 요소의 역할이 버튼으로
      인식될 수 있도록 해야 한다.
    </p>

    <ul className="mt-10 space-y-4 text-[20px] text-[#4B5563]">
      <li className="flex items-start gap-4">
        <span>•</span>
        <span>WCAG 2.1 Name, Role, Value (A)</span>
      </li>
    </ul>

  </div>

</Card>

{/* target size */}
<Card>

  <div className="p-10">

    <h3 className="text-[32px] font-bold tracking-tight leading-[1.5] mb-8">
      버튼을 적합한 크기로 제공한다.
    </h3>

    <p className="text-[20px] leading-[1.9] text-[#374151] max-w-[1100px]">
      클릭, 터치 영역을 정교하게 조작하기 어려운 사용자를 고려하여,
      마우스 상호작용에 대해서는 17px × 17px,
      터치 상호작용에 대해서는 44px × 44px 이상의 영역에서
      반응할 수 있는 컨트롤 크기를 사용할 것을 권장한다.
    </p>

    <ul className="mt-10 space-y-4 text-[20px] text-[#4B5563]">
      <li className="flex items-start gap-4">
        <span>•</span>
        <span>KWCAG 2.2 조작 가능</span>
      </li>

      <li className="flex items-start gap-4">
        <span>•</span>
        <span>WCAG 2.1 Target Size (AAA)</span>
      </li>
    </ul>

  </div>

</Card>

{/* keyboard navigation */}
<div className="mt-20">

  <h3 className="text-[36px] font-bold tracking-tight mb-8">
    탐색
  </h3>

  <div className="overflow-hidden rounded-[24px] border border-[#E5E8EB] bg-white">

    {/* header */}
    <div className="grid grid-cols-[180px_1fr] bg-[#EEF1F4] border-b border-[#D9DEE3]">

      <div className="px-6 py-5 text-[20px] font-semibold">
        구분
      </div>

      <div className="px-6 py-5 text-[20px] font-semibold">
        설명
      </div>

    </div>

    {/* row */}
    <div className="grid grid-cols-[180px_1fr]">

      <div className="px-6 py-8 border-r border-[#E5E8EB] text-[22px] leading-[1.8] text-[#2F3A47]">
        Tab,
        <br />
        Shift + Tab
      </div>

      <div className="px-6 py-8 text-[22px] leading-[1.8] text-[#2F3A47]">
        모든 버튼은 Tab, Shift + Tab 키를 눌렀을 때
        접근할 수 있어야 한다.
      </div>

    </div>

  </div>

</div>

</div>

    </div>
  );
}
function IconPage() {
  const [selectedIcon, setSelectedIcon] = useState(iconItems[0]);

  return (
    <div className="grid grid-cols-[1fr_380px] gap-10">

      {/* LEFT */}
      <div>
  {/* ICON GUIDE */}

        <div className="grid grid-cols-4 gap-8">

          {iconItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setSelectedIcon(item)}
              className={`
                rounded-[28px]
                p-6
                transition
                text-left
                ${
                  selectedIcon.label === item.label
                    ? "bg-[#F3F4F6]"
                    : "hover:bg-[#F8FAFC]"
                }
              `}
            >

              <div className="text-[#5B4CF0] text-[18px] font-medium leading-[1.5] mb-6">
              ◆ic_{item.slug}
              </div>

              <div
              className="
                w-[76px]
                h-[76px]
                rounded-[20px]
                border
                border-[#E5E8EB]
                bg-white
                flex
                items-center
                justify-center
              "
            >

              <img
                src={getIconSrc(item.slug)}
                alt={item.label}
                className="w-[32px] h-[32px] object-contain"
              />

            </div>

            </button>
          ))}

        </div>

      </div>

     {/* RIGHT PANEL */}
<div className="
  bg-white
  border
  border-[#E5E8EB]
  rounded-[32px]
  overflow-hidden
  h-fit
">

  {/* preview */}
  <div className="
    h-[150px]
    border-b
    border-[#E5E8EB]
    flex
    items-center
    justify-center
    text-[34px]
  ">
    ✦
  </div>

  <div className="p-8">

    {/* title */}
    <div className="mb-8">

      <div className="flex items-center gap-3 mb-4">

        <h2 className="text-[42px] text-[#7C3AED] font-bold tracking-tight leading-none">
        ◆ic_{selectedIcon.slug}
        </h2>

      
      </div>
   
    </div>

  </div>

  {/* REACT */}
  <div className="border-t border-[#E5E8EB] p-8">

    <div className="text-[34px] font-bold mb-6">
      React
    </div>

    <div className="
      bg-[#F3F4F6]
      rounded-[16px]
      p-6
      text-[17px]
      leading-[2]
      font-mono
      text-[#374151]
      relative
    ">

{`import ${selectedIcon.label.replace(/\s/g, "")}Icon from
'@atlaskit/icon/core/${selectedIcon.slug}';`}

      <button
        onClick={() =>
          navigator.clipboard.writeText(
`import ${selectedIcon.label.replace(/\s/g, "")}Icon from '@atlaskit/icon/core/${selectedIcon.slug}';`
          )
        }
        className="
          absolute
          top-5
          right-5
          text-[22px]
        "
      >
        ⧉
      </button>

    </div>

    <a
      href="#"
      className="
        inline-flex
        items-center
        gap-2
        text-[#2563EB]
        text-[18px]
        underline
        mt-6
      "
    >
      Icon code examples ↗
    </a>

  </div>

  {/* SIZES */}
  <div className="border-t border-[#E5E8EB] p-8">

    <div className="text-[34px] font-bold mb-8">
      Sizes
    </div>

    <div className="space-y-6">

      {/* SMALL */}
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-5">

         
          <div className="flex items-center gap-3">

            <span className="
              px-3
              py-1
              rounded-[8px]
              bg-[#F3F4F6]
              text-[16px]
            ">
              Small
            </span>

         

          </div>

        </div>

        <button
          onClick={() =>
            navigator.clipboard.writeText(
              `<Icon size="small" />`
            )
          }
          className="text-[22px]"
        >
          ⧉
        </button>

      </div>

      {/* MEDIUM */}
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-5">


          <div className="flex items-center gap-3">

            <span className="
              px-3
              py-1
              rounded-[8px]
              bg-[#F3F4F6]
              text-[16px]
            ">
              Medium
            </span>

          

          </div>

        </div>

        <button
          onClick={() =>
            navigator.clipboard.writeText(
              `<Icon size="medium" />`
            )
          }
          className="text-[22px]"
        >
          ⧉
        </button>

      </div>

    </div>

  </div>
{/* STATUS */}
<div className="border-t border-[#E5E8EB] p-8">

<div className="text-[34px] font-bold mb-8">
Status
</div>

<div className="space-y-6">

  {/* SMALL */}
  <div className="flex items-center justify-between">

    <div className="flex items-center gap-5">

     
      <div className="flex items-center gap-3">

        <span className="
          px-3
          py-1
          rounded-[8px]
          bg-[#F3F4F6]
          text-[16px]
        ">
          true
        </span>

     

      </div>

    </div>

    <button
      onClick={() =>
        navigator.clipboard.writeText(
          `<Icon size="small" />`
        )
      }
      className="text-[22px]"
    >
      ⧉
    </button>

  </div>

  {/* MEDIUM */}
  <div className="flex items-center justify-between">

    <div className="flex items-center gap-5">


      <div className="flex items-center gap-3">

        <span className="
          px-3
          py-1
          rounded-[8px]
          bg-[#F3F4F6]
          text-[16px]
        ">
          false
        </span>

      

      </div>

    </div>

    <button
      onClick={() =>
        navigator.clipboard.writeText(
          `<Icon size="medium" />`
        )
      }
      className="text-[22px]"
    >
      ⧉
    </button>

  </div>

</div>

</div>
  {/* FIGMA */}
  <div className="border-t border-[#E5E8EB] p-8">

    <div className="text-[34px] font-bold mb-6">
      Figma
    </div>

    <a
      href="https://figma.com"
      target="_blank"
      className="
        text-[#2563EB]
        underline
        text-[18px]
      "
    >
      Atlassian icon library ↗
    </a>

  </div>

</div>


    </div>
    
  );
}

function MotionPage() {

  const [dropdownPlay, setDropdownPlay] = useState(false);
  const [modalPlay, setModalPlay] = useState(false);
  const [curve1, setCurve1] = useState(false);
  const [curve2, setCurve2] = useState(false);

  const replay = (setter) => {
    setter(false);

    setTimeout(() => {
      setter(true);
    }, 30);
  };

  return (
    <div>

      {/* HEADER */}
      <div className="mb-16">

        <p className="text-sm text-[#8B95A1] mb-3">
          Foundations
        </p>

        <h1 className="text-[44px] font-bold tracking-tight">
          Motion
        </h1>

        <p className="text-[#4E5968] text-[18px] leading-[1.8] mt-6 max-w-[980px]">
          Motion helps communicate hierarchy, continuity, and feedback.
          Use motion to guide attention and improve usability.
        </p>

      </div>

      {/* TOP MOTION */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">

        {/* dropdown */}
        <div>

          <h3 className="text-[28px] font-bold mb-6">
            Dropdown entrance, 150ms
          </h3>

          <div className="relative h-[260px] rounded-[28px] bg-[#F7F8FA] overflow-hidden border border-[#E5E8EB]">

            <div className="absolute inset-0 flex items-center justify-center">

              <button
                className={`
                  h-[56px]
                  px-7
                  rounded-[16px]
                  border
                  border-[#D1D5DB]
                  bg-white
                  text-[22px]
                  flex
                  items-center
                  gap-3
                  shadow-sm
                  transition-all
                  duration-150
                  ${dropdownPlay
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"}
                `}
              >
                <span className="text-[26px]">＋</span>
                Create
              </button>

            </div>

            <button
              onClick={() => replay(setDropdownPlay)}
              className="absolute bottom-5 right-5 w-[42px] h-[42px] rounded-xl border border-[#D1D5DB] bg-white flex items-center justify-center hover:bg-[#F3F4F6] transition"
            >
              ▶
            </button>

          </div>

        </div>

        {/* modal */}
        <div>

          <h3 className="text-[28px] font-bold mb-6">
            Modal entrance, 250ms
          </h3>

          <div className="relative h-[260px] rounded-[28px] bg-[#F7F8FA] overflow-hidden border border-[#E5E8EB]">

            <div className="absolute inset-0 flex items-center justify-center">

              <button
                className={`
                  h-[56px]
                  px-7
                  rounded-[16px]
                  border
                  border-[#D1D5DB]
                  bg-white
                  text-[22px]
                  flex
                  items-center
                  gap-3
                  shadow-sm
                  transition-all
                  duration-300
                  ${modalPlay
                    ? "scale-100 opacity-100"
                    : "scale-75 opacity-0"}
                `}
              >
                🔒 Share
              </button>

            </div>

            <button
              onClick={() => replay(setModalPlay)}
              className="absolute bottom-5 right-5 w-[42px] h-[42px] rounded-xl border border-[#D1D5DB] bg-white flex items-center justify-center hover:bg-[#F3F4F6] transition"
            >
              ▶
            </button>

          </div>

        </div>

      </div>
      <Card>
 {/* ALERT MOTION */}
<Card>
  <div className="p-10">

    {/* title */}
    <div className="mb-8">
      <h2 className="text-[32px] font-bold tracking-tight">
        Alert motion
      </h2>

      <p className="mt-3 text-[18px] leading-[1.8] text-[#4E5968]">
        Overlay dissolve transition used for centered alerts and lightweight modal feedback.
      </p>
    </div>

    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

{/* LEFT : ANIMATION */}
<Card>

  <div className="p-8">

    <h3 className="text-[32px] font-bold mb-4">
      Alert motion
    </h3>

    <p className="text-[18px] text-[#4E5968] leading-[1.8] mb-8">
      Overlay dissolve transition used for centered alerts and lightweight modal feedback.
    </p>

    <div className="
      relative
      h-[420px]
      rounded-[28px]
      bg-[#F8FAFC]
      overflow-hidden
      border
      border-[#E5E8EB]
    ">

      {/* dim */}
      <div
        id="alertDim"
        className="
          absolute
          inset-0
          bg-black/0
          transition-all
          duration-300
        "
      />

      {/* modal */}
      <div
        id="alertModal"
        className="
          absolute
          left-1/2
          top-1/2
          w-[220px]
          h-[280px]
          rounded-[28px]
          bg-white
          border
          border-[#E5E8EB]
          shadow-2xl
          opacity-0
          scale-95
          transition-all
          duration-300
        "
        style={{
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* play */}
      <button
        onClick={() => {

          const dim =
            document.getElementById("alertDim");

          const modal =
            document.getElementById("alertModal");

          if (!dim || !modal) return;

          dim.classList.remove("bg-black/0");
          dim.classList.add("bg-black/25");

          modal.classList.remove("opacity-0");
          modal.classList.remove("scale-95");

          modal.classList.add("opacity-100");
          modal.classList.add("scale-100");

          setTimeout(() => {

            dim.classList.remove("bg-black/25");
            dim.classList.add("bg-black/0");

            modal.classList.remove("opacity-100");
            modal.classList.remove("scale-100");

            modal.classList.add("opacity-0");
            modal.classList.add("scale-95");

          }, 1200);

        }}
        className="
          absolute
          right-6
          bottom-6
          w-[64px]
          h-[64px]
          rounded-[20px]
          bg-white
          border
          border-[#D1D5DB]
          shadow-sm
          text-[24px]
          flex
          items-center
          justify-center
        "
      >
        ▶
      </button>

    </div>

  </div>

</Card>

{/* RIGHT : FIGMA IMAGE */}
<Card>

  <div className="p-8">

    <h3 className="text-[32px] font-bold mb-6">
      Figma interaction
    </h3>

    <div className="
      rounded-[24px]
      overflow-hidden
      border
      border-[#E5E8EB]
      bg-[#F8FAFC]
    ">

<img
  src={alertImage}
  alt="Alert interaction"
  className="w-[227px] rounded-[20px] border border-[#E5E8EB]"
/>

    </div>

  </div>

</Card>

</div>

  </div>
</Card>
</Card>
    
    
    </div>
  );
}
function CheckboxPage() {
  const [checkboxTab, setCheckboxTab] = useState("design");

  const [demo, setDemo] = useState({
    default: false,
    checked: true,
    outline: true,
  });

  const CheckIcon = ({ color = "white" }) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path
        d="M20 6L9 17L4 12"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div>
      <div className="mb-14">
        <p className="text-sm text-[#8B95A1] mb-3">
          Components
        </p>

        <h1 className="text-[44px] font-bold tracking-tight">
          Checkbox
        </h1>

        <p className="text-[#4E5968] text-[18px] leading-[1.8] mt-6">
          여러 항목을 동시에 선택할 수 있는 체크박스 컴포넌트입니다.
        </p>
      </div>

      <SectionTitle title="기본 체크박스" />

      <Card>
        <div className="p-4 border-b border-[#E5E8EB] bg-white">
          <div className="inline-flex rounded-[12px] bg-[#F2F4F6] p-1">
            <button
              onClick={() => setCheckboxTab("design")}
              className={`px-5 py-2 rounded-[10px] text-[14px] font-semibold ${
                checkboxTab === "design"
                  ? "bg-white text-[#191F28] shadow-sm"
                  : "text-[#6B7280]"
              }`}
            >
              Design
            </button>

            <button
              onClick={() => setCheckboxTab("code")}
              className={`px-5 py-2 rounded-[10px] text-[14px] font-semibold ${
                checkboxTab === "code"
                  ? "bg-white text-[#191F28] shadow-sm"
                  : "text-[#6B7280]"
              }`}
            >
              Code
            </button>
          </div>
        </div>

        {checkboxTab === "design" ? (
          <div className="p-10 bg-[#FAFBFC]">

            {/* STATES */}
            <div className="mb-16">

              <div className="text-[18px] font-semibold text-[#7C3AED] mb-6">
                ◆checkbox-states
              </div>

              <div className="grid md:grid-cols-2 gap-8">

                {/* Default */}
                <button
                  onClick={() =>
                    setDemo((prev) => ({
                      ...prev,
                      default: !prev.default,
                    }))
                  }
                  className="flex items-center gap-4 w-fit"
                >
                  <div
                    className={`
                      w-8 h-8 rounded-[8px]
                      flex items-center justify-center
                      transition-all
                      ${
                        demo.default
                          ? "bg-[#FF7A00]"
                          : "border border-[#D1D6DB] bg-white"
                      }
                    `}
                  >
                    {demo.default && <CheckIcon />}
                  </div>

                  <span className="text-[18px] text-[#4E5968]">
                    Default
                  </span>
                </button>

                {/* Checked */}
                <button
                  onClick={() =>
                    setDemo((prev) => ({
                      ...prev,
                      checked: !prev.checked,
                    }))
                  }
                  className="flex items-center gap-4 w-fit"
                >
                  <div
                    className={`
                      w-8 h-8 rounded-[8px]
                      flex items-center justify-center
                      transition-all
                      ${
                        demo.checked
                          ? "bg-[#FF7A00]"
                          : "border border-[#D1D6DB] bg-white"
                      }
                    `}
                  >
                    {demo.checked && <CheckIcon />}
                  </div>

                  <span className="text-[18px] text-[#4E5968]">
                    Checked
                  </span>
                </button>

                {/* Disabled */}
                <div className="flex items-center gap-4 opacity-50">
                  <div className="w-8 h-8 rounded-[8px] border border-[#B0B8C1] bg-white" />

                  <span className="text-[18px] text-[#4E5968]">
                    Disabled
                  </span>
                </div>

                {/* Disabled Checked */}
                <div className="flex items-center gap-4 opacity-50">
                  <div className="w-8 h-8 rounded-[8px] bg-[#B0B8C1] flex items-center justify-center">
                    <CheckIcon />
                  </div>

                  <span className="text-[18px] text-[#4E5968]">
                    Disabled Checked
                  </span>
                </div>

              </div>
            </div>

            {/* VARIANTS */}
            <div className="mb-16">

              <div className="text-[18px] font-semibold text-[#7C3AED] mb-6">
                ◆checkbox-variants
              </div>

              <div className="flex flex-wrap gap-16">

                {/* Filled */}
                <button
                  onClick={() =>
                    setDemo((prev) => ({
                      ...prev,
                      checked: !prev.checked,
                    }))
                  }
                  className="flex items-center gap-4"
                >
                  <div
                    className={`
                      w-8 h-8 rounded-[8px]
                      flex items-center justify-center
                      ${
                        demo.checked
                          ? "bg-[#FF7A00]"
                          : "border border-[#D1D6DB]"
                      }
                    `}
                  >
                    {demo.checked && <CheckIcon />}
                  </div>

                  <span className="text-[18px]">
                    Filled
                  </span>
                </button>

                {/* Outline */}
                <button
                  onClick={() =>
                    setDemo((prev) => ({
                      ...prev,
                      outline: !prev.outline,
                    }))
                  }
                  className="flex items-center gap-4"
                >
                  <div
                    className="
                      w-8 h-8
                      rounded-[8px]
                      border-2
                      border-[#AAAAAA]
                      flex
                      items-center
                      justify-center
                    "
                  >
                    {demo.outline && (
                      <CheckIcon color="#D5D5D5" />
                    )}
                  </div>

                  <span className="text-[18px]">
                    text
                  </span>
                </button>

              </div>
            </div>

          

          </div>
        ) : (
          <div className="bg-[#031B34] p-10 overflow-auto">
            <pre className="text-[18px] leading-[2] text-white whitespace-pre-wrap">
{`<Checkbox checked>
  강의+준비물
</Checkbox>

<Checkbox variant="outline">
  강의+준비물
</Checkbox>

<Checkbox disabled>
  강의+준비물
</Checkbox>`}
            </pre>
          </div>
        )}
      </Card>
    </div>
  );
}
function AdvertisingPage() {
  return (
    <div>
      <h1 className="text-[44px] font-bold tracking-tight">
        Advertising
      </h1>
    </div>
  );
}

function AccordionPage() {
  const [tab, setTab] = useState("design");
  const [openIndex, setOpenIndex] = useState(0);

  const items = [
    {
      title: "이용 가능 지역",
      content:
        "서울, 경기, 인천 지역에서 이용 가능합니다. 일부 지역은 서비스 운영 상황에 따라 제한될 수 있습니다.",
    },
    {
      title: "차량 옵션",
      content:
        "네비게이션, 하이패스, 블랙박스를 기본 제공합니다. 차량별 옵션은 상이할 수 있습니다.",
    },
    {
      title: "보험 선택",
      content:
        "일반자차, 완전자차 중 선택할 수 있으며 이용 중에도 변경 가능합니다.",
    },
  ];
  const [iconAccordionTab, setIconAccordionTab] =
  useState("design");

const [iconOpenIndex, setIconOpenIndex] =
  useState(0);
  const iconItems = [
    {
      icon: getIconSrc("location"),
      title: "수강 가능 지역",
      content:
        "서울, 경기, 인천 지역에서 이용 가능합니다. 일부 지역은 서비스 운영 상황에 따라 제한될 수 있습니다.",
    },
    {
      icon: getIconSrc("reservation"),
      title: "강좌 예약 안내",
      content:
        "원하는 날짜와 시간을 선택하여 예약할 수 있으며 예약 완료 시 알림을 제공합니다.",
    },
    {
      icon: getIconSrc("mypage"),
      title: "회원 정보 관리",
      content:
        "예약 내역, 관심 강좌, 자녀 정보를 확인하고 관리할 수 있습니다.",
    },
  ];
  return (
    <div>
      <div className="mb-14">
        <p className="text-sm text-[#8B95A1] mb-3">
          Components
        </p>

        <h1 className="text-[44px] font-bold tracking-tight">
          Accordion
        </h1>

        <p className="text-[#4E5968] text-[18px] leading-[1.8] mt-6">
          콘텐츠를 펼치고 접을 수 있는 컴포넌트입니다.
        </p>
      </div>

      <SectionTitle title="기본 아코디언" />

      <Card>
        <div className="p-4 border-b border-[#E5E8EB] bg-white">
          <div className="inline-flex rounded-[12px] bg-[#F2F4F6] p-1">
            <button
              onClick={() => setTab("design")}
              className={`px-5 py-2 rounded-[10px] text-[14px] font-semibold ${
                tab === "design"
                  ? "bg-white text-[#191F28] shadow-sm"
                  : "text-[#6B7280]"
              }`}
            >
              Design
            </button>

            <button
              onClick={() => setTab("code")}
              className={`px-5 py-2 rounded-[10px] text-[14px] font-semibold ${
                tab === "code"
                  ? "bg-white text-[#191F28] shadow-sm"
                  : "text-[#6B7280]"
              }`}
            >
              Code
            </button>
          </div>
        </div>

        {tab === "design" ? (
          <div className="p-10 bg-[#FAFBFC]">

            <div className="text-[18px] font-semibold text-[#7C3AED] mb-5">
              ◆accordion_single
            </div>

            <div
  className="
    overflow-hidden
    rounded-[24px]
    border
    border-[#E5E8EB]
    bg-white
    shadow-[0_1px_3px_rgba(0,0,0,0.04)]
  "
>
  {items.map((item, index) => {
    const open = openIndex === index;

    return (
      <div
        key={item.title}
        className="
          border-b
          border-[#F2F4F6]
          last:border-b-0
        "
      >
        <button
          onClick={() =>
            setOpenIndex(open ? -1 : index)
          }
          className={`
            w-full
            flex
            items-center
            justify-between
            px-8
            py-6
            text-left
            transition-all
            duration-300
            ${
              open
                ? "bg-[#FAFBFC]"
                : "bg-white hover:bg-[#FAFBFC]"
            }
          `}
        >
          <span
            className={`
              text-[20px]
              leading-[26px]
              font-semibold
              tracking-[-0.01em]
              transition
              ${
                open
                  ? "text-[#191F28]"
                  : "text-[#4E5968]"
              }
            `}
          >
            {item.title}
          </span>

          <img
            src={accordionDown}
            alt=""
            className={`
              w-4
              h-4
              shrink-0
              object-contain
              transition-all
              duration-300
              ${
                open ? "rotate-180" : ""
              }
            `}
          />
        </button>

        <div
          className={`
            overflow-hidden
            transition-all
            duration-300
            ease-out
            ${
              open
                ? "max-h-[300px] opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <div
            className="
              px-8
              pt-5
              pb-8
              text-[18px]
              leading-[1.8]
              text-[#6B7684]
            "
          >
            {item.content}
          </div>
        </div>
      </div>
    );
  })}
</div>

          </div>
        ) : (
          <div className="bg-[#031B34] p-10 overflow-auto">
            <pre className="text-[18px] leading-[2] text-white whitespace-pre-wrap">
{`<AccordionGroup>
  <Accordion title="이용 가능 지역">
    서울, 경기, 인천 지역에서 이용 가능합니다.
  </Accordion>

  <Accordion title="차량 옵션">
    네비게이션, 하이패스, 블랙박스를 제공합니다.
  </Accordion>

  <Accordion title="보험 선택">
    일반자차, 완전자차 중 선택할 수 있습니다.
  </Accordion>
</AccordionGroup>`}
            </pre>
          </div>
        )}
      </Card>


    
      <Card>
      <div className="p-4 border-b border-[#E5E8EB] bg-white">
  <div className="inline-flex rounded-[12px] bg-[#F2F4F6] p-1">

    <button
      onClick={() =>
        setIconAccordionTab("design")
      }
      className={`px-5 py-2 rounded-[10px] text-[14px] font-semibold ${
        iconAccordionTab === "design"
          ? "bg-white text-[#191F28] shadow-sm"
          : "text-[#6B7280]"
      }`}
    >
      Design
    </button>

    <button
      onClick={() =>
        setIconAccordionTab("code")
      }
      className={`px-5 py-2 rounded-[10px] text-[14px] font-semibold ${
        iconAccordionTab === "code"
          ? "bg-white text-[#191F28] shadow-sm"
          : "text-[#6B7280]"
      }`}
    >
      Code
    </button>

  </div>
</div>
{iconAccordionTab === "design" ? (
  <div className="p-10 bg-[#FAFBFC]">
    <div className="text-[18px] font-semibold text-[#7C3AED] mb-5">
      ◆accordion-with-icon
    </div>

    <div
      className="
        overflow-hidden
        rounded-[24px]
        border
        border-[#E5E8EB]
        bg-white
      "
    >
      {iconItems.map((item, index) => {
        const open = iconOpenIndex === index;

        return (
          <div
            key={item.title}
            className="
              border-b
              border-[#F2F4F6]
              last:border-b-0
            "
          >
            <button
              onClick={() =>
                setIconOpenIndex(
                  open ? -1 : index
                )
              }
              className="
                w-full
                flex
                items-center
                justify-between
                px-8
                py-6
                text-left
              "
            >
              <div className="flex items-center gap-4">
                <div
                  className="
                    w-12
                    h-12
                    rounded-[14px]
                    bg-[#F4F4F4]
                    flex
                    items-center
                    justify-center
                  "
                >
                  <img
                    src={item.icon}
                    alt=""
                    className="
                      w-6
                      h-6
                      object-contain
                    "
                  />
                </div>

                <span
                  className="
                    text-[20px]
                    font-semibold
                    text-[#191F28]
                  "
                >
                  {item.title}
                </span>
              </div>

              <img
                src={accordionDown}
                alt=""
                className={`
                  w-4
                  h-4
                  transition-all
                  duration-300
                  ${
                    open
                      ? "rotate-180"
                      : ""
                  }
                `}
              />
            </button>

            <div
              className={`
                overflow-hidden
                transition-all
                duration-300
                ${
                  open
                    ? "max-h-[300px] opacity-100"
                    : "max-h-0 opacity-0"
                }
              `}
            >
              <div
                className="
                  pl-[96px]
                  pr-8
                  pt-5
                  pb-8
                  text-[18px]
                  leading-[1.8]
                  text-[#6B7684]
                "
              >
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
) : (
  <div className="bg-[#031B34] p-10 overflow-auto">
    <pre className="text-[18px] leading-[2] text-white whitespace-pre-wrap">
{`<AccordionWithIcon
  icon="location"
  title="수강 가능 지역"
>
  서울, 경기, 인천 지역에서
  이용 가능합니다.
</AccordionWithIcon>`}
    </pre>
  </div>
)}

</Card>
    </div>
  );
}

function BadgePage() {
  const [tab, setTab] = useState("design");

  return (
    <div>
      <div className="mb-14">
        <p className="text-sm text-[#8B95A1] mb-3">
          Components
        </p>

        <h1 className="text-[44px] font-bold tracking-tight">
          Badge
        </h1>

        <p className="text-[#4E5968] text-[18px] leading-[1.8] mt-6">
          상태 및 정보를 강조하기 위한 배지 컴포넌트입니다.
        </p>
      </div>

      <SectionTitle title="배지" />

      <Card>
        <div className="p-4 border-b border-[#E5E8EB] bg-white">
          <div className="inline-flex rounded-[12px] bg-[#F2F4F6] p-1">
            <button
              onClick={() => setTab("design")}
              className={`px-5 py-2 rounded-[10px] text-[14px] font-semibold ${
                tab === "design"
                  ? "bg-white text-[#191F28] shadow-sm"
                  : "text-[#6B7280]"
              }`}
            >
              Design
            </button>

            <button
              onClick={() => setTab("code")}
              className={`px-5 py-2 rounded-[10px] text-[14px] font-semibold ${
                tab === "code"
                  ? "bg-white text-[#191F28] shadow-sm"
                  : "text-[#6B7280]"
              }`}
            >
              Code
            </button>
          </div>
        </div>

        {tab === "design" ? (
          <div className="p-10 bg-[#FAFBFC]">

            {/* Badge Variants */}
            <div className="mb-14">

              <div className="text-[18px] font-semibold text-[#7C3AED] mb-6">
                ◆badge-variants
              </div>

              <div className="flex flex-wrap gap-2">
  {/* 2자리 남음 */}
  <div className="h-[22px] px-[6px] py-[14px]  rounded-[4px] bg-[#FFF8E3] flex items-center">
    <span className="text-[12px] font-medium leading-none text-[#C07D00]">
      2자리 남음
    </span>
  </div>

  {/* 13~19개월 */}
  <div className="h-[22px] px-[6px] py-[14px]  rounded-[4px] bg-[#F4F4F4] flex items-center">
    <span className="text-[12px] font-medium leading-none text-[#666666]">
      13~19개월
    </span>
  </div>

  {/* 접수예정 */}
  <div className="h-[22px] px-[6px] py-[14px]  rounded-[4px] bg-[#222222] flex items-center">
    <span className="text-[12px] font-medium leading-none text-white">
      접수예정
    </span>
  </div>

  {/* 부담이 적어요 */}
  <div className="h-[22px] px-[6px] py-[14px] rounded-[4px] bg-[#FFF7ED] flex items-center">
    <span className="text-[12px] font-medium leading-none text-[#F97316]">
      부담이 적어요
    </span>
  </div>
</div>
            </div>

            {/* Badge Usage */}
            <div>

              <div className="text-[18px] font-semibold text-[#7C3AED] mb-6">
                ◆badge-usage
              </div>

              <div
  className="
    flex
    items-center
    justify-between
    rounded-[16px]
    border-2
    border-[#FF7A00]
    bg-white
    px-8
    py-5
  "
>

  <div className="flex items-center gap-5">

    <div
      className="
        w-10
        h-10
        rounded-[6px]
        bg-[#FF7A00]
        flex
        items-center
        justify-center
        shrink-0
      "
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M20 6L9 17L4 12"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>

    <span
      className="
        text-[18px]
        font-medium
        text-[#9B9B9B]
      "
    >
      강의+준비물
    </span>

  </div>

  <div className="flex items-center gap-8">

    <span
      className="
        text-[18px]
        font-bold
        text-[#191F28]
      "
    >
      15,000원
    </span>

    <div
      className="
        px-3
        py-1
        rounded-[8px]
        bg-[#FFF4EB]
        text-[#FF7A00]
        text-[14px]
        font-semibold
      "
    >
      추천
    </div>

  </div>

</div>
            </div>

            <div className="text-[18px] font-semibold text-[#7C3AED] mt-12 mb-6">
  ◆badge-price-discount
</div>

<div
  className="
    flex
    items-center
    justify-between
    rounded-[20px]
    border
    border-[#E5E8EB]
    bg-white
    px-8
    py-6
  "
>

  <span
    className="
      text-[18px]
      text-[#8B8B8B]
      line-through
    "
  >
    140,000원
  </span>

  <div
    className="
      px-5
      py-3
      rounded-full
      bg-[#BDBDBD]
      text-white
      text-[16px]
      font-medium
    "
  >
    가격 부담
  </div>

  <div className="text-right">

    <div
      className="
        text-[18px]
        font-bold
        text-[#191F28]
        mb-2
      "
    >
      120,000원
    </div>

    <div
      className="
        inline-flex
        px-3
        py-2
        rounded-[8px]
        bg-[#FFF4EB]
        text-[#FF7A00]
        text-[14px]
        font-semibold
      "
    >
      부담이 적어요
    </div>

  </div>

</div>
            
          </div>
        ) : (
          <div className="bg-[#031B34] p-10 overflow-auto">
            <pre className="text-[18px] leading-[2] text-white whitespace-pre-wrap">
{`<Badge variant="recommend">
  추천
</Badge>

<Badge variant="new">
  NEW
</Badge>

<ProductCard
  checked
  title="강의+준비물"
  price="15,000원"
  badge="추천"
/>`}
            </pre>
          </div>
        )}
      </Card>
    </div>
  );
}


function FilterPage() {
  const [tab, setTab] = useState("design");

  return (
    <div>
    <div className="mb-14">
      <p className="text-sm text-[#8B95A1] mb-3">
        Components
      </p>
  
      <h1 className="text-[44px] font-bold tracking-tight">
        Filter
      </h1>
  
      <p className="text-[#4E5968] text-[18px] leading-[1.8] mt-6">
        검색 및 목록 필터링에 사용하는 컴포넌트입니다.
      </p>
    </div>
  
    <SectionTitle title="필터" />
  
    <Card>
  
      {/* 탭 */}
      <div className="p-4 border-b border-[#E5E8EB] bg-white">
        <div className="inline-flex rounded-[12px] bg-[#F2F4F6] p-1">
  
          <button
            onClick={() => setTab("design")}
            className={`px-5 py-2 rounded-[10px] text-[14px] font-semibold ${
              tab === "design"
                ? "bg-white text-[#191F28] shadow-sm"
                : "text-[#6B7280]"
            }`}
          >
            Design
          </button>
  
          <button
            onClick={() => setTab("code")}
            className={`px-5 py-2 rounded-[10px] text-[14px] font-semibold ${
              tab === "code"
                ? "bg-white text-[#191F28] shadow-sm"
                : "text-[#6B7280]"
            }`}
          >
            Code
          </button>
  
        </div>
      </div>
  
      {tab === "design" ? (
  
        <div className="p-10 bg-[#FAFBFC] flex flex-col gap-14">
  
          {/* 기본 */}
          <div>
            <div className="text-[18px] font-semibold text-[#7C3AED] mb-5">
              ◆filter-default
            </div>
  
            <button className="h-[56px] px-8 rounded-full border border-[#E5E8EB] bg-white flex items-center gap-3">
            <img
  src={filterIcon}
  alt=""
  className="
    h-5
    w-auto
    object-contain
    shrink-0
  "
/>
              <span className="text-[18px] text-[#8B95A1]">
                필터
              </span>
            </button>
          </div>
  
          {/* 숫자 없음 */}
          <div>
            <div className="text-[18px] font-semibold text-[#7C3AED] mb-5">
              ◆filter-no-count
            </div>
  
            <button className="h-[56px] px-8 rounded-full border-2 border-[#191F28] bg-white flex items-center gap-3">
              <img src={filterIcon} alt="" className="w-5 h-5" />
              <span className="text-[18px] font-semibold">
                필터
              </span>
            </button>
          </div>
  
          {/* 숫자 있음 */}
          <div>
            <div className="text-[18px] font-semibold text-[#7C3AED] mb-5">
              ◆filter-count
            </div>
  
            <button className="relative h-[56px] px-8 rounded-full border-2 border-[#191F28] bg-white flex items-center gap-3">
  
              <img src={filterIcon} alt="" className="w-5 h-5" />
  
              <span className="text-[18px] font-semibold">
                필터
              </span>
  
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#191F28] text-white text-[14px] font-bold flex items-center justify-center">
                1
              </div>
  
            </button>
          </div>
  
          {/* 활성 */}
          <div>
            <div className="text-[18px] font-semibold text-[#7C3AED] mb-5">
              ◆filter-selected
            </div>
  
            <button className="h-[56px] px-8 rounded-full bg-[#191F28] text-white flex items-center gap-3">
  
              <span className="text-[18px] font-semibold">
                수업 일정
              </span>
  
              <img
                src={accordionDown}
                alt=""
                className="
              w-4
              h-4
              shrink-0
              object-contain
              invert"
              />
  
            </button>
          </div>
  

          {/* 그룹 */}
          <div>
            <div className="text-[18px] font-semibold text-[#7C3AED] mb-5">
              ◆filter-group
            </div>
  
            <div className="flex items-center gap-4 flex-wrap">
  
              <button className="relative h-[56px] px-7 rounded-full border-2 border-[#191F28] bg-white flex items-center gap-3">
  
                <img src={filterIcon} alt="" className="w-5 h-5" />
  
                <span className="text-[18px] font-semibold">
                  필터
                </span>
  
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#191F28] text-white text-[14px] font-bold flex items-center justify-center">
                  1
                </div>
  
              </button>
  
              <div className="w-px h-8 bg-[#E5E8EB]" />
  
              <button className="h-[56px] px-8 rounded-full bg-[#191F28] text-white flex items-center gap-3">
                수업 일정
                <img src={accordionDown} alt="" className=" w-4
              h-4
              shrink-0
              object-contain
              invert" />
              </button>
  
              <button className="h-[56px] px-8 rounded-full border border-[#E5E8EB] bg-white text-[#8B95A1] flex items-center gap-3">
                수업 조건
                <img src={accordionDown} alt="" className=" w-4
              h-4
              shrink-0
              object-contain
              opacity-40" />
              </button>
  
              <button className="h-[56px] px-8 rounded-full border border-[#E5E8EB] bg-white text-[#8B95A1] flex items-center gap-3">
                지점
                <img src={accordionDown} alt="" className=" w-4
              h-4
              shrink-0
              object-contain
              opacity-40" />
              </button>
  
            </div>
          </div>

{/* Filter Sort */}
<div className="mt-14">

  <div className="text-[18px] font-semibold text-[#7C3AED] mb-5">
    ◆filter-sort
  </div>

  <div className="flex items-center gap-4 flex-wrap">

    {/* 추천순 */}
    <button
      className="
        h-[56px]
        px-7
        rounded-full
        flex
        items-center
        gap-3
      "
    >
      <span
        className="
          text-[18px]
          font-medium
          text-[#4E5968]
        "
      >
        추천순
      </span>

      <img
    src={accordionDown}
    alt=""
    className="
      w-4
      h-4
      opacity-60
      object-contain
    "
  />

    </button>

    {/* 최신순 */}
    <button
      className="
        h-[56px]
        px-7
        rounded-full
        border
        border-[#E5E8EB]
        bg-white
        flex
        items-center
        gap-3
      "
    >
      <span
        className="
          text-[18px]
          font-medium
          text-[#4E5968]
        "
      >
        최신순
      </span>

      <img
        src={accordionDown}
        alt=""
        className="
          w-4
          h-4
          shrink-0
          object-contain
          opacity-60
        "
      />
    </button>

    {/* 낮은 가격순 */}
    <button
      className="
        h-[56px]
        px-7
        rounded-full
        bg-[#191F28]
        text-white
        flex
        items-center
        gap-3
      "
    >
      <span
        className="
          text-[18px]
          font-semibold
        "
      >
        낮은 가격순
      </span>

      <img
        src={accordionDown}
        alt=""
        className="
          w-4
          h-4
          shrink-0
          object-contain
          invert
        "
      />
    </button>

  </div>

</div>
        </div>
  
      ) : (
  
        <div className="bg-[#031B34] p-10 overflow-auto">
         <pre className="text-[18px] leading-[2] text-white whitespace-pre-wrap">
{`<FilterButton>
  필터
</FilterButton>

<FilterButton count={1}>
  필터
</FilterButton>

<FilterChip selected>
  수업 일정
</FilterChip>

<SortFilter>
  추천순
</SortFilter>

<SortFilter>
  최신순
</SortFilter>

<SortFilter selected>
  낮은 가격순
</SortFilter>

<FilterGroup>
  ...
</FilterGroup>`}
</pre>
        </div>
  
      )}
  
    </Card>
  </div>
  );
}

function TabPage() {
  const [defaultView, setDefaultView] = useState("design");
  const [categoryView, setCategoryView] = useState("design");

  const [activeTab, setActiveTab] = useState("info");
  const [categoryTab, setCategoryTab] = useState("review");

  return (
    <div>
      <div className="mb-14">
        <p className="text-sm text-[#8B95A1] mb-3">
          Components
        </p>

        <h1 className="text-[44px] font-bold tracking-tight">
          Tab
        </h1>

        <p className="text-[#4E5968] text-[18px] leading-[1.8] mt-6">
          콘텐츠 전환에 사용하는 탭 컴포넌트입니다.
        </p>
      </div>

      <SectionTitle title="탭" />

      <div className="flex flex-col gap-14">

        {/* ==================== */}
        {/* tab-default */}
        {/* ==================== */}
        <div>
          

        <Card>
  <div>

    

    <div className="rounded-[16px] border border-[#E5E8EB] overflow-hidden bg-white">

      {/* Design / Code */}
      <div className="p-4 border-b border-[#E5E8EB]">
        <div className="inline-flex rounded-[12px] bg-[#F2F4F6] p-1">

          <button
            onClick={() => setDefaultView("design")}
            className={`px-5 py-2 rounded-[10px]
              text-[14px] font-semibold
              transition-all duration-200 ease-out
              ${
                defaultView === "design"
                  ? "bg-white text-[#191F28] shadow-sm scale-[1.02]"
                  : "text-[#6B7280]"
              }`}
          >
            Design
          </button>

          <button
            onClick={() => setDefaultView("code")}
            className={`px-5 py-2 rounded-[10px]
              text-[14px] font-semibold
              transition-all duration-200 ease-out
              ${
                defaultView === "code"
                  ? "bg-white text-[#191F28] shadow-sm scale-[1.02]"
                  : "text-[#6B7280]"
              }`}
          >
            Code
          </button>

        </div>
      </div>

      {defaultView === "design" ? (
        <div className="p-10 bg-[#FAFBFC]">
<div className="text-[18px] font-semibold text-[#7C3AED] mb-6">
      ◆tab-default
    </div>
          <div className="border-b border-[#E5E8EB]">
            <div className="flex">

              <button
                onClick={() => setActiveTab("info")}
                className="relative flex-1 h-[56px] flex items-center justify-center transition-all duration-200 hover:bg-[#F8F9FA]"
              >
                <span
                  className={`text-[18px] font-semibold transition-colors duration-200 ${
                    activeTab === "info"
                      ? "text-[#191F28]"
                      : "text-[#8B95A1]"
                  }`}
                >
                  정보
                </span>

                {activeTab === "info" && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40px] h-[4px] rounded-full bg-[#F97316] transition-all duration-200" />
                )}
              </button>

              <button
                onClick={() => setActiveTab("teacher")}
                className="relative flex-1 h-[56px] flex items-center justify-center transition-all duration-200 hover:bg-[#F8F9FA]"
              >
                <span
                  className={`text-[18px] font-semibold transition-colors duration-200 ${
                    activeTab === "teacher"
                      ? "text-[#191F28]"
                      : "text-[#8B95A1]"
                  }`}
                >
                  강사
                </span>

                {activeTab === "teacher" && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40px] h-[4px] rounded-full bg-[#F97316] transition-all duration-200" />
                )}
              </button>

              <button
                onClick={() => setActiveTab("review")}
                className="relative flex-1 h-[56px] flex items-center justify-center transition-all duration-200 hover:bg-[#F8F9FA]"
              >
                <span
                  className={`text-[18px] font-semibold transition-colors duration-200 ${
                    activeTab === "review"
                      ? "text-[#191F28]"
                      : "text-[#8B95A1]"
                  }`}
                >
                  후기
                </span>

                {activeTab === "review" && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40px] h-[4px] rounded-full bg-[#F97316] transition-all duration-200" />
                )}
              </button>

            </div>
          </div>

          <div
            key={activeTab}
            className="p-8 text-[#4E5968] transition-all duration-200"
          >
            {activeTab === "info" && "정보 콘텐츠 영역"}
            {activeTab === "teacher" && "강사 콘텐츠 영역"}
            {activeTab === "review" && "후기 콘텐츠 영역"}
          </div>

        </div>
      ) : (
        <div className="bg-[#031B34] p-10 overflow-auto">
          <pre className="text-[18px] leading-[2] text-white whitespace-pre-wrap">
{`<Tab>
  <TabItem>정보</TabItem>
  <TabItem>강사</TabItem>
  <TabItem>후기</TabItem>
</Tab>`}
          </pre>
        </div>
      )}

    </div>

  </div>
</Card>
        </div>

        {/* ==================== */}
        {/* tab-category */}
        {/* ==================== */}
        <div>
          

          <Card>
         
            {/* Design / Code */}
            <div className="p-4 border-b border-[#E5E8EB] bg-white">
              <div className="inline-flex rounded-[12px] bg-[#F2F4F6] p-1">

                <button
                  onClick={() => setCategoryView("design")}
                  className={`px-5 py-2 rounded-[10px] text-[14px] font-semibold ${
                    categoryView === "design"
                      ? "bg-white text-[#191F28] shadow-sm"
                      : "text-[#6B7280]"
                  }`}
                >
                  Design
                </button>

                <button
                  onClick={() => setCategoryView("code")}
                  className={`px-5 py-2 rounded-[10px] text-[14px] font-semibold ${
                    categoryView === "code"
                      ? "bg-white text-[#191F28] shadow-sm"
                      : "text-[#6B7280]"
                  }`}
                >
                  Code
                </button>

              </div>
            </div>

            {categoryView === "design" ? (
              <div className="p-10 bg-[#FAFBFC]">
 <div className="text-[18px] font-semibold text-[#7C3AED] mb-5">
            ◆tab-category
          </div>
                <div className="border-b border-[#E5E8EB]">
                  <div className="flex">

                    <button
                      onClick={() => setCategoryTab("move")}
                      className="relative h-[48px] px-4 flex items-center gap-1"
                    >
                      <span className={categoryTab === "move" ? "text-[#191F28]" : "text-[#6B7684]"}>
                        정보
                      </span>

                      <span className="w-[6px] h-[6px] rounded-full bg-[#F04452]" />

                      {categoryTab === "move" && (
                        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#191F28]" />
                      )}
                    </button>

                    <button
                      onClick={() => setCategoryTab("write")}
                      className="relative h-[48px] px-4 flex items-center gap-1"
                    >
                      <span className={categoryTab === "write" ? "text-[#191F28]" : "text-[#6B7684]"}>
                       강사
                      </span>

                      <span className="font-bold text-[#3182F6]">
                        24
                      </span>

                      {categoryTab === "write" && (
                        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#191F28]" />
                      )}
                    </button>

                    <button
                      onClick={() => setCategoryTab("cafe")}
                      className="relative h-[48px] px-4 flex items-center gap-1"
                    >
                      <span className={categoryTab === "cafe" ? "text-[#191F28]" : "text-[#6B7684]"}>
                        후기
                      </span>

                      {categoryTab === "cafe" && (
                        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#191F28]" />
                      )}
                    </button>

                    <button
                      onClick={() => setCategoryTab("stay")}
                      className="relative h-[48px] px-4 flex items-center gap-1"
                    >
                      <span className={categoryTab === "stay" ? "text-[#191F28]" : "text-[#6B7684]"}>
                       공지
                      </span>

                      <span className="font-bold text-[#3182F6]">
                        7
                      </span>

                      {categoryTab === "stay" && (
                        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#191F28]" />
                      )}
                    </button>

                  </div>
                </div>

                <div className="p-8 text-[#4E5968]">
                  카테고리 탭 콘텐츠 영역
                </div>

              </div>
            ) : (
              <div className="bg-[#031B34] p-10 overflow-auto">
                <pre className="text-[18px] leading-[2] text-white whitespace-pre-wrap">
{`<CategoryTab>
  이동
  쓰기 24
  카페
  숙박 7
</CategoryTab>`}
                </pre>
              </div>
            )}

          </Card>
        </div>

      </div>
    </div>
  );
}
function CategoryPage() {
  const [tab, setTab] = useState("design");
  const [selectedCategory, setSelectedCategory] = useState("오감발달");

  const categories = [
    "오감발달",
    "창의·체험",
    "음악·미술",
    "신체활동",
    "언어·교육",
  ];

  const homeCategory = [
    "내아이조회",
    "0~24개월",
    "2~4세",
    "5~7세",
    "초등",
  ];

  return (
    <div className="max-w-7xl mx-auto p-10">
      <div className="mb-14">
        <p className="text-sm text-[#8B95A1] mb-3">
          Components
        </p>

        <h1 className="text-[44px] font-bold tracking-tight">
          Category Menu
        </h1>

        <p className="text-[#4E5968] text-[18px] leading-[1.8] mt-6">
          카테고리를 선택할 수 있는 메뉴 컴포넌트입니다.
        </p>
      </div>

      <SectionTitle title="카테고리 메뉴" />

      <Card>
        <div className="p-4 border-b border-[#E5E8EB] bg-white">
          <div className="inline-flex rounded-[12px] bg-[#F2F4F6] p-1">
            <button
              onClick={() => setTab("design")}
              className={`px-5 py-2 rounded-[10px] text-[14px] font-semibold ${
                tab === "design"
                  ? "bg-white text-[#191F28] shadow-sm"
                  : "text-[#6B7280]"
              }`}
            >
              Design
            </button>

            <button
              onClick={() => setTab("code")}
              className={`px-5 py-2 rounded-[10px] text-[14px] font-semibold ${
                tab === "code"
                  ? "bg-white text-[#191F28] shadow-sm"
                  : "text-[#6B7280]"
              }`}
            >
              Code
            </button>
          </div>
        </div>

        {tab === "design" ? (
          <div className="p-10 bg-[#FAFBFC]">
            <div className="text-[18px] font-semibold text-[#7C3AED] mb-6">
              ◆ category-menu
            </div>

            <div className="flex flex-wrap gap-8">
              {categories.map((item) => {
                const active = selectedCategory === item;

                return (
                  <button
                    key={item}
                    onClick={() => setSelectedCategory(item)}
                    className="flex flex-col items-center"
                  >
                    <div
                      className={`
                        w-[96px]
                        h-[96px]
                        rounded-[32px]
                        transition-all
                        duration-200
                        ${
                          active
                            ? "border-[3px] border-[#333333] bg-white"
                            : "border border-[#E5E8EB] bg-[#F4F4F4]"
                        }
                      `}
                    />

                    <span
                      className={`
                        mt-4
                        text-[18px]
                        font-semibold
                        ${
                          active
                            ? "text-[#222222]"
                            : "text-[#999999]"
                        }
                      `}
                    >
                      {item}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="bg-[#031B34] p-10 overflow-auto">
            <pre className="text-[16px] leading-[2] text-white whitespace-pre-wrap">
{`<CategoryMenu>
  <CategoryItem active>오감발달</CategoryItem>
  <CategoryItem>창의·체험</CategoryItem>
  <CategoryItem>음악·미술</CategoryItem>
  <CategoryItem>신체활동</CategoryItem>
  <CategoryItem>언어·교육</CategoryItem>
</CategoryMenu>`}
            </pre>
          </div>
        )}
      </Card>

      {ageCategories.map((category) => (
        <div key={category} className="mt-14">
          <SectionTitle title={category} />

          <Card>
            <div className="p-4 border-b border-[#E5E8EB] bg-white">
              <div className="inline-flex rounded-[12px] bg-[#F2F4F6] p-1">
                <button className="px-5 py-2 rounded-[10px] bg-white text-[#191F28] shadow-sm text-[14px] font-semibold">
                  Design
                </button>

                <button className="px-5 py-2 rounded-[10px] text-[#6B7280] text-[14px] font-semibold">
                  Code
                </button>
              </div>
            </div>

            <div className="p-10 bg-[#FAFBFC]">
  <div className="text-[18px] font-semibold text-[#7C3AED] mb-6">
    ◆ homeCategory
  </div>

  <div className="flex flex-wrap gap-8">
    {homeCategory.map((item) => (
      <button
        key={item}
        className="flex flex-col items-center"
      >
        <div
          className="
            w-[96px]
            h-[96px]
            rounded-[32px]
            bg-[#E8E8E8]
          "
        />

        <span
          className="
            mt-4
            text-[18px]
            font-semibold
            text-[#666666]
          "
        >
          {item}
        </span>
      </button>
    ))}
  </div>
</div>
          </Card>
        </div>
      ))}
    </div>
  );
}
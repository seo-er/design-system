import { useState } from "react";

function hexToRgba(hex, opacity) {
  const cleanHex = hex.replace("#", "");
  const bigint = parseInt(cleanHex, 16);

  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

const gridData = [
  { bp: "xxs", viewport: "320-479px", columns: 2, gutters: "12px", margins: "16px" },
  { bp: "xs", viewport: "480-767px", columns: 6, gutters: "12px", margins: "16px" },
  { bp: "s", viewport: "768-1023px", columns: 6, gutters: "12px", margins: "16px" },
  { bp: "m", viewport: "1024-1439px", columns: 12, gutters: "16px", margins: "32px" },
  { bp: "l", viewport: "1440-1767px", columns: 12, gutters: "16px", margins: "32px" },
  { bp: "xl", viewport: "1768+px", columns: 12, gutters: "16px", margins: "32px" },
];

const typographyRows = [
  ["font.heading.xxlarge", "Bold", "2rem / 32px", "2.25rem / 36px"],
  ["font.heading.xlarge", "Bold", "1.75rem / 28px", "2rem / 32px"],
  ["font.heading.large", "Bold", "1.5rem / 24px", "1.75rem / 28px"],
  ["font.heading.medium", "Bold", "1.25rem / 20px", "1.5rem / 24px"],
  ["font.heading.small", "Bold", "1rem / 16px", "1.25rem / 20px"],
  ["font.heading.xsmall", "Bold", "0.875rem / 14px", "1.25rem / 20px"],
  ["font.heading.xxsmall", "Bold", "0.75rem / 12px", "1rem / 16px"],
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
  const [menu, setMenu] = useState("tokens");

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
          <div className="mb-8">
            <div className="text-xs font-semibold text-[#8B95A1] uppercase mb-3 px-2">
              Foundations
            </div>

            <div className="space-y-1">
              <MenuItem active={menu === "tokens"} onClick={() => setMenu("tokens")}>
                Design Tokens
              </MenuItem>

              <MenuItem active={menu === "typography"} onClick={() => setMenu("typography")}>
                Typography
              </MenuItem>

              <MenuItem active={menu === "spacing"} onClick={() => setMenu("spacing")}>
                Spacing
              </MenuItem>

              <MenuItem active={menu === "grid"} onClick={() => setMenu("grid")}>
                Grid
              </MenuItem>

              <MenuItem active={menu === "palette"} onClick={() => setMenu("palette")}>
                Palette
              </MenuItem>
              <MenuItem active={menu === "button"} onClick={() => setMenu("button")}>
                Button
              </MenuItem>
              <MenuItem active={menu === "icons"} onClick={() => setMenu("icons")}>
                Icons
              </MenuItem>
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
  <div className="grid grid-cols-5 px-8 py-4 border-b border-[#F2F4F6] text-sm text-[#8B95A1]">
    <span>Preview</span>
    <span>Token</span>
    <span>Font weight</span>
    <span>Font size</span>
    <span>Line height</span>
  </div>

  {typographyRows.map((r) => {
    const size = r[2].split("/")[0].trim();
    const lineHeight = r[3].split("/")[0].trim();

    return (
      <div
        key={r[0]}
        className="grid grid-cols-5 px-8 py-5 border-b border-[#F2F4F6] items-center hover:bg-[#FAFBFC] transition"
      >
        <span
          className="font-bold"
          style={{
            fontSize: size,
            lineHeight,
          }}
        >
          Aa
        </span>

        <span>{r[0]}</span>
        <span>{r[1]}</span>
        <span>{r[2]}</span>
        <span>{r[3]}</span>
      </div>
    );
  })}
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
      <span>{r[0]}</span>
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
<h1 className="text-[44px] font-bold tracking-tight mb-10">
  Grid
</h1>

<Card>
  <div className="grid grid-cols-5 px-8 py-4 border-b border-[#F2F4F6] text-sm text-[#8B95A1]">
    <span>Breakpoint</span>
    <span>Viewport</span>
    <span>Columns</span>
    <span>Gutters</span>
    <span>Margins</span>
  </div>

  {gridData.map((g) => (
    <div
      key={g.bp}
      className="grid grid-cols-5 px-8 py-5 border-b border-[#F2F4F6] items-center hover:bg-[#FAFBFC] transition"
    >
      <span>
        <span className="bg-[#F2F4F6] px-2 py-1 rounded-lg text-xs">
          {g.bp}
        </span>
      </span>

      <span>{g.viewport}</span>
      <span>{g.columns}</span>
      <span>{g.gutters}</span>
      <span>{g.margins}</span>
    </div>
  ))}
</Card>
</div>
);
}

const lightPalettes = [
  {
    name: "Orange",
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
    navigator.clipboard.writeText(hex).catch(() => {});
  }
}

function PaletteColumn({ palette, dark = false }) {
  return (
    <div>
      <h3 className="text-[18px] font-semibold mb-4">{palette.name}</h3>

      <div className="bg-white rounded-[24px] border border-[#E5E8EB] overflow-hidden">
        {palette.colors.map((c) => (
          <div
            key={`${palette.name}-${c.step}`}
            onClick={() => copyHex(c.hex)}
            className="h-[52px] flex items-center justify-between px-4 text-sm cursor-pointer hover:opacity-80 transition"
            style={{ backgroundColor: c.hex }}
          >
            <span className={dark ? "text-white" : "text-black"}>{c.step}</span>
            <span className={dark ? "text-gray-200" : "text-[#4E5968]"}>{c.hex}</span>
          </div>
        ))}
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

        <div className="grid md:grid-cols-2 gap-8 mb-12">
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
          <div className="grid md:grid-cols-1">
            {lightPalettes
              .filter((p) => p.name === "Gray")
              .map((p) => (
                <PaletteColumn key={p.name} palette={p} />
              ))}
          </div>
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

      <div className="mt-24">
        <h2 className="text-[28px] font-bold tracking-tight mb-8">Dark Mode</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {darkPalettes.map((p) => (
            <PaletteColumn key={p.name} palette={p} dark />
          ))}
        </div>
      </div>
    </div>
  );
}
const iconItems = [
  "Accessibility",
  "Add",
  "Ai agent",
  "Ai chat",
  "Alert",
  "Align image center",
  "Align image left",
  "Align image right",
  "Align text center",
  "Align text left",
  "Align text right",
  "Api",
  "App",
  "Apps",
  "Archive box",
];
function ButtonPage() {

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

        {/* PREVIEW */}
        <div className="p-10 border-b border-[#E5E8EB] bg-[#FAFBFC]">

          <div className="flex items-center gap-5 flex-wrap">

            <button className="h-[46px] px-5 rounded-[14px] bg-[#3579F6] text-white text-[18px] font-semibold">
              Small
            </button>

            <button className="h-[54px] px-7 rounded-[16px] bg-[#3579F6] text-white text-[20px] font-semibold">
              Medium
            </button>

            <button className="h-[64px] px-9 rounded-[18px] bg-[#3579F6] text-white text-[24px] font-semibold">
              Large
            </button>

            <button className="h-[74px] px-11 rounded-[20px] bg-[#3579F6] text-white text-[28px] font-semibold">
              XLarge
            </button>

          </div>

        </div>

        {/* CODE */}
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

      </Card>

    </div>
  );
}
function IconPage() {

  const [selectedIcon, setSelectedIcon] = useState(null);

  return (
    <div>
      <div className="grid grid-cols-[1fr_360px] gap-8 items-start">
{/* LEFT */}
<div>

  {/* section title */}
  <div className="flex items-center gap-4 mb-10">
    <h2 className="text-[36px] font-bold tracking-tight">
      Core
    </h2>

    <span className="text-[24px] text-[#6B7280]">
      @atlaskit/icon/core
    </span>
  </div>

  {/* icon grid */}
  <div className="grid grid-cols-4 gap-y-14">

    {iconItems.map((item) => (
      <button
        key={item}
        onClick={() => setSelectedIcon(item)}
        className={`
          flex flex-col items-center text-center transition
          hover:opacity-70
          rounded-[18px]
          p-3
          ${
            selectedIcon === item
              ? "bg-[#EDEFF2]"
              : ""
          }
        `}
      >

        {/* icon */}
        <div className="w-[56px] h-[56px] rounded-[14px] bg-white border border-[#E5E8EB] flex items-center justify-center text-[22px] mb-4">
          ✦
        </div>

        {/* text */}
        <div className="text-[18px] text-[#374151] leading-[1.5]">
          {item}
        </div>

      </button>
    ))}

  </div>
</div>

{/* RIGHT PANEL */}
<div className="sticky top-8">

  <div className="bg-white border border-[#E5E8EB] rounded-[20px] overflow-hidden">

    {/* top preview */}
    <div className="h-[120px] border-b border-[#E5E8EB] flex items-center justify-center text-[40px]">
      {selectedIcon ? "✦" : "+"}
    </div>

    {selectedIcon ? (
      <>

        {/* content */}
        <div className="p-8">

          <div className="flex items-center gap-3 mb-5">
            <h3 className="text-[28px] font-bold">
              {selectedIcon}
            </h3>

            <span className="px-3 py-1 rounded-full border border-[#C084FC] text-[#6B21A8] text-[14px]">
              Single purpose
            </span>
          </div>

          <p className="text-[18px] leading-[1.7] text-[#4E5968] mb-8">
            Reserved for creating and adding an object.
          </p>

          {/* tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {["add", "plus", "create", "icon"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-lg border border-[#D1D5DB] text-[14px] text-[#4B5563]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* maintained */}
          <div className="mb-10">
            <div className="text-[15px] font-semibold mb-2">
              Maintained by
            </div>

            <div className="text-[18px] text-[#4E5968]">
              Design System Team
            </div>
          </div>

        </div>

        {/* react */}
        <div className="border-t border-[#E5E8EB] p-8">

          <div className="text-[15px] font-semibold mb-4">
            React
          </div>

          <div className="bg-[#F4F5F7] rounded-[12px] p-5 text-[15px] leading-[1.7] text-[#4B5563] overflow-auto">
{`import ${selectedIcon.replace(/\s/g, "")}Icon from
'@atlaskit/icon/core/${selectedIcon.toLowerCase().replace(/\s/g, "-")}';`}
          </div>

        </div>

        {/* sizes */}
        <div className="border-t border-[#E5E8EB] p-8">

          <div className="text-[15px] font-semibold mb-5">
            Sizes
          </div>

          <div className="space-y-4">

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-[22px]">+</span>

                <span className="px-2 py-1 rounded bg-[#F3F4F6] text-[14px]">
                  Small
                </span>
              </div>

              <span>⧉</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-[22px]">+</span>

                <span className="px-2 py-1 rounded bg-[#F3F4F6] text-[14px]">
                  Medium
                </span>

                <span className="px-2 py-1 rounded border border-[#9CA3AF] text-[12px]">
                  RECOMMENDED
                </span>
              </div>

              <span>⧉</span>
            </div>

          </div>

        </div>

      </>
    ) : (

      <div className="h-[240px] flex items-center justify-center text-[#6B7280] text-[18px]">
        Select an icon for details
      </div>

    )}

  </div>

</div>

</div>

    </div>
  );
}
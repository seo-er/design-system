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
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
  {section.colors.map(([label, color]) => (
    <div
      key={color + label}
      className="rounded-2xl overflow-hidden bg-white border border-[#E5E8EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
    >
      {/* COLOR */}
      <div
        className="h-[92px] transition-all"
        style={{
          background: color,

        
        }}
      />

      {/* INFO */}
      <div className="px-4 py-3 bg-white">
        <div className="text-[15px] font-semibold text-[#191F28] mb-1">
          {label}
        </div>

        <div className="text-[13px] text-[#8B95A1] font-mono">
          {color}
        </div>
      </div>
    </div>
  ))}
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
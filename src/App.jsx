import React, { useState } from "react";

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

export default function App() {
  const [menu, setMenu] = useState("tokens");

  return (
    <div className="flex h-screen bg-[#F9FAFB] text-[#191F28]">
      {/* SIDEBAR */}
      <aside
        className="
          hidden lg:flex
          w-[280px]
          bg-white
          border-r border-[#E5E8EB]
          flex-col
          sticky top-0 h-screen
        "
      >
        {/* LOGO */}
        <div className="px-6 pt-7 pb-6 border-b border-[#F2F4F6]">
          <h1 className="text-[24px] font-bold tracking-tight">
            flow
          </h1>

          <p className="text-sm text-[#8B95A1] mt-1">
            Design System
          </p>
        </div>

        {/* SEARCH */}
        <div className="px-6 pt-6">
          <div
            className="
              h-11
              rounded-xl
              bg-[#F2F4F6]
              flex items-center
              px-4
              text-sm text-[#8B95A1]
            "
          >
            Search...
          </div>
        </div>

        {/* NAV */}
        <div className="flex-1 overflow-auto px-4 py-6">
          <div className="mb-8">
            <div className="text-xs font-semibold text-[#8B95A1] uppercase mb-3 px-2">
              Foundations
            </div>

            <div className="space-y-1">
              <MenuItem active={menu === "tokens"} onClick={() => setMenu("tokens")}>
                Color
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

          <div>
            <div className="text-xs font-semibold text-[#8B95A1] uppercase mb-3 px-2">
              Components
            </div>

            <div className="space-y-1">
              <MenuItem>Button</MenuItem>
              <MenuItem>Input</MenuItem>
              <MenuItem>Modal</MenuItem>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="border-t border-[#F2F4F6] px-6 py-5">
          <p className="text-xs text-[#8B95A1]">
            © 2026 Flow Design System
          </p>
        </div>
      </aside>

      {/* CONTENT */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* HEADER */}
        <header
          className="
            h-16
            bg-white
            border-b border-[#E5E8EB]
            flex items-center
            justify-between
            px-6 lg:px-10
            sticky top-0 z-20
          "
        >
          <div>
            <p className="text-xs text-[#8B95A1]">
              Foundations
            </p>

            <h2 className="text-[15px] font-semibold tracking-tight">
              Design Tokens
            </h2>
          </div>

          <div
            className="
              hidden md:flex
              w-[280px]
              h-10
              bg-[#F2F4F6]
              rounded-xl
              px-4
              items-center
              text-sm text-[#8B95A1]
            "
          >
            Search...
          </div>
        </header>

        {/* MAIN */}
        <main className="flex-1 overflow-auto">
          <div
            className="
              max-w-[1200px]
              mx-auto
              px-5 md:px-10
              py-10
            "
          >
            {menu === "tokens" && <TokenPage />}
            {menu === "typography" && <TypographyPage />}
            {menu === "spacing" && <SpacingPage />}
            {menu === "grid" && <GridPage />}
            {menu === "palette" && <PalettePage />}
          </div>
        </main>

        {/* FOOTER */}
        <footer
          className="
            bg-white
            border-t border-[#E5E8EB]
            px-6 lg:px-10
            py-4
          "
        >
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
      className={`
        w-full
        flex items-center
        px-3 py-[11px]
        rounded-xl
        text-[15px]
        font-medium
        transition-all
        ${
          active
            ? "bg-[#EEF2FF] text-[#4F46E5]"
            : "text-[#4B5563] hover:bg-gray-50"
        }
      `}
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

function TokenPage() {
  return (
    <div>
      {/* TITLE */}
      <div className="mb-14">
        <p className="text-sm text-[#8B95A1] mb-3">
          Foundations
        </p>

        <h1 className="text-[32px] md:text-[44px] leading-[1.1] font-bold tracking-tight">
          Design Tokens
        </h1>

        <p className="text-[#6B7684] text-[15px] leading-7 mt-5 max-w-[720px]">
          Design tokens define the visual foundations of the system.
        </p>
      </div>

      {/* COLOR */}
      <SectionTitle title="Color" />

      <TokenCard
        token="color.text.accent.lime"
        description="Use for lime text..."
        light="#4C6B1F"
        dark="#B3DF72"
        lightLabel="Lime800"
        darkLabel="Lime300"
      />

      {/* BORDER */}
      <SectionTitle title="Border" />

      <BorderCard
        token="border.width"
        description="The default width for all standard component borders and dividers."
        value="1px"
      />

      <BorderCard
        token="border.width.selected"
        description="The width used to indicate a selected element."
        value="2px"
      />

      <BorderCard
        token="border.width.focused"
        description="The width used for focus rings."
        value="2px"
      />

      {/* MOTION */}
      <SectionTitle title="Motion" />

      <MotionCard
        token="motion.avatar.enter"
        description="Use for avatar group enter transitions."
        values={[
          "ScaleIn80to100",
          "FadeIn0to100",
          "150ms",
          "EasePracticalOut",
        ]}
      />

      {/* OPACITY */}
      <SectionTitle title="Opacity" />

      <OpacityCard />

      {/* RADIUS */}
      <SectionTitle title="Radius" />

      <RadiusCard />
    </div>
  );
}

function TokenCard({
  token,
  description,
  light,
  dark,
  lightLabel,
  darkLabel,
}) {
  return (
    <section className="bg-white rounded-[28px] border border-[#E5E8EB] p-6 md:p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04)] mb-8">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <code className="inline-flex bg-[#F2F4F6] px-3 py-1.5 rounded-lg text-[13px] font-medium text-[#4E5968]">
            {token}
          </code>

          <p className="text-[15px] text-[#4E5968] leading-7 mt-4">
            {description}
          </p>
        </div>

        <div className="w-full md:w-[220px] rounded-2xl border border-[#E5E8EB] p-4">
          <div className="h-12 rounded-xl mb-3" style={{ background: light }} />

          <span className="text-sm text-[#4E5968]">
            {lightLabel}
          </span>
        </div>

        <div className="w-full md:w-[220px] rounded-2xl bg-[#191F28] p-4">
          <div className="h-12 rounded-xl mb-3" style={{ background: dark }} />

          <span className="text-sm text-gray-300">
            {darkLabel}
          </span>
        </div>
      </div>
    </section>
  );
}

function BorderCard({ token, description, value }) {
  return (
    <section className="bg-white rounded-[28px] border border-[#E5E8EB] p-6 md:p-8 mb-6">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <code className="inline-flex bg-[#F2F4F6] px-3 py-1.5 rounded-lg text-[13px] font-medium text-[#4E5968]">
            {token}
          </code>

          <p className="text-[15px] text-[#4E5968] leading-7 mt-4">
            {description}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-[120px] h-10 border border-[#E5E8EB] rounded-lg flex items-center px-3">
            <div
              style={{
                width: "100%",
                borderTop: `${value} solid black`,
              }}
            />
          </div>

          <span className="text-[15px] text-[#4E5968]">
            {value}
          </span>
        </div>
      </div>
    </section>
  );
}

function MotionCard({ token, description, values }) {
  return (
    <section className="bg-white rounded-[28px] border border-[#E5E8EB] p-6 md:p-8 mb-6">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <code className="inline-flex bg-[#F2F4F6] px-3 py-1.5 rounded-lg text-[13px] font-medium text-[#4E5968]">
            {token}
          </code>

          <p className="text-[15px] text-[#4E5968] leading-7 mt-4">
            {description}
          </p>
        </div>

        <div className="space-y-2 text-[15px] text-[#4E5968]">
          {values.map((v, i) => (
            <div key={i}>{v}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OpacityCard() {
  return (
    <section className="bg-white rounded-[28px] border border-[#E5E8EB] p-6 md:p-8 mb-6">
      <div className="grid md:grid-cols-3 gap-8 items-center">
        <div>
          <code className="inline-flex bg-[#F2F4F6] px-3 py-1.5 rounded-lg text-[13px] font-medium text-[#4E5968]">
            opacity.disabled
          </code>

          <p className="text-[15px] text-[#4E5968] leading-7 mt-4">
            Apply to images when in a disabled state.
          </p>
        </div>

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
    </section>
  );
}

function RadiusCard() {
  return (
    <section className="bg-white rounded-[28px] border border-[#E5E8EB] p-6 md:p-8">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <code className="inline-flex bg-[#F2F4F6] px-3 py-1.5 rounded-lg text-[13px] font-medium text-[#4E5968]">
            radius.xsmall
          </code>

          <p className="text-[15px] text-[#4E5968] leading-7 mt-4">
            Use for small detail elements.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-16 h-10 border border-[#E5E8EB] rounded-sm" />

          <span className="text-[15px] text-[#4E5968]">
            2px
          </span>
        </div>
      </div>
    </section>
  );
}

function TypographyPage() {
  return <div className="text-[40px] font-bold">Typography</div>;
}

function SpacingPage() {
  return <div className="text-[40px] font-bold">Spacing</div>;
}

function GridPage() {
  return <div className="text-[40px] font-bold">Grid</div>;
}

function PalettePage() {
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
        { step: 500, hex: "#AAAAAA" },
        { step: 600, hex: "#888888" },
        { step: 700, hex: "#666666" },
        { step: 800, hex: "#222222" },
        { step: 900, hex: "#191F28" },
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
        { step: 500, hex: "#7A7A7A" },
        { step: 600, hex: "#9A9A9A" },
        { step: 700, hex: "#B5B5B5" },
        { step: 800, hex: "#D1D1D1" },
        { step: 900, hex: "#EDEDED" },
      ],
    },
  ];

  const PaletteColumn = ({ palette, dark = false }) => (
    <div>
      <h3 className="text-[18px] font-semibold mb-4">
        {palette.name}
      </h3>

      <div className="bg-white rounded-[24px] border border-[#E5E8EB] overflow-hidden">
        {palette.colors.map((c) => (
          <div
            key={c.step}
            onClick={() => navigator.clipboard.writeText(c.hex)}
            className="
              h-[52px]
              flex items-center justify-between
              px-4
              text-sm
              cursor-pointer
              transition-opacity
              hover:opacity-80
            "
            style={{ backgroundColor: c.hex }}
          >
            <span className={dark ? "text-white" : "text-black"}>
              {c.step}
            </span>

            <span className={dark ? "text-gray-200" : "text-[#4E5968]"}>
              {c.hex}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      <div className="mb-14">
        <p className="text-sm text-[#8B95A1] mb-3">
          Foundations
        </p>

        <h1 className="text-[32px] md:text-[44px] leading-[1.1] font-bold tracking-tight">
          Color Palette
        </h1>
      </div>

      <div className="mb-20">
        <h2 className="text-[28px] font-bold tracking-tight mb-8">
          Light Mode
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {lightPalettes.map((p) => (
            <PaletteColumn key={p.name} palette={p} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-[28px] font-bold tracking-tight mb-8">
          Dark Mode
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {darkPalettes.map((p) => (
            <PaletteColumn key={p.name} palette={p} dark />
          ))}
        </div>
      </div>
    </div>
  );
}
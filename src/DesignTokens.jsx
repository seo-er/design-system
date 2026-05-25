import React, { useState } from "react";
import DesignTokens from "./DesignTokens";

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
      <Sidebar menu={menu} setMenu={setMenu} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar menu={menu} />

        <main className="flex-1 overflow-auto">
          <div className="max-w-[1200px] mx-auto px-12 py-10">
            {menu === "tokens" && <DesignTokens />}
            {menu === "grid" && <GridPage />}
            {menu === "color" && <ColorPage />}
            {menu === "typography" && <TypographyPage />}
            {menu === "spacing" && <SpacingPage />}
          </div>
        </main>
      </div>
    </div>
  );
}

function Sidebar({ menu, setMenu }) {
  return (
    <aside className="w-[260px] bg-white border-r border-gray-200 px-4 py-6 flex flex-col">
      <div className="text-[24px] font-bold tracking-tight mb-10">
        flow
      </div>

      <div className="space-y-1">
        <MenuItem label="Color (Tokens)" active={menu === "tokens"} onClick={() => setMenu("tokens")} />
        <MenuItem label="Typography" active={menu === "typography"} onClick={() => setMenu("typography")} />
        <MenuItem label="Grid" active={menu === "grid"} onClick={() => setMenu("grid")} />
        <MenuItem label="Color" active={menu === "color"} onClick={() => setMenu("color")} />
        <MenuItem label="Spacing" active={menu === "spacing"} onClick={() => setMenu("spacing")} />
      </div>
    </aside>
  );
}

function MenuItem({ label, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`px-3 py-[11px] rounded-xl cursor-pointer text-[15px] font-medium transition-all ${
        active
          ? "bg-[#EEF2FF] text-[#4F46E5]"
          : "text-[#4B5563] hover:bg-gray-50"
      }`}
    >
      {label}
    </div>
  );
}

function Topbar({ menu }) {
  const titles = {
    tokens: "Color (Tokens)",
    grid: "Grid",
    color: "Color Palettes",
    typography: "Typography",
    spacing: "Spacing",
  };

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center px-10 text-[15px] font-semibold sticky top-0 z-10">
      {titles[menu]}
    </header>
  );
}

function GridPage() {
  return (
    <div>
      <h1 className="text-[40px] font-bold tracking-tight mb-10">
        Breakpoints
      </h1>

      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        <div className="grid grid-cols-5 px-6 py-4 border-b border-gray-100 text-sm text-[#6B7684]">
          <span>Breakpoint</span>
          <span>Viewport</span>
          <span>Columns</span>
          <span>Gutters</span>
          <span>Margins</span>
        </div>

        {gridData.map((g) => (
          <div
            key={g.bp}
            className="grid grid-cols-5 px-6 py-5 border-b border-gray-100 text-[15px] hover:bg-gray-50 transition"
          >
            <span>
              <span className="bg-[#F2F4F6] px-2 py-1 rounded-md text-[13px]">
                {g.bp}
              </span>
            </span>

            <span>{g.viewport}</span>
            <span>{g.columns}</span>
            <span>{g.gutters}</span>
            <span>{g.margins}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TypographyPage() {
  const rows = [
    ["font.heading.xxlarge", "Bold", "2rem / 32px", "2.25rem / 36px"],
    ["font.heading.xlarge", "Bold", "1.75rem / 28px", "2rem / 32px"],
    ["font.heading.large", "Bold", "1.5rem / 24px", "1.75rem / 28px"],
    ["font.heading.medium", "Bold", "1.25rem / 20px", "1.5rem / 24px"],
  ];

  return (
    <div>
      <h1 className="text-[40px] font-bold tracking-tight mb-10">
        Typography
      </h1>

      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        <div className="grid grid-cols-5 px-6 py-4 border-b border-gray-100 text-sm text-[#6B7684]">
          <span>Preview</span>
          <span>Token</span>
          <span>Weight</span>
          <span>Size</span>
          <span>Line height</span>
        </div>

        {rows.map((r) => {
          const size = r[2].split("/")[0].trim();
          const lineHeight = r[3].split("/")[0].trim();

          return (
            <div
              key={r[0]}
              className="grid grid-cols-5 px-6 py-5 border-b border-gray-100 items-center"
            >
              <span
                className="font-bold"
                style={{ fontSize: size, lineHeight }}
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
      </div>
    </div>
  );
}

function ColorPage() {
  return (
    <div>
      <h1 className="text-[40px] font-bold tracking-tight">
        Color Palettes
      </h1>
    </div>
  );
}

function SpacingPage() {
  return (
    <div>
      <h1 className="text-[40px] font-bold tracking-tight">
        Spacing
      </h1>
    </div>
  );
}
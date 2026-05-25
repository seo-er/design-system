import React, { useState } from "react";
import DesignTokens from "./DesignTokens.jsx";

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
    <div className="flex h-screen bg-gray-100">
      <Sidebar menu={menu} setMenu={setMenu} />

      <div className="flex-1 flex flex-col">
        <Topbar menu={menu} />

        <main className="flex-1 p-6 overflow-auto">
          {menu === "tokens" && <TokenPage />}
          {menu === "grid" && <GridPage />}
          {menu === "color" && <ColorPage />}
          {menu === "typography" && <TypographyPage />}
          {menu === "spacing" && <SpacingPage />}
        </main>

        <Footer />
      </div>
    </div>
  );
}

function Sidebar({ menu, setMenu }) {
  return (
    <aside className="w-64 bg-white border-r p-4 flex flex-col">
      <div className="font-bold mb-6">flow</div>

      <MenuItem label="Color (Tokens)" active={menu === "tokens"} onClick={() => setMenu("tokens")} />
      <MenuItem label="Typography" active={menu === "typography"} onClick={() => setMenu("typography")} />
      <MenuItem label="Grid" active={menu === "grid"} onClick={() => setMenu("grid")} />
      <MenuItem label="Color" active={menu === "color"} onClick={() => setMenu("color")} />
      <MenuItem label="Spacing" active={menu === "spacing"} onClick={() => setMenu("spacing")} />
    </aside>
  );
}

function MenuItem({ label, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`px-3 py-2 rounded cursor-pointer text-sm ${
        active ? "bg-blue-50 text-blue-600" : "text-gray-600"
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
    color: "Color",
    typography: "Typography",
    spacing: "Spacing",
  };

  return (
    <header className="h-14 bg-white border-b flex items-center px-6 text-sm font-medium">
      {titles[menu]}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t text-xs text-gray-400 px-6 py-3 bg-white">
      © 2026 Design System
    </footer>
  );
}

function TokenPage() {
  return <DesignTokens />;
}

function GridPage() {
  return (
    <div>
      <h1 className="text-xl font-semibold mb-6">Breakpoints</h1>

      <div className="grid grid-cols-5 text-sm text-gray-500 border-b pb-3 mb-2">
        <span className="px-2">Breakpoint</span>
        <span className="px-2">Viewport</span>
        <span className="px-2">Columns</span>
        <span className="px-2">Gutters</span>
        <span className="px-2">Margins</span>
      </div>

      <div className="space-y-1">
        {gridData.map((g) => (
          <div
            key={g.bp}
            className="grid grid-cols-5 items-center py-2 border-b text-sm hover:bg-gray-50 transition"
          >
            <span className="px-2">
              <span className="bg-gray-200 px-2 py-1 rounded text-xs">{g.bp}</span>
            </span>

            <span className="px-2 text-gray-700">{g.viewport}</span>
            <span className="px-2">{g.columns}</span>
            <span className="px-2">{g.gutters}</span>
            <span className="px-2">{g.margins}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ColorPage() {
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

  const PaletteColumn = ({ palette, dark = false }) => (
    <div>
      <h3 className="text-md font-medium mb-3">{palette.name}</h3>
      <div className="w-[244px] rounded-lg overflow-hidden border">
        {palette.colors.map((c) => (
          <div
            key={c.step}
            onClick={() => navigator.clipboard.writeText(c.hex)}
            className="h-[37px] flex justify-between items-center px-3 text-xs cursor-pointer hover:opacity-80"
            style={{ backgroundColor: c.hex }}
          >
            <span className={dark ? "text-white" : "text-black"}>{c.step}</span>
            <span className={dark ? "text-gray-200" : "text-gray-700"}>{c.hex}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      <h1 className="text-xl font-semibold mb-6">Color Palettes</h1>

      <div className="mb-12">
        <h2 className="text-lg font-semibold mb-6">Light Mode</h2>
        <div className="flex gap-12">
          {lightPalettes.filter(p => p.name !== "Gray").map((p) => (
            <PaletteColumn key={p.name} palette={p} />
          ))}
        </div>

        <div className="mt-10">
          <h2 className="text-lg font-semibold mb-6">Light mode neutrals</h2>
          <div className="flex">
            {lightPalettes.filter(p => p.name === "Gray").map((p) => (
              <PaletteColumn key={p.name} palette={p} />
            ))}
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-6">Dark Mode</h2>
        <div className="flex gap-12">
          {darkPalettes.map((p) => (
            <PaletteColumn key={p.name} palette={p} dark />
          ))}
        </div>
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
    ["font.heading.small", "Bold", "1rem / 16px", "1.25rem / 20px"],
    ["font.heading.xsmall", "Bold", "0.875rem / 14px", "1.25rem / 20px"],
    ["font.heading.xxsmall", "Bold", "0.75rem / 12px", "1rem / 16px"],
  ];

  return (
    <div>
      <h1 className="text-xl font-semibold mb-6">Typography</h1>

      <div className="grid grid-cols-5 text-sm text-gray-500 border-b pb-3 mb-2">
        <span className="px-2">Preview</span>
        <span className="px-2">Token</span>
        <span className="px-2">Weight</span>
        <span className="px-2">Size</span>
        <span className="px-2">Line height</span>
      </div>

      <div className="space-y-1">
        {rows.map((r) => {
        const size = r[2].split("/")[0].trim();
        const lineHeight = r[3].split("/")[0].trim();

        return (
          <div key={r[0]} className="grid grid-cols-5 items-center py-2 border-b">
            <span
              className="px-2 font-bold"
              style={{ fontSize: size, lineHeight: lineHeight }}
            >
              Aa
            </span>
            <span className="px-2 text-gray-700">{r[0]}</span>
            <span className="px-2">{r[1]}</span>
            <span className="px-2">{r[2]}</span>
            <span className="px-2">{r[3]}</span>
          </div>
        );
      })}
      </div>
    </div>
  );
}

function SpacingPage() {
  const rows = [
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

  return (
    <div>
      <h1 className="text-xl font-semibold mb-6">Spacing</h1>

      <div className="grid grid-cols-5 text-sm text-gray-500 border-b pb-3 mb-2">
        <span className="px-2">Token</span>
        <span className="px-2">Base unit multiplier</span>
        <span className="px-2">REM</span>
        <span className="px-2">Pixels</span>
        <span className="px-2">Visual</span>
      </div>

      <div className="space-y-1">
        {rows.map((r) => (
          <div
            key={r[0]}
            className="grid grid-cols-5 items-center py-2 border-b text-sm hover:bg-gray-50 transition"
          >
            <span className="px-2 text-gray-700">{r[0]}</span>
            <span className="px-2">{r[1]}</span>
            <span className="px-2">{r[2]}</span>
            <span className="px-2">{r[3]}</span>
            <span className="px-2">
              <div
                className="bg-black"
                style={{ width: r[3], height: "8px" }}
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

import React, { useState } from "react";
import DesignTokens from "./DesignTokens";

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
          px-5 py-6
          sticky top-0 h-screen
        "
      >
        {/* LOGO */}
        <div className="mb-10">
          <h1 className="text-[24px] font-bold tracking-tight">
            flow
          </h1>

          <p className="text-sm text-[#8B95A1] mt-1">
            Design System
          </p>
        </div>

        {/* SEARCH */}
        <div
          className="
            h-11
            rounded-xl
            bg-[#F2F4F6]
            flex items-center
            px-4
            mb-8
            text-sm text-[#8B95A1]
          "
        >
          Search...
        </div>

        {/* FOUNDATIONS */}
        <div className="mb-8">
          <div className="text-xs font-semibold text-[#8B95A1] uppercase mb-3">
            Foundations
          </div>

          <div className="space-y-1">
            <MenuItem
              active={menu === "tokens"}
              onClick={() => setMenu("tokens")}
            >
              Color
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
        <div>
          <div className="text-xs font-semibold text-[#8B95A1] uppercase mb-3">
            Components
          </div>

          <div className="space-y-1">
            <MenuItem>Button</MenuItem>
            <MenuItem>Input</MenuItem>
            <MenuItem>Modal</MenuItem>
          </div>
        </div>
      </aside>

      {/* CONTENT */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* TOPBAR */}
        <header
          className="
            h-16
            bg-white
            border-b border-[#E5E8EB]
            flex items-center
            px-6 lg:px-10
            sticky top-0 z-20
          "
        >
          <div className="flex items-center justify-between w-full">
            <h2 className="text-[15px] font-semibold tracking-tight">
              Design Tokens
            </h2>

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
            {menu === "tokens" && <DesignTokens />}
          </div>
        </main>
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
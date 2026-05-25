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
          {/* FOUNDATIONS */}
          <div className="mb-8">
            <div className="text-xs font-semibold text-[#8B95A1] uppercase mb-3 px-2">
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
          {/* LEFT */}
          <div className="flex items-center gap-4">
            {/* MOBILE */}
            <button
              className="
                lg:hidden
                w-10 h-10
                rounded-lg
                hover:bg-[#F2F4F6]
              "
            >
              ☰
            </button>

            <div>
              <p className="text-xs text-[#8B95A1]">
                Foundations
              </p>

              <h2 className="text-[15px] font-semibold tracking-tight">
                Design Tokens
              </h2>
            </div>
          </div>

          {/* SEARCH */}
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
            {menu === "tokens" && <DesignTokens />}
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
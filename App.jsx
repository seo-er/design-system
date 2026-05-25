import React from "react";

function hexToRgba(hex, opacity) {
  const cleanHex = hex.replace("#", "");
  const bigint = parseInt(cleanHex, 16);

  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

export default function DesignTokens() {
  return (
    <div className="text-[#191F28]">
      <h1 className="text-[40px] leading-[1.2] font-bold tracking-tight mb-12">
        Color
      </h1>

      {/* COLOR */}
      <div className="mb-16">
        <h2 className="text-[28px] font-bold tracking-tight mb-8">
          Color
        </h2>

        <div className="grid md:grid-cols-3 gap-6 bg-white rounded-2xl border border-gray-200 p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <div>
            <code className="bg-[#F2F4F6] text-[#4E5968] px-2.5 py-1 rounded-md text-[13px] font-medium">
              color.text.accent.lime
            </code>

            <p className="text-[15px] text-[#4E5968] mt-4 leading-7">
              Use for lime text.
            </p>
          </div>

          <div className="p-4 border border-gray-200 rounded-xl bg-white">
            <div
              className="h-10 rounded-lg mb-3"
              style={{ background: "#4C6B1F" }}
            />

            <span className="text-[14px] text-[#4E5968]">
              Lime800
            </span>
          </div>

          <div className="p-4 border border-gray-200 rounded-xl bg-[#191F28]">
            <div
              className="h-10 rounded-lg mb-3"
              style={{ background: "#B3DF72" }}
            />

            <span className="text-[14px] text-gray-300">
              Lime300
            </span>
          </div>
        </div>
      </div>

      {/* BORDER */}
      <div className="mb-20">
        <h2 className="text-[28px] font-bold tracking-tight mb-8">
          Border
        </h2>

        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-2 px-6 py-4 border-b border-gray-100 text-sm text-[#6B7684]">
            <span>Token and description</span>
            <span>Value</span>
          </div>

          {[
            {
              token: "border.width",
              value: "1px",
              desc: "The default width for all standard component borders and dividers.",
            },
            {
              token: "border.width.selected",
              value: "2px",
              desc: "The width used to indicate a selected element.",
            },
          ].map((item) => (
            <div
              key={item.token}
              className="grid grid-cols-2 px-6 py-6 border-b border-gray-100"
            >
              <div>
                <code className="bg-[#F2F4F6] text-[#4E5968] px-2.5 py-1 rounded-md text-[13px] font-medium">
                  {item.token}
                </code>

                <p className="text-[15px] text-[#4E5968] mt-4">
                  {item.desc}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-[120px] h-10 border border-gray-200 rounded-lg flex items-center px-3">
                  <div
                    style={{
                      width: "100%",
                      borderTop: `${item.value} solid black`,
                    }}
                  />
                </div>

                <span>{item.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* OPACITY */}
      <div>
        <h2 className="text-[28px] font-bold tracking-tight mb-8">
          Opacity
        </h2>

        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-3 px-6 py-4 border-b border-gray-100 text-sm text-[#6B7684]">
            <span>Token and description</span>
            <span>Light value</span>
            <span>Dark value</span>
          </div>

          <div className="grid grid-cols-3 px-6 py-6 items-center">
            <div>
              <code className="bg-[#F2F4F6] text-[#4E5968] px-2.5 py-1 rounded-md text-[13px] font-medium">
                opacity.disabled
              </code>

              <p className="text-[15px] text-[#4E5968] mt-4">
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
                backgroundPosition:
                  "0 0, 0 6px, 6px -6px, -6px 0px",
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
                backgroundPosition:
                  "0 0, 0 6px, 6px -6px, -6px 0px",
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
        </div>
      </div>
    </div>
  );
}
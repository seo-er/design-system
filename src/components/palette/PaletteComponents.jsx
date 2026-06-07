import { useI18n } from "../../i18n";
import { accessibleTextColor, copyToClipboard } from "../../utils/color";
import { Card } from "../docs/DocPrimitives";
import { TokenTable } from "../docs/TokenTable";

export function PaletteColumn({ palette, dark = false }) {
  const rows = palette.colors.map((c) => {
    const paletteName =
      palette.name.toLowerCase() === "orange"
        ? "primary"
        : palette.name.toLowerCase() === "yellow"
        ? "secondary"
        : palette.name.toLowerCase();
  
    return {
      token: `color-${paletteName}-${c.step}`,
      step: c.step,
      hex: c.hex,
    };
  });

  return (
    <Card className="mb-0">
      <div className="px-6 py-5 border-b border-[#F2F4F6] bg-[#FAFBFC]">
        <h3 className="text-[20px] font-semibold tracking-tight">{palette.name}</h3>
        {dark && (
          <p className="text-sm text-[#8B95A1] mt-1">Dark mode palette</p>
        )}
      </div>
      <TokenTable
        caption={`${palette.name} color tokens`}
        embedded
        getRowKey={(row) => row.token}
        columns={[
          {
            id: "swatch",
            label: "Swatch",
            render: (row) => (
              <button
                type="button"
                onClick={() => copyToClipboard(row.hex)}
                className="w-12 h-12 rounded-xl border border-[#E5E8EB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4F46E5]"
                style={{ backgroundColor: row.hex }}
                aria-label={`Copy color ${row.hex}`}
              />
            ),
          },
          {
            id: "token",
            label: "Token",
            render: (row) => (
              <button
                type="button"
                onClick={() => copyToClipboard(row.token)}
                className="text-left font-medium hover:text-[#2563EB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4F46E5]"
                aria-label={`Copy token ${row.token}`}
              >
                {row.token}
              </button>
            ),
          },
          {
            id: "hex",
            label: "Hex",
            render: (row) => (
              <button
                type="button"
                onClick={() => copyToClipboard(row.hex)}
                className="font-mono text-[14px] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4F46E5]"
                aria-label={`Copy hex ${row.hex}`}
              >
                {row.hex}
              </button>
            ),
          },
        ]}
        rows={rows}
      />
    </Card>
  );
}

export function AccessibleColorStrip({ section }) {
  return (
    <figure className="space-y-4">
      <figcaption className="text-[22px] font-semibold text-[#191F28]">{section.title}</figcaption>
      <div
        className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3"
        role="list"
        aria-label={section.title}
      >
        {section.colors.map((color) => {
          const bg = color.displayHex || color.hex;
          return (
            <div
              key={`${section.id}-${color.label}`}
              role="listitem"
              className="rounded-2xl overflow-hidden border border-[#E5E8EB] shadow-sm"
            >
              <div
                className="h-[88px] px-3 py-3 flex flex-col justify-between"
                style={{
                  backgroundColor: bg,
                  color: accessibleTextColor(color.hex),
                }}
              >
                <span className="text-[13px] font-semibold leading-tight">{color.label}</span>
                <span className="text-[12px] font-mono opacity-90">{color.hex}</span>
              </div>
              {section.colorBlind && color.displayHex && color.displayHex !== color.hex && (
                <div className="px-3 py-2 bg-white text-[11px] text-[#6B7684] border-t border-[#F2F4F6]">
                  perceived {color.displayHex}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </figure>
  );
}

export function InaccessiblePairGrid({ section }) {
  return (
    <figure className="space-y-4">
      <figcaption className="text-[22px] font-semibold text-[#191F28]">{section.title}</figcaption>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" role="list">
        {section.pairs.map(([left, right], index) => (
          <div
            key={`${section.id}-pair-${index}`}
            role="listitem"
            className="rounded-2xl overflow-hidden border-2 border-[#FCA5A5] bg-white shadow-sm"
            aria-label={`Hard to distinguish pair ${left} and ${right}`}
          >
            <div className="px-4 py-2 bg-[#FEF2F2] text-[12px] font-semibold text-[#B91C1C] uppercase tracking-wide">
              Avoid combination
            </div>
            <div className="flex h-[72px]">
              <div className="flex-1 flex flex-col items-center justify-center" style={{ backgroundColor: left }}>
                <span className="text-[11px] font-mono text-white mix-blend-difference">{left}</span>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center" style={{ backgroundColor: right }}>
                <span className="text-[11px] font-mono text-white mix-blend-difference">{right}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </figure>
  );
}

export function ColorBlindnessAlternatives({ items }) {
  const { t } = useI18n();

  return (
    <section aria-labelledby="color-blind-alternatives-title" className="mt-12">
      <div className="rounded-[28px] border border-[#E5E8EB] bg-white p-8 lg:p-10 shadow-[var(--shadow-sm)]">
        <h3 id="color-blind-alternatives-title" className="text-[24px] font-bold tracking-tight mb-2">
          {t("palette.colorUsageTitle")}
        </h3>
        <p className="text-[15px] text-[#6B7684] mb-8">{t("palette.colorUsageDesc")}</p>

        <div className="space-y-10">
          {items.map((item) => (
            <article key={item.id} className="space-y-4">
              <p className="text-[16px] leading-[1.75] text-[#4E5968]">{item.guidance}</p>
              <div
                className="flex flex-col lg:flex-row items-stretch gap-0 overflow-hidden rounded-2xl border border-[#E5E8EB] shadow-sm max-w-[720px]"
                aria-label={`${item.name} color alternative`}
              >
                <ColorSwatchBlock swatch={item.before} badge="Before" />
                <div
                  className="flex items-center justify-center bg-[#64748B] text-white text-sm font-semibold px-4 lg:px-6"
                  aria-hidden="true"
                >
                  →
                </div>
                <ColorSwatchBlock swatch={item.after} badge="Recommended" recommended />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ColorSwatchBlock({ swatch, badge, recommended = false }) {
  return (
    <div
      className={`flex-1 min-h-[120px] px-6 py-5 flex flex-col justify-center ${
        recommended ? "ring-2 ring-inset ring-[#10B981]" : ""
      }`}
      style={{ backgroundColor: swatch.hex, color: swatch.textColor }}
    >
      <span className="text-[11px] font-bold uppercase tracking-wider opacity-80">{badge}</span>
      <span className="text-[18px] font-semibold mt-2">{swatch.label}</span>
      <span className="text-[14px] font-mono mt-1 opacity-90">{swatch.hex}</span>
    </div>
  );
}

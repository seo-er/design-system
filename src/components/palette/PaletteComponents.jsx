import { useI18n } from "../../i18n";
import { accessibleTextColor, copyToClipboard } from "../../utils/color";
import { Card } from "../docs/DocPrimitives";
import { TokenTable } from "../docs/TokenTable";

export function PaletteColumn({ palette, dark = false }) {
  const rows = palette.colors.map((c) => ({
    token: `color.${palette.name.toLowerCase()}.${c.step}`,
    step: c.step,
    hex: c.hex,
  }));

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
    <section className="space-y-8">
      <h3 className="text-[40px] font-bold tracking-[-0.03em] text-[#191F28]">
        {section.title}
      </h3>

      <div
        role="list"
        className="
          grid
          grid-cols-1
          gap-6
          md:grid-cols-2
          xl:grid-cols-3
        "
      >
        {section.pairs.map(([left, right], index) => (
          <div
            key={`${section.id}-pair-${index}`}
            role="listitem"
            aria-label={`${left} and ${right} are difficult to distinguish`}
            className="
              h-[108px]
              overflow-hidden
              rounded-[24px]
              shadow-[0_4px_12px_rgba(15,23,42,0.12)]
            "
          >
            <div className="flex h-full">
              <div
                className="flex flex-1 items-center justify-center"
                style={{
                  backgroundColor: left,
                }}
              >
                <span
                  className="
                    font-mono
                    text-[18px]
                    font-bold
                    tracking-[-0.02em]
                  "
                  style={{
                    color: accessibleTextColor(left),
                  }}
                >
                  {left.toUpperCase()}
                </span>
              </div>

              <div className="w-px bg-white/80 shrink-0" />

              <div
                className="flex flex-1 items-center justify-center"
                style={{
                  backgroundColor: right,
                }}
              >
                <span
                  className="
                    font-mono
                    text-[18px]
                    font-bold
                    tracking-[-0.02em]
                  "
                  style={{
                    color: accessibleTextColor(right),
                  }}
                >
                  {right.toUpperCase()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
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
           <article className="py-6 border-b border-[#E5E8EB] last:border-b-0">
           <div className="flex items-center gap-6">
             <div>
               <div className="text-sm text-[#8B95A1]">
                 Original
               </div>
         
               <div
                 className="w-16 h-16 rounded-xl mt-2"
                 style={{ backgroundColor: item.before.hex }}
               />
             </div>
         
             <span className="text-[#B0B8C1]">→</span>
         
             <div>
               <div className="text-sm text-[#8B95A1]">
                 Accessible
               </div>
         
               <div
                 className="w-16 h-16 rounded-xl mt-2"
                 style={{ backgroundColor: item.after.hex }}
               />
             </div>
         
             <div className="flex-1 pl-4">
               <div className="font-medium">
                 {item.before.label} → {item.after.label}
               </div>
         
               <p className="text-sm text-[#6B7684] mt-1">
                 {item.guidance}
               </p>
             </div>
           </div>
         </article>
          ))}
        </div>
      </div>
    </section>
  );
}


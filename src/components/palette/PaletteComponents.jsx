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
  const labels = [
    "Status",
    "Chart",
    "Warning",
    "Category",
    "Navigation",
  ];

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-[120px_1fr_80px_1fr] gap-6 items-end mb-8">
        <div />

        <div>
          <h4 className="text-[18px] font-semibold text-[#191F28]">
            일반 사용자 (Normal Vision)
          </h4>
          <p className="mt-1 text-sm text-[#6B7684]">
            일반 사용자가 인지하는 색상 조합입니다.
          </p>
        </div>

        <div />

        <div>
          <h4 className="text-[18px] font-semibold text-[#191F28]">
            적록색약자 (Deuteranopia)
          </h4>
          <p className="mt-1 text-sm text-[#6B7684]">
            적록색약 환경에서 인지되는 색상입니다.
          </p>
        </div>
      </div>

      {section.map((item, index) => (
        <div
          key={item.id}
          className="grid grid-cols-[120px_1fr_80px_1fr] gap-6 items-center"
        >
          <div>
            <div className="text-[15px] font-semibold text-[#191F28]">
              {labels[index]}
            </div>

            <div className="text-xs text-[#8B95A1] mt-1">
              Example {item.id}
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-[#E5E8EB] flex h-12">
            <div
              className="flex-1 flex items-center justify-center text-xs font-medium"
              style={{ backgroundColor: item.normal[0] }}
            >
              {item.normal[0]}
            </div>

            <div
              className="flex-1 flex items-center justify-center text-xs font-medium"
              style={{ backgroundColor: item.normal[1] }}
            >
              {item.normal[1]}
            </div>
          </div>

          <div className="text-center text-2xl text-[#94A3B8]">
            →
          </div>

          <div className="overflow-hidden rounded-lg border border-[#E5E8EB] flex h-12">
            <div
              className="flex-1 flex items-center justify-center text-xs font-medium"
              style={{ backgroundColor: item.colorBlind[0] }}
            >
              {item.colorBlind[0]}
            </div>

            <div
              className="flex-1 flex items-center justify-center text-xs font-medium"
              style={{ backgroundColor: item.colorBlind[1] }}
            >
              {item.colorBlind[1]}
            </div>
          </div>
        </div>
      ))}
    </div>
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


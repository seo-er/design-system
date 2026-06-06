import { useId } from "react";
import accordionDown from "../../assets/icons/ic_accordion_down.png";

export function AccessibleAccordion({ items, openIndex, onToggle, idPrefix = "accordion" }) {
  const baseId = useId();

  return (
    <div className="overflow-hidden rounded-[24px] border border-[#E5E8EB] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
      {items.map((item, index) => {
        const open = openIndex === index;
        const triggerId = `${baseId}-${idPrefix}-trigger-${index}`;
        const panelId = `${baseId}-${idPrefix}-panel-${index}`;

        return (
          <div key={item.id || item.title} className="border-b border-[#F2F4F6] last:border-b-0">
            <h3 className="m-0">
              <button
                type="button"
                id={triggerId}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => onToggle(open ? -1 : index)}
                className={`w-full flex items-center justify-between gap-4 px-8 py-6 text-left transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#4F46E5] ${
                  open ? "bg-[#FAFBFC]" : "bg-white hover:bg-[#FAFBFC]"
                }`}
              >
                <span className="flex items-center gap-3 min-w-0">
                  {item.icon && (
                    <img src={item.icon} alt="" className="w-6 h-6 shrink-0" aria-hidden="true" />
                  )}
                  <span className="text-[18px] font-semibold text-[#191F28] truncate">{item.title}</span>
                </span>
                <img
                  src={accordionDown}
                  alt=""
                  aria-hidden="true"
                  className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              hidden={!open}
              className={open ? "px-8 pb-8 text-[16px] leading-[1.8] text-[#4E5968]" : undefined}
            >
              {open && item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}

import { useI18n } from "../../i18n";
import { copyToClipboard } from "../../utils/color";

export function PageHeader({ category, title, description, badge }) {
  return (
    <header className="mb-12 animate-fade-up">
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#8B95A1]">
          {category}
        </span>
        {badge && (
          <span className="px-2 py-0.5 rounded-full bg-[#EEF2FF] text-[#4F46E5] text-[11px] font-semibold">
            {badge}
          </span>
        )}
      </div>
      <h1 className="text-[36px] lg:text-[44px] font-bold tracking-tight leading-[1.1]">
        {title}
      </h1>
      {description && (
        <p className="text-[#4E5968] text-[16px] lg:text-[17px] leading-[1.8] mt-5 max-w-[820px]">
          {description}
        </p>
      )}
    </header>
  );
}

export function SectionTitle({ title, description }) {
  return (
    <div className="mb-6 mt-14 first:mt-0">
      <h2 className="text-[24px] lg:text-[28px] font-bold tracking-tight">{title}</h2>
      {description && (
        <p className="text-[#6B7684] text-[15px] mt-2 max-w-[640px]">{description}</p>
      )}
    </div>
  );
}

export function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-white rounded-[var(--radius-xl)] border border-[var(--color-border-default)] overflow-hidden mb-6 shadow-[var(--shadow-sm)] ${className}`}
    >
      {children}
    </div>
  );
}

export function TokenChip({ token, label }) {
  const { t } = useI18n();
  const copyLabel = label || t("common.copyToken");

  return (
    <button
      type="button"
      onClick={() => copyToClipboard(token)}
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#F3F5F8] hover:bg-[#E5E8EB] font-mono text-[13px] text-[#4E5968] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4F46E5]"
      aria-label={`${copyLabel}: ${token}`}
    >
      {token}
      <span className="text-[#8B95A1] text-xs" aria-hidden="true">
        ⧉
      </span>
    </button>
  );
}

export function DocTabs({ value, onChange, idPrefix = "doc-tabs" }) {
  const { t } = useI18n();

  return (
    <div className="p-4 border-b border-[#E5E8EB] bg-white" role="tablist" aria-label="Documentation view">
      <div className="inline-flex rounded-[12px] bg-[#F2F4F6] p-1">
        {["design", "code"].map((tab) => {
          const selected = value === tab;
          return (
            <button
              key={tab}
              type="button"
              role="tab"
              id={`${idPrefix}-${tab}`}
              aria-selected={selected}
              aria-controls={`${idPrefix}-panel-${tab}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => onChange(tab)}
              className={`px-5 py-2 rounded-[10px] text-[14px] font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4F46E5] ${
                selected
                  ? "bg-white text-[#191F28] shadow-sm"
                  : "text-[#6B7280] hover:text-[#374151]"
              }`}
            >
              {t(`common.${tab}`)}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function ComponentSpec({ items }) {
  return (
    <dl className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
      {items.map((item) => (
        <div
          key={item.label}
          className="bg-white rounded-[16px] border border-[#E5E8EB] px-4 py-3"
        >
          <dt className="text-[11px] font-semibold uppercase tracking-wide text-[#8B95A1]">
            {item.label}
          </dt>
          <dd className="text-[14px] font-semibold text-[#191F28] mt-1">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function CheckIcon({ color = "white" }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 6L9 17L4 12"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

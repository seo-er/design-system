import { useMemo, useState } from "react";
import { useI18n } from "../../i18n";
import { BUTTON_SPEC } from "../../constants/componentSpecs";
import { PageHeader, SectionTitle, ComponentSpec } from "../../components/docs/DocPrimitives";
import { ComponentArchitecture, DocShowcase } from "../../components/docs/ComponentDoc";

const SIZE_STYLES = {
  sm: "h-[46px] px-5 text-[18px]",
  md: "h-[54px] px-7 text-[20px]",
  lg: "h-[64px] px-9 text-[24px]",
  xl: "h-[74px] px-11 text-[28px]",
};

function MangoButton({ children, variant = "primary", size = "md", disabled = false, className = "" }) {
  const base = "rounded-[8px] font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F97316]";
  const variants = {
    primary: "bg-[#F97316] text-white hover:bg-[#EA6A10]",
    secondary: "bg-[#FFD560] text-[#191F28] hover:bg-[#F5C842]",
    "outline-brand": "bg-transparent border border-[#F97316] text-[#F97316] hover:bg-[#FFF7ED]",
    "outline-neutral": "bg-white border border-[#E5E5E5] text-[#222222] hover:bg-[#F5F5F5]",
  };

  return (
    <button
      type="button"
      disabled={disabled}
      className={`${base} ${variants[variant]} ${SIZE_STYLES[size]} ${disabled ? "opacity-40 cursor-not-allowed" : ""} ${className}`}
    >
      {children}
    </button>
  );
}

export function ButtonPage() {
  const { t, page, dict } = useI18n();
  const p = page("button");
  const labels = dict.componentDoc;
  const [sizeTab, setSizeTab] = useState("design");
  const [variantTab, setVariantTab] = useState("design");
  const [stateTab, setStateTab] = useState("design");

  const buttonSpec = useMemo(
    () => ({
      ...BUTTON_SPEC,
      variants: BUTTON_SPEC.variants.map((variant) => ({
        ...variant,
        usage: p.variantUsage?.[variant.id] ?? "",
      })),
    }),
    [p.variantUsage]
  );

  return (
    <div>
      <PageHeader
        category={t("categories.components")}
        title={p.title}
        badge={p.badge}
        description={p.description}
      />

      <ComponentSpec
        items={[
          { label: "Variants", value: "Primary · Secondary · Outline" },
          { label: "States", value: "Default · Hover · Focus · Disabled" },
          { label: "Sizes", value: "SM · MD · LG · XL" },
          { label: "Token", value: "btn-*" },
        ]}
      />

      <SectionTitle title={labels.architectureTitle} description={labels.architectureDesc} />
      <ComponentArchitecture spec={buttonSpec} labels={labels} />

      <SectionTitle title={p.size} description={p.sizeDesc} />
      <DocShowcase
        idPrefix="button-size"
        tab={sizeTab}
        onTabChange={setSizeTab}
        design={
          <div className="flex flex-wrap items-end gap-8">
            {BUTTON_SPEC.sizes.map((s) => (
              <div key={s.id} className="flex flex-col gap-3">
                <span className="text-[14px] font-semibold text-[#7C3AED]">◆btn_{s.id}</span>
                <MangoButton size={s.id} variant="primary">
                  {s.id.toUpperCase()}
                </MangoButton>
                <code className="text-[11px] text-[#8B95A1]">{s.token}</code>
              </div>
            ))}
          </div>
        }
        code={`<Button size="sm" variant="primary">Small</Button>
<Button size="md" variant="primary">Medium</Button>
<Button size="lg" variant="primary">Large</Button>
<Button size="xl" variant="primary">XLarge</Button>

// Tokens: btn-size-sm | btn-size-md | btn-size-lg | btn-size-xl`}
      />

      <SectionTitle title={p.hierarchy} />
      <DocShowcase
        idPrefix="button-variant"
        tab={variantTab}
        onTabChange={setVariantTab}
        design={
          <div className="flex flex-wrap gap-6">
            <div className="flex flex-col items-start gap-3">
              <span className="text-[14px] font-semibold text-[#7C3AED]">◆btn_primary</span>
              <MangoButton variant="primary">Primary</MangoButton>
            </div>
            <div className="flex flex-col items-start gap-3">
              <span className="text-[14px] font-semibold text-[#7C3AED]">◆btn_secondary</span>
              <MangoButton variant="secondary">Secondary</MangoButton>
            </div>
            <div className="flex flex-col items-start gap-3">
              <span className="text-[14px] font-semibold text-[#7C3AED]">◆btn_outline_brand</span>
              <MangoButton variant="outline-brand">Outline</MangoButton>
            </div>
            <div className="flex flex-col items-start gap-3">
              <span className="text-[14px] font-semibold text-[#7C3AED]">◆btn_outline_neutral</span>
              <MangoButton variant="outline-neutral">Cancel</MangoButton>
            </div>
          </div>
        }
        code={`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline-brand">Outline</Button>
<Button variant="outline-neutral">Cancel</Button>

// Maps to btn-primary-* | btn-secondary-* | btn-outline-brand-* | btn-neutral-*`}
      />

      <SectionTitle title={labels.statesTitle} description={labels.statesDesc} />
      <DocShowcase
        idPrefix="button-state"
        tab={stateTab}
        onTabChange={setStateTab}
        design={
          <div className="flex flex-wrap gap-6">
            <div className="space-y-2 text-center">
              <p className="text-[12px] text-[#8B95A1]">Default</p>
              <MangoButton variant="primary">Confirm</MangoButton>
            </div>
            <div className="space-y-2 text-center">
              <p className="text-[12px] text-[#8B95A1]">Hover</p>
              <MangoButton variant="primary" className="bg-[#EA6A10]">Confirm</MangoButton>
            </div>
            <div className="space-y-2 text-center">
              <p className="text-[12px] text-[#8B95A1]">Focus</p>
              <MangoButton variant="primary" className="ring-2 ring-[#F97316] ring-offset-2">Confirm</MangoButton>
            </div>
            <div className="space-y-2 text-center">
              <p className="text-[12px] text-[#8B95A1]">Disabled</p>
              <MangoButton variant="primary" disabled>Confirm</MangoButton>
            </div>
          </div>
        }
        code={`<Button variant="primary">Confirm</Button>
<Button variant="primary" disabled>Confirm</Button>

// State tokens
btn-primary-background
btn-primary-background-hover
btn-primary-focus-ring
btn-primary-background-disabled
`}
      />
    </div>
  );
}

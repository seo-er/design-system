import { useMemo, useState } from "react";
import { useI18n } from "../../i18n";
import { INPUT_SPEC, SELECT_SPEC, MODAL_SPEC } from "../../constants/componentSpecs";
import { PageHeader, SectionTitle, ComponentSpec } from "../../components/docs/DocPrimitives";
import { ComponentArchitecture, DocShowcase } from "../../components/docs/ComponentDoc";

export function InputPage() {
  const { t, page, dict } = useI18n();
  const p = page("input");
  const labels = dict.componentDoc;
  const [tab, setTab] = useState("design");

  const inputSpec = useMemo(
    () => ({
      ...INPUT_SPEC,
      variants: INPUT_SPEC.variants.map((variant) => ({
        ...variant,
        usage: p.variantUsage?.[variant.id] ?? "",
      })),
    }),
    [p.variantUsage]
  );

  const inputClass =
    "w-full max-w-[320px] h-12 px-4 rounded-xl border text-[15px] focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-[#F97316]";

  return (
    <div>
      <PageHeader category={t("categories.components")} title={p.title} badge={p.badge} description={p.description} />
      <ComponentSpec
        items={[
          { label: "Variants", value: "Default · Search · Error" },
          { label: "States", value: "Default · Focus · Disabled · Error" },
          { label: "Token", value: "input-*" },
          { label: "Min height", value: "48px (space-600)" },
        ]}
      />
      <SectionTitle title={labels.architectureTitle} description={labels.architectureDesc} />
      <ComponentArchitecture spec={inputSpec} labels={labels} />

      <SectionTitle title={p.demoTitle} />
      <DocShowcase
        idPrefix="input-default"
        tab={tab}
        onTabChange={setTab}
        design={
          <div className="flex flex-col gap-6 max-w-[360px]">
            <label className="flex flex-col items-start gap-2">
              <span className="text-sm font-medium text-[#4E5968]">Default</span>
              <input className={`${inputClass} border-[#E5E8EB] bg-white`} placeholder="이름을 입력하세요" />
            </label>
            <label className="flex flex-col items-start gap-2">
              <span className="text-sm font-medium text-[#4E5968]">Focus</span>
              <input
                className={`${inputClass} border-[#F97316] ring-2 ring-[#4F46E5] bg-white`}
                defaultValue="포커스 상태"
              />
            </label>
            <label className="flex flex-col items-start gap-2">
              <span className="text-sm font-medium text-[#EF4444]">Error</span>
              <input
                className={`${inputClass} border-[#EF4444] bg-[#FEF2F2]`}
                defaultValue="invalid@"
                aria-invalid="true"
              />
              <span className="text-[13px] text-[#EF4444]">올바른 이메일 형식이 아닙니다.</span>
            </label>
            <label className="flex flex-col items-start gap-2">
              <span className="text-sm font-medium text-[#8B95A1]">Disabled</span>
              <input className={`${inputClass} border-[#E5E8EB] bg-[#F3F5F8] text-[#8B95A1]`} disabled defaultValue="비활성" />
            </label>
          </div>
        }
        code={`<Input label="이름" placeholder="이름을 입력하세요" />
<Input label="이메일" error="올바른 이메일 형식이 아닙니다." />
<Input label="코드" disabled />

// Tokens
input-height-md → space-600
input-border-default → color-border-default
input-border-focus → color-brand-primary`}
      />
    </div>
  );
}

export function SelectPage() {
  const { t, page, dict } = useI18n();
  const p = page("select");
  const labels = dict.componentDoc;
  const [tab, setTab] = useState("design");

  return (
    <div>
      <PageHeader category={t("categories.components")} title={p.title} badge={p.badge} description={p.description} />
      <ComponentSpec
        items={[
          { label: "Variants", value: "Default · Multi" },
          { label: "States", value: "Closed · Open · Focus · Disabled" },
          { label: "Token", value: "select-*" },
          { label: "Menu", value: "Elevation 2" },
        ]}
      />
      <SectionTitle title={labels.architectureTitle} description={labels.architectureDesc} />
      <ComponentArchitecture spec={SELECT_SPEC} labels={labels} />

      <SectionTitle title={p.demoTitle} />
      <DocShowcase
        idPrefix="select-default"
        tab={tab}
        onTabChange={setTab}
        design={
          <div className="max-w-[320px] space-y-4">
            <button
              type="button"
              className="w-full h-12 px-4 rounded-xl border border-[#E5E8EB] bg-white flex items-center justify-between text-[15px] text-[#191F28]"
            >
              강좌 카테고리 선택
              <span aria-hidden="true">▾</span>
            </button>
            <div className="rounded-xl border border-[#E5E8EB] bg-white shadow-lg overflow-hidden">
              <div className="px-4 py-3 bg-[#FFF7ED] text-[#F97316] font-medium text-[14px]">창의 · 교육</div>
              <div className="px-4 py-3 hover:bg-[#FAFBFC] text-[14px]">음악 · 미술</div>
              <div className="px-4 py-3 hover:bg-[#FAFBFC] text-[14px]">신체 · 감각</div>
            </div>
          </div>
        }
        code={`<Select label="강좌 카테고리" options={categories} />
<Select multiple label="태그" />

// Tokens
select-trigger-border → color-border-default
select-trigger-border-active → color-brand-primary
select-menu-shadow → elevation-2`}
      />
    </div>
  );
}

export function ModalPage() {
  const { t, page, dict } = useI18n();
  const p = page("modal");
  const labels = dict.componentDoc;
  const [tab, setTab] = useState("design");

  return (
    <div>
      <PageHeader category={t("categories.components")} title={p.title} badge={p.badge} description={p.description} />
      <ComponentSpec
        items={[
          { label: "Variants", value: "Dialog · Sheet · Alert" },
          { label: "A11y", value: "Focus trap · aria-modal" },
          { label: "Token", value: "modal-*" },
          { label: "Overlay", value: "color-gray-900 @ 40%" },
        ]}
      />
      <SectionTitle title={labels.architectureTitle} description={labels.architectureDesc} />
      <ComponentArchitecture spec={MODAL_SPEC} labels={labels} />

      <SectionTitle title={p.demoTitle} />
      <DocShowcase
        idPrefix="modal-dialog"
        tab={tab}
        onTabChange={setTab}
        design={
          <div className="relative rounded-2xl overflow-hidden min-h-[280px] bg-[#F3F5F8] flex items-center justify-center p-6">
            <div className="absolute inset-0 bg-[#191F28]/40" aria-hidden="true" />
            <div
              role="dialog"
              aria-labelledby="modal-title"
              className="relative z-10 w-full max-w-[360px] rounded-2xl bg-white p-6 shadow-xl"
            >
              <h3 id="modal-title" className="text-[18px] font-bold">
                예약을 취소할까요?
              </h3>
              <p className="text-[14px] text-[#6B7684] mt-2 leading-relaxed">
                취소 시 결제 금액 환불 정책에 따라 처리됩니다.
              </p>
              <div className="flex gap-3 mt-6">
                <button type="button" className="flex-1 h-11 rounded-lg border border-[#E5E5E5] font-medium">
                  닫기
                </button>
                <button type="button" className="flex-1 h-11 rounded-lg bg-[#F97316] text-white font-medium">
                  취소하기
                </button>
              </div>
            </div>
          </div>
        }
        code={`<Modal variant="dialog" title="예약을 취소할까요?" onClose={...}>
  취소 시 결제 금액 환불 정책에 따라 처리됩니다.
</Modal>

// Tokens
modal-overlay → color-overlay-default
modal-radius-lg → space-300
modal-shadow → elevation-3`}
      />
    </div>
  );
}

import { useI18n } from "../../i18n";
import {
  typographyRows,
  spacingRows,
  contrastRows,
  lightPalettes,
  darkPalettes,
  accessibilityGood,
  accessibilityBad,
  colorBlindnessAlternatives,
} from "../../constants/foundation";
import { DecisionPanel } from "../../components/docs/DecisionPanel";
import { PageHeader, SectionTitle, TokenChip } from "../../components/docs/DocPrimitives";
import { TokenTable, ContrastTable } from "../../components/docs/TokenTable";
import { fontWeightFromLabel } from "../../utils/typography";
import {
  PaletteColumn,
  AccessibleColorStrip,
  InaccessiblePairGrid,
  ColorBlindnessAlternatives,
} from "../../components/palette/PaletteComponents";

export function TypographyPage() {
  const { t, page } = useI18n();
  const p = page("typography");

  return (
    <div>
      <PageHeader
        category={t("categories.foundation")}
        title={p.title}
        description={p.description}
      />

      <DecisionPanel decisionId="typography" />

      <TokenTable
        caption="Typography token scale"
        rows={typographyRows}
        columns={[
          {
            id: "token",
            label: "Token",
            render: (row) => <TokenChip token={row.token} />,
          },
          { id: "weight", label: "Font weight" },
          { id: "size", label: "Font size" },
          { id: "lineHeight", label: "Line height" },
          { id: "letterSpacing", label: "Letter spacing" },
          {
            id: "preview",
            label: "Preview",
            render: (row) => (
              <span
                style={{
                  fontSize: row.size,
                  lineHeight: row.lineHeight,
                  letterSpacing: row.letterSpacing,
                  fontWeight: fontWeightFromLabel(row.weight),
                }}
              >
                {p.preview}
              </span>
            ),
          },
        ]}
      />

      <SectionTitle title={t("typography.contrastTitle")} description={t("typography.contrastDesc")} />
      <ContrastTable
        caption="WCAG contrast requirements"
        rows={contrastRows}
        columns={[
          { id: "level", label: t("typography.contrastLevel") },
          { id: "large", label: t("typography.contrastLarge") },
          { id: "normal", label: t("typography.contrastNormal") },
          { id: "note", label: t("typography.contrastNote") },
        ]}
      />
    </div>
  );
}

export function SpacingPage() {
  const { t, page } = useI18n();
  const p = page("spacing");

  return (
    <div>
      <PageHeader
        category={t("categories.foundation")}
        title={p.title}
        description={p.description}
      />

      <DecisionPanel decisionId="spacing" />

      <TokenTable
        caption="Spacing token scale"
        rows={spacingRows}
        columns={[
          {
            id: "token",
            label: "Token",
            render: (row) => <TokenChip token={row.token} />,
          },
          { id: "multiplier", label: "Base unit multiplier" },
          { id: "rem", label: "REM" },
          { id: "px", label: "Pixels" },
          {
            id: "visual",
            label: "Visual representation",
            render: (row) => (
              <div
                className="bg-[#191F28] rounded-full"
                style={{ width: row.px, height: "8px" }}
                role="img"
                aria-label={`${row.px} spacing bar`}
              />
            ),
          },
        ]}
      />
    </div>
  );
}

export function PalettePage() {
  const { t, page } = useI18n();
  const p = page("palette");

  return (
    <div>
      <PageHeader
        category={t("categories.foundation")}
        title={p.title}
        badge={p.badge}
        description={p.description}
      />

      <DecisionPanel decisionId="color" />

      <SectionTitle title={p.lightMode} />
      <div className="grid xl:grid-cols-2 gap-6 mb-12">
        {lightPalettes
          .filter((palette) => palette.name !== "Gray")
          .map((palette) => (
            <PaletteColumn key={palette.name} palette={palette} />
          ))}
      </div>

      <SectionTitle title={p.lightNeutrals} />
      <div className="grid grid-cols-1 mb-20">
        {lightPalettes
          .filter((palette) => palette.name === "Gray")
          .map((palette) => (
            <PaletteColumn key={palette.name} palette={palette} />
          ))}
      </div>

      <SectionTitle title={p.darkMode} />
      <div className="grid xl:grid-cols-2 gap-6 mb-20">
        {darkPalettes.map((palette) => (
          <PaletteColumn key={palette.name} palette={palette} dark />
        ))}
      </div>

    
{/* Old Palette UI */}
<div className="rounded-[28px] border border-[#E5E8EB] bg-white shadow-[var(--shadow-sm)] mb-8">
  <div className="p-8">
    <div className="text-xs font-bold tracking-wider text-[#4F46E5] mb-3">
      ACCESSIBILITY DECISION
    </div>

    <h3 className="text-2xl font-bold mb-4">
      왜 Okabe-Ito Palette를 선택했는가?
    </h3>

    <p className="text-[#6B7684] leading-relaxed mb-6">
      색각 이상 환경에서도 상태와 정보를 명확하게 구분할 수 있도록
      검증된 Okabe-Ito Palette를 채택했습니다.
    </p>

    <div className="grid md:grid-cols-2 gap-4">
      <div className="rounded-xl border border-[#E5E8EB] p-5">
        <h4 className="font-semibold mb-3">
          선정 이유
        </h4>

        <ul className="space-y-2 text-sm text-[#4E5968]">
          <li>✓ 적록색약 환경에서도 구분 가능</li>
          <li>✓ 데이터 시각화 분야에서 검증</li>
          <li>✓ WCAG 접근성 고려</li>
          <li>✓ 브랜드 컬러와 충돌 없음</li>
        </ul>
      </div>

      <div className="rounded-xl border border-[#E5E8EB] p-5">
        <h4 className="font-semibold mb-3">
          적용 효과
        </h4>

        <ul className="space-y-2 text-sm text-[#4E5968]">
          <li>✓ 상태 구분 명확성 향상</li>
          <li>✓ 차트 가독성 개선</li>
          <li>✓ 접근성 기준 충족</li>
          <li>✓ 사용자 인지 부담 감소</li>
        </ul>
      </div>
    </div>
  </div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  {accessibilityGood[0].colors.map((color) => (
    <div
      key={color.label}
      className="bg-white rounded-2xl border border-[#E5E8EB] p-4"
    >
      <div
        className="w-full h-20 rounded-xl mb-3"
        style={{
          backgroundColor: color.hex,
        }}
      />

      <div className="font-medium text-sm">
        {color.label}
      </div>

      <div className="text-xs text-[#8B95A1] mt-1">
        {color.hex}
      </div>
    </div>
  ))}
</div>
      <SectionTitle title={p.accessibleBad} description={t("palette.accessibleBadDesc")} />
      <div className="rounded-[28px] border border-[#FECACA] bg-[#FFFBFB] p-8 lg:p-10 space-y-12">
        {accessibilityBad.map((section) => (
          <InaccessiblePairGrid key={section.id} section={section} />
        ))}
        <ColorBlindnessAlternatives items={colorBlindnessAlternatives} />
      </div>
    </div>
  );
}

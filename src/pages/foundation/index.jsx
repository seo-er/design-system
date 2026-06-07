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

    
      <div className="rounded-[28px] border border-[#E5E8EB] bg-white shadow-[var(--shadow-sm)] mb-8">
  <div className="p-8">
    <div className="text-xs font-bold tracking-wider text-[#4F46E5] mb-3">
      {t("tokens.accessibilityDecision.eyebrow")}
    </div>

    <h3 className="text-2xl font-bold mb-4">
      {t("tokens.accessibilityDecision.title")}
    </h3>

    <p className="text-[#6B7684] leading-relaxed mb-8">
      {t("tokens.accessibilityDecision.description")}
    </p>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="rounded-xl border border-[#E5E8EB] p-6">
        <h4 className="font-semibold text-[#191F28] mb-4">
          {t("tokens.accessibilityDecision.reasonsTitle")}
        </h4>

        <ul className="space-y-3 text-sm text-[#4E5968]">
          <li>✓ {t("tokens.accessibilityDecision.reason1")}</li>
          <li>✓ {t("tokens.accessibilityDecision.reason2")}</li>
          <li>✓ {t("tokens.accessibilityDecision.reason3")}</li>
          <li>✓ {t("tokens.accessibilityDecision.reason4")}</li>
        </ul>
      </div>

      <div className="rounded-xl border border-[#E5E8EB] p-6">
        <h4 className="font-semibold text-[#191F28] mb-4">
          {t("tokens.accessibilityDecision.benefitsTitle")}
        </h4>

        <ul className="space-y-3 text-sm text-[#4E5968]">
          <li>✓ {t("tokens.accessibilityDecision.benefit1")}</li>
          <li>✓ {t("tokens.accessibilityDecision.benefit2")}</li>
          <li>✓ {t("tokens.accessibilityDecision.benefit3")}</li>
          <li>✓ {t("tokens.accessibilityDecision.benefit4")}</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<div className="grid xl:grid-cols-2 gap-6 mb-12">
  {[
    {
      name: "Success",
      token: "color-status-success",
      hex: "#009E73",
    },
    {
      name: "Error",
      token: "color-status-error",
      hex: "#DC2626",
    },
    {
      name: "Info",
      token: "color-status-info",
      hex: "#0072B2",
    },
  ].map((item) => (
    <div
      key={item.name}
      className="bg-white rounded-[24px] border border-[#E5E8EB] overflow-hidden"
    >
      <div className="px-7 py-6 border-b border-[#F2F4F6]">
        <h3 className="text-[18px] font-bold">
          {item.name}
        </h3>
      </div>

      <div className="grid grid-cols-[120px_1fr_140px] items-center">
        <div className="flex justify-center py-8">
          <div
            className="w-14 h-14 rounded-full border border-[#E5E8EB]"
            style={{
              backgroundColor: item.hex,
            }}
          />
        </div>

        <div className="font-semibold text-[#374151]">
          {item.token}
        </div>

        <div className="font-mono text-[#4E5968]">
          {item.hex}
        </div>
      </div>
    </div>
  ))}
</div>
<SectionTitle
  title={p.accessibleBad}
  description={t("palette.accessibleBadDesc")}
/>

<div className="rounded-[28px] border border-[#E5E8EB] bg-white p-8 lg:p-10 space-y-12">
  <InaccessiblePairGrid section={accessibilityBad} />

  <ColorBlindnessAlternatives
    items={colorBlindnessAlternatives}
  />
</div>
    </div>
  );
}

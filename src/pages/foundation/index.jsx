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

      <SectionTitle title={p.accessibleGood} description={t("palette.accessibleGoodDesc")} />
      <div className="rounded-[28px] border border-[#E5E8EB] bg-gradient-to-b from-[#FAFBFC] to-white p-8 lg:p-10 space-y-12 shadow-[var(--shadow-sm)]">
        {accessibilityGood.map((section) => (
          <AccessibleColorStrip key={section.id} section={section} />
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

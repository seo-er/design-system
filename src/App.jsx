import { useState, useMemo, useEffect } from "react";
import { SYSTEM_META, SEMANTIC_COLORS } from "./tokens";
import { useI18n, LanguageSwitcher } from "./i18n";
import { TypographyPage, SpacingPage, PalettePage } from "./pages/foundation";
import { ButtonPage } from "./pages/components/ButtonPage";
import { InputPage, SelectPage, ModalPage } from "./pages/components/FormPages";
import { GovernancePanel } from "./components/docs/GovernancePanel";
import { DecisionPanel } from "./components/docs/DecisionPanel";
import { getIconSrc } from "./utils/icons";
import { hexToRgba } from "./utils/color";
import {
  PageHeader,
  SectionTitle,
  Card,
  TokenChip,
  DocTabs,
  ComponentSpec,
  CheckIcon,
} from "./components/docs/DocPrimitives";
import { AccessibleAccordion } from "./components/a11y/AccessibleAccordion";
import alertImage from "./assets/Alert.png";
import gridImg from "./assets/Grid_img.png";
import gridOverlay from "./assets/Grid.jpg";
import iconGuide from "./assets/icon_grid.png";
import watchGrid from "./assets/watch_grid.png";
import filterIcon from "./assets/icons/ic_filter.png";
import accordionDown from "./assets/icons/ic_accordion_down.png";
import advertisingImg from "./assets/ad/banner_primary.png";


export default function App() {
  const { t, navSections, pageMeta: allPageMeta } = useI18n();
  const [menu, setMenu] = useState("home");
  const [search, setSearch] = useState("");
  const [mobileNav, setMobileNav] = useState(false);

  const filteredSections = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return navSections;

    return navSections
      .map((section) => ({
        ...section,
        items: section.items.filter(
          (item) =>
            item.label.toLowerCase().includes(query) ||
            section.label.toLowerCase().includes(query)
        ),
      }))
      .filter((section) => section.items.length > 0);
  }, [search, navSections]);

  const pageMeta = allPageMeta[menu] || allPageMeta.home;

  const navigate = (id) => {
    setMenu(id);
    setMobileNav(false);
    setSearch("");
  };

  useEffect(() => {
    document.getElementById("main-content")?.scrollTo({ top: 0, left: 0 });
  }, [menu]);
 
  const renderPage = () => {
    switch (menu) {
      case "home":
        return <HomePage onNavigate={navigate} />;
      case "tokens":
        return <TokenPage />;
      case "patterns":
        return <PatternsPage />;
      case "palette":
        return <PalettePage />;
      case "icons":
        return <IconPage />;
      case "illustrations":
        return <IllustrationPage />;
      case "typography":
        return <TypographyPage />;
      case "spacing":
        return <SpacingPage />;
      case "grid":
        return <GridPage />;
      case "button":
        return <ButtonPage />;
      case "input":
        return <InputPage />;
      case "select":
        return <SelectPage />;
      case "modal":
        return <ModalPage />;
      case "checkbox":
        return <CheckboxPage />;
      case "accordion":
        return <AccordionPage />;
      case "badge":
        return <BadgePage />;
      case "filter":
        return <FilterPage />;
      case "tab":
        return <TabPage />;
      case "topappbar":
        return <TopAppBarPage />;
      case "motion":
        return <MotionPage />;
      case "advertising":
        return <AdvertisingPage />;
      default:
        return <HomePage onNavigate={navigate} />;
    }
  };

  const sidebar = (
    <>
      <div className="px-5 pt-6 pb-5 border-b border-[var(--color-border-subtle)]">
        <button
          onClick={() => navigate("home")}
          className="flex items-center gap-3 w-full text-left group"
        >
          
          <div>
            <h1 className="text-[20px] font-bold tracking-tight leading-none">
              {SYSTEM_META.name}
            </h1>
            <p className="text-xs text-[#8B95A1] mt-1">{t("common.designSystem")} v{SYSTEM_META.version}</p>
          </div>
        </button>
      </div>

      <div className="px-5 pt-5">
        <div className="relative">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8B95A1] text-sm">
            ⌕
          </span>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t("common.search")}
            aria-label={t("common.search")}
            className="w-full h-10 pl-9 pr-4 rounded-xl bg-[#F3F5F8] border border-transparent text-sm text-[#191F28] placeholder:text-[#8B95A1] focus:outline-none focus:border-[#C7D2FE] focus:bg-white transition"
          />
        </div>
      </div>

      <nav
  className="
    flex-1
    min-h-0
    overflow-y-auto
    px-3
    py-5
    space-y-5
  " aria-label={t("common.designSystem")}>
        {filteredSections.map((section) => (
          <div key={section.id}>
            <p className="px-3 mb-2 text-[11px] font-semibold uppercase tracking-wider text-[#8B95A1]">
              {section.label}
            </p>
            <div className="space-y-0.5">
              {section.items.map((item) => (
                <MenuItem
                  key={item.id}
                  id={`nav-${item.id}`}
                  active={menu === item.id}
                  onClick={() => navigate(item.id)}
                >
                  {item.label}
                </MenuItem>
              ))}
            </div>
          </div>
        ))}
        {filteredSections.length === 0 && (
          <p className="px-3 text-sm text-[#8B95A1]">{t("common.noResults")}</p>
        )}
      </nav>

      <div className="border-t border-[var(--color-border-subtle)] px-5 py-4">
        <div className="flex items-center justify-between text-xs text-[#8B95A1]">
          <span>{t("common.figmaLibrary")}</span>
          <span className="font-medium text-[#4F46E5]">{t("common.connected")}</span>
        </div>
        <p className="text-[11px] text-[#8B95A1] mt-2">
          © 2026 {SYSTEM_META.name} Design System
        </p>
      </div>
    </>
  );

  return (
    <div className="flex h-screen overflow-hidden bg-[var(--color-surface-subtle)]">

    <aside
      className="
        hidden
        lg:flex
        w-[272px]
        shrink-0
        h-full
        bg-white
        border-r
        border-[var(--color-border-default)]
        flex-col
        overflow-hidden
      "
    >
        {sidebar}
      </aside>

      {mobileNav && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setMobileNav(false)}
          />
          <aside className="relative w-[280px] max-w-[85vw] bg-white flex flex-col shadow-xl">
            {sidebar}
          </aside>
        </div>
      )}

      <div className="flex-1 flex flex-col min-w-0 min-h-0 overflow-hidden">
        <header className="shrink-0 z-10 flex items-center justify-between gap-4 px-5 lg:px-8 h-14 bg-white/80 backdrop-blur-md border-b border-[var(--color-border-subtle)]">
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={() => setMobileNav(true)}
              className="lg:hidden w-9 h-9 rounded-lg border border-[#E5E8EB] flex items-center justify-center text-[#4E5968]"
              aria-label={t("common.openMenu")}
            >
              ☰
            </button>
            <div className="flex items-center gap-2 text-sm min-w-0">
              <span className="text-[#8B95A1] hidden sm:inline">{pageMeta.section}</span>
              <span className="text-[#8B95A1] hidden sm:inline">/</span>
              <span className="font-medium truncate">{pageMeta.label}</span>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <LanguageSwitcher />
            <span className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#EEF2FF] text-[#4F46E5] text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5]" />
              v{SYSTEM_META.version}
            </span>
            <span className="hidden lg:inline text-xs text-[#8B95A1]">
              {t("common.updated")} {SYSTEM_META.lastUpdated}
            </span>
          </div>
        </header>

        <main
          className="flex-1 min-h-0 overflow-y-auto"
          id="main-content"
          tabIndex={-1}
        >
          <div className="max-w-[1120px] mx-auto px-5 py-8 lg:px-10 lg:py-12">
            {renderPage()}
          </div>
        </main>
      </div>
    </div>
  );
}

function MenuItem({ children, active, onClick, id }) {
  return (
    <button
      type="button"
      id={id}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={`w-full flex items-center gap-2 px-3 py-2.5 rounded-xl text-[14px] font-medium transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4F46E5] ${
        active
          ? "bg-[#EEF2FF] text-[#4F46E5] shadow-[inset_3px_0_0_#4F46E5]"
          : "text-[#4B5563] hover:bg-[#F9FAFB]"
      }`}
    >
      {children}
    </button>
  );
}


function HomePage({ onNavigate }) {
  const { dict, principles } = useI18n();
  const home = dict.home;
  const quickLinkColors = {
    tokens: "#4F46E5",
    palette: "#F97316",
    patterns: "#7C3AED",
    button: "#2563EB",
  };

  return (
    <div>
      <section className="relative mb-14 animate-fade-up overflow-hidden rounded-[32px] bg-gradient-to-br from-[#1E1B4B] via-[#312E81] to-[#1E3A5F] p-8 lg:p-12 text-white">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#4F46E5]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#2563EB]/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
        <div className="relative">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            {home.heroBadge} v{SYSTEM_META.version}
          </span>
          <h1 className="text-[32px] lg:text-[48px] font-bold tracking-tight leading-[1.15] max-w-[720px]">
            {home.heroTitle1}
            <br />
            <span className="text-[#A5B4FC]">{home.heroTitle2}</span>
          </h1>
          <p className="text-white/75 text-[16px] lg:text-[17px] leading-[1.8] mt-5 max-w-[600px]">
            {home.heroDesc}
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <button
              onClick={() => onNavigate("tokens")}
              className="h-11 px-6 rounded-xl bg-white text-[#312E81] text-sm font-semibold hover:bg-white/90 transition shadow-lg"
            >
              {home.ctaTokens}
            </button>
            <button
              onClick={() => onNavigate("patterns")}
              className="h-11 px-6 rounded-xl bg-white/10 text-white text-sm font-semibold hover:bg-white/20 transition border border-white/20"
            >
              {home.ctaPatterns}
            </button>
          </div>
        </div>
      </section>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14 animate-fade-up-delay-1">
        {home.stats.map((s) => (
          <div
            key={s.label}
            className="bg-white rounded-[20px] border border-[var(--color-border-default)] p-5 shadow-[var(--shadow-sm)]"
          >
            <p className="text-xs font-medium text-[#8B95A1] uppercase tracking-wide">{s.label}</p>
            <p className="text-[28px] font-bold mt-1">{s.value}</p>
            <p className="text-sm text-[#6B7684] mt-1">{s.desc}</p>
          </div>
        ))}
      </div>

      <SectionTitle title={home.principlesTitle} description={home.principlesDesc} />
      <div className="grid md:grid-cols-2 gap-4 mb-14 animate-fade-up-delay-2">
        {principles.map((p) => (
          <div
            key={p.title}
            className="group bg-white rounded-[24px] border border-[var(--color-border-default)] p-6 hover:shadow-[var(--shadow-md)] transition-shadow duration-300"
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center text-lg mb-4"
              style={{ backgroundColor: `${p.color}15`, color: p.color }}
            >
              {p.icon}
            </div>
            <h3 className="text-[18px] font-bold mb-2">{p.title}</h3>
            <p className="text-[15px] text-[#4E5968] leading-[1.7]">{p.description}</p>
          </div>
        ))}
      </div>

      <SectionTitle title={home.pipelineTitle} description={home.pipelineDesc} />
      <Card className="mb-14">
        <div className="p-6 lg:p-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {home.pipeline.map((step, i) => (
              <div key={step.step} className="relative">
                {i < home.pipeline.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(100%-8px)] w-4 h-0.5 bg-[#E5E8EB]" />
                )}
                <div className="bg-[#F8FAFC] rounded-[20px] p-5 h-full border border-[#F2F4F6]">
                  <span className="text-xs font-bold text-[#4F46E5]">{step.step}</span>
                  <h4 className="text-[16px] font-bold mt-2">{step.title}</h4>
                  <p className="text-sm text-[#6B7684] mt-1">{step.desc}</p>
                  <span className="inline-block mt-3 px-2 py-0.5 rounded-md bg-white text-xs font-medium text-[#8B95A1] border border-[#E5E8EB]">
                    {step.tool}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      <SectionTitle title={home.governanceTitle} description={home.governanceDesc} />
      <button
        type="button"
        onClick={() => onNavigate("tokens")}
        className="w-full text-left mb-14 rounded-[24px] border border-[#C7D2FE] bg-gradient-to-r from-[#EEF2FF] to-white p-6 lg:p-8 hover:shadow-[var(--shadow-md)] transition-shadow"
      >
        <p className="text-[11px] font-bold uppercase tracking-wider text-[#4F46E5]">{home.governanceBadge}</p>
        <h3 className="text-[20px] font-bold mt-2">{home.governanceHeadline}</h3>
        <p className="text-[15px] text-[#4E5968] mt-2 leading-relaxed">{home.governanceSummary}</p>
      </button>

      <SectionTitle title={home.quickLinksTitle} />
      <div className="grid sm:grid-cols-2 gap-4 animate-fade-up-delay-3">
        {home.quickLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => onNavigate(link.id)}
            className="flex items-start gap-4 bg-white rounded-[20px] border border-[var(--color-border-default)] p-5 text-left hover:shadow-[var(--shadow-md)] hover:border-[#C7D2FE] transition-all duration-200"
          >
            <div
              className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center text-white font-bold text-sm"
              style={{ backgroundColor: quickLinkColors[link.id] }}
            >
              {link.label[0]}
            </div>
            <div>
              <p className="font-semibold text-[16px]">{link.label}</p>
              <p className="text-sm text-[#6B7684] mt-0.5">{link.desc}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function PatternsPage() {
  const { t, dict } = useI18n();
  const p = dict.patterns;

  return (
    <div>
      <PageHeader
        category={t("categories.guidelines")}
        title={p.title}
        badge={p.badge}
        description={p.description}
      />

      {p.groups.map((group) => (
        <div key={group.category}>
          <SectionTitle title={group.category} />
          <Card>
            <div className="divide-y divide-[#F2F4F6]">
              {group.rules.map((rule, i) => (
                <div key={i} className="grid md:grid-cols-2 gap-4 p-6">
                  <div className="flex gap-3">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-[#ECFDF5] text-[#10B981] flex items-center justify-center text-xs font-bold">
                      ✓
                    </span>
                    <div>
                      <p className="text-xs font-semibold text-[#10B981] uppercase mb-1">{t("common.do")}</p>
                      <p className="text-[15px] text-[#2F3A47] leading-relaxed">{rule.do}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-[#FEF2F2] text-[#EF4444] flex items-center justify-center text-xs font-bold">
                      ✕
                    </span>
                    <div>
                      <p className="text-xs font-semibold text-[#EF4444] uppercase mb-1">{t("common.dont")}</p>
                      <p className="text-[15px] text-[#2F3A47] leading-relaxed">{rule.dont}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      ))}

      <SectionTitle title={p.compositionTitle} description={p.compositionDesc} />
      <div className="grid md:grid-cols-3 gap-4">
        {p.composition.map((item) => (
          <div
            key={item.title}
            className="bg-gradient-to-br from-[#F8FAFC] to-white rounded-[20px] border border-[#E5E8EB] p-6"
          >
            <h4 className="font-bold text-[16px] mb-2">{item.title}</h4>
            <p className="text-sm text-[#4E5968] leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


function TokenPage() {
  const { t, dict } = useI18n();
  const tok = dict.tokens;
  const tierExamples = [
    { example: "color-primary-500", figma: "Primitives / Color / Primary / 500" },
    { example: "color-text-primary", figma: "Semantic / Text / Primary" },
    { example: "btn-primary-background", figma: "Components / Button / Primary / Background" },
  ];
  
    const borderData = [
      {
        token: "border-width",
        value: "1px",
        i18nKey: "width",
      },
      {
        token: "border-width-selected",
        value: "2px",
        i18nKey: "selected",
      },
      {
        token: "border-width-focused",
        value: "2px",
        i18nKey: "focused",
      },
    ];
    const opacityData = [
      {
        token: "opacity-disabled",
        value: "40%",
        label: "Opacity40",
        opacity: 0.4,
        i18nKey: "disabled",
      },
      {
        token: "opacity-loading",
        value: "20%",
        label: "Opacity20",
        opacity: 0.2,
        i18nKey: "loading",
      },
    ];
    const radiusData = [
      {
        token: "radius-xsmall",
        value: "2px",
        i18nKey: "xsmall",
      },
      {
        token: "radius-small",
        value: "4px",
        i18nKey: "small",
      },
      {
        token: "radius-medium",
        value: "8px",
        i18nKey: "medium",
      },
      {
        token: "radius-large",
        value: "20px",
        i18nKey: "large",
      },
    ];
  
  return (
    <div>
      <PageHeader
        category={t("categories.foundation")}
        title={tok.title}
        badge={tok.badge}
        description={tok.description}
      />

      <GovernancePanel />

      <SectionTitle title={tok.archTitle} description={tok.archDesc} />
      <div className="grid md:grid-cols-3 gap-4 mb-10">
        {tok.tiers.map((tier, i) => (
          <div
            key={tier.tier}
            className="bg-white rounded-[20px] border border-[var(--color-border-default)] p-5 shadow-[var(--shadow-sm)]"
          >
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#4F46E5]">
              {tier.tier}
            </span>
            <h3 className="text-[17px] font-bold mt-1">{tier.label}</h3>
            <p className="text-sm text-[#6B7684] mt-2 leading-relaxed">{tier.description}</p>
            <div className="mt-4 space-y-2">
              <div>
                <p className="text-[11px] text-[#8B95A1] mb-1">{t("common.token")}</p>
                <TokenChip token={tierExamples[i].example} />
              </div>
              <div>
                <p className="text-[11px] text-[#8B95A1] mb-1">{t("common.figmaVariable")}</p>
                <code className="text-[12px] text-[#4E5968]">{tierExamples[i].figma}</code>
              </div>
            </div>
          </div>
        ))}
      </div>

      <SectionTitle title={tok.semanticTitle} description={tok.semanticDesc} />
      <Card className="mb-10">
        <div className="hidden lg:grid grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr] gap-4 px-6 py-4 border-b border-[#F2F4F6] text-xs font-semibold text-[#8B95A1] uppercase tracking-wide">
          <span>{t("common.token")}</span>
          <span>Figma</span>
          <span>CSS Variable</span>
          <span>{t("common.lightDark")}</span>
          <span>{t("common.usage")}</span>
        </div>
        {SEMANTIC_COLORS.map((color, i) => (
          <div
            key={color.token}
            className="grid lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr] gap-4 px-6 py-5 border-b border-[#F2F4F6] last:border-0 items-center hover:bg-[#FAFBFC] transition"
          >
            <TokenChip token={color.token} />
            <code className="text-[12px] text-[#6B7684] font-mono">{color.figma}</code>
            <code className="text-[12px] text-[#4F46E5] font-mono">{color.css}</code>
            <div className="flex gap-2">
              <div
                className="w-10 h-10 rounded-lg border border-[#E5E8EB] shadow-sm"
                style={{ backgroundColor: color.light }}
                title={color.light}
              />
              <div
                className="w-10 h-10 rounded-lg border border-[#374151]"
                style={{ backgroundColor: color.dark }}
                title={color.dark}
              />
            </div>
            <span className="text-sm text-[#4E5968]">{tok.usages[i]}</span>
          </div>
        ))}
      </Card>
    
    
            {/* BORDER */}
            <SectionTitle title="Border" />

{borderData.map((b) => (
  <Card key={b.token}>
    <div className="grid md:grid-cols-2 gap-8 px-8 py-8 items-center border-b border-[#F2F4F6]">
      <div>
        <code className="bg-[#F2F4F6] px-3 py-1.5 rounded-lg text-sm">
          {b.token}
        </code>

        <p className="text-sm text-[#6B7684] mt-4">
          {tok.borderTokens[b.i18nKey].desc}
        </p>

        <p className="text-xs text-[#8B95A1] mt-2">
          {tok.borderTokens[b.i18nKey].version}
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-[120px] h-10 border border-[#E5E8EB] rounded-lg flex items-center px-3">
          <div
            style={{
              width: "100%",
              borderTop: `${b.value} solid black`,
            }}
          />
        </div>

        <span className="text-sm">{b.value}</span>
      </div>
    </div>
  </Card>
))}

{/* MOTION */}
<SectionTitle title="Motion" />

<Card>
  <div className="grid md:grid-cols-2 gap-8 px-8 py-8">
    <div>
      <code className="bg-[#F2F4F6] px-3 py-1.5 rounded-lg text-sm">
      motion-avatar-enter
      </code>

      <p className="text-sm text-[#6B7684] mt-4">
  {tok.motionTokens.avatarEnter.desc}
</p>

<p className="text-xs text-[#8B95A1] mt-2">
  {tok.motionTokens.avatarEnter.version}
</p>
    </div>

    <div className="space-y-2 text-sm text-[#4E5968]">
      <div>ScaleIn80to100</div>
      <div>FadeIn0to100</div>
      <div>150ms</div>
      <div>EasePracticalOut</div>
    </div>
  </div>
</Card>

{/* OPACITY */}
<SectionTitle title="Opacity" />

{opacityData.map((o) => (
  <Card key={o.token}>
    <div className="grid md:grid-cols-3 gap-8 px-8 py-8 items-center">
      <div>
        <code className="bg-[#F2F4F6] px-3 py-1.5 rounded-lg text-sm">
          {o.token}
        </code>

        <p className="text-sm text-[#6B7684] mt-4">
          {tok.opacityTokens?.[o.i18nKey]?.desc}
        </p>

        <p className="text-xs text-[#8B95A1] mt-2">
          {tok.opacityTokens?.[o.i18nKey]?.version}
        </p>
      </div>

      {/* LIGHT */}
      <div
        style={{
          width: "120px",
          height: "64px",
          borderRadius: "8px",
          border: "1px solid #E5E7EB",
          backgroundColor: hexToRgba("#292A2E", o.opacity),
          backgroundImage: `
            linear-gradient(45deg, #eee 25%, transparent 25%),
            linear-gradient(-45deg, #eee 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #eee 75%),
            linear-gradient(-45deg, transparent 75%, #eee 75%)
          `,
          backgroundSize: "12px 12px",
          backgroundPosition: "0 0, 0 6px, 6px -6px, -6px 0px",
          display: "flex",
          alignItems: "flex-end",
          padding: "8px",
          fontSize: "12px",
        }}
      >
        {o.label}
      </div>

      {/* DARK */}
      <div
        style={{
          width: "120px",
          height: "64px",
          borderRadius: "8px",
          border: "1px solid #333",
          backgroundColor: hexToRgba("#111111", o.opacity),
          backgroundImage: `
            linear-gradient(45deg, #444 25%, transparent 25%),
            linear-gradient(-45deg, #444 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #444 75%),
            linear-gradient(-45deg, transparent 75%, #444 75%)
          `,
          backgroundSize: "12px 12px",
          backgroundPosition: "0 0, 0 6px, 6px -6px, -6px 0px",
          display: "flex",
          alignItems: "flex-end",
          padding: "8px",
          fontSize: "12px",
          color: "#fff",
        }}
      >
        {o.label}
      </div>
    </div>
  </Card>
))}

{/* RADIUS */}
<SectionTitle title="Radius" />

{radiusData.map((r) => (
  <Card key={r.token}>
    <div className="grid md:grid-cols-2 gap-8 px-8 py-8 items-center border-b border-[#F2F4F6]">
      <div>
        <code className="bg-[#F2F4F6] px-3 py-1.5 rounded-lg text-sm">
          {r.token}
        </code>

        <p className="text-sm text-[#6B7684] mt-4">
          {tok.radiusTokens?.[r.i18nKey]?.desc}
        </p>

        <p className="text-xs text-[#8B95A1] mt-2">
          {tok.radiusTokens?.[r.i18nKey]?.version}
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div
          className="w-20 h-12 border border-[#E5E8EB]"
          style={{
            borderRadius: r.value,
          }}
        />

        <span className="text-sm">{r.value}</span>
      </div>
    </div>
  </Card>
))}
</div>
);
}


function GridPage() {
  const { t, page } = useI18n();
  const p = page("grid");
  return (
    <div>
      <PageHeader
        category={t("categories.foundation")}
        title={p.title}
        description={p.description}
      />

      <DecisionPanel decisionId="grid" />

      <MobileGridSection />

      <IconGridSection />

      <WatchGridSection />

    </div>
  );
}
function MobileGridSection() {
  const { page } = useI18n();
  const p = page("grid");
  return (
    <div className="mb-24">

      <SectionTitle title={p.mobile} />

      <p className="text-[18px] text-[#4E5968] leading-[1.8] mb-10">
        {p.mobileDesc}
      </p>

      <Card>
  <div className="p-10">

    <div className="grid md:grid-cols-2 gap-12 items-start">

      <div>
        <div className="mb-4">
          <h4 className="text-lg font-semibold">
            Figma Layout Grid
          </h4>

          <p className="text-sm text-[#6B7684]">
            Margin 34px · Gutter 16px · 4 Columns
          </p>
        </div>

        <div className="rounded-xl border border-[#E5E8EB] bg-[#FAFBFC] p-4">
          <img
            src={gridImg}
            alt="Figma Grid Setting"
            className="w-full max-w-[220px] mx-auto"
          />
        </div>
      </div>

      <div>
        <div className="mb-4">
          <h4 className="text-lg font-semibold">
            Mobile Overlay
          </h4>

          <p className="text-sm text-[#6B7684]">
            360px viewport 기준
          </p>
        </div>

        <div className="rounded-xl border border-[#E5E8EB] bg-[#FAFBFC] p-4">
          <img
            src={gridOverlay}
            alt="Mobile Grid Overlay"
            className="w-full max-w-[220px] mx-auto"
          />
        </div>
      </div>

    </div>

  </div>
</Card>

      <div className="grid md:grid-cols-4 gap-6 mt-6">

        <SpecCard
          title="Columns"
          value="4"
        />

        <SpecCard
          title="Margin"
          value="16px"
        />

        <SpecCard
          title="Gutter"
          value="16px"
        />

        <SpecCard
          title="Layout"
          value="Responsive"
        />

      </div>

    </div>
  );
}
function IconGridSection() {
  const { page } = useI18n();
  const p = page("grid");
  return (
    <div className="mb-24">

      <SectionTitle title={p.icon} />

      <p className="text-[18px] text-[#4E5968] leading-[1.8] mb-10">
        모든 아이콘은 동일한 Grid 규칙을 사용하여
        일관된 비율과 시각적 균형을 유지한다.
      </p>

      <Card>
        <div className="p-10">
          <img
            src={iconGuide}
            alt=""
            className="w-full rounded-2xl"
          />
        </div>
      </Card>
    </div>
  );
}
function WatchGridSection() {
  const { page } = useI18n();
  const p = page("grid");
  return (
    <div>

      <SectionTitle title={p.watch} />

      <p className="text-[18px] text-[#4E5968] leading-[1.8] mb-10">
        원형 디스플레이 환경에서는 Safe Area를 기준으로
        컴포넌트를 배치한다.
      </p>

      <Card>
        <div className="p-10 flex justify-center">
          <img
            src={watchGrid}
            alt=""
            className="max-w-[720px] rounded-2xl"
          />
        </div>
      </Card>
<Card>
  <div>
    <table className="w-full">
      <thead>
        <tr className="border-b border-[#E5E8EB] bg-[#F8FAFC]">
          <th className="px-6 py-4 text-left">Type</th>
          <th className="px-6 py-4 text-left">Shape</th>
          <th className="px-6 py-4 text-left">Size</th>
          <th className="px-6 py-4 text-left">Description</th>
        </tr>
      </thead>

      <tbody>
        <tr className="border-b border-[#F2F4F6]">
          <td className="px-6 py-5">Small Round</td>
          <td className="px-6 py-5">Circle</td>
          <td className="px-6 py-5">192dp</td>
          <td className="px-6 py-5">
            Compact watch layout
          </td>
        </tr>

        <tr className="border-b border-[#F2F4F6]">
          <td className="px-6 py-5">Large Round</td>
          <td className="px-6 py-5">Circle</td>
          <td className="px-6 py-5">213dp</td>
          <td className="px-6 py-5">
            Large circular display
          </td>
        </tr>

        <tr className="border-b border-[#F2F4F6]">
          <td className="px-6 py-5">Rectangle</td>
          <td className="px-6 py-5">Rectangle</td>
          <td className="px-6 py-5">180 × 220dp</td>
          <td className="px-6 py-5">
            Rectangular watch layout
          </td>
        </tr>

        <tr>
          <td className="px-6 py-5">Square</td>
          <td className="px-6 py-5">Square</td>
          <td className="px-6 py-5">180dp</td>
          <td className="px-6 py-5">
            Square display layout
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</Card>

    </div>
  );
}
function SpecCard({ title, value }) {
  return (
    <div className="bg-[#F8FAFC] rounded-[24px] p-6">

      <div className="text-sm text-[#8B95A1] mb-2">
        {title}
      </div>

      <div className="text-[28px] font-bold">
        {value}
      </div>

    </div>
  );
}
const iconItems = [
  { label: "홈", slug: "ic_home" },
  { label: "카테고리", slug: "ic_category" },
  { label: "마이페이지", slug: "ic_mypage" },
  { label: "예약", slug: "ic_reservation" },
  { label: "찜", slug: "ic_wishlist" },

  { label: "검색", slug: "ic_search" },
  { label: "알림", slug: "ic_notification" },
  { label: "장바구니", slug: "ic_cart" },
  { label: "필터", slug: "ic_filter" },
  { label: "위치", slug: "ic_location" },

  { label: "추가", slug: "ic_add" },
  { label: "원형 추가", slug: "ic_add_circle" },

  { label: "왼쪽 화살표", slug: "ic_arrow_left" },
  { label: "오른쪽 화살표", slug: "ic_arrow_right" },
  { label: "확인", slug: "ic_check" },
  { label: "아코디언", slug: "ic_accordion_down" },
  { label: "공유", slug: "ic_share" },
];
const illustrationModules = import.meta.glob(
  "./assets/illustrations/*.{png,svg,webp}",
  {
    eager: true,
    import: "default",
  }
);
const illustrationItems = [
  { label: "내아이조회", slug: "my_child" },

  { label: "0~24개월", slug: "age_0_24m" },
  { label: "2~4세", slug: "age_2_4" },
  { label: "5~7세", slug: "age_5_7" },
  { label: "초등", slug: "elementary" },

  { label: "창의", slug: "creative" },
  { label: "교육", slug: "education" },
  { label: "전시", slug: "exhibition" },
  { label: "음악·미술", slug: "music_art" },

  { label: "신체", slug: "physical" },
  { label: "감각", slug: "sensory" },
];

function IllustrationPage() {
  const { t, page } = useI18n();
  const p = page("illustrations");
  const [selectedIllustration, setSelectedIllustration] = useState(illustrationItems[0]);

  return (
    <div>
      <PageHeader
        category={t("categories.foundation")}
        title={p.title}
        badge={p.badge}
        description={p.description}
      />
      <ComponentSpec
        items={[
          { label: "Base Size", value: "24 × 24px" },
          { label: "Naming", value: "ill_{category}" },
          { label: "Sizes", value: "S · M · L" },
          { label: "Format", value: "PNG · SVG" },
        ]}
      />
    <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_340px] gap-8">

      {/* LEFT */}
      <div className="min-w-0">
  {/* ICON GUIDE */}

        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 xl:gap-6">

          {illustrationItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setSelectedIllustration(item)}
              className={`
                rounded-[28px]
                p-4 xl:p-6
                transition
                text-left
                min-w-0
                w-full
                overflow-hidden
                ${
                  selectedIllustration.label === item.label
                    ? "bg-[#F3F4F6]"
                    : "hover:bg-[#F8FAFC]"
                }
              `}
            >

              <div
                className="text-[#5B4CF0] text-[14px] xl:text-[18px] font-medium leading-[1.5] mb-4 xl:mb-6 truncate"
                title={`◆ill_${item.slug}`}
              >
              ◆ill_{item.slug}
              </div>

              <div
  className="
    w-[100px]
    h-[100px]
    rounded-[24px]
    border
    border-[#E5E8EB]
    bg-white
    flex
    items-center
    justify-center
  "
>

<img
    src={getIllustrationSrc(item.slug)}
    alt={item.label}
    className="
      max-w-[80px]
      max-h-[80px]
      object-contain
    "
  />

            </div>

            </button>
          ))}

        </div>

      </div>

     {/* RIGHT PANEL */}
<div className="
  bg-white
  border
  border-[#E5E8EB]
  rounded-[32px]
  overflow-hidden
  h-fit
  shrink-0
  w-full
  xl:w-[340px]
  xl:max-w-[340px]
">

  {/* preview */}
  <div className="
    h-[150px]
    border-b
    border-[#E5E8EB]
    flex
    items-center
    justify-center
    text-[34px]
  ">
    ✦
  </div>

  <div className="p-8">

    {/* title */}
    <div className="mb-8">

      <div className="flex items-center gap-3 mb-4">

        <h2 className="text-[28px] xl:text-[36px] text-[#7C3AED] font-bold tracking-tight leading-tight break-all">
        ◆ill_{selectedIllustration.slug}
        </h2>

      
      </div>
   
    </div>

  </div>

  {/* REACT */}
  <div className="border-t border-[#E5E8EB] p-8">

    <div className="text-[34px] font-bold mb-6">
      React
    </div>

    <div className="
      bg-[#F3F4F6]
      rounded-[16px]
      p-6
      pr-14
      text-[14px]
      xl:text-[17px]
      leading-[1.8]
      font-mono
      text-[#374151]
      relative
      overflow-x-auto
      break-all
      whitespace-pre-wrap
    ">

{`import ${selectedIllustration.label.replace(/\s/g, "")}Icon from
'@atlaskit/icon/core/${selectedIllustration.slug}';`}

      <button
        onClick={() =>
          navigator.clipboard.writeText(
`import ${selectedIllustration.label.replace(/\s/g, "")}Icon from '@atlaskit/icon/core/${selectedIllustration.slug}';`
          )
        }
        className="
          absolute
          top-5
          right-5
          text-[22px]
        "
      >
        ⧉
      </button>

    </div>

    <a
      href="#"
      className="
        inline-flex
        items-center
        gap-2
        text-[#2563EB]
        text-[18px]
        underline
        mt-6
      "
    >
      Icon code examples ↗
    </a>

  </div>

  {/* SIZES */}
  <div className="border-t border-[#E5E8EB] p-8">

    <div className="text-[34px] font-bold mb-8">
      Sizes
    </div>

    <div className="space-y-6">

      {/* SMALL */}
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-5">

         
          <div className="flex items-center gap-3">

            <span className="
              px-3
              py-1
              rounded-[8px]
              bg-[#F3F4F6]
              text-[16px]
            ">
              Small
            </span>

         

          </div>

        </div>

        <button
          onClick={() =>
            navigator.clipboard.writeText(
              `<Icon size="small" />`
            )
          }
          className="text-[22px]"
        >
          ⧉
        </button>

      </div>

      {/* MEDIUM */}
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-5">


          <div className="flex items-center gap-3">

            <span className="
              px-3
              py-1
              rounded-[8px]
              bg-[#F3F4F6]
              text-[16px]
            ">
              Medium
            </span>

          

          </div>

        </div>

        <button
          onClick={() =>
            navigator.clipboard.writeText(
              `<Icon size="medium" />`
            )
          }
          className="text-[22px]"
        >
          ⧉
        </button>

      </div>

    </div>

  </div>
{/* STATUS */}
<div className="border-t border-[#E5E8EB] p-8">

<div className="text-[34px] font-bold mb-8">
Status
</div>

<div className="space-y-6">

  {/* SMALL */}
  <div className="flex items-center justify-between">

    <div className="flex items-center gap-5">

     
      <div className="flex items-center gap-3">

        <span className="
          px-3
          py-1
          rounded-[8px]
          bg-[#F3F4F6]
          text-[16px]
        ">
          true
        </span>

     

      </div>

    </div>

    <button
      onClick={() =>
        navigator.clipboard.writeText(
          `<Icon size="small" />`
        )
      }
      className="text-[22px]"
    >
      ⧉
    </button>

  </div>

  {/* MEDIUM */}
  <div className="flex items-center justify-between">

    <div className="flex items-center gap-5">


      <div className="flex items-center gap-3">

        <span className="
          px-3
          py-1
          rounded-[8px]
          bg-[#F3F4F6]
          text-[16px]
        ">
          false
        </span>

      

      </div>

    </div>

    <button
      onClick={() =>
        navigator.clipboard.writeText(
          `<Icon size="medium" />`
        )
      }
      className="text-[22px]"
    >
      ⧉
    </button>

  </div>

</div>

</div>

</div>
    </div>
    </div>
  );
}
function getIllustrationSrc(slug) {
  return (
    illustrationModules[
      `./assets/illustrations/${slug}.png`
    ] ||
    illustrationModules[
      `./assets/illustrations/${slug}.svg`
    ] ||
    alertImage
  );
}
function IconPage() {
  const { t, page } = useI18n();
  const p = page("icons");
  const [selectedIcon, setSelectedIcon] = useState(iconItems[0]);

  return (
    <div>
      <PageHeader
        category={t("categories.foundation")}
        title={p.title}
        badge={p.badge}
        description={p.description}
      />
      <ComponentSpec
        items={[
          { label: "Base Size", value: "24 × 24px" },
          { label: "Naming", value: "ic_{name}" },
          { label: "Sizes", value: "S · M · L" },
          { label: "Format", value: "PNG · SVG" },
        ]}
      />
    <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_340px] gap-8">

      {/* LEFT */}
      <div className="min-w-0">
  {/* ICON GUIDE */}

        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 xl:gap-6">

          {iconItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setSelectedIcon(item)}
              className={`
                rounded-[28px]
                p-4 xl:p-6
                transition
                text-left
                min-w-0
                w-full
                overflow-hidden
                ${
                  selectedIcon.label === item.label
                    ? "bg-[#F3F4F6]"
                    : "hover:bg-[#F8FAFC]"
                }
              `}
            >

              <div
                className="text-[#5B4CF0] text-[14px] xl:text-[18px] font-medium leading-[1.5] mb-4 xl:mb-6 truncate"
                title={`◆${item.slug}`}
              >
              ◆{item.slug}
              </div>

              <div
              className="
                w-[76px]
                h-[76px]
                rounded-[20px]
                border
                border-[#E5E8EB]
                bg-white
                flex
                items-center
                justify-center
              "
            >

              <img
                src={getIconSrc(item.slug)}
                alt={item.label}
                className="w-[32px] h-[32px] object-contain"
              />

            </div>

            </button>
          ))}

        </div>

      </div>

     {/* RIGHT PANEL */}
<div className="
  bg-white
  border
  border-[#E5E8EB]
  rounded-[32px]
  overflow-hidden
  h-fit
  shrink-0
  w-full
  xl:w-[340px]
  xl:max-w-[340px]
">

  {/* preview */}
  <div className="
    h-[150px]
    border-b
    border-[#E5E8EB]
    flex
    items-center
    justify-center
    text-[34px]
  ">
    ✦
  </div>

  <div className="p-8">

    {/* title */}
    <div className="mb-8">

      <div className="flex items-center gap-3 mb-4">

        <h2 className="text-[28px] xl:text-[36px] text-[#7C3AED] font-bold tracking-tight leading-tight break-all">
        ◆{selectedIcon.slug}
        </h2>

      
      </div>
   
    </div>

  </div>

  {/* REACT */}
  <div className="border-t border-[#E5E8EB] p-8">

    <div className="text-[34px] font-bold mb-6">
      React
    </div>

    <div className="
      bg-[#F3F4F6]
      rounded-[16px]
      p-6
      pr-14
      text-[14px]
      xl:text-[17px]
      leading-[1.8]
      font-mono
      text-[#374151]
      relative
      overflow-x-auto
      break-all
      whitespace-pre-wrap
    ">

{`import ${selectedIcon.label.replace(/\s/g, "")}Icon from
'@atlaskit/icon/core/${selectedIcon.slug}';`}

      <button
        onClick={() =>
          navigator.clipboard.writeText(
`import ${selectedIcon.label.replace(/\s/g, "")}Icon from '@atlaskit/icon/core/${selectedIcon.slug}';`
          )
        }
        className="
          absolute
          top-5
          right-5
          text-[22px]
        "
      >
        ⧉
      </button>

    </div>

    <a
      href="#"
      className="
        inline-flex
        items-center
        gap-2
        text-[#2563EB]
        text-[18px]
        underline
        mt-6
      "
    >
      Icon code examples ↗
    </a>

  </div>

  {/* SIZES */}
  <div className="border-t border-[#E5E8EB] p-8">

    <div className="text-[34px] font-bold mb-8">
      Sizes
    </div>

    <div className="space-y-6">

      {/* SMALL */}
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-5">

         
          <div className="flex items-center gap-3">

            <span className="
              px-3
              py-1
              rounded-[8px]
              bg-[#F3F4F6]
              text-[16px]
            ">
              Small
            </span>

         

          </div>

        </div>

        <button
          onClick={() =>
            navigator.clipboard.writeText(
              `<Icon size="small" />`
            )
          }
          className="text-[22px]"
        >
          ⧉
        </button>

      </div>

      {/* MEDIUM */}
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-5">


          <div className="flex items-center gap-3">

            <span className="
              px-3
              py-1
              rounded-[8px]
              bg-[#F3F4F6]
              text-[16px]
            ">
              Medium
            </span>

          

          </div>

        </div>

        <button
          onClick={() =>
            navigator.clipboard.writeText(
              `<Icon size="medium" />`
            )
          }
          className="text-[22px]"
        >
          ⧉
        </button>

      </div>

    </div>

  </div>
{/* STATUS */}
<div className="border-t border-[#E5E8EB] p-8">

<div className="text-[34px] font-bold mb-8">
Status
</div>

<div className="space-y-6">

  {/* SMALL */}
  <div className="flex items-center justify-between">

    <div className="flex items-center gap-5">

     
      <div className="flex items-center gap-3">

        <span className="
          px-3
          py-1
          rounded-[8px]
          bg-[#F3F4F6]
          text-[16px]
        ">
          true
        </span>

     

      </div>

    </div>

    <button
      onClick={() =>
        navigator.clipboard.writeText(
          `<Icon size="small" />`
        )
      }
      className="text-[22px]"
    >
      ⧉
    </button>

  </div>

  {/* MEDIUM */}
  <div className="flex items-center justify-between">

    <div className="flex items-center gap-5">


      <div className="flex items-center gap-3">

        <span className="
          px-3
          py-1
          rounded-[8px]
          bg-[#F3F4F6]
          text-[16px]
        ">
          false
        </span>

      

      </div>

    </div>

    <button
      onClick={() =>
        navigator.clipboard.writeText(
          `<Icon size="medium" />`
        )
      }
      className="text-[22px]"
    >
      ⧉
    </button>

  </div>

</div>

</div>
 
</div>
    </div>
    </div>
  );
}

function MotionPage() {
  const { t, page } = useI18n();
  const p = page("motion");
  const [dropdownPlay, setDropdownPlay] = useState(false);
  const [modalPlay, setModalPlay] = useState(false);

  const replay = (setter) => {
    setter(false);

    setTimeout(() => {
      setter(true);
    }, 30);
  };

  return (
    <div>

      <PageHeader
        category={t("categories.guidelines")}
        title={p.title}
        badge={p.badge}
        description={p.description}
      />
      <ComponentSpec
        items={[
          { label: "Duration", value: "150 – 300ms" },
          { label: "Easing", value: "ease-out" },
          { label: "Token", value: "motion-*" },
          { label: "Use Case", value: "Enter · Exit · Feedback" },
        ]}
      />

      {/* TOP MOTION */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">

        {/* dropdown */}
        <div>

          <h3 className="text-[28px] font-bold mb-6">
            Dropdown entrance, 150ms
          </h3>

          <div className="relative h-[260px] rounded-[28px] bg-[#F7F8FA] overflow-hidden border border-[#E5E8EB]">

            <div className="absolute inset-0 flex items-center justify-center">

              <button
                className={`
                  h-[56px]
                  px-7
                  rounded-[16px]
                  border
                  border-[#D1D5DB]
                  bg-white
                  text-[22px]
                  flex
                  items-center
                  gap-3
                  shadow-sm
                  transition-all
                  duration-150
                  ${dropdownPlay
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"}
                `}
              >
                <span className="text-[26px]">＋</span>
                Create
              </button>

            </div>

            <button
              onClick={() => replay(setDropdownPlay)}
              className="absolute bottom-5 right-5 w-[42px] h-[42px] rounded-xl border border-[#D1D5DB] bg-white flex items-center justify-center hover:bg-[#F3F4F6] transition"
            >
              ▶
            </button>

          </div>

        </div>

        {/* modal */}
        <div>

          <h3 className="text-[28px] font-bold mb-6">
            Modal entrance, 250ms
          </h3>

          <div className="relative h-[260px] rounded-[28px] bg-[#F7F8FA] overflow-hidden border border-[#E5E8EB]">

            <div className="absolute inset-0 flex items-center justify-center">

              <button
                className={`
                  h-[56px]
                  px-7
                  rounded-[16px]
                  border
                  border-[#D1D5DB]
                  bg-white
                  text-[22px]
                  flex
                  items-center
                  gap-3
                  shadow-sm
                  transition-all
                  duration-300
                  ${modalPlay
                    ? "scale-100 opacity-100"
                    : "scale-75 opacity-0"}
                `}
              >
                🔒 Share
              </button>

            </div>

            <button
              onClick={() => replay(setModalPlay)}
              className="absolute bottom-5 right-5 w-[42px] h-[42px] rounded-xl border border-[#D1D5DB] bg-white flex items-center justify-center hover:bg-[#F3F4F6] transition"
            >
              ▶
            </button>

          </div>

        </div>

      </div>
      <Card>
 {/* ALERT MOTION */}
<Card>
  <div className="p-10">

    {/* title */}
    <div className="mb-8">
      <h2 className="text-[32px] font-bold tracking-tight">
        Alert motion
      </h2>

      <p className="mt-3 text-[18px] leading-[1.8] text-[#4E5968]">
        Overlay dissolve transition used for centered alerts and lightweight modal feedback.
      </p>
    </div>

    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

{/* LEFT : ANIMATION */}
<Card>

  <div className="p-8">

    <h3 className="text-[32px] font-bold mb-4">
      Alert motion
    </h3>

    <p className="text-[18px] text-[#4E5968] leading-[1.8] mb-8">
      Overlay dissolve transition used for centered alerts and lightweight modal feedback.
    </p>

    <div className="
      relative
      h-[420px]
      rounded-[28px]
      bg-[#F8FAFC]
      overflow-hidden
      border
      border-[#E5E8EB]
    ">

      {/* dim */}
      <div
        id="alertDim"
        className="
          absolute
          inset-0
          bg-black/0
          transition-all
          duration-300
        "
      />

      {/* modal */}
      <div
        id="alertModal"
        className="
          absolute
          left-1/2
          top-1/2
          w-[220px]
          h-[280px]
          rounded-[28px]
          bg-white
          border
          border-[#E5E8EB]
          shadow-2xl
          opacity-0
          scale-95
          transition-all
          duration-300
        "
        style={{
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* play */}
      <button
        onClick={() => {

          const dim =
            document.getElementById("alertDim");

          const modal =
            document.getElementById("alertModal");

          if (!dim || !modal) return;

          dim.classList.remove("bg-black/0");
          dim.classList.add("bg-black/25");

          modal.classList.remove("opacity-0");
          modal.classList.remove("scale-95");

          modal.classList.add("opacity-100");
          modal.classList.add("scale-100");

          setTimeout(() => {

            dim.classList.remove("bg-black/25");
            dim.classList.add("bg-black/0");

            modal.classList.remove("opacity-100");
            modal.classList.remove("scale-100");

            modal.classList.add("opacity-0");
            modal.classList.add("scale-95");

          }, 1200);

        }}
        className="
          absolute
          right-6
          bottom-6
          w-[64px]
          h-[64px]
          rounded-[20px]
          bg-white
          border
          border-[#D1D5DB]
          shadow-sm
          text-[24px]
          flex
          items-center
          justify-center
        "
      >
        ▶
      </button>

    </div>

  </div>

</Card>

{/* RIGHT : FIGMA IMAGE */}
<Card>

  <div className="p-8">

    <h3 className="text-[32px] font-bold mb-6">
      Figma interaction
    </h3>

    <div className="
      rounded-[24px]
      overflow-hidden
      border
      border-[#E5E8EB]
      bg-[#F8FAFC]
    ">

<img
  src={alertImage}
  alt="Alert interaction"
  className="w-[227px] rounded-[20px] border border-[#E5E8EB]"
/>

    </div>

  </div>

</Card>

</div>

  </div>
</Card>
</Card>
    
    
    </div>
  );
}
function CheckboxPage() {
  const { t, page } = useI18n();
  const p = page("checkbox");
  const [checkboxTab, setCheckboxTab] = useState("design");

  const [demo, setDemo] = useState({
    default: false,
    checked: true,
    outline: true,
  });

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
          { label: "Touch Target", value: "32 × 32px" },
          { label: "States", value: "4 variants" },
          { label: "Token", value: "checkbox-*" },
          { label: "A11y", value: "role=checkbox" },
        ]}
      />

      <SectionTitle title={p.basic} description={p.basicDesc} />

      <Card>
        <DocTabs value={checkboxTab} onChange={setCheckboxTab} />

        {checkboxTab === "design" ? (
          <div className="p-10 bg-[#FAFBFC]">

            {/* STATES */}
            <div className="mb-16">

              <div className="text-[18px] font-semibold text-[#7C3AED] mb-6">
                ◆checkbox_states
              </div>

              <div className="grid md:grid-cols-2 gap-8">

                {/* Default */}
                <button
                  onClick={() =>
                    setDemo((prev) => ({
                      ...prev,
                      default: !prev.default,
                    }))
                  }
                  className="flex items-center gap-4 w-fit"
                >
                  <div
                    className={`
                      w-8 h-8 rounded-[8px]
                      flex items-center justify-center
                      transition-all
                      ${
                        demo.default
                          ? "bg-[#FF7A00]"
                          : "border border-[#D1D6DB] bg-white"
                      }
                    `}
                  >
                    {demo.default && <CheckIcon />}
                  </div>

                  <span className="text-[18px] text-[#4E5968]">
                    Default
                  </span>
                </button>

                {/* Checked */}
                <button
                  onClick={() =>
                    setDemo((prev) => ({
                      ...prev,
                      checked: !prev.checked,
                    }))
                  }
                  className="flex items-center gap-4 w-fit"
                >
                  <div
                    className={`
                      w-8 h-8 rounded-[8px]
                      flex items-center justify-center
                      transition-all
                      ${
                        demo.checked
                          ? "bg-[#FF7A00]"
                          : "border border-[#D1D6DB] bg-white"
                      }
                    `}
                  >
                    {demo.checked && <CheckIcon />}
                  </div>

                  <span className="text-[18px] text-[#4E5968]">
                    Checked
                  </span>
                </button>

                {/* Disabled */}
                <div className="flex items-center gap-4 opacity-50">
                  <div className="w-8 h-8 rounded-[8px] border border-[#B0B8C1] bg-white" />

                  <span className="text-[18px] text-[#4E5968]">
                    Disabled
                  </span>
                </div>

                {/* Disabled Checked */}
                <div className="flex items-center gap-4 opacity-50">
                  <div className="w-8 h-8 rounded-[8px] bg-[#B0B8C1] flex items-center justify-center">
                    <CheckIcon />
                  </div>

                  <span className="text-[18px] text-[#4E5968]">
                    Disabled Checked
                  </span>
                </div>

              </div>
            </div>

            {/* VARIANTS */}
            <div className="mb-16">

              <div className="text-[18px] font-semibold text-[#7C3AED] mb-6">
                ◆checkbox_variants
              </div>

              <div className="flex flex-wrap gap-16">

                {/* Filled */}
                <button
                  onClick={() =>
                    setDemo((prev) => ({
                      ...prev,
                      checked: !prev.checked,
                    }))
                  }
                  className="flex items-center gap-4"
                >
                  <div
                    className={`
                      w-8 h-8 rounded-[8px]
                      flex items-center justify-center
                      ${
                        demo.checked
                          ? "bg-[#FF7A00]"
                          : "border border-[#D1D6DB]"
                      }
                    `}
                  >
                    {demo.checked && <CheckIcon />}
                  </div>

                  <span className="text-[18px]">
                    Filled
                  </span>
                </button>

                {/* Outline */}
                <button
                  onClick={() =>
                    setDemo((prev) => ({
                      ...prev,
                      outline: !prev.outline,
                    }))
                  }
                  className="flex items-center gap-4"
                >
                  <div
                    className="
                      w-8 h-8
                      rounded-[8px]
                      border-2
                      border-[#AAAAAA]
                      flex
                      items-center
                      justify-center
                    "
                  >
                    {demo.outline && (
                      <CheckIcon color="#D5D5D5" />
                    )}
                  </div>

                  <span className="text-[18px]">
                    text
                  </span>
                </button>

              </div>
            </div>

          

          </div>
        ) : (
          <div className="bg-[#031B34] p-8">
            <pre className="text-[15px] leading-[1.85] text-white whitespace-pre-wrap break-words font-mono">
{`<Checkbox checked>
  강의+준비물
</Checkbox>

<Checkbox variant="outline">
  강의+준비물
</Checkbox>

<Checkbox disabled>
  강의+준비물
</Checkbox>`}
            </pre>
          </div>
        )}
      </Card>
    </div>
  );
}

function AdvertisingPage() {
  const { t, page } = useI18n();
  const p = page("advertising");
  return (
    <div>
      <PageHeader
        category={t("categories.guidelines")}
        title={p.title}
        badge={p.badge}
        description={p.description}
      />
      <ComponentSpec
        items={[
          { label: "Format", value: "PNG · JPG" },
          { label: "Max Size", value: "1MB" },
          { label: "AD Label", value: "필수" },
          { label: "Token", value: "ad-banner-*" },
        ]}
      />

      <SectionTitle title={p.banner} description={p.bannerDesc} />

      <Card>
        <div className="p-10 bg-[#FAFBFC]">
          <div className="text-[18px] font-semibold text-[#7C3AED] mb-5">
            ◆Advertising_primary
          </div>

          <div className="flex justify-center rounded-[20px] border border-[#E5E8EB] bg-white p-10">
            <img
              src={advertisingImg}
              alt="Advertising Banner"
              className="max-w-full object-contain"
            />
          </div>
        </div>
      </Card>

      {/* 광고 가이드 */}
      <SectionTitle title={p.guide} />

      <Card>
        <div className="overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-[#F8FAFC]">
                <th className="w-1/2 border-b border-[#E5E8EB] p-6 text-center text-[18px] font-semibold">
                  항목
                </th>

                <th className="border-b border-[#E5E8EB] p-6 text-center text-[18px] font-semibold">
                  상세 안내
                </th>
              </tr>
            </thead>

            <tbody>
  <tr>
    <td className="border-b border-[#E5E8EB] p-6 text-center">
      ① 배너 규격
    </td>

    <td className="border-b border-[#E5E8EB] p-6">
      • 권장 크기 : 375 × 128px<br />
      • 권장 용량 : 150KB 이하<br />
      • 파일 형식 : PNG, JPG, JPEG
    </td>
  </tr>

  <tr>
    <td className="border-b border-[#E5E8EB] p-6 text-center">
      ② 타이틀
    </td>

    <td className="border-b border-[#E5E8EB] p-6">
      • 최대 1줄 노출 권장<br />
      • 핵심 메시지 우선 배치
    </td>
  </tr>

  <tr>
    <td className="border-b border-[#E5E8EB] p-6 text-center">
      ③ 서브 텍스트
    </td>

    <td className="border-b border-[#E5E8EB] p-6">
      • 보조 설명 및 부가 정보 제공<br />
      • 1줄 노출 권장
    </td>
  </tr>

  <tr>
    <td className="border-b border-[#E5E8EB] p-6 text-center">
      ④ 이미지
    </td>

    <td className="border-b border-[#E5E8EB] p-6">
      • 오브젝트형 또는 썸네일 박스형 사용<br />
      • 이미지 내 임의 텍스트 사용 지양<br />
      • 텍스트 영역과 최소 42px 이상 여백 확보<br />
      • Safe Zone 영역 내 주요 요소 배치
    </td>
  </tr>

  <tr>
    <td className="p-6 text-center">
      제작 가이드
    </td>

    <td className="p-6">
      • 익스팬더블 유형 집행 시 힌트 에셋 영역 고려<br />
      • PSD 템플릿 기준 제작
    </td>
  </tr>
</tbody>
          </table>
        </div>
      </Card>

      {/* 주의사항 */}
      <SectionTitle title={p.caution} />

      <Card>
        <div className="p-10">
          <ul className="space-y-4 text-[16px] text-[#4E5968] leading-[1.8]">
            <li>
              • 광고 이미지에는 광고(AD) 표시가 포함되어야 합니다.
            </li>

            <li>
              • 텍스트가 잘리지 않도록 안전 영역을 확보합니다.
            </li>

            <li>
              • 저해상도 이미지 사용을 지양합니다.
            </li>

            <li>
              • 브랜드 가이드에 맞는 소재를 사용합니다.
            </li>
          </ul>
        </div>
      </Card>
    </div>
  );
}


function AccordionPage() {
  const [tab, setTab] = useState("design");
  const [openIndex, setOpenIndex] = useState(0);

  const items = [
    {
      title: "수강 가능 연령",
      content:
        "0~24개월, 2~4세, 5~7세, 초등 등 연령별 강좌를 제공합니다. 아이의 발달 단계에 맞는 프로그램을 선택할 수 있습니다.",
    },
    {
      title: "강좌 분야",
      content:
        "창의, 교육, 전시, 음악·미술, 신체, 감각 분야의 다양한 프로그램을 운영합니다. 분야별 특성에 맞는 체험과 학습을 제공합니다.",
    },
    {
      title: "수강 신청 방법",
      content:
        "온라인 또는 현장에서 강좌를 신청할 수 있습니다. 예약 변경·취소는 개강 3일 전까지 가능하며, 환불 정책은 센터 안내를 따릅니다.",
    },
  ];
  const [iconAccordionTab, setIconAccordionTab] =
  useState("design");

const [iconOpenIndex, setIconOpenIndex] =
  useState(0);
  const iconItems = [
    {
      icon: getIconSrc("ic_location"),
      title: "수강 가능 지역",
      content:
        "송파구 문화센터를 비롯해 서울·경기·인천 소재 센터에서 강좌를 수강할 수 있습니다. 거주 지역과 가까운 센터를 선택해 신청하세요.",
    },
    {
      icon: getIconSrc("ic_reservation"),
      title: "강좌 예약",
      content:
        "원하는 강좌와 시간을 선택해 예약할 수 있습니다. 정원이 마감된 경우 대기 신청이 가능하며, 예약 완료 시 확인 알림을 받을 수 있습니다.",
    },
    {
      icon: getIconSrc("ic_notification"),
      title: "알림 안내",
      content:
        "개강 일정, 강의실 변경, 휴강 등 주요 공지를 알림으로 받을 수 있습니다. 앱 또는 문자 알림 수신 설정을 확인해 주세요.",
    },
  ];
  const { t, page } = useI18n();
  const pg = page("accordion");
  return (
    <div>
      <PageHeader
        category={t("categories.components")}
        title={pg.title}
        badge={pg.badge}
        description={pg.description}
      />
      <ComponentSpec
        items={[
          { label: "Variants", value: "Text · Icon" },
          { label: "Animation", value: "150ms ease" },
          { label: "Token", value: "accordion-*" },
          { label: "Behavior", value: "Single expand" },
        ]}
      />

      <SectionTitle title={pg.basic} description={pg.basicDesc} />

      <Card>
        <DocTabs value={tab} onChange={setTab} />

        {tab === "design" ? (
          <div className="p-10 bg-[#FAFBFC]">
            <div className="text-[18px] font-semibold text-[#7C3AED] mb-5">
              ◆accordion_default
            </div>
            <AccessibleAccordion
              items={items}
              openIndex={openIndex}
              onToggle={setOpenIndex}
              idPrefix="text"
            />
          </div>
        ) : (
          <div className="bg-[#031B34] p-8">
            <pre className="text-[15px] leading-[1.85] text-white whitespace-pre-wrap break-words font-mono">
{`<AccordionGroup>
  <Accordion title="수강 가능 연령">
    0~24개월, 2~4세, 5~7세, 초등 등 연령별 강좌를 제공합니다.
  </Accordion>

  <Accordion title="강좌 분야">
    창의, 교육, 전시, 음악·미술, 신체, 감각 분야 프로그램을 운영합니다.
  </Accordion>

  <Accordion title="수강 신청 방법">
    온라인 또는 현장에서 신청할 수 있으며, 변경·취소는 개강 3일 전까지 가능합니다.
  </Accordion>
</AccordionGroup>`}
            </pre>
          </div>
        )}
      </Card>


    
      <Card>
      <DocTabs value={iconAccordionTab} onChange={setIconAccordionTab} />
{iconAccordionTab === "design" ? (
  <div className="p-10 bg-[#FAFBFC]">
    <div className="text-[18px] font-semibold text-[#7C3AED] mb-5">
      ◆accordion_with_icon
    </div>
    <AccessibleAccordion
      items={iconItems}
      openIndex={iconOpenIndex}
      onToggle={setIconOpenIndex}
      idPrefix="icon"
    />
  </div>
) : (
  <div className="bg-[#031B34] p-8">
    <pre className="text-[15px] leading-[1.85] text-white whitespace-pre-wrap break-words font-mono">
{`<AccordionWithIcon
  icon="ic_location"
  title="수강 가능 지역"
>
  송파구 문화센터를 비롯해 서울·경기·인천 소재 센터에서
  강좌를 수강할 수 있습니다.
</AccordionWithIcon>

<AccordionWithIcon
  icon="ic_reservation"
  title="강좌 예약"
>
  원하는 강좌와 시간을 선택해 예약할 수 있으며,
  대기 신청도 가능합니다.
</AccordionWithIcon>

<AccordionWithIcon
  icon="ic_notification"
  title="알림 안내"
>
  개강 일정, 강의실 변경, 휴강 등 주요 공지를
  알림으로 받을 수 있습니다.
</AccordionWithIcon>`}
    </pre>
  </div>
)}

</Card>
    </div>
  );
}

function BadgePage() {
  const { t, page } = useI18n();
  const p = page("badge");
  const [tab, setTab] = useState("design");

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
          { label: "Height", value: "22px" },
          { label: "Radius", value: "4px" },
          { label: "Types", value: "Status · Promo" },
          { label: "Token", value: "badge-*" },
        ]}
      />

      <SectionTitle title={p.basic} description={p.basicDesc} />

      <Card>
        <DocTabs value={tab} onChange={setTab} />

        {tab === "design" ? (
          <div className="p-10 bg-[#FAFBFC]">

            {/* Badge Variants */}
            <div className="mb-14">

              <div className="text-[18px] font-semibold text-[#7C3AED] mb-6">
                ◆badge_variants
              </div>

              <div className="flex flex-wrap gap-2">
  {/* 2자리 남음 */}
  <div className="h-[22px] px-[6px] py-[14px]  rounded-[4px] bg-[#FFF8E3] flex items-center">
    <span className="text-[12px] font-medium leading-none text-[#C07D00]">
      2자리 남음
    </span>
  </div>

  {/* 13~19개월 */}
  <div className="h-[22px] px-[6px] py-[14px]  rounded-[4px] bg-[#F4F4F4] flex items-center">
    <span className="text-[12px] font-medium leading-none text-[#666666]">
      13~19개월
    </span>
  </div>

  {/* 접수예정 */}
  <div className="h-[22px] px-[6px] py-[14px]  rounded-[4px] bg-[#222222] flex items-center">
    <span className="text-[12px] font-medium leading-none text-white">
      접수예정
    </span>
  </div>

  {/* 부담이 적어요 */}
  <div className="h-[22px] px-[6px] py-[14px] rounded-[4px] bg-[#FFF7ED] flex items-center">
    <span className="text-[12px] font-medium leading-none text-[#F97316]">
      부담이 적어요
    </span>
  </div>
</div>
            </div>

            {/* Badge Usage */}
            <div>

              <div className="text-[18px] font-semibold text-[#7C3AED] mb-6">
                ◆badge_usage
              </div>

              <div
  className="
    flex
    items-center
    justify-between
    rounded-[16px]
    border-2
    border-[#FF7A00]
    bg-white
    px-8
    py-5
  "
>

  <div className="flex items-center gap-5">

    <div
      className="
        w-10
        h-10
        rounded-[6px]
        bg-[#FF7A00]
        flex
        items-center
        justify-center
        shrink-0
      "
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M20 6L9 17L4 12"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>

    <span
      className="
        text-[18px]
        font-medium
        text-[#9B9B9B]
      "
    >
      강의+준비물
    </span>

  </div>

  <div className="flex items-center gap-8">

    <span
      className="
        text-[18px]
        font-bold
        text-[#191F28]
      "
    >
      15,000원
    </span>

    <div
      className="
        px-3
        py-1
        rounded-[8px]
        bg-[#FFF4EB]
        text-[#FF7A00]
        text-[14px]
        font-semibold
      "
    >
      추천
    </div>

  </div>

</div>
            </div>

            <div className="text-[18px] font-semibold text-[#7C3AED] mt-12 mb-6">
  ◆badge_price_discount
</div>

<div
  className="
    flex
    items-center
    justify-between
    rounded-[20px]
    border
    border-[#E5E8EB]
    bg-white
    px-8
    py-6
  "
>

  <span
    className="
      text-[18px]
      text-[#8B8B8B]
      line-through
    "
  >
    140,000원
  </span>

  <div
    className="
      px-5
      py-3
      rounded-full
      bg-[#BDBDBD]
      text-white
      text-[16px]
      font-medium
    "
  >
    가격 부담
  </div>

  <div className="text-right">

    <div
      className="
        text-[18px]
        font-bold
        text-[#191F28]
        mb-2
      "
    >
      120,000원
    </div>

    <div
      className="
        inline-flex
        px-3
        py-2
        rounded-[8px]
        bg-[#FFF4EB]
        text-[#FF7A00]
        text-[14px]
        font-semibold
      "
    >
      부담이 적어요
    </div>

  </div>

</div>
            
          </div>
        ) : (
          <div className="bg-[#031B34] p-8">
            <pre className="text-[15px] leading-[1.85] text-white whitespace-pre-wrap break-words font-mono">
{`<Badge variant="warning">
  2자리 남음
</Badge>

<Badge variant="neutral">
  13~19개월
</Badge>

<Badge variant="inverse">
  접수예정
</Badge>

<Badge variant="recommend">
  부담이 적어요
</Badge>

<ProductOptionCard
  checked
  title="강의+준비물"
  price="15,000원"
  badge="추천"
/>

<PriceCard
  originalPrice="140,000원"
  price="120,000원"
  badge="부담이 적어요"
/>`}
            </pre>
          </div>
        )}
      </Card>
    </div>
  );
}


function FilterPage() {
  const { t, page } = useI18n();
  const p = page("filter");
  const [tab, setTab] = useState("design");

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
          { label: "Height", value: "40px" },
          { label: "Icon", value: "ic_filter" },
          { label: "States", value: "Default · Active" },
          { label: "Token", value: "filter-*" },
        ]}
      />

      <SectionTitle title={p.basic} description={p.basicDesc} />

      <Card>
        <DocTabs value={tab} onChange={setTab} />
  
      {tab === "design" ? (
  
        <div className="p-10 bg-[#FAFBFC] flex flex-col gap-14">
  
          {/* 기본 */}
          <div>
            <div className="text-[18px] font-semibold text-[#7C3AED] mb-5">
              ◆filter_default
            </div>
  
            <button className="h-[56px] px-8 rounded-full border border-[#E5E8EB] bg-white flex items-center gap-3">
            <img
  src={filterIcon}
  alt=""
  className="
    h-5
    w-auto
    object-contain
    shrink-0
  "
/>
              <span className="text-[18px] text-[#8B95A1]">
                필터
              </span>
            </button>
          </div>
  
          {/* 숫자 없음 */}
          <div>
            <div className="text-[18px] font-semibold text-[#7C3AED] mb-5">
              ◆filter_no_count
            </div>
  
            <button className="h-[56px] px-8 rounded-full border-2 border-[#191F28] bg-white flex items-center gap-3">
              <img src={filterIcon} alt="" className="w-5 h-5" />
              <span className="text-[18px] font-semibold">
                필터
              </span>
            </button>
          </div>
  
          {/* 숫자 있음 */}
          <div>
            <div className="text-[18px] font-semibold text-[#7C3AED] mb-5">
              ◆filter_count
            </div>
  
            <button className="relative h-[56px] px-8 rounded-full border-2 border-[#191F28] bg-white flex items-center gap-3">
  
              <img src={filterIcon} alt="" className="w-5 h-5" />
  
              <span className="text-[18px] font-semibold">
                필터
              </span>
  
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#191F28] text-white text-[14px] font-bold flex items-center justify-center">
                1
              </div>
  
            </button>
          </div>
  
          {/* 활성 */}
          <div>
            <div className="text-[18px] font-semibold text-[#7C3AED] mb-5">
              ◆filter_selected
            </div>
  
            <button className="h-[56px] px-8 rounded-full bg-[#191F28] text-white flex items-center gap-3">
  
              <span className="text-[18px] font-semibold">
                수업 일정
              </span>
  
              <img
                src={accordionDown}
                alt=""
                className="
              w-4
              h-4
              shrink-0
              object-contain
              invert"
              />
  
            </button>
          </div>
  

          {/* 그룹 */}
          <div>
            <div className="text-[18px] font-semibold text-[#7C3AED] mb-5">
              ◆filter_group
            </div>
  
            <div className="flex items-center gap-4 flex-wrap">
  
              <button className="relative h-[56px] px-7 rounded-full border-2 border-[#191F28] bg-white flex items-center gap-3">
  
                <img src={filterIcon} alt="" className="w-5 h-5" />
  
                <span className="text-[18px] font-semibold">
                  필터
                </span>
  
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#191F28] text-white text-[14px] font-bold flex items-center justify-center">
                  1
                </div>
  
              </button>
  
              <div className="w-px h-8 bg-[#E5E8EB]" />
  
              <button className="h-[56px] px-8 rounded-full bg-[#191F28] text-white flex items-center gap-3">
                수업 일정
                <img src={accordionDown} alt="" className=" w-4
              h-4
              shrink-0
              object-contain
              invert" />
              </button>
  
              <button className="h-[56px] px-8 rounded-full border border-[#E5E8EB] bg-white text-[#8B95A1] flex items-center gap-3">
                수업 조건
                <img src={accordionDown} alt="" className=" w-4
              h-4
              shrink-0
              object-contain
              opacity-40" />
              </button>
  
              <button className="h-[56px] px-8 rounded-full border border-[#E5E8EB] bg-white text-[#8B95A1] flex items-center gap-3">
                지점
                <img src={accordionDown} alt="" className=" w-4
              h-4
              shrink-0
              object-contain
              opacity-40" />
              </button>
  
            </div>
          </div>

{/* Filter Sort */}
<div className="mt-14">

  <div className="text-[18px] font-semibold text-[#7C3AED] mb-5">
    ◆filter_sort
  </div>

  <div className="flex items-center gap-4 flex-wrap">

    {/* 추천순 */}
    <button
      className="
        h-[56px]
        px-7
        rounded-full
        flex
        items-center
        gap-3
      "
    >
      <span
        className="
          text-[18px]
          font-medium
          text-[#4E5968]
        "
      >
        추천순
      </span>

      <img
    src={accordionDown}
    alt=""
    className="
      w-4
      h-4
      opacity-60
      object-contain
    "
  />

    </button>

    {/* 최신순 */}
    <button
      className="
        h-[56px]
        px-7
        rounded-full
        border
        border-[#E5E8EB]
        bg-white
        flex
        items-center
        gap-3
      "
    >
      <span
        className="
          text-[18px]
          font-medium
          text-[#4E5968]
        "
      >
        최신순
      </span>

      <img
        src={accordionDown}
        alt=""
        className="
          w-4
          h-4
          shrink-0
          object-contain
          opacity-60
        "
      />
    </button>

    {/* 낮은 가격순 */}
    <button
      className="
        h-[56px]
        px-7
        rounded-full
        bg-[#191F28]
        text-white
        flex
        items-center
        gap-3
      "
    >
      <span
        className="
          text-[18px]
          font-semibold
        "
      >
        낮은 가격순
      </span>

      <img
        src={accordionDown}
        alt=""
        className="
          w-4
          h-4
          shrink-0
          object-contain
          invert
        "
      />
    </button>

  </div>

</div>
        </div>
  
      ) : (
  
        <div className="bg-[#031B34] p-8">
         <pre className="text-[15px] leading-[1.85] text-white whitespace-pre-wrap break-words font-mono">
{`<FilterChip icon="filter">
  필터
</FilterChip>

<FilterChip
  icon="filter"
  count={1}
>
  필터
</FilterChip>

<FilterChip selected>
  수업 일정
</FilterChip>

<FilterChip>
  수업 조건
</FilterChip>

<FilterChip>
  지점
</FilterChip>

<SortChip>
  추천순
</SortChip>

<SortChip selected>
  낮은 가격순
</SortChip>`}
</pre>
        </div>
  
      )}
  
    </Card>
  </div>
  );
}

function TabPage() {
  const [tab, setTab] = useState("design");
  const [defaultView, setDefaultView] = useState("design");
  const [categoryView, setCategoryView] = useState("design");
  const [chipTab, setChipTab] = useState("낯가려요");
  const [activeTab, setActiveTab] = useState("info");
  const [categoryTab, setCategoryTab] = useState("review");
  const [selectedCategory, setSelectedCategory] =
  useState("오감발달");
  const [chipTabView, setChipTabView] = useState("design");
  const categories = [
    "오감발달",
    "창의·체험",
    "음악·미술",
    "신체활동",
    "언어·교육",
  ];

  const homeCategory = [
    "낯가려요",
    "흥이 많아요",
    "엄마가 필요해요",
  ];

  const { t, page } = useI18n();
  const p = page("tab");

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
          { label: "Variants", value: "Default · Category · Chip" },
          { label: "Height", value: "44 – 56px" },
          { label: "Token", value: "tab.*" },
          { label: "Motion", value: "200ms ease" },
        ]}
      />

      <SectionTitle title={p.basic} description={p.basicDesc} />

      <div className="flex flex-col gap-14">

        {/* ==================== */}
        {/* tab-default */}
        {/* ==================== */}
        <div>
          

        <Card>
  <div>

    

    <div className="rounded-[16px] border border-[#E5E8EB] overflow-hidden bg-white">

      <DocTabs value={defaultView} onChange={setDefaultView} />

      {defaultView === "design" ? (
        <div className="p-10 bg-[#FAFBFC]">
<div className="text-[18px] font-semibold text-[#7C3AED] mb-6">
      ◆tab_default
    </div>
          <div className="border-b border-[#E5E8EB]">
            <div className="flex">

              <button
                onClick={() => setActiveTab("info")}
                className="relative flex-1 h-[56px] flex items-center justify-center transition-all duration-200 hover:bg-[#F8F9FA]"
              >
                <span
                  className={`text-[18px] font-semibold transition-colors duration-200 ${
                    activeTab === "info"
                      ? "text-[#191F28]"
                      : "text-[#8B95A1]"
                  }`}
                >
                  정보
                </span>

                {activeTab === "info" && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40px] h-[4px] rounded-full bg-[#F97316] transition-all duration-200" />
                )}
              </button>

              <button
                onClick={() => setActiveTab("teacher")}
                className="relative flex-1 h-[56px] flex items-center justify-center transition-all duration-200 hover:bg-[#F8F9FA]"
              >
                <span
                  className={`text-[18px] font-semibold transition-colors duration-200 ${
                    activeTab === "teacher"
                      ? "text-[#191F28]"
                      : "text-[#8B95A1]"
                  }`}
                >
                  강사
                </span>

                {activeTab === "teacher" && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40px] h-[4px] rounded-full bg-[#F97316] transition-all duration-200" />
                )}
              </button>

              <button
                onClick={() => setActiveTab("review")}
                className="relative flex-1 h-[56px] flex items-center justify-center transition-all duration-200 hover:bg-[#F8F9FA]"
              >
                <span
                  className={`text-[18px] font-semibold transition-colors duration-200 ${
                    activeTab === "review"
                      ? "text-[#191F28]"
                      : "text-[#8B95A1]"
                  }`}
                >
                  후기
                </span>

                {activeTab === "review" && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40px] h-[4px] rounded-full bg-[#F97316] transition-all duration-200" />
                )}
              </button>

            </div>
          </div>

          <div
            key={activeTab}
            className="p-8 text-[#4E5968] transition-all duration-200"
          >
            {activeTab === "info" && "정보 콘텐츠 영역"}
            {activeTab === "teacher" && "강사 콘텐츠 영역"}
            {activeTab === "review" && "후기 콘텐츠 영역"}
          </div>

        </div>
      ) : (
        <div className="bg-[#031B34] p-8">
          <pre className="text-[15px] leading-[1.85] text-white whitespace-pre-wrap break-words font-mono">
{`<Tab>
  <TabItem>정보</TabItem>
  <TabItem>강사</TabItem>
  <TabItem>후기</TabItem>
</Tab>`}
          </pre>
        </div>
      )}

    </div>

  </div>
</Card>
        </div>

        {/* ==================== */}
        {/* tab-category */}
        {/* ==================== */}
        <div>
          

          <Card>
         
            <DocTabs value={categoryView} onChange={setCategoryView} />

            {categoryView === "design" ? (
              <div className="p-10 bg-[#FAFBFC]">
 <div className="text-[18px] font-semibold text-[#7C3AED] mb-5">
 ◆tab_count
          </div>
                <div className="border-b border-[#E5E8EB]">
                  <div className="flex">

                    <button
                      onClick={() => setCategoryTab("move")}
                      className="relative h-[48px] px-4 flex items-center gap-1"
                    >
                      <span className={categoryTab === "move" ? "text-[#191F28]" : "text-[#6B7684]"}>
                        정보
                      </span>

                      <span className="w-[6px] h-[6px] rounded-full bg-[#DC2626]" />

                      {categoryTab === "move" && (
                        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#191F28]" />
                      )}
                    </button>

                    <button
                      onClick={() => setCategoryTab("write")}
                      className="relative h-[48px] px-4 flex items-center gap-1"
                    >
                      <span className={categoryTab === "write" ? "text-[#191F28]" : "text-[#6B7684]"}>
                       강사
                      </span>

                      <span className="font-bold text-[#F97316]">
                        24
                      </span>

                      {categoryTab === "write" && (
                        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#191F28]" />
                      )}
                    </button>

                    <button
                      onClick={() => setCategoryTab("cafe")}
                      className="relative h-[48px] px-4 flex items-center gap-1"
                    >
                      <span className={categoryTab === "cafe" ? "text-[#191F28]" : "text-[#6B7684]"}>
                        후기
                      </span>

                      {categoryTab === "cafe" && (
                        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#191F28]" />
                      )}
                    </button>

                    <button
                      onClick={() => setCategoryTab("stay")}
                      className="relative h-[48px] px-4 flex items-center gap-1"
                    >
                      <span className={categoryTab === "stay" ? "text-[#191F28]" : "text-[#6B7684]"}>
                       공지
                      </span>

                      <span className="font-bold text-[#F97316]">
                        7
                      </span>

                      {categoryTab === "stay" && (
                        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#191F28]" />
                      )}
                    </button>

                  </div>
                </div>

                <div className="p-8 text-[#4E5968]">
                  카테고리 탭 콘텐츠 영역
                </div>

              </div>
            ) : (
              <div className="bg-[#031B34] p-8">
                <pre className="text-[15px] leading-[1.85] text-white whitespace-pre-wrap break-words font-mono">
{`<CategoryTab>
  이동
  쓰기 24
  카페
  숙박 7
</CategoryTab>`}
                </pre>
              </div>
            )}

          </Card>
        </div>
        <SectionTitle title={p.iconTab} />

<Card>
  <DocTabs value={tab} onChange={setTab} />

  {tab === "design" ? (
    <div className="p-10 bg-[#FAFBFC]">
      <div className="text-[18px] font-semibold text-[#7C3AED] mb-6">
      ◆ tab_icon
      </div>

      <div className="flex flex-wrap gap-8">
        {categories.map((item) => {
          const active = selectedCategory === item;

          return (
            <button
              key={item}
              onClick={() => setSelectedCategory(item)}
              className="flex flex-col items-center"
            >
              <div
                className={`
                  w-[96px]
                  h-[96px]
                  rounded-[32px]
                  transition-all
                  duration-200
                  ${
                    active
                      ? "border-[3px] border-[#333333] bg-white"
                      : "border border-[#E5E8EB] bg-[#F4F4F4]"
                  }
                `}
              />

              <span
                className={`
                  mt-4
                  text-[18px]
                  font-semibold
                  ${
                    active
                      ? "text-[#222222]"
                      : "text-[#999999]"
                  }
                `}
              >
                {item}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  ) : (
    <div className="bg-[#031B34] p-8">
      <pre className="text-[15px] leading-[1.85] text-white whitespace-pre-wrap break-words font-mono">
{`<CategoryMenu>
<CategoryItem active>오감발달</CategoryItem>
<CategoryItem>창의·체험</CategoryItem>
<CategoryItem>음악·미술</CategoryItem>
<CategoryItem>신체활동</CategoryItem>
<CategoryItem>언어·교육</CategoryItem>
</CategoryMenu>`}
      </pre>
    </div>
  )}
</Card>

<div className="mt-14">
<SectionTitle title={p.chipTab} />

<Card>
<DocTabs value={chipTabView} onChange={setChipTabView} />

{chipTabView === "design" ? (
<div className="p-10 bg-[#FAFBFC]">
<div className="text-[18px] font-semibold text-[#7C3AED] mb-6">
◆ tab_chip
</div>

<div className="flex items-center gap-[14px]">
{homeCategory.map((item) => (
  <button
    key={item}
    onClick={() => setChipTab(item)}
    className={`
      h-[56px]
      px-[22px]
      rounded-[9999px]
      text-[15px]
      font-semibold
      leading-none
      whitespace-nowrap
      ${
        chipTab === item
          ? "bg-[#222222] text-white"
          : "bg-white border border-[#E3E3E3] text-[#8A8A8A]"
      }
    `}
  >
{item}
</button>
))}
</div>
</div>
) : (
  <div className="bg-[#031B34] p-8">
    <pre className="text-[15px] leading-[1.85] text-white whitespace-pre-wrap break-words font-mono">
{`<ChipTab>
  <ChipTabItem active>낯가려요</ChipTabItem>
  <ChipTabItem>흥이 많아요</ChipTabItem>
  <ChipTabItem>엄마가 필요해요</ChipTabItem>
</ChipTab>`}
    </pre>
  </div>
)}
</Card>
</div>
      </div>
    </div>
  );
}

function TopAppBarPage() {
  const { t, page } = useI18n();
  const p = page("topappbar");
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
          { label: "Height", value: "44px" },
          { label: "Width", value: "375px (Mobile)" },
          { label: "Slots", value: "Left · Title · Right" },
          { label: "Token", value: "topappbar-*" },
        ]}
      />

      <SectionTitle title={p.basic} description={p.basicDesc} />

      <Card>
  <div className="p-10 bg-[#FAFBFC]">
    <div className="text-[18px] font-semibold text-[#7C3AED] mb-5">
      ◆TopAppBar_default
    </div>

    <div className="w-[375px] h-[44px] bg-white relative">
      <div className="h-full px-4 flex items-center">
        {/* Left */}
        <button className="w-6 h-6 shrink-0 flex items-center justify-center">
          <img
            src={getIconSrc("ic_arrow_left")}
            alt=""
            className="w-[18px] h-[18px] object-contain"
          />
        </button>

        {/* Center */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-[16px] font-bold text-[#191F28]">
            0~24개월
          </span>
        </div>

        {/* Right */}
        <button className="ml-auto w-6 h-6 shrink-0 flex items-center justify-center">
          <img
            src={getIconSrc("ic_search")}
            alt=""
            className="w-[18px] h-[18px] object-contain"
          />
        </button>
      </div>
    </div>
  </div>
</Card>
<Card>
  <div className="p-10 bg-[#FAFBFC]">
    <div className="text-[18px] font-semibold text-[#7C3AED] mb-5">
      ◆TopAppBar_back
    </div>

    <div className="w-[375px] h-[44px] bg-white">
      <div className="h-full px-4 flex items-center">
        <button className="w-6 h-6 shrink-0 flex items-center justify-center">
          <img
            src={getIconSrc("ic_arrow_left")}
            alt=""
            className="w-[18px] h-[18px] object-contain"
          />
        </button>
      </div>
    </div>
  </div>
</Card>
<Card>
  <div className="p-10 bg-[#FAFBFC]">
    <div className="text-[18px] font-semibold text-[#7C3AED] mb-5">
      ◆TopAppBar_home
    </div>

    <div className="w-[375px] h-[44px] bg-white">
      <div className="h-full px-4 flex items-center justify-between">
        {/* Location */}
        <button className="flex items-center gap-1">
          <span className="text-[16px] font-bold text-[#191F28]">
            송파구, 문정1동
          </span>

          <img
            src={getIconSrc("ic_accordion_down")}
            alt=""
            className="
              w-[12px]
              h-[12px]
              object-contain
              opacity-60
            "
          />
        </button>

     {/* Actions */}
     <div className="flex items-center gap-[14px]">
  <button className="w-6 h-6 shrink-0 flex items-center justify-center">
    <img
      src={getIconSrc("ic_notification")}
      alt=""
      className="w-[18px] h-[18px] object-contain"
    />
  </button>

  <button className="w-6 h-6 shrink-0 flex items-center justify-center">
    <img
      src={getIconSrc("ic_cart")}
      alt=""
      className="w-[18px] h-[18px] object-contain"
    />
  </button>
</div>
      </div>
    </div>
  </div>
</Card>
<Card>
  <div className="p-10 bg-[#FAFBFC]">
    <div className="text-[18px] font-semibold text-[#7C3AED] mb-5">
      ◆TopAppBar_detail
    </div>

    <div className="w-[375px] h-[44px] bg-white">
      <div className="h-full px-4 flex items-center justify-between">
        {/* Back */}
        <button className="w-6 h-6 shrink-0 flex items-center justify-center">
          <img
            src={getIconSrc("ic_arrow_left")}
            alt=""
            className="w-[18px] h-[18px] object-contain"
          />
        </button>

        {/* Share */}
        <button className="w-6 h-6 shrink-0 flex items-center justify-center">
          <img
            src={getIconSrc("ic_share")}
            alt=""
            className="w-[18px] h-[18px] object-contain"
          />
        </button>
      </div>
    </div>
  </div>
</Card>
    </div>
  );
}
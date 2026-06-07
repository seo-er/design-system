export const SYSTEM_META = {
  name: "Flow",
  version: "2.0.0",
  figmaLibrary: "Flow Design System",
  lastUpdated: "2026.06",
};

export const PRINCIPLES = [
  {
    title: "시스템적 구조 설계",
    description:
      "국내 및 글로벌 서비스의 중심이 되는 디자인 시스템을 구축하고, 각 환경에 최적화된 개별 시스템을 설계합니다.",
    icon: "◈",
    color: "#4F46E5",
  },
  {
    title: "일관된 사용자 경험",
    description:
      "제품 전반의 UI 완성도를 높이고, 모든 터치포인트에서 동일한 경험을 제공하기 위한 디자인 가이드를 수립합니다.",
    icon: "◎",
    color: "#2563EB",
  },
  {
    title: "패턴 표준화",
    description:
      "공통 디자인 규칙 기반의 패턴을 표준화하고, 컴포넌트·레이아웃·인터랙션 가이드라인을 문서화합니다.",
    icon: "◇",
    color: "#7C3AED",
  },
  {
    title: "토큰 기반 코드화",
    description:
      "Figma Variables 기반 디자인 토큰 체계를 수립하고, 개발 코드와 연계하여 구현 정확도와 효율성을 향상합니다.",
    icon: "⬡",
    color: "#F97316",
  },
];

export const TOKEN_TIERS = [
  {
    tier: "Primitive",
    label: "원시 토큰",
    description: "색상, 간격, 타이포그래피 등 변경 불가한 기초 값",
    example: "color-primary-500",
    figma: "Primitives / Color / Primary / 500",
  },
  {
    tier: "Semantic",
    label: "시맨틱 토큰",
    description: "용도와 맥락에 따라 Primitive를 매핑한 의미 기반 토큰",
    example: "color-text-primary",
    figma: "Semantic / Text / Primary",
  },
  {
    tier: "Component",
    label: "컴포넌트 토큰",
    description: "특정 컴포넌트에 적용되는 토큰으로 UI 일관성을 보장",
    example: "button-primary-background",
    figma: "Components / Button / Primary / Background",
  },
];

export const TOKEN_PIPELINE = [
  { step: "01", title: "Figma Variables", desc: "디자인 소스 오브 트루스", tool: "Figma" },
  { step: "02", title: "Design Tokens", desc: "JSON/YAML 토큰 스키마", tool: "Tokens Studio" },
  { step: "03", title: "CSS Variables", desc: "런타임 테마 적용", tool: "Style Dictionary" },
  { step: "04", title: "Components", desc: "React 컴포넌트 구현", tool: "React + Tailwind" },
];

export const SEMANTIC_COLORS = [
  {
    token: "color-text-primary",
    figma: "Semantic/Text/Primary",
    css: "--color-text-primary",
    light: "#252425",
    dark: "#F4F4F4",
    usage: "본문, 제목 등 주요 텍스트",
  },
  {
    token: "color-text-secondary",
    figma: "Semantic/Text/Secondary",
    css: "--color-text-secondary",
    light: "#666666",
    dark: "#AAAAAA",
    usage: "보조 설명, 메타 정보",
  },
  {
    token: "color-text-brand",
    figma: "Semantic/Text/Brand",
    css: "--color-text-brand",
    light: "#F97316",
    dark: "#FB923C",
    usage: "브랜드 강조, 링크, 활성 상태",
  },
  {
    token: "color-surface-default",
    figma: "Semantic/Surface/Default",
    css: "--color-surface-default",
    light: "#FFFFFF",
    dark: "#252425",
    usage: "카드, 패널 배경",
  },
  {
    token: "color-surface-subtle",
    figma: "Semantic/Surface/Subtle",
    css: "--color-surface-subtle",
    light: "#F4F4F4",
    dark: "#222222",
    usage: "페이지 배경, 구분 영역",
  },
  {
    token: "color-border-default",
    figma: "Semantic/Border/Default",
    css: "--color-border-default",
    light: "#E5E5E5",
    dark: "#666666",
    usage: "카드, 입력 필드 테두리",
  },
  {
    token: "color-brand-primary",
    figma: "Semantic/Brand/Primary",
    css: "--color-brand-primary",
    light: "#F97316",
    dark: "#FB923C",
    usage: "CTA, 선택 상태, 포커스",
  },
  {
    token: "color-feedback-success",
    figma: "Semantic/Feedback/Success",
    css: "--color-feedback-success",
    light: "#10B981",
    dark: "#34D399",
    usage: "성공, 완료 상태",
  },
];

export const PATTERNS = [
  {
    category: "레이아웃",
    rules: [
      { do: "8pt 그리드 기반 간격을 사용한다", dont: "임의의 px 값으로 여백을 지정한다" },
      { do: "콘텐츠 최대 너비를 제한해 가독성을 확보한다", dont: "전체 너비에 텍스트를 늘린다" },
      { do: "시각적 계층에 따라 섹션 간격을 차등 적용한다", dont: "모든 섹션에 동일한 margin을 사용한다" },
    ],
  },
  {
    category: "컴포넌트",
    rules: [
      { do: "시맨틱 토큰으로 상태(hover, disabled)를 표현한다", dont: "하드코딩된 hex 값으로 상태를 구분한다" },
      { do: "동일 기능에는 동일 컴포넌트 변형을 사용한다", dont: "화면마다 다른 버튼 스타일을 만든다" },
      { do: "접근성 속성(aria-label, role)을 기본 포함한다", dont: "시각적 요소만 구현하고 스크린리더를 무시한다" },
    ],
  },
  {
    category: "인터랙션",
    rules: [
      { do: "150–300ms easing으로 피드백 모션을 제공한다", dont: "즉각 전환으로 상태 변화를 숨긴다" },
      { do: "터치 영역 최소 44×44px을 보장한다", dont: "작은 아이콘만으로 클릭 영역을 구성한다" },
      { do: "로딩·에러·빈 상태를 함께 설계한다", dont: "정상 상태 UI만 문서화한다" },
    ],
  },
  {
    category: "토큰 운영",
    rules: [
      { do: "Figma Variables 변경 시 토큰 JSON을 동기화한다", dont: "디자인과 코드 토큰을 별도 관리한다" },
      { do: "Primitive → Semantic → Component 3단계를 유지한다", dont: "컴포넌트에서 Primitive를 직접 참조한다" },
      { do: "토큰 네이밍은 kebab-case(-) 규칙으로 일관되게 짓는다", dont: "팀/프로젝트마다 다른 네이밍 규칙을 사용한다" },
    ],
  },
];

export const NAV_SECTIONS = [
  {
    id: "overview",
    label: "Overview",
    items: [{ id: "home", label: "시스템 개요" }],
  },
  {
    id: "foundation",
    label: "Foundation",
    items: [
      { id: "tokens", label: "Design Tokens" },
      { id: "palette", label: "Colors" },
      { id: "typography", label: "Typography" },
      { id: "spacing", label: "Spacing" },
      { id: "grid", label: "Grid" },
      { id: "icons", label: "Icons" },
      { id: "illustrations", label: "Illustrations" },
    ],
  },
  {
    id: "components",
    label: "Components",
    items: [
      { id: "button", label: "Button" },
      { id: "input", label: "Input" },
      { id: "select", label: "Select" },
      { id: "modal", label: "Modal" },
      { id: "checkbox", label: "Checkbox" },
      { id: "accordion", label: "Accordion" },
      { id: "badge", label: "Badge" },
      { id: "filter", label: "Filter" },
      { id: "tab", label: "Tab" },
      { id: "topappbar", label: "TopAppBar" },
    ],
  },
  {
    id: "guidelines",
    label: "Guidelines",
    items: [
      { id: "patterns", label: "Patterns" },
      { id: "motion", label: "Motion" },
      { id: "advertising", label: "Advertising" },
    ],
  },
];

export const PAGE_META = Object.fromEntries(
  NAV_SECTIONS.flatMap((section) =>
    section.items.map((item) => [
      item.id,
      { ...item, section: section.label },
    ])
  )
);

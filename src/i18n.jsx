/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useMemo, useEffect } from "react";

export const LANGUAGES = [
  { id: "ko", flag: "🇰🇷", label: "한국어" },
  { id: "en", flag: "🇺🇸", label: "English" },
  { id: "ja", flag: "🇯🇵", label: "日本語" },
];

const TRANSLATIONS = {
  ko: {
    common: {
      design: "Design",
      code: "Code",
      do: "Do",
      dont: "Don't",
      search: "토큰, 컴포넌트 검색...",
      noResults: "검색 결과가 없습니다.",
      figmaLibrary: "Figma Library",
      connected: "연동됨",
      updated: "Updated",
      openMenu: "메뉴 열기",
      copyToken: "클릭하여 복사",
      designSystem: "Design System",
      token: "Token",
      figmaVariable: "Figma Variable",
      usage: "Usage",
      lightDark: "Light / Dark",
    },
    nav: {
      overview: "Overview",
      foundation: "Foundation",
      components: "Components",
      guidelines: "Guidelines",
      home: "시스템 개요",
      tokens: "Design Tokens",
      palette: "Colors",
      typography: "Typography",
      spacing: "Spacing",
      grid: "Grid",
      icons: "Icons",
      illustrations: "Illustrations",
      button: "Button",
      input: "Input",
      select: "Select",
      modal: "Modal",
      checkbox: "Checkbox",
      accordion: "Accordion",
      badge: "Badge",
      filter: "Filter",
      tab: "Tab",
      topappbar: "TopAppBar",
      patterns: "Patterns",
      motion: "Motion",
      advertising: "Advertising",
    },
    typography: {
      contrastTitle: "텍스트 대비 (WCAG)",
      contrastDesc: "본문·제목 텍스트는 배경과의 명도 대비를 WCAG AA 이상으로 유지합니다.",
      contrastLevel: "Level",
      contrastLarge: "Large text",
      contrastNormal: "Normal text",
      contrastNote: "Note",
    },
    palette: {
      accessibleBadDesc: "유사 명도·유사 색상 조합은 상태 구분, 차트, 알림 UI에서 혼동을 유발합니다.",
      colorUsageTitle: "색상 사용 시 주의사항",
      colorUsageDesc: "색상만으로 정보를 전달하지 않고, 대체 색상·아이콘·텍스트 레이블을 함께 제공합니다.",
    },
    decisions: {
      label: "Design Decision",
      why: "결정 근거",
      strategy: "브랜드·제품 전략",
      alternativesLabel: "검토했으나 채택하지 않은 대안",
      spacing: {
        title: "왜 8pt 스페이싱 시스템인가?",
        context: "망고는 모바일·웹·키오스크 등 이질적 플랫폼에서 동일한 리듬감을 유지해야 합니다.",
        why: "8은 2·4의 배수로 iOS/Android dp, rem 변환 시 분수 오차가 적고 Figma 8px grid와 1:1 대응됩니다.",
        strategy: "문화·교육 서비스는 정보 밀도보다 가독성과 터치 여백을 우선하므로 Base unit 8px을 채택했습니다.",
        alternatives: ["4pt — 촘촘하지만 토큰 수·QA 비용 급증", "10pt — rem 변환 시 1.25rem 비정수 반복"],
        metric: "터치 타겟 주변 최소 space.200(16px) 권장",
      },
      typography: {
        title: "왜 Pretendard + 8단계 Type scale인가?",
        context: "국문·영문·숫자가 혼재하는 정부·민원형 UI와 글로벌 서비스를 동시에 지원합니다.",
        why: "Pretendard는 한글 가독성과 OSS 라이선스, variable font 지원으로 Figma–Code 동기화 비용이 낮습니다.",
        strategy: "Heading/Title/Subtitle/Caption 4계층으로 정보 위계를 제한해 제품팀의 임의 스타일 확장을 방지합니다.",
        alternatives: ["System font stack — 플랫폼별 불일치", "12단계 scale — 선택 피로·유지보수 증가"],
        metric: "본문 font.subtitle.medium(14px) WCAG AA 대비 4.5:1 이상",
      },
      color: {
        title: "왜 Orange를 Primary Brand로 정의했는가?",
        context: "Orange는 학습의 활력과 긍정적인 참여를 상징합니다. 또한 국내 사용자에게 익숙한 지역 기반 서비스의 친근한 인상을 연상시켜, 망고가 추구하는 지역 문화센터 플랫폼의 정체성을 효과적으로 전달할 수 있습니다.",
        why: "Orange(#F97316)는 Red보다 경고 연상이 약하고, Green(성공)과 역할 충돌이 없으며 Yellow보다 WCAG 대비 확보가 쉽습니다.",
        strategy: "Primary CTA·브랜드 강조에 Orange, Secondary 강조·프로모션에 Yellow, Neutral UI에 Gray를 분리해 색 역할을 고정했습니다.",
        alternatives: ["Blue Primary — 정부 서비스와 차별화 부족", "Red Primary — 오류·위험과 혼동"],
        metric: "color-primary-500 on white = 3.1:1 (Large text AA)",
      },
      grid: {
        title: "왜 모바일 4컬럼 그리드인가?",
        context: "주 사용 화면은 375px 모바일이며, 카드·필터·리스트가 2열 배치되는 경우가 많습니다.",
        why: "4컬럼은 2열 카드(각 2 span)와 1열 히어로를 동일 그리드로 표현할 수 있는 최소 짝수 컬럼입니다.",
        strategy: "Margin 16px + Gutter 16px은 space.200과 일치해 스페이싱 토큰과 레이아웃 토큰을 통합 운영합니다.",
        alternatives: ["6컬럼 — 좁은 화면에서 컬럼 폭 40px 미만", "12컬럼 — 모바일에서 과도한 복잡성"],
        metric: "360px viewport → column width ≈ 71px",
      },
    },
    governance: {
      title: "거버넌스 & 버전 관리",
      description: "토큰·컴포넌트 변경 권한, 릴리스 정책, Deprecated 프로세스를 정의합니다. KRDS 운영 모델을 참고했습니다.",
      versionLabel: "현재 버전",
      processLabel: "변경 프로세스",
      rolesDesc: "누가 Primitive/Semantic/Component 레벨을 변경할 수 있는지 명확히 합니다.",
      canLabel: "허용",
      cannotLabel: "불가",
      impactTitle: "토큰 변경 영향 범위",
      impactDesc: "변경 유형별 영향도와 필수 조치입니다.",
      impactChange: "변경 유형",
      impactScope: "영향도",
      impactAffected: "영향 범위",
      impactAction: "필수 조치",
      deprecatedTitle: "Deprecated 정책",
      deprecatedDesc: "Breaking change 없이 마이그레이션할 수 있는 최소 유예 기간을 보장합니다.",
      deprecatedNotice: "Deprecated 표시 후 최소 2 minor 버전(약 6개월) alias를 유지합니다.",
      deprecatedFrom: "Deprecated",
      deprecatedTo: "대체",
      deprecatedSince: "Deprecated since",
      deprecatedRemove: "Removal",
      roles: [
       
        {
          role: "Product Designer",
          can: ["Component 토큰 alias 제안", "패턴/템플릿 기여 PR", "Deprecated 대체안 문서화"],
          cannot: ["Semantic 토큰 직접 삭제", "WCAG AA 미달 변형 배포"],
        },
        {
          role: "Frontend Engineer",
          can: ["토큰 JSON 동기화 PR", "컴포넌트 구현·테스트", "Breaking change 영향 분석"],
          cannot: ["Figma Variables 단독 변경", "하드코딩 hex 신규 도입"],
        },
      ],
      impactRows: [
        { change: "Primitive color step 추가", affected: "해당 팔레트 참조 Semantic", action: "자동 alias, 문서 업데이트" },
        { change: "Semantic token rename", affected: "전 컴포넌트 CSS 변수", action: "Deprecated alias 2 minor + codemod" },
        { change: "Component API prop 변경", affected: "해당 컴포넌트 사용 서비스", action: "마이그레이션 가이드 + shims" },
        { change: "Grid column 변경", affected: "모바일 레이아웃 전체", action: "Major 버전, QA 회귀 테스트" },
      ],
      deprecatedStages: [
        { stage: "Deprecated", desc: "문서·Storybook strikethrough, 대체 토큰/API 명시" },
        { stage: "Legacy alias", desc: "빌드 warning, 런타임 동작 유지" },
        { stage: "Removed", desc: "Major 버전에서 삭제, CHANGELOG Breaking Changes" },
      ],
      deprecatedExamples: [
        { since: "v1.8", remove: "v3.0" },
        { since: "v1.6", remove: "v2.0" },
      ],
    },
    componentDoc: {
      architectureTitle: "컴포넌트 아키텍처",
      architectureDesc: "Variant · State · Token 연결 구조를 정의합니다. Design 탭과 Code 탭은 1:1 대응합니다.",
      anatomy: "Anatomy",
      variants: "Variant 구조",
      states: "State 구조",
      tokens: "Token 연결",
      statesTitle: "Interactive States",
      statesDesc: "default, hover, focus, disabled를 토큰으로 분리해 구현합니다.",
      variantColumns: { id: "Variant", token: "Token prefix", usage: "용도" },
      stateColumns: { id: "State", token: "Token pattern" },
      tokenColumns: { prop: "Property", primitive: "Primitive", semantic: "Semantic" },
    },
    home: {
      heroBadge: "Design System",
      heroTitle1: "국내·글로벌 서비스를 위한",
      heroTitle2: "통합 디자인 시스템",
      heroDesc:
        "제품 전반의 UI 완성도와 일관된 사용자 경험을 위해 설계된 망고 Design System. Figma Variables 기반 토큰 체계와 개발 코드화를 통해 디자인-개발 간 구현 정확도를 높입니다.",
      ctaTokens: "토큰 체계 보기",
      ctaPatterns: "가이드라인 보기",
      stats: [
        { label: "Design Tokens", value: "120+", desc: "Primitive · Semantic · Component" },
        { label: "Components", value: "10+", desc: "Variant · State · Token 문서화" },
        { label: "Figma Variables", value: "연동", desc: "Tokens Studio 파이프라인" },
        { label: "Platforms", value: "2+", desc: "국내 · 글로벌 서비스" },
      ],
      principlesTitle: "핵심 원칙",
      principlesDesc: "시스템 설계, UX 일관성, 패턴 표준화, 토큰 코드화 — 4가지 축으로 운영됩니다.",
      pipelineTitle: "Figma → Code 파이프라인",
      pipelineDesc:
        "Figma Variables를 단일 소스로, 토큰 자동 변환과 컴포넌트 구현까지 일관된 워크플로를 유지합니다.",
      governanceTitle: "거버넌스",
      governanceDesc: "버전 관리, 변경 권한, Deprecated 정책",
      governanceBadge: "Governance",
      governanceHeadline: "버전은 어떻게 관리되나요?",
      governanceSummary:
        "Semantic rename 영향 범위, 2 minor Deprecated 유예 정책을 확인하세요.",
      quickLinksTitle: "빠른 이동",
      quickLinks: [
        { id: "tokens", label: "Design Tokens", desc: "Figma → Code 토큰 체계" },
        { id: "palette", label: "Colors", desc: "라이트/다크 팔레트" },
        { id: "patterns", label: "Patterns", desc: "디자인 규칙 & 가이드" },
        { id: "button", label: "Button", desc: "인터랙션 컴포넌트" },
      ],
      principles: [
        {
          title: "시스템적 구조 설계",
          description:
            "국내 및 글로벌 서비스의 중심이 되는 디자인 시스템을 구축하고, 각 환경에 최적화된 개별 시스템을 설계합니다.",
        },
        {
          title: "일관된 사용자 경험",
          description:
            "제품 전반의 UI 완성도를 높이고, 모든 터치포인트에서 동일한 경험을 제공하기 위한 디자인 가이드를 수립합니다.",
        },
        {
          title: "패턴 표준화",
          description:
            "공통 디자인 규칙 기반의 패턴을 표준화하고, 컴포넌트·레이아웃·인터랙션 가이드라인을 문서화합니다.",
        },
        {
          title: "토큰 기반 코드화",
          description:
            "Figma Variables 기반 디자인 토큰 체계를 수립하고, 개발 코드와 연계하여 구현 정확도와 효율성을 향상합니다.",
        },
      ],
      pipeline: [
        { step: "01", title: "Figma Variables", desc: "디자인 소스 오브 트루스", tool: "Figma" },
        { step: "02", title: "Design Tokens", desc: "JSON/YAML 토큰 스키마", tool: "Tokens Studio" },
        { step: "03", title: "CSS Variables", desc: "런타임 테마 적용", tool: "Style Dictionary" },
        { step: "04", title: "Components", desc: "React 컴포넌트 구현", tool: "React + Tailwind" },
      ],
    },
    patterns: {
      title: "Patterns & Guidelines",
      badge: "표준화",
      description:
        "공통 디자인 규칙 기반의 패턴을 표준화하고, Do/Don't 가이드라인을 통해 제품 전반의 UI 일관성을 유지합니다.",
      compositionTitle: "컴포넌트 합성 원칙",
      compositionDesc: "개별 컴포넌트를 조합할 때 따라야 할 구조적 규칙입니다.",
      composition: [
        { title: "단일 책임", desc: "하나의 컴포넌트는 하나의 UI 역할만 담당합니다. 복합 UI는 조합으로 구성합니다." },
        { title: "토큰 우선", desc: "색상·간격·타이포는 반드시 시맨틱 토큰을 참조하며, 하드코딩을 지양합니다." },
        { title: "상태 완결성", desc: "default, hover, focus, disabled, loading 상태를 함께 설계하고 문서화합니다." },
      ],
      groups: [
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
            {
              do: "Primitive → Semantic → Component 3단계를 유지한다",
              dont: "컴포넌트에서 Primitive를 직접 참조한다"
            },
            {
              do: "토큰 네이밍은 kebab-case(-) 규칙으로 일관되게 짓는다",
              dont: "팀/프로젝트마다 다른 네이밍 규칙을 사용한다"
            } ],
        },
      ],
    },
    tokens: {
      accessibilityDecision: {
        eyebrow: "ACCESSIBILITY DECISION",
      
        title: "왜 Okabe-Ito Palette를 선택했는가?",
      
        description:
          "색각 이상 환경에서도 상태와 정보를 명확하게 구분할 수 있도록 Okabe-Ito Palette를 참고하여 상태 색상을 정의했습니다. 브랜드 컬러와 분리하여 성공, 오류, 정보 상태를 명확하게 전달합니다.",
      
        reasonsTitle: "선정 이유",
      
        reason1: "적록색약 환경에서도 구분 가능",
        reason2: "데이터 시각화 분야에서 검증",
        reason3: "WCAG 접근성 고려",
        reason4: "브랜드 컬러와 충돌 없음",
      
        benefitsTitle: "적용 효과",
      
        benefit1: "상태 구분 명확성 향상",
        benefit2: "차트 가독성 개선",
        benefit3: "접근성 기준 충족",
        benefit4: "사용자 인지 부담 감소",
      },
      common: {
        original: "기존 색상",
        accessible: "권장 색상",
      },
      accessibility: {
        redTitle: "Red → Vermilion",
        greenTitle: "Green → Bluish Green",
      
        redGuidance:
          "빨간색은 초록색 또는 갈색과 혼동될 수 있으므로 주황 계열로 조정합니다.",
      
        greenGuidance:
          "초록색은 빨간색 또는 갈색과 혼동될 수 있으므로 청록 계열로 조정합니다.",
        normalVisionTitle: "일반 사용자 (Normal Vision)",
        normalVisionDesc: "일반 사용자가 인지하는 색상 조합입니다.",
        colorBlindTitle: "적록색약자 (Deuteranopia)",
        colorBlindDesc: "적록색약 환경에서 인지되는 색상입니다.",
        paletteDecisionTitle: "왜 Okabe-Ito Palette를 선택했는가?",
        paletteDecisionDesc: "색각 이상 환경에서도 상태와 정보를 명확하게 구분할 수 있도록 Okabe-Ito Palette를 참고하여 상태 색상을 정의했습니다. 브랜드 컬러와 분리하여 성공, 오류, 정보 상태를 명확하게 전달합니다.",
        reasons: "선정 이유",
        benefits: "적용 효과",
        redToVermilion: "Red → Vermilion",
        greenToBluishGreen: "Green → Bluish Green",
      },
      motionTitle: "모션",
opacityTitle: "투명도",

motionTokens: {
  avatarEnter: {
    desc: "아바타 그룹 진입 애니메이션에 사용",
    version: "v2.0.0 도입",
  },
},

opacityTokens: {
  disabled: {
    desc: "비활성 상태의 이미지에 적용",
    version: "v3.4.0 도입",
  },

  loading: {
    desc: "로딩 스피너 아래에 표시되는 콘텐츠에 적용",
    version: "v0.10.13 도입",
  },
},
      radiusTokens: {
        xsmall: {
          desc: "작은 디테일 요소에 사용하는 반경",
          version: "v1.0.0 도입",
        },
        small: {
          desc: "일반적인 입력 필드와 카드에 사용하는 반경",
          version: "v1.0.0 도입",
        },
        medium: {
          desc: "강조된 카드와 패널에 사용하는 반경",
          version: "v1.0.0 도입",
        },
        large: {
          desc: "모달 및 주요 컨테이너에 사용하는 반경",
          version: "v1.0.0 도입",
        },
      },
      title: "Design Tokens",
      badge: "Figma Variables",
      description:
        "Figma Variables 기반 3단계 토큰 체계(Primitive → Semantic → Component)로 디자인과 개발의 단일 소스 오브 트루스를 유지합니다.",
      archTitle: "토큰 아키텍처",
      archDesc: "변경 빈도와 추상화 수준에 따라 3계층으로 분리하여 유지보수성과 확장성을 확보합니다.",
      semanticTitle: "시맨틱 컬러 토큰",
      semanticDesc: "Figma Variables와 CSS Custom Properties가 1:1 매핑됩니다. 클릭하여 토큰명을 복사할 수 있습니다.",
      colorTitle: "Color",
      colorDesc: "시맨틱 토큰이 참조하는 Primitive 컬러 값입니다.",
      tiers: [
        { tier: "Primitive", label: "원시 토큰", description: "색상, 간격, 타이포그래피 등 변경 불가한 기초 값" },
        { tier: "Semantic", label: "시맨틱 토큰", description: "용도와 맥락에 따라 Primitive를 매핑한 의미 기반 토큰" },
        { tier: "Component", label: "컴포넌트 토큰", description: "특정 컴포넌트에 적용되는 토큰으로 UI 일관성을 보장" },
      ],
      usages: [
        "본문, 제목 등 주요 텍스트",
        "보조 설명, 메타 정보",
        "브랜드 강조, 링크, 활성 상태",
        "카드, 패널 배경",
        "페이지 배경, 구분 영역",
        "카드, 입력 필드 테두리",
        "CTA, 선택 상태, 포커스",
        "성공, 완료 상태",
      ],
      borderTokens: { width: { desc: "기본 컴포넌트와 구분선에 사용되는 기본 두께", version: "v1.5.2 도입", }, selected: { desc: "선택된 탭이나 항목을 표시할 때 사용하는 두께", version: "v6.1.0 도입", }, focused: { desc: "포커스 링에 사용되는 두께", version: "v6.1.0 도입", }, },
    },
    pages: {
      palette: {
        title: "Color Palette",
        badge: "Light / Dark",
        description:
          "Primitive 컬러 팔레트를 정의하고, 라이트/다크 모드 및 색각 다양성을 고려한 접근성 가이드를 제공합니다.",
        lightMode: "Light Mode",
        darkMode: "Dark Mode",
        lightNeutrals: "Light mode neutrals",
        accessibleGood: "색각이상자가 명확히 구분할 수 있는 색상",
        accessibleBad: "색각이상자가 구분하기 어려운 조합",
      },
      typography: {
        title: "Typography",
        description:
          "font.* 토큰 체계로 제목, 본문, 캡션의 위계를 정의합니다. Figma Text Styles와 1:1 대응되며, 클릭하여 토큰명을 복사할 수 있습니다.",
        preview: "망설임 없이 고르고 배우는 문화센터 서비스",
      },
      spacing: { title: "Spacing", description: "8pt 기반 space.* 토큰으로 레이아웃, 컴포넌트 내부 간격을 일관되게 정의합니다." },
      grid: {
        title: "Grid",
        description:
          "Grid는 화면과 콘텐츠의 정렬 기준을 정의합니다. 일관된 레이아웃과 시각적 균형을 위해 동일한 구조와 규칙을 사용합니다.",
        mobile: "Mobile Grid",
        mobileDesc: "모바일 화면은 4 Column Grid를 사용합니다. 모든 콘텐츠는 Margin과 Gutter 기준으로 정렬합니다.",
        icon: "Icon Grid",
        watch: "Watch Grid",
      },
      icons: {
        title: "Icons",
        badge: "24×24 Grid",
        description:
          "24px 기준 아이콘 시스템입니다. ic_{name} 네이밍 규칙을 따르며, Small/Medium/Large 3단계 크기 토큰을 지원합니다.",
      },
      illustrations: {
        title: "Illustrations",
        badge: "Asset Library",
        description:
          "서비스 맥락별 일러스트레이션 에셋을 정의합니다. Figma 컴포넌트와 React import 경로가 1:1 매핑됩니다.",
      },
      button: {
        title: "Button",
        badge: "Action",
        description:
          "Variant(Primary/Secondary/Outline) · State · Token 연결 구조로 정의된 액션 컴포넌트입니다.",
        size: "크기 조정하기",
        sizeDesc: "size 속성으로 SM, MD, LG, XL을 지정합니다.",
        hierarchy: "Variant · Hierarchy",
        accessibility: "접근성",
        variantUsage: {
          primary: "주요 CTA, 페이지 핵심 액션",
          secondary: "보조 액션, Primary와 쌍으로 사용",
          "outline-brand": "브랜드 강조가 필요한 중립 배경 위",
          "outline-neutral": "취소, 닫기 등 저강조 액션",
        },
      },
      input: {
        title: "Input",
        badge: "Form",
        description: "텍스트 입력 필드. default/search/error variant와 focus/disabled/error state를 토큰으로 연결합니다.",
        demoTitle: "상태별 Preview",
        variantUsage: {
          default: "일반 텍스트 입력",
          search: "검색 필드, 아이콘 슬롯 포함",
          error: "유효성 검증 실패",
        },
      },
      select: {
        title: "Select",
        badge: "Form",
        description: "단일·다중 선택 드롭다운. trigger/menu/option 토큰 계층으로 상태를 표현합니다.",
        demoTitle: "드롭다운 Preview",
        variantUsage: {
          default: "단일 선택 드롭다운",
          multi: "태그형 다중 선택",
        },
      },
      modal: {
        title: "Modal",
        badge: "Overlay",
        description: "Dialog/Sheet/Alert variant. overlay, focus trap, aria-modal을 포함한 오버레이 패턴입니다.",
        demoTitle: "Dialog Preview",
        variantUsage: {
          dialog: "확인/취소 등 단기 결정",
          sheet: "모바일 하단 시트",
          alert: "시스템 알림, 단일 버튼",
        },
      },
      checkbox: {
        title: "Checkbox",
        badge: "Selection",
        description:
          "여러 항목을 동시에 선택할 수 있는 체크박스 컴포넌트입니다. default, checked, outline, disabled 상태를 토큰 기반으로 정의합니다.",
        basic: "기본 체크박스",
        basicDesc: "단일 선택 및 다중 선택 시나리오에 사용합니다.",
      },
      accordion: {
        title: "Accordion",
        badge: "Expandable",
        description:
          "콘텐츠를 펼치고 접을 수 있는 아코디언 컴포넌트입니다. 텍스트 전용·아이콘 포함 2가지 변형을 지원합니다.",
        basic: "기본 아코디언",
        basicDesc: "FAQ, 상세 정보 등 접이식 콘텐츠에 사용합니다.",
      },
      badge: {
        title: "Badge",
        badge: "Status",
        description: "상태, 카테고리, 프로모션 정보를 강조하는 배지 컴포넌트입니다. 색상 토큰으로 의미를 구분합니다.",
        basic: "배지",
        basicDesc: "리스트, 카드, 상세 페이지에서 보조 정보를 표시합니다.",
      },
      filter: {
        title: "Filter",
        badge: "Discovery",
        description: "검색 및 목록 필터링에 사용하는 필터 컴포넌트입니다. 선택 상태와 카운트 배지를 함께 제공합니다.",
        basic: "필터",
        basicDesc: "목록 상단에서 조건을 선택·해제합니다.",
      },
      tab: {
        title: "Tab",
        badge: "Navigation",
        description:
          "콘텐츠 전환에 사용하는 탭 컴포넌트입니다. Default, Category, Chip 3가지 변형으로 정보 계층에 맞게 선택합니다.",
        basic: "탭",
        basicDesc: "동일 뷰 내 콘텐츠 섹션을 전환합니다.",
        iconTab: "Icon Tab",
        chipTab: "Chip Tab",
      },
      topappbar: {
        title: "TopAppBar",
        badge: "Navigation",
        description:
          "화면 상단 내비게이션 바입니다. 뒤로가기, 타이틀, 액션 버튼 영역을 표준 레이아웃으로 정의합니다.",
        basic: "기본 TopAppBar",
        basicDesc: "모바일 화면 최상단에 고정됩니다.",
      },
      motion: {
        title: "Motion",
        badge: "Interaction",
        description:
          "모션은 계층, 연속성, 피드백을 전달합니다. 150–300ms easing으로 사용성을 높이는 인터랙션을 설계합니다.",
      },
      advertising: {
        title: "Advertising",
        badge: "Monetization",
        description:
          "서비스 내 광고 배너 컴포넌트 및 광고 소재 가이드를 정의합니다. AD 표기, CTA, 안전 영역 규칙을 포함합니다.",
        banner: "광고 배너",
        bannerDesc: "Primary 배너 변형의 레이아웃과 소재 규격을 정의합니다.",
        guide: "광고 가이드",
        caution: "주의사항",
      },
    },
    categories: {
      overview: "Overview",
      foundation: "Foundation",
      components: "Components",
      guidelines: "Guidelines",
    },
  },
  en: {
    common: {
      design: "Design",
      code: "Code",
      do: "Do",
      dont: "Don't",
      search: "Search tokens, components...",
      noResults: "No results found.",
      figmaLibrary: "Figma Library",
      connected: "Connected",
      updated: "Updated",
      openMenu: "Open menu",
      copyToken: "Click to copy",
      designSystem: "Design System",
      token: "Token",
      figmaVariable: "Figma Variable",
      usage: "Usage",
      lightDark: "Light / Dark",
    },
    nav: {
      overview: "Overview",
      foundation: "Foundation",
      components: "Components",
      guidelines: "Guidelines",
      home: "System Overview",
      tokens: "Design Tokens",
      palette: "Colors",
      typography: "Typography",
      spacing: "Spacing",
      grid: "Grid",
      icons: "Icons",
      illustrations: "Illustrations",
      button: "Button",
      input: "Input",
      select: "Select",
      modal: "Modal",
      checkbox: "Checkbox",
      accordion: "Accordion",
      badge: "Badge",
      filter: "Filter",
      tab: "Tab",
      topappbar: "TopAppBar",
      patterns: "Patterns",
      motion: "Motion",
      advertising: "Advertising",
    },
    typography: {
      contrastTitle: "Text contrast (WCAG)",
      contrastDesc: "Body and heading text must meet WCAG AA contrast against backgrounds.",
      contrastLevel: "Level",
      contrastLarge: "Large text",
      contrastNormal: "Normal text",
      contrastNote: "Note",
    },
    palette: {
      accessibleGoodDesc:
        "Based on the Okabe–Ito palette. Distinguishable by luminance and hue even with red-green color blindness.",
      accessibleBadDesc: "Similar luminance and hue pairs cause confusion in status, charts, and alerts.",
      colorUsageTitle: "Color usage guidelines",
      colorUsageDesc: "Never rely on color alone—pair with icons, labels, and accessible alternatives.",
    },
    decisions: {
      label: "Design Decision",
      why: "Rationale",
      strategy: "Brand & product strategy",
      alternativesLabel: "Alternatives considered",
      spacing: {
        title: "Why an 8pt spacing system?",
        context: "Mango must keep rhythm across mobile, web, and kiosk surfaces.",
        why: "8 divides cleanly into 2/4, maps 1:1 to Figma's 8px grid, and minimizes rem rounding errors.",
        strategy: "Education services prioritize readability and touch padding over density—8px base unit.",
        alternatives: ["4pt — denser but more tokens and QA cost", "10pt — awkward rem fractions"],
        metric: "Min space.200 (16px) around touch targets",
      },
      typography: {
        title: "Why Pretendard + 8-step type scale?",
        context: "Mixed Korean/Latin/numeric UI for domestic and global products.",
        why: "Pretendard offers Korean readability, OSS licensing, and variable font sync with code.",
        strategy: "Four tiers (Heading/Title/Subtitle/Caption) limit ad-hoc style sprawl.",
        alternatives: ["System fonts — platform inconsistency", "12-step scale — choice fatigue"],
        metric: "Body font.subtitle.medium (14px) meets WCAG AA 4.5:1",
      },
      color: {
        title: "Why Orange as Primary brand?",
        context: "Mango conveys learning energy and warm community.",
        why: "Orange avoids error associations of red, conflicts less with success green, and meets contrast more easily than yellow.",
        strategy: "Orange for Primary CTA, Yellow for secondary emphasis, Gray for neutral UI.",
        alternatives: ["Blue Primary — generic gov-service look", "Red Primary — error confusion"],
        metric: "color-primary-500 on white = 3.1:1 (Large text AA)",
      },
      grid: {
        title: "Why 4-column mobile grid?",
        context: "Primary viewports are 360–428px with many 2-column card layouts.",
        why: "4 columns express 2-span cards and full-width hero with the smallest even column count.",
        strategy: "16px margin + 16px gutter aligns with space.200 for unified layout tokens.",
        alternatives: ["6 columns — column width <40px on narrow screens", "12 columns — excessive mobile complexity"],
        metric: "360px viewport → column width ≈ 71px",
      },
    },
    governance: {
      title: "Governance & versioning",
      description: "Roles, release policy, and deprecation process for tokens and components.",
      versionLabel: "Current version",
      processLabel: "Change process",
      rolesDesc: "Who may change Primitive, Semantic, and Component layers.",
      canLabel: "Can",
      cannotLabel: "Cannot",
      impactTitle: "Token change impact",
      impactDesc: "Impact level and required actions by change type.",
      impactChange: "Change type",
      impactScope: "Impact",
      impactAffected: "Affected scope",
      impactAction: "Required action",
      deprecatedTitle: "Deprecation policy",
      deprecatedDesc: "Minimum grace period before breaking removals.",
      deprecatedNotice: "Deprecated aliases maintained for at least 2 minor versions (~6 months).",
      deprecatedFrom: "Deprecated",
      deprecatedTo: "Replacement",
      deprecatedSince: "Since",
      deprecatedRemove: "Removal",
     
      impactRows: [
        { change: "Add Primitive color step", affected: "Semantic aliases referencing palette", action: "Auto alias, docs update" },
        { change: "Rename Semantic token", affected: "All component CSS variables", action: "Deprecated alias 2 minors + codemod" },
        { change: "Change component API prop", affected: "Services using component", action: "Migration guide + shims" },
        { change: "Change grid columns", affected: "All mobile layouts", action: "Major version, regression QA" },
      ],
      deprecatedStages: [
        { stage: "Deprecated", desc: "Strikethrough in docs, replacement documented" },
        { stage: "Legacy alias", desc: "Build warning, runtime unchanged" },
        { stage: "Removed", desc: "Deleted in major, CHANGELOG breaking" },
      ],
      deprecatedExamples: [{ since: "v1.8", remove: "v3.0" }, { since: "v1.6", remove: "v2.0" }],
    },
    componentDoc: {
      architectureTitle: "Component architecture",
      architectureDesc: "Variant, state, and token mapping. Design and Code tabs are 1:1 matched.",
      anatomy: "Anatomy",
      variants: "Variants",
      states: "States",
      tokens: "Token mapping",
      statesTitle: "Interactive states",
      statesDesc: "Separate default, hover, focus, disabled as tokens.",
      variantColumns: { id: "Variant", token: "Token prefix", usage: "Usage" },
      stateColumns: { id: "State", token: "Token pattern" },
      tokenColumns: { prop: "Property", primitive: "Primitive", semantic: "Semantic" },
    },
    home: {
      heroBadge: "Design System",
      heroTitle1: "For domestic & global services",
      heroTitle2: "Unified Design System",
      heroDesc:
        "Mango Design System ensures UI quality and consistent UX across products. Figma Variables-based tokens bridge design and development for accurate implementation.",
      ctaTokens: "View token system",
      ctaPatterns: "View guidelines",
      stats: [
        { label: "Design Tokens", value: "120+", desc: "Primitive · Semantic · Component" },
        { label: "Components", value: "10+", desc: "Variant · State · Token docs" },
        { label: "Figma Variables", value: "Synced", desc: "Tokens Studio pipeline" },
        { label: "Platforms", value: "2+", desc: "Domestic · Global services" },
      ],
      principlesTitle: "Core Principles",
      principlesDesc: "Operates on four pillars: system design, UX consistency, pattern standardization, and token code integration.",
      pipelineTitle: "Figma → Code Pipeline",
      pipelineDesc: "Figma Variables as single source of truth — from token conversion to component implementation.",
      governanceTitle: "Governance",
      governanceDesc: "Versioning, roles, deprecation — senior DS operating model",
      governanceBadge: "Governance",
      governanceHeadline: "How are versions managed here?",
      governanceSummary:
        "Please check the impact scope of the semantic rename and the deprecation grace policy for two minor versions.",
      quickLinksTitle: "Quick Links",
      quickLinks: [
        { id: "tokens", label: "Design Tokens", desc: "Figma → Code token system" },
        { id: "palette", label: "Colors", desc: "Light / dark palettes" },
        { id: "patterns", label: "Patterns", desc: "Design rules & guides" },
        { id: "button", label: "Button", desc: "Interaction components" },
      ],
      principles: [
        {
          title: "System Architecture",
          description:
            "Build a central design system for domestic and global services, with environment-optimized subsystems.",
        },
        {
          title: "Consistent UX",
          description:
            "Raise UI quality across products and establish guides for a unified experience at every touchpoint.",
        },
        {
          title: "Pattern Standardization",
          description:
            "Standardize patterns from shared design rules and document component, layout, and interaction guidelines.",
        },
        {
          title: "Token-Based Code",
          description:
            "Establish Figma Variables-based tokens and link to dev code for accuracy and efficiency.",
        },
      ],
      pipeline: [
        { step: "01", title: "Figma Variables", desc: "Design source of truth", tool: "Figma" },
        { step: "02", title: "Design Tokens", desc: "JSON/YAML token schema", tool: "Tokens Studio" },
        { step: "03", title: "CSS Variables", desc: "Runtime theme application", tool: "Style Dictionary" },
        { step: "04", title: "Components", desc: "React component implementation", tool: "React + Tailwind" },
      ],
    },
    patterns: {
      title: "Patterns & Guidelines",
      badge: "Standardization",
      description:
        "Standardize patterns from shared design rules and maintain UI consistency through Do/Don't guidelines.",
      compositionTitle: "Component Composition",
      compositionDesc: "Structural rules when combining individual components.",
      composition: [
        { title: "Single Responsibility", desc: "One component, one UI role. Compose complex UIs from combinations." },
        { title: "Tokens First", desc: "Always reference semantic tokens for color, spacing, and typography." },
        { title: "Complete States", desc: "Design and document default, hover, focus, disabled, and loading together." },
      ],
      groups: [
        {
          category: "Layout",
          rules: [
            { do: "Use 8pt grid-based spacing", dont: "Use arbitrary px values for margins" },
            { do: "Limit max content width for readability", dont: "Stretch text across full width" },
            { do: "Apply section spacing by visual hierarchy", dont: "Use identical margins for all sections" },
          ],
        },
        {
          category: "Components",
          rules: [
            { do: "Express states with semantic tokens", dont: "Distinguish states with hardcoded hex values" },
            { do: "Use the same variant for the same function", dont: "Create different button styles per screen" },
            { do: "Include accessibility attributes by default", dont: "Ignore screen readers for visual-only UI" },
          ],
        },
        {
          category: "Interaction",
          rules: [
            { do: "Provide feedback motion with 150–300ms easing", dont: "Hide state changes with instant transitions" },
            { do: "Ensure minimum 44×44px touch targets", dont: "Use tiny icons as the only click area" },
            { do: "Design loading, error, and empty states together", dont: "Document only the happy path" },
          ],
        },
        {
          category: "Token Operations",
          rules: [
            { do: "Sync token JSON when Figma Variables change", dont: "Manage design and code tokens separately" },
            { do: "Maintain Primitive → Semantic → Component tiers", dont: "Reference Primitive directly in components" },
            { do: "Use consistent dot notation for token names", dont: "Use different naming per team or project" },
          ],
        },
      ],
    },
    tokens: {common: {
      original: "Original",
      accessible: "Accessible",
    },
    accessibilityDecision: {
      eyebrow: "ACCESSIBILITY DECISION",
    
      title: "Why did we choose the Okabe-Ito Palette?",
    
      description:
        "We adopted the Okabe-Ito Palette to ensure status and information remain distinguishable in color-vision-deficient environments. It is separated from brand colors to clearly communicate success, error, and informational states.",
    
      reasonsTitle: "Why We Chose It",
    
      reason1: "Distinguishable under color vision deficiency",
      reason2: "Validated in data visualization",
      reason3: "Designed with WCAG accessibility in mind",
      reason4: "No conflict with brand colors",
    
      benefitsTitle: "Benefits",
    
      benefit1: "Improved status recognition",
      benefit2: "Better chart readability",
      benefit3: "Meets accessibility standards",
      benefit4: "Reduced cognitive load",
    },
      accessibility: {
        redTitle: "Red → Vermilion",
        greenTitle: "Green → Bluish Green",
      
        redGuidance:
          "Red may be confused with green or brown, so a vermilion hue is recommended.",
      
        greenGuidance:
          "Green may be confused with red or brown, so a bluish-green hue is recommended.",

        normalVisionTitle: "Normal Vision",
        normalVisionDesc:
          "Colors perceived by users with typical color vision.",
      
        colorBlindTitle: "Deuteranopia",
        colorBlindDesc:
          "Colors perceived by users with red-green color vision deficiency.",
      
        paletteDecisionTitle: "Why Did We Choose the Okabe-Ito Palette?",
        paletteDecisionDesc:
          "The Okabe-Ito Palette was selected to ensure clear differentiation of states and information in color vision deficiency environments. Status colors are separated from brand colors to clearly communicate success, error, and information states.",
      
        reasons: "Reasons",
        benefits: "Benefits",
      
        redToVermilion: "Red → Vermilion",
        greenToBluishGreen: "Green → Bluish Green",
      },
      motionTitle: "Motion",
opacityTitle: "Opacity",

motionTokens: {
  avatarEnter: {
    desc: "Use for avatar group enter transitions.",
    version: "Introduced v2.0.0",
  },
},

opacityTokens: {
  disabled: {
    desc: "Apply to images when in a disabled state.",
    version: "Introduced v3.4.0",
  },

  loading: {
    desc: "Apply to content that sits under a loading spinner.",
    version: "Introduced v0.10.13",
  },
},
      radiusTokens: {
        xsmall: {
          desc: "Use for small detail elements.",
          version: "Introduced v1.0.0",
        },
        small: {
          desc: "Use for standard inputs and cards.",
          version: "Introduced v1.0.0",
        },
        medium: {
          desc: "Use for emphasized cards and panels.",
          version: "Introduced v1.0.0",
        },
        large: {
          desc: "Use for modals and primary containers.",
          version: "Introduced v1.0.0",
        },
      },
      title: "Design Tokens",
      badge: "Figma Variables",
      description:
        "Three-tier token system (Primitive → Semantic → Component) based on Figma Variables as single source of truth.",
      archTitle: "Token Architecture",
      archDesc: "Three layers by change frequency and abstraction for maintainability and scalability.",
      semanticTitle: "Semantic Color Tokens",
      semanticDesc: "1:1 mapping between Figma Variables and CSS Custom Properties. Click to copy token names.",
      colorTitle: "Color",
      colorDesc: "Primitive color values referenced by semantic tokens.",
      tiers: [
        { tier: "Primitive", label: "Primitive Tokens", description: "Immutable base values: color, spacing, typography" },
        { tier: "Semantic", label: "Semantic Tokens", description: "Context-based tokens mapping primitives to purpose" },
        { tier: "Component", label: "Component Tokens", description: "Component-specific tokens ensuring UI consistency" },
      ],
      usages: [
        "Primary text for body and headings",
        "Secondary text and meta info",
        "Brand emphasis, links, active states",
        "Card and panel backgrounds",
        "Page background and dividers",
        "Card and input field borders",
        "CTA, selection, focus states",
        "Success and completion states",
      ],
      borderTokens: { width: { desc: "The default width for all standard component borders and dividers.", version: "Introduced v1.5.2", }, selected: { desc: "The width used to indicate a selected element, such as an active tab or a chosen item.", version: "Introduced v6.1.0", }, focused: { desc: "The width used for focus rings on interactive elements.", version: "Introduced v6.1.0", }, },
    },
    pages: {
      palette: {
        title: "Color Palette",
        badge: "Light / Dark",
        description: "Primitive palettes with light/dark modes and color-blind accessibility guidance.",
        lightMode: "Light Mode",
        darkMode: "Dark Mode",
        lightNeutrals: "Light mode neutrals",
        accessibleGood: "Colors distinguishable by color-blind users",
        accessibleBad: "Hard-to-distinguish combinations",
      },
      typography: {
        title: "Typography",
        description: "font.* tokens define heading, body, and caption hierarchy. Maps 1:1 to Figma Text Styles.",
        preview: "Discover and learn at your local culture center",
      },
      spacing: { title: "Spacing", description: "8pt-based space.* tokens for consistent layout and component spacing." },
      grid: {
        title: "Grid",
        description: "Grid defines alignment for screens and content with consistent structure and rules.",
        mobile: "Mobile Grid",
        mobileDesc: "Mobile uses 4-column grid. Content aligns to margin and gutter.",
        icon: "Icon Grid",
        watch: "Watch Grid",
      },
      icons: {
        title: "Icons",
        badge: "24×24 Grid",
        description: "24px icon system with ic_{name} naming. Supports Small, Medium, Large size tokens.",
      },
      illustrations: {
        title: "Illustrations",
        badge: "Asset Library",
        description: "Context-based illustration assets. Figma components map 1:1 to React imports.",
      },
      button: {
        title: "Button",
        badge: "Action",
        description: "Action component defined by Variant · State · Token mapping.",
        size: "Sizing",
        sizeDesc: "Set SM, MD, LG, XL via the size prop.",
        hierarchy: "Variants · Hierarchy",
        accessibility: "Accessibility",
        variantUsage: {
          primary: "Primary CTA and the main action on a page",
          secondary: "Secondary action, paired with Primary",
          "outline-brand": "Brand emphasis on neutral backgrounds",
          "outline-neutral": "Low-emphasis actions such as cancel or close",
        },
      },
      input: {
        title: "Input",
        badge: "Form",
        description: "Text field with default/search/error variants and token-linked states.",
        demoTitle: "State preview",
        variantUsage: {
          default: "General text input",
          search: "Search field with an icon slot",
          error: "Validation failure state",
        },
      },
      select: {
        title: "Select",
        badge: "Form",
        description: "Single/multi dropdown with trigger/menu/option token layers.",
        demoTitle: "Dropdown preview",
        variantUsage: {
          default: "Single-selection dropdown",
          multi: "Tag-style multi-selection",
        },
      },
      modal: {
        title: "Modal",
        badge: "Overlay",
        description: "Dialog/Sheet/Alert variants with overlay, focus trap, aria-modal.",
        demoTitle: "Dialog preview",
        variantUsage: {
          dialog: "Short decisions such as confirm or cancel",
          sheet: "Mobile bottom sheet",
          alert: "System alerts with a single button",
        },
      },
      checkbox: {
        title: "Checkbox",
        badge: "Selection",
        description: "Multi-select checkbox with default, checked, outline, disabled states via tokens.",
        basic: "Basic Checkbox",
        basicDesc: "For single and multi-select scenarios.",
      },
      accordion: {
        title: "Accordion",
        badge: "Expandable",
        description: "Expandable content with text-only and icon variants.",
        basic: "Basic Accordion",
        basicDesc: "For FAQ and collapsible detail content.",
      },
      badge: {
        title: "Badge",
        badge: "Status",
        description: "Highlights status, category, and promo info with color tokens.",
        basic: "Badge",
        basicDesc: "Secondary info on lists, cards, and detail pages.",
      },
      filter: {
        title: "Filter",
        badge: "Discovery",
        description: "Filter for search and list views with selection state and count badges.",
        basic: "Filter",
        basicDesc: "Select and clear conditions at the top of lists.",
      },
      tab: {
        title: "Tab",
        badge: "Navigation",
        description: "Content switching with Default, Category, and Chip variants.",
        basic: "Tabs",
        basicDesc: "Switch content sections within the same view.",
        iconTab: "Icon Tab",
        chipTab: "Chip Tab",
      },
      topappbar: {
        title: "TopAppBar",
        badge: "Navigation",
        description: "Top navigation bar with back, title, and action slots.",
        basic: "Default TopAppBar",
        basicDesc: "Fixed at the top of mobile screens.",
      },
      motion: {
        title: "Motion",
        badge: "Interaction",
        description: "Motion conveys hierarchy, continuity, and feedback with 150–300ms easing.",
      },
      advertising: {
        title: "Advertising",
        badge: "Monetization",
        description: "Ad banner components and asset guidelines including AD label, CTA, and safe zones.",
        banner: "Ad Banner",
        bannerDesc: "Primary banner layout and asset specs.",
        guide: "Ad Guidelines",
        caution: "Cautions",
      },
    },
    categories: {
      overview: "Overview",
      foundation: "Foundation",
      components: "Components",
      guidelines: "Guidelines",
    },
  },
  ja: {
    common: {
      design: "Design",
      code: "Code",
      do: "Do",
      dont: "Don't",
      search: "トークン、コンポーネントを検索...",
      noResults: "検索結果がありません。",
      figmaLibrary: "Figma Library",
      connected: "連携済み",
      updated: "Updated",
      openMenu: "メニューを開く",
      copyToken: "クリックしてコピー",
      designSystem: "Design System",
      token: "Token",
      figmaVariable: "Figma Variable",
      usage: "Usage",
      lightDark: "Light / Dark",
    },
    nav: {
      overview: "Overview",
      foundation: "Foundation",
      components: "Components",
      guidelines: "Guidelines",
      home: "システム概要",
      tokens: "Design Tokens",
      palette: "Colors",
      typography: "Typography",
      spacing: "Spacing",
      grid: "Grid",
      icons: "Icons",
      illustrations: "Illustrations",
      button: "Button",
      input: "Input",
      select: "Select",
      modal: "Modal",
      checkbox: "Checkbox",
      accordion: "Accordion",
      badge: "Badge",
      filter: "Filter",
      tab: "Tab",
      topappbar: "TopAppBar",
      patterns: "Patterns",
      motion: "Motion",
      advertising: "Advertising",
    },
    typography: {
      contrastTitle: "テキストコントラスト (WCAG)",
      contrastDesc: "本文・見出しは背景とのコントラスト比をWCAG AA以上に維持します。",
      contrastLevel: "Level",
      contrastLarge: "Large text",
      contrastNormal: "Normal text",
      contrastNote: "Note",
    },
    palette: {
      accessibleGoodDesc: "Okabe–Itoパレット基準。赤緑色覚でも明度・色相差で区別可能です。",
      accessibleBadDesc: "類似した明度・色相の組み合わせは状態、チャート、アラートで混乱を招きます。",
      colorUsageTitle: "色使用時の注意事項",
      colorUsageDesc: "色だけで情報を伝えず、代替色・アイコン・テキストラベルを併用します。",
    },
    decisions: {
      label: "Design Decision",
      why: "決定根拠",
      strategy: "ブランド・製品戦略",
      alternativesLabel: "検討したが採用しなかった案",
      spacing: {
        title: "なぜ8ptスペーシングか？",
        context: "マンゴーはモバイル・Web・キオスクで同一リズムを維持する必要があります。",
        why: "8は2・4の倍数でFigma 8px gridと1:1対応し、rem変換誤差が少ないです。",
        strategy: "教育サービスは密度より可読性とタッチ余白を優先しBase unit 8pxを採用。",
        alternatives: ["4pt — トークン数・QAコスト増", "10pt — rem非整数反復"],
        metric: "タッチターゲット周囲最小 space.200(16px)",
      },
      typography: {
        title: "なぜPretendard + 8段階Type scaleか？",
        context: "国文・欧文・数字が混在する国内・グローバルUIを支援。",
        why: "Pretendardは韓国語可読性とOSS、variable fontでFigma–Code同期コストが低い。",
        strategy: "4階層(Heading/Title/Subtitle/Caption)で任意スタイル拡張を防止。",
        alternatives: ["System font — プラットフォーム不一致", "12段階 — 選択疲労"],
        metric: "本文 font.subtitle.medium(14px) WCAG AA 4.5:1以上",
      },
      color: {
        title: "なぜOrangeをPrimary Brandか？",
        context: "マンゴーは「学びの活力」と「温かいコミュニティ」を伝えます。",
        why: "OrangeはRedより警告連想が弱く、Green(成功)と衝突せずYellowよりコントラスト確保が容易。",
        strategy: "Primary CTAにOrange、Secondary強調にYellow、Neutral UIにGrayを固定。",
        alternatives: ["Blue Primary — 政府サービスと差別化不足", "Red Primary — エラー混淆"],
        metric: "color-primary-500 on white = 3.1:1 (Large text AA)",
      },
      grid: {
        title: "なぜモバイル4カラムグリッドか？",
        context: "主画面360–428px、2列カード配置が多い。",
        why: "4カラムは2spanカードと全幅ヒーローを同一グリッドで表現できる最小偶数。",
        strategy: "Margin 16px + Gutter 16pxはspace.200と一致しレイアウトトークン統合。",
        alternatives: ["6カラム — 狭画面で列幅40px未満", "12カラム — モバイル過剰複雑"],
        metric: "360px viewport → 列幅 ≈ 71px",
      },
    },
    governance: {
      title: "ガバナンス & バージョン管理",
      description: "トークン・コンポーネント変更権限、リリース、Deprecatedプロセス。",
      versionLabel: "現在バージョン",
      processLabel: "変更プロセス",
      rolesDesc: "Primitive/Semantic/Component変更権限を明確化。",
      canLabel: "許可",
      cannotLabel: "不可",
      impactTitle: "トークン変更影響範囲",
      impactDesc: "変更タイプ別の影響度と必須対応。",
      impactChange: "変更タイプ",
      impactScope: "影響度",
      impactAffected: "影響範囲",
      impactAction: "必須対応",
      deprecatedTitle: "Deprecatedポリシー",
      deprecatedDesc: "Breaking changeなし移行のための猶予期間。",
      deprecatedNotice: "Deprecated後最低2 minor(約6ヶ月)alias維持。",
      deprecatedFrom: "Deprecated",
      deprecatedTo: "代替",
      deprecatedSince: "Since",
      deprecatedRemove: "Removal",
    
      impactRows: [
        { change: "Primitive color step追加", affected: "参照Semantic", action: "自動alias、ドキュメント更新" },
        { change: "Semantic rename", affected: "全CSS変数", action: "Deprecated alias 2 minor + codemod" },
        { change: "Component API変更", affected: "利用サービス", action: "移行ガイド + shims" },
        { change: "Grid column変更", affected: "モバイルレイアウト全体", action: "Major、回帰QA" },
      ],
      deprecatedStages: [
        { stage: "Deprecated", desc: "ドキュメント打ち消し線、代替明示" },
        { stage: "Legacy alias", desc: "ビルドwarning、ランタイム維持" },
        { stage: "Removed", desc: "Majorで削除、CHANGELOG Breaking" },
      ],
      deprecatedExamples: [{ since: "v1.8", remove: "v3.0" }, { since: "v1.6", remove: "v2.0" }],
    },
    componentDoc: {
      architectureTitle: "コンポーネントアーキテクチャ",
      architectureDesc: "Variant・State・Token接続。Design/Codeタブ1:1対応。",
      anatomy: "Anatomy",
      variants: "Variant構造",
      states: "State構造",
      tokens: "Token接続",
      statesTitle: "Interactive States",
      statesDesc: "default/hover/focus/disabledをトークン分離。",
      variantColumns: { id: "Variant", token: "Token prefix", usage: "用途" },
      stateColumns: { id: "State", token: "Token pattern" },
      tokenColumns: { prop: "Property", primitive: "Primitive", semantic: "Semantic" },
    },
    home: {
      heroBadge: "Design System",
      heroTitle1: "国内・グローバルサービス向け",
      heroTitle2: "統合デザインシステム",
      heroDesc:
        "製品全体のUI品質と一貫したUXのために設計されたマンゴー Design System。Figma Variablesベースのトークン体系でデザインと開発の実装精度を高めます。",
      ctaTokens: "トークン体系を見る",
      ctaPatterns: "ガイドラインを見る",
      stats: [
        { label: "Design Tokens", value: "120+", desc: "Primitive · Semantic · Component" },
        { label: "Components", value: "10+", desc: "Variant · State · Token文書化" },
        { label: "Figma Variables", value: "連携", desc: "Tokens Studioパイプライン" },
        { label: "Platforms", value: "2+", desc: "国内・グローバルサービス" },
      ],
      principlesTitle: "核心原則",
      principlesDesc: "システム設計、UX一貫性、パターン標準化、トークンコード化の4軸で運用します。",
      pipelineTitle: "Figma → Code パイプライン",
      pipelineDesc: "Figma Variablesを単一ソースとして、トークン変換からコンポーネント実装まで一貫したワークフローを維持します。",
      governanceTitle: "ガバナンス",
      governanceDesc: "バージョン管理、変更権限、Deprecatedポリシー",
      governanceBadge: "Governance",
      governanceHeadline: "こちらではバージョンはどのように管理されていますか？",
      governanceSummary: "Semantic Rename の影響範囲と、非推奨化後の 2 マイナーバージョン猶予ポリシーを確認してください。",
      quickLinksTitle: "クイックリンク",
      quickLinks: [
        { id: "tokens", label: "Design Tokens", desc: "Figma → Code トークン体系" },
        { id: "palette", label: "Colors", desc: "ライト/ダークパレット" },
        { id: "patterns", label: "Patterns", desc: "デザインルール & ガイド" },
        { id: "button", label: "Button", desc: "インタラクションコンポーネント" },
      ],
      principles: [
        {
          title: "システム構造設計",
          description: "国内外サービスの中心となるデザインシステムを構築し、各環境に最適化された個別システムを設計します。",
        },
        {
          title: "一貫したユーザー体験",
          description: "製品全体のUI完成度を高め、すべてのタッチポイントで同一の体験を提供するガイドを策定します。",
        },
        {
          title: "パターン標準化",
          description: "共通デザインルールに基づくパターンを標準化し、コンポーネント・レイアウト・インタラクションガイドラインを文書化します。",
        },
        {
          title: "トークンベースコード化",
          description: "Figma Variablesベースのトークン体系を確立し、開発コードと連携して実装精度と効率を向上させます。",
        },
      ],
      pipeline: [
        { step: "01", title: "Figma Variables", desc: "デザインのソースオブトゥルース", tool: "Figma" },
        { step: "02", title: "Design Tokens", desc: "JSON/YAMLトークンスキーマ", tool: "Tokens Studio" },
        { step: "03", title: "CSS Variables", desc: "ランタイムテーマ適用", tool: "Style Dictionary" },
        { step: "04", title: "Components", desc: "Reactコンポーネント実装", tool: "React + Tailwind" },
      ],
    },
    patterns: {
      title: "Patterns & Guidelines",
      badge: "標準化",
      description: "共通デザインルールに基づくパターンを標準化し、Do/Don'tガイドラインでUI一貫性を維持します。",
      compositionTitle: "コンポーネント合成原則",
      compositionDesc: "個別コンポーネントを組み合わせる際の構造ルールです。",
      composition: [
        { title: "単一責任", desc: "1コンポーネントは1つのUI役割のみ。複合UIは組み合わせで構成します。" },
        { title: "トークン優先", desc: "色・間隔・タイポは必ずセマンティックトークンを参照し、ハードコーディングを避けます。" },
        { title: "状態の完結性", desc: "default, hover, focus, disabled, loading状態を一緒に設計・文書化します。" },
      ],
      groups: [
        {
          category: "レイアウト",
          rules: [
            { do: "8ptグリッドベースの間隔を使用する", dont: "任意のpx値で余白を指定する" },
            { do: "コンテンツ最大幅を制限して可読性を確保する", dont: "全幅にテキストを伸ばす" },
            { do: "視覚的階層に応じてセクション間隔を差別化する", dont: "すべてのセクションに同じmarginを使う" },
          ],
        },
        {
          category: "コンポーネント",
          rules: [
            { do: "セマンティックトークンで状態を表現する", dont: "ハードコードされたhex値で状態を区別する" },
            { do: "同じ機能には同じコンポーネント変種を使う", dont: "画面ごとに異なるボタンスタイルを作る" },
            { do: "アクセシビリティ属性をデフォルトで含める", dont: "視覚要素のみ実装しスクリーンリーダーを無視する" },
          ],
        },
        {
          category: "インタラクション",
          rules: [
            { do: "150–300ms easingでフィードバックモーションを提供する", dont: "即時遷移で状態変化を隠す" },
            { do: "タッチ領域最小44×44pxを保証する", dont: "小さなアイコンのみでクリック領域を構成する" },
            { do: "ローディング・エラー・空状態を一緒に設計する", dont: "正常状態UIのみ文書化する" },
          ],
        },
        {
          category: "トークン運用",
          rules: [
            { do: "Figma Variables変更時にトークンJSONを同期する", dont: "デザインとコードトークンを別管理する" },
            { do: "Primitive → Semantic → Component 3段階を維持する", dont: "コンポーネントでPrimitiveを直接参照する" },
            { do: "トークン命名はdot notationで一貫させる", dont: "チーム/プロジェクトごとに異なる命名規則を使う" },
          ],
        },
      ],
    },
    tokens: {
      common: {
        original: "元の色",
        accessible: "推奨色",
      },
      accessibilityDecision: {
        eyebrow: "ACCESSIBILITY DECISION",
      
        title: "なぜ Okabe-Ito パレットを採用したのか？",
      
        description:
          "色覚特性の違いがある環境でも状態や情報を明確に区別できるよう、Okabe-Ito パレットを参考に状態カラーを定義しました。ブランドカラーとは分離し、成功・エラー・情報状態を明確に伝えます。",
      
        reasonsTitle: "採用理由",
      
        reason1: "色覚特性が異なる環境でも識別可能",
        reason2: "データ可視化分野で実績がある",
        reason3: "WCAG アクセシビリティを考慮",
        reason4: "ブランドカラーと競合しない",
      
        benefitsTitle: "効果",
      
        benefit1: "状態認識の向上",
        benefit2: "グラフの可読性向上",
        benefit3: "アクセシビリティ基準を満たす",
        benefit4: "認知負荷の軽減",
      },
      accessibility: {
        redTitle: "Red → Vermilion",
        greenTitle: "Green → Bluish Green",
      
        redGuidance:
          "赤は緑や茶色と混同される可能性があるため、朱色系を推奨します。",
      
        greenGuidance:
          "緑は赤や茶色と混同される可能性があるため、青緑系を推奨します。",
        normalVisionTitle: "通常の視覚 (Normal Vision)",
        normalVisionDesc:
          "一般的な色覚を持つユーザーが認識する色です。",
      
        colorBlindTitle: "赤緑色覚異常 (Deuteranopia)",
        colorBlindDesc:
          "赤緑色覚異常の環境で認識される色です。",
      
        paletteDecisionTitle: "なぜ Okabe-Ito Palette を採用したのか？",
        paletteDecisionDesc:
          "色覚異常環境でも状態や情報を明確に区別できるよう、Okabe-Ito Palette を参考に状態カラーを定義しました。ブランドカラーと分離し、成功・エラー・情報状態を明確に伝達します。",
      
        reasons: "採用理由",
        benefits: "適用効果",
      
        redToVermilion: "Red → Vermilion",
        greenToBluishGreen: "Green → Bluish Green",
      },
      motionTitle: "モーション",
opacityTitle: "不透明度",

motionTokens: {
  avatarEnter: {
    desc: "アバターグループの表示アニメーションに使用",
    version: "v2.0.0 で導入",
  },
},

opacityTokens: {
  disabled: {
    desc: "無効状態の画像に適用",
    version: "v3.4.0 で導入",
  },

  loading: {
    desc: "ローディングスピナーの下に表示されるコンテンツに適用",
    version: "v0.10.13 で導入",
  },
},
      radiusTokens: {
        xsmall: {
          desc: "小さなディテール要素に使用する角丸",
          version: "v1.0.0 で導入",
        },
        small: {
          desc: "標準的な入力フィールドやカードに使用する角丸",
          version: "v1.0.0 で導入",
        },
        medium: {
          desc: "強調されたカードやパネルに使用する角丸",
          version: "v1.0.0 で導入",
        },
        large: {
          desc: "モーダルや主要コンテナに使用する角丸",
          version: "v1.0.0 で導入",
        },
      },
      title: "Design Tokens",
      badge: "Figma Variables",
      description:
        "Figma Variablesベースの3段階トークン体系(Primitive → Semantic → Component)でデザインと開発の単一ソースを維持します。",
      archTitle: "トークンアーキテクチャ",
      archDesc: "変更頻度と抽象化レベルに応じて3層に分離し、保守性と拡張性を確保します。",
      semanticTitle: "セマンティックカラートークン",
      semanticDesc: "Figma VariablesとCSS Custom Propertiesが1:1マッピング。クリックでトークン名をコピーできます。",
      colorTitle: "Color",
      colorDesc: "セマンティックトークンが参照するPrimitiveカラー値です。",
      tiers: [
        { tier: "Primitive", label: "プリミティブトークン", description: "色、間隔、タイポグラフィなど不変の基礎値" },
        { tier: "Semantic", label: "セマンティックトークン", description: "用途に応じてPrimitiveをマッピングした意味ベーストークン" },
        { tier: "Component", label: "コンポーネントトークン", description: "特定コンポーネントに適用されUI一貫性を保証" },
      ],
      usages: [
        "本文、見出しなど主要テキスト",
        "補助説明、メタ情報",
        "ブランド強調、リンク、アクティブ状態",
        "カード、パネル背景",
        "ページ背景、区分領域",
        "カード、入力フィールド枠線",
        "CTA、選択状態、フォーカス",
        "成功、完了状態",
      ],
      borderTokens: { width: { desc: "標準コンポーネントと区切り線に使用される基本の太さ", version: "v1.5.2 で導入", }, selected: { desc: "選択されたタブや項目を示すために使用される太さ", version: "v6.1.0 で導入", }, focused: { desc: "フォーカスリングに使用される太さ", version: "v6.1.0 で導入", }, }
    },
    pages: {
      palette: {
        title: "Color Palette",
        badge: "Light / Dark",
        description: "Primitiveカラーパレットとライト/ダークモード、色覚多様性を考慮したアクセシビリティガイド。",
        lightMode: "Light Mode",
        darkMode: "Dark Mode",
        lightNeutrals: "Light mode neutrals",
        accessibleGood: "色覚特性者が明確に区別できる色",
        accessibleBad: "区別が難しい組み合わせ",
      },
      typography: {
        title: "Typography",
        description: "font.*トークン体系で見出し、本文、キャプションの階層を定義。Figma Text Stylesと1:1対応。",
        preview: "迷わず選んで学ぶ文化センターサービス",
      },
      spacing: { title: "Spacing", description: "8ptベースのspace.*トークンでレイアウトとコンポーネント内部間隔を一貫定義。" },
      grid: {
        title: "Grid",
        description: "画面とコンテンツの整列基準を定義。一貫したレイアウトと視覚的バランスのため同一構造を使用。",
        mobile: "Mobile Grid",
        mobileDesc: "モバイルは4カラムグリッド。MarginとGutter基準で整列。",
        icon: "Icon Grid",
        watch: "Watch Grid",
      },
      icons: {
        title: "Icons",
        badge: "24×24 Grid",
        description: "24px基準アイコンシステム。ic_{name}命名規則、Small/Medium/Large 3段階サイズトークン対応。",
      },
      illustrations: {
        title: "Illustrations",
        badge: "Asset Library",
        description: "サービス文脈別イラストレーションアセット。FigmaコンポーネントとReact importが1:1マッピング。",
      },
      button: {
        title: "Button",
        badge: "Action",
        description: "Variant · State · Token接続構造で定義されたアクションコンポーネント。",
        size: "サイズ調整",
        sizeDesc: "size属性でSM, MD, LG, XLを指定。",
        hierarchy: "Variant · 階層",
        accessibility: "アクセシビリティ",
        variantUsage: {
          primary: "主要CTA、ページの核心アクション",
          secondary: "補助アクション、Primaryとセットで使用",
          "outline-brand": "ブランド強調が必要な中立背景上",
          "outline-neutral": "キャンセル、閉じるなど低強調アクション",
        },
      },
      input: {
        title: "Input",
        badge: "Form",
        description: "テキスト入力。default/search/error variantとfocus/disabled/error stateをトークン接続。",
        demoTitle: "状態別Preview",
        variantUsage: {
          default: "一般テキスト入力",
          search: "検索フィールド、アイコンスロット付き",
          error: "バリデーション失敗",
        },
      },
      select: {
        title: "Select",
        badge: "Form",
        description: "単一・複数選択ドロップダウン。trigger/menu/optionトークン階層。",
        demoTitle: "ドロップダウンPreview",
        variantUsage: {
          default: "単一選択ドロップダウン",
          multi: "タグ型複数選択",
        },
      },
      modal: {
        title: "Modal",
        badge: "Overlay",
        description: "Dialog/Sheet/Alert variant。overlay、focus trap、aria-modalを含む。",
        demoTitle: "Dialog Preview",
        variantUsage: {
          dialog: "確認/キャンセルなど短期決定",
          sheet: "モバイル下部シート",
          alert: "システム通知、単一ボタン",
        },
      },
      checkbox: {
        title: "Checkbox",
        badge: "Selection",
        description: "複数項目を同時選択できるチェックボックス。default, checked, outline, disabled状態をトークン定義。",
        basic: "基本チェックボックス",
        basicDesc: "単一・複数選択シナリオに使用。",
      },
      accordion: {
        title: "Accordion",
        badge: "Expandable",
        description: "コンテンツの開閉が可能なアコーディオン。テキスト専用・アイコン付き2変種をサポート。",
        basic: "基本アコーディオン",
        basicDesc: "FAQ、詳細情報など折りたたみコンテンツに使用。",
      },
      badge: {
        title: "Badge",
        badge: "Status",
        description: "状態、カテゴリ、プロモーション情報を強調。カラートークンで意味を区別。",
        basic: "バッジ",
        basicDesc: "リスト、カード、詳細ページで補助情報を表示。",
      },
      filter: {
        title: "Filter",
        badge: "Discovery",
        description: "検索・リストフィルタリング用コンポーネント。選択状態とカウントバッジを提供。",
        basic: "フィルター",
        basicDesc: "リスト上部で条件を選択・解除。",
      },
      tab: {
        title: "Tab",
        badge: "Navigation",
        description: "コンテンツ切替用タブ。Default, Category, Chip 3変種で情報階層に合わせて選択。",
        basic: "タブ",
        basicDesc: "同一ビュー内のコンテンツセクションを切替。",
        iconTab: "Icon Tab",
        chipTab: "Chip Tab",
      },
      topappbar: {
        title: "TopAppBar",
        badge: "Navigation",
        description: "画面上部ナビゲーションバー。戻る、タイトル、アクションボタン領域を標準レイアウトで定義。",
        basic: "基本 TopAppBar",
        basicDesc: "モバイル画面最上部に固定。",
      },
      motion: {
        title: "Motion",
        badge: "Interaction",
        description: "モーションは階層、連続性、フィードバックを伝達。150–300ms easingで使いやすさを向上。",
      },
      advertising: {
        title: "Advertising",
        badge: "Monetization",
        description: "広告バナーコンポーネントと素材ガイド。AD表記、CTA、安全領域ルールを含む。",
        banner: "広告バナー",
        bannerDesc: "Primaryバナー変種のレイアウトと素材規格。",
        guide: "広告ガイド",
        caution: "注意事項",
      },
    },
    categories: {
      overview: "Overview",
      foundation: "Foundation",
      components: "Components",
      guidelines: "Guidelines",
    },
  },
};

const PRINCIPLE_ICONS = ["◈", "◎", "◇", "⬡"];
const PRINCIPLE_COLORS = ["#4F46E5", "#2563EB", "#7C3AED", "#F97316"];

const NAV_STRUCTURE = [
  { id: "overview", key: "overview", items: ["home"] },
  {
    id: "foundation",
    key: "foundation",
    items: ["tokens", "palette", "typography", "spacing", "grid", "icons", "illustrations"],
  },
  {
    id: "components",
    key: "components",
    items: ["button", "input", "select", "modal", "checkbox", "accordion", "badge", "filter", "tab", "topappbar"],
  },
  { id: "guidelines", key: "guidelines", items: ["patterns", "motion", "advertising"] },
];

const SECTION_CATEGORY_MAP = {
  overview: "overview",
  foundation: "foundation",
  components: "components",
  guidelines: "guidelines",
};

const I18nContext = createContext(null);

export function I18nProvider({ children }) {
  const [lang, setLang] = useState("ko");

  useEffect(() => {
    document.documentElement.lang = lang === "ko" ? "ko" : lang === "ja" ? "ja" : "en";
  }, [lang]);

  const value = useMemo(() => {
    const dict = TRANSLATIONS[lang];

    const t = (key) => {
      const parts = key.split(".");
      let cur = dict;
      for (const p of parts) {
        cur = cur?.[p];
      }
      return cur ?? key;
    };

    const navSections = NAV_STRUCTURE.map((section) => ({
      id: section.id,
      label: dict.nav[section.key],
      items: section.items.map((id) => ({
        id,
        label: dict.nav[id],
      })),
    }));

    const pageMeta = Object.fromEntries(
      navSections.flatMap((section) =>
        section.items.map((item) => [
          item.id,
          {
            ...item,
            section: section.label,
            category: dict.categories[SECTION_CATEGORY_MAP[section.id]],
          },
        ])
      )
    );

    const principles = dict.home.principles.map((p, i) => ({
      ...p,
      icon: PRINCIPLE_ICONS[i],
      color: PRINCIPLE_COLORS[i],
    }));

    return {
      lang,
      setLang,
      t,
      dict,
      navSections,
      pageMeta,
      principles,
      page: (id) => dict.pages[id] || {},
    };
  }, [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

export function LanguageSwitcher() {
  const { lang, setLang } = useI18n();

  return (
    <div className="flex items-center gap-1 p-1 rounded-xl bg-[#F3F5F8] border border-[#E5E8EB]">
      {LANGUAGES.map((l) => (
        <button
          key={l.id}
          onClick={() => setLang(l.id)}
          title={l.label}
          aria-label={l.label}
          aria-pressed={lang === l.id}
          className={`w-9 h-9 rounded-lg text-lg flex items-center justify-center transition-all ${
            lang === l.id
              ? "bg-white shadow-sm ring-2 ring-[#C7D2FE] scale-105"
              : "hover:bg-white/60 opacity-70 hover:opacity-100"
          }`}
        >
          {l.flag}
        </button>
      ))}
    </div>
  );
}

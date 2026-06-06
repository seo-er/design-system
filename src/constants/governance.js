export const GOVERNANCE = {
  version: {
    current: "2.0.0",
    cadence: "Quarterly minor · Monthly patch",
    semver: "MAJOR.MINOR.PATCH",
    changelog: "Figma Release Notes + tokens/CHANGELOG.md",
  },
  roles: [
    {
      id: "core",
      role: "Core DS Team",
      can: ["Primitive/Semantic 토큰 추가·변경", "컴포넌트 API 승인", "Major 버전 릴리스"],
      cannot: ["제품 단독 브랜드 컬러 Primitive 변경"],
    },
    {
      id: "product",
      role: "Product Designer",
      can: ["Component 토큰 alias 제안", "패턴/템플릿 기여 PR", "Deprecated 대체안 문서화"],
      cannot: ["Semantic 토큰 직접 삭제", "접근성 기준 하회 변형 배포"],
    },
    {
      id: "engineering",
      role: "Frontend Engineer",
      can: ["토큰 JSON 동기화 PR", "컴포넌트 구현·테스트", "Breaking change 영향 분석"],
      cannot: ["Figma Variables 단독 변경", "하드코딩 hex 신규 도입"],
    },
  ],
  changeProcess: [
    { step: "01", title: "RFC / Proposal", desc: "변경 배경, 영향 범위, 마이그레이션 계획을 Notion RFC로 작성" },
    { step: "02", title: "Design Review", desc: "Core DS + 접근성 리뷰 (WCAG, 색각 다양성)" },
    { step: "03", title: "Token Sync", desc: "Figma Variables → Tokens Studio → Style Dictionary 순 동기화" },
    { step: "04", title: "Release", desc: "semver 태깅, CHANGELOG, codemod(필요 시) 배포" },
  ],
  impactMatrix: [
    { change: "Primitive color step 추가", scope: "Low", affected: "해당 팔레트 참조 Semantic", action: "자동 alias, 문서 업데이트" },
    { change: "Semantic token rename", scope: "High", affected: "전 컴포넌트 CSS 변수", action: "Deprecated alias 2 minor 유지 + codemod" },
    { change: "Component API prop 변경", scope: "Medium", affected: "해당 컴포넌트 사용 서비스", action: "마이그레이션 가이드 + shims" },
    { change: "Grid column 변경", scope: "High", affected: "모바일 레이아웃 전체", action: "Major 버전, QA 회귀 테스트" },
  ],
  deprecatedPolicy: {
    notice: "Deprecated 표시 후 최소 2 minor 버전(≈6개월) 유지",
    stages: [
      { stage: "Deprecated", desc: "문서·Storybook·IDE strikethrough 표시, 대체 토큰/API 명시" },
      { stage: "Legacy alias", desc: "빌드 경고(warning)만 출력, 런타임 동작 유지" },
      { stage: "Removed", desc: "Major 버전에서 삭제, CHANGELOG Breaking Changes 섹션 필수" },
    ],
    examples: [
      { from: "color.brand.orange", to: "color.brand.primary", since: "v1.8", remove: "v3.0" },
      { from: "btn.size.xlarge", to: "btn.size.lg", since: "v1.6", remove: "v2.0" },
    ],
  },
};

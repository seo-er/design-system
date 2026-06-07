export const BUTTON_SPEC = {
  anatomy: ["Label", "Icon (optional)", "Container", "Focus ring"],
  variants: [
    { id: "primary", token: "btn-primary-*" },
    { id: "secondary", token: "btn-secondary-*" },
    { id: "outline-brand", token: "btn-outline-brand-*" },
    { id: "outline-neutral", token: "btn-neutral-*" },
  ],
  sizes: [
    { id: "sm", height: "46px", token: "btn-size-sm", font: "font-title-medium" },
    { id: "md", height: "54px", token: "btn-size-md", font: "font-title-large" },
    { id: "lg", height: "64px", token: "btn-size-lg", font: "font-heading-small" },
    { id: "xl", height: "74px", token: "btn-size-xl", font: "font-heading-medium" },
  ],
  states: [
    { id: "default", token: "btn-{variant}-background" },
    { id: "hover", token: "btn-{variant}-background-hover" },
    { id: "focus", token: "btn-{variant}-focus-ring" },
    { id: "disabled", token: "btn-{variant}-background-disabled" },
    { id: "loading", token: "btn-{variant}-spinner" },
  ],
  tokenMap: [
    { prop: "background", primitive: "color-primary-500", semantic: "color-brand-primary" },
    { prop: "background.hover", primitive: "color-primary-600", semantic: "color-brand-primary-hover" },
    { prop: "text", primitive: "color-gray-900", semantic: "color-text-on-brand" },
    { prop: "radius", primitive: "space-100", semantic: "button-radius-md" },
    { prop: "padding-x", primitive: "space-200", semantic: "button-padding-x-md" },
  ],
};

export const INPUT_SPEC = {
  variants: [
    { id: "default", token: "input-default-*", usage: "일반 텍스트 입력" },
    { id: "search", token: "input-search-*", usage: "검색 필드, 아이콘 슬롯 포함" },
    { id: "error", token: "input-error-*", usage: "유효성 검증 실패" },
  ],
  states: [
    { id: "default", token: "input-border-default" },
    { id: "focus", token: "input-border-focus" },
    { id: "filled", token: "input-background-filled" },
    { id: "disabled", token: "input-background-disabled" },
    { id: "error", token: "input-border-error" },
  ],
  tokenMap: [
    { prop: "height", primitive: "space-600", semantic: "input-height-md" },
    { prop: "border", primitive: "color-gray-400", semantic: "color-border-default" },
    { prop: "border.focus", primitive: "color-primary-500", semantic: "color-brand-primary" },
    { prop: "text", primitive: "color-gray-900", semantic: "color-text-primary" },
    { prop: "placeholder", primitive: "color-gray-600", semantic: "color-text-secondary" },
  ],
};
export const SELECT_SPEC = {
  variants: [
    { id: "default", token: "select-default-*", usage: "단일 선택 드롭다운" },
    { id: "multi", token: "select-multi-*", usage: "태그형 다중 선택" },
  ],
  states: [
    { id: "default", token: "select-trigger-border" },
    { id: "open", token: "select-trigger-border-active" },
    { id: "focus", token: "select-trigger-focus-ring" },
    { id: "disabled", token: "select-trigger-disabled" },
  ],
  tokenMap: [
    { prop: "trigger.height", primitive: "space-600", semantic: "select-height-md" },
    { prop: "menu.elevation", primitive: "elevation-2", semantic: "select-menu-shadow" },
    { prop: "option.hover", primitive: "color-gray-200", semantic: "color-surface-subtle" },
    { prop: "option.selected", primitive: "color-primary-50", semantic: "color-brand-primary-subtle" },
  ],
};

export const MODAL_SPEC = {
  variants: [
    { id: "dialog", token: "modal-dialog-*", usage: "확인/취소 등 단기 결정" },
    { id: "sheet", token: "modal-sheet-*", usage: "모바일 하단 시트" },
    { id: "alert", token: "modal-alert-*", usage: "시스템 알림, 단일 버튼" },
  ],
  states: [
    { id: "open", token: "modal-overlay + modal-panel" },
    { id: "focus-trap", token: "modal-focus-trap" },
    { id: "dismiss", token: "modal-close-button" },
  ],
  tokenMap: [
    { prop: "overlay", primitive: "color-gray-900 @ 40%", semantic: "color-overlay-default" },
    { prop: "panel.radius", primitive: "space-300", semantic: "modal-radius-lg" },
    { prop: "panel.padding", primitive: "space-400", semantic: "modal-padding-lg" },
    { prop: "elevation", primitive: "elevation-3", semantic: "modal-shadow" },
  ],
};
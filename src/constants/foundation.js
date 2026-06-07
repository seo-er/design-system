export const typographyRows = [
  { token: "font.heading.large", weight: "SemiBold", size: "20px", lineHeight: "26px", letterSpacing: "-1%" },
  { token: "font.heading.medium", weight: "SemiBold", size: "18px", lineHeight: "24px", letterSpacing: "-1%" },
  { token: "font.heading.small", weight: "Medium", size: "18px", lineHeight: "24px", letterSpacing: "-1%" },
  { token: "font.title.large", weight: "SemiBold", size: "16px", lineHeight: "22px", letterSpacing: "-0.12%" },
  { token: "font.title.medium", weight: "Medium", size: "16px", lineHeight: "22px", letterSpacing: "-0.12%" },
  { token: "font.subtitle.medium", weight: "Medium", size: "14px", lineHeight: "20px", letterSpacing: "-0.3%" },
  { token: "font.caption.medium", weight: "Medium", size: "12px", lineHeight: "18px", letterSpacing: "-0.4%" },
  { token: "font.caption.regular", weight: "Regular", size: "12px", lineHeight: "18px", letterSpacing: "-0.4%" },
];

export const spacingRows = [
  { token: "space.0", multiplier: "0×", rem: "0rem", px: "0px" },
  { token: "space.025", multiplier: "0.25×", rem: "0.125rem", px: "2px" },
  { token: "space.050", multiplier: "0.5×", rem: "0.25rem", px: "4px" },
  { token: "space.075", multiplier: "0.75×", rem: "0.375rem", px: "6px" },
  { token: "space.100", multiplier: "1×", rem: "0.5rem", px: "8px" },
  { token: "space.150", multiplier: "1.5×", rem: "0.75rem", px: "12px" },
  { token: "space.200", multiplier: "2×", rem: "1rem", px: "16px" },
  { token: "space.250", multiplier: "2.5×", rem: "1.25rem", px: "20px" },
  { token: "space.300", multiplier: "3×", rem: "1.5rem", px: "24px" },
  { token: "space.400", multiplier: "4×", rem: "2rem", px: "32px" },
  { token: "space.500", multiplier: "5×", rem: "2.5rem", px: "40px" },
  { token: "space.600", multiplier: "6×", rem: "3rem", px: "48px" },
  { token: "space.800", multiplier: "8×", rem: "4rem", px: "64px" },
  { token: "space.1000", multiplier: "10×", rem: "5rem", px: "80px" },
];

export const contrastRows = [
  { level: "AA", large: "3:1 (매직넘버: 40)", normal: "4.5:1 (매직넘버: 50)", note: "최소" },
  { level: "AAA", large: "4.5:1 (매직넘버: 50)", normal: "7:1 (매직넘버: 70)", note: "강화" },
];

export const lightPalettes = [
  {
    name: "Orange",
    token: "orange",
    colors: [
      { step: 50, hex: "#FFF7ED" },
      { step: 100, hex: "#FFEDD5" },
      { step: 200, hex: "#FED7AA" },
      { step: 300, hex: "#FDBA74" },
      { step: 400, hex: "#FB923C" },
      { step: 500, hex: "#F97316" },
    ],
  },
  {
    name: "Yellow",
    token: "yellow",
    colors: [
      { step: 100, hex: "#FFF8E3" },
      { step: 200, hex: "#FFECB8" },
      { step: 300, hex: "#FFE08C" },
      { step: 400, hex: "#FFD560" },
      { step: 500, hex: "#FFB700" },
    ],
  },
  {
    name: "Gray",
    token: "gray",
    colors: [
      { step: 200, hex: "#F4F4F4" },
      { step: 300, hex: "#E5E5E5" },
      { step: 400, hex: "#D5D5D5" },
      { step: 450, hex: "#C9C9C9" },
      { step: 500, hex: "#AAAAAA" },
      { step: 600, hex: "#888888" },
      { step: 700, hex: "#666666" },
      { step: 800, hex: "#222222" },
      { step: 900, hex: "#252425" },
    ],
  },
];

export const darkPalettes = [
  {
    name: "Orange",
    token: "orange",
    colors: [
      { step: 50, hex: "#4A1F0A" },
      { step: 100, hex: "#5C2A0D" },
      { step: 200, hex: "#7A3A12" },
      { step: 300, hex: "#9A4E18" },
      { step: 400, hex: "#C2641F" },
      { step: 500, hex: "#F97316" },
    ],
  },
  {
    name: "Yellow",
    token: "yellow",
    colors: [
      { step: 100, hex: "#4A3B00" },
      { step: 200, hex: "#665200" },
      { step: 300, hex: "#806600" },
      { step: 400, hex: "#A37F00" },
      { step: 500, hex: "#FFB700" },
    ],
  },
  {
    name: "Gray",
    token: "gray",
    colors: [
      { step: 200, hex: "#2A2A2A" },
      { step: 300, hex: "#3A3A3A" },
      { step: 400, hex: "#4A4A4A" },
      { step: 450, hex: "#5A5A5A" },
      { step: 500, hex: "#7A7A7A" },
      { step: 600, hex: "#9A9A9A" },
      { step: 700, hex: "#B5B5B5" },
      { step: 800, hex: "#D1D1D1" },
      { step: 900, hex: "#EDEDED" },
    ],
  },
];
export const accessibilityBad = [
  {
    id: "status",
    title: "상태 구분에 색상만 사용",
    description:
      "성공/오류 상태를 색상만으로 표현하면 적록색약 사용자에게 동일하게 보일 수 있습니다.",
    normal: [
      { label: "Error", color: "#F5003D" },
      { label: "Success", color: "#006B21" },
    ],
    colorBlind: [
      { label: "Error", color: "#706642" },
      { label: "Success", color: "#6F6513" },
    ],
  },

  {
    id: "chart",
    title: "차트 범례 색상 충돌",
    description:
      "차트 데이터가 색상만으로 구분되면 정보 해석이 어려워질 수 있습니다.",
    normal: [
      { label: "Series A", color: "#1476AD" },
      { label: "Series B", color: "#C154A7" },
    ],
    colorBlind: [
      { label: "Series A", color: "#5978B8" },
      { label: "Series B", color: "#6279B2" },
    ],
  },

  {
    id: "badge",
    title: "배지 및 태그 구분",
    description:
      "노랑과 연두 계열은 일부 사용자에게 거의 동일하게 인식될 수 있습니다.",
    normal: [
      { label: "Warning", color: "#E4DA3D" },
      { label: "Available", color: "#6BC679" },
    ],
    colorBlind: [
      { label: "Warning", color: "#CCBE74" },
      { label: "Available", color: "#E1C900" },
    ],
  },
];

export const colorBlindnessAlternatives = [
  {
    id: "red",
    name: "Red",
    before: {
      label: "Red",
      hex: "#FF0000",
      textColor: "#000000",
    },
    after: {
      label: "Vermilion",
      hex: "#D55E00",
      textColor: "#FFFFFF",
    },
    guidance:
      "빨간색은 초록색 또는 갈색과 혼동될 수 있으므로 주황 계열로 조정합니다.",
  },
  {
    id: "green",
    name: "Green",
    before: {
      label: "Green",
      hex: "#00FF00",
      textColor: "#000000",
    },
    after: {
      label: "Bluish Green",
      hex: "#009E73",
      textColor: "#FFFFFF",
    },
    guidance:
      "초록색은 빨간색 또는 갈색과 혼동될 수 있으므로 청록 계열로 조정합니다.",
  },
];
export function hexToRgba(hex, opacity) {
  const cleanHex = hex.replace("#", "");
  const bigint = parseInt(cleanHex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

const LIGHT_TEXT_ON = new Set(["#000000", "#0072B2", "#009E73", "#D55E00"]);

export function accessibleTextColor(hex) {
  return LIGHT_TEXT_ON.has(hex) ? "#FFFFFF" : "#191F28";
}

export function copyToClipboard(value, announce) {
  if (!navigator.clipboard?.writeText) return;
  navigator.clipboard.writeText(value);
  if (announce) announce(`${value} copied to clipboard`);
}

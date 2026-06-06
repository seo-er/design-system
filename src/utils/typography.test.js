import { describe, it, expect } from "vitest";
import { fontWeightFromLabel } from "../utils/typography";

describe("fontWeightFromLabel", () => {
  it("maps design labels to CSS font weights", () => {
    expect(fontWeightFromLabel("SemiBold")).toBe(600);
    expect(fontWeightFromLabel("Medium")).toBe(500);
    expect(fontWeightFromLabel("Regular")).toBe(400);
  });

  it("falls back to regular weight for unknown labels", () => {
    expect(fontWeightFromLabel("Unknown")).toBe(400);
  });
});

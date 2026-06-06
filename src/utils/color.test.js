import { describe, it, expect } from "vitest";
import { accessibleTextColor } from "../utils/color";

describe("accessibleTextColor", () => {
  it("returns white text on dark brand colors", () => {
    expect(accessibleTextColor("#0072B2")).toBe("#FFFFFF");
    expect(accessibleTextColor("#009E73")).toBe("#FFFFFF");
  });

  it("returns dark text on light colors", () => {
    expect(accessibleTextColor("#F0E442")).toBe("#191F28");
    expect(accessibleTextColor("#56B4E9")).toBe("#191F28");
  });
});

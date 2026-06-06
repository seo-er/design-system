import { describe, it, expect } from "vitest";
import { useState } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AccessibleAccordion } from "./AccessibleAccordion";

const items = [
  { id: "a", title: "Section A", content: "Content A" },
  { id: "b", title: "Section B", content: "Content B" },
];

function AccordionDemo() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <AccessibleAccordion
      items={items}
      openIndex={openIndex}
      onToggle={setOpenIndex}
      idPrefix="demo"
    />
  );
}

describe("AccessibleAccordion", () => {
  it("exposes aria-expanded and aria-controls on triggers", async () => {
    const user = userEvent.setup();
    render(<AccordionDemo />);

    const triggerA = screen.getByRole("button", { name: "Section A" });
    expect(triggerA).toHaveAttribute("aria-expanded", "true");
    expect(triggerA.getAttribute("aria-controls")).toMatch(/panel-0$/);
    expect(screen.getByRole("region", { name: "Section A" })).toBeVisible();

    await user.click(screen.getByRole("button", { name: "Section B" }));

    expect(screen.getByRole("button", { name: "Section B" })).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("button", { name: "Section A" })).toHaveAttribute("aria-expanded", "false");
    expect(screen.getByRole("region", { name: "Section B" })).toBeVisible();
  });
});

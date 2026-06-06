import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { TokenTable } from "./TokenTable";

describe("TokenTable", () => {
  it("renders semantic table with caption and column headers", () => {
    render(
      <TokenTable
        caption="Spacing tokens"
        rows={[{ token: "space.100", px: "8px" }]}
        columns={[
          { id: "token", label: "Token" },
          { id: "px", label: "Pixels" },
        ]}
      />
    );

    expect(screen.getByRole("table", { name: "Spacing tokens" })).toBeInTheDocument();
    expect(screen.getByRole("columnheader", { name: "Token" })).toBeInTheDocument();
    expect(screen.getByRole("cell", { name: "space.100" })).toBeInTheDocument();
  });
});

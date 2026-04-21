import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SkipNav } from "@/components/layout/SkipNav";

describe("SkipNav", () => {
  it("renders a skip navigation link", () => {
    render(<SkipNav />);
    const link = screen.getByText("Skip to main content");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "#main-content");
  });

  it("is visually hidden by default and visible on focus", () => {
    render(<SkipNav />);
    const link = screen.getByText("Skip to main content");
    // Has the translate class that hides it off-screen
    expect(link.className).toContain("-translate-y-full");
    // Has focus styles that bring it back
    expect(link.className).toContain("focus:translate-y-0");
  });
});

describe("Accessibility - Landmarks", () => {
  it("skip nav link targets #main-content", () => {
    render(<SkipNav />);
    const link = screen.getByRole("link", { name: /skip to main content/i });
    expect(link).toHaveAttribute("href", "#main-content");
  });
});

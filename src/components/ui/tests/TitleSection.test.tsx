import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { TitleSectionProps } from "@type/types";
import TitleSection from "../TitleSection";

describe("TitleSection component", () => {
  const defaultProps: TitleSectionProps = {
    subtitle: "Test Subtitle",
    title: "Test Title",
  };

  test("renders the subtitle and title correctly", () => {
    render(<TitleSection {...defaultProps} />);

    const subtitleElement = screen.getByText("Test Subtitle");
    expect(subtitleElement).toBeInTheDocument();
    expect(subtitleElement).toHaveStyle("color: #e0a449");
    expect(subtitleElement).toHaveStyle("font-size: 1rem");

    const titleElement = screen.getByText("Test Title");
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveStyle("font-size: 32px");
    expect(titleElement).toHaveStyle("color: #333");
  });
});

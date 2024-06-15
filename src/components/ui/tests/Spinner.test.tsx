import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Spinner from "../Spinner/Spinner";

describe("Spinner component", () => {
  test("renders the spinner correctly", () => {
    const { getByTestId } = render(<Spinner />);
    const spinnerElement = getByTestId("spinner");

    expect(spinnerElement).toBeInTheDocument();
    expect(spinnerElement).toHaveStyle("border-left-color: #333");
  });

  test("renders the spinner wrapper correctly", () => {
    const { getByTestId } = render(<Spinner />);
    const spinnerWrapperElement = getByTestId("spinner-wrapper");

    expect(spinnerWrapperElement).toBeInTheDocument();
    expect(spinnerWrapperElement).toHaveStyle("display: flex");
    expect(spinnerWrapperElement).toHaveStyle("justify-content: center");
    expect(spinnerWrapperElement).toHaveStyle("align-items: center");
  });
});

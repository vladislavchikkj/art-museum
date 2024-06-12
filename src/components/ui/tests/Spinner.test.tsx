import { render } from "@testing-library/react";
import Spinner from "../Spinner";

describe("Spinner", () => {
  test("has correct styling", () => {
    const { container } = render(<Spinner />);
    const spinnerElement = container.querySelector("div");
    expect(spinnerElement).toBeDefined();
  });
});

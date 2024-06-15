import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { PaginationProps } from "@type/types";
import Pagination from "../pagination/pagination";

describe("Pagination component", () => {
  const defaultProps: PaginationProps = {
    currentPage: 2,
    totalPages: 5,
    onPageChange: jest.fn(),
  };

  test("renders pagination buttons correctly", () => {
    render(<Pagination {...defaultProps} />);

    expect(screen.getByText("‹")).toBeInTheDocument();
    expect(screen.getByText("›")).toBeInTheDocument();
    for (let i = 1; i <= defaultProps.totalPages; i++) {
      expect(screen.getByText(i.toString())).toBeInTheDocument();
    }
  });

  test("previous button is enabled when not on the first page", () => {
    render(<Pagination {...defaultProps} />);

    const prevButton = screen.getByText("‹");
    expect(prevButton).not.toBeDisabled();
  });

  test("previous button is disabled on the first page", () => {
    render(<Pagination {...defaultProps} currentPage={1} />);

    const prevButton = screen.getByText("‹");
    expect(prevButton).toBeDisabled();
  });

  test("next button is enabled when not on the last page", () => {
    render(<Pagination {...defaultProps} />);

    const nextButton = screen.getByText("›");
    expect(nextButton).not.toBeDisabled();
  });

  test("next button is disabled on the last page", () => {
    render(
      <Pagination {...defaultProps} currentPage={defaultProps.totalPages} />
    );

    const nextButton = screen.getByText("›");
    expect(nextButton).toBeDisabled();
  });

  test("calls onPageChange with the correct page when a page button is clicked", () => {
    const onPageChangeMock = jest.fn();
    render(<Pagination {...defaultProps} onPageChange={onPageChangeMock} />);

    const pageButton = screen.getByText("3");
    fireEvent.click(pageButton);

    expect(onPageChangeMock).toHaveBeenCalledWith(3);
  });
});

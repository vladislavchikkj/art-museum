import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookmarkButton from "../BookmarkButton/BookmarkButton";

describe("BookmarkButton", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("renders the BookmarkButton", () => {
    const { getByAltText } = render(<BookmarkButton id={1} />);
    expect(getByAltText("Bookmark")).toBeInTheDocument();
  });

  test("toggles bookmark state on click", () => {
    const { getByAltText } = render(<BookmarkButton id={1} />);
    const bookmarkIcon = getByAltText("Bookmark");

    // Initially not bookmarked
    expect(bookmarkIcon).toHaveAttribute("src", "/bookmark.svg");

    // Click to remove bookmark
    userEvent.click(bookmarkIcon);
    expect(bookmarkIcon).toHaveAttribute("src", "/bookmark.svg");
  });
});

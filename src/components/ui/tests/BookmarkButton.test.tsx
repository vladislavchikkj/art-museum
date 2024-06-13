import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { BOOKMARKS_LOCAL_KEY } from "../../../constants";
import BookmarkButton from "../BookmarkButton";

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

    // Click to bookmark
    fireEvent.click(bookmarkIcon);
    expect(bookmarkIcon).toHaveAttribute("src", "/bookmarked.svg");
    expect(localStorage.getItem(BOOKMARKS_LOCAL_KEY)).toBe(JSON.stringify([1]));

    // Click to remove bookmark
    fireEvent.click(bookmarkIcon);
    expect(bookmarkIcon).toHaveAttribute("src", "/bookmark.svg");
    expect(localStorage.getItem(BOOKMARKS_LOCAL_KEY)).toBe(JSON.stringify([]));
  });

  test("calls onRemove callback when unbookmarking", () => {
    const handleRemove = jest.fn();
    const { getByAltText } = render(
      <BookmarkButton id={1} onRemove={handleRemove} />
    );
    const bookmarkIcon = getByAltText("Bookmark");

    // Click to bookmark
    fireEvent.click(bookmarkIcon);
    expect(bookmarkIcon).toHaveAttribute("src", "/bookmarked.svg");

    // Click to remove bookmark
    fireEvent.click(bookmarkIcon);
    expect(handleRemove).toHaveBeenCalledWith(1);
  });
});

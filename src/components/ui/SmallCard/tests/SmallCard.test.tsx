import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { SmallCardProps } from "@type/types";
import { BrowserRouter as Router } from "react-router-dom";
import SmallCard from "../smallCard";

const mockProps: SmallCardProps = {
  id: 1,
  title: "Sample Title",
  author: "Sample Author",
  status: true,
  imageId: "sampleImageId",
  onRemove: jest.fn(),
};

describe("SmallCard", () => {
  test("renders the SmallCard with image", () => {
    const { getByAltText, getByText } = render(
      <Router>
        <SmallCard {...mockProps} />
      </Router>
    );

    // Check if the image is rendered
    const imageUrl = `https://www.artic.edu/iiif/2/${mockProps.imageId}/full/843,/0/default.jpg`;
    expect(getByAltText("img_card")).toHaveAttribute("src", imageUrl);

    // Check if title, author, and status are rendered
    expect(getByText("Sample Title")).toBeInTheDocument();
    expect(getByText("Sample Author")).toBeInTheDocument();
    expect(getByText("Public")).toBeInTheDocument();
  });

  test("renders the SmallCard without image", () => {
    const propsWithoutImage: SmallCardProps = { ...mockProps, imageId: null };
    const { getByText } = render(
      <Router>
        <SmallCard {...propsWithoutImage} />
      </Router>
    );

    // Check if "No Image" is rendered
    expect(getByText("No Image")).toBeInTheDocument();
  });

  test("renders the BookmarkButton component", () => {
    const { getByAltText } = render(
      <Router>
        <SmallCard {...mockProps} />
      </Router>
    );

    // Check if BookmarkButton is rendered
    expect(getByAltText("Bookmark")).toBeInTheDocument();
  });
});

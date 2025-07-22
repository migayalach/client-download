import { render, screen } from "@testing-library/react";
import Picture from "@/components/picture/Picture";

describe("<Picture { imgVideo }/>", () => {
  it("Sample of a rendered image", () => {
    render(<Picture imgVideo="image.jpg" />);
    const imageElement = screen.getByAltText("video-image");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", "image.jpg");
  });
});

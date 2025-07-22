import { render, screen } from "@testing-library/react";
import { About } from "@/components";
import { info } from "@/mocks/instruction";
import { ImgHTMLAttributes } from "react";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: ImgHTMLAttributes<HTMLImageElement>) => <img {...props} />,
}));

describe("<About/>", () => {
  it("This component represents three elements Image, h1 and p.", () => {
    render(<About />);
    expect(screen.getByAltText(info[0].title)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: info[0].title })
    ).toBeInTheDocument();
    expect(screen.getByText(info[0].description)).toBeInTheDocument();
  });
});

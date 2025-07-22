import { render, screen } from "@testing-library/react";
import Text from "@/components/text/Text";

describe("<Text { number, text }/>", () => {
  it("Sample number and text to render", () => {
    render(<Text number={1} text="Hello world" />);
    const numberTextElement = screen.getByText("1 :");
    const textElement = screen.getByText("Hello world");
    expect(numberTextElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
  });
});

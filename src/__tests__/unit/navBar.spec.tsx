import { fireEvent, render, screen } from "@testing-library/react";
import { NavBar } from "@/components";

describe("<NavBar />", () => {
  it("Title in the navigation component.", () => {
    render(<NavBar />);
    const titleTextElement = screen.getByText("CodeReview");
    expect(titleTextElement).toBeInTheDocument();
  });

  it("CodeReview has the id '#find'", () => {
    render(<NavBar />);
    const titleTextElement = screen.getByText("CodeReview");
    expect(titleTextElement).toHaveAttribute("id", "#find");
  });

  it("Navigation options in the component", () => {
    render(<NavBar />);
    const findTextElement = screen.getByText("Find");
    const instructionsTextElement = screen.getByText("Instructions");
    const aboutTextElement = screen.getByText("About");
    expect(findTextElement).toBeInTheDocument();
    expect(instructionsTextElement).toBeInTheDocument();
    expect(aboutTextElement).toBeInTheDocument();
  });

  it("Changes the style of the link when clicked", () => {
    render(<NavBar />);
    const aboutLink = screen.getByText("About");
    fireEvent.click(aboutLink);
    expect(aboutLink).toHaveClass("bg-white");
    expect(aboutLink).toHaveClass("text-black");
  });

  it("Represents the correct number of links", () => {
    render(<NavBar />);
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(4);
  });
});

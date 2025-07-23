import { render, screen } from "@testing-library/react";
import { Instructions } from "@/components";

describe("<Instructions />", () => {
  let container: HTMLElement;

  beforeEach(() => {
    const renderResult = render(<Instructions />);
    container = renderResult.container;
  });

  it("Render container divs", () => {
    const divContainerElements = container.querySelectorAll("div");
    expect(divContainerElements.length).toBe(13);
  });

  it("Render Child", () => {
    const pChildElement = container.querySelectorAll("p");
    const spanChildElement = container.querySelectorAll("span");
    expect(pChildElement.length).toBe(10);
    expect(spanChildElement.length).toBe(10);
  });

  it("Renders all <h1> titles", () => {
    const h1Elements = screen.getAllByRole("heading", { level: 1 });
    expect(h1Elements.length).toBe(2);
  });

  it("Renders main containers by ID", () => {
    const divInstructionsElement = container.querySelector("#instructions");
    const divContainerOneElement = container.querySelector("#container-1");
    const divContainerTwoElement = container.querySelector("#container-2");
    expect(divInstructionsElement).toBeInTheDocument();
    expect(divContainerOneElement).toBeInTheDocument();
    expect(divContainerTwoElement).toBeInTheDocument();
  });

  it("Creating title one", () => {
    const titleOneElement = screen.getByText(
      "How to download videos or music from YouTube?"
    );
    expect(titleOneElement).toBeInTheDocument();
  });

  it("Creating title two", () => {
    const titleTwoElement = screen.getByText("Characteristics:");
    expect(titleTwoElement).toBeInTheDocument();
  });

  it("Renders child texts from textAbout1", () => {
    const textOne = screen.getByText("Open your browser and visit YouTube.");
    const textTwo = screen.getByText(
      "Copy and paste the video link into the search box."
    );
    const textTree = screen.getByText("Press start.");
    const textFour = screen.getByText(
      "Select an MP3 or MP4 format and select a quality to download."
    );
    const textFive = screen.getByText(
      "The conversion process will take a few seconds to complete."
    );
    const textSix = screen.getByText(
      "Click the Download button and save it to your device."
    );
    expect(textOne).toBeInTheDocument();
    expect(textTwo).toBeInTheDocument();
    expect(textTree).toBeInTheDocument();
    expect(textFour).toBeInTheDocument();
    expect(textFive).toBeInTheDocument();
    expect(textSix).toBeInTheDocument();
  });

  it("Renders child texts from textAbout2", () => {
    const textOne = screen.getByText("Download videos and audio easily.");
    const textTwo = screen.getByText(
      "You can choose your favorite formats such as MP3, MP4, HD o Full HD."
    );
    const textTree = screen.getByText(
      "Convert videos and MP3s with high-speed quality."
    );
    const textFour = screen.getByText(
      "No software or application installation is required."
    );
    expect(textOne).toBeInTheDocument();
    expect(textTwo).toBeInTheDocument();
    expect(textTree).toBeInTheDocument();
    expect(textFour).toBeInTheDocument();
  });

  it("Doesn't repeat renders texts from textAbout1 ", () => {
    const textOne = screen.getAllByText("Open your browser and visit YouTube.");
    const textTwo = screen.getAllByText(
      "Copy and paste the video link into the search box."
    );
    const textTree = screen.getAllByText("Press start.");
    const textFour = screen.getAllByText(
      "Select an MP3 or MP4 format and select a quality to download."
    );
    const textFive = screen.getAllByText(
      "The conversion process will take a few seconds to complete."
    );
    const textSix = screen.getAllByText(
      "Click the Download button and save it to your device."
    );
    expect(textOne.length).toBeGreaterThan(0);
    expect(textTwo.length).toBeGreaterThan(0);
    expect(textTree.length).toBeGreaterThan(0);
    expect(textFour.length).toBeGreaterThan(0);
    expect(textFive.length).toBeGreaterThan(0);
    expect(textSix.length).toBeGreaterThan(0);
  });

  it("Don't repeat renders texts from textAbout2 ", () => {
    const textOne = screen.getAllByText("Download videos and audio easily.");
    const textTwo = screen.getAllByText(
      "You can choose your favorite formats such as MP3, MP4, HD o Full HD."
    );
    const textTree = screen.getAllByText(
      "Convert videos and MP3s with high-speed quality."
    );
    const textFour = screen.getAllByText(
      "No software or application installation is required."
    );
    expect(textOne.length).toBeGreaterThan(0);
    expect(textTwo.length).toBeGreaterThan(0);
    expect(textTree.length).toBeGreaterThan(0);
    expect(textFour.length).toBeGreaterThan(0);
  });
});

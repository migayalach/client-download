import { render, screen, fireEvent } from "@testing-library/react";
import ButtonDownload from "@/components/search/buttonDownload/ButtonDownload";

describe("<ButtonDownload />", () => {
  let container: HTMLElement;

  beforeEach(() => {
    const renderResults = render(
      <ButtonDownload url="fake-url" quality="high" format="mp3" />
    );
    container = renderResults.container;
  });

  describe("1 Render elements", () => {
    it("Render container div", () => {
      expect(container.querySelectorAll("div").length).toBe(1);
    });

    it("Render button", () => {
      const buttonElement = screen.getByRole("button");
      expect(buttonElement).toBeInTheDocument();
    });

    it("Number of buttons", () => {
      expect(container.querySelectorAll("button").length).toBe(1);
    });
  });

  describe("2 <Button /> ", () => {
    it("Render Text", () => {
      const textButtonElement = screen.getByRole("button", {
        name: /Download/i,
      });
      expect(textButtonElement).toBeInTheDocument();
    });

    it("Onclick Button, render modal", () => {
      const textButtonElement = screen.getByRole("button", {
        name: /Download/i,
      });
      fireEvent.click(textButtonElement);
      const modalTitle = screen.getByText(
        /Please wait a moment, your song is downloading./i
      );
      expect(modalTitle).toBeInTheDocument();
    });
  });
});

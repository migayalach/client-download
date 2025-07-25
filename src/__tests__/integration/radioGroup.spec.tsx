import RadioGroup from "@/components/search/radioGroup/RadioGroup";
import { screen, render, act } from "@testing-library/react";

beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});

describe("<RadioGroup />", () => {
  let container: HTMLElement;

  beforeEach(() => {
    const renderResults = render(<RadioGroup url="fake-url" />);
    container = renderResults.container;
  });

  describe("1.- Render elements", () => {
    it("Render container div", () => {
      expect(container.querySelectorAll("div").length).toBe(12);
    });

    it("Render Radio.Group", () => {
      const radioElement = screen.getByTestId("radio-group");
      expect(radioElement).toBeInTheDocument();
    });

    it("Render Child - TableData", () => {
      const tableElement = screen.getByRole("table");
      expect(tableElement).toBeInTheDocument();
    });
  });

  describe("2.- Radio action", () => {
    it("Render for default with mp3", () => {
      const mp3Radio = screen.getByRole("radio", { name: /mp3/i });
      expect(mp3Radio).toBeChecked();
    });

    it("Change select to mp4", () => {
      const mp4Radio = screen.getByRole("radio", { name: /mp4/i });
      act(() => {
        mp4Radio.click();
      });
      expect(mp4Radio).toBeChecked();
    });

    it("MP3 is not selected", () => {
      const mp4Radio = screen.getByRole("radio", { name: /mp4/i });
      act(() => {
        mp4Radio.click();
      });
      expect(mp4Radio).toBeChecked();
      const mp3Radio = screen.getByRole("radio", { name: /mp3/i });
      expect(mp3Radio).not.toBeChecked();
    });
  });

  describe("3.- Render child <TableData />", () => {
    it("There are columns with titles", () => {
      const tableTitles = screen
        .getAllByRole("columnheader")
        .map((index) => index.textContent);
      expect(tableTitles).toEqual(["Quality", "Format", "Action"]);
    });
  });
});

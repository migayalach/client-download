import { render, screen } from "@testing-library/react";
import Find from "@/components/search/find/Find";

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

describe("<Find />", () => {
  let container: HTMLElement;

  beforeEach(() => {
    const renderResults = render(<Find />);
    container = renderResults.container;
  });

  describe("1.- Render elements", () => {
    it("Render container div", () => {
      expect(container.querySelectorAll("div").length).toBe(2);
    });

    it("Render Search", () => {
      const searchElement = screen.getByTestId("search-data");
      expect(searchElement).toBeInTheDocument();
    });

    it("Container <Picture /> && <RadioGroup />", () => {
      const containerElement = screen.getByTestId("container-div-data");
      expect(containerElement).toBeInTheDocument();
    });
  });
});

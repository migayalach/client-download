import { render, screen } from "@testing-library/react";
import TableData from "@/components/search/tableData/TableData";

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

describe("<TableData />", () => {
  let container: HTMLElement;

  beforeEach(() => {
    const renderResult = render(
      <TableData
        format="mp4"
        url="https://www.youtube.com/watch?v=CdXesX6mYUE&list=RDCdXesX6mYUE"
      />
    );
    container = renderResult.container;
  });

  describe("1. Render Elements table", () => {
    it("Render container div", () => {
      expect(container.querySelectorAll("div").length).toBe(12);
    });

    it("Render table", () => {
      const tableElement = screen.getByRole("table");
      expect(tableElement).toBeInTheDocument();
    });

    it("Render table elements", () => {
      const headers = screen
        .getAllByRole("columnheader")
        .map((index) => index.textContent);
      expect(headers).toEqual(["Quality", "Format", "Action"]);
    });
  });
});

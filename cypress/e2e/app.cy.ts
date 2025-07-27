describe("App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  describe("1.- View rendering all text of App.", () => {
    it("Should display the title", () => {
      cy.get("h1")
        .contains("Donwload your favorites videos")
        .should("be.visible");
    });

    it("Should display the footer.", () => {
      cy.get("p").contains("@ 2025 CodeReview").should("be.visible");
    });
  });

  describe("2.- Check if the Render Search component.", () => {
    it("The user enters the link.", () => {
      cy.get('input[placeholder="Please introduce your link"]').type(
        "https://youtube.com/...{enter}"
      );
    });

    it("Show table", () => {
      cy.get('[data-testid="search-data"]').type(
        "https://www.youtube.com/watch?v=BSTzjGGeG4s{enter}"
      );
      cy.get("table", { timeout: 10000 }).should("be.visible");
    });

    it("Unshow table with formats and clean the filter", () => {
      cy.get('input[placeholder="Please introduce your link"]')
        .clear()
        .should("have.value", "");
    });
  });
});

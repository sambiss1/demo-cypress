import cy from "./cy";

describe("visit about page", () => {
  it("if it redirect to about page", () => {
    cy.get("[data-test-id='link--about']").click();
    cy.url().should.eql("about", "http://localhost:3001/about");
  });
});

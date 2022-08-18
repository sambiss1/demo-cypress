describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("/");
  });
});

describe("The About Page", () => {
  it("test redirect to about page", () => {
    cy.get(".link--about").click();
    cy.url().should("eq", "http://localhost:3001/about");
  });
});

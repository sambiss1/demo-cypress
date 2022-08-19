describe("Home Page", () => {
  it("successfully loads", () => {
    cy.visit("/");
  });
});

describe("About Page", () => {
  it("Test if user can visit about page", () => {
    cy.get(".link--about").click();
    cy.url().should("eq", "http://localhost:3001/about");
  });
});

describe("Services Page", () => {
  it("Test if user can visit services page", () => {
    cy.get(".link--services").click();
    cy.url().should("eq", "http://localhost:3001/services");
  })
})

describe("Contact Page", () => {
  it("Test if user can visit contact page", () => {
    cy.get(".link--contact").click()
    cy.url().should("eq", "http://localhost:3001/contact")
  })
})

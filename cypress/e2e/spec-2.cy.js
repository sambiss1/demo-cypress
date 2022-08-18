// import cy from './cy';
import NavBar from "../../src/components/NavBar";

describe("visit about page", () => {
  it("if it redirect to about page", () => {
    cy.get(".link--about").click();
    cy.url().should("about", "http://localhost:3001/about");
  });
});

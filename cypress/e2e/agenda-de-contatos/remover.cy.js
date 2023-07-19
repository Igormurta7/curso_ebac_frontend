/// <reference types="cypress" />

describe("Tests to remove a contact", () => {
  let initialCount;
  let finalCount;
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app");
  });

  it("Should delete a contact", () => {
    cy.get(".sc-beqWaB").then((value) => {
      initialCount = Cypress.$(value).length;
      cy.get(":nth-child(2) > .sc-gueYoa > .delete").first().click();
      cy.wait(2000);
      cy.get(".sc-beqWaB").then((value2) => {
        finalCount = Cypress.$(value2).length;
        expect(finalCount).to.equal(initialCount - 1);
      });
    });
  });
});

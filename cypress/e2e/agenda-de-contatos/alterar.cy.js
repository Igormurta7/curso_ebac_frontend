/// <reference types="cypress" />

describe("Tests to edit a contact", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app");
  });

  it("Should enter the contact editing mode", () => {
    cy.get(".edit").first().click();
  });

  it("Should replace the information in the fields", () => {
    cy.get(".edit").first().click();
    cy.get('[type="text"]').clear().type("Igor Murta");
    cy.get('[type="email"]').clear().type("igormurta@test.com");
    cy.get('[type="tel"]').clear().type("111222333");
    cy.get(".alterar").click();
    cy.get(".sc-iAEyYk > :nth-child(2)").should("contain", "Igor Murta");
    cy.get(".sc-iAEyYk > :nth-child(2)").should(
      "contain",
      "igormurta@test.com"
    );
    cy.get(".sc-iAEyYk > :nth-child(2)").should("contain", "111222333");
  });
});

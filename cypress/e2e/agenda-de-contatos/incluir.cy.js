/// <reference types="cypress" />

describe("Test to include a new contact", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app");
  });

  it("Should fill in the field for the new contact", () => {
    cy.get('[type="text"]').type("Igor Murta");
    cy.get('[type="email"]').type("igormurta7@gmail.com");
    cy.get('[type="tel"]').type("111222333");
    cy.get(".adicionar").click();
    cy.get(".sc-iAEyYk").should("contain", "Igor Murta");
    cy.get(".sc-iAEyYk").should("contain", "igormurta7@gmail.com");
    cy.get(".sc-iAEyYk").should("contain", "111222333");
  });
});

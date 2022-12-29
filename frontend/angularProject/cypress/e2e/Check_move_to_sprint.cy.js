describe("Check moving to sprint", () => {
  Cypress.config("experimentalSessionSupport", true);
  afterEach(() => {
    cy.saveLocalStorage();
  });

  beforeEach(() => {
    cy.login("admin", "admin");
    cy.visit("");
    cy.get(".app-header-button").should("exist").click();
  });

  it("Check url", () => {
    cy.url().should("eq", "http://localhost:4200/product-backlog");
  });

  it("Move task", () => {
    cy.get(
      ".product-backlog-content > :nth-child(2) > product-backlog-task > .container > .mat-menu-trigger"
    )
      .should("exist")
      .click();
    cy.get(".mat-menu-content > :nth-child(3)").click();
    cy.get(
      ".mat-form-field-type-mat-input > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix"
    )
      .should("exist")
      .type("zmienione zadanie");
    cy.get(
      ".mat-form-field-type-mat-select > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix"
    )
      .click()
      .get("#mat-option-1 > .mat-option-text")
      .click();
    cy.get(".form-container-button").click();
    cy.get(':nth-child(4) > ul > :nth-child(5) > product-backlog-task > .container').should('exist').get('.task-name').contains('nazwa zadania 1')
  });
});

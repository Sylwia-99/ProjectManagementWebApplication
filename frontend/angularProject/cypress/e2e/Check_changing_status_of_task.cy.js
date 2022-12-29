describe("Check changing status of task", () => {
  Cypress.config("experimentalSessionSupport", true);
  afterEach(() => {
    cy.saveLocalStorage();
  });

  beforeEach(() => {
    cy.login("admin", "admin");
    cy.visit("");
    cy.get(".app-header-button").should("exist").click();
  });

  it("Go to Sprint 1", () => {
    cy.url().should("eq", "http://localhost:4200/product-backlog");
    cy.get(":nth-child(5) > .sprint-label").should("exist").click();
  });

  it("Check if button to change status exist - chnage status of task and check it", () => {
    cy.get(":nth-child(5) > .sprint-label").should("exist").click();
    cy.get(
      ":nth-child(4) > status-column-task.ng-star-inserted > .task-container > .task-container--header > .mat-menu-trigger > img"
    )
      .should("exist")
      .click();
    cy.contains("Zmień status zadania").should("exist").click();
    cy.get(
      ".mat-form-field.ng-tns-c85-33 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix"
    )
      .should("exist")
      .click()
      .get("#mat-option-7 > .mat-option-text")
      .click();
    cy.get(".form-container-button").should("exist").click();
    cy.get(
      ":nth-child(4) > status-column-task.ng-star-inserted > .task-container"
    ).should("exist");
  });
});

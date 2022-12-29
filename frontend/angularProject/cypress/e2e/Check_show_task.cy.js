describe("Check showing task", () => {
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

  it("Show task", () => {
    cy.get(":nth-child(4) > .sprint-label").click();
    cy.get(
      ":nth-child(4) > status-column-task.ng-star-inserted > .task-container > .task-container--header > .mat-menu-trigger > img"
    )
      .should("exist")
      .click();
    cy.contains("Pokaż zadanie").should("exist").click();
    cy.get("#mat-dialog-0 > .ng-star-inserted")
      .children()
      .should("contain", "Opis")
      .and("contain", "Acceptance Criteria")
      .and("contain", "Osoba przypisana")
      .and("contain", "Story Points")
      .and("contain", "Status");
  });
});

describe("Check sprint page", () => {
  afterEach(() => {
    cy.clearLocalStorage();
  });

  beforeEach(() => {
    cy.login("admin", "admin");
    cy.visit("");
    cy.get(".app-header-button").should("exist").click();
  });

  it("Go to product backlog", () => {
    cy.url().should("eq", "http://localhost:4200/product-backlog");
  });

  it("Go to sprint", () => {
    cy.get(":nth-child(4) > .sprint-label").should("exist").click();
    cy.get(
      ":nth-child(3) > status-column-task.ng-star-inserted > .task-container > .task-container--header > .task-name"
    ).should("exist");
    cy.get(
      ":nth-child(3) > status-column-task.ng-star-inserted > .task-container > .task-container--description"
    ).should("exist");
    cy.get(
      ":nth-child(3) > status-column-task.ng-star-inserted > .task-container > .task-container--header > .mat-menu-trigger > img"
    ).click();
    cy.get(".mat-menu-content")
      .children()
      .should("contain", "Zmień status zadania")
      .and("contain", "Pokaż zadanie");
  });
});

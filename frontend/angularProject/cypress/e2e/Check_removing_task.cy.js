describe("Check removing of task", () => {
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

  it("Delete task", () => {
    cy.get(
      ".product-backlog-content > :nth-child(2) > product-backlog-task > .container > .mat-menu-trigger"
    )
      .should("exist")
      .click();
    cy.get(".mat-menu-content > :nth-child(2)").click();
  });
});

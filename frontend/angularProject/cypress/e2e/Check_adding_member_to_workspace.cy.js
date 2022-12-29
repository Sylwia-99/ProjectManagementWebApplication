describe("Check adding member to workspace", () => {
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

  it("Adding member to workspace", () => {
    cy.get(
      ":nth-child(1) > product-backlog-workspace > :nth-child(1) > :nth-child(1) > .product-backlog-button > .mat-menu-trigger > img"
    )
      .should("exist")
      .click();
    cy.get(".mat-menu-content > :nth-child(3)")
      .contains("Dodaj członka")
      .click();
    cy.get(".mat-select-trigger")
      .click()
      .get("#mat-option-0 > .mat-option-text")
      .click();
    cy.get(".form-container-button").click();
  });
});

describe("Check main page", () => {
  afterEach(() => {
    cy.clearLocalStorage();
  });

  beforeEach(() => {
    cy.login("admin", "admin");
    cy.visit("");
  });

  it("Go to main page", () => {
    cy.url().should("eq", "http://localhost:4200/home");
  });

  it("Check profile options", () => {
    cy.get(".content > .mat-menu-trigger > img").should("exist").click();
    cy.contains("Wyloguj").should("exist");
  });

  it("Check if workspace list exist", () => {
    cy.get(".workspace-list > :nth-child(1)").should("exist");
  });

  it("Check if button to create workspace exist", () => {
    cy.get(".create-workspace-button").should("exist");
  });

  it("Check dropdwon in workspace", () => {
    cy.get(
      ":nth-child(1) > .workspace-card > .card-header > .mat-menu-trigger > img"
    )
      .should("exist")
      .click();
    cy.get(".mat-menu-content").contains("Product Backlog");
  });
});

describe("Check product backlog page", () => {
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

  it("Check profile options", () => {
    cy.get(".content > .mat-menu-trigger > img").should("exist").click();
    cy.contains("Wyloguj").should("exist");
  });

  it("Check if workspace list exist", () => {
    cy.get(
      ":nth-child(1) > product-backlog-workspace > :nth-child(1) > :nth-child(1) > .product-backlog-content"
    ).should("exist");
  });

  it("Check if it is possible to create new workspace", () => {
    cy.get(
      ":nth-child(1) > product-backlog-workspace > :nth-child(1) > :nth-child(1) > .product-backlog-button > .mat-menu-trigger > img"
    )
      .should("exist")
      .click();
    cy.contains("Utwórz nowe zadanie").should("exist");
    cy.contains("Dodaj Sprint").should("exist");
    cy.contains("Dodaj członka").should("exist");
  });

  it("Check if task list exist", () => {
    cy.get(".product-backlog-content").should("exist");
  });

  it("Check dropdown in particular task", () => {
    cy.get(
      ".product-backlog-content > :nth-child(2) > product-backlog-task > .container > .mat-menu-trigger > img"
    )
      .should("exist")
      .click();
    cy.contains("Edytuj").should("exist");
    cy.contains("Usuń").should("exist");
    cy.contains("Przenieś do sprintu").should("exist");
  });
});

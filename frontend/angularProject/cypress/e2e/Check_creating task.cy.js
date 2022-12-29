describe("Check creating task", () => {
  afterEach(() => {
    cy.clearLocalStorage();
  });

  beforeEach(() => {
    cy.login("admin", "admin");
    cy.visit("");
    cy.get(".app-header-button").should("exist").click();
    cy.get(
      ":nth-child(1) > product-backlog-workspace > :nth-child(1) > :nth-child(1) > .product-backlog-button > .mat-menu-trigger > img"
    )
      .should("exist")
      .click();
  });

  it("Go to product backlog", () => {
    cy.url().should("eq", "http://localhost:4200/product-backlog");
  });

  it("Check if Dodaj sprint exist", () => {
    cy.contains("Utwórz nowe zadanie").should("exist");
  });

  it("Add task - Check and fill form, Check if task is added", () => {
    cy.get(".mat-menu-content > :nth-child(1)").should("exist").click();
    cy.get("#mat-input-0").should("exist").focus().type("Testowe zadanie");
    cy.get("#mat-input-1")
      .should("exist")
      .focus()
      .type("Opis testowego zadania");
    cy.get("#mat-input-2").should("exist").focus().type("Kryteria");
    cy.get(
      ".mat-form-field.ng-tns-c85-25 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix"
    )
      .should("exist")
      .click()
      .get("#mat-option-0 > .mat-option-text")
      .click();
    cy.get("#mat-input-3").should("exist").focus().type("6");
    cy.get(
      ".mat-form-field.ng-tns-c85-28 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix"
    )
      .should("exist")
      .click()
      .get("#mat-option-6 > .mat-option-text")
      .click();
    cy.get(".form-container-button").should("exist").click();
    cy.get(
      ".product-backlog-content > :nth-child(4) > product-backlog-task > .container"
    ).contains("Testowe zadanie");
  });
});

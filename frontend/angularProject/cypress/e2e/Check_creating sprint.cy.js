describe("Check creating sprint", () => {
  // afterEach(() => {
  //   cy.clearLocalStorage()
  // });

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
    cy.contains("Dodaj Sprint").should("exist");
  });

  it("Add sprint - Check and fill form, Check if sprint is added", () => {
    cy.get(".mat-menu-content > :nth-child(2)").should("exist").click();
    cy.get("#mat-input-0").should("exist").focus().type("Testowy sprint");
    cy.get("#mat-input-1").should("exist").focus().type("Testowy sprint opis");
    cy.get(
      ".date-container > :nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix"
    )
      .should("exist")
      .scrollIntoView();
    cy.get(
      ":nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > .mat-datepicker-toggle > .mat-focus-indicator"
    )
      .click()
      .get("#mat-datepicker-0")
      .click();
    cy.get(
      ":nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > .mat-datepicker-toggle > .mat-focus-indicator > .mat-button-wrapper > .mat-datepicker-toggle-default-icon"
    )
      .click()
      .get("#mat-datepicker-1")
      .click();
    cy.get(".form-container-button").should("exist").click();
    cy.get(".product-backlog-content > :nth-child(6)").contains(
      "Testowy sprint"
    );
  });
});

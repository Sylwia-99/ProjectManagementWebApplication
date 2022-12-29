describe("Check creating workspace", () => {
  Cypress.config("experimentalSessionSupport", true);
  afterEach(() => {
    cy.saveLocalStorage();
  });

  beforeEach(() => {
    cy.login("admin", "admin");
    cy.visit("");
  });

  it("Check url", () => {
    cy.url().should("eq", "http://localhost:4200/home");
  });

  it("Create workspace", () => {
    cy.get(".create-workspace-button").should("exist").click();
    cy.get("#mat-input-0").should("exist").click().type("Testowa przestrzen");
    cy.get(
      ".description > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix"
    )
      .should("exist")
      .click()
      .type("Testowy opis");
    cy.get(".form-container-button").click();
    cy.get(".container").children().should("contain", "Testowa przestrzen");
  });
});

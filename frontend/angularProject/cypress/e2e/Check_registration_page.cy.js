describe("Check registration page", () => {
  afterEach(() => {
    cy.saveLocalStorage();
  });

  it("Open page.", () => {
    cy.viewportDesktop();
    cy.visit("");
  });

  it("Check if url is proper. Uncorrect name, surname, email", () => {
    cy.visitAndCheck();
    cy.get(".form-container-button-register").should("exist").click();
    cy.get("#firstName").should("exist").focus().type("ada23a");
    cy.get("#lastName").should("exist").focus().type("ada33a");
    cy.get("#email").should("exist").focus().type("ada####a");
    cy.get(".form-container-button").should("exist").click();
    cy.contains("Invalid email address.").should("exist");
    cy.contains("Proszę podać nazwę użytkownika.").should("exist");
    cy.contains("Proszę podać hasło.").should("exist");
  });

  it("Correct data without password", () => {
    cy.visitAndCheck();
    cy.get(".form-container-button-register").should("exist").click();
    cy.get("#firstName").clear().should("exist").focus().type("Adam");
    cy.get("#lastName").clear().should("exist").focus().type("Maly");
    cy.get("#email").clear().should("exist").focus().type("adam@maly.com");
    cy.get("#username")
      .clear()
      .should("exist")
      .focus()
      .type("adamkcsylwia02.02.1999");
    cy.get(".form-container-button").should("exist").click();
    cy.contains("Proszę podać hasło.").should("exist");
  });

  it("Correct data with uncorrect reapted password", () => {
    cy.visitAndCheck();
    cy.get(".form-container-button-register").should("exist").click();
    cy.get("#firstName").clear().should("exist").focus().type("Adam");
    cy.get("#lastName").clear().should("exist").focus().type("Maly");
    cy.get("#email").clear().should("exist").focus().type("adam@maly.com");
    cy.get("#username")
      .clear()
      .should("exist")
      .focus()
      .type("adamkcsylwia02.02.1999");
    cy.get("#password").clear().should("exist").focus().type("aaa");
    cy.get("#password-confirm").clear().should("exist").focus().type("aadddas");
    cy.get(".form-container-button").should("exist").click();
    cy.contains("Potwierdzenie hasła nie pasuje.").should("exist");
  });

  it("All correct data", () => {
    cy.visitAndCheck();
    cy.get(".form-container-button-register").should("exist").click();
    cy.get("#firstName").clear().should("exist").focus().type("Adam");
    cy.get("#lastName").clear().should("exist").focus().type("Maly");
    cy.get("#email").clear().should("exist").focus().type("adam@mjjafsdsldyssd.com");
    cy.get("#username")
      .clear()
      .should("exist")
      .focus()
      .type("adamkdcsylwjjifdsasd02sd.02.1999");
    cy.get("#password").clear().should("exist").focus().type("ddddddd");
    cy.get("#password-confirm").clear().should("exist").focus().type("ddddddd");
    cy.get(".form-container-button").should("exist").click();

    cy.url().should("eq", "http://localhost:4200/home");
  });
});

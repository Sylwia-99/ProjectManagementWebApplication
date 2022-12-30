describe("Check login page", () => {
  afterEach(() => {
    cy.saveLocalStorage();
  });

  it("Open page.", () => {
    cy.viewportDesktop();
    cy.visit("");
  });

  it("Check if url is proper. Uncorrect email - failure", () => {
    cy.url().then((url) => {
      cy.visit(url);
      cy.url().should(
        "include",
        "/auth/realms/master/protocol/openid-connect/"
      );
    });
    cy.get("#username").should("exist").focus().type("adaa");
    cy.get("#kc-login").click();
    cy.contains("Nieprawidłowa nazwa użytkownika lub hasło.").should("exist");
  });

  it("Check correct email, uncorrect password failure", () => {
    cy.url().then((url) => {
      cy.visit(url);
      cy.url().should(
        "include",
        "/auth/realms/master/protocol/openid-connect/"
      );
    });
    cy.get("#username").should("exist").clear().focus().type("admin");
    cy.get("#password").should("exist").focus().type("rower");
    cy.get("#kc-login").click();
    cy.contains("Nieprawidłowa nazwa użytkownika lub hasło.").should("exist");
  });

  it("Correct email and password", () => {
    cy.url().then((url) => {
      cy.visit(url);
      cy.url().should(
        "include",
        "/auth/realms/master/protocol/openid-connect/"
      );
    });
    cy.get("#username").should("exist").clear().focus().type("admin");
    cy.get("#password").should("exist").focus().type("admin");
    cy.get("#kc-login").click();
    cy.contains("Nieprawidłowa nazwa użytkownika lub hasło.").should(
      "not.exist"
    );
  });
});

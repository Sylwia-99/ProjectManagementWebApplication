/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

declare global {
  namespace Cypress {
    interface Chainable {
      viewportDesktop(): Chainable<void>;
      viewportMobile(): Chainable<void>;
      open(): Chainable<void>;
      visitAndCheck(): Chainable<void>;
      login(username: any, password: any): Chainable<void>;
    }
  }
}

import 'cypress-localstorage-commands';
// import "cypress-file-upload"
Cypress.Commands.add('viewportDesktop', () => {
  cy.viewport(1920, 1080);
});

Cypress.Commands.add('viewportMobile', () => {
  cy.viewport(375, 667);
});

Cypress.Commands.add('open', () => {
  cy.clearLocalStorage();
  cy.viewportDesktop();
  cy.visit('/');
  cy.visit('/login');
});

Cypress.Commands.add('visitAndCheck', () => {
  cy.url().then((url) => {
    cy.visit(url);
    cy.url().should('include', '/auth/realms/master/protocol/openid-connect/');
  });
});

Cypress.Commands.add('login', (username: string, password: string) => {
  cy.session([username, password], () => {
    cy.url().then((url) => {
      cy.visit(url);
      cy.url().should(
        'include',
        '/auth/realms/master/protocol/openid-connect/'
      );
    });
    cy.get('#username').should('exist').clear().focus().type(username);
    cy.get('#password').should('exist').focus().type(password);
    cy.get('#kc-login').click();
  });
});

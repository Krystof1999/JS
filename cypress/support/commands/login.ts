export {};
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * You will log in to the aplication
       * @param input none (there is no input)
       * @example
       * // this command
       * cy.login()
       * // will log you to the aplication
       * <input none />
       *
       */
      login(): Chainable<any>;
    }
  }
}

Cypress.Commands.add("login", () => {
  cy.log("YOU ARE LOOGGED IN");
});

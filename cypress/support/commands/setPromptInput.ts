export {};
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * You will log in to the aplication
       * @param input prompt input (word to be guessed)
       * @example
       * // this command
       * cy.setPromptInput('searchedWord')
       * // will log you to the aplication
       * <input 'searchedWord' />
       *
       */
      setPromptInput(): Chainable<any>;
    }
  }
}

Cypress.Commands.add("setPromptInput", (input: string) => {
  cy.visit("http://127.0.0.1:5500/HanngManOrWomanGame/index.html", {
    onBeforeLoad(win) {
      return cy.stub(win, "prompt").returns(`${input}`);
    },
  });
});

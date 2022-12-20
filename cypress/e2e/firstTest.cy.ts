it("First test", () => {
  // cy.visit("http://127.0.0.1:5500/HanngManOrWomanGame/index.html");
  // cy.login();

  // cy.window().then((win) => {
  //   cy.stub(win, "prompt").returns("Cy");
  // });

  // cy.visit("http://127.0.0.1:5500/HanngManOrWomanGame/index.html", {
  //   onBeforeLoad(win) {
  //     cy.stub(win, "prompt").returns("pes");
  //   },
  // });

  cy.setPromptInput("ahoj");
});

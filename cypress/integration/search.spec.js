context("searsh", () => {
  it("Enters whit CEP in input and tries click in button", () => {
    cy.visit("http://localhost:3000");
    cy.viewport(1440, 900);
    cy.get("[placeholder='Insira o CEP']").type(81630180);
    cy.contains("Buscar pelo CEP").click();
  });
});

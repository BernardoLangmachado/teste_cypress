describe('pagina de login',() => {

  it('Login com sucesso', () => {
    cy.visit('http://127.0.0.1:5500/login');

    //prencher os campos de login e senha
    cy.get('#usuario').type('admin');
    cy.get('#senha').type('admin');
    cy.get('#entrar').click();

    cy.on('window:alert',(txt) => {
      expect(txt).to.contains('Login feito');
    });

  });

  it('Login com erro',() =>{
    cy.visit('http://127.0.0.1:5500/login');

    cy.get('#usuario').type('12345');
    cy.get('#senha').type('errado');
    cy.get('#entrar').click()

    cy.get('#error').should('be.visible')
  });

});
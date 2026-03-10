describe('Funcionalidade: Contato', () => {
  it('Deve preencher formulário de contato com sucesso', () => {
    cy.visit('http://localhost:3000/index.html');
    cy.get('#name').type('Mikaella')
    cy.get('#email').type('mikaella@teste.com')
    cy.get('#subject').select('DúvidasParcerias')
    cy.get('#message').type('Mesagem de teste')
    cy.get('#btn-submit').click()
    //Resultado esperado 
    cy.contains('Contato enviado com sucesso!').should('exist')
  });

  it('Deve validar mensagem de erro ao enviar sem preencher nome', () => {


  });

  it('Deve validar mensagem de erro ao enviar sem preencher email', () => { });
  cy.visit('http://localhost:3000/index.html')
  cy.get('#name').type('Mikaella')
  cy.get('#email').type('mikaella@teste.com')
  cy.get('#subject').select('DúvidasParcerias')
  cy.get('#message').type('Mesagem de teste')
  cy.get('#btn-submit').click()
  //Resultado esperado 
  cy.contains('Contato enviado com sucesso!').should('exist')

  it('Deve validar mensagem de erro ao enviar sem selecionar assunto', () => { });

  it('Deve validar mensagem de erro ao enviar sem preencher a mensagem', () => { });

});
describe('Funcionalidade: Contato', () => {

  beforeEach(() => {
    cy.visit('index.html')
  });



  it('Deve preencher formulário de contato com sucesso', () => {
  cy.get('#name').type('João')
  cy.get('#email').type('joao@example.com')
  cy.get('#subject').select('Parcerias')
  cy.get('#message').type('Mensagem de teste')
  cy.get('#btn-submit').click()
  //Resultado esperado.
  cy.contains('Contato enviado com sucesso!').should('exist')
  });

  it('Deve validar mensagem de erro ao enviar sem preencher nome', () => {
  cy.get('#name').clear()
  cy.get('#email').type('joao@example.com')
  cy.get('#subject').select('Parcerias')
  cy.get('#message').type('Mensagem de teste')
  cy.get('#btn-submit').click()
  //Resultado esperado.
  cy.get('#alert-container').should('contain', 'Por favor, preencha o campo Nome')
  });

  it('Deve validar mensagem de erro ao enviar sem preencher email', () => {
  cy.get('#name').type('João')
  cy.get('#email').clear()
  cy.get('#subject').select('Parcerias')
  cy.get('#message').type('Mensagem de teste')
  cy.get('#btn-submit').click()
  //Resultado esperado.
  cy.get('#alert-container').should('contain', 'Por favor, preencha o campo E-mail')
  });

  it('Deve validar mensagem de erro ao enviar sem selecionar o assunto', () => {
  cy.get('#name').type('João')
  cy.get('#email').type('joao@example.com')
  //cy.get('#subject').select('Parcerias')
  cy.get('#message').type('Mensagem de teste')
  cy.get('#btn-submit').click()
  //Resultado esperado.
  cy.get('#alert-container').should('contain', 'Por favor, selecione o Assunto.')
  });

  it('Deve validar mensagem de erro ao enviar sem preencher a mensagem', () => {
  cy.get('#name').type('João')
  cy.get('#email').type('joao@example.com')
  cy.get('#subject').select('Parcerias')
  //cy.get('#message').type('Mensagem de teste') - aqui fazer comentario ou dar .clear
  cy.get('#btn-submit').click()
  //Resultado esperado.
  cy.get('#alert-container').should('contain', 'Por favor, escreva')
  });
});
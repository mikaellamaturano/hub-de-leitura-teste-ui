///<reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Funcionalidade: Cadastro no Hub de Leitura', () => {

    beforeEach(() => {
        cy.visit('register.html')
    });

    it('Deve fazer cadastro com sucesso, usando função JS', () => {
        let email = `mikaella${Date.now()}@email.com`
        cy.get('#name').type('Mikaella Maturano')
        cy.get('#email').type(email)
        cy.get('#phone').type('11998985432')
        cy.get('#password').type('Teste@123')
        cy.get('#confirm-password').type('Teste@123')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        //Resultado esperado
        cy.url().should('include', 'dashboard')


    });

    it('Deve fazer cadastro com sucesso, usando Faker', () => {
        let nome = faker.person.fullName()
        let email = faker.internet.email()
        let phone = faker.phone.number()
        let password = faker.internet.password({ length: 8, prefix: 'Teste@' })
        cy.get('#name').type(nome)
        cy.get('#email').type(email)
        cy.get('#phone').type(phone)
        cy.get('#password').type(password)
        cy.get('#confirm-password').type(password)
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        //Resultado esperado
        cy.url().should('include', 'dashboard')
        cy.get('#user-name').should('contain', nome)

    });

});
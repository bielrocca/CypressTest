/// <reference types="cypress" />

describe('Teste para Agenda', () => {
    beforeEach('Deve renderizar a Agenda de contatos', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve marcar um contato - Inclusão', () => {
        cy.get('input[type="text"]').type('Gabriel Lucas')
        cy.get('input[type="email"]').type('gabriel@cypress.com')
        cy.get('input[type="tel"]').type('11 999999999')
        cy.get('.adicionar').click()
    })

    it('Deve editar um contato - Alteração', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()

        cy.get('input[type="text"]').clear().type('Dora Aventureira')
        cy.get('input[type="email"]').clear().type('dora@cypress.com')
        cy.get('input[type="tel"]').clear().type('11 777777777')
        cy.get('.alterar').click()
    })

    it('Deve deletar um contato - Remoção', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
    })
});
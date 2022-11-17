/// <reference types="cypress" />


  beforeEach(() => {
    cy.visit('https://qa-fe-pca.randstad.com.br/#/login')
  })

  describe('.then()', () => {
    it('invokes a callback function with the current subject', () => {
      cy.get('#onetrust-accept-btn-handler').click()
      cy.get('#mat-input-0').type("yiwaleg930@kixotic.com")
      cy.get('#mat-input-1').type("Teste123")
      cy.get('.mat-raised-button').click()
        })
    })

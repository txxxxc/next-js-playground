/// <reference types="cypress" />

describe('example to-do app4', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://localhost:3000')
  })

  it('login1', () => {
    cy.get('input[name="username"]').type('admin')
    cy.get('input[name="password"]').type('admin')
    cy.get('button[type="button"]').click()
    cy.get('p').should('contain', 'Logged in as admin!!')
  })


  it('login2', () => {
    cy.get('input[name="username"]').type('admin')
    cy.get('input[name="password"]').type('admin')
    cy.get('button[type="button"]').click()
    cy.get('p').should('contain', 'Logged in as admin!!')
  })

  it('login3', () => {
    cy.get('input[name="username"]').type('admin')
    cy.get('input[name="password"]').type('admin')
    cy.get('button[type="button"]').click()
    cy.get('p').should('contain', 'Logged in as admin!!')
  })

  it('login4', () => {
    cy.get('input[name="username"]').type('admin')
    cy.get('input[name="password"]').type('admin')
    cy.get('button[type="button"]').click()
    cy.get('p').should('contain', 'Logged in as admin!!')
  })

  it('login5', () => {
    cy.get('input[name="username"]').type('admin')
    cy.get('input[name="password"]').type('admin')
    cy.get('button[type="button"]').click()
    cy.get('p').should('contain', 'Logged in as admin!!')
  })

  it('login6', () => {
    cy.get('input[name="username"]').type('admin')
    cy.get('input[name="password"]').type('admin')
    cy.get('button[type="button"]').click()
    cy.get('p').should('contain', 'Logged in as admin!!')
  })

  it('login7', () => {
    cy.get('input[name="username"]').type('admin')
    cy.get('input[name="password"]').type('admin')
    cy.get('button[type="button"]').click()
    cy.get('p').should('contain', 'Logged in as admin!!')
  })

  it('login8', () => {
    cy.get('input[name="username"]').type('admin')
    cy.get('input[name="password"]').type('admin')
    cy.get('button[type="button"]').click()
    cy.get('p').should('contain', 'Logged in as admin!!')
  })

  it('login9', () => {
    cy.get('input[name="username"]').type('admin')
    cy.get('input[name="password"]').type('admin')
    cy.get('button[type="button"]').click()
    cy.get('p').should('contain', 'Logged in as admin!!')
  })

  it('login10', () => {
    cy.get('input[name="username"]').type('admin')
    cy.get('input[name="password"]').type('admin')
    cy.get('button[type="button"]').click()
    cy.get('p').should('contain', 'Logged in as admin!!')
  })

})

import { loginPageElements } from "../../pages/loginpageel"

//<reference types="Cypress"/> 

const usera = Cypress.env('username')
const heslo = Cypress.env('password')


const Login_Page = new loginPageElements

describe('template spec', function()  {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })


  it('Log in with valid', () => {
    
    Login_Page.username(usera)
    Login_Page.password(heslo)
    Login_Page.LoginButton()
    cy.url().should('eq', 'http://localhost:3000/home')
    cy.contains('Go to Form Page')

  })

  it('Log in with invalid', () => {
    Login_Page.username('admi')
    Login_Page.password('passwordinvalid')
    Login_Page.LoginButton()
    cy.url().should('eq', 'http://localhost:3000/')

    cy.contains("Invalid credentials. Please try again.")

  })

  it('Log in with missing', () => {
    Login_Page.LoginButton()
    cy.get('input:invalid').should('have.length', 2)
      cy.get(Login_Page.username_text).then(($input) => {
        expect($input[0].validationMessage).to.eq('Vyplňte prosím toto pole.')
      })

  })

  it('Log in with missing username', () => {
    Login_Page.password(heslo)
    Login_Page.LoginButton()
    cy.get('input:invalid').should('have.length', 1)
      cy.get(Login_Page.username_text).then(($input) => {
        expect($input[0].validationMessage).to.eq('Vyplňte prosím toto pole.')

    })
  })

  it('Log in with missing password', () => {
    Login_Page.username(usera)
    Login_Page.LoginButton()
    cy.get('input:invalid').should('have.length', 1)
      cy.get(Login_Page.password_text).then(($input) => {
        expect($input[0].validationMessage).to.eq('Vyplňte prosím toto pole.')

    })
  })
})
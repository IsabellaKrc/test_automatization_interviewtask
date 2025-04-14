import { loginPageElements } from "../../pages/loginpageel"

//<reference types="Cypress"/> 

const usera = Cypress.env('username')
const heslo = Cypress.env('password')

const Login_Page = new loginPageElements

describe('template spec', function()  {
  
  it('Log in', () => {
    cy.visit('http://localhost:3000/')
    Login_Page.username(usera)
    Login_Page.password(heslo)
    Login_Page.LoginButton()

  })
})
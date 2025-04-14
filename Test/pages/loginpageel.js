export class loginPageElements{
    
    username_text='[data-cy="username-input"]'
    password_text='[data-cy="password-input"]'
    login_button='[data-cy="login-button"]'

    username(user){
        cy.get(this.username_text).type(user)
    }

    password(pass){
        cy.get(this.password_text).type(pass) 
    }

    LoginButton(){
        cy.get(this.login_button).click()
    }
}
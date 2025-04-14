export class FormSubmissionElement{

    username_text = 'input[name="name"]'
    useremail_text = 'input[name="email"]'
    messages_text = '[name="message"]'
    submit_click = '[type="submit"]'

    username(user){
        cy.get(this.username_text).type(user)
    }

    useremail(email){
        cy.get(this.useremail_text).type(email)
    }

    messages(message){
        cy.get(this.messages_text).type(message)
    }

    submit(){
        cy.get(this.submit_click)
    }


}
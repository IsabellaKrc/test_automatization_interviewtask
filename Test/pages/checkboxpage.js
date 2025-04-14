export class CheckboxElements{

    checkbox = 'input[type="checkbox"]'


    checkboxcheck(){
        cy.get(this.checkbox).check()
        }

        checkboxuncheck(){
            cy.get(this.checkbox).uncheck()
            }
    
}
import {CheckboxElements} from '../../pages/checkboxpage'

const Check_page = new CheckboxElements

describe('checkbox interaction', function() {
    it('checkbox toggling', () => {
      cy.visit('http://localhost:3000/switch-interaction')
  
      Check_page.checkboxcheck()
      cy.contains('The switch is ON!')
      
  
      //switch is on - click - switch should be OFF
      Check_page.checkboxuncheck()
      cy.contains('The switch is OFF!')
      
    })
})
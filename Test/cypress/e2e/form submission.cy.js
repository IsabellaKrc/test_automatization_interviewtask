import { FormSubmissionElement } from '../../pages/formsubpage'

const Sub_Page = new FormSubmissionElement



describe('Form Submission', function() {
    beforeEach (() => {
      cy.visit('http://localhost:3000/form')
    })
  
    //Form Submission with missing data
    it('Form Submission with missing data - missing name', () => {
      Sub_Page.useremail('321@admin.cz')
      Sub_Page.messages('message')
      Sub_Page.submit()
      cy.contains('No data saved yet.')
    })
  
    it('Form Submission with missing data - missing email', () => {
      Sub_Page.username('admin')
      Sub_Page.messages('message')
      Sub_Page.submit()
      cy.contains('No data saved yet.')
    })
  
    it('Form Submission with missing data - missing message', () => {
        Sub_Page.username('admin')
        Sub_Page.useremail('321@admin.cz')
        Sub_Page.submit()
      cy.contains('No data saved yet.')
    })
  
    //Form submission - with valid data
    it('Form submission - with valid data', () => {
      cy.visit('http://localhost:3000/form')
      
      //input credentials
      Sub_Page.username('admino')//.as('name')
      Sub_Page.useremail('123@admin.cz')//.as('email')
      Sub_Page.messages('messagion')//.as('message')
      Sub_Page.submit()
  
      //check if on screen are the right credentials
      /*cy.get('@name')
        .get('@email')
        .get('@message')*/
      
    })
  })
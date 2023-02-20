describe('OpenApp', () => {
    beforeEach('Auth', ()=>{
      // open app
      cy.visit("http://localhost:3000/auth"); 
    })
    // name test
    it('findAuthForm',()=>{
      // find elemnt title in text
      cy.get('h5').should("have.text", "Sign In");
      // find elemnt and child
      cy.get('form').find('input')
      // find elemnt btn for
  
    })
    it("Sign Up", ()=>{
      cy.get('button').contains("Don't have an account? Sign Up").click()
      cy.scrollTo(0,200)
      cy.get('form')
      cy.get('input[name="firstName"]').type('Cypress');
      cy.get('input[name="lastName"]').type('Test');
      cy.get('input[name="email"]').type('Cypress@gmail.com');
      cy.get('input[name="password"]').type('helloCypress');
      cy.get('.MuiIconButton-label').click();
      cy.get('input[name="confirmPassword"]').type('helloCypress');
    })
    it("Sign In", ()=>{
        cy.get('button').contains("Sign In").click();
        cy.get('input[name="email"]').type('Cypress@gmail.com');
        cy.get('input[name="password"]').type('helloCypress');
        cy.get('.MuiIconButton-label').click();
        cy.get('button[type="submit"]').contains("Sign In").click();
    })
  })
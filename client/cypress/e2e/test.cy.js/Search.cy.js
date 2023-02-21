describe('Search', () => {
    beforeEach('search', ()=>{
      // open app
      cy.visit("http://localhost:3000/posts"); 
    })
    it("Sign In", ()=>{
        cy.get('button').contains("Sign In").click();
        cy.get('input[name="email"]').type('Cypress@gmail.com');
        cy.get('input[name="password"]').type('helloCypress');
        cy.get('.MuiIconButton-label').click();
        cy.get('button[type="submit"]').contains("Sign In").click();
    })
    it("create card", ()=>{
        cy.get('button').contains("Sign In").click();
        cy.get('input[name="email"]').type('Cypress@gmail.com');
        cy.get('input[name="password"]').type('helloCypress');
        cy.get('.MuiIconButton-label').click();
        cy.get('button[type="submit"]').contains("Sign In").click();
        cy.get("input[name='title']").type("Cypress");
        cy.get("textarea[name='message']").type("Cypress E2E test");
        cy.get("input[name='tags']").type("Cypress E2E test");
        cy.get("button").contains("Submit").click()
        // cy.get('.msg-body').first()
    })
 })
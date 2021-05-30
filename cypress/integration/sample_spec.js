describe('My First Test', () => {
    it('Visits the Photo Search App', () => {
      cy.visit('http://localhost:3000')
      cy.contains('Photo Search App');
      cy.contains('Search Pictures');
      cy.get('.input');
      cy.get('#submit');
      cy.get("input[type='text']").type('dog');
      cy.get("button[type='submit']").click();
      cy.get(':nth-child(1) > .card--image');
    })
});
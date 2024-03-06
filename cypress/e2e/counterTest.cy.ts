describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/');
    cy.get('h1').should('contain', 1);
    cy.contains('button', 'Increment Counter');
    cy.contains('button', 'Decrement Counter');
    cy.get('button').contains('Increment Counter').click();
    cy.get('h1').should('contain', 2);
    cy.get('button').contains('Decrement Counter').click();
    cy.get('h1').should('contain', 1);
  });
});

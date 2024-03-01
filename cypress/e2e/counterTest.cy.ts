describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/');
    cy.get('h1').should('have.length.greaterThan', 0);
    cy.contains('button', 'Increment Counter');
    cy.contains('button', 'Decrement Counter');
  });
});

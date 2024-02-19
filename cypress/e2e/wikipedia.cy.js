describe('Donate link test', () => {
  it('should redirect to donate.wikimedia.org', () => {
    cy.visit('https://en.wikipedia.org/');

    // Знаходимо посилання з текстом "Donate" та клікаємо на нього
    cy.contains('Donate').click({force: true});

    cy.wait(2000); // Зачекайте деякий час для завершення переходу

    // Перевіряємо, що URL містить "donate.wikimedia.org"
    cy.url().should('include', 'donate.wikimedia.org');
  });
});















/*
describe('My first test', () => {
  it('Visits sample website', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('type').click();

    cy.url().should('include', '/commands/actions');

    cy.get('.action-email')
      .type('hello@cypress.io')
      .should('have.value', 'hello@cypress.io');
  });
});
*/



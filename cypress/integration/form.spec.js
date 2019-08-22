import { useInputValue } from '../../src/Form';

describe('Form', () => {
  const input = "cheese";
  beforeEach(() => {
    cy.visit('/');
  });

  it('it focuses the input', () => {
    cy.focused().should('have.class', 'userInput');
  })

  it('accepts input', () => {
    cy.get('.userInput')
      .type(input)
      .should('have.value', input);
  })

  it('adds a new todo', () => {
    cy.get('.userInput')
      .type(input)
      .type('{enter}')
      .get('li')
      .should('have.length', 1)
  })

  it('marks completed todo', () => {
    cy.get('.userInput')
      .type(input)
      .type('{enter}')
      .get('li')
      .click()
      .should('have.css', 'text-decoration')
      .and('match', /line-through/)
  })

  it('accessibility check', () => {
    cy.injectAxe()
    cy.checkA11y()
  })

  // it.skip('calls useInputValue', () => {
  //   useInputValue = cy.stub()
  //   cy.get('.userInput')
  //     .type(input)
  //   expect(useInputValue).to.be.called

  // })
})

import { Hello } from '../../src/Hello';
import React from 'react';

describe('Hello component', () => {
  const name1 = 'Bob';
  const name2 = 'Judy';

  beforeEach(() => {
    cy.mount(<Hello name={name1} />);
  });

  it('accepts prop', () => {
    cy.contains(`Hello ${name1}!`);
  });

  it('changes state', () => {
    const stateToSet = { name: name2 };
    cy.get(Hello)
      .invoke('setState', stateToSet);
    cy.contains(`Hello ${name2}!`);
  });
});

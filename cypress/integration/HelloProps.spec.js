import { HelloProps } from '../../src/HelloProps';
import React from 'react';

describe('Hello component with props', () => {
  it('mounts with prop', () => {
    const nameProp = 'Bob'
    cy.mount(<HelloProps name={nameProp} />)
    cy.contains('Hello Bob!')
  })
})
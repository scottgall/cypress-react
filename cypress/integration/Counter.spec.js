import React from 'react'
import * as ReactDOM from 'react-dom';
window.ReactDOM = ReactDOM;
import CounterWithHooks from '../../src/Counter.jsx'

/* eslint-env mocha */
describe('CounterWithHooks component', function () {
  it('works', function () {
    cy.mount(<CounterWithHooks initialCount={3} />)
    cy.contains('3')
  })
})

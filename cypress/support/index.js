import './commands'
import 'cypress-axe'
import 'cypress-react-unit-test'

Cypress.on('window:load', win => {
  win.ReactDOM = window.ReactDOM || win.ReactDOM;
});
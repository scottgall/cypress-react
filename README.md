This README will introduce the [Cypress](https://www.cypress.io/) and go over some example tests on a React app.

# **What** is Cypress?
A JavaScript testing framework for writing all types of tests:
* End-toend tests
* Integration tests
* Unit tests

Cypress lets you to test anything that runs in the browser.

# **How** is Cypress different?
Tests run inside the browser in the same run loop as your app code.

# **Why** Cypress?
### ***Speed***
Running tests with most tools requires communication between 3 processes (WebDriver client, browser driver, & browser). With Cypress, there's only one process, the browser.

### ***Native Access***
Because Cypress operates within your application, you have access to all the same objects as your application code and can easily stub out functionality and programatically alter state instead of building up state through UI.

### ***Features***
* Time travel through Snapshots of your app at every event.
* Debug directly from dev tools.
* Automatic Waiting and retries.
* Built-in server mocking

<hr>

#### Unit testing React components
Install the [cypress-react-unit-test](https://github.com/bahmutov/cypress-react-unit-test) plugin.

> 
```
npm i cypress-react-unit-test --save-dev
```

Add the plugin to [`cypress/support/index.js`](./cypress/support/index.js)

> 
```javascript
import 'cypress-react-unit-test';
```

From your test file import your component.
>
```javascript
import { Hello } from '../../src/Hello';
```

Now you can use `cy.mount()` to mount your component in the browser, and the `cy.get()` command accepts React components in addition to selectors.



<hr>
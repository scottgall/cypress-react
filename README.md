This README introduces [Cypress](https://www.cypress.io/) and demonstrates testing a React app with the tool.

# **What** is Cypress?
A JavaScript testing framework for writing all types of tests:
* End-to-end tests
* Integration tests
* Unit tests

Cypress lets you to test anything that runs in the browser.

# **How** is Cypress different?
Tests run inside the browser in the same run loop as your app code (no Selenium/WebDriver).

# **Why** Cypress?
### ***Speed*** 🚄
Running tests with most tools requires communication between 3 remote3 processes (WebDriver client, browser driver, & browser). With Cypress, there's only one process, the ***browser***!

> *WebDriver architecture:*
![WebDriver architecture](https://applitools.com/blog/wp-content/uploads/2018/10/Screenshot-2018-10-19-21.33.55.png)


>*Cypress architecture:*<br>
![Cypress architecture](https://res.cloudinary.com/dmkdfvoqb/image/upload/v1566504929/Screen_Shot_2019-08-22_at_3.14.39_PM.png)

### ***Native Access*** 🔑
Because Cypress operates within your application, you have access to all the same objects as your application code and can easily stub out functionality and programatically alter state instead of building up state through UI.

### ***Features*** ✨
* Time travel through Snapshots of your app at every event.
* Debug directly from dev tools.
* Automatic Waiting and retries.
* Built-in server mocking.

***

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

From your [test file](./cypress/integration/Hello.spec.js) import your [component](./src/Hello.jsx).
>
```javascript
import { Hello } from '../../src/Hello';
```

Now you can use `cy.mount()` to mount your component in the browser, and the `cy.get()` command accepts React components in addition to selectors.



***
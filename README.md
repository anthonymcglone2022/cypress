# What is the cypress repository?

- A test automation suite containing UI and API test cases written with the Cypress framework
- Packages included allow an Allure report to be generated

## Prerequisites before running the tests

- Install [Cypress](https://docs.cypress.io/) making sure it installs `nodejs`, `npm` and `npx`
- Ensure the Allure packages in `package.json` are also installed (check with `npm ls` in the project folder)
- Run the [flask](https://github.com/anthonymcglone2022/flask) project
- Run the [postcodes](https://github.com/anthonymcglone2022/postcodes) project

## Running the tests

- Navigate into the top level directory
- Run command `npx cypress run --browser chrome --headed --reporter mocha-allure-reporter`
- See **Allure** report `allure generate allure-results --clean -o allure-report && allure open  allure-report` 

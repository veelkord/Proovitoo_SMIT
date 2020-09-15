# testcafe-cucumber smoke tests of IMDB Top Rated Movies

Set of tests to smoke test using testcafe and cucumberjs.

### How to run

1. Install typescript globally `npm i -g typescript`
1. Clone the repo
2. Install dependencies: `npm i`
3. Run tests in Chrome: `npm run prio1` or `npm run prio2` for priority 2 use cases
4. Run tests in IE: `npm run test:ie`

### Note

- It's likely that users of IMDB use IE, Testcafe was chosen because it supports IE
- This repo uses gherkin-testcafe, as testcafe does not support cucumber yet.
- Testcafe and Gherkin was used because of its feature file is easily readable for non-technical parties and can be used as a regression plan
- Typescript was used on top of JS, because it's ease of use and stability
- These tests are dockerized. Since Cucumber is used, a Testcafe docker image cannot be used
- PO can easily change the input parameters of the test by using the .feature file
- Typescript is used so that all code errors are discovered during the build phase
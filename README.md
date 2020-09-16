# testcafe-cucumber smoke tests of IMDB Top Rated Movies

Set of tests to smoke test using testcafe and cucumberjs.

### How to run

1. Install typescript globally `npm i -g typescript`
1. Clone the repo
2. Install dependencies: `npm i`
3. Run tests in Chrome: `npm run prio1` or `npm run prio2` for priority 2 use cases
4. Run tests in IE: `npm run test:ie`
5. Run tests via X phone emulator `npm run test:chrome:mobile`

### Note

- It's likely that users of IMDB use IE, Testcafe was chosen because it supports IE
- Testcafe and Gherkin was used, all testcases are easily readable from the .feature file
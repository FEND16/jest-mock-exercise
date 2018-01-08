# Jest ~ Mock & async

## Installation

```
git clone https://github.com/FEND16/jest-mock-exercise.git
cd jest-mock-exercise
yarn
```

## Running

Starts both the `json-server` and the test watch command

```js
yarn test:serve
```

### Exercise 1

**Write test cases for when the functions fail**

Use the code in this repo. Write test cases that test for example if one of the promises throws an error (`.catch`) or if you supply the wrong argument (or no argument) to the different functions. Try to figure out what could go wrong and test it.

 * [Jest ~ Async error handling](https://facebook.github.io/jest/docs/en/tutorial-async.html#error-handling)

## Exercise 2

**Call an API and unit test it**

Use an API you have used before or try some open free API. Use some code from an earlier project if you can. Just be sure to only use code that is pure vanilla and doesn't call the DOM. We want to test without the DOM at this stage.
  * Test if you can call the api and get the right result back.
  * Test the API by mocking it with `fetch-mock` or `jest.mock`.
  * Test for failing behavior.

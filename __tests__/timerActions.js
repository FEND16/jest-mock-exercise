/* Fake all setTimeout etc. We don't want to depend on the
 * event queue because it is unreliable. We don't want that in a test */
jest.useFakeTimers();

test('timeout to have been called', () => {
  const timerActions = require('../src/timerActions');
  timerActions.withTimeout();
  expect(setTimeout).toHaveBeenCalled();
  expect(setTimeout).toHaveBeenCalledTimes(1);
})

test('call all timeouts', () => {
  const timerActions = require('../src/timerActions');
  const fakeCallback = jest.fn();
  timerActions.withTimeout(fakeCallback);
  expect(fakeCallback).not.toHaveBeenCalled();
  jest.runAllTimers();
  expect(fakeCallback).toHaveBeenCalled();
})
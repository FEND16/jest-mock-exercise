/* Fake all setTimeout etc. We don't want to depend on the
 * event queue because it is unreliable. We don't want that in a test */
jest.useFakeTimers();

test('test first setTimeout', () => {
  const timerActions = require('../src/timerActions');
  timerActions.withTimeout();
  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
});

test('test all setTimeouts in function', () => {
  const timerActions = require('../src/timerActions');
  /* We don't need to check if the callback works only
   * if it is being called, we just use a mock function */
  const fakeCallback = jest.fn();

  /* First call, the callback should not have been called
   * because the timeout is 1000 */
  timerActions.withTimeout(fakeCallback);
  expect(fakeCallback).not.toBeCalled();

  /* Fast forward all timers and intervals */
  jest.runAllTimers();
  expect(fakeCallback).toBeCalled();
  expect(fakeCallback).toHaveBeenCalledTimes(1);
});

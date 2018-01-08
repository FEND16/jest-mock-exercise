/**
 * Gives you an example on how to test the actual DOM.
 * It involves some setup and is not so reliable. Jest
 * uses JSDOM to create a fake DOM.
 */
const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));

test('tests if DOM works', () => {
  document.body.innerHTML = `
    <div id="output">Not Hello!</div>
  `;
  require('../src/domActions');
  const output = document.getElementById('output');
  expect(output.textContent).toEqual('Not Hello!')
});

/*
 * Not working, ignore for now, or fix it :)
 */
test.skip('tests if div is being populated', () => {
  document.body.innerHTML = `
    <div id="output"></div>
  `;
  require('../src/domActions');
  const output = document.getElementById('output');
  return flushAllPromises()
    .then(() => {
      expect(output.textContent).not.toBe('');
    });
});
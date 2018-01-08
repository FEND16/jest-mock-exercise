const asyncActions = require('../src/asyncActions');
const asyncMockActions = require('../src/asyncMockActions');
const filterActions = require('../src/filterActions');
const fetchMock = require('fetch-mock');

/* jest.mock mocks the whole module, that means that we 
 * have to create fake functions to use instead of the actual
 * ones. Here I am returning a promise with my own fake
 * response like with fetchMock.
 */
jest.mock('../src/asyncMockActions', () => ({
  fetchData: () => {
    return Promise.resolve("My fake")
  }
}))

/* When testing async with jest, always return something
 * from the test */
test('fake implementation with jest.mock', () => {
  return asyncMockActions.fetchData()
    .then(data => {
      expect(data).toBe('My fake');
    })
})

test('fetches data from actual server', () => {
  return asyncActions.fetchData(asyncActions.url)
    .then(returnData => {
      expect(returnData).toBeDefined();
    })
})

test('fetches data with fetch-mock', () => {
  const fakeResponse = [{ "id": 50, "body": "My own comment" }]
  fetchMock.get(asyncActions.url, fakeResponse)
  return asyncActions.fetchData(asyncActions.url)
    .then(returnData => {
      expect(returnData).toEqual(fakeResponse);
    })
})

test('filter result from api', () => {
  return asyncActions.fetchData(asyncActions.url)
    .then(returnData => {
      expect(filterActions.filterById(returnData, 1)).toHaveLength(1);
    })
})

test('save data from api to localStorage', () => {
  return asyncActions.fetchAndStore(asyncActions.url)
    .then(() => {
      expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    })
})

afterEach(() => {
  fetchMock.restore();
})
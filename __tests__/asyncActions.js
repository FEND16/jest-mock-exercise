const asyncActions = require('../src/asyncActions');
const asyncMockActions = require('../src/asyncMockActions');
const filterActions = require('../src/filterActions');
const fetchMock = require('fetch-mock');

jest.mock('../src/asyncMockActions.js', () => ({
  fetchData: () => Promise.resolve("HAHA FAKE")
}))

test('test jest.mock', () => {
  return asyncMockActions
    .fetchData(asyncMockActions.url)
    .then(returnData => {
      expect(returnData).toBeDefined();
    })
})

test('should return response', () => {
  return asyncActions
    .fetchData(asyncActions.url)
    .then((returnData) => {
      expect(returnData).toBeDefined();
    })
});

test.skip('should return response', () => {
  return asyncActions
    .fetchData(asyncActions.url)
    .then((returnData) => {
      expect(filterActions.filterById(returnData,1))
        .toBeDefined();
    })
});

test('should return fake response', () => {
  fetchMock.get(asyncActions.url, [
    {
      id: 1,
      body: "Hej"
    }
  ])
  fetchMock.get("http://hej.com/example", {})
  return asyncActions
    .fetchData(asyncActions.url)
    .then((returnData) => {
      expect(returnData).toBeDefined();
    })
});

test('should return fake response', () => {
  return asyncActions
    .fetchAndStore(asyncActions.url)
    .then((returnData) => {
      expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    })
});

afterEach(() => {
  fetchMock.restore();
  fetchMock.reset();
});

afterAll(() => {

});
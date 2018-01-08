const filterActions = require('../src/filterActions');

test('should filter content', () => {
  const data = [
    {
      id: 1,
      body: "hej"
    },
    {
      id: 2,
      body: "inte hej"
    }
  ]
  expect(filterActions.filterById(data, 1)).toHaveLength(1);
});

const a = require('./a');
const b = require('./b');

jest.mock('./b');

test('a() calls b() with correct message', () => {
  a();
  expect(b).toHaveBeenCalledWith('Hello world');
});

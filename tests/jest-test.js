jest
  .dontMock('../client/meteor-jest-example.js')

/*
describe('sum', function() {
  it('adds 1 + 2 to equal 3', function() {
    var sum = require('../sum');
    expect(sum(1, 2)).toBe(3);
  });
});
*/


describe('displayUser', function() {
  it('displays a user after a click', function() {
    require('../client/meteor-jest-example.js')

    require('../packages/jest-test/jest-test.js')
    var jestTest = require('../packages/jest-test/exports.js')

    // Tell the mock function to automatically invoke
    // its callback with some data
    jestTest.sum.mockImplementation(function(val1, val2) {
      return 3
    })

    expect(jestTest.sum).toBeCalled()
    expect(jestTest.sum(1, 1)).toEqual(3)
  })
})

function sum (value1, value2) {
  return value1 + value2
}

JestTest = {
  sum: sum
}

// CommonJS compatibility
if ('undefined' !== typeof module) {
  module.exports = JestTest
}

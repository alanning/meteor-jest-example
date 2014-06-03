if (typeof Template !== 'undefined') {

  Template.hello.greeting = function () {
    return "Welcome to meteor-jest-example.";
  };

  Template.hello.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("Have some math", 
                    "1 + 1 = ", JestTest.sum(1, 1),
                    "2 * 2 = ", mult(2, 2) );
    }
  });

  function mult (val1, val2) {
    return val1 * val2
  }

}

var JestTest = require('../packages/jest-test/jest-test.js')
var myVar = JestTest.sum(1, 2);

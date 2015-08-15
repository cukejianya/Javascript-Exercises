console.log('\nSection | Strict Mode');//-------------------

function Person(name) { this.name = name;}
var ferdinand = Person("Ferdinand"); //Forgot new. Thus this.name is global
console.log(name);

//"use strict";
function  Person(name) { this.name = name; }
var ferdinand = Person("Ferdinand");
// → TypeError: Cannot set property 'name' of undefined.
// Do not think it works in nodejs.

console.log('\nSection | Testing');//-------------------

function Vector(x, y) {
  this.x = x;
  this.y = y;
}

Vector.prototype.plus = function(otherVector){
  return new Vector(this.x + otherVector.x, this.y + otherVector.y);
};

function testVector() {
  var p1 = new Vector(10, 20);
  var p2 = new Vector(-10, 5);
  var p3 = p1.plus(p2);

  if (p3.x !== 0) return "fail: x property";
  if (p3.y !== 25) return "fail: y property";

  return "everything OK!";
}
console.log(testVector());

console.log('\nSection | Exceptions');//-------------------

function promptDirection(question) {
  var result = prompt(question, "");
  if (result.toLowerCase() == 'left') return 'L';
  if (result.toLowerCase() == 'right') return 'R';
  throw new Error('Invalid direction: '+ result);
}

function look() {
  if (promptDirection('Which way?') == 'L')
    return 'a house';
  else
    return 'two angry bears';
}

try {
  console.log('You see', look());
} catch (error) {
  console.log('Something went wrong: ' + error);
}

console.log('\nSection | Cleaning Up After Exceptions');//-------------------
var context = null;

function withContextWrongWay(newContext, body) {
  var oldContext = context;
  context = newContext;
  var result = body(); //if body() throws exception context will not be set back to oldContext
  context = oldContext;
  return result;
}

function withContext(newContext, body) {
  var oldContext = context;
  context = newContext;
  try {
    return body();
  } finally {
    context = oldContext;
  }
}

try {

  withContext(5, function() {
    if (context < 10)
      throw new Error('Not enough context!');
  });

} catch (e) {

  console.log('Ignoring: ' + e);
}
// --> Ignoring: Error: Not enough context!

console.log(context);
// --> null

console.log('\nSection | Selective Catching');//-------------------

// for (;;) {
//   try {
//     var dir = promtDirection('Where?'); // <- typo! Misspelled prompt
//     console.log('You chose ', dir);
//     break;
//   } catch (e) {
//     console.log('Not a valid direction. Try again.');
//   }
// }

function InputError(message) {
  this.message = message;
  this.stack = (new Error()).stack;
}
InputError.prototype = Object.create(Error.prototype);
InputError.prototype.name = 'InputError';

// var prompt = require('prompt');
//
// prompt.start();

function promptDirection(question) {
  //var result = prompt(question, '');
  var result = 'up';
  if (result.toLowerCase() == 'left') return 'L';
  if (result.toLowerCase() == 'right') return 'R';
  throw new InputError("Invalid direction: " + result);
}

for (;;) {
  try {
    var dir = promptDirection('Where?');
    console.log('You chose ', dir);
    break;
  } catch(e) {
    if (e instanceof InputError) {
      console.log('Not a valid direction. Try again.');
      break;
    } else {
      throw e;
    }
  }
}

console.log('\nSection | Assertions');//-------------------

function AssertionFailed(message) {
  this.message = message;
}
AssertionFailed.prototype = Object.create(Error.prototype);

function assert(test, message) {
  if (!test)
    throw new AssertionFailed(message);
}

function lastElement(array) {
  assert(array.length > 0, 'empty array in lastElement');
  return array[array.length -1];
}

console.log('\nSection | Assertions');//-------------------


// ------Questions-----
var question = '\nQuestion 1 - Retry';
//Say you have a function primitiveMultiply that, in 50 percent of cases, multiplies two numbers and in the other 50 percent raises an exception of type MultiplicatorUnitFailure. Write a function that wraps this clunky function and just keeps trying until a call succeeds, returning the result. Make sure you handle only the exceptions you are trying to handle.
console.log(question);

function MultiplicatorUnitFailure(message) {
  this.message = message;
  this.stack = (new Error()).stack;
}

MultiplicatorUnitFailure.prototype = new Object(Error.prototype);
MultiplicatorUnitFailure.prototype.name = 'MultiplicatorUnitFailure';

function primtiveMultiply(x, y) {
  var percentage = Math.random()*2;
  if (percentage < 1) {
    return x*y;
  } else {
    throw new MultiplicatorUnitFailure('The system crashed');
  }
}

for(;;) {
  try {
    var product = primtiveMultiply(4,5);
    console.log(product);
    break;
  } catch(e) {
    if (e instanceof MultiplicatorUnitFailure) {
      console.log('Error! Error! Need to multiply again.');
    }
  }
}



var question = '\nQuestion 2 - The Locked Box';
////Consider the following (rather contrived) object:
var box = {
  locked: true,
  unlock: function() { this.locked = false; },
  lock: function() { this.locked = true; },
  _content: [],
  get content () {
    if (this.locked) throw new Error("Locked!");
    return this._content; },
  withBoxUnlocked: function (f) {
    this.locked = false;

  }
};

//It is a box, with a lock. Inside is an array, but you can get at it only when the box is unlocked. Directly accessing the _content property is not allowed.
//Write a function called withBoxUnlocked that takes a function value as argument, unlocks the box, runs the function, and then ensures that the box is locked again before returning, regardless of whether the argument function returned normally or threw an exception.
console.log(question);

function withBoxUnlocked(f) {
  box.unlock();
  try {
    f.call();
  } finally {
    box.lock();
  }
}

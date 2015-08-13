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

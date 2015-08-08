console.log('\nSection | Strict Mode');//-------------------

function Person(name) { this.name = name;}
var ferdinand = Person("Ferdinand"); //Forgot new. Thus this.name is global
console.log(name);

"use strict";
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

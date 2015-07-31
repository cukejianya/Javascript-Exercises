function reduce(array, combine, start) {
  current = start;
  for(var i = 0; i < array.length; i++) {
    current = combine(current, array[i]);
  }
  return current;
}

function logEach(array) {
  for(var i = 0; i < array.length; i++)
    console.log(array[i]);
}

function forEach(array, action) {
  for(var i = 0; i < array.length; i++)
    action(array[i]);
}

function filter(array, test) {
  passed = [];
  for(var i =0; i < array.length; i++){
    if ( test(array[i]) )
      passed.push(array[i]);
  }
  return passed;
}

function map(array, transform) {
  mapped = [];
  for(var i=0; i < array.length; i++) {
    mapped.push( transform(array[i]) );
  }
  return mapped;
}

// ------Questions-----
//Question 1 - Flattening
// Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the input arrays.

var arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
reduce(arrays, function(a, b) { return Array.prototype.concat(a,b);} , []);
// → [1, 2, 3, 4, 5, 6]

//Question 2 - Mother-child age difference
// Using the example data set from this chapter, compute the average age difference between mothers and children (the age of the mother when the child is born). You can use the average function defined earlier in this chapter.
// Note that not all the mothers mentioned in the data are themselves present in the array. The byName object, which makes it easy to find a person’s object from their name, might be useful here.
var ancestry = JSON.parse( require('./ancestry.js') );

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});
// Your code here.
age = [];
for (var child in byName) {
  mother = byName[child].mother;
  if ( !!(byName[mother]) ) {
    age.push(byName[child].born - byName[mother].born);
  }
}
answer = average(age);
console.log(answer);

//Question 3 - Historical life expectancy
// When we looked up all the people in our data set that lived more than 90 years, only the latest generation in the data came out. Let’s take a closer look at that phenomenon.
//Compute and output the average age of the people in the ancestry data set per century. A person is assigned to a century by taking their year of death, dividing it by 100, and rounding it up, as in Math.ceil(person.died / 100).
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

// Your code here.

//Question 4 - Every and then some
//Arrays also come with the standard methods every and some. Both take a predicate function that, when called with an array element as argument, returns true or false. Just like && returns a true value only when the expressions on both sides are true, every returns true only when the predicate returns true for all elements of the array. Similarly, some returns true as soon as the predicate returns true for any of the elements. They do not process more elements than necessary—for example, if some finds that the predicate holds for the first element of the array, it will not look at the values after that.
//Write two functions, every and some, that behave like these methods, except that they take the array as their first argument rather than being a method.

// Your code here.

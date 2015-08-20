console.log('\nSection 2| Creating A Regular Expression');//-------------------

var re1 = new RegExp("abc");
var re2 = /[abc]/;

console.log('\nSection 3 | Testing For Matches');//-------------------

console.log(re1.test("abcde")); //true
console.log(re1.test("edabc")); //true
console.log(re1.test("abxde")); //false
console.log(re1.test("edcba")); //false

console.log('\nSection 4 | Matching A Set Of Characters');//-------------------

//Any characters within brackets makes the regular expression see if any of characters matches in an expression tested
// Periods and other special characters loses their special meaning within square brackets

console.log(re2.test("edcba")); //true
console.log(re2.test("abxde")); //true

// List of built-in shortcuts
// \d = [0-9]
// \w = [a-Z]
// \s = Any whitespace(space, tab, newline, and similar)
// \D is not [0-9]
// \W is not [a-Z]
// \S is not a whitespace
// . = Any character other than a newline

// Use (^) to match characters except the ones in the set
var notBinary = /[^01]/;

console.log("1100100010100110 is not a binary: "+notBinary.test("1100100010100110"));

console.log("1100100010200110 is not a binary: "+notBinary.test("1100100010200110"));

console.log('\nSection 5 | Repeating Parts Of A Pattern');//-------------------

// (+) allows you to match repeated characters
// (*) allows the same thing as well as zero matches
console.log(/'\d+'/.test("'123'")); //true
console.log(/'\d+'/.test("''"));    //false
console.log(/'\d*'/.test("'123'")); //true
console.log(/'\d*'/.test("''"));    //true

//A question mark makes a part of ta pattern "optional" (zero or one time)
var neighbor = /neighbou?r/;
console.log(neighbor.test("neighbour"));
console.log(neighbor.test("neighbor"));

// {} Allows you indicate the precise number times a character needs to appear. {2, 4} means element can occur at least twice and at most four times. {5,} Mean five or more times.

var dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTime.test("30-1-2003 8:45")); //true

console.log('\nSection 6 | Grouping Subexpressions');//-------------------

//Paranthesis makes everything in it one thing and (i) after the expression ingores cases
var cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test("Boohoooohoohooo")); //true

console.log('\nSection 7 | Matches And Groups');//-------------------

var match = /\d/.exec("one two 100");
console.log(match); //[ '1', index: 8, input: 'one two 100' ]

match = /\d+/.exec("one two 100");
console.log(match); //["100"]
console.log(match.index); // 8

// String's match method
console.log("one two 100".match(/two/));

var quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'hello' "));

console.log('\nSection 9 | Word And String Boundaries');//-------------------

// \b is a word boundary
console.log(/cat/.test("concatenate"));
console.log(/\bcat\b/.test("cat"));
console.log(/\bcat\b/.test("con cat enate"));
console.log(/\bcat\b/.test("concatenate"));

console.log('\nSection 10 | Choice Patterns');//-------------------

var animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
console.log(animalCount.test("15 pigs")); //true
console.log(animalCount.test("1549 chicken")); //true
console.log(animalCount.test("10000 cows")); //true
console.log(animalCount.test("15 pigcows")); //false

console.log('\nSection 11 | Choice Patterns');//-------------------

var numbers = /\b([01]+b|\d+|[\da-f]h)\b/;

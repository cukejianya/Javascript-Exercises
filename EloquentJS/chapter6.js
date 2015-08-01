// Methods
function speak(line) {
  console.log("The " + this.type + " rabbit says '" +
              line + "'");
}

var whiteRabbit = {type: "white", speak: speak};
var fatRabbit = {type: "fat", speak: speak};

speak.apply(fatRabbit, ['Burp!']); //Arguments are arrays for apply
speak.call(whiteRabbit, "Oh my."); //Arguments are regular for call

// Constructors
function Rabbit(type) {
  this.type = type;
  this.speak = function(line) {
    console.log("The " + this.type + " rabbit says'" + line + "'");
  };
}

var killerRabbit = new Rabbit('killer');
killerRabbit.speak("Die");

//Prototype
// Objects have to type of properties: Enumerable and Nonenumerable.
//Not taking to account the above statement.
map = {
  'pizza': 0.069,
  'touchedTree': -0.081
};

Object.prototype.nonsense = 'hi';
for (var name in map)
  console.log(name); //nonsense appears in map

console.log('toString' in map); //true

//Taking above statement into account
delete Object.prototype.nonsense;

Object.defineProperty(Object.prototype, 'nonsense', {enumerable: false, value: 'hi'});

for (var name in map)
  console.log(name); //nonsense does not appear

console.log('nonsense' in map); //true
console.log(map.hasOwnProperty(nonsense)); //false
console.log(map.hasOwnProperty('pizza')); //true

//To remove all prototypes from a object you can pass null to a new object

var map = Object.create(null);
console.log("toString" in map); //false. There are not prototypes

//Setters and Getters

var pile = {
  elements: ["eggshell", "orange peel", "worm"],
  get height() {
    return this.elements.length;
  },
  set height(value) {
    return "Sorry. Height is unmmutable.";
  }
};

Object.defineProperty( pile.prototype, 'hey', { get: function() {return this.element;} } );

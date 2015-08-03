console.log('Section | Methods');//-------------------
function speak(line) {
  console.log("The " + this.type + " rabbit says '" +
              line + "'");
}

var whiteRabbit = {type: "white", speak: speak};
var fatRabbit = {type: "fat", speak: speak};

speak.apply(fatRabbit, ['Burp!']); //Arguments are arrays for apply
speak.call(whiteRabbit, "Oh my."); //Arguments are regular for call

console.log('Section | Constructors');//-------------------
function Rabbit(type) {
  this.type = type;
  this.speak = function(line) {
    console.log("The " + this.type + " rabbit says'" + line + "'");
  };
}

var killerRabbit = new Rabbit('killer');
killerRabbit.speak("Die");

console.log('Section | Prototype');//-------------------
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

console.log('Section | Laying Out a Table');//-------------------

function rowHeights(rows) {
  return rows.map(function(row){
    return row.reduce(function(max, cell) {
        return Math.max(max, cell.minHeight());
    }, 0);
  });
}

function colWidths(rows) {
  return rows[0].map(function(_, i) {
    return rows.reduce(function(max, row) {
      return Math.max(max, row[i].minWidth());
    });
  });
}

//To Draw Table

function drawTable(rows) {
  var heights = rowHeights(rows);
  var widths = colWidths(rows);

  function drawLine(blocks, lineNo) {
    return blocks.map( function(block) {
      return block[lineNo];
    }).join(' ');
  }
}

function drawRow(row, rowNum) {
  var blocks = row.map( function(cell, colNum) {
    return cell.draw(widths[colNum], heights[rowNum]);
  });
  return blocks[0].map(function(_, lineNo) {
    return drawLine(blocks, lineNo);
  }

  return rows.map(drawRow).join("\n")
}

console.log('Section | Setters and Getters');//-------------------

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

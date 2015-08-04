console.log('Section | Methods');//-------------------
function speak(line) {
  console.log("The " + this.type + " rabbit says '" +
              line + "'");
}

var whiteRabbit = {type: "white", speak: speak};
var fatRabbit = {type: "fat", speak: speak};

speak.apply(fatRabbit, ['Burp!']); //Arguments are arrays for apply
speak.call(whiteRabbit, "Oh my."); //Arguments are regular for call

console.log('\nSection | Constructors');//-------------------
function Rabbit(type) {
  this.type = type;
  this.speak = function(line) {
    console.log("The " + this.type + " rabbit says'" + line + "'");
  };
}

var killerRabbit = new Rabbit('killer');
killerRabbit.speak("Die");

console.log('\nSection | Prototype');//-------------------
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

console.log('\nSection | Laying Out a Table');//-------------------

var mountains = require('./mountains.js');

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
    }, 0);
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


  function drawRow(row, rowNum) {
    var blocks = row.map( function(cell, colNum) {
      return cell.draw(widths[colNum], heights[rowNum]);
    });

    return blocks[0].map(function(_, lineNo) {
      return drawLine(blocks, lineNo);
    }).join('\n');
  }
  return rows.map(drawRow).join("\n");
}

function repeat(string, times) {
  var result = '';
  for (var i = 0; i < times; i++)
    result += string;
  return result;
 }

 function TextCell(text) {
   this.text = text.split('\n');
 }

TextCell.prototype.minWidth = function() {
  return this.text.reduce(function (width, line) {
    return Math.max(width, line.length);
  }, 0);
};

TextCell.prototype.minHeight = function() {
  return this.text.length;
};

TextCell.prototype.draw = function(width, height) {
  var result = [];
  for ( var i = 0; i < height; i++) {
    var line = this.text[i] || '';
    result.push(line + repeat(' ', width - line.length));
  }
  return result;
};

//checkboard
console.log('--Checker Board');
var rows = [];
for (var i = 0; i < 5; i++) {
  var row = [];
  for (var j = 0; j < 5; j++) {
    if ((j + i ) % 2 === 0) {
      row.push(new TextCell("##"));
    } else {
      row.push(new TextCell('  '));
    }
  }
  rows.push(row);
}
console.log('Before drawtable\n'+rows);
console.log('After drawtable\n'+drawTable(rows));
//---end of checkboard

function UnderlinedCell(inner) {
  this.inner = inner;
}
UnderlinedCell.prototype.minWidth = function() {
  return this.inner.minWidth();
};
UnderlinedCell.prototype.minHeight = function() {
  return this.inner.minHeight() + 1;
};
UnderlinedCell.prototype.draw = function(width, height) {
  return this.inner.draw(width, height-1).concat([repeat('-', width)]);
};
function dataTable(data) {
  var keys = Object.keys(data[0]);
  var headers = keys.map(function(name) {
    return new UnderlinedCell(new TextCell(name));
  });
  var body = data.map(function(row) {
    return keys.map(function(name) {
      return new TextCell(String(row[name]));
    });
  });
  return [headers].concat(body);
}
console.log(drawTable(dataTable(mountains)));

console.log('\nSection | Setters and Getters');//-------------------

var pile = {
  elements: ["eggshell", "orange peel", "worm"],
  get height() {
    return this.elements.length;
  },
  set height(value) {
    return "Sorry. Height is unmmutable.";
  }
};

Object.defineProperty( TextCell.prototype,  'heightProp', {
  get: function() {return this.text.length;}
});

var cell = new TextCell("no\nway\nJose");
console.log(cell.heightProp);

console.log('\nInheritance');//-------------------
function RTextCell(text) {
  TextCell.call(this, text);
}
RTextCell.prototype = Object.create(TextCell.prototype);
RtextCell.prototype.draw = function(width, height) {
  var result = [];
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || "";
    result.push(repeat(' ', width - line.length) + line);
  }
  return result;
};

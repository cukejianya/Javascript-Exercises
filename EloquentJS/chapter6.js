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
debugger;

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
      var value = row[name];
      return new TextCell(String(value));
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

console.log('\nSection | Inheritance');//-------------------
function RTextCell(text) {
  TextCell.call(this, text);
}
RTextCell.prototype = Object.create(TextCell.prototype);
RTextCell.prototype.draw = function(width, height) {
  var result = [];
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || "";
    result.push(repeat(' ', width - line.length) + line);
  }
  return result;
};

function dataTable2(data) {
  var keys = Object.keys(data[0]);
  var headers = keys.map(function(name) {
    return new UnderlinedCell(new TextCell(name));
  });
  var body = data.map(function(row) {
    return keys.map(function(name) {
      var value = row[name];
      if (typeof value == "number")
        return new RTextCell(String(value));
      else {
        return new TextCell(String(value));
      }
    });
  });
  return [headers].concat(body);
}
console.log(drawTable(dataTable2(mountains)));

console.log('\nSection | Instance Of');//-------------------
console.log("RTextCell(A) is a instance of RTextCell\n"+ (new RTextCell("A") instanceof RTextCell) );
console.log("RTextCell(A) is a instance of TextCell\n"+(new RTextCell("A") instanceof TextCell) );
console.log("TextCell(A) is a instance of RTextCell\n"+(new TextCell("A") instanceof RTextCell) );

// ------Questions-----
var question = '\nQuestion 1 - A Vector Type';
//Write a constructor Vector that represents a vector in two-dimensional space. It takes x and y parameters (numbers), which it should save to properties of the same name.

//Give the Vector prototype two methods, plus and minus, that take another vector as a parameter and return a new vector that has the sum or difference of the two vectors’ (the one in this and the parameter) x and y values.

//Add a getter property length to the prototype that computes the length of the vector—that is, the distance of the point (x, y) from the origin (0, 0).
console.log(question);

// Your code here.
function Vector(x, y) {
  this.x = x;
  this.y = y;
}
Vector.prototype.plus = function (otherVector) {
  return new Vector(this.x + otherVector.x, this.y + otherVector.y);
};
Vector.prototype.minus = function (otherVector) {
  return new Vector(this.x - otherVector.x, this.y - otherVector.y);
};

Object.defineProperty( Vector.prototype, 'length', {
  get: function() { return Math.sqrt(this.x*this.x + this.y*this.y) }
})


console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5

var question = '\nQuestion 2 - Another Cell';
//Implement a cell type named StretchCell(inner, width, height) that conforms to the table cell interface described earlier in the chapter. It should wrap another cell (like UnderlinedCell does) and ensure that the resulting cell has at least the given width and height, even if the inner cell would naturally be smaller.
console.log(question);
function StretchCell(inner, width, height) {
  this.inner = inner;
  this.wid = width;
  this.hgt = height;
}

StretchCell.prototype.minWidth = function () {
  return Math.max(this.inner.minWidth(), this.wid);
}
StretchCell.prototype.minHeight = function () {
  return Math.max(this.inner.minHeight(), this.hgt)
}
StretchCell.prototype.draw = function(width, height) {
  return this.inner.draw(width, height-1).concat([repeat(' ', width)]);
}

var sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
// → 3
console.log(sc.minHeight());
// → 2
console.log(sc.draw(3, 2));
// → ["abc", "   "]

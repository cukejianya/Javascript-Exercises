function linCos(base, rotation) {
  var period = base * 2;
  var phase = rotation % period;
  var distance = Math.abs(base - phase);
  return distance*Math.sign(Math.cos(Math.PI / period * rotation));
}

function linSin(base, rotation) {
  var period = base * 2;
  var phase = rotation % period;
  var distance = base - Math.abs(phase - base);
  return distance*Math.sign(Math.sin(Math.PI / period * rotation));
}

function Coord(num) {
  for (var i = 0; i < num*4; i++) {
    console.log(linCos(num, i), linSin(num, i));
  }
}

Coord(1);

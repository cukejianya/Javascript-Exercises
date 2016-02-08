var domify = require('domify');

function Widget() {
  if (!(this instanceof Widget)) {
    return new Widget();
  }
  this.html = domify('<div>Hello <span class="name"></span>!</div>');
}

Widget.prototype.setName = function(str) {
  this.html.querySelector(".name").textContent = str;
}

Widget.prototype.appendTo = function(target){
  target.appendChild(this.html);
}

module.exports = Widget;

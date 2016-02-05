var domify = require('domify');

function Widget() {
  that = this;
  this.html = domify('<div>Hello <span class="name"></span>!</div>');

  this.setName = function(str) {
    that.html.querySelector(".name").textContent = str;
  }

  this.appendTo = function(target){
    target.appendChild(that.html);
  };

}

module.exports = Widget

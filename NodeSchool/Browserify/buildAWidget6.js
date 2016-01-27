var domify = require('domify');

function Widget() {
  this = that;
  this.html = '<div>Hello <span class="name"></span>!</div>';

  this.setName = function(str) {
    var html = that.html.split('name')
    that.html = html[0]+str+html[1]
  }

  this.append = function(target){
    
  };

  return new Widget();
}

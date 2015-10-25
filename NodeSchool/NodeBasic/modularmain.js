var fsfilter = require('./modularFilteredLS.js');

fsfilter(process.argv[2], process.argv[3], function(err, data){
  if(err)
    return console.error('There was an error:', err);
  data.forEach( function(a) { console.log(a) } );
});

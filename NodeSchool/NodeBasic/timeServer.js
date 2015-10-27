var net = require('net');
var server = net.createServer(function (socket) {
  var dateStr = "";
  var dateArr;
  var date = new Date();

  dateArr = [date.getFullYear(), '-',
  date.getMonth()+1, '-',
  date.getDate(), ' ',
  date.getHours(), ':',
  date.getMinutes()]
  for (var i = 0; i < 9; i+=2) {
    dateArr[i] = dateArr[i].toString()
    if (dateArr[i].length == 1) {
      dateArr[i] = '0'+dateArr[i];
    }
  }
  dateStr = dateArr.join('')+'\n';
  socket.end(dateStr);
})
server.listen(process.argv[2]);

String.prototype.repeatify = String.prototype.repeatify || function(num) {
  var str = '';
  for(var i = 0; i < num; i++) {
    str += this.valueOf();
  }
  return str;
};

Number.prototype.pad = function(str, width) {
    str = str || "0";
    width = width || 2;

    len = this.valueOf().toString().length;
    width -= len;
    return str.repeatify(width) + this;
};

function validate(time) {
    colons = timer.split(":");
    digits = (!isNaN());
}

function timer(time) {
    time = time.split(":");

    hr = parseInt(time[0]);
    min = parseInt(time[1]);
    sec = parseInt(time[2]);
    msec = 100

    //console.log(hr+' '+min+' '+sec);
    var go = setInterval(function() {
        process.stdout.clearLine();
        process.stdout.cursorTo(0);
        msec -= 1
        process.stdout.write(hr.pad()+":"+min.pad()+":"+sec.pad()+":"+msec.pad());
        if (msec < 1) {
            if (sec < 1) {
                if (min < 1) {
                    if (hr < 1) {
                        clearInterval(go);
                        console.log("\nDone!");
                    } else {
                        hr--;
                        min = 59;
                    }
                } else {
                    min--;
                    sec = 59;
                }
            } else {
                sec--;
                msec = 100;
            }
        }
    }, 10);
}

time = process.argv.slice(2,3).pop()
timer(time);

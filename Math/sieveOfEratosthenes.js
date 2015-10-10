var findAllPrimes = function(num) {

    array = Array.apply(null, Array( Math.floor(num/2) ) ).map(
        function (_, i) {
            if (i === 0) {return 2;} else {return 2*i+1;}
        }
    );

    ret_ar = [];
    x = 2;
    while (x <= array[array.length-1]) {
        array = array.filter( function(i)
            {
                if (i%x !== 0) { return i; }
            }
        );
        ret_ar.push(x);
        x = array[0];
    }

    return ret_ar;
};



var num = process.argv.slice(2);
//console.log(findAllPrimes(num));

exports.findAllPrimes = findAllPrimes;


function reverseNum () {
    var num = 30040203402;
    //console.log(num);
    function howBig () {
        n = 10;
        while (num > n) {
            n = n*10;
    
}
        n = n/10;
        return n;
    }
    var n = howBig();
    var N = Math.log(n)/Math.log(10);
    console.log(n);
    console.log(N);
    var arrayNum = [];
    var rNum = 0;
    for (i=0; i <= N; i++) {
        var digit = Math.floor(num/(Math.pow(10, N-i)));
        //console.log(digit);
        var k = 0;
        while (k < i) {
         digit  = digit - arrayNum[k]*Math.pow(10, i-k);
         ++k;
        }
        console.log(digit);
        arrayNum.push(digit);
        rNum = rNum + digit * Math.pow(10, i);
        //console.log(arrayNum);
    }
    console.log("We reversed the number from "+ num +" t0 "+ rNum);
}
reverseNum();

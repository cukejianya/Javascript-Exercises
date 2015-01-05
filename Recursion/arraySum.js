var i = 0;
var sum = 0;
function arraySum (n) {
	if (i < n.length) {
	    sum = sum+n[i];
	    i++;
	    //console.log(sum + " <--This is the "+i+"th sum.");
	    arraySum(n);
	}
	return sum;
}
var Ary = [1, 2, 3, 4, 5, 7];
console.log(arraySum(Ary));